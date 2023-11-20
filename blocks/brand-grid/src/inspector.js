/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    LINK_TYPES,
    CONTAINER_HEIGHT,
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

    useEffect(() => {
        // set initial panle to panel11
        if (!selectedPanel) {
            setAttributes({
                selectedPanel: 'general',
            });
        }
    }, [selectedPanel, selectedTab]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
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
                        </PanelBody>
                        <PanelBody
                            title={__('Grid', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'grid' })}
                            opened={selectedPanel === 'grid'}
                        >
                            <ResCounterControl
                                label={__('Column Number', 'zolo-blocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
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
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        <PanelBody
                            title={__('Container', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'containerStyle' })}
                            opened={selectedPanel === 'containerStyle'}
                        >
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={CONTAINER_HEIGHT}
                                requiredProps={requiredProps}
                                min={0}
                                max={1000}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'contentStyle' })}
                            opened={selectedPanel === 'contentStyle'}
                        >
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                                min={0}
                                max={200}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                        </PanelBody>
                        <PanelBody
                            title={__('Photo', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'photoStyle' })}
                            opened={selectedPanel === 'photoStyle'}
                        >
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
                        </PanelBody>
                        {brandNameVisible && (
                            <PanelBody
                                title={__('Title', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'titleStyle' })}
                                opened={selectedPanel === 'titleStyle'}
                            >
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
                            </PanelBody>
                        )}
                        {brandLabelVisible && (
                            <PanelBody
                                title={__('Label', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'labelStyle' })}
                                opened={selectedPanel === 'labelStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={LINK_TYPOGRAPHY}
                                    requiredProps={requiredProps}
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
                            </PanelBody>
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
