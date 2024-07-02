/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl } from '@wordpress/components';
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
    GRID_GAP,
    PRESETS,
    CONTENT_BG,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    PHOTO_SIZE,
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
    ICONS_MARGIN,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    ITEM_OVERLAY,
    IMAGE_OVERLAY,
    SEPARATOR_TEAM_SIZE,
    SEPARATOR_SPACING_TEAM,
} from './constants';
import { applyFilters } from '@wordpress/hooks';

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
    ZoloPanelBody,
    ResGapControl,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        addDetailPageLink,
        showDesignation,
        showShortBio,
        showSocialProfiles,
        nameColor,
        designationColor,
        shortBioColor,
        separatorColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        detailPageIconColor,
        detailPageIconHoverColor,
        separatorTeamColor,
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
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-1':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-2':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-3':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDesignation: true,
                    addDetailPageLink: false,
                });
                break;
            case 'style-4':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDesignation: true,
                });
                break;
            case 'style-5':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
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
                block="zolo/team-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.teamGrid.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />
                            {preset !== 'style-4' && preset !=='style-5' &&(
                                <ToggleControl
                                    label={__('Add Detail Page Link', 'zoloblocks')}
                                    checked={addDetailPageLink}
                                    onChange={() =>
                                        setAttributes({
                                            addDetailPageLink: !addDetailPageLink,
                                        })
                                    }
                                />
                            )}
                            <ToggleControl
                                label={__('Show Short Bio', 'zoloblocks')}
                                checked={showShortBio}
                                onChange={() =>
                                    setAttributes({
                                        showShortBio: !showShortBio,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Designation', 'zoloblocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Social Profiles', 'zoloblocks')}
                                checked={showSocialProfiles}
                                onChange={() =>
                                    setAttributes({
                                        showSocialProfiles: !showSocialProfiles,
                                    })
                                }
                            />
                            {preset !== 'style-4' && preset !=='style-2' && (
                                <ResAlignmentControl
                                    label={__('Alignment', 'zoloblocks')}
                                    controlName={CONTENT_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={TEXT_ALIGN_OPTIONS}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Columns', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl label={__('Gap', 'zoloblocks')} controlName={GRID_GAP} requiredProps={requiredProps} max={200} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                            {preset === 'style-2' &&(
                                <NormalBGControl
                                    label={__('Overlay', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={ITEM_OVERLAY}
                                    noMainBGImg={true}
                                />
                            )}
                            <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={CONTENT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                            <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={PHOTO_SIZE}
                                requiredProps={requiredProps}
                                min={10}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={TEAM_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TEAM_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TEAM_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TEAM_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={PHOTO_BG} noMainBGImg={true} />
                            <BoxShadowControl controlName={TEAM_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            {preset === 'style-5' &&(
                                <NormalBGControl
                                    label={__('Overlay', 'zoloblocks')}
                                    requiredProps={requiredProps}
                                    controlName={IMAGE_OVERLAY}
                                    noMainBGImg={true}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={nameColor}
                                onChange={(color) =>
                                    setAttributes({
                                        nameColor: color,
                                    })
                                }
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TEAM_NAME_MARGIN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEAM_MEMBER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TEAM_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                {/* Separator test  */}
                                {preset === 'style-4' && (
                                    <ColorControl
                                        label={__('Separator Color', 'zoloblocks')}
                                        color={separatorTeamColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                separatorTeamColor: color,
                                            })
                                        }
                                    />
                                )}

                                {preset === 'style-4' && (
                                    <ResRangeControl
                                        label={__('Separator Size', 'zoloblocks')}
                                        controlName={SEPARATOR_TEAM_SIZE}
                                        requiredProps={requiredProps}
                                    />
                                )}
                                {preset === 'style-4' && (
                                    <ResGapControl
                                        label={__('Separator Gap', 'zoloblocks')}
                                        controlName={SEPARATOR_SPACING_TEAM}
                                        requiredProps={requiredProps}
                                        max={200}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                        {showShortBio && (
                            <ZoloPanelBody title={__('Short Bio', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shortBioColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            shortBioColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TEAM_SHORT_BIO_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showSocialProfiles && (
                            <>
                                {preset === 'style-1' && (
                                    <ZoloPanelBody
                                        title={__('Social Profiles Container', 'zoloblocks')}
                                        stylePanel={true}
                                        panelProps={props}
                                    >
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={ICONS_CONTAINER_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICONS_CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </ZoloPanelBody>
                                )}

                                <ZoloPanelBody title={__('Social Profiles', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ResRangeControl
                                        label={__('Icon Size', 'zoloblocks')}
                                        controlName={ICONS_SIZE}
                                        requiredProps={requiredProps}
                                    />
                                    <ResRangeControl
                                        label={__('Icon Spacing', 'zoloblocks')}
                                        controlName={ICONS_SPACING}
                                        requiredProps={requiredProps}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={ICONS_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={iconHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconHoverBorderColor: color,
                                                    })
                                                }
                                            />
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={ICONS_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={ICONS_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    {preset !== 'style-1' && (
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={ICONS_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    )}
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColor: color,
                                                        })
                                                    }
                                                />
                                                {preset !== 'style-2' && (
                                                    <ColorControl
                                                        label={__('Separator Color', 'zoloblocks')}
                                                        color={separatorColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                separatorColor: color,
                                                            })
                                                        }
                                                    />
                                                )}

                                                <BoxShadowControl
                                                    controlName={ICONS_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICONS_BG} noMainBGImg={true} />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconHoverColor: color,
                                                        })
                                                    }
                                                />
                                                <BoxShadowControl
                                                    controlName={ICONS_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={ICONS_HOVER_BG}
                                                    noMainBGImg={true}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {addDetailPageLink && preset !== 'style-4' && preset !=='style-5' && (
                            <ZoloPanelBody title={__('Details Page Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={DPL_ICON_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <BorderControl label={__('Border', 'zoloblocks')} controlName={DPL_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={DPL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={DPL_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={DPL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
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
                                                label={__('Icon Color', 'zoloblocks')}
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
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/team-grid"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
