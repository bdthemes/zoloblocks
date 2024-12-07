/**
 * Styles
 */
// import './style.scss';

/**
 * WordPress dependencies
 */
import { createRoot } from '@wordpress/element';
import { Modal, SelectControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { rawHandler } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import clsx from 'clsx';
import { useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { TextEffect } from '../../../../controls/animations/text-effects';

const POPUP_CONTAINER_CLASS = 'zolo-popup-container';

const Input = () => {
    const ref = useRef();
    const { reset, setPrompt, setScreen, requestAI } = useDispatch('zoloai/popup');
    const { isOpen, prompt } = useSelect((select) => {
        const { isOpen: checkIsOpen, getPrompt } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
        };
    });

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            requestAI();
        }
    }


    return (
        <div className="zolo-popup-input">
            <textarea
                ref={ref}
                placeholder={__('Ask AI to write anything…', 'zoloblocks')}
                value={prompt}
                onChange={(e) => {

                    setPrompt(e.target.value);
                }}
                onKeyDown={onKeyDown}
                // disabled={loading}
                rows={5}
            />
        </div>
    );
};

const Content = () => {
    const { reset, setPrompt, setContext, setLanguage, requestAI } = useDispatch('zoloai/popup');
    const { loading, prompt, language, response, content } = useSelect((select) => {
        const { isOpen: checkIsOpen, isLoading, getPrompt, getResponse, getContent } = select('zoloai/popup');

        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            response: getResponse(),
            loading: isLoading(),
            content: getContent()
        };
    });


    function openModal(prompt) {
        // open();
        setPrompt(prompt);
        setContext('selected-blocks');
        // setInsertionPlace('selected-blocks');
        requestAI();
    }

    return (
        <div className="zolo-popup-content">
            <div className="zolo-popup-response">
                {loading && (
                    <div className="zolo-popup-response-content">
                        <TextEffect className="inline-flex" per="char" trigger="hover" variants={{ opacity: [0, 1], translateY: [10, 0] }}>
                            Processing...
                        </TextEffect>
                    </div>
                )}
                {/* {!loading && response && ( */}
                <div className="zolo-popup-response-content">
                    {!loading && response?.content ? (
                        <textarea
                            placeholder={__('Ask AI to write anything…', 'zoloblocks')}
                            value={response?.content}
                            onChange={(e) => {
                                setPrompt(e.target.value);
                            }}
                            rows={5}
                        />
                    ) : (
                        <textarea
                            placeholder={__('Ask AI to write anything…', 'zoloblocks')}
                            value={content}
                            onChange={(e) => {
                                setPrompt(e.target.value);
                            }}
                            rows={5}
                        />
                    )}
                    {/* <TextEffect className="inline-flex" per="word" trigger="hover" variants={{ opacity: [0, 1], translateY: [10, 0] }}> */}
                    {/* {response?.content || 'No response'} */}
                    {/* </TextEffect> */}
                    {/* // change language */}
                    <SelectControl
                        label={__('Change Language', 'zoloblocks')}
                        value={language}
                        options={[
                            { label: 'English', value: 'english' },
                            { label: 'French', value: 'french' },
                            { label: 'German', value: 'german' },
                            { label: 'Spanish', value: 'spanish' },
                            { label: 'Italian', value: 'italian' },
                            { label: 'Dutch', value: 'dutch' },
                            { label: 'Portuguese', value: 'portuguese' },
                            { label: 'Russian', value: 'russian' },
                            { label: 'Japanese', value: 'japanese' },
                            { label: 'Chinese', value: 'chinese' },
                            { label: 'Korean', value: 'korean' },
                            { label: 'Arabic', value: 'arabic' },
                            { label: 'Turkish', value: 'turkish' },
                            { label: 'Polish', value: 'polish' },
                            { label: 'Swedish', value: 'swedish' },
                            { label: 'Danish', value: 'danish' },
                            { label: 'Norwegian', value: 'norwegian' },
                            { label: 'Finnish', value: 'finnish' },
                            { label: 'Czech', value: 'czech' },
                            { label: 'Hungarian', value: 'hungarian' },
                            { label: 'Romanian', value: 'romanian' },
                            { label: 'Greek', value: 'greek' },
                            { label: 'Bulgarian', value: 'bulgarian' },
                            { label: 'Croatian', value: 'croatian' },
                            { label: 'Slovak', value: 'slovak' },
                            { label: 'Lithuanian', value: 'lithuanian' },
                            { label: 'Slovenian', value: 'slovenian' },
                            { label: 'Latvian', value: 'latvian' },
                            { label: 'Estonian', value: 'estonian' },
                            { label: 'Maltese', value: 'maltese' },
                            { label: 'Hindi', value: 'hindi' },
                            { label: 'Bengali', value: 'bengali' },
                            { label: 'Tamil', value: 'tamil' },
                            { label: 'Telugu', value: 'telugu' },
                            { label: 'Urdu', value: 'urdu' },
                            { label: 'Gujarati', value: 'gujarati' },
                        ]}
                        onChange={(value) => {
                            openModal(__(sprintf(`${prompt} Translate the following text to %s`, value), 'zoloblocks'));
                        }}
                    ></SelectControl>
                </div>
                {/* )} */}
            </div>
        </div>
    );
}

export default function Popup() {
    const { close, reset } = useDispatch('zoloai/popup');

    const { connected, isOpen, insertionPlace, loading, response } = useSelect((select) => {
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
            className={clsx('zolo-popup')}
            overlayClassName="zolo-popup-overlay"
            onRequestClose={() => {
                reset();
                close();
            }}
            __experimentalHideHeader
        >
            {/* <Input /> */}
            <Content/>
        </Modal>
    );
}

// .block-editor
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
