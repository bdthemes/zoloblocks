/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';

import { softMinifyCssStrings, customCssZoloToBlockId, addPrefixToSelector } from '../../helpers/helper';
import { generateNormalBGControlStyles } from '../../helpers/normal-bg-helpers';
import { generateBackgroundControlStyles } from '../../helpers/backgroundHelpers';
import { generateDimensionStyle } from '../../helpers/dimension-helper';
import { generateBorderStyle } from '../../helpers/border-helper';
import { generateBoxShadowStyles } from '../../helpers/boxshadow-helper';

export const GlobalStyleHanlder = (props) => {
    const { attributes, setAttributes, desktopAllStyle, tabAllStyle, mobileAllStyle } = props;

    const { uniqueId, zIndex, overflow, zoloStyles, globalConfig, customCss } = attributes;

    if (!uniqueId) {
        return;
    }

    //Generate Global Styles

    // generate Border
    // const {
    //     borderStylesDesktop: desktopBorderStyles,
    //     borderStylesTab: tabBorderStyles,
    //     borderStylesMobile: mobileBorderStyles,
    // } = generateBorderStyle({
    //     controlName: globalConfig?.border?.prefix || 'mainBorder',
    //     attributes,
    // });

    const {
        desktopBorderStyle: desktopBorderStyles,
        tabBorderStyle: tabBorderStyles,
        mobBorderStyle: mobileBorderStyles,
    } = generateBorderStyle({
        controlName: globalConfig?.border?.prefix || 'mainBorder',
        attributes,
    });

    // border-radius
    const {
        dimensionStylesDesktop: borderRadiusStylesDesktop,
        dimensionStylesTab: borderRadiusStylesTab,
        dimensionStylesMobile: borderRadiusStylesMobile,
    } = generateDimensionStyle({
        controlName: globalConfig?.borderRadius?.prefix || 'mainBorderRadius',
        styleFor: 'border-radius',
        attributes,
    });

    // box shadow
    const { boxShadowStyle: normalBoxShadowStyle } = generateBoxShadowStyles({
        controlName: globalConfig?.boxShadow?.prefix || 'mainBoxShadow',
        attributes,
    });

    const {
        // main background
        backgroundStylesDesktop: bgDeskStyle,
        hoverBackgroundStylesDesktop: hoverBgDeskStyle,

        backgroundStylesTab: bgTabStyle,
        hoverBackgroundStylesTab: hoverBgTabStyle,

        backgroundStylesMobile: bgMobStyle,
        hoverBackgroundStylesMobile: hoverBgMobStyle,

        // overlay
        overlayStylesDesktop: overlayDeskStyle,
        hoverOverlayStylesDesktop: hoverOverlayDeskStyle,

        overlayStylesTab: overlayTabStyle,
        hoverOverlayStylesTab: hoverOverlayTabStyle,

        overlayStylesMobile: overlayMobStyle,
        hoverOverlayStylesMobile: hoverOverlayMobStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: globalConfig?.background?.prefix || 'mainBg',
    });

    // margin
    const {
        dimensionStylesDesktop: marginStylesDesktop,
        dimensionStylesTab: marginStylesTab,
        dimensionStylesMobile: marginStylesMobile,
    } = generateDimensionStyle({
        controlName: globalConfig?.margin?.prefix || 'mainMargin',
        styleFor: 'margin',
        attributes,
    });

    // padding
    const {
        dimensionStylesDesktop: paddingStylesDesktop,
        dimensionStylesTab: paddingStylesTab,
        dimensionStylesMobile: paddingStylesMobile,
    } = generateDimensionStyle({
        controlName: globalConfig?.padding?.prefix || 'mainPadding',
        styleFor: 'padding',
        attributes,
    });

    const desktopGlobalStyles = `
      .parent-${uniqueId}.zolo-block {
        ${normalBoxShadowStyle ? normalBoxShadowStyle : ''}
        ${borderRadiusStylesDesktop ? borderRadiusStylesDesktop : ''}
        ${desktopBorderStyles ? desktopBorderStyles : ''}
        ${marginStylesDesktop ? marginStylesDesktop : ''}
        ${paddingStylesDesktop ? paddingStylesDesktop : ''}
        ${bgDeskStyle ? bgDeskStyle : ''}
        ${zIndex ? `z-index: ${zIndex};` : ''}
        ${overflow ? `overflow: ${overflow};` : ''}
      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgDeskStyle ? hoverBgDeskStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:after {
          ${overlayDeskStyle ? overlayDeskStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:hover:after {
          ${hoverOverlayDeskStyle ? hoverOverlayDeskStyle : ''}
      }
  `;

    const tabGlobalStyles = `
      .parent-${uniqueId}.zolo-block {
          ${borderRadiusStylesTab ? borderRadiusStylesTab : ''}
          ${tabBorderStyles ? tabBorderStyles : ''}
          ${marginStylesTab ? marginStylesTab : ''}
          ${paddingStylesTab ? paddingStylesTab : ''}
          ${bgTabStyle ? bgTabStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgTabStyle ? hoverBgTabStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:after {
          ${overlayTabStyle ? overlayTabStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:hover:after {
          ${hoverOverlayTabStyle ? hoverOverlayTabStyle : ''}
      }
  `;

    const mobileGlobalStyles = `
      .parent-${uniqueId}.zolo-block {
          ${borderRadiusStylesMobile ? borderRadiusStylesMobile : ''}
          ${mobileBorderStyles ? mobileBorderStyles : ''}
          ${marginStylesMobile ? marginStylesMobile : ''}
          ${paddingStylesMobile ? paddingStylesMobile : ''}
          ${bgMobStyle ? bgMobStyle : ''}

      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgMobStyle ? hoverBgMobStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:after {
          ${overlayMobStyle ? overlayMobStyle : ''}
      }

      .parent-${uniqueId}.zolo-block:hover:after {
          ${hoverOverlayMobStyle ? hoverOverlayMobStyle : ''}
      }
  `;

    const blockWriteCss = customCss ? customCss.replace(/{{ZOLO}}/g, `.${uniqueId}`) : '';

    const allStyle = `
		${softMinifyCssStrings(desktopAllStyle + desktopGlobalStyles)}
        ${blockWriteCss}
		@media all and (max-width: 1024px) {
			${softMinifyCssStrings(tabAllStyle + tabGlobalStyles)}
		}
		@media all and (max-width: 767px) {
			${softMinifyCssStrings(mobileAllStyle + mobileGlobalStyles)}
		}
	`;

    const softMinifyDeskStrings = softMinifyCssStrings(desktopAllStyle + desktopGlobalStyles);
    const softMinifyTabStrings = softMinifyCssStrings(tabAllStyle + tabGlobalStyles);
    const softMinifyMobStrings = softMinifyCssStrings(mobileAllStyle + mobileGlobalStyles);

    // Set All Style in "zoloStyles" Attribute
    useEffect(() => {
        const styles = {
            ...(softMinifyDeskStrings && softMinifyDeskStrings !== '' ? { desktop: softMinifyDeskStrings } : {}),
            ...(softMinifyTabStrings && softMinifyTabStrings !== '' ? { tab: softMinifyTabStrings } : {}),
            ...(softMinifyMobStrings && softMinifyMobStrings !== '' ? { mobile: softMinifyMobStrings } : {}),
            ...(blockWriteCss && blockWriteCss !== '' ? { customCss: blockWriteCss } : {}),
        };

        if (JSON.stringify(zoloStyles) !== JSON.stringify(styles)) {
            setAttributes({
                zoloStyles: { ...styles },
            });
        }
    }, [attributes]);

    return (
        <>
            <style>{allStyle}</style>
        </>
    );
};
