import apiFetch from '@wordpress/api-fetch';
import { Button, Modal } from '@wordpress/components';
import { subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { createRoot } from 'react-dom/client'; // ?? todo: remove if @wordpress/element is updated

/**
 * Template Library Style
 */
import './library.scss';

/**
 * Internal dependencies
 */
import Templates from './components/templates';
import PreLoader from './preloader';
import TemplatesLoader from './template-loader';

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
    const [allTemplates, setAllTemplates] = useState([]);
    const [pullDemos, setPullDemos] = useState(false);
    const [activeTab, setActiveTab] = useState('patterns');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);

    /**
     * =====
     * Page Templates: Templates (Pro, Free)
     * =====
     */

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
                return template?.status === 'free';
            } else if (patternsType === 'pro') {
                return template?.status === 'pro';
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
                return template.categories.includes(activePatternCat);
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
                return template?.status === 'free';
            } else if (pagesType === 'pro') {
                return template?.status === 'pro';
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
                return template.categories.includes(activePageCat);
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
    const [activeDemoCat, setActiveDemoCat] = useState('all');
    const [demoTags, setDemoTags] = useState([]);
    const [activeDemoTag, setActiveDemoTag] = useState('');
    const [demoSortBy, setDemoSortBy] = useState('newest');

    // Filter by Demos Type
    useEffect(() => {
        const filteredDemos = allDemos?.filter((template) => {
            if (demosType === 'free') {
                return template?.status === 'free';
            } else if (demosType === 'pro') {
                return template?.status === 'pro';
            } else {
                return true;
            }
        });
        setDemos(filteredDemos.slice(0, number));
        setTotal(filteredDemos.length);
    }, [demosType]); // eslint-disable-line

    // Filter by Category
    useEffect(() => {
        // filter patterns based on category
        const filteredDemos = allDemos?.filter((template) => {
            if (activeDemoCat === 'all') {
                return true;
            } else {
                return template.categories.includes(activeDemoCat);
            }
        });
        setDemos(filteredDemos.slice(0, number));
        setTotal(filteredDemos.length);
    }, [activeDemoCat]); // eslint-disable-line

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

    // Favorite Templates
    const [favIds, setFavIds] = useState([]);
    const [allFavItems, setAllFavItems] = useState([]);
    const [favItems, setFavItems] = useState([]);
    const [favType, setFavType] = useState('');
    const [favCategories, setFavCategories] = useState([]);
    const [activeFavCat, setActiveFavCat] = useState('all');
    const [favTags, setFavTags] = useState([]);
    const [activeFavTag, setActiveFavTag] = useState('');
    const [favSortBy, setFavSortBy] = useState('newest');
    const [favStatus, setFavStatus] = useState(false);

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
        apiFetch({
            path: '/zolo/v1/favorites',
            method: 'GET',
        }).then((response) => {
            if (!response) {
                return;
            }
            const favIds = Object.values(response); // get the values
            setFavIds(favIds);
        });
    }, []);

    // save favorite templates to database
    const handleFavTemplate = (templateID) => {
        // setLoading(true);
        apiFetch({
            path: '/zolo/v1/favorites',
            method: 'POST',
            data: { fav_id: templateID, zolo_nonce: zoloParams?.zolo_nonce },
        }).then((response) => {
            if (!response) {
                return;
            }
            const favIds = Object.values(response); // get the values
            setFavIds(favIds);
            setFavStatus(!favStatus);
        });
    };

    // Filter by Demos Type
    useEffect(() => {
        const filteredFav = allFavItems?.filter((template) => {
            if (favType === 'free') {
                return template?.status === 'free';
            } else if (favType === 'pro') {
                return template?.status === 'pro';
            } else {
                return true;
            }
        });
        setFavItems(filteredFav?.slice(0, number));
        setTotal(filteredFav?.length);
    }, [favType]); // eslint-disable-line

    // Filter by Category
    useEffect(() => {
        // filter patterns based on category
        const filteredFavs = allFavItems?.filter((template) => {
            if (activeFavCat === 'all') {
                return true;
            } else {
                return template.categories.includes(activeFavCat);
            }
        });
        setFavItems(filteredFavs?.slice(0, number));
        setTotal(filteredFavs?.length);
    }, [activeFavCat]); // eslint-disable-line

    // Filter by Tags
    const sortFavByTag = (tag) => {
        setActiveFavTag(tag);
        const filteredFavs = allFavItems?.filter((template) => template.tags.includes(tag));
        setFavItems(filteredFavs);
    };

    // Sorting Demos
    const handleFavSortBy = (value) => {
        setFavSortBy(value);
        const sortedFavs = allFavItems?.sort((a, b) => {
            if (value === 'newest') {
                return new Date(b.created) - new Date(a.created);
            } else if (value === 'oldest') {
                return new Date(a.created) - new Date(b.created);
            }
        });
        setFavItems([...sortedFavs]); // update the state
    };

    useEffect(() => {
        if (favIds?.length > 0) {
            const allFavItemsData = allTemplates?.filter((template) => favIds?.includes(template.id));

            setAllFavItems(allFavItemsData);
            setFavItems(allFavItemsData);

            // set favorite categories
            const favCategories = allFavItemsData?.map((template) => template.categories);
            const uniqueFavCategories = [...new Set(favCategories?.flat())];
            const sortedFavCategories = uniqueFavCategories.sort((a, b) => a.localeCompare(b));
            const favCategoriesArray = sortedFavCategories.map((category) => ({ label: category, value: category }));
            favCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setFavCategories(favCategoriesArray);

            // favorite tags
            const allFavTags = allFavItemsData?.map((template) => template.tags);
            // find top 5 tags based on frequency
            const favTags = allFavTags?.flat().reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {});

            const sortedFavTags = Object.keys(favTags)
                .sort((a, b) => favTags[b] - favTags[a])
                .slice(0, 9);
            setFavTags(sortedFavTags);
        } else {
            setAllFavItems([]);
            setFavItems([]);
            setFavCategories([]);
            setFavTags([]);
        }
    }, [favIds, allTemplates, favStatus]);

    // fetch templates
    const fetchTemplates = async () => {
        setLoading(true);
        apiFetch({
            path: '/zolo/v1/templates',
            method: 'GET',
        }).then((response) => {
            const { data } = response;
            if (!data) {
                console.log('No data found');
                return;
            }

            setAllTemplates(data);

            // set all patterns
            const patterns = data?.filter((template) => template.template_type === 'patterns');
            setAllPatterns(patterns);
            setPatterns(patterns);

            // set pattern categories
            const patternCategories = patterns
                ?.filter((template) => template.template_type === 'patterns')
                .map((template) => template.categories);
            const uniquePatternCategories = [...new Set(patternCategories?.flat())];
            const sortedPatternCategories = uniquePatternCategories.sort((a, b) => a.localeCompare(b));
            const patternCategoriesArray = sortedPatternCategories.map((category) => ({ label: category, value: category }));
            patternCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setPatternCategories(patternCategoriesArray);

            // patterns tags
            const allPatternTags = patterns?.map((template) => template.tags);
            // find top 5 tags based on frequency
            const patternTags = allPatternTags?.flat().reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {});

            const sortedPatternTags = Object.keys(patternTags)
                .sort((a, b) => patternTags[b] - patternTags[a])
                .slice(0, 9);
            setPatternTags(sortedPatternTags);

            // set all pages
            const pages = data?.filter((template) => template.template_type === 'pages');
            setAllPages(pages);
            setPages(pages);

            // set page categories
            const pageCategories = pages?.filter((template) => template.template_type === 'pages').map((template) => template.categories);
            const uniquePageCategories = [...new Set(pageCategories?.flat())];
            const sortedPageCategories = uniquePageCategories.sort((a, b) => a.localeCompare(b));
            const pageCategoriesArray = sortedPageCategories.map((category) => ({ label: category, value: category }));
            pageCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setPageCategories(pageCategoriesArray);

            // page tags
            const allPageTags = pages?.map((template) => template.tags);
            // find top 5 tags based on frequency
            const pageTags = allPageTags?.flat().reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {});

            const sortedPageTags = Object.keys(pageTags)
                .sort((a, b) => pageTags[b] - pageTags[a])
                .slice(0, 9);
            setPageTags(sortedPageTags);

            // stop loading
            setLoading(false);
        });
    };

    // fetch demo templates
    const fetchDemoTemplates = async () => {
        setLoading(true);
        apiFetch({
            path: '/zolo/v1/demos',
            method: 'GET',
        }).then((response) => {
            const { data } = response;
            if (!data) {
                console.log('No data found');
                return;
            }

            // add demos to all templates
            setAllTemplates((prev) => [...prev, ...data]);

            // set all demos
            const demos = data;
            setAllDemos(demos);
            setDemos(demos);

            // set demo categories
            const demoCategories = demos?.filter((template) => template.template_type === 'demos').map((template) => template.categories);
            const uniqueDemoCategories = [...new Set(demoCategories?.flat())];
            const sortedDemoCategories = uniqueDemoCategories.sort((a, b) => a.localeCompare(b));
            const demoCategoriesArray = sortedDemoCategories.map((category) => ({ label: category, value: category }));
            demoCategoriesArray.unshift({ label: __('All', 'zoloblocks'), value: 'all' });
            setDemoCategories(demoCategoriesArray);

            // demo tags
            const allDemoTags = demos?.map((template) => template.tags);
            // find top 5 tags based on frequency
            const demoTags = allDemoTags?.flat().reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {});

            const sortedDemoTags = Object.keys(demoTags)
                .sort((a, b) => demoTags[b] - demoTags[a])
                .slice(0, 9);
            setDemoTags(sortedDemoTags);

            // stop loading
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

        jQuery.ajax({
            url: zoloParams?.ajaxurl,
            type: 'POST',
            nonce: zoloParams?.nonce,
            data: {
                action: 'zolo_demo_template_pull',
            },
            success: function (response) {
                if (response.success) {
                    fetchDemoTemplates();
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
        // fetch templates
        fetchTemplates();

        // fetch demo templates
        fetchDemoTemplates();
    }, [pullDemos]);

    // filter templates based on search text
    useEffect(() => {
        if (searchText !== '' && activeTab === 'patterns') {
            const filteredPatterns = allPatterns?.filter((template) => {
                return template.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setPatterns(filteredPatterns);
        } else {
            setPatterns(allPatterns); // Reset to all patterns if no search text
        }

        if (searchText !== '' && activeTab === 'pages') {
            const filteredPages = allPages?.filter((template) => {
                return template.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setPages(filteredPages);
        } else {
            setPages(allPages); // Reset to all pages if no search text
        }

        if (searchText !== '' && activeTab === 'demos') {
            const filteredDemos = allDemos?.filter((template) => {
                return template.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setDemos(filteredDemos);
        } else {
            setDemos(allDemos); // Reset to all demos if no search text
        }

        if (searchText !== '' && activeTab === 'favorites') {
            const filteredFavs = allFavItems?.filter((template) => {
                return template.title.toLowerCase().includes(searchText.toLowerCase());
            });
            setFavItems(filteredFavs);
        } else {
            setFavItems(allFavItems); // Reset to all favorites if no search text
        }
    }, [searchText, activeTab, allPatterns, number, allDemos]); // eslint-disable-line

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

    console.log('all:', allTemplates);

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
                        {
                            // Patterns
                            activeTab === 'patterns' && (
                                <TemplatesLoader
                                    TABS={TABS}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    searchText={searchText}
                                    setSearchText={setSearchText}
                                    pullDemos={pullDemos}
                                    setPullDemos={setPullDemos}
                                    pullNewDemos={pullNewDemos}
                                    setIsOpen={setIsOpen}
                                    number={number}
                                    setNumber={setNumber}
                                    loading={loading}
                                    handleImportTemplate={handleImportTemplate}
                                    type={patternsType}
                                    setType={setPatternsType}
                                    categories={patternCategories}
                                    activeCat={activePatternCat}
                                    setActiveCat={setActivePatternCat}
                                    allItems={allPatterns}
                                    items={patterns}
                                    setItems={setPatterns}
                                    tags={patternTags}
                                    activeTag={activePatternTag}
                                    setActiveTag={setActivePatternTag}
                                    sortItemsByTag={sortPatternsByTag}
                                    handleItemSortBy={handlePatternSortBy}
                                    itemSortBy={patternSortBy}
                                    // fav templates
                                    favIds={favIds}
                                    handleFavTemplate={handleFavTemplate}
                                />
                            )
                        }
                        {
                            // Demos
                            activeTab === 'demos' && (
                                <TemplatesLoader
                                    TABS={TABS}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    searchText={searchText}
                                    setSearchText={setSearchText}
                                    pullDemos={pullDemos}
                                    setPullDemos={setPullDemos}
                                    pullNewDemos={pullNewDemos}
                                    setIsOpen={setIsOpen}
                                    number={number}
                                    setNumber={setNumber}
                                    loading={loading}
                                    handleImportTemplate={handleImportTemplate}
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
                                    // fav templates
                                    favIds={favIds}
                                    handleFavTemplate={handleFavTemplate}
                                />
                            )
                        }
                        {activeTab === 'templates' && (
                            <Templates
                                TABS={TABS}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                searchText={searchText}
                                setSearchText={setSearchText}
                                pullDemos={pullDemos}
                                setPullDemos={setPullDemos}
                                pullNewDemos={pullNewDemos}
                                setIsOpen={setIsOpen}
                            />
                        )}
                        {activeTab === 'pages' && (
                            <TemplatesLoader
                                TABS={TABS}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                searchText={searchText}
                                setSearchText={setSearchText}
                                pullDemos={pullDemos}
                                setPullDemos={setPullDemos}
                                pullNewDemos={pullNewDemos}
                                setIsOpen={setIsOpen}
                                number={number}
                                setNumber={setNumber}
                                loading={loading}
                                handleImportTemplate={handleImportTemplate}
                                type={pagesType}
                                setType={setPagesType}
                                categories={pageCategories}
                                activeCat={activePageCat}
                                setActiveCat={setActivePageCat}
                                allItems={allPages}
                                items={pages}
                                setItems={setPages}
                                tags={pageTags}
                                activeTag={activePageTag}
                                setActiveTag={setActivePageTag}
                                sortItemsByTag={sortPagesByTag}
                                handleItemSortBy={handlePageSortBy}
                                itemSortBy={pageSortBy}
                                // fav templates
                                favIds={favIds}
                                handleFavTemplate={handleFavTemplate}
                            />
                        )}
                        {
                            // favorites
                            activeTab === 'favorites' && (
                                <TemplatesLoader
                                    TABS={TABS}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    searchText={searchText}
                                    setSearchText={setSearchText}
                                    pullDemos={pullDemos}
                                    setPullDemos={setPullDemos}
                                    pullNewDemos={pullNewDemos}
                                    setIsOpen={setIsOpen}
                                    number={number}
                                    setNumber={setNumber}
                                    loading={loading}
                                    handleImportTemplate={handleImportTemplate}
                                    type={favType}
                                    setType={setFavType}
                                    categories={favCategories}
                                    activeCat={activeFavCat}
                                    setActiveCat={setActiveFavCat}
                                    allItems={allFavItems}
                                    items={favItems}
                                    setItems={setFavItems}
                                    tags={favTags}
                                    activeTag={activeFavTag}
                                    setActiveTag={setActiveFavTag}
                                    sortItemsByTag={sortFavByTag}
                                    handleItemSortBy={handleFavSortBy}
                                    itemSortBy={favSortBy}
                                    // fav templates
                                    favIds={favIds}
                                    handleFavTemplate={handleFavTemplate}
                                />
                            )
                        }
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
