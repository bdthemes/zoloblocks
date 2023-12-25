import { __ } from '@wordpress/i18n';
const {
    generateTypographyStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateResCounterStyle,
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
    COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, titleColor, titleHColor, dscColor, desHcolor, iconColor, iconHColor, iconHBColor, mediaTextColor, mediaTextBgColor } =
        attributes;

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

    // Grid Columns
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 2,
            tabRange: 1,
            mobRange: 1,
        },
    });

    const {
        desktopRangeStyle: deskColumnsGap,
        tabRangeStyle: tabColumnsGap,
        mobRangeStyle: mobColumnsGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-column-gap',
        attributes,
    });

    const {
        desktopRangeStyle: deskRowsGap,
        tabRangeStyle: tabRowsGap,
        mobRangeStyle: mobRowsGap,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'grid-row-gap',
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
        .${uniqueId}.wp-block-zolo-fancy-list .zolo-fancy-list-container {
            grid-template-columns: repeat(${deskColumns}, 1fr);
            ${deskColumnsGap}
            ${deskRowsGap}
        }
        .${uniqueId} .wp-block-zolo-fancy-list-child {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon {
            ${deskiconpadding} 
            ${iconNoramlBGStyle}
            ${DesktopIconBorder}
            ${deskiconRadius}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon svg {
            ${iconColor ? `fill:${iconColor};` : ''}
            ${DeskIconWidth}
            ${DeskIconHeight}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-content {
            ${deskGap}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${deskImageWidth}
            ${deskImageHeight}
            ${DesktopimageBorder}
            ${deskImageRadius}
            ${deskImagepadding}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${mediaTextColor ? `color:${mediaTextColor};` : ''}
            ${mediaTextBgColor ? `background-color:${mediaTextBgColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${deskMediaTypo}
        }

        .${uniqueId} .zb-fancy-list-title{
            ${desktitletypo}
            ${titleDeskSpacing}
            ${titleColor ? `color:${titleColor};` : ''}
        }

        .${uniqueId} .zb-fancy-list-text{
            ${deskdesctypo}
            ${descDeskSpacing}
            ${dscColor ? `color:${dscColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-list-title {
            ${titleHColor ? `color:${titleHColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-list-text {
            ${desHcolor ? `color:${desHcolor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-icon {
            ${iconHoverBGStyle}
            ${iconHBColor ? `border-color:${iconHBColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-icon svg{
            ${iconHColor ? `fill:${iconHColor};` : ''}
        }
	`;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-fancy-list .zolo-fancy-list-container {
            grid-template-columns: repeat(${tabColumns}, 1fr);
            ${tabColumnsGap}
            ${tabRowsGap}
        }
        .${uniqueId}.wp-block-zolo-fancy-list  {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
			${itemBoxShadow}
		}

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon {
            ${tabiconpadding} 
            ${iconNormalTabBGStyle}
            ${TabIconBorder}
            ${tabiconRadius}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon svg {
            ${TabIconWidth}
            ${TabIconHeight}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-content {
            ${tabGap}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${tabImageWidth}
            ${tabImageHeight}
            ${TabImageBorder}
            ${tabImageRadius}
            ${tabImagepadding}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${tabMediaTypo}
        }

      .${uniqueId} .zb-fancy-list-title{
            ${tabtitletypo}
            ${titleTabSpacing}
        }

        .${uniqueId} .zb-fancy-list-text{
            ${tabdesctypo}
            ${descTabSpacing}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-icon{
            ${iconHoverTabBGStyle}
        }
	`;

    const mobileAllStyle = `	
        .${uniqueId}.wp-block-zolo-fancy-list .zolo-fancy-list-container {
            grid-template-columns: repeat(${mobColumns}, 1fr);
            ${mobColumnsGap}
            ${mobRowsGap}
        }
         .${uniqueId}.wp-block-zolo-fancy-list {
            ${itemMobBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
			${itemBoxShadow}
		}
        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon {
            ${mobiconpadding} 
            ${iconNormalMobBGStyle}
            ${MobIconBorder}
            ${mobiconRadius}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon svg {
            ${mobIconWidth}
            ${mobIconHeight}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-content {
            ${mobGap}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .wp-block-zolo-fancy-list-child:hover .zb-fancy-icon{
            ${iconHoverMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${mobImageWidth}
            ${mobImageHeight}
            ${MobImageBorder}
            ${mobImageRadius}
            ${mobImagepadding}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${mobMediaTypo}
        }

        .${uniqueId} .zb-fancy-list-title{
            ${mobtitletypo}
            ${titleMobSpacing}
        }

        .${uniqueId} .zb-fancy-list-text{
            ${mobdesctypo}
            ${descMobSpacing}
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
