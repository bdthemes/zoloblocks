import { getLocaleData, setLocaleData } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { usePrevious, createHigherOrderComponent } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

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
        const { name, attributes, setAttributes } = props;
        const { content="" } = attributes;

        const previousContent = usePrevious(content);

        useEffect(() => {
			if (name === 'core/paragraph' && content?.startsWith('/zoloai:')) {
                console.log('AI');
                setAttributes({ content: content.replace('/zoloai:', '') });
            }
        }, [name, previousContent, content]);

        return <OriginalComponent {...props} />;
    }

    return ZoloParagraphAI;
}, 'withZoloAI');

addFilter('editor.BlockEdit', 'zolo/open-popup', withZoloAI);
