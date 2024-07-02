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
} = window.zoloModule;

import {
    MENU_COLUMNS_GAP,
    ITEMS_GAP,
    MENU_HEIGHT,
    LIST_COLUMN_COUNT,
    SINGLE_ITEM_ALIGNMENT,
    //item
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_SHADOW,
    LIST_BG,
    LIST_HOVER_BOX_SHADOW,
    LIST_HOVER_BG,
    //desc
    DSC_MARGIN,
    // icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    ICON_VERTICAL_ALIGN,
    //Hover Icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
    ICON_LINKVERTICAL_ALIGN,
} from './constants';

import { DSC_TYPOGRAPHY, TEXT_LIST_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        dscColor,
        dscHcolor,
        textListColor,
        txtHListColor,
        listIconColor,
        listIconHover,
        layout,
        HoverIconColor,
        iconToggle,
        BorderHovColor,
    } = attributes;

    //desc
    const {
        typoStylesDesktop: DesktopDsceTypo,
        typoStylesTab: TabDscTypo,
        typoStylesMobile: MobDscTypo,
    } = generateTypographyStyles({ prefixConstant: DSC_TYPOGRAPHY, attributes });

    const {
        dimensionStylesDesktop: DesktopDsceMargin,
        dimensionStylesTab: TabDsceMargin,
        dimensionStylesMobile: MobDsceMargin,
    } = generateDimensionStyle({
        controlName: DSC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //Text LIST
    const {
        typoStylesDesktop: DesktopTextListTypo,
        typoStylesTab: TabTextListTypo,
        typoStylesMobile: MobTextListTypo,
    } = generateTypographyStyles({ prefixConstant: TEXT_LIST_TYPOGRAPHY, attributes });

    //icon
    const {
        desktopAlignStyle: desktopVListAlign,
        tabAlignStyle: tabVListAlign,
        mobAlignStyle: mobVListAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_VERTICAL_ALIGN,
        property: 'align-items',
        attributes,
    });

    const {
        desktopRangeStyle: desktopMenuHeight,
        tabRangeStyle: tabMenuHeight,
        mobRangeStyle: mobMenuHeight,
    } = generateResRangeStyle({
        controlName: MENU_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        backgroundStylesDesktop: DeskIconBg,
        backgroundStylesTab: TabIconBg,
        backgroundStylesMobile: MobIconBg,
    } = generateNormalBGControlStyles({ controlName: ICON_LIST_BG, attributes });
    const {
        backgroundStylesDesktop: DeskIconHBg,
        backgroundStylesTab: TabIconHBg,
        backgroundStylesMobile: MobIconHBg,
    } = generateNormalBGControlStyles({ controlName: ICON_LIST_HOVER_BG, attributes });
    const {
        dimensionStylesDesktop: DesktopIconPadding,
        dimensionStylesTab: TabIconPadding,
        dimensionStylesMobile: MobIconPadding,
    } = generateDimensionStyle({
        controlName: ICON_LIST_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        desktopBorderStyle: desktopIconBorder,
        tabBorderStyle: tabIconBorder,
        mobBorderStyle: mobIconBorder,
    } = generateBorderStyle({ controlName: ICON_LIST_BORDER, attributes });
    const {
        dimensionStylesDesktop: DesktopIconRadius,
        dimensionStylesTab: TabIconRadius,
        dimensionStylesMobile: MobIconRadius,
    } = generateDimensionStyle({
        controlName: ICON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopIconMargin,
        dimensionStylesTab: TabIconMargin,
        dimensionStylesMobile: MobIconMargin,
    } = generateDimensionStyle({
        controlName: ICON_LIST_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //Hover icon
    const {
        desktopAlignStyle: desktopHVListAlign,
        tabAlignStyle: tabHVListAlign,
        mobAlignStyle: mobHVListAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_LINKVERTICAL_ALIGN,
        property: 'align-items',
        attributes,
    });
    const {
        desktopRangeStyle: desktopIconHWidth,
        tabRangeStyle: tabIconHWidth,
        mobRangeStyle: mobIconHWidth,
    } = generateResRangeStyle({
        controlName: LIST_HOVER_ICON_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: desktopIconHHeight,
        tabRangeStyle: tabIconHHeight,
        mobRangeStyle: mobIconHHeight,
    } = generateResRangeStyle({
        controlName: LIST_HOVER_ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopIconHoMargin,
        dimensionStylesTab: TabIconHoMargin,
        dimensionStylesMobile: MobIconHoMargin,
    } = generateDimensionStyle({
        controlName: ICON_HOVER_LIST_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    //item
    const {
        desktopAlignStyle: desktopListAlign,
        tabAlignStyle: tabListAlign,
        mobAlignStyle: mobListAlign,
    } = generateResAlignmentStyle({
        controlName: ITEM_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    const {
        dimensionStylesDesktop: DesktopListRadius,
        dimensionStylesTab: TabListRadius,
        dimensionStylesMobile: MobListRadius,
    } = generateDimensionStyle({
        controlName: LIST_BOX_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopBorderStyle: desktopListBorder,
        tabBorderStyle: tabListBorder,
        mobBorderStyle: mobListBorder,
    } = generateBorderStyle({ controlName: LIST_BORDER, attributes });

    const {
        dimensionStylesDesktop: DesktopListP,
        dimensionStylesTab: TabListp,
        dimensionStylesMobile: MobListp,
    } = generateDimensionStyle({
        controlName: LIST_ALLBOX_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: boxshadowListitem } = generateBoxShadowStyles({ controlName: LIST_BOX_SHADOW, attributes });
    const {
        backgroundStylesDesktop: DeskListBg,
        backgroundStylesTab: TabListBg,
        backgroundStylesMobile: MobListBg,
    } = generateNormalBGControlStyles({ controlName: LIST_BG, attributes });

    const { boxShadowStyle: boxshadowHListitem } = generateBoxShadowStyles({ controlName: LIST_HOVER_BOX_SHADOW, attributes });

    const {
        backgroundStylesDesktop: DeskHListBg,
        backgroundStylesTab: TabHListBg,
        backgroundStylesMobile: MobHListBg,
    } = generateNormalBGControlStyles({ controlName: LIST_HOVER_BG, attributes });

    // column count
    const {
        desktopRangeStyle: listGridDeskstyle,
        tabRangeStyle: listGridTabStyle,
        mobRangeStyle: listGridMobStyle,
    } = generateResCounterStyle({
        controlName: LIST_COLUMN_COUNT,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 1,
            tabRange: 1,
            mobRange: 1,
        },
    });

    const {
        desktopAlignStyle: desktopSingleAlign,
        tabAlignStyle: tabSingleAlign,
        mobAlignStyle: mobSingleAlign,
    } = generateResAlignmentStyle({
        controlName: SINGLE_ITEM_ALIGNMENT,
        property: 'align-items',
        attributes,
    });

    // menu height
    const {
        gapStylesDesktop: menuHeightDeskstyle,
        gapStylesTab: menuHeightTabStyle,
        gapStylesMobile: menuHeightMobStyle,
    } = generateGapStyle({
        controlName: ITEMS_GAP,
        attributes,
    });

    /**
     * All Style Combination
     */

    const desktopAllStyle = `
    .wp-block-zolo-menu.${uniqueId} .zolo-menu-inner-blocks {
        ${desktopListAlign}
        ${menuHeightDeskstyle}
        ${desktopMenuHeight}
      }
  	`;
    const tabletAllStyle = `
    .wp-block-zolo-menu.${uniqueId} {

      }
	`;

    const mobileAllStyle = `

  	`;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.menu.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.menu.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.menu.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};
export default Style;
