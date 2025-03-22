import apiFetch from '@wordpress/api-fetch';
import { Button, Modal } from '@wordpress/components';
import { subscribe, useSelect } from '@wordpress/data';
import { getTextContent } from '@wordpress/rich-text';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { createRoot } from 'react-dom/client'; // ?? todo: remove if @wordpress/element is updated
import domReady from '@wordpress/dom-ready';
import axios from 'axios';
import './store';
/**
 * Template Library Style
 */
import './library.scss';
import './page-templates.scss';

/**
 * Internal dependencies
 */
import PageTemplateLoader from './page-templates';
import PreLoader from './preloader';
import TemplatesLoader from './template-loader';

/**
 * Constants
 */
const TABS = [
    {
        label: __('Demos', 'zoloblocks'),
        value: 'demos',
    },
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
    const [isOpen, setIsOpen] = useState(true);
    const [allTemplates, setAllTemplates] = useState([]);
    const [pullDemos, setPullDemos] = useState(false);
    const [activeTab, setActiveTab] = useState('demos');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);
    const [attemptComplete, setAttemptComplete] = useState(false);
    const [currentPostType, setCurrentPostType] = useState(wp.data.select('core/editor').getCurrentPostType());

    /**
     * =====
     * Page Templates: Templates (Pro, Free)
     * =====
     */
    const [allPageTemplates, setAllPageTemplates] = useState([]);
    const [pageTemplates, setPageTemplates] = useState([]);
    const [pageTemplatesType, setPageTemplatesType] = useState('');
    const [pageTemplateCategories, setPageTemplateCategories] = useState([]);
    const [activePageTemplateCat, setActivePageTemplateCat] = useState('all');

    const { isPageEmpty } = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        const blocks = getBlocks();
        let isPageEmpty = false;

        if (blocks.length === 0) {
            isPageEmpty = true;
        }

        if (blocks.length == 1) {
            const firstBlock = blocks[0];
            if (firstBlock.name === 'core/paragraph' && getTextContent(firstBlock.attributes.content).length === 0) {
                isPageEmpty = true;
            }
        }

        return { isPageEmpty };
    }, []);

    useEffect(() => {
        apiFetch({
            path: '/zolo/v1/page-templates',
            method: 'GET',
        }).then((response) => {
            if (!response) {
                return;
            }
            const { data } = response;

            if (!data) {
                return;
            }

            // convert object to array
            const allAvailablePagesTemplates = Object.entries(data).map(([key, value]) => {
                return {
                    title: key,
                    pages: value,
                };
            });

            setAllPageTemplates(allAvailablePagesTemplates);

            // set page template categories
            const pageTemplateCategories = allAvailablePagesTemplates.map((template) => template.title);
            const sortedPageTemplateCategories = pageTemplateCategories.sort((a, b) => a.localeCompare(b));
            const pageTemplateCategoriesArray = sortedPageTemplateCategories.map((category) => ({ label: category, value: category }));
            pageTemplateCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setPageTemplateCategories(pageTemplateCategoriesArray);

            // set page templates
            setPageTemplates(allAvailablePagesTemplates);
        });
    }, []);

    // filter page templates based on category
    useEffect(() => {
        const filteredPageTemplates = allPageTemplates?.filter((template) => {
            if (activePageTemplateCat === 'all') {
                return true;
            } else {
                return template.title === activePageTemplateCat;
            }
        });
        setPageTemplates(filteredPageTemplates);
    }, [activePageTemplateCat]); // eslint-disable

    // filter page templates based on page template type
    useEffect(() => {
        const filteredPageTemplates = allPageTemplates?.filter((template) => {
            const pages = template?.pages;

            if (pageTemplatesType === 'free') {
                return pages && pages.length > 0 && pages.some((page) => page?.package_type === 'free');
            } else if (pageTemplatesType === 'pro') {
                return pages && pages.length > 0 && pages.some((page) => page?.package_type === 'pro');
            } else {
                return true;
            }
        });
        setPageTemplates(filteredPageTemplates);
    }, [pageTemplatesType]); // eslint-disable

    /**
     * =====
     * Patterns Type: Patterns (Pro, Free)
     *
     * 1. Fetch all patterns
     * 2. Filter by Patterns Type
     * 3. Filter by Category
     */
    const [allPatterns, setAllPatterns] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [patternsType, setPatternsType] = useState('');
    const [patternCategories, setPatternCategories] = useState([]);
    const [activePatternCat, setActivePatternCat] = useState('all');
    const [patternTags, setPatternTags] = useState([]);
    const [activePatternTag, setActivePatternTag] = useState('');
    const [patternSortBy, setPatternSortBy] = useState('newest');

    // Filter by Patterns Type
    useEffect(() => {
        const filteredPatterns = allPatterns?.filter((template) => {
            if (patternsType === 'free') {
                return template?.package_type === 'free';
            } else if (patternsType === 'pro') {
                return template?.package_type === 'pro';
            } else {
                return true;
            }
        });
        setPatterns(filteredPatterns);
    }, [patternsType]); // eslint-disable-line

    // Filter by Pattern Category
    useEffect(() => {
        // filter patterns based on category
        const filteredPatterns = allPatterns?.filter((template) => {
            if (activePatternCat === 'all') {
                return true;
            } else {
                return template.patterns_category.includes(activePatternCat);
            }
        });
        setPatterns(filteredPatterns);
    }, [activePatternCat]); // eslint-disable-line

    // Filter by Pattern Tags
    const sortPatternsByTag = (tag) => {
        setActivePatternTag(tag);
        const filteredPatterns = allPatterns?.filter((template) => template.tags.includes(tag));
        setPatterns(filteredPatterns);
    };

    // Sorting Patterns
    const handlePatternSortBy = (value) => {
        setPatternSortBy(value);
        const sortedPatterns = allPatterns?.sort((a, b) => {
            if (value === 'newest') {
                return new Date(b.created) - new Date(a.created);
            } else if (value === 'oldest') {
                return new Date(a.created) - new Date(b.created);
            }
        });
        setPatterns([...sortedPatterns]); // update the state
    };

    /**
     * =====
     * Templates Type: Pages (Pro, Free)
     *
     * 1. Fetch all pages
     * 2. Filter by Pages Type
     * 3. Filter by Category
     * =====
     */
    const [allPages, setAllPages] = useState([]);
    const [pages, setPages] = useState([]);
    const [pagesType, setPagesType] = useState('');
    const [pageCategories, setPageCategories] = useState([]);
    const [activePageCat, setActivePageCat] = useState('all');
    const [pageTags, setPageTags] = useState([]);
    const [activePageTag, setActivePageTag] = useState('');
    const [pageSortBy, setPageSortBy] = useState('newest');

    // Filter by Pages Type
    useEffect(() => {
        const filteredPages = allPages?.filter((template) => {
            if (pagesType === 'free') {
                return template?.package_type === 'free';
            } else if (pagesType === 'pro') {
                return template?.package_type === 'pro';
            } else {
                return true;
            }
        });
        setPages(filteredPages.slice(0, number));
        setTotal(filteredPages.length);
    }, [pagesType]); // eslint-disable-line

    // Filter by Category
    useEffect(() => {
        // filter patterns based on category
        const filteredPages = allPages?.filter((template) => {
            if (activePageCat === 'all') {
                return true;
            } else {
                return template.pages_category.includes(activePageCat);
            }
        });
        setPages(filteredPages.slice(0, number));
        setTotal(filteredPages.length);
    }, [activePageCat]); // eslint-disable-line

    // Filter by Tags
    const sortPagesByTag = (tag) => {
        setActivePageTag(tag);
        const filteredPages = allPages?.filter((template) => template.tags.includes(tag));
        setPages(filteredPages);
    };

    // Sorting Pages
    const handlePageSortBy = (value) => {
        setPageSortBy(value);
        const sortedPages = allPages?.sort((a, b) => {
            if (value === 'newest') {
                return new Date(b.created) - new Date(a.created);
            } else if (value === 'oldest') {
                return new Date(a.created) - new Date(b.created);
            }
        });
        setPages([...sortedPages]); // update the state
    };

    /**
     * =====
     * Templates Type: Demos (Pro, Free)
     *
     * 1. Fetch all demos
     * 2. Filter by Demos Type
     * 3. Filter by Category
     * =====
     */
    const [allDemos, setAllDemos] = useState([]);
    const [demos, setDemos] = useState([]);
    const [demosType, setDemosType] = useState('');
    const [demoCategories, setDemoCategories] = useState([]);
    const [activeDemoCat, setActiveDemoCat] = useState(false);
    const [demoTags, setDemoTags] = useState([]);
    const [activeDemoTag, setActiveDemoTag] = useState('');
    const [demoSortBy, setDemoSortBy] = useState('newest');

    // Filter by Demos Type
    useEffect(() => {
        const filteredDemos = allDemos?.filter((template) => {
            if (demosType === 'free') {
                return template?.package_type === 'free';
            } else if (demosType === 'pro') {
                return template?.package_type === 'pro';
            } else {
                return true;
            }
        });
        setDemos(filteredDemos.slice(0, number));
        setTotal(filteredDemos.length);
    }, [demosType]); // eslint-disable-line

    // Filter by Category
    // useEffect(() => {
    //     // filter patterns based on category
    //     const filteredDemos = allDemos?.filter((template) => {
    //         if (activeDemoCat === 'all') {
    //             return true;
    //         } else {
    //             return template.demos_category.includes(activeDemoCat);
    //         }
    //     });
    //     setDemos(filteredDemos.slice(0, number));
    //     setTotal(filteredDemos.length);
    // }, [activeDemoCat]); // eslint-disable-line

    useEffect(() => {
        domReady(() => {
            const toolbar = document.querySelector('.editor-header__toolbar, .edit-post-header__toolbar');
            const libraryButton = document.querySelector('.zoloblocks-template-library-button');
            if (toolbar && !libraryButton && currentPostType !== 'zolo-popup') {
                renderButton(toolbar);
            }

            if (libraryButton) {
                setTimeout(() => {
                    if (isPageEmpty) {
                        libraryButton.classList.add('empty-page');
                    } else {
                        libraryButton.classList.remove('empty-page');
                    }
                }, 1000);
            }
        });
    }, [currentPostType, isPageEmpty]);

    // Filter by Tags
    const sortDemosByTag = (tag) => {
        setActiveDemoTag(tag);
        const filteredDemos = allDemos?.filter((template) => template.tags.includes(tag));
        setDemos(filteredDemos);
    };

    // Sorting Demos
    const handleDemoSortBy = (value) => {
        setDemoSortBy(value);
        const sortedDemos = allDemos?.sort((a, b) => {
            if (value === 'newest') {
                return new Date(b.created) - new Date(a.created);
            } else if (value === 'oldest') {
                return new Date(a.created) - new Date(b.created);
            }
        });
        setDemos([...sortedDemos]); // update the state
    };



    // Filter by Demos Type

    // fetch demo templates
