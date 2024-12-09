/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

export const Footer = (props) => {
    const { onInsert } = props;

    const { close, reset, setError, requestAI } = useDispatch('zoloai/popup');

    const { prompt, loading, response } = useSelect((select) => {
        const { getPrompt, getContext, isLoading, getResponse } = select('zoloai/popup');

        return {
            prompt: getPrompt(),
            context: getContext(),
            // screen: getScreen(),
            loading: isLoading(),
            response: getResponse(),
        };
    });

    const showFooter = response || (prompt && !loading && !response);

    if (!showFooter) {
        return null;
    }

    return (
        <div className="zolo-popup-footer">
            <div className="zolo-popup-footer-actions">
                {prompt && !loading && !response && (
                    <Button
                        onClick={() => {
                            requestAI();
                        }}
                    >
                        {__('Get Answer', 'zoloblocks')}
                    </Button>
                )}
                {response && (
                    <>
                <Button
                    onClick={() => {
                        // setError('');
                        requestAI();
                    }}
                >
                    {__('Regenerate', 'zoloblocks')}
                </Button>
                <Button
                    onClick={() => {
                        const textToCopy = response?.content;

                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            navigator.clipboard
                                .writeText(textToCopy)
                                .then(() => {
                                    console.log('Text copied to clipboard successfully!');
                                })
                                .catch((err) => {
                                    console.error('Failed to copy text: ', err);
                                });
                        } else {
                            // Fallback for older browsers or if clipboard API is restricted
                            const textArea = document.createElement('textarea');
                            textArea.value = textToCopy;
                            textArea.style.position = 'fixed'; // Avoid scrolling to the bottom
                            textArea.style.top = '0';
                            textArea.style.left = '0';
                            document.body.appendChild(textArea);
                            textArea.focus();
                            textArea.select();

                            try {
                                const successful = document.execCommand('copy');
                                if (successful) {
                                    console.log('Fallback: Text copied to clipboard!');
                                } else {
                                    console.error('Fallback: Unable to copy text.');
                                }
                            } catch (err) {
                                console.error('Fallback: Error copying text: ', err);
                            }

                            document.body.removeChild(textArea);
                        }

                        reset();
                        close();
                    }}
                >
                    {__('Copy', 'zoloblocks')}
                </Button>

                <Button onClick={onInsert}>{__('Insert', 'zoloblocks')}</Button>
                </>
                )}
            </div>
        </div>
    );
};


export default Footer;