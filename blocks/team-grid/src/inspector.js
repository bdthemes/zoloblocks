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
} from "./constants";
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
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-1':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDesignation: true,
                });
                break;
            case 'style-2':
                setAttributes({
                    showShortBio: true,
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
              <ZoloPanelBody
                title={__("General", "zolo-blocks")}
                firstOpen={true}
                panelProps={props}
              >
                <SelectControl
                  label={__("Styles", "zolo-blocks")}
                  value={preset}
                  options={applyFilters("zolo.teamGrid.presets", PRESETS)}
                  onChange={(selected) => changePremade(selected)}
                />
                <ToggleControl
                  label={__("Add Detail Page Link", "zolo-blocks")}
                  checked={addDetailPageLink}
                  onChange={() =>
                    setAttributes({
                      addDetailPageLink: !addDetailPageLink,
                    })
                  }
                />
                <ToggleControl
                  label={__("Show Short Bio", "zolo-blocks")}
                  checked={showShortBio}
                  onChange={() =>
                    setAttributes({
                      showShortBio: !showShortBio,
                    })
                  }
                />
                <ToggleControl
                  label={__("Show Designation", "zolo-blocks")}
                  checked={showDesignation}
                  onChange={() =>
                    setAttributes({
                      showDesignation: !showDesignation,
                    })
                  }
                />
                <ToggleControl
                  label={__("Show Social Profiles", "zolo-blocks")}
                  checked={showSocialProfiles}
                  onChange={() =>
                    setAttributes({
                      showSocialProfiles: !showSocialProfiles,
                    })
                  }
                />
                <ResAlignmentControl
                  label={__("Alignmet", "zolo-blocks")}
                  controlName={CONTENT_ALIGNMENT}
                  requiredProps={requiredProps}
                  alignOptions={TEXT_ALIGN_OPTIONS}
                />
              </ZoloPanelBody>
              <ZoloPanelBody
                title={__("Grid", "zolo-blocks")}
                panelProps={props}
              >
                <ResCounterControl
                  label={__("Columns", "zolo-blocks")}
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
                <ResGapControl
                  label={__("Gap", "zolo-blocks")}
                  controlName={GRID_GAP}
                  requiredProps={requiredProps}
                  max={200}
                />
              </ZoloPanelBody>
            </>
          }
          styleTab={
            <>
              <ZoloPanelBody
                title={__("Item", "zolo-blocks")}
                firstOpen={true}
                stylePanel={true}
                panelProps={props}
              >
                <BorderControl
                  label={__("Border", "zolo-blocks")}
                  controlName={ITEM_BORDER}
                  requiredProps={requiredProps}
                />
                <ResDimensionsControl
                  label={__("Border Radius", "zolo-blocks")}
                  controlName={ITEM_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResDimensionsControl
                  label={__("Padding", "zolo-blocks")}
                  controlName={ITEM_PADDING}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <ResDimensionsControl
                  label={__("Margin", "zolo-blocks")}
                  controlName={ITEM_MARGIN}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <NormalBGControl
                  requiredProps={requiredProps}
                  controlName={ITEM_BG}
                  noMainBGImg={false}
                />
                <BoxShadowControl
                  controlName={ITEM_BOX_SHADOW}
                  requiredProps={requiredProps}
                  enableTransition={false}
                />
              </ZoloPanelBody>

              <ZoloPanelBody
                title={__("Content", "zolo-blocks")}
                stylePanel={true}
                panelProps={props}
              >
                <BorderControl
                  label={__("Border", "zolo-blocks")}
                  controlName={CONTENT_BORDER}
                  requiredProps={requiredProps}
                />
                <ResDimensionsControl
                  label={__("Border Radius", "zolo-blocks")}
                  controlName={CONTENT_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResDimensionsControl
                  label={__("Padding", "zolo-blocks")}
                  controlName={CONTENT_PADDING}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <ResDimensionsControl
                  label={__("Margin", "zolo-blocks")}
                  controlName={CONTENT_MARGIN}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <NormalBGControl
                  requiredProps={requiredProps}
                  controlName={CONTENT_BG}
                  noMainBGImg={false}
                />
                <BoxShadowControl
                  controlName={CONTENT_BOX_SHADOW}
                  requiredProps={requiredProps}
                  enableTransition={false}
                />
              </ZoloPanelBody>
              <ZoloPanelBody
                title={__("Photo", "zolo-blocks")}
                stylePanel={true}
                panelProps={props}
              >
                <ResRangeControl
                  label={__("Size", "zolo-blocks")}
                  controlName={PHOTO_SIZE}
                  requiredProps={requiredProps}
                  min={10}
                  max={1000}
                />
                <BorderControl
                  label={__("Border", "zolo-blocks")}
                  controlName={TEAM_PHOTO_BORDER}
                  requiredProps={requiredProps}
                />
                <ResDimensionsControl
                  label={__("Border Radius", "zolo-blocks")}
                  controlName={TEAM_PHOTO_BORDER_RADIUS}
                  requiredProps={requiredProps}
                  forBorderRadius={true}
                />
                <ResDimensionsControl
                  label={__("Padding", "zolo-blocks")}
                  controlName={TEAM_PHOTO_PADDING}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <ResDimensionsControl
                  label={__("Margin", "zolo-blocks")}
                  controlName={TEAM_PHOTO_MARGIN}
                  requiredProps={requiredProps}
                  forBorderRadius={false}
                />
                <NormalBGControl
                  requiredProps={requiredProps}
                  controlName={PHOTO_BG}
                  noMainBGImg={true}
                />
                <BoxShadowControl
                  controlName={TEAM_PHOTO_BOX_SHADOW}
                  requiredProps={requiredProps}
                  enableTransition={false}
                />
              </ZoloPanelBody>
              <ZoloPanelBody
                title={__("Name", "zolo-blocks")}
                stylePanel={true}
                panelProps={props}
              >
                <TypographyDropdown
                  label={__("Typography", "zolo-blocks")}
                  typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
                  requiredProps={requiredProps}
                />
                <ColorControl
                  label={__("Color", "zolo-blocks")}
                  color={nameColor}
                  onChange={(color) =>
                    setAttributes({
                      nameColor: color,
                    })
                  }
                />
                <ResDimensionsControl
                  label={__("Margin", "zolo-blocks")}
                  controlName={TEAM_NAME_MARGIN}
                  requiredProps={requiredProps}
                />
              </ZoloPanelBody>
              {showDesignation && (
                <ZoloPanelBody
                  title={__("Designation", "zolo-blocks")}
                  stylePanel={true}
                  panelProps={props}
                >
                  <TypographyDropdown
                    label={__("Typography", "zolo-blocks")}
                    typoPrefixConstant={TEAM_MEMBER_DESIGNATION_TYPOGRAPHY}
                    requiredProps={requiredProps}
                    max={36}
                  />
                  <ColorControl
                    label={__("Color", "zolo-blocks")}
                    color={designationColor}
                    onChange={(color) =>
                      setAttributes({
                        designationColor: color,
                      })
                    }
                  />
                  <ResDimensionsControl
                    label={__("Margin", "zolo-blocks")}
                    controlName={TEAM_DESIGNATION_MARGIN}
                    requiredProps={requiredProps}
                  />
                </ZoloPanelBody>
              )}
              {showShortBio && (
                <ZoloPanelBody
                  title={__("Short Bio", "zolo-blocks")}
                  stylePanel={true}
                  panelProps={props}
                >
                  <TypographyDropdown
                    label={__("Typography", "zolo-blocks")}
                    typoPrefixConstant={TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY}
                    requiredProps={requiredProps}
                    max={36}
                  />
                  <ColorControl
                    label={__("Color", "zolo-blocks")}
                    color={shortBioColor}
                    onChange={(color) =>
                      setAttributes({
                        shortBioColor: color,
                      })
                    }
                  />
                  <ResDimensionsControl
                    label={__("Margin", "zolo-blocks")}
                    controlName={TEAM_SHORT_BIO_MARGIN}
                    requiredProps={requiredProps}
                  />
                </ZoloPanelBody>
              )}
              {showSocialProfiles && (
                <>
                  <ZoloPanelBody
                    title={__("Social Profiles Container", "zolo-blocks")}
                    stylePanel={true}
                    panelProps={props}
                  >
                    <ResDimensionsControl
                      label={__("Margin", "zolo-blocks")}
                      controlName={ICONS_CONTAINER_MARGIN}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Padding", "zolo-blocks")}
                      controlName={ICONS_CONTAINER_PADDING}
                      requiredProps={requiredProps}
                    />
                  </ZoloPanelBody>
                  <ZoloPanelBody
                    title={__("Social Profiles", "zolo-blocks")}
                    stylePanel={true}
                    panelProps={props}
                  >
                    <ResRangeControl
                      label={__("Icon Size", "zolo-blocks")}
                      controlName={ICONS_SIZE}
                      requiredProps={requiredProps}
                    />
                    <ResRangeControl
                      label={__("Icon Spacing", "zolo-blocks")}
                      controlName={ICONS_SPACING}
                      requiredProps={requiredProps}
                    />
                    <BorderControl
                      label={__("Border", "zolo-blocks")}
                      controlName={ICONS_BORDER}
                      requiredProps={requiredProps}
                      hoverControl={
                        <ColorControl
                          label={__("Border Color", "zolo-blocks")}
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
                      label={__("Border Radius", "zolo-blocks")}
                      controlName={ICONS_BORDER_RADIUS}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Padding", "zolo-blocks")}
                      controlName={ICONS_PADDING}
                      requiredProps={requiredProps}
                    />
                    <TabPanelControl
                      normalComponents={
                        <>
                          <ColorControl
                            label={__("Color", "zolo-blocks")}
                            color={iconColor}
                            onChange={(color) =>
                              setAttributes({
                                iconColor: color,
                              })
                            }
                          />
                          {preset !== "style-2" && (
                            <ColorControl
                              label={__("Separator Color", "zolo-blocks")}
                              color={separatorColor}
                              onChange={(color) =>
                                setAttributes({
                                  separatorColor: color,
                                })
                              }
                            />
                          )}
                          {preset === "style-2" && (
                            <NormalBGControl
                              label={__("Overlay", "zolo-blocks")}
                              requiredProps={requiredProps}
                              controlName={ITEM_OVERLAY}
                              noMainBGImg={true}
                            />
                          )}

                          <BoxShadowControl
                            controlName={ICONS_BOX_SHADOW}
                            requiredProps={requiredProps}
                            enableTransition={false}
                          />
                          <NormalBGControl
                            requiredProps={requiredProps}
                            controlName={ICONS_BG}
                            noMainBGImg={true}
                          />
                        </>
                      }
                      hoverComponents={
                        <>
                          <ColorControl
                            label={__("Color", "zolo-blocks")}
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
              {addDetailPageLink && (
                <ZoloPanelBody
                  title={__("Details Page Link", "zolo-blocks")}
                  stylePanel={true}
                  panelProps={props}
                >
                  <ResRangeControl
                    label={__("Icon Size", "zolo-blocks")}
                    controlName={DPL_ICON_SIZE}
                    requiredProps={requiredProps}
                  />
                  <BorderControl
                    label={__("Border", "zolo-blocks")}
                    controlName={DPL_BORDER}
                    requiredProps={requiredProps}
                  />
                  <ResDimensionsControl
                    label={__("Border Radius", "zolo-blocks")}
                    controlName={DPL_BORDER_RADIUS}
                    requiredProps={requiredProps}
                    forBorderRadius={true}
                  />
                  <ResDimensionsControl
                    label={__("Padding", "zolo-blocks")}
                    controlName={DPL_PADDING}
                    requiredProps={requiredProps}
                  />
                  <ResDimensionsControl
                    label={__("Margin", "zolo-blocks")}
                    controlName={DPL_MARGIN}
                    requiredProps={requiredProps}
                  />
                  <TabPanelControl
                    normalComponents={
                      <>
                        <ColorControl
                          label={__("Icon Color", "zolo-blocks")}
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
                          label={__("Icon Color", "zolo-blocks")}
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
