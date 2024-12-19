import { addFilter } from '@wordpress/hooks';
import { useEffect } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Open Zolo Popup when `Ctrl + Shift + /` is pressed.
 *
 * @param {Function} OriginalComponent Original component.
 *
 * @return {Function} Wrapped component.
 */
const withZoloAI = createHigherOrderComponent((OriginalComponent) => {
    function ZoloParagraphAI(props) {
        const { name } = props;
        const { open } = useDispatch('zoloai/popup');
        useEffect(() => {
                const handleKeyDown = (event) => {
                    if (event.ctrlKey && event.shiftKey && event.code === 'Slash') {
                        open();
                    }
                };

                document.addEventListener('keydown', handleKeyDown);

                return () => {
                    document.removeEventListener('keydown', handleKeyDown);
                };
        }, [name, open]);

        return <OriginalComponent {...props} />;
    }

    return ZoloParagraphAI;
}, 'withZoloAI');

addFilter('editor.BlockEdit', 'zolo/open-popup', withZoloAI);
