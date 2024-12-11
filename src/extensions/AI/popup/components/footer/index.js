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
                            className="zolo-ai-regenerate-btn"
                            onClick={() => {
                                // setError('');
                                requestAI();
                            }}
                        >
                            {__('Regenerate', 'zoloblocks')}
                            {/* <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    clipRule="evenodd"
                                    d="M3.75572 12.3843C3.75572 12.8793 3.34542 13.2316 2.85878 13.2316H2.84924C2.36259 13.2316 2 12.8317 2 12.3367C2.04771 8.45247 4.24236 4.93002 7.68701 3.10215C11.0172 1.59796 16.5324 0.874434 20.8836 6.07243L20.5782 3.46391C20.54 2.96887 20.8072 2.48334 21.4752 2.48334C21.9236 2.48334 22.2767 2.7975 22.3244 3.24495L22.9923 8.59527C23.0877 9.42353 22.2671 9.65201 21.9618 9.57585L16.6374 8.46199C16.1507 8.36679 15.8836 7.88126 15.9694 7.43381C16.0649 6.94829 16.5515 6.68172 17 6.76741L19.7003 7.32909C17.7824 4.47305 12.7824 2.3691 8.49808 4.71105C5.65457 6.26284 3.80343 9.176 3.75572 12.3843ZM21.2367 12.6129C21.2367 12.1178 21.647 11.7656 22.1336 11.7656L22.1241 11.7561C22.6203 11.7561 22.9733 12.1654 22.9733 12.651C22.9352 16.5447 20.7405 20.0671 17.2959 21.895C13.9753 23.3992 8.45999 24.1323 4.10886 18.9247L4.42374 21.5333C4.46191 22.0283 4.19473 22.5138 3.5268 22.5138C3.07832 22.5138 2.72527 22.1997 2.67756 21.7522L2.00962 16.4019C1.9142 15.5736 2.73481 15.3452 3.04016 15.4213L8.35503 16.5352C8.84167 16.6304 9.10885 17.1159 9.02297 17.5633C8.92755 18.0489 8.44091 18.3154 7.99244 18.2298L5.29206 17.6681C7.21 20.5241 12.21 22.6281 16.4943 20.2861C19.3378 18.7343 21.189 15.8212 21.2367 12.6129Z"
                                />
                            </svg> */}
                        </Button>
                        <div className="zolo-ai-footer-btn">
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
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.46667 3.76319C3.46667 3.09073 4.06406 2.46667 4.88934 2.46667H14.6427C15.468 2.46667 16.0654 3.09074 16.0654 3.76319V4.89404H8.9667C7.41324 4.89404 6.07736 6.09014 6.07736 7.65723V17.6393H4.88934C4.06406 17.6393 3.46667 17.0152 3.46667 16.3428V3.76319ZM6.07736 19.1059H4.88934C3.33861 19.1059 2 17.9073 2 16.3428V3.76319C2 2.19866 3.33861 1 4.88934 1H14.6427C16.1934 1 17.532 2.19866 17.532 3.76319V4.89404H18.7054C20.2588 4.89404 21.5947 6.09014 21.5947 7.65723V20.2368C21.5947 21.8039 20.2588 23 18.7054 23H8.9667C7.41324 23 6.07736 21.8039 6.07736 20.2368V19.1059ZM7.54403 7.65723C7.54403 6.98221 8.1387 6.36071 8.9667 6.36071H18.7054C19.5334 6.36071 20.1281 6.98221 20.1281 7.65723V20.2368C20.1281 20.9118 19.5334 21.5333 18.7054 21.5333H8.9667C8.1387 21.5333 7.54403 20.9118 7.54403 20.2368V7.65723Z"
                                    />
                                </svg>
                            </Button>
                            <Button className="insert-btn" onClick={onInsert}>
                                {__('Insert', 'zoloblocks')}
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M23 7.59066C23 7.20289 22.6856 6.88854 22.2979 6.88854L17.3923 6.88854C17.0046 6.88854 16.6902 7.20289 16.6902 7.59066C16.6902 7.97844 17.0046 8.29279 17.3923 8.29279L21.5957 8.29279L21.5957 21.5957L2.40429 21.5957L2.40429 8.29279L6.38301 8.29279C6.77078 8.29279 7.08513 7.97844 7.08513 7.59066C7.08513 7.20289 6.77078 6.88854 6.38301 6.88854L1.70216 6.88854C1.31439 6.88854 1.00004 7.20289 1.00004 7.59066L1.00004 22.2979C1.00004 22.6856 1.31439 23 1.70216 23L22.2979 23C22.6856 23 23 22.6856 23 22.2979L23 7.59066ZM15.614 12.6737C15.8882 12.9479 15.8882 13.3925 15.614 13.6667L12.3749 16.9058C12.1007 17.18 11.6561 17.18 11.3819 16.9058L8.14277 13.6667C7.86857 13.3925 7.86857 12.9479 8.14277 12.6737C8.41696 12.3995 8.86153 12.3995 9.13572 12.6737L11.1763 14.7143L11.1763 1.70213C11.1763 1.31435 11.4907 0.999999 11.8784 1C12.2662 1 12.5806 1.31435 12.5806 1.70213L12.5806 14.7142L14.6211 12.6737C14.8953 12.3995 15.3398 12.3995 15.614 12.6737Z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Footer;
