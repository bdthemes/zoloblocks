/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
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
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    LINK_TYPES,
    CONTAINER_HEIGHT,
    CONTAINER_BG,
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

function Inspector(props) {
    const { attributes, setAttributes } = props;
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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Brand Name', 'zolo-blocks')}
                                checked={brandNameVisible}
                                onChange={() => setAttributes({ brandNameVisible: !brandNameVisible })}
                            />
                            <ToggleControl
                                label={__('Show Brand Label', 'zolo-blocks')}
                                checked={brandLabelVisible}
                                onChange={() => setAttributes({ brandLabelVisible: !brandLabelVisible })}
                            />
                            <ToggleControl
                                label={__('Enable Logo Link', 'zolo-blocks')}
                                checked={enableLogoLink}
                                onChange={() => setAttributes({ enableLogoLink: !enableLogoLink })}
                            />
                            {enableLogoLink && (
                                <IconicBtnGroup
                                    label={__('Link Type', 'zolo-blocks')}
                                    value={logoLinkType}
                                    onChange={(value) =>
                                        setAttributes({
                                            logoLinkType: value,
                                        })
                                    }
                                    options={LINK_TYPES}
                                />
                            )}
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={CONTENT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <IconicBtnGroup
                                label={__('Content Horizontal Position', 'zolo-blocks')}
                                value={contentHorizontalPosition}
                                onChange={(value) => setAttributes({ contentHorizontalPosition: value })}
                                options={FLEX_HORIZONTAL_OPTIONS}
                            />
                            <IconicBtnGroup
                                label={__('Content Vertical Position', 'zolo-blocks')}
                                value={contentVerticalPosition}
                                onChange={(value) => setAttributes({ contentVerticalPosition: value })}
                                options={FLEX_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zolo-blocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column Number', 'zolo-blocks')}
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
                            <ResRangeControl
                                label={__('Columns Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />

                            <ResRangeControl
                                label={__('Row Gap', 'zolo-blocks')}
                                controlName={ROWS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Container', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={CONTAINER_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTAINER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={CONTAINER_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTAINER_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTAINER_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={200}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Photo', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Photo Size', 'zolo-blocks')}
                                controlName={IMAGE_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={BRAND_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <NormalBGControl requiredProps={requiredProps} controlName={BRAND_PHOTO_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={100}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BRAND_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        {brandNameVisible && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                {!(enableLogoLink && logoLinkType == 'logo__title') && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={nameColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                nameColor: value,
                                            })
                                        }
                                    />
                                )}
                                <TextStrokeControl controlName={TITLE_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TITLE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {enableLogoLink && logoLinkType == 'logo__title' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
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
                                                    label={__('Color', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Label', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={LINK_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                {!(enableLogoLink && logoLinkType == 'logo__label') && (
                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={labelColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelColor: value,
                                            })
                                        }
                                    />
                                )}
                                <TextStrokeControl controlName={LINK_TEXT_STROKE} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={LINK_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                {enableLogoLink && logoLinkType == 'logo__label' && (
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
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
                                                    label={__('Hover Color', 'zolo-blocks')}
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
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
