const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody, ThumbsControl, PopoverControl } = window.zoloModule;
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import Sortable from './sortable';

import { SHAPE_BUILDER_PS } from './constants';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode, shapeBuilder, builderShapes, shapeBuilderPs } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={false}>
            <Sortable builderShapes={builderShapes} setAttributes={setAttributes} />
            {/* <SelectControl
                label={__('Position', 'zoloblocks')}
                value={shapeBuilderPs}
                options={SHAPE_BUILDER_PS}
                onChange={(value) => setAttributes({ shapeBuilderPs: value })}
            /> */}
        </ZoloPanelBody>
    );
};

export default Inspector;
