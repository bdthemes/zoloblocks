const { ZoloPanelBody, PopoverControl, ZoloToggleControl, TabPanelControl, ResRangeControl, ResAlignmentControl,  } = window.zoloModule || {};
import { __ } from '@wordpress/i18n';

// reset att
const resetAtt = (atts, setAttributes) => {
    atts.forEach((att) => {
        setAttributes({ [`zolo_${att}Range`]: '', [`zolo_TAB${att}Range`]: '', [`zolo_MOB${att}Range`]: '' });
    });
};

const hasValCheck = (att, attributes, customCondition = false, customValue = null) => {
    const { [`zolo_${att}Range`]: deskAtt, [`zolo_TAB${att}Range`]: tabAtt, [`zolo_MOB${att}Range`]: mobAtt } = attributes;

    // Define a helper function to check the value
    const popoverHasAttrVal = (value) => {
        if (customCondition) {
            return value !== undefined && value !== null && value !== '' && value !== 0 && value != customValue;
        } else {
            return value !== undefined && value !== null && value !== '' && value !== 0;
        }
    };

    // Check if any of the attribute values meet the condition
    if (popoverHasAttrVal(deskAtt) || popoverHasAttrVal(tabAtt) || popoverHasAttrVal(mobAtt)) {
        return true;
    } else {
        return false;
    }
};

