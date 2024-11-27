const {
    ZoloPanelBody,
} = window.zoloModule;
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import Sortable from './sortable';


const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode} = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={false}>
            <Sortable panelProps={panelProps} requiredProps={requiredProps} />
        </ZoloPanelBody>
    );
};

export default Inspector;
