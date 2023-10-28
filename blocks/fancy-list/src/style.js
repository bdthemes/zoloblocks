// /**
//  * WordPress dependencies
//  */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

// /**
//  * Internal depencencies
//  */
const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    DisplayIcon,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    ICON_WIDTH,
    ICON_BORDER,
    ICON_PADDING,
    ICON_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
} from './constants';

import { TITLE_TYPOGRAPHY, TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, preset, iconbgColor, iconColor, titleColor, titleHColor, headingTag, dscTag, dscColor, desHcolor } = attributes;

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

    // title Typography
    const {
        typoStylesDesktop: desktitletypo,
        typoStylesTab: tabtitletypo,
        typoStylesMobile: mobtitletypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        defaultFontSize: 14,
        attributes,
    });

    // Description Typography
    const {
        typoStylesDesktop: deskdesctypo,
        typoStylesTab: tabdesctypo,
        typoStylesMobile: mobdesctypo,
    } = generateTypographyStyles({
        prefixConstant: TEXT_TYPOGRAPHY,
        defaultFontSize: 14,
        attributes,
    });
    //icon padding
    const {
        desktopRangeStyle: deskiconpadding,
        tabRangeStyle: tabiconpadding,
        mobRangeStyle: mobiconpadding,
    } = generateResRangeStyle({
        controlName: ICON_PADDING,
        property: 'padding',
        attributes,
        noUnits: false,
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

    // image width
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
    //Image Height
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
    //image border
    const {
        desktopBorderStyle: DesktopimageBorder,
        tabBorderStyle: TabImageBorder,
        mobBorderStyle: MobImageBorder,
    } = generateBorderStyle({ controlName: IMAGE_BORDER, attributes });

    //image border radius

    const {
        dimensionStylesDesktop: deskImageRadius,
        dimensionStylesTab: tabImageRadius,
        dimensionStylesMobile: mobImageRadius,
    } = generateDimensionStyle({
        controlName: IMAGE_BORDERRADIUS,
        styleFor: 'border-radius',
        attributes,
    });
    //image padding
    const {
        desktopRangeStyle: deskImagepadding,
        tabRangeStyle: tabImagepadding,
        mobRangeStyle: mobImagepadding,
    } = generateResRangeStyle({
        controlName: IMAGE_PADDING,
        property: 'padding',
        attributes,
        noUnits: false,
    });

    //  All Style Combination
    const desktopAllStyle = `
       
        .${uniqueId} .zb-container .zb-fancy-icon span, .wp-block-zolo-fancy-list .${uniqueId} .zb-container .zb-fancy-icon i {
            ${DeskIconWidth};
            color:${iconColor};
             ${deskiconpadding};   
         }
        .${uniqueId} .zb-container .zb-fancy-icon {
            ${DesktopIconBorder};
            background-color:${iconbgColor};
            ${deskiconRadius}
        }

        .${uniqueId} .zb-container .zb-fancy-list-image img {
            ${deskImageWidth};
            ${deskImageHeight};
            ${DesktopimageBorder};
            ${deskImageRadius};
            ${deskImagepadding};
           
        }
      
        .${uniqueId} .zb-fancy-list-title{
            ${desktitletypo};
            color:${titleColor}
        }
        .${uniqueId} .zb-fancy-list-title:hover{
           color:${titleHColor}
        }
        .${uniqueId} .zb-fancy-list-text{
            ${deskdesctypo};
            color:${dscColor} 
        }
       
      .${uniqueId} .zb-fancy-list-text:hover{
           color:${desHcolor} 
        }
	`;

    const tabletAllStyle = `
        .${uniqueId} .zb-container .zb-fancy-icon span, .wp-block-zolo-fancy-list .${uniqueId} .zb-container .zb-fancy-icon i {
            ${TabIconWidth};
            color:${iconColor};
            ${tabiconpadding};   
        }
       .${uniqueId} .zb-container .zb-fancy-icon {
            ${TabIconBorder};
            background-color:${iconbgColor};
            ${tabiconRadius}
        }

        .${uniqueId} .zb-container .zb-fancy-list-image img {
            ${tabImageWidth};
            ${tabImageHeight};
            ${TabImageBorder};
            ${tabImageRadius};
            ${tabImagepadding}
        }

      .${uniqueId} .zb-fancy-list-title{
            ${tabtitletypo};
            color:${titleColor}
        }
        .${uniqueId} .zb-fancy-list-title:hover{
           color:${titleHColor}
        }
        .${uniqueId} .zb-fancy-list-text{
            ${tabdesctypo};
            color:${dscColor} 
        }
        .${uniqueId} .zb-fancy-list-text:hover{
           color:${desHcolor} 
        }
	`;

    const mobileAllStyle = `	
        .${uniqueId} .zb-container .zb-fancy-icon span, .wp-block-zolo-fancy-list .${uniqueId} .zb-container .zb-fancy-icon i {
            ${mobIconWidth};
            color:${iconColor};
            ${mobiconpadding};   
        }
        .${uniqueId} .zb-container .zb-fancy-icon {
            ${MobIconBorder};
            background-color:${iconbgColor};
            ${mobiconRadius}
        }
        .${uniqueId} .zb-container .zb-fancy-list-image img {
            ${mobImageWidth};
            ${mobImageHeight};
            ${MobImageBorder};
            ${mobImageRadius};
            ${mobImagepadding}
        }

        .${uniqueId} .zb-fancy-list-title{
            ${mobtitletypo};
            color:${titleColor}
        }
        .${uniqueId} .zb-fancy-list-title:hover{
           color:${titleHColor}
        }
        .${uniqueId} .zb-fancy-list-text{
            ${mobdesctypo};
            color:${dscColor} 
        }
        .${uniqueId} .zb-fancy-list-text:hover{
           color:${desHcolor} 
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
