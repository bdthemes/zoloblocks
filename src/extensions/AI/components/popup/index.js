/**
 * Styles
 */
// import './style.scss';

/**
 * WordPress dependencies
 */
import { createRoot, RawHTML } from '@wordpress/element';
import { Modal, SelectControl, Button } from '@wordpress/components';
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
    const ref = useRef();
    const { reset, setPrompt, setContext, setLanguage, requestAI } = useDispatch('zoloai/popup');
    const { loading, prompt, language, response, content } = useSelect((select) => {
        const { isOpen: checkIsOpen, isLoading, getPrompt, getResponse, getContent } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            response: getResponse(),
            loading: isLoading(),
            content: getContent() ? getContent() : '',
        };
    });

    function openModal(prompt) {
        // open();
        setPrompt(prompt);
        setContext('selected-blocks');
        // setInsertionPlace('selected-blocks');
        requestAI();
        // reset();
    }
    function onKeyDown(e) {
        if (e.key === 'Enter') {
            requestAI();
        }
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
                    {!loading && response && response?.content ? (<p>{response?.content || ''}</p>):
                    (
                        <p>{content}</p>
                    )}
                    {

                    }
                    <br />
                    <br />

                    <Button
                        variant="primary"
                        onClick={() => {
                            openModal(__(`Simplify the language`, 'zoloblocks'));
                        }}
                    >
                        {__('Simplify Language', 'zoloblocks')}
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="primary"
                        onClick={() => {
                            openModal(__(`Make it longer`, 'zoloblocks'));
                        }}
                    >
                        {__('Make it longer', 'zoloblocks')}
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="primary"
                        onClick={() => {
                            openModal(__(`Make it shorter`, 'zoloblocks'));
                        }}
                    >
                        {__('Make it shorter', 'zoloblocks')}
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="primary"
                        onClick={() => {
                            openModal(__(`Fix spelling and grammar`, 'zoloblocks'));
                        }}
                    >
                        {__('Fix spelling & grammar', 'zoloblocks')}
                    </Button>
                    <br />
                    <br />
                    <SelectControl
                        label={__('Change Language', 'zoloblocks')}
                        value={''}
                        options={[
                            { label: 'Translate to', value: '' },
                            { label: 'Arabic', value: 'arabic' },
                            { label: 'Bengali', value: 'bengali' },
                            { label: 'Bulgarian', value: 'bulgarian' },
                            { label: 'Chinese', value: 'chinese' },
                            { label: 'Croatian', value: 'croatian' },
                            { label: 'Czech', value: 'czech' },
                            { label: 'Danish', value: 'danish' },
                            { label: 'Dutch', value: 'dutch' },
                            { label: 'English', value: 'english' },
                            { label: 'Estonian', value: 'estonian' },
                            { label: 'Finnish', value: 'finnish' },
                            { label: 'French', value: 'french' },
                            { label: 'German', value: 'german' },
                            { label: 'Greek', value: 'greek' },
                            { label: 'Gujarati', value: 'gujarati' },
                            { label: 'Hebrew', value: 'hebrew' },
                            { label: 'Hindi', value: 'hindi' },
                            { label: 'Hungarian', value: 'hungarian' },
                            { label: 'Indonesian', value: 'indonesian' },
                            { label: 'Italian', value: 'italian' },
                            { label: 'Japanese', value: 'japanese' },
                            { label: 'Korean', value: 'korean' },
                            { label: 'Latvian', value: 'latvian' },
                            { label: 'Lithuanian', value: 'lithuanian' },
                            { label: 'Maltese', value: 'maltese' },
                            { label: 'Norwegian', value: 'norwegian' },
                            { label: 'Persian', value: 'persian' },
                            { label: 'Polish', value: 'polish' },
                            { label: 'Portuguese', value: 'portuguese' },
                            { label: 'Romanian', value: 'romanian' },
                            { label: 'Russian', value: 'russian' },
                            { label: 'Slovak', value: 'slovak' },
                            { label: 'Slovenian', value: 'slovenian' },
                            { label: 'Spanish', value: 'spanish' },
                            { label: 'Swedish', value: 'swedish' },
                            { label: 'Tamil', value: 'tamil' },
                            { label: 'Telugu', value: 'telugu' },
                            { label: 'Thai', value: 'thai' },
                            { label: 'Turkish', value: 'turkish' },
                            { label: 'Urdu', value: 'urdu' },
                            { label: 'Vietnamese', value: 'vietnamese' },
                        ]}
                        onChange={(value) => {
                            if (value !== '') {
                                openModal(__(sprintf(`Translate to %s`, value), 'zoloblocks'));
                            }
                        }}
                    ></SelectControl>
                    <SelectControl
                        label={__('Change tone', 'zoloblocks')}
                        value={''}
                        options={[
                            { label: 'Casual', value: 'casual' },
                            { label: 'Confidence', value: 'confidence' },
                            { label: 'Formal', value: 'formal' },
                            { label: 'Friendly', value: 'friendly' },
                            { label: 'Inspirational', value: 'inspirational' },
                            { label: 'Motivational', value: 'motivational' },
                            { label: 'Nostalgic', value: 'nostalgic' },
                            { label: 'Playful', value: 'playful' },
                            { label: 'Professional', value: 'professional' },
                            { label: 'Scientific', value: 'scientific' },
                            { label: 'Straightforward', value: 'straightforward' },
                            { label: 'Witty', value: 'witty' },
                        ]}
                        onChange={(value) => {
                            openModal(__(sprintf(`Change tone to %s`, value), 'zoloblocks'));
                        }}
                    ></SelectControl>
                </div>
                {/* )} */}
            </div>
        </div>
    );
};

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
            <Input />
            <Content />
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