const fetchDemos = async () => {
    setLoading(true);
    try {
        const response = await axios({
            method: 'get',
            url: 'https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo/demos/',
            params: {
                per_page: 20, // Limit the number of results
                orderby: 'date', // Order by date
                order: 'desc', // Order descending
               ...activeDemoCat &&  activeDemoCat !== 'demos' && {
                    categories: activeDemoCat,
                },
                tags: activeDemoTag,
                search: searchText,
            },
        });


        const { data } = response;
        // console.log('data', data);

        if (!data) {
            console.log('No data found');
            setDemos([]);
            setAllDemos([]);
        } else {
            setDemos(data);
            setAllDemos(data);
        }
    } catch (error) {
        console.error('Error fetching demos:', error);
    } finally {
        setLoading(false);
    }
};


    const fetchDemoCategories = async () => {
        setLoading(true);
       const response = await axios({
            method: 'get',
            url: 'https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo/demos/categories/',

        }).then((response) => {
            const { data } = response;
            if (!data) {
                console.log('No data found');
                setLoading(false);
                return;
            }
            setDemoCategories(data);
            setLoading(false);
        });
    }


    /**
     * Fetch Templates
     */
    useEffect(() => {
        // fetch templates

        // fetch demo templates
        fetchDemos();
        fetchDemoCategories();
    }, [pullDemos, activeDemoCat, activeDemoTag, searchText]); // eslint-disable-line



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

                        {/* {
                            // Demos
                            activeTab === 'demos' && (
                                <TemplatesLoader
                                    TABS={TABS}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    searchText={searchText}
                                    setSearchText={setSearchText}
                                    pullDemos={pullDemos}
                                    // setPullDemos={setPullDemos}
                                    // pullNewDemos={pullNewDemos}
                                    setIsOpen={setIsOpen}
                                    number={number}
                                    setNumber={setNumber}
                                    loading={loading}
                                    type={demosType}
                                    setType={setDemosType}
                                    categories={demoCategories}
                                    activeCat={activeDemoCat}
                                    setActiveCat={setActiveDemoCat}
                                    allItems={allDemos}
                                    items={demos}
                                    setItems={setDemos}
                                    tags={demoTags}
                                    activeTag={activeDemoTag}
                                    setActiveTag={setActiveDemoTag}
                                    sortItemsByTag={sortDemosByTag}
                                    handleItemSortBy={handleDemoSortBy}
                                    itemSortBy={demoSortBy}

                                    attemptComplete={attemptComplete}
                                />
                            )
                        } */}
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
