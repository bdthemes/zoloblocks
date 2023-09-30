/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl,
  TextareaControl,
  Button,
  ButtonGroup,
  BaseControl,
  TabPanel,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import BackgroundControl from "../../controls/background-control"

export const AdvancedOptions = (props) => {
  const {
    attributes,
    setAttributes,
    requiredProps
  } = props;

  const {
    uniqueId,
    customCss,
    responsiveness,
    parentClasses,
    customClass,
    zoloStyles,
    globalConfig
  } = attributes;

  const handleResponsiveness = (key, value, classname) => {
    let updatedClasses = [
      ...parentClasses,
      classname
    ]
    //remove class is value is false
    if (value === false) {
      updatedClasses = updatedClasses.filter(function (e) { return e !== classname })
    }
    const uniqueClasses = [...new Set(updatedClasses)];
    setAttributes({
      responsiveness: {
        ...responsiveness,
        [key]: value
      },
      parentClasses: [...uniqueClasses]
    })
  }

  const handleCustomClass = (classname) => {
    const updatedClasses = parentClasses.filter(function (e) { return e !== customClass })
    setAttributes({
      customClass: classname,
      parentClasses: [
        ...updatedClasses,
        classname
      ]
    })
  }

  return (
    <>
      <PanelBody
        title={__("Advanced", "essential-blocks")}
        initialOpen={true}
      >
        <TextControl
          label={__('Custom Class', 'zolo-blocks')}
          onChange={(value) => handleCustomClass(value)}
          value={customClass}
        />
        {globalConfig?.background && (
          <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={true}>
            <BackgroundControl
              controlName={globalConfig.background.prefix || 'mainBg'}
              requiredProps={requiredProps}
            />
          </PanelBody>
        )}
      </PanelBody>

      {globalConfig?.responsiveControls && (
        <>
          <PanelBody
            title={__("Responsive Control", "essential-blocks")}
            initialOpen={true}
          >
            <ToggleControl
              label={__("Hide on Desktop", "essential-blocks")}
              checked={responsiveness?.hideDesktop || false}
              onChange={() => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')}
            />
            <ToggleControl
              label={__("Hide on Tab", "essential-blocks")}
              checked={responsiveness?.hideTab || false}
              onChange={() => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')}
            />
            <ToggleControl
              label={__("Hide on Mobile", "essential-blocks")}
              checked={responsiveness?.hideMobile || false}
              onChange={() => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')}
            />
          </PanelBody>
        </>
      )}
    </>
  )
}
