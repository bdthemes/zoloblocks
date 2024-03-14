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
    AFTER_RADIUS,
    AFTER_MARGIN,
    AFTER_PADDING,
    LINE_THICKNESS,
    LINE_BOX_SHADOW,
    THICKNESS_BG,
    ARROW_BTN_WIDTH,
    ARROW_BTN_HEIGHT,
    ARROW_BTN_BORDER,
    ARROW_BTN_RADIUS,
    ARROW_BTN_BG,
} from './constants';

import { BEFORE_TYPO, AFTER_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, arrowbtnColor, arrowbtnBlure, labelPositons, labelOpacity, beforeColor, afterColor } = attributes;
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
        typoStylesDesktop: DesktopafterTypo,
        typoStylesTab: TabafterTypo,
        typoStylesMobile: MobafterTypo,
    } = generateTypographyStyles({ prefixConstant: AFTER_TYPO, attributes });

    const {
        desktopBorderStyle: desktopafterBorder,
        tabBorderStyle: tabafterBorder,
        mobBorderStyle: mobafterBorder,
    } = generateBorderStyle({ controlName: AFTER_BORDER, attributes });

    const {
        dimensionStylesDesktop: DesktopafterRadius,
        dimensionStylesTab: TabafterRadius,
        dimensionStylesMobile: MobafterRadius,
    } = generateDimensionStyle({
        controlName: AFTER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: DesktopafterMargin,
        dimensionStylesTab: TabafterMargin,
        dimensionStylesMobile: MobafterMargin,
    } = generateDimensionStyle({
        controlName: AFTER_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: Desktopafterpadding,
        dimensionStylesTab: Tabafterpadding,
        dimensionStylesMobile: Mobafterpadding,
    } = generateDimensionStyle({
        controlName: AFTER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    //line control
    const {
        desktopRangeStyle: desktopLineThick,
        tabRangeStyle: tabLineThick,
        mobRangeStyle: mobLineThick,
    } = generateResRangeStyle({
        controlName: LINE_THICKNESS,
        property: 'width',
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
   
    .wp-block-zolo-beaf-slider.${uniqueId} .image-item-One,.wp-block-zolo-beaf-slider.${uniqueId} .image-item-two{
        ${labelPositons && `align-items:${labelPositons}`}
    }
    
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label {
        opacity: ${labelOpacity}
     }
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-left{
         ${beforeColor && `color:${beforeColor}`};
         ${DeskbeforeBg}
         ${DesktopbeforeTypo}
         ${desktopbeforeBorder}
         ${DesktopbeforeRadius}
         ${DesktopbeforeMargin}
         ${Desktopbeforepadding}
    }
   .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-right {
         ${afterColor && `color:${afterColor}`};
         ${DeskafterBg}
         ${DesktopafterTypo}
         ${desktopafterBorder}
         ${DesktopafterRadius}
         ${DesktopafterMargin}
         ${Desktopafterpadding}

   }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-line{
        ${desktopLineThick.replace(';', '!important')};
        ${boxshadowLineShadow.replace(';', '!important')};
        ${DesLineConkBg.replace(';', '!important')}
       
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-arrow {
           ${arrowbtnColor && `color:${arrowbtnColor}`}   
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-button {
        ${arrowbtnBlure && `backdrop-filter:blur(${arrowbtnBlure}px) !important`};
        ${desktopArrowWidth.replace(';', '!important')};
        ${desktopArrowHeight.replace(';', '!important')};
        ${desktopArrowBorder}
        ${DesktopArrowRadius.replace(';', '!important')};
        ${DeskbArrowBg.replace(';', '!important')};
    }
   
  	`;
    const tabletAllStyle = `
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-left{
         ${TabbeforeLBg}
         ${TabbeforeTypo}
         ${tabbeforeBorder}
         ${TabbeforeRadius}
         ${TabbeforeMargin}
         ${Tabbeforepadding}
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-right {
         ${TabafterBg}
         ${TabafterTypo}
         ${tabafterBorder}
         ${TabafterRadius}
         ${TabafterMargin}
         ${Tabafterpadding}
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-line{
        ${tabLineThick.replace(';', '!important')};
        ${TabLineConBg.replace(';', '!important')}
       
    }
     .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-button {
         ${tabArrowWidth.replace(';', '!important')};
         ${tabArrowHeight.replace(';', '!important')};
         ${tabArrowBorder}
         ${TabArrowRadius.replace(';', '!important')};
         ${TabbArrowBg.replace(';', '!important')};


         
     }
	`;

    const mobileAllStyle = `
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-left{
         ${MobeforeLtBg}
         ${MobbeforeTypo}
         ${mobbeforeBorder}
         ${MobbeforeRadius}
         ${MobbeforeMargin}
         ${Mobbeforepadding}
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .compare-slider-label-right {
         ${MobaftertBg}
         ${MobafterTypo}
         ${mobafterBorder}
         ${MobafterRadius}
         ${MobafterMargin}
         ${Mobafterpadding}
    
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-line{
        ${mobLineThick.replace(';', '!important')};
        ${MobLineConBg.replace(';', '!important')}
    }
    .wp-block-zolo-beaf-slider.${uniqueId} .__rcs-handle-button {
         ${mobArrowWidth.replace(';', '!important')};
         ${mobArrowHeight.replace(';', '!important')};
         ${mobArrowBorder}
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
