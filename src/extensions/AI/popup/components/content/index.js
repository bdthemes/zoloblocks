import { Button, SelectControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { TextEffect } from '../../../../../controls/animations/text-effects';

const Content = () => {
    const ref = useRef();
    const { reset, setPrompt, setContext, setLanguage, requestAI } = useDispatch('zoloai/popup');
    const { loading, prompt, language, response, content, context } = useSelect((select) => {
        const { isOpen: checkIsOpen, isLoading, getPrompt, getResponse, getContent, getContext } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            response: getResponse(),
            loading: isLoading(),
            content: getContent() ? getContent() : '',
            context: getContext(),
        };
    });

    function openModal(prompt) {
        setPrompt(prompt);
        setContext('selected-blocks');
        requestAI();
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

export default Content;
