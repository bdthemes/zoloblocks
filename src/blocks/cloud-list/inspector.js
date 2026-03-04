import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { CLOUD_SHAPES, ROTATION_LOCK_CHOOSE, TRIGGER_CHOOSE, CURSOR_TYPES } from './constants';
import objAttributes from './attributes';

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloRangeControl,
    ZoloCardDivider,
    HeaderTabs,
    ColorControl,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloRangeUnit,
    ZoloResponsive,
    ZoloChoose,
    TabPanelControl,
} = window.zoloModule;

export default function Inspector(props) {
    const { attributes, setAttributes, getResponsiveValue, createResponsiveValue } = props;
    const {
        resMode,
        cloudShape,
        rotationLock,
        depth,
        speed,
        triggerOn,
        dragControl,
        wheelZoom,
        reverse,
        shuffleTags,
        noMouse,
        textColor,
        outlineColor,
        outlineThickness,
        outlineDash,
        outlineDashSpace,
        outlineDashSpeed,
        outlineIncrease,
        outlineBorderRadius,
        bgColor,
        bgRadius,
        tagPadding,
        shadowColor,
        shadowBlur,
        activeCursor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/cloud-list"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        {/* Canvas Dimensions – responsive with unit */}
                        <ZoloPanelBody title={__('Canvas', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloResponsive left="85px">
                                <ZoloRangeUnit
                                    label={__('Canvas Width', 'zoloblocks')}
                                    value={getResponsiveValue('canvasWidth')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('canvasWidth', value));
                                    }}
                                    units={{ px: { min: 200, max: 2000, step: 10 } }}
                                />
                            </ZoloResponsive>
                            <ZoloResponsive left="85px">
                                <ZoloRangeUnit
                                    label={__('Canvas Height', 'zoloblocks')}
                                    value={getResponsiveValue('canvasHeight')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue('canvasHeight', value));
                                    }}
                                    units={{ px: { min: 200, max: 2000, step: 10 } }}
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>

                        {/* Cloud Shape & Motion */}
                        <ZoloPanelBody title={__('Cloud Shape & Motion', 'zoloblocks')} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Cloud Shape', 'zoloblocks')}
                                value={cloudShape}
                                options={CLOUD_SHAPES}
                                onChange={(cloudShape) => setAttributes({ cloudShape })}
                            />
                            <ZoloChoose
                                label={__('Rotation Lock', 'zoloblocks')}
                                value={rotationLock}
                                onChange={(rotationLock) => setAttributes({ rotationLock })}
                                options={ROTATION_LOCK_CHOOSE}
                            />
                            <ZoloRangeControl
                                label={__('Depth (Perspective)', 'zoloblocks')}
                                value={depth}
                                onChange={(depth) => setAttributes({ depth })}
                                min={0}
                                max={50}
                            />
                            <ZoloRangeControl
                                label={__('Rotation Speed', 'zoloblocks')}
                                value={speed}
                                onChange={(speed) => setAttributes({ speed })}
                                min={0}
                                max={100}
                            />
                            <ZoloCardDivider />
                            <ZoloChoose
                                label={__('Trigger On', 'zoloblocks')}
                                value={triggerOn}
                                onChange={(triggerOn) => setAttributes({ triggerOn })}
                                options={TRIGGER_CHOOSE}
                            />
                            {triggerOn === 'hover' && (
                                <ZoloToggleControl
                                    label={__('Drag Control', 'zoloblocks')}
                                    checked={dragControl}
                                    onChange={(dragControl) => setAttributes({ dragControl })}
                                />
                            )}
                            <ZoloToggleControl
                                label={__('Wheel Zoom', 'zoloblocks')}
                                checked={wheelZoom}
                                onChange={(wheelZoom) => setAttributes({ wheelZoom })}
                            />
                            <ZoloToggleControl
                                label={__('Reverse Direction', 'zoloblocks')}
                                checked={reverse}
                                onChange={(reverse) => setAttributes({ reverse })}
                            />
                            <ZoloToggleControl
                                label={__('Shuffle Tags', 'zoloblocks')}
                                checked={shuffleTags}
                                onChange={(shuffleTags) => setAttributes({ shuffleTags })}
                            />
                            <ZoloToggleControl
                                label={__('Disable Mouse Interaction', 'zoloblocks')}
                                checked={noMouse}
                                onChange={(noMouse) => setAttributes({ noMouse })}
                            />
                        </ZoloPanelBody>

                        {/* Interaction */}
                        <ZoloPanelBody title={__('Interaction', 'zoloblocks')} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Active Cursor', 'zoloblocks')}
                                value={activeCursor}
                                options={CURSOR_TYPES}
                                onChange={(activeCursor) => setAttributes({ activeCursor })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {/* Tag Appearance – Normal / Hover via TabPanelControl */}
                        <ZoloPanelBody title={__('Tag Appearance', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Global Text Color', 'zoloblocks')}
                                            color={textColor}
                                            onChange={(textColor) => setAttributes({ textColor })}
                                        />
                                        <ZoloResponsive left="85px">
                                            <ZoloRangeUnit
                                                label={__('Font Size', 'zoloblocks')}
                                                value={getResponsiveValue('textHeight')}
                                                onChange={(value) => {
                                                    setAttributes(createResponsiveValue('textHeight', value));
                                                }}
                                                units={{ px: { min: 8, max: 80, step: 1 } }}
                                            />
                                        </ZoloResponsive>
                                        <ZoloCardDivider />
                                        <ColorControl
                                            label={__('Background Color', 'zoloblocks')}
                                            color={bgColor}
                                            onChange={(bgColor) => setAttributes({ bgColor })}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Background Radius', 'zoloblocks')}
                                            value={bgRadius ? `${bgRadius}px` : ''}
                                            onChange={(value) => setAttributes({ bgRadius: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 30, step: 1 } }}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Tag Padding', 'zoloblocks')}
                                            value={tagPadding ? `${tagPadding}px` : ''}
                                            onChange={(value) => setAttributes({ tagPadding: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 50, step: 1 } }}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Outline Color', 'zoloblocks')}
                                            color={outlineColor}
                                            onChange={(outlineColor) => setAttributes({ outlineColor })}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Outline Thickness', 'zoloblocks')}
                                            value={outlineThickness ? `${outlineThickness}px` : ''}
                                            onChange={(value) => setAttributes({ outlineThickness: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 20, step: 1 } }}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Outline Border Radius', 'zoloblocks')}
                                            value={outlineBorderRadius ? `${outlineBorderRadius}px` : ''}
                                            onChange={(value) => setAttributes({ outlineBorderRadius: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 20, step: 1 } }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Size Increase on Hover', 'zoloblocks')}
                                            value={outlineIncrease}
                                            onChange={(outlineIncrease) => setAttributes({ outlineIncrease })}
                                            min={0}
                                            max={30}
                                        />
                                        <ZoloCardDivider />
                                        <ZoloRangeUnit
                                            label={__('Dash Size', 'zoloblocks')}
                                            value={outlineDash ? `${outlineDash}px` : ''}
                                            onChange={(value) => setAttributes({ outlineDash: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 20, step: 1 } }}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Dash Space', 'zoloblocks')}
                                            value={outlineDashSpace ? `${outlineDashSpace}px` : ''}
                                            onChange={(value) => setAttributes({ outlineDashSpace: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 20, step: 1 } }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Dash Speed', 'zoloblocks')}
                                            value={outlineDashSpeed}
                                            onChange={(outlineDashSpeed) => setAttributes({ outlineDashSpeed })}
                                            min={-10}
                                            max={10}
                                        />
                                        <ZoloCardDivider />
                                        <ColorControl
                                            label={__('Shadow Color', 'zoloblocks')}
                                            color={shadowColor}
                                            onChange={(shadowColor) => setAttributes({ shadowColor })}
                                        />
                                        <ZoloRangeUnit
                                            label={__('Shadow Blur', 'zoloblocks')}
                                            value={shadowBlur ? `${shadowBlur}px` : ''}
                                            onChange={(value) => setAttributes({ shadowBlur: parseInt(value) || 0 })}
                                            units={{ px: { min: 0, max: 40, step: 1 } }}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/cloud-list"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
