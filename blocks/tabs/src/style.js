/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
} = window.zoloModule;

import {
    NAV_ITEMS_ALIGN,
    NAV_CONTENT_ALIGN,
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_BOTTOM_SPACING,
    ACTIVE_HINT_HEIGHT,
    ICON_BG,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
} from './constants';
import { DESC_TYPOGRAPHY, TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        normalTabColor,
        hoverTabColor,
        activeTabColor,
        descColor,
        descHoverColor,
        descActiveColor,
        activeHintTabColor,
        iconColor,
        showIndicator,
    } = attributes;
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
        noMainBGImg: false,
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
    const {
        desktopRangeStyle: titleBottomSpacingDesktop,
        tabRangeStyle: titleBottomSpacingTab,
        mobRangeStyle: titleBottomSpacingMob,
    } = generateResRangeStyle({
        controlName: TITLE_BOTTOM_SPACING,
        property: 'height',
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
        .${uniqueId}.wp-block-zolo-tabs{
            ${deskVarticalContentSpacing}
        }
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVDeskAlign}
            ${deskNavSpacing}
            ${deskContentSpacing}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
           --zolo-tab-title-color: ${normalTabColor};
            ${tabNormalBgColorDesktop}
            ${tabItemPaddingDesktop}
            ${tabItemBorderRadiusDesktop}
            ${activeHintHeightDesktop}
            ${contentDeskAlign}
        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
           --zolo-tab-title-color: ${normalTabColor};
            ${tabItemPaddingDesktop}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            --zolo-tab-title-color: ${hoverTabColor};
            ${tabHoverBgColorDesktop}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item.active {
           ${activeTabColor ? `--zolo-tab-title-color: ${activeTabColor};` : ''}
            ${tabActiveBgColorDesktop}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingDesktop}
            ${tabTitleTypoDesk}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            color: ${descColor};
            ${tabDescTypoDesk}

        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover .zolo-tab_desc {
            color: ${descHoverColor};

        }
        .${uniqueId} .tab__item.zolo-tab_head-item:active .zolo-tab_desc {
            ${descActiveColor ? `--zolo-tab-desc-color: ${descActiveColor};` : ''}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:before {
            ${showIndicator? `content: '';` : ''}
            background-color: ${activeHintTabColor};
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconBgDesktop}
            ${iconPaddingDesktop}
            ${iconrRadiusDesktop}

        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon svg {
            ${iconColor ? `fill: ${iconColor};` : ''}
            ${iconHeightWidthDesktop}
        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon svg path{
            ${iconColor ? `fill: ${iconColor};` : ''}
        }
    `;

   const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVTabAlign}
            ${tabNavSpacing}
            ${tabContentSpacing}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorTab}
            ${tabItemPaddingTab}
            ${tabItemBorderRadiusTab}
            ${activeHintHeightTab}
            ${contentTabAlign}
        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_horizontal .zolo-tab_head-item {
           --zolo-tab-title-color: ${normalTabColor};
            ${tabItemPaddingTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item:hover {
            --zolo-tab-title-color: ${hoverTabColor};
            ${tabHoverBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item.active {
           ${activeTabColor ? `--zolo-tab-title-color: ${activeTabColor};` : ''}
            ${tabActiveBgColorTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_title {
            ${titleBottomSpacingTab}
            ${tabTitleTypoTab}
        }
        .${uniqueId} .tab__item.zolo-tab_head-item .zolo-tab_desc {
            color: ${descColor};
            ${tabDescTypoTab}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconBgTab}
            ${iconPaddingTab}
            ${iconrRadiusTab}

        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon svg {
            ${iconHeightWidthTab}
        }
    `;

     const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-tabs{
            ${tabVarticalContentSpacing}
        }
        .${uniqueId} .zolo-tabs .zolo-tab_header-wrap{
            ${itemsVTabAlign}
            ${mobNavSpacing}
            ${mobContentSpacing}
        }

        .${uniqueId} .tab__item.zolo-tab_head-item {
            ${tabNormalBgColorMobile}
            ${tabItemPaddingMobile}
            ${tabItemBorderRadiusMobile}
            ${activeHintHeightMob}
            ${contentMobAlign}
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
            ${tabDescTypoMob}
        }

        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon {
            ${iconBgMobile}
            ${iconPaddingMobile}
            ${iconrRadiusMobile}

        }
        .${uniqueId}.wp-block-zolo-tabs .zolo-tab_icon svg {
            ${iconHeightWidthMob}
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
