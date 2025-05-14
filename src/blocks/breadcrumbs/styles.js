import { applyFilters } from '@wordpress/hooks';

import {
    ROW_ALIGNMENT,
    COLUMNS_GAP,
    //item
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_BORDER_RADIUS,
    ITEM_HOVER_PADDING,
    ITEM_HOVER_SHADOW,
    //home
    HOME_BG,
    HOME_BORDER,
    HOME_BORDER_RADIUS,
    HOME_PADDING,
    HOME_SHADOW,
    HOME_HOVER_BG,
    HOME_HOVER_BORDER_RADIUS,
    HOME_HOVER_PADDING,
    HOME_HOVER_SHADOW,
    HOME_ICON_SIZE,
    HOME_ICON_SPACE,
    //current
    CURRENT_BG,
    CURRENT_BORDER,
    CURRENT_BORDER_RADIUS,
    CURRENT_PADDING,
    CURRENT_SHADOW,
    CURRENT_HOVER_BG,
    CURRENT_HOVER_BORDER_RADIUS,
    CURRENT_HOVER_PADDING,
    CURRENT_HOVER_SHADOW,
    //separator
    SEP_SIZE,
    SEP_BG,
    SEP_BORDER,
    SEP_BORDER_RADIUS,
    SEP_PADDING,
    SEP_MARGIN,
    SEP_SHADOW,
    SEP_HOVER_BG,
    SEP_HOVER_BORDER_RADIUS,
    SEP_HOVER_PADDING,
    SEP_HOVER_SHADOW,
} from './constants';

