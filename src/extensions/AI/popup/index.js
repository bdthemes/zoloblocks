/**
 * Styles
 */
// import './style.scss';

/**
 * WordPress dependencies
 */
import { createRoot } from '@wordpress/element';
import { Modal } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { rawHandler } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import clsx from 'clsx';
import { __ } from '@wordpress/i18n';

import { Header, Prompt, Content, Footer } from './components';

const POPUP_CONTAINER_CLASS = 'zolo-popup-container';

export default function Popup() {
    const { close, reset } = useDispatch('zoloai/popup');

    const { isOpen, response } = useSelect((select) => {
        const { isOpen: checkIsOpen, isLoading, getPrompt, getResponse, getBlockContent, getContext } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            response: getResponse(),
            loading: isLoading(),
            blockContent: getBlockContent(),
            context: getContext(),
        };
    });

    const { selectedClientIds } = useSelect((select) => {
        const { getSelectedBlockClientIds } = select('core/block-editor');

        const ids = getSelectedBlockClientIds();

        return {
            selectedClientIds: ids,
        };
    }, []);

    const { insertBlocks, replaceBlocks, updateBlockAttributes } = useDispatch('core/block-editor');

    const getContextFromSelectedBlocks = () => {
        const { getBlock, getSelectedBlockClientIds } = wp.data.select('core/block-editor');
        return getSelectedBlockClientIds()
            .map((id) => getBlock(id)?.attributes?.content || '')
            .map((content) => {
                const selection = window.getSelection();
                return selection?.rangeCount > 0 && selection.toString() ? selection.toString() : content;
            })
            .join('');
    };

    function insertResponse() {
        const selectedText = getContextFromSelectedBlocks();
        const origintalContent = (clientId) => {
            const block = wp.data.select('core/block-editor').getBlock(clientId);
            return block ? block.attributes?.content : {};
        };
        // console.log('selectedClientIds:', getBlockData(selectedClientIds[0]));
        const parsedBlocks = rawHandler({ HTML: response?.content });

        console.log('Selected Text:', selectedText);

        if (parsedBlocks.length && selectedText) {
            console.log('Replacing selected content with:', response?.content);

            if (selectedText) {
                updateBlockAttributes(selectedClientIds[0], {
                    content: origintalContent(selectedClientIds[0]).replace(selectedText, response?.content),
                });
            } else {
                // insertBlocks(parsedBlocks, insertionPlace);
                replaceBlocks(selectedClientIds[0], parsedBlocks);
            }
        } else {
            console.warn('No valid text selected or no parsed blocks available.');
        }
    }

    function onInsert() {
        insertResponse();
        // reset();
        close();
    }

    if (!isOpen) {
        return null;
    }

    return (
        <Modal
            title={false}
            className={clsx('zolo-popup zolo-popup-ai')}
            overlayClassName="zolo-popup-overlay"
            onRequestClose={() => {
                reset();
                close();
            }}
            __experimentalHideHeader
        >
            <Header />
            <Prompt />
            <Content />
            <Footer onInsert={onInsert} />
        </Modal>
    );
}

// Insert popup renderer in editor.
domReady(() => {
    // Check if popup exists already.
    if (document.querySelector(`.${POPUP_CONTAINER_CLASS}`)) {
        return;
    }

    const blockEditor = document.querySelector('.block-editor');

    if (!blockEditor) {
        return;
    }

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add(POPUP_CONTAINER_CLASS);

    blockEditor.appendChild(toggleContainer);

    const root = createRoot(toggleContainer);
    root.render(<Popup />);
});
