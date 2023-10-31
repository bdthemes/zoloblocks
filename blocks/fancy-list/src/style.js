import { __ } from '@wordpress/i18n';
const {
    generateTypographyStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
} = window.zoloModule;

import {
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
    TITLE_SPACING,
    DESC_SPACING,
    ICON_BG,
    ICON_HBG,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY, MEDIA_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, titleColor, titleHColor, headingTag, dscColor, desHcolor, iconColor, iconHColor, iconHBColor } = attributes;

    // icon
    const {
        desktopRangeStyle: DeskIconWidth,
        tabRangeStyle: TabIconWidth,
        mobRangeStyle: mobIconWidth,
    } = generateResRangeStyle({
        controlName: ICON_WIDTH,
        property: 'font-size',
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
        controlName: IMAGE_SIZE,
        property: 'width',
        attributes,
        noUnits: false,
    });

    const {
        desktopRangeStyle: deskImageHeight,
        tabRangeStyle: tabImageHeight,
        mobRangeStyle: mobImageHeight,
    } = generateResRangeStyle({
        controlName: IMAGE_SIZE,
        property: 'height',
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
        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon i {
            ${DeskIconWidth}
             ${deskiconpadding} 
             ${iconNoramlBGStyle}
             ${DesktopIconBorder}
             ${deskiconRadius}
             ${iconColor ? `color:${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image img, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
            ${deskImageWidth}
            ${deskImageHeight}
            ${DesktopimageBorder}
            ${deskImageRadius}
            ${deskImagepadding}
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

        .${uniqueId}.wp-block-zolo-fancy-list:hover .zb-fancy-list-title {
            ${titleHColor ? `color:${titleHColor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-fancy-list:hover .zb-fancy-list-text {
            ${desHcolor ? `color:${desHcolor};` : ''}
        }
        .${uniqueId}.wp-block-zolo-fancy-list:hover .zb-fancy-icon i {
            ${iconHColor ? `color:${iconHColor};` : ''}
            ${iconHoverBGStyle}
            ${iconHBColor ? `border-color:${iconHBColor};` : ''}
        }
	`;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon i {
            ${TabIconWidth}
            ${tabiconpadding} 
            ${iconNormalTabBGStyle}
            ${TabIconBorder}
            ${tabiconRadius}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image img, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
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

        .${uniqueId}.wp-block-zolo-fancy-list:hover .zb-fancy-icon i {
            ${iconHoverTabBGStyle}
        }
	`;

    const mobileAllStyle = `	
        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-icon i {
            ${mobIconWidth}
            ${mobiconpadding} 
            ${iconNormalMobBGStyle}
            ${MobIconBorder}
            ${mobiconRadius}
        }

        .${uniqueId}.wp-block-zolo-fancy-list:hover .zb-fancy-icon i {
            ${iconHoverMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-image img, .${uniqueId}.wp-block-zolo-fancy-list .zb-fancy-list-number {
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
