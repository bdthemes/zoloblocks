import { BaseControl, SelectControl, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';
import InnerTemplate from './inner-template';
import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Content from './components/content';

const TemplatesLoader = ({
    activeTab,
    setActiveTab,
    searchText,
    setSearchText,
    pullDemos,
    setPullDemos,
    pullNewDemos,
    setIsOpen,
    number,
    setNumber,
    loading,
    handleImportTemplate,
    // specific to items
    type,
    setType,
    categories,
    activeCat,
    setActiveCat,
    allItems,
    items,
    setItems,
    tags,
    activeTag,
    setActiveTag,
    sortItemsByTag,
    handleItemSortBy,
    itemSortBy,

    // favorites
    favIds,
    handleFavTemplate,
    attemptComplete,
}) => {
    let itemText = '';
    switch (activeTab) {
        case 'pages':
            itemText = 'Pages';
            break;
        case 'demos':
            itemText = 'Demos';
            break;
        case 'templates':
            itemText = 'Templates';
            break;
        case 'favorites':
            itemText = 'Favorites Items';
            break;
        default:
            itemText = 'Patterns';
            break;
    }

    const headerProps = {
        activeTab,
        setActiveTab,
        pullDemos,
        setPullDemos,
        pullNewDemos,
        searchText,
        setSearchText,
        setIsOpen,
    };

    const contentProps = {
        items,
        number,
        setNumber,
        handleImportTemplate,
        favIds,
        handleFavTemplate,
        tags,
        activeTag,
        setActiveTag,
        setItems,
        allItems,
        itemSortBy,
        handleItemSortBy,
        sortItemsByTag,
        loading,
        itemText,
        attemptComplete,
    };

    // const al
    return (
        <>
            <Sidebar />
            <div className="demos-container">
                <Header props={headerProps} />
                <Content props={contentProps} />
            </div>
        </>
    );
};
export default TemplatesLoader;
