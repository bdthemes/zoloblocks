import { getLocaleData, setLocaleData } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useState, useEffect } from '@wordpress/element';
import { usePrevious, createHigherOrderComponent } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Change Paragraph block placeholder.
 */
const localeData = getLocaleData();
const localeDefault = 'Type / to choose a block';
const localeTranslated = localeData && typeof localeData[localeDefault] !== 'undefined' ? localeData[localeDefault] : localeDefault;

setLocaleData(
    {
        [localeDefault]: [`${localeTranslated}... or Type \`/zoloai:\` for AI`],
    },
    'default'
);

/**
 * Listen for `/zoloai:` inside an empty paragraph block.
 * And open the Zolo Popup.
 *
 * @param {Function} OriginalComponent Original component.
 *
 * @return {Function} Wrapped component.
 */
const withZoloAI = createHigherOrderComponent((OriginalComponent) => {
    function ZoloParagraphAI(props) {
        const { name, attributes, setAttributes, clientId } = props;
        const { content = '' } = attributes;

        const previousContent = usePrevious(content);
        const {reset, setPrompt, requestAI } = useDispatch('zoloai/popup');
        const {prompt, response } = useSelect((select) => {
            const { getPrompt, getResponse } = select('zoloai/popup');
            return {
                prompt: getPrompt(),
                response: getResponse(),
            };
        });

        // State for tracking processed client IDs
        const [processedClientIds, setProcessedClientIds] = useState([]);

        useEffect(() => {
            if (
                name === 'core/paragraph' &&
                content?.startsWith('/zoloai:') &&
                !processedClientIds.includes(clientId) // Prevent processing the same block
            ) {
                const handleKeyDown = (event) => {
                    if (event.key === 'Tab') {
                        event.preventDefault();
                        const cleanedContent = content.replace('/zoloai:', '').trim();
                        // Set the AI prompt and request response
                        setPrompt(cleanedContent);
                        requestAI();
                        setProcessedClientIds((ids) => [...ids, clientId]); // Mark clientId as processed
                    }
                };

                document.addEventListener('keydown', handleKeyDown);

                return () => {
                    document.removeEventListener('keydown', handleKeyDown);
                };
            }

            // Replace content for the current block only if a response is available
            if (response && response.content && processedClientIds.includes(clientId)) {

                // Remove clientId from the processed list to allow further edits
                setProcessedClientIds((ids) => ids.filter((id) => id !== clientId));
                setAttributes({ content: response.content });
                reset();

            }
        }, [content, clientId, processedClientIds, requestAI, setPrompt, response?.content, setAttributes, previousContent]);

        return <OriginalComponent {...props} />;
    }

    return ZoloParagraphAI;
}, 'withZoloAI');

addFilter('editor.BlockEdit', 'zolo/open-popup', withZoloAI);
