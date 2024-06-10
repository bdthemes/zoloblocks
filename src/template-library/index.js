import { registerPlugin } from '@wordpress/plugins';
import { render, useState, useEffect } from '@wordpress/element';
import { subscribe } from '@wordpress/data';
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import axios from 'axios';

/**
 * Template Library Style
 */
import './library.scss';
import classNames from 'classnames';

/**
 * Constants
 */
const TABS = [
    {
        label: __('Patterns', 'zoloblocks'),
        value: 'patterns',
    },
    {
        label: __('Templates', 'zoloblocks'),
        value: 'templates',
    },
    {
        label: __('Pages', 'zoloblocks'),
        value: 'pages',
    },
];

/**
 * ZoloBlocks Template Library Button
 */
function ZoloBlocksTemplateLibraryButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('patterns');

    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(4);
    const [templates, setTemplates] = useState([]);

    const LibraryButton = () => (
        <Button onClick={() => setIsOpen(true)} className="zolo-library-open-button">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4H9.22856L4.02857 9.27618L4 4ZM15.9048 11.1047L18 8.99999V9.00951C19.2953 10.1524 20 11.6476 20 13.2857C20 15.2476 19.2667 17.1333 18.0953 18.2095C16.7715 19.4 15.2 19.9809 13.2858 19.9809L4.02865 20V14.0857L14.1048 4H18.6953L6.22864 16.3333H13.2858C14.2191 16.3333 15.0286 16 15.6191 15.3809C16.2762 14.6952 16.6191 13.8666 16.6191 12.9619C16.6191 12.2476 16.2381 11.5619 15.9048 11.1047Z"
                    fill="white"
                />
            </svg>

            <span className="zolo-template-label">{__('Template Library', 'zoloblocks')}</span>
        </Button>
    );

    const renderButton = (selector) => {
        const libraryButton = document.createElement('div');
        libraryButton.classList.add('zoloblocks-template-library-button');
        selector.appendChild(libraryButton);
        render(<LibraryButton />, libraryButton);
    };

    // watch for the toolbar to be visible and the template library button to be missing
    subscribe(() => {
        const toolbar = document.querySelector('.edit-post-header__toolbar');
        const libraryButton = document.querySelector('.zoloblocks-template-library-button');

        if (toolbar && !libraryButton) {
            renderButton(toolbar);
        }
    });

    /**
     * Fetch Templates
     */
    useEffect(() => {
        axios
            .get(`https://templates.zoloblocks.com/wp-json/bdthemes/v1/template-manager?per_page=${number}`)
            .then((response) => {
                const { data } = response;
                setTemplates(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [number]);

    return (
        <div className="zolo-demos-modal-wrapper">
            {isOpen && (
                <Modal
                    className="zolo-demos-modal"
                    onRequestClose={() => setIsOpen(false)}
                    shouldCloseOnClickOutside={true}
                    shouldCloseOnEsc={true}
                    isOpen={isOpen}
                    isDismissible={false}
                >
                    <div className="zolo-dm-head">
                        <div className="logo-area">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6827 10.8669L18.9688 7.58074L18.9405 7.55241C20.7819 8.94051 22 11.0085 22 13.4448C22 15.7677 21.1785 18.204 19.5637 19.6771C17.9207 21.1785 15.9093 21.915 13.5014 21.915L6.64589 21.9433H2V14.1246L14.1813 2H20.9235L6.36261 16.3343H13.5297C14.4079 16.3343 15.1728 16.0227 15.7677 15.4278C16.3909 14.8045 16.7592 14.0113 16.7592 13.0765C16.7592 12.2833 16.1643 11.4051 15.6827 10.8669ZM2.02869 10.3003V2H10.3573L2.02869 10.3003Z"
                                    fill="#2667FF"
                                />
                            </svg>
                            <div className="logo-text">{__('ZoloBlocks Template Library', 'zoloblocks')}</div>
                        </div>
                        <div className="tabs-area">
                            {TABS &&
                                TABS.map((tab) => (
                                    <button
                                        key={tab.value}
                                        className={classNames('single-tab', { active: activeTab === tab.value })}
                                        onClick={() => setActiveTab(tab.value)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                        </div>
                        <div className="search-close-area">
                            <div className="search">
                                <input type="text" placeholder={__('Search', 'zoloblocks')} />
                            </div>
                            <div className="close-btn">
                                <button onClick={() => setIsOpen(false)}>
                                    <svg viewBox="0 0 24 24" width={24} height={24} color={'#000000'} fill={'none'}>
                                        <path
                                            d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="zolo-dm-body">
                        <div className="categories">
                            <button className="single-category">All</button>
                            <button className="single-category">Hero</button>
                            <button className="single-category">Buttons</button>
                        </div>
                        <div className="demos-container">
                            <div className="zolo-demos-wrapper">
                                {templates && templates.length > 0 ? (
                                    templates.map((template) => {
                                        return (
                                            <div className="single-demo">
                                                <div className="demo-preview">
                                                    <img src={template.demo_preview} alt={template.title} />
                                                    {template?.pro === '1' && (
                                                        <div className="image-overlay-content">
                                                            <p>{__('Needs ZoloBlocks Pro', 'zoloblocks')}</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="demo-footer">
                                                    <div className="footer-left">
                                                        <h2 className="demo-title">{template.title}</h2>
                                                        <a href={template?.demo_link} target="_blank">
                                                            {__('View Demo', 'zoloblocks')}
                                                        </a>
                                                    </div>
                                                    <div className="footer-right">
                                                        <button className="import-btn">{__('Import', 'zoloblocks')}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="single-demo">
                                        <h2>{__('No Templates Found', 'zoloblocks')}</h2>
                                    </div>
                                )}
                            </div>
                            <div className="load-more-btn-wrapper">
                                <button
                                    className="load-more-btn"
                                    onClick={() => {
                                        setNumber(number + 4);
                                    }}
                                >
                                    {__('Load More', 'zoloblocks')}
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

registerPlugin('zoloblocks-template-library-button', {
    render: ZoloBlocksTemplateLibraryButton,
});
