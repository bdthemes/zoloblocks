import { __ } from '@wordpress/i18n';
const {
    generateTypographyStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
} = window.zoloModule;

import {
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
    TITLE_SPACING,
    DESC_SPACING,
    ICON_BG,
    ICON_HBG,
    GAP,
    ITEM_BG,
    ITEM_BG_HOVER,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        titleColor,
        titleHColor,
        dscColor,
        desHcolor,
        iconColor,
        iconHColor,
        iconHBColor,
        mediaTextColor,
        mediaTextBgColor,
        itemBorderHoverColor,
    } = attributes;

    // item
    const {
        backgroundStylesDesktop: itemDeskBg,
        backgroundStylesTab: itemTabBg,
        backgroundStylesMobile: itemMobBg,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: itemDeskBgHover,
        backgroundStylesTab: itemTabBgHover,
        backgroundStylesMobile: itemMobBgHover,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG_HOVER,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: itemBorderDeskStyle,
        tabBorderStyle: itemBorderTabStyle,
        mobBorderStyle: itemBorderMobStyle,
    } = generateBorderStyle({
        controlName: ITEM_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: itemDeskBorderRadius,
        dimensionStylesTab: itemTabBorderRadius,
        dimensionStylesMobile: itemMobBorderRadius,
    } = generateDimensionStyle({
        controlName: ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: itemDeskPadding,
        dimensionStylesTab: itemTabPadding,
        dimensionStylesMobile: itemMobPadding,
    } = generateDimensionStyle({
        controlName: ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: itemDeskMargin,
        dimensionStylesTab: itemTabMargin,
        dimensionStylesMobile: itemMobMargin,
    } = generateDimensionStyle({
        controlName: ITEM_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // icon
    const {
        desktopRangeStyle: DeskIconWidth,
        tabRangeStyle: TabIconWidth,
        mobRangeStyle: mobIconWidth,
    } = generateResRangeStyle({
        controlName: ICON_WIDTH,
        property: 'width',
        attributes,
        noUnits: false,
    });

    const {
        desktopRangeStyle: DeskIconHeight,
        tabRangeStyle: TabIconHeight,
        mobRangeStyle: mobIconHeight,
    } = generateResRangeStyle({
        controlName: ICON_WIDTH,
        property: 'height',
        attributes,
        noUnits: false,
    });

    const {
        desktopBorderStyle: DesktopIconBorder,
        tabBorderStyle: TabIconBorder,
        mobBorderStyle: MobIconBorder,
    } = generateBorderStyle({ controlName: ICON_BORDER, attributes });

    const {
        dimensionStylesDesktop: deskiconpadding,
        dimensionStylesTab: tabiconpadding,
        dimensionStylesMobile: mobiconpadding,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: deskiconRadius,
        dimensionStylesTab: tabiconRadius,
        dimensionStylesMobile: mobiconRadius,
    } = generateDimensionStyle({
        controlName: ICON_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: iconNoramlBGStyle,
        backgroundStylesTab: iconNormalTabBGStyle,
        backgroundStylesMobile: iconNormalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: iconHoverBGStyle,
        backgroundStylesTab: iconHoverTabBGStyle,
        backgroundStylesMobile: iconHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ICON_HBG,
        attributes,
        noMainBGImg: false,
    });

    // title Typography
    const {
        typoStylesDesktop: desktitletypo,
        typoStylesTab: tabtitletypo,
        typoStylesMobile: mobtitletypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleDeskSpacing,
        dimensionStylesTab: titleTabSpacing,
        dimensionStylesMobile: titleMobSpacing,
    } = generateDimensionStyle({
        controlName: TITLE_SPACING,
        styleFor: 'margin',
        attributes,
    });

    // Description Typography
    const {
        typoStylesDesktop: deskdesctypo,
        typoStylesTab: tabdesctypo,
        typoStylesMobile: mobdesctypo,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: descDeskSpacing,
        dimensionStylesTab: descTabSpacing,
        dimensionStylesMobile: descMobSpacing,
    } = generateDimensionStyle({
        controlName: DESC_SPACING,
        styleFor: 'margin',
        attributes,
    });

    // Media
    const {
        typoStylesDesktop: deskMediaTypo,
        typoStylesTab: tabMediaTypo,
        typoStylesMobile: mobMediaTypo,
    } = generateTypographyStyles({
        prefixConstant: MEDIA_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopRangeStyle: deskImageWidth,
        tabRangeStyle: tabImageWidth,
        mobRangeStyle: mobImageWidth,
    } = generateResRangeStyle({
        controlName: IMAGE_WIDTH,
        property: 'width',
        attributes,
        noUnits: false,
    });

    const {
        desktopRangeStyle: deskImageHeight,
        tabRangeStyle: tabImageHeight,
        mobRangeStyle: mobImageHeight,
    } = generateResRangeStyle({
        controlName: IMAGE_HEIGHT,
        property: 'height',
        attributes,
        noUnits: false,
    });

    const {
        desktopRangeStyle: deskGap,
        tabRangeStyle: tabGap,
        mobRangeStyle: mobGap,
    } = generateResRangeStyle({
        controlName: GAP,
        property: 'gap',
        attributes,
        noUnits: false,
    });

    const {
        desktopBorderStyle: DesktopimageBorder,
        tabBorderStyle: TabImageBorder,
        mobBorderStyle: MobImageBorder,
    } = generateBorderStyle({ controlName: IMAGE_BORDER, attributes });

    const {
        dimensionStylesDesktop: deskImageRadius,
        dimensionStylesTab: tabImageRadius,
        dimensionStylesMobile: mobImageRadius,
    } = generateDimensionStyle({
        controlName: IMAGE_BORDERRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: deskImagepadding,
        dimensionStylesTab: tabImagepadding,
        dimensionStylesMobile: mobImagepadding,
    } = generateDimensionStyle({
        controlName: IMAGE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    //  All Style Combination
    const desktopAllStyle = `
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon {
             ${deskiconpadding} 
             ${iconNoramlBGStyle}
             ${DesktopIconBorder}
             ${deskiconRadius}
        }
         .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}
         .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover {
            ${itemDeskBgHover}
            ${itemBorderHoverColor ? `border-color:${itemBorderHoverColor};` : ''}
		}

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon svg {
            ${DeskIconWidth}
            ${DeskIconHeight}
             ${iconColor ? `fill:${iconColor};` : ''}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-content {
            ${deskGap}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-image, .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${deskImageWidth}
            ${deskImageHeight}
            ${DesktopimageBorder}
            ${deskImageRadius}
            ${deskImagepadding}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${mediaTextColor ? `color:${mediaTextColor};` : ''}
            ${mediaTextBgColor ? `background-color:${mediaTextBgColor};` : ''}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${deskMediaTypo}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-title{
            ${desktitletypo}
            ${titleDeskSpacing}
            ${titleColor ? `color:${titleColor};` : ''}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-text{
            ${deskdesctypo}
            ${descDeskSpacing}
            ${dscColor ? `color:${dscColor};` : ''}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-list-title {
            ${titleHColor ? `color:${titleHColor};` : ''}
        }
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-list-text {
            ${desHcolor ? `color:${desHcolor};` : ''}
        }
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-icon {
            ${iconHoverBGStyle}
            ${iconHBColor ? `border-color:${iconHBColor};` : ''}
        }
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-icon svg {
            ${iconHColor ? `fill:${iconHColor};` : ''}
        }
	`;

    const tabletAllStyle = `
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon i {
            ${tabiconpadding} 
            ${iconNormalTabBGStyle}
            ${TabIconBorder}
            ${tabiconRadius}
        }
         .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child  {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
			${itemBoxShadow}
		}
         .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover {
            ${itemTabBgHover}
		}

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon svg {
            ${TabIconWidth}
            ${TabIconHeight}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-content {
            ${tabGap}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-image, .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${tabImageWidth}
            ${tabImageHeight}
            ${TabImageBorder}
            ${tabImageRadius}
            ${tabImagepadding}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${tabMediaTypo}
        }

      .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-title{
            ${tabtitletypo}
            ${titleTabSpacing}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-text{
            ${tabdesctypo}
            ${descTabSpacing}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-icon {
            ${iconHoverTabBGStyle}
        }
	`;

    const mobileAllStyle = `	
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon {
            ${mobiconpadding} 
            ${iconNormalMobBGStyle}
            ${MobIconBorder}
            ${mobiconRadius}
        }
          .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child {
            ${itemMobBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
			${itemBoxShadow}
		}
        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover {
            ${itemMobBgHover}
		}

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-icon svg {
            ${mobIconWidth}
            ${mobIconHeight}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-content {
            ${mobGap}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child:hover .zb-fancy-icon {
            ${iconHoverMobBGStyle}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-image, .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${mobImageWidth}
            ${mobImageHeight}
            ${MobImageBorder}
            ${mobImageRadius}
            ${mobImagepadding}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-number {
            ${mobMediaTypo}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-title{
            ${mobtitletypo}
            ${titleMobSpacing}
        }

        .wp-block-zolo-fancy-list .zolo-fancy-list-container .${uniqueId}.zolo-block.wp-block-zolo-fancy-list-child .zb-fancy-list-text{
            ${mobdesctypo}
            ${descMobSpacing}
        }
 	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.fancyListChild.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.fancyListChild.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.fancyListChild.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
