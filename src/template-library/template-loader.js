import { BaseControl, SelectControl, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';
import InnerTemplate from './inner-template';
import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Content from './components/content';

const TemplatesLoader = ({
    pullDemos,
    setPullDemos,
    pullNewDemos,
    setIsOpen,
    handleImportTemplate,


    // favorites
    favIds,
    handleFavTemplate,
}) => {

    const headerProps = {
        pullDemos,
        setPullDemos,
        pullNewDemos,
        setIsOpen,
    };

    const contentProps = {
        handleImportTemplate,
        favIds,
        handleFavTemplate,
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
