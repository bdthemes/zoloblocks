/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    generateGapStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateResAlignmentStyle,
    generateTextStrokeStyles,
} = window.zoloModule;

import {
    BEFORE_LABEL_BG,
    BEFORE_BORDER,
    BEFORE_RADIUS,
    BEFORE_MARGIN,
    BEFORE_PADDING,
    AFTER_LABEL_BG,
    AFTER_BORDER,
    LINE_THICKNESS,
    LINE_BOX_SHADOW,
    THICKNESS_BG,
    ARROW_BTN_WIDTH,
    ARROW_BTN_HEIGHT,
    ARROW_BTN_BORDER,
    ARROW_BTN_RADIUS,
    ARROW_BTN_BG,
    ARROW_SIZE,
    COMPARISON_HEIGHT,
} from './constants';

import { BEFORE_TYPO } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, arrowbtnColor, labelOpacity, beforeColor, afterColor, comparisonOptions } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};
    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};
    // comparison height
    const {
        desktopRangeStyle: desktopComparisonHeight,
        tabRangeStyle: tabComparisonHeight,
        mobRangeStyle: mobComparisonHeight,
    } = generateResRangeStyle({
        controlName: COMPARISON_HEIGHT,
        property: 'height',
        attributes,
    });

    //before Label
    const {
        backgroundStylesDesktop: DeskbeforeBg,
        backgroundStylesTab: TabbeforeLBg,
        backgroundStylesMobile: MobeforeLtBg,
    } = generateNormalBGControlStyles({ controlName: BEFORE_LABEL_BG, attributes });

    const {
        typoStylesDesktop: DesktopbeforeTypo,
        typoStylesTab: TabbeforeTypo,
        typoStylesMobile: MobbeforeTypo,
    } = generateTypographyStyles({ prefixConstant: BEFORE_TYPO, attributes });

    const {
        desktopBorderStyle: desktopbeforeBorder,
        tabBorderStyle: tabbeforeBorder,
        mobBorderStyle: mobbeforeBorder,
    } = generateBorderStyle({ controlName: BEFORE_BORDER, attributes });

    const {
        dimensionStylesDesktop: DesktopbeforeRadius,
        dimensionStylesTab: TabbeforeRadius,
        dimensionStylesMobile: MobbeforeRadius,
    } = generateDimensionStyle({
        controlName: BEFORE_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopbeforeMargin,
        dimensionStylesTab: TabbeforeMargin,
        dimensionStylesMobile: MobbeforeMargin,
    } = generateDimensionStyle({
        controlName: BEFORE_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: Desktopbeforepadding,
        dimensionStylesTab: Tabbeforepadding,
        dimensionStylesMobile: Mobbeforepadding,
    } = generateDimensionStyle({
        controlName: BEFORE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    //after Label
    const {
        backgroundStylesDesktop: DeskafterBg,
        backgroundStylesTab: TabafterBg,
        backgroundStylesMobile: MobaftertBg,
    } = generateNormalBGControlStyles({ controlName: AFTER_LABEL_BG, attributes });

    const {
        desktopBorderStyle: desktopafterBorder,
        tabBorderStyle: tabafterBorder,
        mobBorderStyle: mobafterBorder,
    } = generateBorderStyle({ controlName: AFTER_BORDER, attributes });

    //line control
    const {
        desktopRangeStyle: desktopLineThick,
        tabRangeStyle: tabLineThick,
        mobRangeStyle: mobLineThick,
    } = generateResRangeStyle({
        controlName: LINE_THICKNESS,
        property: `${comparisonOptions?.slidePositon === 'horizontal_direction' ? 'width' : 'height'}`,
        attributes,
    });
    const {
        backgroundStylesDesktop: DesLineConkBg,
        backgroundStylesTab: TabLineConBg,
        backgroundStylesMobile: MobLineConBg,
    } = generateNormalBGControlStyles({ controlName: THICKNESS_BG, attributes });

    const { boxShadowStyle: boxshadowLineShadow } = generateBoxShadowStyles({ controlName: LINE_BOX_SHADOW, attributes });

    //arrow Button
    const {
        desktopRangeStyle: desktopArrowWidth,
        tabRangeStyle: tabArrowWidth,
        mobRangeStyle: mobArrowWidth,
    } = generateResRangeStyle({
        controlName: ARROW_BTN_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: desktopArrowHeight,
        tabRangeStyle: tabArrowHeight,
        mobRangeStyle: mobArrowHeight,
    } = generateResRangeStyle({
        controlName: ARROW_BTN_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: desktopArrowSizetop,
        tabRangeStyle: tabArrowSizetop,
        mobRangeStyle: mobArrowSizetop,
    } = generateResRangeStyle({
        controlName: ARROW_SIZE,
        property: 'border-top-width',
        attributes,
    });

    const {
        desktopRangeStyle: desktopArrowSizeRight,
        tabRangeStyle: tabArrowSizeRight,
        mobRangeStyle: mobArrowSizeRight,
    } = generateResRangeStyle({
        controlName: ARROW_SIZE,
        property: 'border-right-width',
        attributes,
    });

    const {
        desktopRangeStyle: desktopArrowSizeBottom,
        tabRangeStyle: tabArrowSizeBottom,
        mobRangeStyle: mobArrowSizeBottom,
    } = generateResRangeStyle({
        controlName: ARROW_SIZE,
        property: 'border-bottom-width',
        attributes,
    });

    const {
        desktopBorderStyle: desktopArrowBorder,
        tabBorderStyle: tabArrowBorder,
        mobBorderStyle: mobArrowBorder,
    } = generateBorderStyle({ controlName: ARROW_BTN_BORDER, attributes });

    const {
        dimensionStylesDesktop: DesktopArrowRadius,
        dimensionStylesTab: TabArrowRadius,
        dimensionStylesMobile: MobArrowRadius,
    } = generateDimensionStyle({
        controlName: ARROW_BTN_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: DeskbArrowBg,
        backgroundStylesTab: TabbArrowBg,
        backgroundStylesMobile: MobArrowtBg,
    } = generateNormalBGControlStyles({ controlName: ARROW_BTN_BG, attributes });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${desktopComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label {
        opacity: ${labelOpacity}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${beforeColor && `color:${beforeColor}`};
         ${DeskbeforeBg}
         ${desktopbeforeBorder}
         ${DesktopbeforeTypo}
         ${DesktopbeforeRadius}
         ${DesktopbeforeMargin}
         ${Desktopbeforepadding}
    }
   .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${afterColor && `color:${afterColor}`};
         ${DeskafterBg}
         ${desktopafterBorder}
   }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${desktopLineThick.replace(';', '!important')};
        ${boxshadowLineShadow.replace(';', '!important')};
        ${DesLineConkBg.replace(';', '!important')}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${arrowbtnColor && `color:${arrowbtnColor}`};
        ${desktopArrowSizetop.replace(';', '!important')};
        ${desktopArrowSizeRight.replace(';', '!important')};
        ${desktopArrowSizeBottom.replace(';', '!important')};
          
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
        ${desktopArrowWidth.replace(';', '!important')};
        ${desktopArrowHeight.replace(';', '!important')};
        ${desktopArrowBorder.replace(/;(?=\s|$)/g, ' !important;')};
        ${DesktopArrowRadius.replace(';', '!important')};
        ${DeskbArrowBg.replace(';', '!important')};
    }
    
    ${
        active
            ? `
            .wp-block-zolo-image-compare.${uniqueId} .image-item-One img{
                filter:
                    blur(${blur}px)
                    brightness(${brightness}%)
                    contrast(${contrast}%)
                    saturate(${saturate}%)
                    hue-rotate(${hueRotate}deg)
            }
        `
            : ''
    }

    ${
        activeHover
            ? `
                 .wp-block-zolo-image-compare.${uniqueId} .image-item-two img {
                    filter:
                        blur(${blurHover}px)
                        brightness(${brightnessHover}%)
                        contrast(${contrastHover}%)
                        saturate(${saturateHover}%)
                        hue-rotate(${hueRotateHover}deg)
                }

            `
            : ''
    }
   
  	`;
    const tabletAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${tabComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${TabbeforeLBg}
         ${TabbeforeTypo}
         ${tabbeforeBorder}
         ${TabbeforeRadius}
         ${TabbeforeMargin}
         ${Tabbeforepadding}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${TabafterBg}
         ${tabafterBorder}  
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${tabLineThick.replace(';', '!important')};
        ${TabLineConBg.replace(';', '!important')}
       
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${tabArrowSizetop.replace(';', '!important')};
        ${tabArrowSizeRight.replace(';', '!important')};
        ${tabArrowSizeBottom.replace(';', '!important')};      
    }
     .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
         ${tabArrowWidth.replace(';', '!important')};
         ${tabArrowHeight.replace(';', '!important')};
         ${tabArrowBorder.replace(/;(?=\s|$)/g, ' !important;')}
         ${TabArrowRadius.replace(';', '!important')};
         ${TabbArrowBg.replace(';', '!important')};  
     }
	`;

    const mobileAllStyle = `
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-Two {
        ${mobComparisonHeight}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left,.wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
         ${MobeforeLtBg}
         ${MobbeforeTypo}
         ${mobbeforeBorder}
         ${MobbeforeRadius}
         ${MobbeforeMargin}
         ${Mobbeforepadding}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right {
         ${MobaftertBg}
         ${mobafterBorder}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-line{
        ${mobLineThick.replace(';', '!important')};
        ${MobLineConBg.replace(';', '!important')}
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-arrow {
        ${mobArrowSizetop.replace(';', '!important')};
        ${mobArrowSizeRight.replace(';', '!important')};
        ${mobArrowSizeBottom.replace(';', '!important')};    
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
         ${mobArrowWidth.replace(';', '!important')};
         ${mobArrowHeight.replace(';', '!important')};
         ${mobArrowBorder.replace(/;(?=\s|$)/g, ' !important;')}
         ${MobArrowRadius.replace(';', '!important')};
         ${MobArrowtBg.replace(';', '!important')};
     }
  	`;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.imageCompare.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.imageCompare.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.imageCompare.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};
export default Style;
