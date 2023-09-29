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
import { select } from "@wordpress/data";

/**
 * Internal Dependencies
*/

export default function AdvancedOptions(props) {
  const {
    attributes,
    setAttributes,
    disableResponsive = false,
    disableMargin = false,
    disablePadding = false,
    disableBackground = false,
    disableBorder = false,
    disableCustomClass = false,
  } = props;

  const {
    uniqueId,
    customCss,
    responsiveness,
    parentClasses,
    zoloStyles
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

  return (
    <>
      {!disableResponsive && (
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
