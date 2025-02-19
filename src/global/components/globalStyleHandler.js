/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

import { softMinifyCssStrings } from '../../helpers/helper';
import { generateBackgroundControlStyles } from '../../helpers/backgroundHelpers';
import { generateDimensionStyle } from '../../helpers/dimension-helper';
import { generateBorderStyle } from '../../helpers/border-helper';
import { generateBoxShadowStyles } from '../../helpers/boxshadow-helper';
import { generateResRangeStyle } from '../../helpers/res-range-helper';
import { generateResAlignmentStyle } from '../../helpers/res-alignment-helper';
import { generateResSelectStyle } from '../../helpers/res-select-helper';
import { applyFilters } from '@wordpress/hooks';

export const GlobalStyleHanlder = (props) => {
    // Type checking and default props
    if (!props || typeof props !== 'object') {
        console.error('GlobalStyleHanlder: Invalid props.');
        return null;
    }
    
    const { attributes = {}, setAttributes, desktopAllStyle = {}, tabAllStyle = {}, mobileAllStyle = {}, blockName = '' } = props;

    const {
        uniqueId,
        zIndex,
        overflow,
        position,
        zoloStyles,
        globalConfig,
        customCss,
        transformRotate3DActive,
        transformRotate3DActiveHover,
        scaleProportionally,
        scaleProportionallyHover,
        transformFlipHorizontal,
        transformFlipHorizontalHover,
        transformFlipVerticalHover,
        transformFlipVertical,
    } = attributes;
    
    if (!uniqueId) {
        return;
    }

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

    // width type

    const {
        desktopSelectStyle: widthTypeDesktop,
        tabSelectStyle: widthTypeTab,
        mobSelectStyle: widthTypeMob,
    } = generateResSelectStyle({
        controlName: 'widthType',
        attributes,
    });
    const {
        desktopRangeStyle: customWidthDesktop,
        tabRangeStyle: customWidthTab,
        mobRangeStyle: customWidthMob,
    } = generateResRangeStyle({
        controlName: 'customWidth',
        property: 'width',
        attributes,
    });

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
    const filteredTransitionDurationDesktop = transitionDurationDesktop.replace('px;', 'ms');
    const filteredTransitionDurationTab = transitionDurationTab.replace('px;', 'ms');
    const filteredTransitionDurationMob = transitionDurationMob.replace('px;', 'ms');

    const {
        desktopRangeStyle: positionLeftDesktop,
        tabRangeStyle: positionLeftTab,
        mobRangeStyle: positionLeftMob,
    } = generateResRangeStyle({
        controlName: 'positionLeft',
        property: 'left',
        attributes,
    });
    const {
        desktopRangeStyle: positionRightDesktop,
        tabRangeStyle: positionRightTab,
        mobRangeStyle: positionRightMob,
    } = generateResRangeStyle({
        controlName: 'positionRight',
        property: 'right',
        attributes,
    });
    const {
        desktopRangeStyle: positionTopDesktop,
        tabRangeStyle: positionTopTab,
        mobRangeStyle: positionTopMob,
    } = generateResRangeStyle({
        controlName: 'positionTop',
        property: 'top',
        attributes,
    });
    const {
        desktopRangeStyle: positionBottomDesktop,
        tabRangeStyle: positionBottomTab,
        mobRangeStyle: positionBottomMob,
    } = generateResRangeStyle({
        controlName: 'positionBottom',
        property: 'bottom',
        attributes,
    });
    
    const positionDesktop = `
        ${position && position?.value !== '' ? `position: ${position.value};` : ''}
        ${position?.horizontalOrientation.direction === 'left' ? `${positionLeftDesktop}` : ''}
        ${position?.horizontalOrientation.direction === 'right' ? `${positionRightDesktop}` : ''}
        ${position?.verticalOrientation.direction === 'top' ? `${positionTopDesktop}` : ''}
        ${position?.verticalOrientation.direction === 'bottom' ? `${positionBottomDesktop}` : ''}
        ${position.value == 'fixed' || position.value === 'absolute' ? `width: ${blockName == 'zolo/container' ? '100% !important;' : 'auto;'}` : ''}
 `;
    const positionTab = `
        ${position && position?.value !== '' ? `position: ${position.value};` : ''}
        ${position?.horizontalOrientation.direction === 'left' ? `${positionLeftTab}` : ''}
        ${position?.horizontalOrientation.direction === 'right' ? `${positionRightTab}` : ''}
        ${position?.verticalOrientation.direction === 'top' ? `${positionTopTab}` : ''}
        ${position?.verticalOrientation.direction === 'bottom' ? `${positionBottomTab}` : ''}
    `;
    const positionMob = `
        ${position && position?.value !== '' ? `position: ${position.value};` : ''}
        ${position?.horizontalOrientation.direction === 'left' ? `${positionLeftMob}` : ''}
        ${position?.horizontalOrientation.direction === 'right' ? `${positionRightMob}` : ''}
        ${position?.verticalOrientation.direction === 'top' ? `${positionTopMob}` : ''}
        ${position?.verticalOrientation.direction === 'bottom' ? `${positionBottomMob}` : ''}
    `;
    // transform styles
    const transformStylesDesktop = `
            ${translateXStylesDesktop}
            ${translateYStylesDesktop}
            ${rotateStylesDesktop}
            ${transformRotate3DActive ? `${rotateXStylesDesktop} ${rotateYStylesDesktop} ${rotatePerspectiveStylesDesktop}` : ''}
            ${scaleProportionally ? `${scaleStylesDesktop.replace('px', '')}` : ''}
            ${!scaleProportionally ? `${scaleXStylesDesktop.replace('px', '')} ${scaleYStylesDesktop.replace('px', '')}` : ''}
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
            ${scaleProportionallyHover ? `${scaleStylesDesktopHover.replace('px', '')}` : ''}
            ${!scaleProportionallyHover ? `${scaleXStylesDesktopHover.replace('px', '')} ${scaleYStylesDesktopHover.replace('px', '')}` : ''}
            ${skewXStylesDesktopHover}
            ${skewYStylesDesktopHover}
            ${transformFlipHorizontalHover ? `--zolo-transform-flipX:-1;` : ''}
            ${transformFlipVerticalHover ? `--zolo-transform-flipY:-1;` : ''}
            ${transformOriginXDesktopHover}
            ${transformOriginYDesktopHover}
            ${filteredTransitionDurationDesktop ? `${filteredTransitionDurationDesktop}` : ''}

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
            ${filteredTransitionDurationTab ? `${filteredTransitionDurationTab}` : ''}
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
            ${filteredTransitionDurationMob ? `${filteredTransitionDurationMob}` : ''}
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
        ${positionDesktop}
        box-sizing: border-box;
      }

      ${
          widthTypeDesktop !== 'default'
              ? `
        .editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${uniqueId}):not(.zolo-content-iframe),
        .zolo-frontend :where(.${uniqueId}):not(.zolo-content-iframe){
        ${widthTypeDesktop == 'full' ? `width: 100vw !important; ` : ''}
        ${widthTypeDesktop == 'inline' ? `width: auto !important; ` : ''}
        ${widthTypeDesktop == 'custom' ? `${customWidthDesktop.replace(';', ' !important;')} ` : ''}
        }
        `
              : ''
      }



       .parent-${uniqueId}.zolo-transform-animation {
       ${transformStylesDesktop}
      }
       .parent-${uniqueId}.zolo-transform-animation:not(.zolo-entrance-animation) {
         ${filteredTransitionDurationDesktop ? `${filteredTransitionDurationDesktop}` : ''}
      }
       .parent-${uniqueId}.zolo-transform-animation:hover {
        ${transformStylesDesktopHover}
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
        ${positionTab}
      }

    ${
        widthTypeTab !== 'default'
            ? `
        .editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${uniqueId}):not(.zolo-content-iframe),.zolo-frontend :where(.${uniqueId}):not(.zolo-content-iframe){
        ${widthTypeTab == 'full' ? `width: 100vw !important; ` : ''}
        ${widthTypeTab == 'inline' ? `width: auto !important; ` : ''}
        ${widthTypeTab == 'custom' ? `${customWidthTab.replace(';', ' !important;')} ` : ''}
        }
        `
            : ''
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

       .parent-${uniqueId}.zolo-transform-animation {
        ${transformStylesTab}
      }
        .parent-${uniqueId}.zolo-transform-animation:not(.zolo-entrance-animation) {
         ${filteredTransitionDurationTab ? `${filteredTransitionDurationTab}` : ''}
      }
        .parent-${uniqueId}.zolo-transform-animation:hover {
        ${transformStylesTabHover}
        }
  `;

    const mobileGlobalStyles = `
      .parent-${uniqueId}.zolo-block {
          ${borderRadiusStylesMobile ? borderRadiusStylesMobile : ''}
          ${mobileBorderStyles ? mobileBorderStyles : ''}
          ${marginStylesMobile ? marginStylesMobile : ''}
          ${paddingStylesMobile ? paddingStylesMobile : ''}
          ${bgMobStyle ? bgMobStyle : ''}
        ${positionMob}
      }
    ${
        widthTypeMob !== 'default'
            ? `
        .editor-styles-wrapper .block-editor-block-list__layout.is-root-container :where(.${uniqueId}):not(.zolo-content-iframe),.zolo-frontend :where(.${uniqueId}):not(.zolo-content-iframe){
        ${widthTypeMob == 'full' ? `width: 100vw !important; ` : ''}
        ${widthTypeMob == 'inline' ? `width: auto !important; ` : ''}
        ${widthTypeMob == 'custom' ? `${customWidthMob.replace(';', ' !important;')} ` : ''}
        }
        `
            : ''
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

        .parent-${uniqueId}.zolo-transform-animation {
          ${transformStylesMob}
      }
       .parent-${uniqueId}.zolo-transform-animation:not(.zolo-entrance-animation) {
         ${filteredTransitionDurationMob ? `${filteredTransitionDurationMob}` : ''}
      }
       .parent-${uniqueId}.zolo-transform-animation:hover {
        ${transformStylesMobHover}
        }
  `;

    const blockWriteCss = customCss ? customCss.replace(/{{ZOLO}}/g, `.${uniqueId}`) : '';

    const filteredDesktopAllStyle = applyFilters('zolo_desktop_all_style', desktopAllStyle, props);
    const filteredTabAllStyle = applyFilters('zolo_tab_all_style', tabAllStyle, props);
    const filteredMobileAllStyle = applyFilters('zolo_mobile_all_style', mobileAllStyle, props);

    const allStyle = `
		${softMinifyCssStrings(filteredDesktopAllStyle + desktopGlobalStyles)}
        ${blockWriteCss}
		@media all and (max-width: 1024px) {
			${softMinifyCssStrings(filteredTabAllStyle + tabGlobalStyles)}
		}
		@media all and (max-width: 767px) {
			${softMinifyCssStrings(filteredMobileAllStyle + mobileGlobalStyles)}
		}
	`;

    const softMinifyDeskStrings = softMinifyCssStrings(filteredDesktopAllStyle + desktopGlobalStyles);
    const softMinifyTabStrings = softMinifyCssStrings(filteredTabAllStyle + tabGlobalStyles);
    const softMinifyMobStrings = softMinifyCssStrings(filteredMobileAllStyle + mobileGlobalStyles);

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
