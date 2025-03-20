import React from 'react';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { Tooltip } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { TABS } from '../../utils';
import { STORE_NAME } from '../../store';

const Header = ({ props }) => {
    const { setIsOpen } = props;
    const { setActiveTab, setFilters } = useDispatch(STORE_NAME);
    const [searchInput, setSearchInput] = useState('');

    const { activeTab, filters } = useSelect(
        (select) => {
            const { getActiveTab, getFilters } = select(STORE_NAME);
            return {
                activeTab: getActiveTab(),
                filters: getFilters(),
            };
        },
        []
    );

    let timer;

    useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setFilters({
                search: searchInput
            })
        }, 1000);
    }, [searchInput]);

    return (
        <div className="zolo-dm-head">
            <div className="logo-area">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6827 10.8669L18.9688 7.58074L18.9405 7.55241C20.7819 8.94051 22 11.0085 22 13.4448C22 15.7677 21.1785 18.204 19.5637 19.6771C17.9207 21.1785 15.9093 21.915 13.5014 21.915L6.64589 21.9433H2V14.1246L14.1813 2H20.9235L6.36261 16.3343H13.5297C14.4079 16.3343 15.1728 16.0227 15.7677 15.4278C16.3909 14.8045 16.7592 14.0113 16.7592 13.0765C16.7592 12.2833 16.1643 11.4051 15.6827 10.8669ZM2.02869 10.3003V2H10.3573L2.02869 10.3003Z"
                        fill="#2667FF"
                    />
                </svg>
                <div className="logo-text">{__('Template Library', 'zoloblocks')}</div>
            </div>
            <div className="tabs-area">
                {TABS &&
                    TABS.map((tab) => (
                        <button
                            key={tab.value}
                            className={classNames('single-tab', { active: activeTab === tab.value }, { fav: tab.value === 'favorites' })}
                            onClick={() => {
                               setActiveTab(tab.value);
                               setFilters({});
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
            </div>
            <div className="search-close-area">
                <div className="search">
                    <input
                        type="search"
                        placeholder={__('Search', 'zoloblocks')}
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                    />
                </div>
                <div className="sync-btn">
                    <Tooltip text={__('Sync Demos', 'zoloblocks')} placement="top">
                        <button
                            className="sync-button"
                            onClick={() => {
                                // console.log('Sync Demos');
                            }}
                        >
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                                />
                            </svg>
                        </button>
                    </Tooltip>
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
    );
};

export default Header;
