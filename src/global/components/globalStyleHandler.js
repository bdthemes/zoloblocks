/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';

import { softMinifyCssStrings } from '../../helpers/helper';
import { generateNormalBGControlStyles } from '../../helpers/normal-bg-helpers';
import { generateBackgroundControlStyles } from '../../helpers/backgroundHelpers';
import { generateDimensionStyle } from '../../helpers/dimension-helper';
import { generateBorderStyle } from '../../helpers/border-helper';
import { generateBoxShadowStyles } from '../../helpers/boxshadow-helper';

export const GlobalStyleHanlder = (props) => {
    const { attributes, setAttributes, desktopAllStyle, tabAllStyle, mobileAllStyle } = props;

    const { uniqueId, zoloStyles, globalConfig } = attributes;

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

    // generate Background
    // const {
    //     backgroundStylesDesktop: desktopBgStyles,
    //     backgroundStylesTab: tabBgStyles,
    //     backgroundStylesMobile: mobileBgStyles,
    // } = generateNormalBGControlStyles({
    //     controlName: globalConfig?.background?.prefix || 'mainBg',
    //     attributes,
    //     noMainBGImg: false,
    // });

    const {
        backgroundStylesDesktop: bgDeskStyle,
        hoverBackgroundStylesDesktop: hoverBgDeskStyle,
        backgroundStylesTab: bgTabStyle,
        hoverBackgroundStylesTab: hoverBgTabStyle,
        backgroundStylesMobile: bgMobStyle,
        hoverBackgroundStylesMobile: hoverBgMobStyle,
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
    .parent-${uniqueId} {
        ${normalBoxShadowStyle ? normalBoxShadowStyle : ''}
        ${borderRadiusStylesDesktop ? borderRadiusStylesDesktop : ''}
        ${desktopBorderStyles ? desktopBorderStyles : ''}
        ${marginStylesDesktop ? marginStylesDesktop : ''}
        ${paddingStylesDesktop ? paddingStylesDesktop : ''}
        ${bgDeskStyle ? bgDeskStyle : ''}
        ${hoverBgDeskStyle ? hoverBgDeskStyle : ''}
        ${overlayDeskStyle ? overlayDeskStyle : ''}
        ${hoverOverlayDeskStyle ? hoverOverlayDeskStyle : ''}
    }
  `;

    const tabGlobalStyles = `
    .parent-${uniqueId} {
        ${borderRadiusStylesTab ? borderRadiusStylesTab : ''}
        ${tabBorderStyles ? tabBorderStyles : ''}
        ${marginStylesTab ? marginStylesTab : ''}
        ${paddingStylesTab ? paddingStylesTab : ''}
        ${bgTabStyle ? bgTabStyle : ''}
        ${overlayTabStyle ? overlayTabStyle : ''}
        ${hoverOverlayTabStyle ? hoverOverlayTabStyle : ''}
        ${hoverBgTabStyle ? hoverBgTabStyle : ''}
    }
  `;

    const mobileGlobalStyles = `
    .parent-${uniqueId} {
        ${borderRadiusStylesMobile ? borderRadiusStylesMobile : ''}
        ${mobileBorderStyles ? mobileBorderStyles : ''}
        ${marginStylesMobile ? marginStylesMobile : ''}
        ${paddingStylesMobile ? paddingStylesMobile : ''}
        ${bgMobStyle ? bgMobStyle : ''}
        ${overlayMobStyle ? overlayMobStyle : ''}
        ${hoverOverlayMobStyle ? hoverOverlayMobStyle : ''}
        ${hoverBgMobStyle ? hoverBgMobStyle : ''}
    }
  `;

    const allStyle = `
		${desktopAllStyle + desktopGlobalStyles}
		@media all and (max-width: 1024px) {
			${tabAllStyle + tabGlobalStyles}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle + mobileGlobalStyles}
		}
	`;

    // Set All Style in "zoloStyles" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle + desktopGlobalStyles,
            tab: tabAllStyle + tabGlobalStyles,
            mobile: mobileAllStyle + mobileGlobalStyles,
        };
        if (JSON.stringify(zoloStyles) !== JSON.stringify(styles)) {
            setAttributes({
                zoloStyles: { ...styles },
            });
        }
    }, [attributes]);

    return (
        <>
            <style>{` ${softMinifyCssStrings(allStyle)}`}</style>
        </>
    );
};
