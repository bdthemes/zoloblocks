/**
 * WordPress dependencies
 */
import { useEffect, useState } from "@wordpress/element";

import { softMinifyCssStrings } from "../../helpers/helper";

export const GlobalStyleHanlder = (props) => {
  const {
    attributes,
    setAttributes,
    desktopAllStyle,
    tabAllStyle,
    mobileAllStyle
  } = props;

  const {
    zoloStyles,
    globalConfig
  } = attributes

  // Set All Style in "zoloStyles" Attribute
  useEffect(() => {
    const styles = {
      desktop: desktopAllStyle,
      tab: tabAllStyle,
      mobile: mobileAllStyle
    }
    if (JSON.stringify(zoloStyles) != JSON.stringify(styles)) {
      setAttributes({
        zoloStyles: {
          desktop: desktopAllStyle,
          tab: tabAllStyle,
          mobile: mobileAllStyle,
        }
      });
    }
  }, [attributes])

  const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

  return (
    <>
      <style>{` ${softMinifyCssStrings(allStyle)}`}</style>
    </>
  );
}
