import { getLocaleData, setLocaleData } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useState, useEffect } from '@wordpress/element';
import { usePrevious, createHigherOrderComponent } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';

import { TextEffect } from '../../../../controls/animations/text-effects';
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
        const { reset, setPrompt, requestAI } = useDispatch('zoloai/popup');
        const { prompt, response, loading } = useSelect((select) => {
            const { getPrompt, getResponse, isLoading } = select('zoloai/popup');
            return {
                prompt: getPrompt(),
                loading: isLoading(),
                response: getResponse(),
            };
        });

        // State for tracking processed client IDs
        const [processedClientIds, setProcessedClientIds] = useState([]);
    const { insertBlocks, replaceBlocks, updateBlockAttributes } = useDispatch('core/block-editor');

        useEffect(() => {
            // console.log('name', name);
            if (
                (name === 'core/paragraph' ||
                    name === 'core/heading' ||
                    name === 'zolo/advanced-paragraph' ||
                    name === 'zolo/advanced-heading') &&
                content?.includes('/zoloai:') && // Check if the substring exists
                !processedClientIds.includes(clientId) // Prevent processing the same block
            ) {

                const handleKeyDown = (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        event.stopPropagation();
                        //prevent to the new line

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
                // console.log('response.content', response.content);
                const filteredContent = response.content.replace(/(?:\r\n|\r|\n)/g, '<p>');
                const parsedBlocks = wp.blocks.rawHandler({ HTML: filteredContent });
                const newBlock = wp.blocks.createBlock(name, {
                    content: filteredContent,
                }); 
                if (parsedBlocks.length) {
                    console.log('Replacing selected content with:', response?.content);
                    console.log('clientId', clientId);
                    // Replace the block content with the AI response to zolo/advanced-paragraph
    replaceBlocks(clientId, [newBlock]);
                }

                // Reset the prompt and response
                reset();
            }
        }, [content, clientId, processedClientIds, requestAI, setPrompt, response?.content, setAttributes, previousContent, loading]);

        // Update the content to "Processing..." during loading
        if (loading && processedClientIds.includes(clientId)) {
            return (
                <TextEffect className="inline-flex" per="char" trigger="hover" variants={{ opacity: [0, 1], translateY: [10, 0] }}>
                    Processing...
                </TextEffect>
            );
        }
        return <OriginalComponent {...props} />;

    }

    return ZoloParagraphAI;
}, 'withZoloAI');

addFilter('editor.BlockEdit', 'zolo/open-popup', withZoloAI);
