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

import { Input, Content } from './components';

const POPUP_CONTAINER_CLASS = 'zolo-popup-container';

export default function Popup() {
    const { close, reset } = useDispatch('zoloai/popup');

    const { isOpen, insertionPlace, response } = useSelect((select) => {
        const { isOpen: checkIsOpen } = select('zoloai/popup');

        return {
            isOpen: checkIsOpen(),
        };
    });

    const { selectedClientIds } = useSelect((select) => {
        const { getSelectedBlockClientIds } = select('core/block-editor');

        const ids = getSelectedBlockClientIds();

        return {
            selectedClientIds: ids,
        };
    }, []);

    const { insertBlocks, replaceBlocks } = useDispatch('core/block-editor');

    function insertResponse() {
        const parsedBlocks = rawHandler({ HTML: response?.content });

        if (parsedBlocks.length) {
            if (insertionPlace === 'selected-blocks') {
                replaceBlocks(selectedClientIds, parsedBlocks);
            } else {
                insertBlocks(parsedBlocks);
            }
        }
    }

    function onInsert() {
        insertResponse();
        reset();
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
            <Input />
            <Content />
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
