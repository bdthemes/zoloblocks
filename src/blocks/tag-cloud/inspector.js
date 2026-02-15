import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import objAttributes from './attributes';
import { NAME_TYPOGRAPHY, COUNT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import QuerySettings from './query-settings';

const {
    ZoloSelectControl,
    ZoloCardDivider,
    ZoloToggleControl,
    ZoloRangeControl,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ZoloNumberControl,
} = window.zoloModule;

import {
    PRESETS,
    COLUMNS_GAP,
    COUNT_PADDING,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
} from './constants';

export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        skin,
        openInNewTab,
        showCount,
        nameColor,
        nameHoverColor,
        countColor,
        countBgColor,
        countHoverColor,
        countBgHoverColor,
        tagCloudPro,
        itemHoverOpacity,
    } = attributes;
    const { enableMultipleBG } = tagCloudPro ?? {};
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const multipleBgControl = applyFilters('zolo.blocks.tagCloud.style.controls.multipleBg', [], props);
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Skin', 'zoloblocks')}
                                value={skin}
                                options={[
                                    { label: __('Default', 'zoloblocks'), value: 'default' },
                                    { label: __('Animated', 'zoloblocks'), value: 'animated' },
                                ]}
                                onChange={(skin) => {
                                    setAttributes({ skin });
                                }}
                            />
                            {
                                skin === 'default' && (
                                    <ZoloToggleControl
                                        label={__('Count', 'zoloblocks')}
                                        checked={showCount}
                                        onChange={(showCount) => setAttributes({ showCount })}
                                    />
                                )
                            }
                            <ZoloToggleControl
                                label={__('Open in a New tab', 'zoloblocks')}
                                checked={openInNewTab}
                                onChange={(openInNewTab) => setAttributes({ openInNewTab })}
                            />
                            {
                                skin === 'animated' && (
                                    <>
                                        <ZoloSelectControl
                                            label={__('Cloud Shape', 'zoloblocks')}
                                            value={attributes?.cloudShape}
                                            options={[
                                                { label: __('Sphere', 'zoloblocks'), value: 'sphere' },
                                                { label: __('Vcylinder', 'zoloblocks'), value: 'vcylinder' },
                                                { label: __('Hcylinder', 'zoloblocks'), value: 'hcylinder' },
                                                { label: __('Hring', 'zoloblocks'), value: 'hring' },
                                            ]}
                                            onChange={(cloudShape) => {
                                                setAttributes({ cloudShape });
                                            }}
                                        />
                                        <ZoloSelectControl
                                            label={__('Rotation Lock', 'zoloblocks')}
                                            value={attributes?.rotationLock}
                                            options={[
                                                { label: __('None', 'zoloblocks'), value: '' },
                                                { label: __('X', 'zoloblocks'), value: 'x' },
                                                { label: __('Y', 'zoloblocks'), value: 'y' },
                                            ]}
                                            onChange={(rotationLock) => {
                                                setAttributes({ rotationLock });
                                            }}
                                        />
                                        <ZoloNumberControl
                                            label={__('Canvas Size', 'zoloblocks')}
                                            value={Number(attributes.canvasSize)}
                                            onChange={(value) => {
                                                setAttributes({ canvasSize: Number(value) });
                                            }}
                                            min={100}
                                            max={2000}
                                        />
                                        <ZoloCardDivider />
                                        <ZoloSelectControl
                                            label={__('Active Cursor', 'zoloblocks')}
                                            value={attributes?.activeCursor}
                                            options={[
                                                { label: __('Pointer', 'zoloblocks'), value: 'pointer' },
                                                { label: __('CrossHair', 'zoloblocks'), value: 'crosshair' },
                                                { label: __('Cursor', 'zoloblocks'), value: 'cursor' },
                                                { label: __('Text', 'zoloblocks'), value: 'text' },
                                                { label: __('Wait', 'zoloblocks'), value: 'wait' },
                                                { label: __('Progress', 'zoloblocks'), value: 'progress' },
                                                { label: __('Help', 'zoloblocks'), value: 'help' },
                                            ]}
                                            onChange={(activeCursor) => {
                                                setAttributes({ activeCursor });
                                            }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Depth', 'zoloblocks')}
                                            value={attributes?.depth}
                                            onChange={(depth) => {
                                                setAttributes({ depth });
                                            }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Speed', 'zoloblocks')}
                                            value={attributes?.speed}
                                            onChange={(speed) => {
                                                setAttributes({ speed });
                                            }}
                                        />
                                        <ZoloSelectControl
                                            label={__('Trigger On', 'zoloblocks')}
                                            value={attributes?.triggerOn}
                                            onChange={(triggerOn) => setAttributes({ triggerOn })}
                                            options={[
                                                { label: __('Hover', 'zoloblocks'), value: 'hover' },
                                                { label: __('Always', 'zoloblocks'), value: 'always' },
                                            ]}
                                        />
                                        {
                                            attributes?.triggerOn === 'hover' && (
                                                <ZoloToggleControl
                                                    label={__('Drag Control', 'zoloblocks')}
                                                    checked={attributes?.dragControl}
                                                    onChange={(dragControl) => setAttributes({ dragControl })}
                                                />
                                            )
                                        }
                                        <ZoloToggleControl
                                            label={__('Wheel Zoom', 'zoloblocks')}
                                            checked={attributes?.wheelZoom}
                                            onChange={(wheelZoom) => setAttributes({ wheelZoom })}
                                        />
                                        <ZoloRangeControl
                                            label={__('Visible Time', 'zoloblocks')}
                                            value={attributes?.visibleTime}
                                            onChange={(visibleTime) => {
                                                setAttributes({ visibleTime });
                                            }}
                                        />
                                    </>
                                )
                            }
                            {
                                skin === 'default' && (
                                    <>
                                        <ZoloCardDivider />
                                        <ResGapControl
                                            label={__('Gap', 'zoloblocks')}
                                            controlName={COLUMNS_GAP}
                                            requiredProps={requiredProps}
                                            max={100}
                                        />
                                    </>
                                )
                            }
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QuerySettings attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {
                            skin === 'defualt' && (
                                <>
                                    <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    {/*from pro*/}
                                                    {multipleBgControl && multipleBgControl.length > 0 && multipleBgControl}
                                                    {!enableMultipleBG && (
                                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                                    )}

                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={ITEM_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={ITEM_BORDER}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <BoxShadowControl
                                                        controlName={ITEM_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={ITEM_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                        forBorderRadius={true}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    {!enableMultipleBG && (
                                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                                    )}
                                                    <BoxShadowControl
                                                        controlName={ITEM_HOVER_SHADOW}
                                                        requiredProps={requiredProps}
                                                        enableTransition={false}
                                                    />
                                                    <ZoloCardDivider />
                                                    <ZoloRangeControl
                                                        className="zolo-flex-col-control"
                                                        label={__('Opacity', 'zoloblocks')}
                                                        value={itemHoverOpacity}
                                                        onChange={(v) => setAttributes({ itemHoverOpacity: v })}
                                                        min={0}
                                                        max={1}
                                                        step={0.1}
                                                    />
                                                </>
                                            }
                                        />
                                    </ZoloPanelBody>

                                    <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={nameColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                nameColor: color,
                                                            })
                                                        }
                                                    />
                                                    <TypographyDropdown
                                                        label={__('Typography', 'zoloblocks')}
                                                        typoPrefixConstant={NAME_TYPOGRAPHY}
                                                        requiredProps={requiredProps}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={nameHoverColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                nameHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            }
                                        />
                                    </ZoloPanelBody>
                                    {showCount && (
                                        <ZoloPanelBody title={__('Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={countColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    countColor: color,
                                                                })
                                                            }
                                                        />
                                                        <TypographyDropdown
                                                            label={__('Typography', 'zoloblocks')}
                                                            typoPrefixConstant={COUNT_TYPOGRAPHY}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ZoloCardDivider />
                                                        <ColorControl
                                                            label={__('Background', 'zoloblocks')}
                                                            color={countBgColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    countBgColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Padding', 'zoloblocks')}
                                                            controlName={COUNT_PADDING}
                                                            requiredProps={requiredProps}
                                                        />
                                                        <ZoloCardDivider />
                                                        <BorderControl
                                                            label={__('Border', 'zoloblocks')}
                                                            controlName={COUNT_BORDER}
                                                            requiredProps={requiredProps}
                                                        />

                                                        <BoxShadowControl
                                                            controlName={COUNT_SHADOW}
                                                            requiredProps={requiredProps}
                                                            enableTransition={false}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Border Radius', 'zoloblocks')}
                                                            controlName={COUNT_BORDER_RADIUS}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={true}
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={countHoverColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    countHoverColor: color,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__('Background', 'zoloblocks')}
                                                            color={countBgHoverColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    countBgHoverColor: color,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                        </ZoloPanelBody>
                                    )}
                                </>
                            )
                        }
                        {
                            skin === 'animated' && (
                                <>
                                    <ZoloPanelBody title={__('Animated', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                        <ZoloRangeControl
                                            label={__('Text Size', 'zoloblocks')}
                                            value={attributes?.animatedTextSize}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedTextSize: newValue });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={attributes?.animatedColor}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedColor: newValue });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Background Color', 'zoloblocks')}
                                            color={attributes?.animatedBackgroundColor}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedBackgroundColor: newValue });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Text Shadow Color', 'zoloblocks')}
                                            color={attributes?.animatedTextShadowColor}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedTextShadowColor: newValue });
                                            }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Shadow Blur', 'zoloblocks')}
                                            value={attributes?.animatedTextShadowBlur}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedTextShadowBlur: newValue });
                                            }}
                                            min={0}
                                            max={40}
                                        />
                                        <ZoloRangeControl
                                            label={__('Background Radius', 'zoloblocks')}
                                            value={attributes?.animatedBackgroundRadius}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedBackgroundRadius: newValue });
                                            }}
                                            min={0}
                                            max={15}
                                        />
                                        <div className="zolo-custom-heading">{__('Outline', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={attributes?.animatedOutlineColor}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedOutlineColor: newValue });
                                            }}
                                        />
                                        <ZoloRangeControl
                                            label={__('Thickness', 'zoloblocks')}
                                            value={attributes?.animatedOutlineThickness}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedOutlineThickness: newValue });
                                            }}
                                            min={0}
                                            max={15}
                                        />
                                        <ZoloRangeControl
                                            label={__('Dash', 'zoloblocks')}
                                            value={attributes?.animatedOutlineDash}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedOutlineDash: newValue });
                                            }}
                                            min={0}
                                            max={15}
                                        />
                                        <ZoloRangeControl
                                            label={__('Dash Space', 'zoloblocks')}
                                            value={attributes?.animatedOutlineDashSpace}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedOutlineDashSpace: newValue });
                                            }}
                                            min={0}
                                            max={15}
                                        />
                                        <ZoloRangeControl
                                            label={__('Dash Speed', 'zoloblocks')}
                                            value={attributes?.animatedOutlineDashSpeed}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedOutlineDashSpeed: newValue });
                                            }}
                                            min={0}
                                            max={30}
                                        />
                                        <ZoloRangeControl
                                            label={__('Increase', 'zoloblocks')}
                                            value={attributes?.animatedIncrease}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedIncrease: newValue });
                                            }}
                                            min={0}
                                            max={30}
                                        />
                                        <ZoloRangeControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            value={attributes?.animatedBorderRadius}
                                            onChange={(newValue) => {
                                                setAttributes({ animatedBorderRadius: newValue });
                                            }}
                                            min={0}
                                            max={30}
                                        />
                                    </ZoloPanelBody>
                                </>
                            )
                        }
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-category"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