import { ITEM_TYPOGRAPHY, HOME_TYPOGRAPHY, CURRENT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const {
    generateResRangeStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
    generateGapStyle,
    generateResAlignmentStyle,
} = window.zoloModule;

function Style({ props }) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        itemColor,
        itemHoverColor,
        itemHoverBColor,
        homeColor,
        homeHoverColor,
        homeHoverBColor,
        homeIconColor,
        homeIconHoverColor,
        currentColor,
        currentHoverColor,
        currentHoverBColor,
        sepColor,
        sepHoverColor,
        sepHoverBColor,
    } = attributes;

    const {
        desktopAlignStyle: rowAlignDesk,
        tabAlignStyle: rowAlignTab,
        mobAlignStyle: rowAlignMob,
    } = generateResAlignmentStyle({
        controlName: ROW_ALIGNMENT,
        property: 'text-align',
        attributes,
    });
    const {
        gapStylesDesktop: spaceBetweenDesk,
        gapStylesTab: spaceBetweenTab,
        gapStylesMobile: spaceBetweenMob,
    } = generateGapStyle({
        controlName: COLUMNS_GAP,
        attributes,
    });
    //item style
    const {
        typoStylesDesktop: itemTypoDesk,
        typoStylesTab: itemTypoTab,
        typoStylesMobile: itemTypoMob,
    } = generateTypographyStyles({
        prefixConstant: ITEM_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: itemPaddingDesk,
        dimensionStylesTab: itemPaddingTab,
        dimensionStylesMobile: itemPaddingMob,
    } = generateDimensionStyle({
        controlName: ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: itemBGDesk,
        backgroundStylesTab: itemBGTab,
        backgroundStylesMobile: itemBGMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: itemBorderDesk,
        tabBorderStyle: itemBorderTab,
        mobBorderStyle: itemBorderMob,
    } = generateBorderStyle({
        controlName: ITEM_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: itemBorderRadiusDesk,
        dimensionStylesTab: itemBorderRadiusTab,
        dimensionStylesMobile: itemBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_SHADOW,
    });

    const {
        dimensionStylesDesktop: itemHoverPaddingDesk,
        dimensionStylesTab: itemHoverPaddingTab,
        dimensionStylesMobile: itemHoverPaddingMob,
    } = generateDimensionStyle({
        controlName: ITEM_HOVER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: itemHoverBGDesk,
        backgroundStylesTab: itemHoverBGTab,
        backgroundStylesMobile: itemHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: ITEM_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: itemHoverBorderRadiusDesk,
        dimensionStylesTab: itemHoverBorderRadiusTab,
        dimensionStylesMobile: itemHoverBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ITEM_HOVER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: itemHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_HOVER_SHADOW,
    });
    //home
    const {
        typoStylesDesktop: homeTypoDesk,
        typoStylesTab: homeTypoTab,
        typoStylesMobile: homeTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HOME_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: homePaddingDesk,
        dimensionStylesTab: homePaddingTab,
        dimensionStylesMobile: homePaddingMob,
    } = generateDimensionStyle({
        controlName: HOME_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: homeBGDesk,
        backgroundStylesTab: homeBGTab,
        backgroundStylesMobile: homeBGMob,
    } = generateNormalBGControlStyles({
        controlName: HOME_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: homeBorderDesk,
        tabBorderStyle: homeBorderTab,
        mobBorderStyle: homeBorderMob,
    } = generateBorderStyle({
        controlName: HOME_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: homeBorderRadiusDesk,
        dimensionStylesTab: homeBorderRadiusTab,
        dimensionStylesMobile: homeBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HOME_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: homeBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: HOME_SHADOW,
    });

    const {
        dimensionStylesDesktop: homeHoverPaddingDesk,
        dimensionStylesTab: homeHoverPaddingTab,
        dimensionStylesMobile: homeHoverPaddingMob,
    } = generateDimensionStyle({
        controlName: HOME_HOVER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: homeHoverBGDesk,
        backgroundStylesTab: homeHoverBGTab,
        backgroundStylesMobile: homeHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: HOME_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: homeHoverBorderRadiusDesk,
        dimensionStylesTab: homeHoverBorderRadiusTab,
        dimensionStylesMobile: homeHoverBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HOME_HOVER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: homeHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: HOME_HOVER_SHADOW,
    });
    const {
        desktopRangeStyle: homeIconSizeDesk,
        tabRangeStyle: homeIconSizeTab,
        mobRangeStyle: homeIconSizeMob,
    } = generateResRangeStyle({
        controlName: HOME_ICON_SIZE,
        property: 'font-size',
        attributes,
    });
    const {
        gapStylesDesktop: homeSpaceBetweenDesk,
        gapStylesTab: homeSpaceBetweenTab,
        gapStylesMobile: homeSpaceBetweenMob,
    } = generateGapStyle({
        controlName: HOME_ICON_SPACE,
        attributes,
    });

    //current
    const {
        typoStylesDesktop: currentTypoDesk,
        typoStylesTab: currentTypoTab,
        typoStylesMobile: currentTypoMob,
    } = generateTypographyStyles({
        prefixConstant: CURRENT_TYPOGRAPHY,
        attributes,
    });
    const {
        dimensionStylesDesktop: currentPaddingDesk,
        dimensionStylesTab: currentPaddingTab,
        dimensionStylesMobile: currentPaddingMob,
    } = generateDimensionStyle({
        controlName: CURRENT_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: currentBGDesk,
        backgroundStylesTab: currentBGTab,
        backgroundStylesMobile: currentBGMob,
    } = generateNormalBGControlStyles({
        controlName: CURRENT_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: currentBorderDesk,
        tabBorderStyle: currentBorderTab,
        mobBorderStyle: currentBorderMob,
    } = generateBorderStyle({
        controlName: CURRENT_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: currentBorderRadiusDesk,
        dimensionStylesTab: currentBorderRadiusTab,
        dimensionStylesMobile: currentBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CURRENT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: currentBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CURRENT_SHADOW,
    });

    const {
        dimensionStylesDesktop: currentHoverPaddingDesk,
        dimensionStylesTab: currentHoverPaddingTab,
        dimensionStylesMobile: currentHoverPaddingMob,
    } = generateDimensionStyle({
        controlName: CURRENT_HOVER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: currentHoverBGDesk,
        backgroundStylesTab: currentHoverBGTab,
        backgroundStylesMobile: currentHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: CURRENT_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: currentHoverBorderRadiusDesk,
        dimensionStylesTab: currentHoverBorderRadiusTab,
        dimensionStylesMobile: currentHoverBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CURRENT_HOVER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: currentHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CURRENT_HOVER_SHADOW,
    });

    //separator
    const {
        desktopRangeStyle: sepSizeDesk,
        tabRangeStyle: sepSizeTab,
        mobRangeStyle: sepSizeMob,
    } = generateResRangeStyle({
        controlName: SEP_SIZE,
        property: 'font-size',
        attributes,
    });
    const {
        dimensionStylesDesktop: sepPaddingDesk,
        dimensionStylesTab: sepPaddingTab,
        dimensionStylesMobile: sepPaddingMob,
    } = generateDimensionStyle({
        controlName: SEP_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        dimensionStylesDesktop: sepMarginDesk,
        dimensionStylesTab: sepMarginTab,
        dimensionStylesMobile: sepMarginMob,
    } = generateDimensionStyle({
        controlName: SEP_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        backgroundStylesDesktop: sepBGDesk,
        backgroundStylesTab: sepBGTab,
        backgroundStylesMobile: sepBGMob,
    } = generateNormalBGControlStyles({
        controlName: SEP_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        desktopBorderStyle: sepBorderDesk,
        tabBorderStyle: sepBorderTab,
        mobBorderStyle: sepBorderMob,
    } = generateBorderStyle({
        controlName: SEP_BORDER,
        attributes,
    });
    const {
        dimensionStylesDesktop: sepBorderRadiusDesk,
        dimensionStylesTab: sepBorderRadiusTab,
        dimensionStylesMobile: sepBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SEP_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: sepBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: SEP_SHADOW,
    });

    const {
        dimensionStylesDesktop: sepHoverPaddingDesk,
        dimensionStylesTab: sepHoverPaddingTab,
        dimensionStylesMobile: sepHoverPaddingMob,
    } = generateDimensionStyle({
        controlName: SEP_HOVER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    const {
        backgroundStylesDesktop: sepHoverBGDesk,
        backgroundStylesTab: sepHoverBGTab,
        backgroundStylesMobile: sepHoverBGMob,
    } = generateNormalBGControlStyles({
        controlName: SEP_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });
    const {
        dimensionStylesDesktop: sepHoverBorderRadiusDesk,
        dimensionStylesTab: sepHoverBorderRadiusTab,
        dimensionStylesMobile: sepHoverBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: SEP_HOVER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    const { boxShadowStyle: sepHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: SEP_HOVER_SHADOW,
    });

    const desktopAllStyle = `
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap{
       ${rowAlignDesk}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-items,
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item{
      ${spaceBetweenDesk}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name{
      ${itemTypoDesk}
      ${itemPaddingDesk}
      ${itemBGDesk}
      ${itemBorderDesk}
      ${itemBorderRadiusDesk}
      ${itemBoxShadow}
      ${itemColor ? `color:${itemColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name:hover{
      ${itemHoverPaddingDesk}
      ${itemHoverBGDesk}
      ${itemHoverBorderRadiusDesk}
      ${itemHoverBoxShadow}
      ${itemHoverColor ? `color:${itemHoverColor};` : ''}
      ${itemHoverBColor ? `border-color:${itemHoverBColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name{
      ${homeTypoDesk}
      ${homePaddingDesk}
      ${homeBGDesk}
      ${homeBorderDesk}
      ${homeBorderRadiusDesk}
      ${homeBoxShadow}
      ${homeSpaceBetweenDesk}
      ${homeColor ? `color:${homeColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name:hover{
      ${homeHoverPaddingDesk}
      ${homeHoverBGDesk}
      ${homeHoverBorderRadiusDesk}
      ${homeHoverBoxShadow}
      ${homeHoverColor ? `color:${homeHoverColor};` : ''}
      ${homeHoverBColor ? `border-color:${homeHoverBColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name svg{
      ${homeIconSizeDesk}
      ${homeIconColor ? `fill:${homeIconColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name:hover svg{
      ${homeIconHoverColor ? `fill:${homeIconHoverColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name{
      ${currentTypoDesk}
      ${currentPaddingDesk}
      ${currentBGDesk}
      ${currentBorderDesk}
      ${currentBorderRadiusDesk}
      ${currentBoxShadow}
      ${currentColor ? `color:${currentColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name:hover{
      ${currentHoverPaddingDesk}
      ${currentHoverBGDesk}
      ${currentHoverBorderRadiusDesk}
      ${currentHoverBoxShadow}
      ${currentHoverColor ? `color:${currentHoverColor};` : ''}
      ${currentHoverBColor ? `border-color:${currentHoverBColor};` : ''}
    }
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator{
      ${sepPaddingDesk}
      ${sepMarginDesk}
      ${sepBGDesk}
      ${sepBorderDesk}
      ${sepBorderRadiusDesk}
      ${sepBoxShadow}
      ${sepColor ? `color:${sepColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator:hover{
      ${sepHoverPaddingDesk}
      ${sepHoverBGDesk}
      ${sepHoverBorderRadiusDesk}
      ${sepHoverBoxShadow}
      ${sepHoverColor ? `color:${sepHoverColor};` : ''}
      ${sepHoverBColor ? `border-color:${sepHoverBColor};` : ''}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator svg{
      ${sepSizeDesk}
    }
  `;

    const tabletAllStyle = `
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap{
       ${rowAlignTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-items,
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item{
      ${spaceBetweenTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name{
      ${itemTypoTab}
      ${itemPaddingTab}
      ${itemBGTab}
      ${itemBorderTab}
      ${itemBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name:hover{
      ${itemHoverPaddingTab}
      ${itemHoverBGTab}
      ${itemHoverBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name{
      ${homeTypoTab}
      ${homePaddingTab}
      ${homeBGTab}
      ${homeBorderTab}
      ${homeBorderRadiusTab}
      ${homeSpaceBetweenTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name:hover{
      ${homeHoverPaddingTab}
      ${homeHoverBGTab}
      ${homeHoverBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name svg{
      ${homeIconSizeTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name{
      ${currentTypoTab}
      ${currentPaddingTab}
      ${currentBGTab}
      ${currentBorderTab}
      ${currentBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name:hover{
      ${currentHoverPaddingTab}
      ${currentHoverBGTab}
      ${currentHoverBorderRadiusTab}
    }
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator{
      ${sepPaddingTab}
      ${sepMarginTab}
      ${sepBGTab}
      ${sepBorderTab}
      ${sepBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator:hover{
      ${sepHoverPaddingTab}
      ${sepHoverBGTab}
      ${sepHoverBorderRadiusTab}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator svg{
      ${sepSizeTab}
    }
  `;
    const mobileAllStyle = `
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap{
       ${rowAlignMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-items,
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item{
      ${spaceBetweenMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name{
      ${itemTypoMob}
      ${itemPaddingMob}
      ${itemBGMob}
      ${itemBorderMob}
      ${itemBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .name:hover{
      ${itemHoverPaddingMob}
      ${itemHoverBGMob}
      ${itemHoverBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name{
      ${homeTypoMob}
      ${homePaddingMob}
      ${homeBGMob}
      ${homeBorderMob}
      ${homeBorderRadiusMob}
      ${homeSpaceBetweenMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name:hover{
      ${homeHoverPaddingMob}
      ${homeHoverBGMob}
      ${homeHoverBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.home .name svg{
      ${homeIconSizeMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name{
      ${currentTypoMob}
      ${currentPaddingMob}
      ${currentBGMob}
      ${currentBorderMob}
      ${currentBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item.current .name:hover{
      ${currentHoverPaddingMob}
      ${currentHoverBGMob}
      ${currentHoverBorderRadiusMob}
    }
     .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator{
      ${sepPaddingMob}
      ${sepMarginMob}
      ${sepBGMob}
      ${sepBorderMob}
      ${sepBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator:hover{
      ${sepHoverPaddingMob}
      ${sepHoverBGMob}
      ${sepHoverBorderRadiusMob}
    }
    .${uniqueId}.zolo-block.zolo-breadcrumbs-wrap .breadcrumb-item .separator svg{
      ${sepSizeMob}
    }
  `;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.breadcrumbs.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.breadcrumbs.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.breadcrumbs.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}

export default Style;
