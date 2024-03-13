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
import { generateResRangeStyle } from '../../helpers/res-range-helper';
import { generateResAlignmentStyle } from '../../helpers/res-alignment-helper';

export const GlobalStyleHanlder = (props) => {
    const { attributes, setAttributes, desktopAllStyle, tabAllStyle, mobileAllStyle } = props;

    const {
        uniqueId,
        zIndex,
        overflow,
        zoloStyles,
        globalConfig,
        customCss,
        transformRotate3DActive,
        transformRotate3DActiveHover,
        scaleProportionally,
        scaleProportionallyHover,
        transformFlipHorizontal,
        transformFlipVertical,
    } = attributes;
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

    // translateX
    const {
        desktopRangeStyle: translateXStylesDesktop,
        tabRangeStyle: translateXStylesTab,
        mobRangeStyle: translateXStylesMob,
    } = generateResRangeStyle({
        controlName: 'translateX',
        property: '--zolo-transform-translateX',
        attributes,
    });
    // translateY
    const {
        desktopRangeStyle: translateYStylesDesktop,
        tabRangeStyle: translateYStylesTab,
        mobRangeStyle: translateYStylesMob,
    } = generateResRangeStyle({
        controlName: 'translateY',
        property: '--zolo-transform-translateY',
        attributes,
    });
    // translateX
    const {
        desktopRangeStyle: translateXStylesDesktopHover,
        tabRangeStyle: translateXStylesTabHover,
        mobRangeStyle: translateXStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'translateXHover',
        property: '--zolo-transform-translateX',
        attributes,
    });
    // translateY
    const {
        desktopRangeStyle: translateYStylesDesktopHover,
        tabRangeStyle: translateYStylesTabHover,
        mobRangeStyle: translateYStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'translateYHover',
        property: '--zolo-transform-translateY',
        attributes,
    });

    // transform rotate
    const {
        desktopRangeStyle: rotateStylesDesktop,
        tabRangeStyle: rotateStylesTab,
        mobRangeStyle: rotateStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformRotate',
        property: '--zolo-transform-rotate',
        attributes,
    });
    //transform rotate x
    const {
        desktopRangeStyle: rotateXStylesDesktop,
        tabRangeStyle: rotateXStylesTab,
        mobRangeStyle: rotateXStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformRotateX',
        property: '--zolo-transform-rotateX',
        attributes,
    });
    //transform rotate y
    const {
        desktopRangeStyle: rotateYStylesDesktop,
        tabRangeStyle: rotateYStylesTab,
        mobRangeStyle: rotateYStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformRotateY',
        property: '--zolo-transform-rotateY',
        attributes,
    });

    // transform roate perspective
    const {
        desktopRangeStyle: rotatePerspectiveStylesDesktop,
        tabRangeStyle: rotatePerspectiveStylesTab,
        mobRangeStyle: rotatePerspectiveStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformPerspective',
        property: '--zolo-transform-perspective',
        attributes,
    });

    // transform rotate hover
    const {
        desktopRangeStyle: rotateStylesDesktopHover,
        tabRangeStyle: rotateStylesTabHover,
        mobRangeStyle: rotateStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformRotateHover',
        property: '--zolo-transform-rotate',
        attributes,
    });
    //transform rotate x
    const {
        desktopRangeStyle: rotateXStylesDesktopHover,
        tabRangeStyle: rotateXStylesTabHover,
        mobRangeStyle: rotateXStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformRotateXHover',
        property: '--zolo-transform-rotateX',
        attributes,
    });
    //transform rotate y
    const {
        desktopRangeStyle: rotateYStylesDesktopHover,
        tabRangeStyle: rotateYStylesTabHover,
        mobRangeStyle: rotateYStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformRotateYHover',
        property: '--zolo-transform-rotateY',
        attributes,
    });

    // transform roate perspective
    const {
        desktopRangeStyle: rotatePerspectiveStylesDesktopHover,
        tabRangeStyle: rotatePerspectiveStylesTabHover,
        mobRangeStyle: rotatePerspectiveStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformPerspectiveHover',
        property: '--zolo-transform-perspective',
        attributes,
    });

    // transform scale
    const {
        desktopRangeStyle: scaleStylesDesktop,
        tabRangeStyle: scaleStylesTab,
        mobRangeStyle: scaleStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformScale',
        property: '--zolo-transform-scale',
        attributes,
    });

    //transform scale x
    const {
        desktopRangeStyle: scaleXStylesDesktop,
        tabRangeStyle: scaleXStylesTab,
        mobRangeStyle: scaleXStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformScaleX',
        property: '--zolo-transform-scaleX',
        attributes,
    });

    //transform scale y
    const {
        desktopRangeStyle: scaleYStylesDesktop,
        tabRangeStyle: scaleYStylesTab,
        mobRangeStyle: scaleYStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformScaleY',
        property: '--zolo-transform-scaleY',
        attributes,
    });


    // transform scale hover
    const {
        desktopRangeStyle: scaleStylesDesktopHover,
        tabRangeStyle: scaleStylesTabHover,
        mobRangeStyle: scaleStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformScaleHover',
        property: '--zolo-transform-scale',
        attributes,
    });

    //transform scale x
    const {
        desktopRangeStyle: scaleXStylesDesktopHover,
        tabRangeStyle: scaleXStylesTabHover,
        mobRangeStyle: scaleXStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformScaleXHover',
        property: '--zolo-transform-scaleX',
        attributes,
    });

    //transform scale y
    const {
        desktopRangeStyle: scaleYStylesDesktopHover,
        tabRangeStyle: scaleYStylesTabHover,
        mobRangeStyle: scaleYStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformScaleYHover',
        property: '--zolo-transform-scaleY',
        attributes,
    });

    // transform skew x
    const {
        desktopRangeStyle: skewXStylesDesktop,
        tabRangeStyle: skewXStylesTab,
        mobRangeStyle: skewXStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformSkewX',
        property: '--zolo-transform-skewX',
        attributes,
    });

    // transform skew y
    const {
        desktopRangeStyle: skewYStylesDesktop,
        tabRangeStyle: skewYStylesTab,
        mobRangeStyle: skewYStylesMob,
    } = generateResRangeStyle({
        controlName: 'transformSkewY',
        property: '--zolo-transform-skewY',
        attributes,
    });

    // transform skew x
    const {
        desktopRangeStyle: skewXStylesDesktopHover,
        tabRangeStyle: skewXStylesTabHover,
        mobRangeStyle: skewXStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformSkewXHover',
        property: '--zolo-transform-skewX',
        attributes,
    });

    // transform skew y
    const {
        desktopRangeStyle: skewYStylesDesktopHover,
        tabRangeStyle: skewYStylesTabHover,
        mobRangeStyle: skewYStylesMobHover,
    } = generateResRangeStyle({
        controlName: 'transformSkewYHover',
        property: '--zolo-transform-skewY',
        attributes,
    });

    // transform orgin x

    const {
        desktopAlignStyle: transformOriginXDesktop,
        tabAlignStyle: transformOriginXTab,
        mobAlignStyle: transformOriginXMob,
    } = generateResAlignmentStyle({
        controlName: 'transformOriginX',
        property: '--zolo-transform-originX',
        attributes,
    });

    // transform orgin y
    const {
        desktopAlignStyle: transformOriginYDesktop,
        tabAlignStyle: transformOriginYTab,
        mobAlignStyle: transformOriginYMob,
    } = generateResAlignmentStyle({
        controlName: 'transformOriginY',
        property: '--zolo-transform-originY',
        attributes,
    });
    // transform orgin x

    const {
        desktopAlignStyle: transformOriginXDesktopHover,
        tabAlignStyle: transformOriginXTabHover,
        mobAlignStyle: transformOriginXMobHover,
    } = generateResAlignmentStyle({
        controlName: 'transformOriginX',
        property: '--zolo-transform-originX',
        attributes,
    });

    // transform orgin y
    const {
        desktopAlignStyle: transformOriginYDesktopHover,
        tabAlignStyle: transformOriginYTabHover,
        mobAlignStyle: transformOriginYMobHover,
    } = generateResAlignmentStyle({
        controlName: 'transformOriginY',
        property: '--zolo-transform-originY',
        attributes,
    });

    // transform styles transition duration
     const {
         desktopRangeStyle: transitionDurationDesktop,
         tabRangeStyle: transitionDurationTab,
         mobRangeStyle: transitionDurationMob,
     } = generateResRangeStyle({
         controlName: 'transitionDuration',
         property: 'transition-duration',
         attributes,
     });

    const transformStylesDesktop = `
            ${translateXStylesDesktop}
            ${translateYStylesDesktop}
            ${rotateStylesDesktop}
            ${transformRotate3DActive ? `${rotateXStylesDesktop} ${rotateYStylesDesktop} ${rotatePerspectiveStylesDesktop}` : ''}
            ${scaleProportionally ? `${scaleStylesDesktop}` : ''}
            ${!scaleProportionally ? `${scaleXStylesDesktop} ${scaleYStylesDesktop}` : ''}
            ${skewXStylesDesktop}
            ${skewYStylesDesktop}
            ${transformFlipHorizontal ? `--zolo-transform-flipX:-1;` : ''}
            ${transformFlipVertical ? `--zolo-transform-flipY:-1;` : ''}
            ${transformOriginXDesktop}
            ${transformOriginYDesktop}
            `;
    const transformStylesTab = `
            ${translateXStylesTab}
            ${translateYStylesTab}
            ${rotateStylesTab}
            ${transformRotate3DActive ? `${rotateXStylesTab} ${rotateYStylesTab} ${rotatePerspectiveStylesTab}` : ''}
            ${scaleProportionally ? `${scaleStylesTab}` : ''}
            ${!scaleProportionally ? `${scaleXStylesTab} ${scaleYStylesTab}` : ''}
            ${skewXStylesTab}
            ${skewYStylesTab}
            ${transformOriginXTab}
            ${transformOriginYTab}
            `;
    const transformStylesMob = `
            ${translateXStylesMob}
            ${translateYStylesMob}
            ${rotateStylesMob}
            ${transformRotate3DActive ? `${rotateXStylesMob} ${rotateYStylesMob} ${rotatePerspectiveStylesMob}` : ''}
            ${scaleProportionally ? `${scaleStylesMob}` : ''}
            ${!scaleProportionally ? `${scaleXStylesMob} ${scaleYStylesMob}` : ''}
            ${skewXStylesMob}
            ${skewYStylesMob}
            ${transformOriginXMob}
            ${transformOriginYMob}
            `;

    // transform hover
    const transformStylesDesktopHover = `
            ${translateXStylesDesktopHover}
            ${translateYStylesDesktopHover}
            ${rotateStylesDesktopHover}
            ${transformRotate3DActiveHover ? `${rotateXStylesDesktopHover} ${rotateYStylesDesktopHover} ${rotatePerspectiveStylesDesktopHover}` : ''}
            ${scaleProportionallyHover ? `${scaleStylesDesktopHover}` : ''}
            ${!scaleProportionallyHover ? `${scaleXStylesDesktopHover} ${scaleYStylesDesktopHover}` : ''}
            ${skewXStylesDesktopHover}
            ${skewYStylesDesktopHover}
            ${transformOriginXDesktopHover}
            ${transformOriginYDesktopHover}
            ${transitionDurationDesktop ? `${transitionDurationDesktop}ms;` : ''}
            `;
    const transformStylesTabHover = `
            ${translateXStylesTabHover}
            ${translateYStylesTabHover}
            ${translateYStylesDesktopHover}
            ${rotateStylesTabHover}
            ${transformRotate3DActiveHover ? `${rotateXStylesTabHover} ${rotateYStylesTabHover} ${rotatePerspectiveStylesTabHover}` : ''}
            ${scaleProportionallyHover ? `${scaleStylesTabHover}` : ''}
            ${!scaleProportionallyHover ? `${scaleXStylesTabHover} ${scaleYStylesTabHover}` : ''}
            ${skewXStylesTabHover}
            ${skewYStylesTabHover}
            ${transformOriginXTabHover}
            ${transformOriginYTabHover}
           ${transitionDurationTab ? `${transitionDurationTab}ms;` : ''}
            `;
    const transformStylesMobHover = `
            ${translateXStylesMobHover}
            ${translateYStylesMobHover}
            ${translateYStylesDesktopHover}
            ${rotateStylesMobHover}
            ${transformRotate3DActiveHover ? `${rotateXStylesMobHover} ${rotateYStylesMobHover} ${rotatePerspectiveStylesMobHover}` : ''}
            ${scaleProportionallyHover ? `${scaleStylesMobHover}` : ''}
            ${!scaleProportionallyHover ? `${scaleXStylesMobHover} ${scaleYStylesMobHover}` : ''}
            ${skewXStylesMobHover}
            ${skewYStylesMobHover}
            ${transformOriginXMobHover}
            ${transformOriginYMobHover}
            ${transitionDurationMob ? `${transitionDurationMob}ms;` : ''}
            `;

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
        ${transformStylesDesktop}
      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgDeskStyle ? hoverBgDeskStyle : ''}
          ${transformStylesDesktopHover}
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
          ${transformStylesTab}
      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgTabStyle ? hoverBgTabStyle : ''}
            ${transformStylesTabHover}
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
          ${transformStylesMob}

      }

      .parent-${uniqueId}.zolo-block:hover {
          ${hoverBgMobStyle ? hoverBgMobStyle : ''}
          ${transformStylesMobHover}
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
