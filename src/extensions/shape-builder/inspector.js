const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody, ThumbsControl, PopoverControl } = window.zoloModule;

import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode, shapeBuilder } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <h3>Shape Builder</h3>
        </ZoloPanelBody>
    );
};

export default Inspector;