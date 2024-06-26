import { registerPlugin } from '@wordpress/plugins';
import { render, useState, useEffect } from '@wordpress/element';
import { subscribe } from '@wordpress/data';
import { Button, Modal, Tooltip, SelectControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import axios from 'axios';
import apiFetch from '@wordpress/api-fetch';

/**
 * Template Library Style
 */
import './library.scss';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import PreLoader from './preloader';
import Templates from './templates';
import Pages from './pages';
import FavoriteTemplates from './favorites';

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
    {
        label: __('Favorites', 'zoloblocks'),
        value: 'favorites',
    },
];

/**
 * ZoloBlocks Template Library Button
 */
function ZoloBlocksTemplateLibraryButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [pullDemos, setPullDemos] = useState(false);
    const [activeCat, setActiveCat] = useState('all');
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState('patterns');
    const [searchText, setSearchText] = useState('');

    const [loading, setLoading] = useState(false);
    const [allTemplates, setAllTemplates] = useState([]);
    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);
    const [templates, setTemplates] = useState([]);
    const [favTemplates, setFavTemplates] = useState([]);
    const [favTemplatesData, setFavTemplatesData] = useState([]);

    // Pro Popup Modal
    const [proModal, setProModal] = useState(false);

    // tags
    const [activeTag, setActiveTag] = useState('');
    const [tags, setTags] = useState([]);
    const sortTemplatesByTag = (tag) => {
        setActiveTag(tag);
        const filteredTemplates = allTemplates.filter((template) => template.tags.includes(tag));
        setTemplates(filteredTemplates);
    };

    // sorting
    const [sortBy, setSortBy] = useState('newest');
    const handleSortBy = (value) => {
        setSortBy(value);
        const sortedTemplates = templates.sort((a, b) => {
            if (value === 'newest') {
                return new Date(b.created) - new Date(a.created);
            } else if (value === 'oldest') {
                return new Date(a.created) - new Date(b.created);
            }
        });
        setTemplates([...sortedTemplates]); // update the state
    };

    // fetch settings
    const fetchSettings = async (options) => {
        try {
            const response = await apiFetch(options);
            return response;
        } catch (error) {
            console.error('API Fetch Error:', error);
            throw error;
        }
    };

    // favorite templates
    useEffect(() => {
        fetchSettings({
            path: '/wp/v2/settings',
            method: 'GET',
        }).then(({ zolo_favorite_templates }) => {
            setFavTemplates(zolo_favorite_templates);
        });
    }, []);

    // save favorite templates to database
    const saveFavTemplates = (templateID) => {
        const newFavTemplates = favTemplates.includes(templateID)
            ? favTemplates.filter((fav) => fav !== templateID)
            : [...favTemplates, templateID];

        fetchSettings({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_favorite_templates: newFavTemplates,
            },
        }).then(({ zolo_favorite_templates }) => {
            setFavTemplates(zolo_favorite_templates);
        });
    };

    useEffect(() => {
        if (favTemplates.length > 0) {
            const favTemplatesData = allTemplates.filter((template) => favTemplates.includes(template.id));
            setFavTemplatesData(favTemplatesData);
        }
    }, [favTemplates, allTemplates]);

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

    subscribe(() => {
        const toolbar = document.querySelector('.edit-post-header__toolbar');
        const libraryButton = document.querySelector('.zoloblocks-template-library-button');

        if (toolbar && !libraryButton) {
            renderButton(toolbar);
        }
    });

    const fetchTemplates = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://templates.zoloblocks.com/wp-json/bdthemes/v1/template-manager?per_page=-1');
            const { data } = response;
            setAllTemplates(data);
            setTotal(data.length);
            localStorage.setItem('zoloblocks_templates', JSON.stringify(data));

            // find tags
            const allTags = data.map((template) => template.tags);

            // find top 5 tags based on frequency
            const tags = allTags.flat().reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {});

            const sortedTags = Object.keys(tags)
                .sort((a, b) => tags[b] - tags[a])
                .slice(0, 5);
            setTags(sortedTags);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    /**
     * Fetch Templates
     */
    useEffect(() => {
        fetchTemplates();
    }, [pullDemos]);

    // manage templates
    useEffect(() => {
        // get templates from local storage
        const templates = JSON.parse(localStorage.getItem('zoloblocks_templates'));
        if (templates) {
            setTemplates(templates.slice(0, number));
            // find unique categories
            const allCategories = templates.map((template) => template.categories);
            const uniqueCategories = [...new Set(allCategories.flat())];

            // sort the categories alphabetically
            const sortedCategories = uniqueCategories.sort((a, b) => a.localeCompare(b));

            // create an array of objects with label and value and add all to the beginning
            const categories = sortedCategories.map((category) => ({ label: category, value: category }));
            categories.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setCategories(categories);
        }
    }, [allTemplates, number]);

    // filter templates based on category
    useEffect(() => {
        // filter templates based on category
        const filteredTemplates = allTemplates.filter((template) => {
            if (activeCat === 'all') {
                return true;
            } else {
                return template.categories.includes(activeCat);
            }
        });
        setTemplates(filteredTemplates.slice(0, number));
        setTotal(filteredTemplates.length);
    }, [activeCat]); // eslint-disable-line

    // filter templates based on search text
    useEffect(() => {
        // filter templates based on search text
        const filteredTemplates = allTemplates.filter((template) => {
            return template.title.toLowerCase().includes(searchText.toLowerCase());
        });
        setTemplates(filteredTemplates.slice(0, number));
        setTotal(filteredTemplates.length);

        // search for favorite templates
        if (activeTab === 'favorites' && favTemplates.length > 0) {
            const favTemplatesData = allTemplates.filter((template) => favTemplates.includes(template.id));
            const filteredFavTemplates = favTemplatesData.filter((template) => {
                return template.title.toLowerCase().includes(searchText.toLowerCase());
            });

            setFavTemplatesData(filteredFavTemplates);
        }
    }, [searchText, activeTab]); // eslint-disable-line

    /**
     * Handle Import Template
     * @param {string} jsonFile
     */
    const handleImportTemplate = (jsonFile) => {
        setLoading(true);

        jQuery.ajax({
            url: zoloParams?.ajaxurl,
            type: 'POST',
            data: {
                action: 'zolo_demo_import',
                json_file_url: jsonFile,
            },
            success: function (response) {
                if (response.success) {
                    const { data } = response;
                    if (data) {
                        const { content } = data;
                        const blocks = wp.blocks.parse(content);
                        const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
                        if (selectedBlock && selectedBlock.name === 'core/paragraph') {
                            wp.data.dispatch('core/block-editor').replaceBlocks(selectedBlock.clientId, blocks);
                        } else {
                            wp.data.dispatch('core/block-editor').insertBlocks(blocks, 0);
                        }
                        setLoading(false);
                        setIsOpen(false);
                    }
                } else {
                    console.log('Error:', response.data);
                }
            },
            error: function (error) {
                console.log('Error:', error);
            },
        });
    };

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
                    <div className="zolo-dm-body">
                        <div className="categories">
                            <div className="demo-made-button">
                                <button className="demo-made-btn made-zoloblocks-btn">{__('hand craft', 'zoloblocks')}</button>
                                <button className="demo-made-btn made-ai-btn" title="upcoming">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14.0712 9.69993L14.9982 7.55057C15.152 7.19386 15.6539 7.19843 15.8014 7.55789L16.6354 9.59063C17.172 10.8987 18.2031 11.9386 19.5112 12.4441C20.2436 12.7271 20.9451 12.9933 21.726 13.3027C22.097 13.4496 22.0896 13.979 21.716 14.1188L19.6811 14.8802C18.2774 15.4055 17.1629 16.513 16.619 17.9233L15.8161 20.0053C15.6715 20.3804 15.1465 20.3798 15.0025 20.0045L14.2087 17.9342C13.6895 16.58 12.6432 15.5009 11.3145 14.9493L9.33125 14.1259C8.97253 13.977 8.96964 13.4642 9.32666 13.3112L11.3146 12.4589C12.5487 11.9299 13.5353 10.9424 14.0712 9.69993Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M6.01488 3.07497L6.36536 2.26453C6.51939 1.90834 7.02058 1.91291 7.16823 2.27186L7.45362 2.96564C7.9915 4.2732 9.02484 5.3084 10.3342 5.81066C10.5983 5.91198 10.8636 6.01393 11.14 6.12187C11.512 6.26717 11.505 6.79641 11.1309 6.93603L10.5019 7.17075C9.09773 7.69476 7.98233 8.80125 7.43724 10.2109L7.18294 10.8686C7.0381 11.2431 6.51378 11.2426 6.36966 10.8678L6.11046 10.1936C5.59 8.83976 4.54261 7.76153 3.21341 7.21116L2.56601 6.9431C2.20678 6.79436 2.20389 6.28094 2.56142 6.12807L3.25573 5.83122C4.49031 5.30336 5.47779 4.31692 6.01488 3.07497Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M4.71182 15.9861L4.7511 15.8956C4.88762 15.5812 5.33013 15.5852 5.461 15.9021C5.93846 17.0583 6.85588 17.9676 8.01378 18.4132L8.10773 18.4495C8.42754 18.573 8.4217 19.0269 8.10037 19.1463C6.89622 19.5939 5.93558 20.5497 5.46676 21.7574C5.34152 22.08 4.88724 22.0809 4.76262 21.7581C4.30772 20.5795 3.39184 19.6358 2.2334 19.158C1.91983 19.0287 1.92376 18.5778 2.23586 18.4449C3.33693 17.976 4.23152 17.0924 4.71182 15.9861Z"
                                            fill="black"
                                        />
                                    </svg>
                                    ai
                                    <span>{__('upcoming', 'zoloblocks')}</span>
                                </button>
                            </div>
                            <div className="demo-title-proFree-wrap">
                                <h2 className="category-title">{__('Categories', 'zoloblocks')}</h2>
                                <div className="demo-proFree-btn">
                                    <button className="demo-free-btn">{__('free', 'zoloblocks')}</button>
                                    <Tooltip text={__('Coming Soon', 'zoloblocks')} placement="top">
                                        <button className="demo-pro-btn">{__('pro', 'zoloblocks')}</button>
                                    </Tooltip>
                                </div>
                            </div>

                            <div className="category-list">
                                {categories &&
                                    categories.length > 0 &&
                                    categories.map((category) => (
                                        <button
                                            key={category.value}
                                            className={classNames('single-category', { active: activeCat === category.value })}
                                            onClick={() => setActiveCat(category.value)}
                                        >
                                            <span className="single-category-text">{category.label}</span>
                                            <span className="single-category-count">
                                                {allTemplates &&
                                                    (category.value === 'all'
                                                        ? allTemplates.length
                                                        : allTemplates.filter((template) => template.categories.includes(category.label))
                                                              .length)}
                                            </span>
                                        </button>
                                    ))}
                            </div>
                        </div>
                        <div className="demos-container">
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
                                                className={classNames('single-tab', { active: activeTab === tab.value })}
                                                onClick={() => setActiveTab(tab.value)}
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
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />
                                    </div>
                                    <div className="sync-btn">
                                        <Tooltip text={__('Sync Demos', 'zoloblocks')} placement="top">
                                            <button
                                                className="sync-button"
                                                onClick={() => {
                                                    setPullDemos(!pullDemos);
                                                    setActiveCat('all');
                                                    setSearchText('');
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
                            {activeTab === 'patterns' && (
                                <div className="zolo-secondary-head">
                                    <div className="secondary-header-item">
                                        <div className="secondary-item">
                                            <SelectControl
                                                label={__('Sort By', 'zoloblocks')}
                                                options={[
                                                    { label: __('Newest', 'zoloblocks'), value: 'newest' },
                                                    { label: __('Oldest', 'zoloblocks'), value: 'oldest' },
                                                ]}
                                                onChange={(v) => {
                                                    handleSortBy(v);
                                                }}
                                                value={sortBy}
                                            />
                                        </div>

                                        <div className="secondary-item">
                                            <BaseControl label={__('Popular Tags', 'zoloblocks')} className="zolo-tags">
                                                <div className="tags-wrap">
                                                    {tags &&
                                                        tags.length > 0 &&
                                                        tags.map((tag) => (
                                                            <button
                                                                key={tag}
                                                                className={classNames('single-tag', `${activeTag === tag ? 'active' : ''}`)}
                                                                onClick={() => sortTemplatesByTag(tag)}
                                                            >
                                                                {
                                                                    //make the first letter uppercase of each word in the tag
                                                                    tag
                                                                        .split(' ')
                                                                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                                                        .join(' ')
                                                                }
                                                            </button>
                                                        ))}
                                                    <button
                                                        className={classNames('clear-tag', `${activeTag !== '' ? 'active' : ''}`)}
                                                        onClick={() => {
                                                            setActiveTag('');
                                                            setTemplates(allTemplates);
                                                        }}
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </BaseControl>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'patterns' && (
                                <>
                                    {templates && templates.length > 0 && (
                                        <div className="zolo-demos-wrapper">
                                            {templates.map((template) => {
                                                return (
                                                    <div className="single-demo">
                                                        <div className="demo-preview">
                                                            <img
                                                                src={template.demo_preview}
                                                                alt={template.title}
                                                                loading="lazy"
                                                                decoding="async"
                                                            />
                                                            {template?.pro === '1' && zoloParams?.zolo_pro_status === 'inactive' && (
                                                                <div className="image-overlay-content">
                                                                    <Tooltip text={__('View Demo', 'zoloblocks')} placement="top">
                                                                        <a
                                                                            className="demo-btn view-btn"
                                                                            href={template?.demo_link}
                                                                            target="_blank"
                                                                        >
                                                                            {__('Demo', 'zoloblocks')}
                                                                            <svg
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                                                />
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </Tooltip>
                                                                    <button className="zolo-pro-modal" onClick={() => setProModal(true)}>
                                                                        {__('Upgrade to Pro', 'zoloblocks')}
                                                                    </button>
                                                                    {
                                                                        // Pro Modal
                                                                        proModal && (
                                                                            <Modal
                                                                                className="zolo-pro-modal"
                                                                                onRequestClose={() => setProModal(false)}
                                                                            >
                                                                                Pro Content Goes here
                                                                            </Modal>
                                                                        )
                                                                    }
                                                                </div>
                                                            )}

                                                            <div className="demo-actions-btn-wrap">
                                                                {template?.pro === '1' ? (
                                                                    <>
                                                                        {
                                                                            // check if the user has ZoloBlocks Pro
                                                                            zoloParams?.zolo_pro_status === 'active' && (
                                                                                <>
                                                                                    <Tooltip
                                                                                        text={__('View Demo', 'zoloblocks')}
                                                                                        placement="top"
                                                                                    >
                                                                                        <a
                                                                                            className="demo-btn view-btn"
                                                                                            href={template?.demo_link}
                                                                                            target="_blank"
                                                                                        >
                                                                                            {__('Demo', 'zoloblocks')}
                                                                                            <svg
                                                                                                aria-hidden="true"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width={24}
                                                                                                height={24}
                                                                                                fill="none"
                                                                                                viewBox="0 0 24 24"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                                                                />
                                                                                                <path
                                                                                                    stroke="currentColor"
                                                                                                    strokeWidth={2}
                                                                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                                                />
                                                                                            </svg>
                                                                                        </a>
                                                                                    </Tooltip>
                                                                                    <Tooltip
                                                                                        text={__('Import Demo', 'zoloblocks')}
                                                                                        placement="top"
                                                                                    >
                                                                                        <button
                                                                                            className="demo-btn import-btn"
                                                                                            onClick={() =>
                                                                                                handleImportTemplate(template?.json_file)
                                                                                            }
                                                                                        >
                                                                                            {__('Import', 'zoloblocks')}
                                                                                            <svg
                                                                                                aria-hidden="true"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width={24}
                                                                                                height={24}
                                                                                                fill="none"
                                                                                                viewBox="0 0 24 24"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="currentColor"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                    strokeWidth={2}
                                                                                                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                                                                                />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </Tooltip>
                                                                                </>
                                                                            )
                                                                        }
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Tooltip text={__('View Demo', 'zoloblocks')} placement="top">
                                                                            <a
                                                                                className="demo-btn view-btn"
                                                                                href={template?.demo_link}
                                                                                target="_blank"
                                                                            >
                                                                                {__('Demo', 'zoloblocks')}
                                                                                <svg
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        strokeWidth={2}
                                                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                                                    />
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        strokeWidth={2}
                                                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                                    />
                                                                                </svg>
                                                                            </a>
                                                                        </Tooltip>
                                                                        <Tooltip text={__('Import Demo', 'zoloblocks')} placement="top">
                                                                            <button
                                                                                className="demo-btn import-btn"
                                                                                onClick={() => handleImportTemplate(template?.json_file)}
                                                                            >
                                                                                {__('Import', 'zoloblocks')}
                                                                                <svg
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth={2}
                                                                                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                        </Tooltip>
                                                                    </>
                                                                )}
                                                            </div>
                                                            <Tooltip
                                                                text={
                                                                    favTemplates.includes(template.id)
                                                                        ? __('Remove from Favorite', 'zoloblocks')
                                                                        : __('Add to Favorite', 'zoloblocks')
                                                                }
                                                                placement="top"
                                                            ></Tooltip>
                                                        </div>
                                                        <div className="demo-footer">
                                                            <div className="footer-left">
                                                                <h2 className="demo-title">{template.title}</h2>
                                                                <button
                                                                    onClick={() => {
                                                                        saveFavTemplates(template.id);
                                                                    }}
                                                                    className={
                                                                        favTemplates.includes(template.id) ? 'fav-btn active' : 'fav-btn'
                                                                    }
                                                                >
                                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="fav">
                                                                        <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
                                                                    </svg>
                                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="not-fav">
                                                                        <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <span
                                                            className={classNames(
                                                                'demo-badge',
                                                                `${template?.pro === '1' ? 'pro' : 'free'}-badge`
                                                            )}
                                                        >
                                                            {template?.pro === '1' ? __('Pro', 'zoloblocks') : __('Free', 'zoloblocks')}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    {total > number && (
                                        <div className="load-more-btn-wrapper">
                                            <button
                                                className="load-more-btn"
                                                onClick={() => {
                                                    setNumber(number + 20);
                                                }}
                                            >
                                                {__('Load More', 'zoloblocks')}
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                            {activeTab === 'templates' && <Templates />}
                            {activeTab === 'pages' && <Pages />}
                            {activeTab === 'favorites' && (
                                <FavoriteTemplates
                                    templates={favTemplatesData}
                                    handleImportTemplate={handleImportTemplate}
                                    handleFavTemplates={saveFavTemplates}
                                />
                            )}
                            {/* {loading && <PreLoader />} */}
                            <PreLoader />
                            {templates?.length === 0 && !loading && (
                                <div className="no-found-item">
                                    <h2>{__('No Templates Found', 'zoloblocks')}</h2>
                                </div>
                            )}
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