import {
    DEFAULT_ALIGNS,
    DEFAULT_ALIGNS_VERTICAL,
    TRANSLATE_ICON,
    ROTATE_ICON,
    SCALE_ICON,
    SKEW_ICON,
    FLIP_ICON,
    ICON_HPOSITIONS,
    VPOSITIONS,
    CONTENT_POSITIONS,
    CONTENT_WIDTH,
} from '../../global/constants.js';
const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes, requiredProps } = panelProps;

    const {parentClasses, transformAnimationActive, transformRotate3DActive, transformRotate3DActiveHover, scaleProportionally, scaleProportionallyHover, transformFlipHorizontal, transformFlipVertical, transformFlipHorizontalHover, transformFlipVerticalHover } = attributes;

    return (
        <>
            <ZoloPanelBody title={__('Transform', 'zoloblocks')} panelProps={panelProps} extraPanel={true} isNew={true}>
                <ZoloToggleControl
                    label={__('Transform', 'zoloblocks')}
                    checked={transformAnimationActive}
                    onChange={() => {
                        setAttributes({
                            transformAnimationActive: !transformAnimationActive,
                        });
                        if (!transformAnimationActive) {
                            setAttributes({
                                parentClasses: [...parentClasses, 'zolo-transform-animation'],
                            });
                        } else {
                            setAttributes({
                                parentClasses: parentClasses.filter(function (e) {
                                    return e !== 'zolo-transform-animation';
                                }),
                            });
                        }
                    }}
                />
                {transformAnimationActive && (
                    <TabPanelControl
                        normalComponents={
                            <>
                                <PopoverControl
                                    label={__('Translate', 'zoloblocks')}
                                    icon={TRANSLATE_ICON}
                                    onReset={() => resetAtt(['translateX', 'translateY'], setAttributes)}
                                    hasValue={hasValCheck('translateX', attributes) || hasValCheck('translateY', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('translateX', 'zoloblocks')}
                                        controlName={'translateX'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                    <ResRangeControl
                                        label={__('translateY', 'zoloblocks')}
                                        controlName={'translateY'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Rotate', 'zoloblocks')}
                                    icon={ROTATE_ICON}
                                    onReset={() =>
                                        resetAtt(
                                            ['transformRotate', 'transformRotateX', 'transformRotateY', 'transformPerspective'],
                                            setAttributes
                                        )
                                    }
                                    hasValue={
                                        hasValCheck('transformRotate', attributes) ||
                                        hasValCheck('transformRotateX', attributes) ||
                                        hasValCheck('transformPerspective', attributes, true, '1000') ||
                                        hasValCheck('transformRotateY', attributes)
                                    }
                                >
                                    {!transformRotate3DActive && (
                                        <ResRangeControl
                                            label={__('Rotate', 'zoloblocks')}
                                            controlName={'transformRotate'}
                                            requiredProps={requiredProps}
                                            min={-180}
                                            max={180}
                                            noUnits={true}
                                        />
                                    )}
                                    <ZoloToggleControl
                                        label={__('Rotate 3D', 'zoloblocks')}
                                        checked={transformRotate3DActive}
                                        onChange={() => {
                                            setAttributes({
                                                transformRotate3DActive: !transformRotate3DActive,
                                            });
                                        }}
                                    />
                                    {transformRotate3DActive && (
                                        <>
                                            <ResRangeControl
                                                label={__('RotateX(deg)', 'zoloblocks')}
                                                controlName={'transformRotateX'}
                                                requiredProps={requiredProps}
                                                min={-180}
                                                max={180}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('RotateY(deg)', 'zoloblocks')}
                                                controlName={'transformRotateY'}
                                                requiredProps={requiredProps}
                                                min={-180}
                                                max={180}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('Perspective(deg)', 'zoloblocks')}
                                                controlName={'transformPerspective'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={1000}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Scale', 'zoloblocks')}
                                    icon={SCALE_ICON}
                                    onReset={() => resetAtt(['transformScaleX', 'transformScaleY', 'transformScale'], setAttributes)}
                                    hasValue={
                                        hasValCheck('transformScaleX', attributes) ||
                                        hasValCheck('transformScaleY', attributes) ||
                                        hasValCheck('transformScale', attributes)
                                    }
                                >
                                    <ZoloToggleControl
                                        label={__('Keep Proportions', 'zoloblocks')}
                                        checked={scaleProportionally}
                                        onChange={() => {
                                            setAttributes({
                                                scaleProportionally: !scaleProportionally,
                                            });
                                        }}
                                    />
                                    {!scaleProportionally && (
                                        <>
                                            <ResRangeControl
                                                label={__('ScaleX', 'zoloblocks')}
                                                controlName={'transformScaleX'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('ScaleY', 'zoloblocks')}
                                                controlName={'transformScaleY'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                    {scaleProportionally && (
                                        <>
                                            <ResRangeControl
                                                label={__('Scale', 'zoloblocks')}
                                                controlName={'transformScale'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Skew', 'zoloblocks')}
                                    icon={SKEW_ICON}
                                    onReset={() => resetAtt(['transformSkewX', 'transformSkewY'], setAttributes)}
                                    hasValue={hasValCheck('transformSkewX', attributes) || hasValCheck('transformSkewY', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('SkewX (deg)', 'zoloblocks')}
                                        controlName={'transformSkewX'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ResRangeControl
                                        label={__('SkewY (deg)', 'zoloblocks')}
                                        controlName={'transformSkewY'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Flip', 'zoloblocks')}
                                    icon={FLIP_ICON}
                                    onReset={() => resetAtt(['transformOriginX', 'transformOriginY'], setAttributes)}
                                    hasValue={hasValCheck('transformOriginX', attributes) || hasValCheck('transformOriginY', attributes)}
                                >
                                    <ZoloToggleControl
                                        label={__('Flip Horizontal', 'zoloblocks')}
                                        checked={transformFlipHorizontal}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipHorizontal: !transformFlipHorizontal,
                                            });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Flip Vertical', 'zoloblocks')}
                                        checked={transformFlipVertical}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipVertical: !transformFlipVertical,
                                            });
                                        }}
                                    />
                                    {(transformFlipHorizontal || transformFlipVertical) && (
                                        <>
                                            <ResAlignmentControl
                                                label={__('X Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginX'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS}
                                            />
                                            <ResAlignmentControl
                                                label={__('Y Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginY'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                            </>
                        }
                        hoverComponents={
                            <>
                                <PopoverControl
                                    label={__('Translate', 'zoloblocks')}
                                    icon={TRANSLATE_ICON}
                                    onReset={() => resetAtt(['translateXHover', 'translateYHover'], setAttributes)}
                                    hasValue={hasValCheck('translateXHover', attributes) || hasValCheck('translateYHover', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('translateX', 'zoloblocks')}
                                        controlName={'translateXHover'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                    <ResRangeControl
                                        label={__('translateY', 'zoloblocks')}
                                        controlName={'translateYHover'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Rotate', 'zoloblocks')}
                                    icon={ROTATE_ICON}
                                    onReset={() =>
                                        resetAtt(
                                            [
                                                'transformRotateHover',
                                                'transformRotateXHover',
                                                'transformPerspectiveHover',
                                                'transformRotateYHover',
                                            ],
                                            setAttributes
                                        )
                                    }
                                    hasValue={
                                        hasValCheck('transformRotateHover', attributes) ||
                                        hasValCheck('transformRotateXHover', attributes) ||
                                        hasValCheck('transformPerspectiveHover', attributes, true, '1000') ||
                                        hasValCheck('transformRotateYHover', attributes)
                                    }
                                >
                                    {!transformRotate3DActiveHover && (
                                        <ResRangeControl
                                            label={__('Rotate', 'zoloblocks')}
                                            controlName={'transformRotateHover'}
                                            requiredProps={requiredProps}
                                            min={-180}
                                            max={180}
                                            noUnits={true}
                                        />
                                    )}
                                    <ZoloToggleControl
                                        label={__('Rotate 3D', 'zoloblocks')}
                                        checked={transformRotate3DActiveHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformRotate3DActiveHover: !transformRotate3DActiveHover,
                                            });
                                        }}
                                    />
                                    {transformRotate3DActiveHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('RotateX(deg)', 'zoloblocks')}
                                                controlName={'transformRotateXHover'}
                                                requiredProps={requiredProps}
                                                min={-180}
                                                max={180}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('RotateY(deg)', 'zoloblocks')}
                                                controlName={'transformRotateYHover'}
                                                requiredProps={requiredProps}
                                                min={-180}
                                                max={180}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('Perspective(deg)', 'zoloblocks')}
                                                controlName={'transformPerspectiveHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={1000}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl label={__('Scale', 'zoloblocks')} icon={SCALE_ICON}>
                                    <ZoloToggleControl
                                        label={__('Keep Proportions', 'zoloblocks')}
                                        checked={scaleProportionallyHover}
                                        onChange={() => {
                                            setAttributes({
                                                scaleProportionallyHover: !scaleProportionallyHover,
                                            });
                                        }}
                                    />
                                    {!scaleProportionallyHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('ScaleX', 'zoloblocks')}
                                                controlName={'transformScaleXHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('ScaleY', 'zoloblocks')}
                                                controlName={'transformScaleYHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                    {scaleProportionallyHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('Scale', 'zoloblocks')}
                                                controlName={'transformScaleHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl label={__('Skew', 'zoloblocks')} icon={SKEW_ICON}>
                                    <ResRangeControl
                                        label={__('SkewX (deg)', 'zoloblocks')}
                                        controlName={'transformSkewXHover'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ResRangeControl
                                        label={__('SkewY (deg)', 'zoloblocks')}
                                        controlName={'transformSkewYHover'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                </PopoverControl>
                                <PopoverControl label={__('Flip', 'zoloblocks')} icon={FLIP_ICON}>
                                    <ZoloToggleControl
                                        label={__('Flip Horizontal', 'zoloblocks')}
                                        checked={transformFlipHorizontalHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipHorizontalHover: !transformFlipHorizontalHover,
                                            });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Flip Vertical', 'zoloblocks')}
                                        checked={transformFlipVerticalHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipVerticalHover: !transformFlipVerticalHover,
                                            });
                                        }}
                                    />
                                    {(transformFlipHorizontalHover || transformFlipVerticalHover) && (
                                        <>
                                            <ResAlignmentControl
                                                label={__('X Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginXHover'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS}
                                            />
                                            <ResAlignmentControl
                                                label={__('Y Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginYHover'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <ResRangeControl
                                    label={__('Transition Duration (ms)', 'zoloblocks')}
                                    controlName={'transitionDuration'}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={5000}
                                    step={100}
                                    noUnits={true}
                                />
                            </>
                        }
                    />
                )}
            </ZoloPanelBody>
        </>
    );
};

export default Inspector;
