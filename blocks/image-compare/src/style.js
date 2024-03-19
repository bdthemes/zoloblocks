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
} from './constants';

import { BEFORE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, arrowbtnColor, labelPositons, HorizontalPosition, labelOpacity, beforeColor, afterColor, slidePositon } =
        attributes;
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
        property: `${slidePositon == true ? 'height' : 'width'}`,
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
        desktopRangeStyle: desktopArrowSizeW,
        tabRangeStyle: tabArrowSizeW,
        mobRangeStyle: mobArrowSizeW,
    } = generateResRangeStyle({
        controlName: ARROW_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: desktopArrowSizeH,
        tabRangeStyle: tabArrowSizeH,
        mobRangeStyle: mobArrowSizeH,
    } = generateResRangeStyle({
        controlName: ARROW_SIZE,
        property: 'height',
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
   
    .wp-block-zolo-image-compare.${uniqueId} .image-item-One,.wp-block-zolo-image-compare.${uniqueId} .image-item-two{
        ${slidePositon ? HorizontalPosition && `justify-content:${HorizontalPosition}` : labelPositons && `align-items:${labelPositons}`}
    }
    .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-left{
        ${slidePositon && 'top:0'}

    }
   .wp-block-zolo-image-compare.${uniqueId} .compare-slider-label-right{
        ${slidePositon ? 'bottom:0' : 'right:0'};
        

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
           ${desktopArrowSizeW.replace(';', '!important')};
           ${desktopArrowSizeH.replace(';', '!important')};
            
    }
    .wp-block-zolo-image-compare.${uniqueId} .__rcs-handle-button {
        ${desktopArrowWidth.replace(';', '!important')};
        ${desktopArrowHeight.replace(';', '!important')};
        ${desktopArrowBorder.replace(/;(?=\s|$)/g, ' !important;')};
        ${DesktopArrowRadius.replace(';', '!important')};
        ${DeskbArrowBg.replace(';', '!important')};
    }
   
  	`;
    const tabletAllStyle = `
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
        ${tabArrowSizeW.replace(';', '!important')};
        ${tabArrowSizeH.replace(';', '!important')};
            
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
        ${mobArrowSizeW.replace(';', '!important')};
        ${mobArrowSizeH.replace(';', '!important')};       
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
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};
export default Style;
