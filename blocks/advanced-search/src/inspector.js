/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";

/**
 * Internal depencencies
 */
const {
  HeaderTabs,
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  NormalBGControl,
  BoxShadowControl,
  ZoloIconPicker,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;


import objAttributes from "./attributes";
import {
  PRESETS,
  BUTTON_TYPES,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_PADDING,
  BUTTON_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  INPUT_PADDING,
  INPUT_BG,
  ICON_SIZE,
  BUTTON_LAYOUT_TYPES,
  LABEL_BORDER,
  LABEL_BORDER_RADIUS,
  LABEL_PADDING,
  LABEL_BG,
} from "./constants";

import {
  INPUT_TYPOGRAPHY,
  LABEL_TYPOGRAPHY,
} from "./constants/typoPrefixConstant";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    preset,
    resMode,
    labelText,
    labelColor,
    iconColor,
    iconHoverColor,
    btnTextColor,
    btnTextHoverColor,
    labelBorderHoverColor,
    buttonType,
    buttonIcon,
    buttonText,
    inputColor,
    placeholderColor,
    placeholder,
    btnLayoutType,
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
              <IconicBtnGroup
                label={__("Presets", "zoloblocks")}
                value={preset}
                onChange={(value) =>
                  setAttributes({
                    preset: value,
                  })
                }
                options={applyFilters("zolo.advancedSearch.presets", PRESETS)}
              />
              <IconicBtnGroup
                label={__("Button Type", "zoloblocks")}
                value={buttonType}
                onChange={(value) =>
                  setAttributes({
                    buttonType: value,
                  })
                }
                options={applyFilters(
                  "zolo.advancedSearch.buttonType",
                  BUTTON_TYPES,
                )}
              />
              <IconicBtnGroup
                label={__("Button Style", "zoloblocks")}
                value={btnLayoutType}
                onChange={(value) =>
                  setAttributes({
                    btnLayoutType: value,
                  })
                }
                options={BUTTON_LAYOUT_TYPES}
              />
              {buttonType == "icon" && (
                <ZoloIconPicker
                  label={__("Select Icon", "zoloblocks")}
                  value={buttonIcon}
                  onChange={(value) => {
                    setAttributes({
                      buttonIcon: value,
                    });
                  }}
                />
              )}
              {preset === "zolo-search-2" && (
                <TextControl
                  label={__("Label Text", "zoloblocks")}
                  value={labelText}
                  onChange={(value) =>
                    setAttributes({
                      labelText: value,
                    })
                  }
                />
              )}
              {buttonType === "text" && (
                <TextControl
                  label={__("Button Text", "zoloblocks")}
                  value={buttonText}
                  onChange={(value) =>
                    setAttributes({
                      buttonText: value,
                    })
                  }
                />
              )}
              {preset === "zolo-search-1" && (
                <TextControl
                  label={__("Placeholder Text", "zoloblocks")}
                  value={placeholder}
                  onChange={(value) => setAttributes({ placeholder: value })}
                />
              )}
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            {preset === "zolo-search-2" && (
              <>
                <ZoloPanelBody
                  title={__("Label", "zoloblocks")}
                  stylePanel={true}
                  panelProps={props}
                  firstOpen={true}
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
            <ZoloPanelBody
              title={__("Field", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
              firstOpen={preset === "zolo-search-1" ? true : false}
            >
              <ColorControl
                label={__("Input Color", "zoloblocks")}
                color={inputColor}
                onChange={(color) => setAttributes({ inputColor: color })}
              />
              {preset === "zolo-search-1" && (
                <ColorControl
                  label={__("Placeholder Color", "zoloblocks")}
                  color={placeholderColor}
                  onChange={(color) =>
                    setAttributes({ placeholderColor: color })
                  }
                />
              )}
              <TypographyDropdown
                label={__("Typography", "zoloblocks")}
                typoPrefixConstant={INPUT_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <BorderControl
                label={__("Border", "zoloblocks")}
                controlName={INPUT_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__("Border Radius", "zoloblocks")}
                controlName={INPUT_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <ResDimensionsControl
                label={__("Padding", "zoloblocks")}
                controlName={INPUT_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <NormalBGControl
                requiredProps={requiredProps}
                controlName={INPUT_BG}
                noMainBGImg={false}
              />
            </ZoloPanelBody>

            <ZoloPanelBody
              title={__("Button", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
            >
              {buttonType === "icon" && (
                <ResRangeControl
                  label={__("Icon Size", "zoloblocks")}
                  controlName={ICON_SIZE}
                  requiredProps={requiredProps}
                  min={1}
                  max={100}
                  step={1}
                />
              )}
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
                    {buttonType === "text" && (
                      <ColorControl
                        label={__("Color", "zoloblocks")}
                        color={btnTextColor}
                        onChange={(value) =>
                          setAttributes({
                            btnTextColor: value,
                          })
                        }
                      />
                    )}
                    {buttonType === "icon" && (
                      <ColorControl
                        label={__("Color", "zoloblocks")}
                        color={iconColor}
                        onChange={(color) =>
                          setAttributes({ iconColor: color })
                        }
                      />
                    )}
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
                    {buttonType === "text" && (
                      <ColorControl
                        label={__("Hover Color", "zoloblocks")}
                        color={btnTextHoverColor}
                        onChange={(value) =>
                          setAttributes({
                            btnTextHoverColor: value,
                          })
                        }
                      />
                    )}
                    {buttonType === "icon" && (
                      <ColorControl
                        label={__("Hover Color", "zoloblocks")}
                        color={iconHoverColor}
                        onChange={(color) =>
                          setAttributes({ iconHoverColor: color })
                        }
                      />
                    )}
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
