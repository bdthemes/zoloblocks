/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
  generateResRangeStyle,
  generateNormalBGControlStyles,
  GlobalStyleHanlder,
  generateBorderStyle,
  generateDimensionStyle,
  generateBoxShadowStyles,
  generateTypographyStyles
} = window.zoloModule;

import {
  CHART_HEIGHT,
  CHART_BG_COLOR,
  CHART_BORDER,
  CHART_BORDER_RADIUS,
  CHART_MARGIN,
  CHART_PADDING,
  CHART_BOX_SHADOW,
  SUB_TITLE_ALIGNMENT,
} from "./constants";
import { TITLE_TYPO, SUB_TITLE_TYPO } from "./constants/typoPrefixConstant";

const Style = ({ props }) => {
  const { attributes, setAttributes } = props;
  const {  uniqueId, preset } = attributes;
  
  const {
    desktopBorderStyle: chartBorderStyles,
    tabBorderStyle: chartBorderStylesTab,
    mobBorderStyle: chartBorderStylesMob,
  } = generateBorderStyle({
    controlName: CHART_BORDER,
    attributes,
  });

  const {
    dimensionStylesDesktop: chartBorderRadiusDesktop,
    dimensionStylesTab: chartBorderRadiusTab,
    dimensionStylesMobile: chartBorderRadiusMob,
  } = generateDimensionStyle({
    controlName: CHART_BORDER_RADIUS,
    styleFor: "border-radius",
    attributes,
  });

  const { boxShadowStyle: chartBoxShadow } = generateBoxShadowStyles({
    controlName: CHART_BOX_SHADOW,
    attributes,
  });

  const {
    dimensionStylesDesktop: chartPaddingDesk,
    dimensionStylesTab: chartPaddingTab,
    dimensionStylesMobile: chartPaddingMob,
  } = generateDimensionStyle({
    controlName: CHART_PADDING,
    styleFor: "padding",
    attributes,
  });

  const {
    dimensionStylesDesktop: chartMarginDesk,
    dimensionStylesTab: chartMarginTab,
    dimensionStylesMobile: chartMarginMob,
  } = generateDimensionStyle({
    controlName: CHART_MARGIN,
    styleFor: "margin",
    attributes,
  });

  const {
    backgroundStylesDesktop: chartDeskBg,
    backgroundStylesTab: chartTabBg,
    backgroundStylesMobile: chartMobBg,
  } = generateNormalBGControlStyles({
    controlName: CHART_BG_COLOR,
    attributes,
    noMainBGImg: false,
  });

  const addImportant = (cssText) => 
    cssText.split(';')
      .map(rule => {
        const trimmed = rule.trim();
        if (!trimmed) return '';
        return trimmed.includes('!important') ? trimmed : trimmed + ' !important';
      })
      .join(';');  

  const {
    typoStylesDesktop: titleDeskTypoo,
    typoStylesTab: titleTabTypoo,
    typoStylesMobile: titleMobTypoo,
  } = generateTypographyStyles({
      prefixConstant: TITLE_TYPO,
      attributes,
  });
 
  const titleDeskTypo = addImportant(titleDeskTypoo);
  const titleTabTypo = addImportant(titleTabTypoo);
  const titleMobTypo = addImportant(titleMobTypoo);

  const {
    typoStylesDesktop: subtitleDeskTypoo,
    typoStylesTab: subtitleTabTypoo,
    typoStylesMobile: subtitleMobTypoo,
  } = generateTypographyStyles({
      prefixConstant: SUB_TITLE_TYPO,
      attributes,
  });
  const subtitleDeskTypo = addImportant(subtitleDeskTypoo);
  const subtitleTabTypo = addImportant(subtitleTabTypoo);
  const subtitleMobTypo = addImportant(subtitleMobTypoo);
  /**
   * All Style Combination
   */
  const desktopAllStyle = `
       .${uniqueId} {
        ${chartDeskBg}
        ${chartBorderStyles}
        ${chartBorderRadiusDesktop}
        ${chartBoxShadow}
        ${chartPaddingDesk}
        ${chartMarginDesk}
        }

        .${uniqueId} text.apexcharts-title-text{
          ${titleDeskTypo}
        }
          
        .${uniqueId} text.apexcharts-subtitle-text{
          ${subtitleDeskTypo}
        }       
    `;

  const tabletAllStyle = `
       .${uniqueId} {
        ${chartTabBg}
        ${chartBorderStylesTab}
        ${chartBorderRadiusTab}
        ${chartBoxShadow}
        ${chartPaddingTab}
        ${chartMarginTab}
        }

        .${uniqueId} text.apexcharts-title-text{
          ${titleTabTypo}
        }
          
        .${uniqueId} text.apexcharts-subtitle-text{
          ${subtitleTabTypo}
        }       
    `;
  const mobileAllStyle = `
       .${uniqueId} {
        ${chartMobBg}
        ${chartBorderStylesMob}
        ${chartBorderRadiusMob}
        ${chartBoxShadow}
        ${chartPaddingMob}
        ${chartMarginMob}
        }

        .${uniqueId} text.apexcharts-title-text{
          ${titleMobTypo}
        }
          
        .${uniqueId} text.apexcharts-subtitle-text{
          ${subtitleMobTypo}
        }       
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
