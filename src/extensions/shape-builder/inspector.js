const {
    ColorControl,
    ResRangeControl,
    TabPanelControl,
    ZoloPanelBody,
    ThumbsControl,
    PopoverControl,
    generateResRangeAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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

    useEffect(() => {
        if (attributes?.builderShapes?.length > 0) {
            console.log('builderShapes', attributes.builderShapes);
            builderShapes.forEach((shape) => {
                //define a new attribute for each shape
                setAttributes({
                    ...generateNormalBGAttributes('shapeBG' + shape.id),
                });
            });
        }
    }, [builderShapes]);

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={false}>
            <Sortable panelProps={panelProps} requiredProps={requiredProps} />
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
