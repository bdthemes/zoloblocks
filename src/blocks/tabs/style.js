/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBorderStyle,
    generateBoxShadowStyles,
} = window.zoloModule;

import {
    NAV_ITEMS_ALIGN,
    NAV_CONTENT_ALIGN,
    NAV_ICON_ALIGN,
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_MARGIN,
    DESC_MARGIN,
    ACTIVE_HINT_HEIGHT,
    ICON_BG,
    ICON_HBG,
    ICON_ABG,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    TAB_ITEM_BORDER,
    TABS_CWIDTH,
    TAB_ITEM_BSHADOW,
    TAB_ITEM_HBSHADOW,
    TAB_ITEM_ABSHADOW,
    TAB_WRAP_BGCOLOR,
    TAB_WRAP_BORDER,
    TAB_WRAP_RADIUS,
    TAB_WRAP_PADDING,
    TAB_WRAP_BSHADOW,
} from './constants';
import { DESC_TYPOGRAPHY, TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, tabTitleColors, descColors, activeHintTabColor, iconColors, showIndicator, itemBorderColors } = attributes;

    // tabs container
    const {
        desktopRangeStyle: deskTabsWidth,
        tabRangeStyle: tabTabsWidth,
        mobRangeStyle: mobTabsWidth,
    } = generateResRangeStyle({
        controlName: TABS_CWIDTH,
        property: '--tab-vertical-width',
        attributes,
    });

    // item
    const {
        desktopBorderStyle: itemBorderStylesDesk,
        tabBorderStyle: itemBorderStylesTab,
        mobBorderStyle: itemBorderStylesMob,
    } = generateBorderStyle({
        controlName: TAB_ITEM_BORDER,
        attributes,
    });

    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        controlName: TAB_ITEM_BSHADOW,
        attributes,
    });

    const { boxShadowStyle: itemHBoxShadow } = generateBoxShadowStyles({
        controlName: TAB_ITEM_HBSHADOW,
        attributes,
    });

    const { boxShadowStyle: itemABoxShadow } = generateBoxShadowStyles({
        controlName: TAB_ITEM_ABSHADOW,
        attributes,
    });

    // styles
    const {
        desktopAlignStyle: itemsVDeskAlign,
        tabAlignStyle: itemsVTabAlign,
        mobAlignStyle: itemsVMobAlign,
    } = generateResAlignmentStyle({
        controlName: NAV_ITEMS_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: contentDeskAlign,
        tabAlignStyle: contentTabAlign,
        mobAlignStyle: contentMobAlign,
    } = generateResAlignmentStyle({
        controlName: NAV_CONTENT_ALIGN,
        property: 'text-align',
        attributes,
    });
    const {
        desktopAlignStyle: iconDeskAlign,
        tabAlignStyle: iconTabAlign,
        mobAlignStyle: iconMobAlign,
    } = generateResAlignmentStyle({
        controlName: NAV_ICON_ALIGN,
        property: 'align-items',
        attributes,
    });

    const {
        desktopRangeStyle: deskNavSpacing,
        tabRangeStyle: tabNavSpacing,
        mobRangeStyle: mobNavSpacing,
    } = generateResRangeStyle({
        controlName: NAV_SPACING,
        property: 'gap',
        attributes,
    });

    const {
        desktopRangeStyle: deskContentSpacing,
        tabRangeStyle: tabContentSpacing,
        mobRangeStyle: mobContentSpacing,
    } = generateResRangeStyle({
        controlName: CONTENT_SPACING,
        property: 'margin-bottom',
        attributes,
    });
    const {
        desktopRangeStyle: deskVarticalContentSpacing,
        tabRangeStyle: tabVarticalContentSpacing,
        mobRangeStyle: mobVarticalContentSpacing,
    } = generateResRangeStyle({
        controlName: CONTENT_SPACING,
        property: '--zolo-tab-wrap-gap',
        attributes,
    });

    const {
        desktopRangeStyle: activeHintHeightDesktop,
        tabRangeStyle: activeHintHeightTab,
        mobRangeStyle: activeHintHeightMob,
    } = generateResRangeStyle({
        controlName: ACTIVE_HINT_HEIGHT,
        property: '--zolo-tab-animation-height',
        attributes,
    });

    /**
     * Background Color
     */
    const {
        backgroundStylesDesktop: tabNormalBgColorDesktop,
        backgroundStylesTab: tabNormalBgColorTab,
        backgroundStylesMobile: tabNormalBgColorMobile,
    } = generateNormalBGControlStyles({
        controlName: TAB_NORMAL_BGCOLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: iconBgDesktop,
        backgroundStylesTab: iconBgTab,
        backgroundStylesMobile: iconBgMobile,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: iconHBgDesktop,
        backgroundStylesTab: iconHBgTab,
        backgroundStylesMobile: iconHBgMobile,
    } = generateNormalBGControlStyles({
        controlName: ICON_HBG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: iconABgDesktop,
        backgroundStylesTab: iconABgTab,
        backgroundStylesMobile: iconABgMobile,
    } = generateNormalBGControlStyles({
        controlName: ICON_ABG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: tabHoverBgColorDesktop,
        backgroundStylesTab: tabHoverBgColorTab,
        backgroundStylesMobile: tabHoverBgColorMobile,
    } = generateNormalBGControlStyles({
        controlName: TAB_HOVER_BGCOLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: tabActiveBgColorDesktop,
        backgroundStylesTab: tabActiveBgColorTab,
        backgroundStylesMobile: tabActiveBgColorMobile,
    } = generateNormalBGControlStyles({
        controlName: TAB_ACTIVE_BGCOLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: tabItemPaddingDesktop,
        dimensionStylesTab: tabItemPaddingTab,
        dimensionStylesMobile: tabItemPaddingMobile,
    } = generateDimensionStyle({
        controlName: TAB_ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: tabItemBorderRadiusDesktop,
        dimensionStylesTab: tabItemBorderRadiusTab,
        dimensionStylesMobile: tabItemBorderRadiusMobile,
    } = generateDimensionStyle({
        controlName: TAB_ITEM_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // tab wrap
    const {
        backgroundStylesDesktop: tabWrapBgColorDesktop,
        backgroundStylesTab: tabWrapBgColorTab,
        backgroundStylesMobile: tabWrapBgColorMobile,
    } = generateNormalBGControlStyles({
        controlName: TAB_WRAP_BGCOLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: wrapBorderStylesDesk,
        tabBorderStyle: wrapBorderStylesTab,
        mobBorderStyle: wrapBorderStylesMob,
    } = generateBorderStyle({
        controlName: TAB_WRAP_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: tabWrapBorderRadiusDesktop,
        dimensionStylesTab: tabWrapBorderRadiusTab,
        dimensionStylesMobile: tabWrapBorderRadiusMobile,
    } = generateDimensionStyle({
        controlName: TAB_WRAP_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const {
        dimensionStylesDesktop: tabWrapPaddingDesktop,
        dimensionStylesTab: tabWrapPaddingTab,
        dimensionStylesMobile: tabWrapPaddingMobile,
    } = generateDimensionStyle({
        controlName: TAB_WRAP_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const { boxShadowStyle: tabsWrapBoxShadow } = generateBoxShadowStyles({
        controlName: TAB_WRAP_BSHADOW,
        attributes,
    });

    // title
    const {
        dimensionStylesDesktop: titleBottomSpacingDesktop,
        dimensionStylesTab: titleBottomSpacingTab,
        dimensionStylesMobile: titleBottomSpacingMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: descBottomSpacingDesktop,
        dimensionStylesTab: descBottomSpacingTab,
        dimensionStylesMobile: descBottomSpacingMob,
    } = generateDimensionStyle({
        controlName: DESC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: tabTitleTypoDesk,
        typoStylesTab: tabTitleTypoTab,
        typoStylesMobile: tabTitleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });
    // desc
    const {
        typoStylesDesktop: tabDescTypoDesk,
        typoStylesTab: tabDescTypoTab,
        typoStylesMobile: tabDescTypoMob,
    } = generateTypographyStyles({
        prefixConstant: DESC_TYPOGRAPHY,
        attributes,
    });

    // ICONS

    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: iconMarginDesktop,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMobile,
    } = generateDimensionStyle({
        controlName: ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: iconBorderStylesDesk,
        tabBorderStyle: iconBorderStylesTab,
        mobBorderStyle: iconBorderStylesMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: iconrRadiusDesktop,
        dimensionStylesTab: iconrRadiusTab,
        dimensionStylesMobile: iconrRadiusMobile,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopRangeStyle: iconHeightWidthDesktop,
        tabRangeStyle: iconHeightWidthTab,
        mobRangeStyle: iconHeightWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: '--zolo-tab-icon-size',
        attributes,
    });
    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs {
            ${deskVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVDeskAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap {
            ${deskNavSpacing}
            ${deskContentSpacing}
            ${wrapBorderStylesDesk}
            ${tabWrapBgColorDesktop}
            ${tabWrapBorderRadiusDesktop}
            ${tabWrapPaddingDesktop}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorDesktop}
            ${tabItemPaddingDesktop}
            ${tabItemBorderRadiusDesktop}
            ${activeHintHeightDesktop}
            ${contentDeskAlign}
            ${itemBorderStylesDesk}
            ${itemBoxShadow}
            ${iconDeskAlign}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingDesktop}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorDesktop}
            ${itemBorderColors.hover ? `border-color: ${itemBorderColors.hover};` : ''}
            ${itemHBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorDesktop}
            ${itemBorderColors.active ? `border-color: ${itemBorderColors.active};` : ''}
            ${itemABoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingDesktop}
            ${tabTitleTypoDesk}
            --zolo-tab-title-color: ${tabTitleColors?.normal};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active .zolo-tab_title {
            --zolo-tab-title-color: ${tabTitleColors?.active};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover .zolo-tab_title {
            --zolo-tab-title-color: ${tabTitleColors?.hover};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.normal};
            ${tabDescTypoDesk}
            ${descBottomSpacingDesktop}

        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.hover};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active .zolo-tab_desc {
            --zolo-tab-desc-color: ${descColors?.active};
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:before {
            ${showIndicator ? `content: '';` : ''}
            background-color: ${activeHintTabColor};
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon {
            ${iconBgDesktop}
            ${iconPaddingDesktop}
            ${iconMarginDesktop}
            ${iconrRadiusDesktop}
            ${iconBorderStylesDesk}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item:hover .zolo-tab_icon {
            ${iconHBgDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item.active .zolo-tab_icon {
            ${iconABgDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.normal};` : ''}
            ${iconHeightWidthDesktop}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item:hover .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.hover};` : ''}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item.active .zolo-tab_icon svg {
            ${iconColors ? `fill: ${iconColors?.active};` : ''}
        }

        .${uniqueId}{
            ${deskTabsWidth}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVTabAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${tabNavSpacing}
            ${tabContentSpacing}
            ${wrapBorderStylesTab}
            ${tabWrapBgColorTab}
            ${tabWrapBorderRadiusTab}
            ${tabWrapPaddingTab}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorTab}
            ${tabItemPaddingTab}
            ${tabItemBorderRadiusTab}
            ${activeHintHeightTab}
            ${contentTabAlign}
            ${itemBorderStylesTab}
            ${iconTabAlign}
        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingTab}
            ${tabTitleTypoTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            ${descBottomSpacingTab}
            ${tabDescTypoTab}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconPaddingTab}
            ${iconMarginTab}
            ${iconrRadiusTab}
            ${iconBorderStylesTab}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg  {
            ${iconHeightWidthTab}
        }

        .${uniqueId}{
            ${tabTabsWidth}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }

        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-horizontal-head-tabswrap,
        .${uniqueId} .zolo-tabs.zolo-tab_horizontal .zolo-tab_header-wrap {
            ${itemsVMobAlign}
        }

        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${mobNavSpacing}
            ${mobContentSpacing}
            ${wrapBorderStylesMob}
            ${tabWrapBgColorMobile}
            ${tabWrapBorderRadiusMobile}
            ${tabWrapPaddingMobile}
            ${tabsWrapBoxShadow}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorMobile}
            ${tabItemPaddingMobile}
            ${tabItemBorderRadiusMobile}
            ${activeHintHeightMob}
            ${contentMobAlign}
            ${itemBorderStylesMob}
            ${iconMobAlign}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
            ${tabItemPaddingMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            ${tabHoverBgColorMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item.active {
            ${tabActiveBgColorMobile}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingMob}
            ${tabTitleTypoMob}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            ${descBottomSpacingMob}
            ${tabDescTypoMob}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconPaddingMobile}
            ${iconMarginMobile}
            ${iconrRadiusMobile}
            ${iconBorderStylesMob}
        }

        .${uniqueId}.wp-block-zolo-tabs .tab__item.zolo-tab_head-item .zolo-tab_icon svg  {
            ${iconHeightWidthMob}
        }

        .${uniqueId} {
            ${mobTabsWidth}
        }
    `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.tabs.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.tabs.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.tabs.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
