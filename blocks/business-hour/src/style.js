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
    BUSINESS_ITEM_BG,
    BUSINESS_ITEM_ODD_BG,
    BUSINESS_ITEM_RADIUS,
    BUSINESS_ITEM_BORDER,
    BUSINESS_ITEM_MARGIN,
    BUSINESS_ITEM_PADDING,
    DAYS_BG,
    DAYS_RADIUS,
    DAYS_PADDING,
    TIMES_BG,
    TIMES_RADIUS,
    TIMES_PADDING,
} from './constants';

import { DAYS_TYPO, TIMES_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId, dayColor, timeColor } = attributes;

    //item

    const {
        backgroundStylesDesktop: DeskItemBg,
        backgroundStylesTab: TabItemBg,
        backgroundStylesMobile: MobItemBg,
    } = generateNormalBGControlStyles({ controlName: BUSINESS_ITEM_BG, attributes });
    const {
        backgroundStylesDesktop: DeskItemBgOdd,
        backgroundStylesTab: TabItemBgOdd,
        backgroundStylesMobile: MobItemBgOdd,
    } = generateNormalBGControlStyles({ controlName: BUSINESS_ITEM_ODD_BG, attributes });

    const {
        dimensionStylesDesktop: DesktopItemRadius,
        dimensionStylesTab: TabItemRadius,
        dimensionStylesMobile: MobItemRadius,
    } = generateDimensionStyle({
        controlName: BUSINESS_ITEM_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopBorderStyle: desktopItemBorder,
        tabBorderStyle: tabItemBorder,
        mobBorderStyle: mobItemBorder,
    } = generateBorderStyle({ controlName: BUSINESS_ITEM_BORDER, attributes });

    const {
        dimensionStylesDesktop: DesktopItemMargin,
        dimensionStylesTab: TabItemMargin,
        dimensionStylesMobile: MobItemMargin,
    } = generateDimensionStyle({
        controlName: BUSINESS_ITEM_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopItemPadding,
        dimensionStylesTab: TabItemPadding,
        dimensionStylesMobile: MobItemPadding,
    } = generateDimensionStyle({
        controlName: BUSINESS_ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });
    // days
    const {
        backgroundStylesDesktop: DeskDaysBg,
        backgroundStylesTab: TabDaysBg,
        backgroundStylesMobile: MobDaysBg,
    } = generateNormalBGControlStyles({ controlName: DAYS_BG, attributes });
    const {
        typoStylesDesktop: DesktopDaysTypo,
        typoStylesTab: TabDaysTypo,
        typoStylesMobile: MobDaysTypo,
    } = generateTypographyStyles({ prefixConstant: DAYS_TYPO, attributes });

    const {
        dimensionStylesDesktop: DesktopDaysRadius,
        dimensionStylesTab: TabDaysRadius,
        dimensionStylesMobile: MobDaysRadius,
    } = generateDimensionStyle({
        controlName: DAYS_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopDaysPadding,
        dimensionStylesTab: TabDaysPadding,
        dimensionStylesMobile: MobDaysPadding,
    } = generateDimensionStyle({
        controlName: DAYS_PADDING,
        styleFor: 'padding',
        attributes,
    });

    //TIME
    const {
        backgroundStylesDesktop: DeskTimesBg,
        backgroundStylesTab: TabTimesBg,
        backgroundStylesMobile: MobTimesBg,
    } = generateNormalBGControlStyles({ controlName: TIMES_BG, attributes });

    const {
        typoStylesDesktop: DesktopTimesTypo,
        typoStylesTab: TabTimesTypo,
        typoStylesMobile: MoTimesTypo,
    } = generateTypographyStyles({ prefixConstant: TIMES_TYPO, attributes });

    const {
        dimensionStylesDesktop: DesktopTimesRadius,
        dimensionStylesTab: TabTimesRadius,
        dimensionStylesMobile: MobTimesRadius,
    } = generateDimensionStyle({
        controlName: TIMES_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopTimesPadding,
        dimensionStylesTab: TabTimesPadding,
        dimensionStylesMobile: MobTimesPadding,
    } = generateDimensionStyle({
        controlName: TIMES_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        
    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-hours-item{
        ${DeskItemBg}
        ${DesktopItemRadius}
        ${desktopItemBorder}
        ${DesktopItemMargin}
        ${DesktopItemPadding}
    }
    .wp-block-zolo-business-hour.${uniqueId}.zolo-biz-hours-style-2 .zolo-biz-hours-item:nth-of-type(odd){
        ${DeskItemBgOdd} 
    }

    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-day{
        ${DeskDaysBg}
        ${DesktopDaysTypo}
        ${DesktopDaysRadius}
        ${DesktopDaysPadding}
        ${dayColor && `color:${dayColor}`}
    }

    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-time{
       ${DeskTimesBg}
       ${DesktopTimesTypo}
       ${DesktopTimesRadius}
       ${DesktopTimesPadding}
       ${timeColor && `color:${timeColor}`}
    }
  	`;

    const tabletAllStyle = `
    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-hours-item{
        ${TabItemBg}
        ${TabItemRadius}
        ${tabItemBorder}
        ${TabItemMargin}
        ${TabItemPadding}
    }

    .wp-block-zolo-business-hour.${uniqueId}.zolo-biz-hours-style-2 .zolo-biz-hours-item:nth-of-type(odd){
        ${TabItemBgOdd} 
    }

    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-day{
        ${TabDaysBg}
        ${TabDaysTypo}
        ${TabDaysRadius}
        ${TabDaysPadding}
    }

    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-time{
        ${TabTimesBg}
        ${TabTimesTypo}
        ${TabTimesRadius}
        ${TabTimesPadding}
    }
	`;

    const mobileAllStyle = `
    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-hours-item{
        ${MobItemBg}
        ${MobItemRadius}
        ${mobItemBorder}
        ${MobItemMargin}
        ${MobItemPadding}
    }

    .wp-block-zolo-business-hour.${uniqueId}.zolo-biz-hours-style-2 .zolo-biz-hours-item:nth-of-type(odd){
        ${MobItemBgOdd} 
    }

    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-day{
        ${MobDaysBg}
        ${MobDaysTypo}
        ${MobDaysRadius}
        ${MobDaysPadding}
    }
    .wp-block-zolo-business-hour.${uniqueId} .zolo-biz-time{
        ${MobTimesBg}
        ${MoTimesTypo}
        ${MobTimesRadius}
        ${MobTimesPadding}
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
