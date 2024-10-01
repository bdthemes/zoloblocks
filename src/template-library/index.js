import apiFetch from '@wordpress/api-fetch';
import { BaseControl, Button, Modal, SelectControl, Tooltip } from '@wordpress/components';
import { subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { createRoot } from 'react-dom/client'; // ?? todo: remove if @wordpress/element is updated

/**
 * Template Library Style
 */
import classNames from 'classnames';
import './library.scss';

/**
 * Internal dependencies
 */
import FavoriteTemplates from './components/favorites';
import Pages from './components/pages';
import Patterns from './components/patterns';
import Templates from './components/templates';
import PreLoader from './preloader';

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
        label: __('Demos', 'zoloblocks'),
        value: 'demos',
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

    // categories
    const [patternCategories, setPatternCategories] = useState([]);

    const [activeTab, setActiveTab] = useState('patterns');
    const [searchText, setSearchText] = useState('');

    const [loading, setLoading] = useState(false);

    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);

    const [allTemplates, setAllTemplates] = useState([]);
    const [templates, setTemplates] = useState([]);

    const [allPatterns, setAllPatterns] = useState([]);
    const [patterns, setPatterns] = useState([]);

    const [demos, setDemos] = useState([]);
    const [favTemplates, setFavTemplates] = useState([]);
    const [favTemplatesData, setFavTemplatesData] = useState([]);

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
        const newFavTemplates = favTemplates?.includes(templateID)
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
        if (favTemplates?.length > 0) {
            const favTemplatesData = allTemplates.filter((template) => favTemplates.includes(template.id));
            setFavTemplatesData(favTemplatesData);
        }
    }, [favTemplates, allTemplates]);

    // Handle Patterns, Templates, Pages, Demos
    useEffect(() => {
        const patterns = allTemplates.filter((template) => template.template_type === 'patterns');
        const templates = allTemplates.filter((template) => template.template_type === 'templates');
        const pages = allTemplates.filter((template) => template.type === 'pages');
        const demos = allTemplates.filter((template) => template.type === 'demos');

        setAllPatterns(patterns);
        setPatterns(patterns);
        setTemplates(templates);
        setDemos(demos);
    }, [allTemplates]);

    // console.log('patterns: ', patterns);

    // fetch templates
    const fetchTemplates = async () => {
        setLoading(true);
        apiFetch({
            path: '/zolo/v1/templates',
            method: 'GET',
        }).then((response) => {
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
                .slice(0, 9);
            setTags(sortedTags);
            setLoading(false);
        });
    };

    // pull new demos
    const pullNewDemos = () => {
        setLoading(true);
        jQuery.ajax({
            url: zoloParams?.ajaxurl,
            type: 'POST',
            nonce: zoloParams?.nonce,
            data: {
                action: 'zolo_demo_pull',
            },
            success: function (response) {
                if (response.success) {
                    fetchTemplates();
                    setLoading(false);
                } else {
                    console.log('Error:', response.data);
                }
            },
            error: function (error) {
                console.log('Error:', error);
            },
        });
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

            // set pattern categories
            const patternCategories = templates
                .filter((template) => template.template_type === 'patterns')
                .map((template) => template.categories);
            const uniquePatternCategories = [...new Set(patternCategories.flat())];
            const sortedPatternCategories = uniquePatternCategories.sort((a, b) => a.localeCompare(b));
            const patternCategoriesArray = sortedPatternCategories.map((category) => ({ label: category, value: category }));
            patternCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setPatternCategories(patternCategoriesArray);
        }
    }, [allTemplates, number]);

    // Filter by Category
    useEffect(() => {
        // filter patterns based on category
        const filteredPatterns = allPatterns.filter((template) => {
            if (activeCat === 'all') {
                return true;
            } else {
                return template.categories.includes(activeCat);
            }
        });
        setPatterns(filteredPatterns.slice(0, number));
        setTotal(filteredPatterns.length);
    }, [activeCat]); // eslint-disable-line

    // filter templates based on search text
    useEffect(() => {
        // filter templates based on search text
        const filteredTemplates = allTemplates.filter((template) => {
            return template.title.toLowerCase().includes(searchText.toLowerCase());
        });

        setTemplates(filteredTemplates.slice(0, number));
        setTotal(filteredTemplates.length);
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
            nonce: zoloParams?.nonce,
            data: {
                action: 'zolo_demo_import',
                security: zoloParams?.zolo_nonce,
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

    subscribe(() => {
        const toolbar = document.querySelector('.editor-header__toolbar, .edit-post-header__toolbar');
        const libraryButton = document.querySelector('.zoloblocks-template-library-button');

        const currentPostType = wp.data.select('core/editor').getCurrentPostType();

        if (toolbar && !libraryButton && currentPostType !== 'zolo-popup') {
            renderButton(toolbar);
        }
    });

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
        selector.append(libraryButton);
        createRoot(libraryButton).render(<LibraryButton />);
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
                                {activeTab === 'patterns' && (
                                    <>
                                        {patternCategories &&
                                            patternCategories.length > 0 &&
                                            patternCategories.map((category) => (
                                                <button
                                                    key={category.value}
                                                    className={classNames('single-category', { active: activeCat === category.value })}
                                                    onClick={() => setActiveCat(category.value)}
                                                >
                                                    <span className="single-category-text">{category.label}</span>
                                                    <span className="single-category-count">
                                                        {allPatterns &&
                                                            (category.value === 'all'
                                                                ? allPatterns.length
                                                                : allPatterns.filter((template) =>
                                                                      template.categories.includes(category.label)
                                                                  ).length)}
                                                    </span>
                                                </button>
                                            ))}
                                    </>
                                )}
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
                                                className={classNames(
                                                    'single-tab',
                                                    { active: activeTab === tab.value },
                                                    { fav: tab.value === 'favorites' }
                                                )}
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
                                                    // setPullDemos(!pullDemos);
                                                    pullNewDemos();
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
                                                label={__('Sort By :', 'zoloblocks')}
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
                                            <BaseControl label={__('Popular Tags :', 'zoloblocks')} className="zolo-tags">
                                                <div className="tags-wrap">
                                                    <div className="tags-btn-wrap">
                                                        {tags &&
                                                            tags.length > 0 &&
                                                            tags.map((tag) => (
                                                                <button
                                                                    key={tag}
                                                                    className={classNames(
                                                                        'single-tag',
                                                                        `${activeTag === tag ? 'active' : ''}`
                                                                    )}
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
                                                    </div>
                                                    <button
                                                        className={classNames('clear-tag', `${activeTag !== '' ? 'active' : ''}`)}
                                                        onClick={() => {
                                                            setActiveTag('');
                                                            setTemplates(allTemplates);
                                                        }}
                                                    >
                                                        <svg
                                                            width="64px"
                                                            height="64px"
                                                            viewBox="0 0 21 21"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="#2483ff"
                                                            stroke="#2483ff"
                                                        >
                                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                            <g id="SVGRepo_iconCarrier">
                                                                <g
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                    stroke="#000000"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    transform="matrix(0 1 1 0 2.5 2.5)"
                                                                >
                                                                    <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
                                                                    <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
                                                                </g>
                                                            </g>
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
                                    {patterns && patterns.length > 0 && (
                                        <Patterns
                                            templates={patterns}
                                            handleImportTemplate={handleImportTemplate}
                                            saveFavTemplates={saveFavTemplates}
                                            favTemplates={favTemplates}
                                        />
                                    )}
                                    {patterns && patterns?.length > number && (
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

                            {templates?.length === 0 && !loading && (
                                <div className="no-found-item">
                                    <h2>{__('No Templates Found', 'zoloblocks')}</h2>
                                </div>
                            )}
                        </div>
                        {loading && <PreLoader />}
                    </div>
                </Modal>
            )}
        </div>
    );
}

registerPlugin('zoloblocks-template-library-button', {
    render: ZoloBlocksTemplateLibraryButton,
});
