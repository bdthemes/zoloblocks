/**
 * Styles
 */
// import './style.scss';

/**
 * WordPress dependencies
 */
import { createRoot } from '@wordpress/element';
import { useSelect, useDispatch, dispatch, select } from '@wordpress/data';
import clsx from 'clsx';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import { Header, Prompt, Content, Footer } from './components';
const POPUP_CONTAINER_CLASS = 'zolo-popup-container';

import { ZoloModal } from '../../../controls/core-controls';

export default function Popup() {
    const { close, reset } = useDispatch('zoloai/popup');
    const { updateBlockAttributes } = dispatch('core/block-editor');
    const { getSelectedBlock, getSelectedBlockClientId } = select('core/block-editor');

    const { isOpen, response } = useSelect((select) => {
        const { isOpen: checkIsOpen, getResponse } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            response: getResponse(),
        };
    });

    function insertResponse() {
        const { content } = response;
        if (content) {
            const selectedBlock = getSelectedBlock();
            const clientId = getSelectedBlockClientId();

            if (selectedBlock && clientId) {
                let attributeKey;

                switch (selectedBlock.name) {
                    case 'zolo/advanced-icon-box':
                        attributeKey = 'iconBoxDescription';
                        break;

                    case 'zolo/advanced-heading':
                        attributeKey = 'titleText';
                        break;

                    default:
                        attributeKey = 'content';
                        break;
                }
                updateBlockAttributes(clientId, { [attributeKey]: content });
            } else {
                console.warn('No selected block or client ID found.');
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
        <ZoloModal
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
            <div className="zolo-popup__content_wrap">
                {
                    //error message
                    response?.message && <div className="zolo-ai-error">{response?.errors?.command || response?.message}</div>
                }
                <Prompt />
                <Content />
            </div>
            <Footer onInsert={onInsert} />
        </ZoloModal>
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
