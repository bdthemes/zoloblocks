const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody, ThumbsControl, PopoverControl } = window.zoloModule;

import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import Sortable from './sortable';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode, shapeBuilder, builderShapes } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={false}>
            <Sortable builderShapes={builderShapes} setAttributes={setAttributes} />
        </ZoloPanelBody>
    );
};

export default Inspector;