import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

const Header = () => {
    const { close } = useDispatch('zoloai/popup');

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

    const handleClose = () => {
        close();
    };
    return (
        <div className="zolo-popup-header">
            <div className="zolo-popup-header__logo">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1295_277)">
                        <path
                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                            fill="black"
                        />
                        <path d="M6.42959 11.1024L11.3674 6.1123H6.40559L6.42959 11.1024Z" fill="white" />
                        <path
                            d="M16.4683 9.41953L14.5162 11.3712C14.8046 11.6942 15.1469 12.2126 15.1469 12.6763C15.1469 13.2336 14.9242 13.6973 14.5666 14.0678C14.22 14.4269 13.7678 14.6021 13.2336 14.6021H8.99328L17.6256 6.11377H13.6392L6.42624 13.2926V17.928L9.17712 17.9078H13.2298C14.6563 17.9078 15.8414 17.4672 16.8269 16.5869C17.7893 15.7066 18.2765 14.269 18.2765 12.9019C18.2765 11.4571 17.5478 10.2413 16.4678 9.41953H16.4688H16.4683Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1295_277">
                            <rect width={24} height={24} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h2 className="zolo-ai-logo-text">{__('AI Assistant', 'zoloblocks')}</h2>
                <span className="zolo-ai-badge">{__('Beta', 'zoloblocks')}</span>
            </div>

            <div className="zolo-popup-header_right">
                <a href="#" className="zolo-head-upgrade-btn">
                    {__('Upgrade', 'zoloblocks')}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_1313_270)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.4493 2.04772C12.2553 2.04772 11.394 3.02283 11.394 4.09545C11.394 3.01308 10.4153 2.04772 9.33866 2.04772C10.5327 2.04772 11.394 1.07262 11.394 0C11.394 1.08237 12.3727 2.04772 13.4493 2.04772ZM5.2475 10.2095C5.2475 8.07399 6.96027 6.36756 9.10367 6.36756C6.96027 6.36756 5.2475 4.66112 5.2475 2.52563C5.2475 4.66112 3.53474 6.36756 1.39134 6.36756C3.53474 6.36756 5.2475 8.07399 5.2475 10.2095ZM24.0001 11.1358C19.4294 11.1358 15.818 14.7339 15.818 19.2877C15.818 14.8509 12.2065 11.1358 7.63584 11.1358C12.2065 11.1358 15.818 7.53764 15.818 2.98389C15.818 7.42062 19.4294 11.1358 24.0001 11.1358ZM4.34723 13.3296H1V16.6645L4.34723 13.3296ZM10.0042 16.5085L8.65361 17.8541H8.7319C8.97659 18.1662 9.21148 18.488 9.21148 19.0438C9.21148 19.5996 8.97659 20.0774 8.57531 20.5552C8.17403 20.955 7.69446 21.189 7.05829 21.189H2.51702L10.4838 13.3296H7.53786L1.0783 19.7653V23.5H6.9702C8.25233 23.5 9.20169 23.1782 10.0825 22.3884C10.797 21.6668 11.2766 20.2431 11.2766 19.2095C11.2766 18.1759 10.797 17.2203 10.0042 16.5085Z"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1313_270">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>

                <button className="zolo-head-close-button" onClick={handleClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* loader here */}
            {loading && <div className="zolo-ai-loader"></div>}

            {/* <div class="zolo-ai-loader"></div> */}
        </div>
    );
};
export default Header;
