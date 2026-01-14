import { SHAPES_DATA } from "../constants";
import { __ } from "@wordpress/i18n";
import { BaseControl } from "@wordpress/components";
import ShapeBuilderSvgUploader from "./svg-uploader";

const ShapeControl = ({ value, onChange }) => {
    const { ZoloSelectControl } = window.zoloModule;
    return (
        <>
            <ZoloSelectControl
                label={__('Shape Type', 'zoloblocks')}
                options={SHAPES_DATA}
                value={value?.shapeType}
                onChange={(nextValue) => onChange({ ...value, shapeType: nextValue })}
            />
            {
                value?.shapeType === 'custom' && (
                    <>
                        <BaseControl.VisualLabel>{__('Custom SVG', 'zoloblocks')}</BaseControl.VisualLabel>
                        <ShapeBuilderSvgUploader
                            value={value?.custom}
                            onChange={(nextValue) => onChange({ ...value, custom: nextValue })}
                        />
                    </>
                )
            }
        </>
    )
}

export default ShapeControl;