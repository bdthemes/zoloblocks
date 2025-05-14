/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloCardDivider,
    NormalBGControl,
    BorderControl,
    ResDimensionsControl,
    TabPanelControl,
    BoxShadowControl,
    ColorControl,
    HeaderTabs,
    ResCounterControl,
    ResRangeControl,
    AdvancedOptions,
    IconicBtnGroup,
    ResAlignmentControl,
    TextStrokeControl,
    TypographyDropdown,
    ResGapControl,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    GRID_GAP,
    LINK_TYPES,
    LINK_TYPES_BASIC,
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_BG,
    TITLE_TEXT_STROKE,
    TITLE_MARGIN,
    LINK_TEXT_STROKE,
    LINK_MARGIN,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, FLEX_ALIGN_OPTIONS, FLEX_HORIZONTAL_OPTIONS } from '../../../src/global/constants';
import { css } from '@codemirror/lang-css';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        resMode,
        brandNameVisible,
        brandLabelVisible,
        enableLogoLink,
        logoLinkType,
        nameColor,
        nameHoverColor,
        labelColor,
        labelHoverColor,
        contentHorizontalPosition,
        contentVerticalPosition,
        selectedPanel,
        selectedTab,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/brand-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Hover Animation', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.brandGrid.presets', PRESETS)}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Show hide elements', 'zoloblocks')}</div>
                                    <ZoloToggleControl
                                        label={__('Title', 'zoloblocks')}
                                        checked={brandNameVisible}
                                        onChange={() => setAttributes({ brandNameVisible: !brandNameVisible })}
                                    />
                                    <ZoloToggleControl
                                        label={__('Sub Title', 'zoloblocks')}
                                        checked={brandLabelVisible}
                                        onChange={() => setAttributes({ brandLabelVisible: !brandLabelVisible })}
                                    />
                                </>
                            )}
                            {/* <ZoloToggleControl
                                label={__('Enable Logo Link', 'zoloblocks')}
                                checked={enableLogoLink}
                                onChange={() => setAttributes({ enableLogoLink: !enableLogoLink })}
                            />
                            {enableLogoLink && preset !== 'zb-brand-basic-style' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Link', 'zoloblocks')}
                                        value={logoLinkType}
                                        onChange={(value) =>
                                            setAttributes({
                                                logoLinkType: value,
                                            })
                                        }
                                        options={LINK_TYPES}
                                    />
                                </div>
                            )}

                            {enableLogoLink && preset === 'zb-brand-basic-style' && (
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Link', 'zoloblocks')}
                                        value={logoLinkType}
                                        onChange={(value) =>
                                            setAttributes({
                                                logoLinkType: value,
                                            })
                                        }
                                        options={LINK_TYPES_BASIC}
                                    />
                                </div>
                            )} */}
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Content Alignment', 'zoloblocks')}</div>
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={CONTENT_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Horizontal', 'zoloblocks')}
                                            value={contentHorizontalPosition}
                                            onChange={(value) => setAttributes({ contentHorizontalPosition: value })}
                                            options={FLEX_HORIZONTAL_OPTIONS}
                                        />
                                    </div>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Vertical', 'zoloblocks')}
                                            value={contentVerticalPosition}
                                            onChange={(value) => setAttributes({ contentVerticalPosition: value })}
                                            options={FLEX_ALIGN_OPTIONS}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column Number', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 4,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={GRID_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={200}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                            min={0}
                                            max={100}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={CONTAINER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CONTAINER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ZoloCardDivider />
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={CONTAINER_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_H_BG} noMainBGImg={false} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    {/* <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} /> */}
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CONTENT_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                        min={0}
                                        max={200}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={IMAGE_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <ZoloCardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={BRAND_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            {preset !== 'zb-brand-basic-style' && (
                                <>
                                    <ZoloCardDivider />
                                    {cssFilters && cssFilters.length > 0 && cssFilters}
                                </>
                            )}
                            {preset === 'zb-brand-basic-style' && (
                                <>
                                    {cssFilters && cssFilters.length > 0 && (
                                        <>
                                            <TabPanelControl
                                                options={[
                                                    {
                                                        value: 'normal',
                                                        label: __('Normal', 'zoloblocks'),
                                                    },
                                                    {
                                                        value: 'hover',
                                                        label: __('Hover', 'zoloblocks'),
                                                    },
                                                ]}
                                                normalComponents={<>{cssFilters}</>}
                                                hoverComponents={<>{cssFiltersHover}</>}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                        {preset !== 'zb-brand-basic-style' && (
                            <>
                                {brandNameVisible && (
                                    <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__title') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={nameColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        nameColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TextStrokeControl
                                            controlName={TITLE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ZoloCardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__title' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={nameColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    nameColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={nameHoverColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    nameHoverColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                                {brandLabelVisible && (
                                    <ZoloPanelBody title={__('Sub Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                        {!(enableLogoLink && logoLinkType == 'logo__label') && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={labelColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        labelColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={LINK_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <TextStrokeControl
                                            controlName={LINK_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ZoloCardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={LINK_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        {enableLogoLink && logoLinkType == 'logo__label' && (
                                            <TabPanelControl
                                                normalComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={labelColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    labelColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                                hoverComponents={
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={labelHoverColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    labelHoverColor: value,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/brand-grid"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
