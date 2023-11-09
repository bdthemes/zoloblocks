/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
    TEAM_MEMBER_NAME_TYPOGRAPHY,
    TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';

import objAttributes from './attributes';
import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    PRESETS,
    CONTENT_BG,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    TEAM_PHOTO_BORDER,
    TEAM_PHOTO_BORDER_RADIUS,
    TEAM_PHOTO_BOX_SHADOW,
    TEAM_PHOTO_MARGIN,
    TEAM_PHOTO_PADDING,
    TEAM_NAME_MARGIN,
    TEAM_DESIGNATION_MARGIN,
    TEAM_SHORT_BIO_MARGIN,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
} from './constants';

const {
    ResRangeControl,
    HeaderTabs,
    ResCounterControl,
    AdvancedOptions,
    ResAlignmentControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    NormalBGControl,
    BoxShadowControl,
    TabPanelControl,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        addDetailPageLink,
        showDetailPageIcon,
        showDesignation,
        showShortBio,
        showSocialProfiles,
        blurBgColor,
        blurBgOpacity,
        nameColor,
        nameHoverColor,
        designationColor,
        shortBioColor,
        separatorColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        detailPageIconColor,
        detailPageIconHoverColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'default':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDetailPageIcon: true,
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-1':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDetailPageIcon: true,
                    showDesignation: true,
                });
                break;
            case 'style-2':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDetailPageIcon: true,
                    showDesignation: true,
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Add Detail Page Link', 'zolo-blocks')}
                                checked={addDetailPageLink}
                                onChange={() =>
                                    setAttributes({
                                        addDetailPageLink: !addDetailPageLink,
                                    })
                                }
                            />
                            {addDetailPageLink && (
                                <ToggleControl
                                    label={__('Show Detail Page Link Icon', 'zolo-blocks')}
                                    checked={showDetailPageIcon}
                                    onChange={() =>
                                        setAttributes({
                                            showDetailPageIcon: !showDetailPageIcon,
                                        })
                                    }
                                />
                            )}

                            <ToggleControl
                                label={__('Show Short Bio', 'zolo-blocks')}
                                checked={showShortBio}
                                onChange={() =>
                                    setAttributes({
                                        showShortBio: !showShortBio,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Designation', 'zolo-blocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Social Profiles', 'zolo-blocks')}
                                checked={showSocialProfiles}
                                onChange={() =>
                                    setAttributes({
                                        showSocialProfiles: !showSocialProfiles,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Grid Settings', 'zolo-blocks')} initialOpen={false}>
                            <ResCounterControl
                                label={__('Columns', 'zolo-blocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Columns Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl label={__('Rows Gap', 'zolo-blocks')} controlName={ROWS_GAP} requiredProps={requiredProps} />
                        </PanelBody>
                    </>
                }
                styleTab={
                    <>
                        {preset === 'style-2' && (
                            <PanelBody title={__('Preset Style', 'zolo-blocks')} initialOpen={false}>
                                <ColorControl
                                    label={__('Blur Color', 'zolo-blocks')}
                                    color={blurBgColor}
                                    onChange={(color) => setAttributes({ blurBgColor: color })}
                                />
                                <RangeControl
                                    label={__('Blur Strength', 'zolo-blocks')}
                                    value={blurBgOpacity}
                                    onChange={(v) => setAttributes({ blurBgOpacity: v })}
                                    min={0}
                                    max={100}
                                />
                            </PanelBody>
                        )}
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            {preset !== 'style-3' && (
                                <ResAlignmentControl
                                    label={__('Content Alignmet', 'zolo-blocks')}
                                    controlName={CONTENT_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={TEXT_ALIGN_OPTIONS}
                                />
                            )}
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTENT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                        </PanelBody>
                        <PanelBody title={__('Photo', 'zolo-blocks')} initialOpen={false}>
                            <NormalBGControl requiredProps={requiredProps} controlName={PHOTO_BG} noMainBGImg={true} />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={TEAM_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Name', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            {!addDetailPageLink && (
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={nameColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            nameColor: color,
                                        })
                                    }
                                />
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TEAM_NAME_MARGIN}
                                requiredProps={requiredProps}
                            />
                            {addDetailPageLink && (
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={nameColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        nameColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zolo-blocks')}
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
                            )}
                        </PanelBody>
                        {showDesignation && (
                            <PanelBody title={__('Designation', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TEAM_MEMBER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TEAM_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}
                        {showShortBio && (
                            <PanelBody title={__('Short Bio', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={shortBioColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            shortBioColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TEAM_SHORT_BIO_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </PanelBody>
                        )}
                        {showSocialProfiles && (
                            <PanelBody title={__('Social Profiles', 'zolo-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={ICONS_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Icon Spacing', 'zolo-blocks')}
                                    controlName={ICONS_SPACING}
                                    requiredProps={requiredProps}
                                />
                                {preset === 'default' && (
                                    <ColorControl
                                        label={__('Separator Color', 'zolo-blocks')}
                                        color={separatorColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                separatorColor: color,
                                            })
                                        }
                                    />
                                )}
                                <BorderControl
                                    label={__('Border', 'zolo-blocks')}
                                    controlName={ICONS_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={ICONS_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={ICONS_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={ICONS_BG} noMainBGImg={true} />
                                            <BoxShadowControl
                                                controlName={ICONS_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={iconHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconHoverColor: color,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICONS_HOVER_BG}
                                                noMainBGImg={true}
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={iconHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconHoverBorderColor: color,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl
                                                controlName={ICONS_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                        {showDetailPageIcon && (
                            <PanelBody title={__('Details Page Link', 'zolo-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={DPL_ICON_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    controlName={DPL_HEIGHT}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl label={__('Width', 'zolo-blocks')} controlName={DPL_WIDTH} requiredProps={requiredProps} />
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={DPL_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={DPL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={DPL_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={DPL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={detailPageIconColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        detailPageIconColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={DETAIL_PAGE_LINK_BG}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={detailPageIconHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        detailPageIconHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={DETAIL_PAGE_LINK_HOVER_BG}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                />
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
