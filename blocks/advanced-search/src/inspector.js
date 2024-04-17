/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TextControl,
  TextareaControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";

/**
 * Internal depencencies
 */
const {
  HeaderTabs,
  ResAlignmentControl,
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  NormalBGControl,
  BoxShadowControl,
  ZoloIconPicker,
  LinkControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;

import {
  HEADING,
  TEXT_ALIGN_OPTIONS,
  ICON_STATUS,
} from "../../../src/global/constants";

import objAttributes from "./attributes";
import {
  ICON_POSITIONS,
  BUTTON_ALIGNMENT,
  PRESETS,
  BUTTON_TYPES,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_PADDING,
  BUTTON_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  ICON_SIZE,
  TITLE_MARGIN,
  DESC_MARGIN,
  FLEX_GAP,
  ICON_TEXT_SPACING,
  // secondary button
  ICON_S_SIZE,
  ICON_TEXT_S_SPACING,
  LABEL_BORDER,
  LABEL_BORDER_RADIUS,
  LABEL_PADDING,
  LABEL_BG,
  BUTTON_S_BOX_SHADOW,
  BUTTON_HOVER_S_BG_COLOR,
  BUTTON_HOVER_S_BOX_SHADOW,
} from "./constants";

import {
  BUTTON_TYPOGRAPHY,
  LABEL_TYPOGRAPHY,
} from "./constants/typoPrefixConstant";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    resMode,
    showLabel,
    showIcon,
    showBtn,
    showSecondaryBtn,
    title,
    titleTag,
    labelColor,
    description,
    descriptionColor,
    label,
    Slabel,
    link,
    Slink,
    iconType,
    SiconType,
    icon,
    Sicon,
    iconPosition,
    SiconPosition,
    btnTextColor,
    btnTextHoverColor,
    SbtnTextColor,
    SHoverColor,
    labelBorderHoverColor,
    SlabelBorderHoverColor,
    preset,
    reversePosition,
    preview,
    uniqueId,
    parentClasses,
    placeholder,
    buttonType,
    buttonIcon,
    buttonText,
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
        block="zolo/advanced-search"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody
              title={__("General", "zoloblocks")}
              panelProps={props}
              firstOpen={true}
            >
              <SelectControl
                label={__("Presets", "zoloblocks")}
                value={preset}
                options={applyFilters("zolo.advancedSearch.presets", PRESETS)}
                onChange={(value) =>
                  setAttributes({
                    preset: value,
                  })
                }
              />
              <SelectControl
                label={__("Button Type", "zoloblocks")}
                value={buttonType}
                options={applyFilters(
                  "zolo.advancedSearch.buttonType",
                  BUTTON_TYPES,
                )}
                onChange={(value) =>
                  setAttributes({
                    buttonType: value,
                  })
                }
              />
              <ToggleControl
                label={__("Show Label", "zoloblocks")}
                checked={showLabel}
                onChange={() => setAttributes({ showLabel: !showLabel })}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            {showLabel && (
              <>
                <ZoloPanelBody
                  title={__("Label", "zoloblocks")}
                  stylePanel={true}
                  panelProps={props}
                  firstOpen={preset === "" ? true : false}
                >
                  <ColorControl
                    label={__("Color", "zoloblocks")}
                    color={labelColor}
                    onChange={(value) =>
                      setAttributes({
                        labelColor: value,
                      })
                    }
                  />
                  <NormalBGControl
                    requiredProps={requiredProps}
                    controlName={LABEL_BG}
                    noMainBGImg={false}
                  />
                  <BorderControl
                    label={__("Border", "zoloblocks")}
                    controlName={LABEL_BORDER}
                    requiredProps={requiredProps}
                    hoverControl={
                      <ColorControl
                        label={__("Border Color", "zoloblocks")}
                        color={labelBorderHoverColor}
                        onChange={(value) =>
                          setAttributes({
                            labelBorderHoverColor: value,
                          })
                        }
                      />
                    }
                  />
                  <ResDimensionsControl
                    label={__("Border Radius", "zoloblocks")}
                    controlName={LABEL_BORDER_RADIUS}
                    requiredProps={requiredProps}
                    forBorderRadius={true}
                  />
                  <ResDimensionsControl
                    label={__("Padding", "zoloblocks")}
                    controlName={LABEL_PADDING}
                    requiredProps={requiredProps}
                    forBorderRadius={false}
                  />
                  <TypographyDropdown
                    label={__("Typography", "zoloblocks")}
                    typoPrefixConstant={LABEL_TYPOGRAPHY}
                    requiredProps={requiredProps}
                  />
                </ZoloPanelBody>
              </>
            )}
            {/* {showIcon && (
              <>
                <ZoloPanelBody
                  title={__("Description", "zoloblocks")}
                  stylePanel={true}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Color", "zoloblocks")}
                    color={descriptionColor}
                    onChange={(value) =>
                      setAttributes({
                        descriptionColor: value,
                      })
                    }
                  />
                  <TypographyDropdown
                    label={__("Typography", "zoloblocks")}
                    typoPrefixConstant={DESC_TYPO}
                    requiredProps={requiredProps}
                    max={36}
                  />
                  <ResDimensionsControl
                    label={__("Margin", "zoloblocks")}
                    controlName={DESC_MARGIN}
                    requiredProps={requiredProps}
                    forBorderRadius={false}
                  />
                </ZoloPanelBody>
              </>
            )} */}
            <ZoloPanelBody
              title={__("Button", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
            >
              {/* {iconType !== "iconOnly" && (
                  <TypographyDropdown
                    label={__("Typography", "zoloblocks")}
                    typoPrefixConstant={BUTTON_TYPOGRAPHY}
                    requiredProps={requiredProps}
                    max={36}
                  />
                )}

                {iconType !== "none" && (
                  <>
                    <ResRangeControl
                      label={__("Icon Size", "zoloblocks")}
                      controlName={ICON_SIZE}
                      requiredProps={requiredProps}
                      min={0}
                      max={100}
                      step={1}
                    />
                    <ResRangeControl
                      label={__("Spacing", "zoloblocks")}
                      controlName={ICON_TEXT_SPACING}
                      requiredProps={requiredProps}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </>
                )} */}

              <BorderControl
                label={__("Border", "zoloblocks")}
                controlName={BUTTON_BORDER}
                requiredProps={requiredProps}
                hoverControl={
                  <ColorControl
                    label={__("Border Color", "zoloblocks")}
                    color={labelBorderHoverColor}
                    onChange={(value) =>
                      setAttributes({
                        labelBorderHoverColor: value,
                      })
                    }
                  />
                }
              />
              <ResDimensionsControl
                label={__("Border Radius", "zoloblocks")}
                controlName={BUTTON_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <ResDimensionsControl
                label={__("Padding", "zoloblocks")}
                controlName={BUTTON_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={btnTextColor}
                      onChange={(value) =>
                        setAttributes({
                          btnTextColor: value,
                        })
                      }
                    />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={BUTTON_BG}
                      noMainBGImg={false}
                    />
                    <BoxShadowControl
                      controlName={BUTTON_BOX_SHADOW}
                      requiredProps={requiredProps}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={btnTextHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          btnTextHoverColor: value,
                        })
                      }
                    />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={BUTTON_HOVER_BG_COLOR}
                      noMainBGImg={false}
                    />
                    <BoxShadowControl
                      controlName={BUTTON_HOVER_BOX_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={true}
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
              block="zolo/advanced-search"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
