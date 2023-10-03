/**
 * WordPress dependencies
 */
import { useEffect, useState } from "@wordpress/element";

import { softMinifyCssStrings } from "../../helpers/helper";
import { generateNormalBGControlStyles } from "../../helpers/normal-bg-helpers"
import { generateDimensionStyle } from "../../helpers/dimension-helper"

export const GlobalStyleHanlder = (props) => {
  const {
    attributes,
    setAttributes,
    desktopAllStyle,
    tabAllStyle,
    mobileAllStyle
  } = props;

  const {
    uniqueId,
    zoloStyles,
    globalConfig
  } = attributes

  //Generate Global Styles

  // generate Background
  const {
    backgroundStylesDesktop: desktopBgStyles,
    backgroundStylesTab: tabBgStyles,
    backgroundStylesMobile: mobileBgStyles
  } = generateNormalBGControlStyles({
    controlName: globalConfig.background.prefix || 'mainBg',
    attributes,
    noMainBGImg: false,
  });

  // margin
  const {
    dimensionStylesDesktop: marginStylesDesktop,
    dimensionStylesTab: marginStylesTab,
    dimensionStylesMobile: marginStylesMobile,
  } = generateDimensionStyle({
    controlName: globalConfig.margin.prefix || 'mainMargin',
    styleFor: 'margin',
    attributes
  });

  // padding
  const {
    dimensionStylesDesktop: paddingStylesDesktop,
    dimensionStylesTab: paddingStylesTab,
    dimensionStylesMobile: paddingStylesMobile,
  } = generateDimensionStyle({
    controlName: globalConfig.padding.prefix || 'mainPadding',
    styleFor: 'padding',
    attributes
  });

  const desktopGlobalStyles = `
    .parent-${uniqueId} {
      ${globalConfig.background && desktopBgStyles}
      ${globalConfig.margin && marginStylesDesktop}
      ${globalConfig.padding && paddingStylesDesktop}
    }
  `;

  const tabGlobalStyles = `
    .parent-${uniqueId} {
      ${globalConfig.background && tabBgStyles}
      ${globalConfig.margin && marginStylesTab}
      ${globalConfig.padding && paddingStylesTab}
    }
  `;

  const mobileGlobalStyles = `
    .parent-${uniqueId} {
      ${globalConfig.background && mobileBgStyles}
      ${globalConfig.margin && marginStylesMobile}
      ${globalConfig.padding && paddingStylesMobile}
    }
  `;

  // Set All Style in "zoloStyles" Attribute
  useEffect(() => {
    const styles = {
      desktop: desktopAllStyle + desktopGlobalStyles,
      tab: tabAllStyle + tabGlobalStyles,
      mobile: mobileAllStyle + mobileGlobalStyles,
    }
    if (JSON.stringify(zoloStyles) != JSON.stringify(styles)) {
      setAttributes({
        zoloStyles: { ...styles }
      });
    }
  }, [attributes])

  const allStyle = `
		${desktopAllStyle + desktopGlobalStyles}
		@media all and (max-width: 1024px) {
			${tabAllStyle + tabGlobalStyles}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle + mobileGlobalStyles}
		}
	`;

  return (
    <>
      <style>{` ${softMinifyCssStrings(allStyle)}`}</style>
    </>
  );
}
