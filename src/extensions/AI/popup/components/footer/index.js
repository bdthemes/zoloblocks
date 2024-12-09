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

    // if (!showFooter) {
    //     return null;
    // }

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
                {/* {response && (
                    <>*/}
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
                        // Copy to clipboard.
                        window.navigator.clipboard.writeText(response?.content);

                        reset();
                        close();
                    }}
                >
                    {__('Copy', 'zoloblocks')}
                </Button>
                <Button onClick={onInsert}>{__('Insert', 'zoloblocks')}</Button>
                {/* </>
                )} */}
            </div>
        </div>
    );
};


export default Footer;