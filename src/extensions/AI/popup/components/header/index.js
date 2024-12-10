import React from 'react';
import { __ } from '@wordpress/i18n';

const Header = () => {
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
                <h2 className="zolo-ai-logo-text">{__('Zolo AI', 'zoloblocks-pro')}</h2>
                <span className="zolo-ai-badge">{__('Beta', 'zoloblocks-pro')}</span>
            </div>
            <button className="zolo-head-close-button">
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
            <div class="zolo-ai-loader"></div>
        </div>
    );
};
export default Header;
