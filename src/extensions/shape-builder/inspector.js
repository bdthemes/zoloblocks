import { __ } from '@wordpress/i18n';

const { ZoloToggleControl, ZoloSelectControl, ZoloCardDivider, ZoloPanelBody, ZoloRepeater, ZoloRangeControl } = window.zoloModule;

import {
    SHAPES_DATA,
    ANIMATION_EFFECTS,
    ANIMATION_TRIGGER,
    ANIMATION_EASING,
    ANIMATION_REPEAT,
    GRADIENT_TYPE,
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
} from './constants';
import ShapeBuilderColorGroup from './components/color-group';
import ShapeBuilderAnimation from './components/animation';
import ShapeControl from './components/shape-control';
import CustomSvgControl from './components/custom-svg-control';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { enableShapeBuilder, shape = [] } = attributes;

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <ZoloToggleControl
                label={__('Enable Shape Builder', 'zoloblocks')}
                checked={enableShapeBuilder || false}
                onChange={() =>
                    setAttributes({
                        enableShapeBuilder: !enableShapeBuilder,
                    })
                }
            />

            {enableShapeBuilder && (
                <>
                    <ZoloRepeater
                        repeaterItems={shape}
                        onChange={(newShape) => setAttributes({ shape: newShape })}
                        defaultLabel="Shape"
                        addUniqueId={true}
                    >
                        <ShapeControl name="shapeType" default="circle" />

                        <CustomSvgControl
                            name="custom"
                            default={{
                                id: '',
                                svg: '',
                            }}
                        />

                        <ZoloCardDivider />

                        <ShapeBuilderColorGroup
                            name="svgColor"
                            default={{
                                fillType: 'solid',
                                color: '#08AEEC',
                                gradientColor1: '#08AEEC',
                                gradientColor2: '#20E2AD',
                                gradientLocation1: 0,
                                gradientLocation2: 100,
                                gradientType: 'linear',
                                gradientAngle: 90,
                            }}
                        />

                        <ZoloCardDivider />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Z-Index', 'zoloblocks')}
                            name="zIndex"
                            default={1}
                            min={-999}
                            max={999}
                            step={1}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Width (px)', 'zoloblocks')}
                            name="width"
                            default={200}
                            min={10}
                            max={500}
                            step={1}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Height (px)', 'zoloblocks')}
                            name="height"
                            default={200}
                            min={10}
                            max={500}
                            step={1}
                        />

                        <ZoloCardDivider />

                        <ZoloSelectControl
                            label={__('Horizontal Position', 'zoloblocks')}
                            name="horizontalOrientation"
                            default="start"
                            options={HORIZONTAL_ORIENTATION}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Horizontal Offset', 'zoloblocks')}
                            name="horizontalOffset"
                            default={0}
                            min={-500}
                            max={500}
                            step={1}
                        />

                        <ZoloSelectControl
                            label={__('Vertical Position', 'zoloblocks')}
                            name="verticalOrientation"
                            default="start"
                            options={VERTICAL_ORIENTATION}
                        />

                        <ZoloRangeControl
                            className="zolo-flex-col-control"
                            label={__('Vertical Offset', 'zoloblocks')}
                            name="verticalOffset"
                            default={0}
                            min={-500}
                            max={500}
                            step={1}
                        />

                        <ZoloCardDivider />

                        <ShapeBuilderAnimation
                            name="animation"
                            default={{
                                animationName: 'fade-in',
                                animationDuration: '0.5s',
                                animationDelay: '0s',
                            }}
                        />
                    </ZoloRepeater>
                </>
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
