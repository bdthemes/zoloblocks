/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
const {

  generateResRangeStyle,
  GlobalStyleHanlder,
} = window.zoloModule;

import {
  STAR_SIZE,

} from "./constants";
import { TITLE_TYPO } from "./constants/typoPrefixConstant";

const Style = ({ props }) => {
  const { attributes, setAttributes } = props;
  const {

  } = attributes;

  // styles

  const {
    desktopRangeStyle: deskHeight,
    tabRangeStyle: tabHeight,
    mobRangeStyle: mobHeight,
  } = generateResRangeStyle({
    controlName: STAR_SIZE,
    property: "height",
    attributes,
  });
  /**
   * All Style Combination
   */
  const desktopAllStyle = `

    `;

  const tabletAllStyle = `

    `;

  const mobileAllStyle = `

    `;

  return (
    <>
      <GlobalStyleHanlder
        attributes={attributes}
        setAttributes={setAttributes}
        desktopAllStyle={desktopAllStyle}
        tabAllStyle={tabletAllStyle}
        mobileAllStyle={mobileAllStyle}
      />
    </>
  );
};

export default Style;
