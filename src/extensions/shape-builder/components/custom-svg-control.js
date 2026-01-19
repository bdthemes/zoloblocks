import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import ShapeBuilderSvgUploader from './svg-uploader';

const CustomSvgControl = ({ value, onChange, item }) => {
    // Only show when shapeType is custom
    if (item?.shapeType !== 'custom') {
        return null;
    }

    return (
        <>
            <BaseControl.VisualLabel>{__('Custom SVG', 'zoloblocks')}</BaseControl.VisualLabel>
            <ShapeBuilderSvgUploader value={value} onChange={onChange} />
        </>
    );
};

export default CustomSvgControl;
