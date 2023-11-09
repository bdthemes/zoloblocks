/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    CONTAINER_HEIGHT,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_MARGIN,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BORDER,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        nameColor,
        nameHoverColor,
        labelColor,
        labelHoverColor,
        containerHoverBorderColor,
        contentHorizontalPosition,
        contentVerticalPosition,
    } = attributes;

    // Content Align
    const {
        desktopAlignStyle: brandContentDeskAlignStyle,
        tabAlignStyle: brandContentTabAlignStyle,
        mobAlignStyle: brandContentMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });
    const {
        dimensionStylesDesktop: contentDeskPadding,
        dimensionStylesTab: contentTabPadding,
        dimensionStylesMobile: contentMobPadding,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Container
    const {
        desktopRangeStyle: deskContainerHeight,
        tabRangeStyle: tabContainerHeight,
        mobRangeStyle: mobContainerHeight,
    } = generateResRangeStyle({
        controlName: CONTAINER_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: containerBorderDesk,
        tabBorderStyle: containerBorderTab,
        mobBorderStyle: containerBorderMob,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerDeskBorderRadius,
        dimensionStylesTab: containerTabBorderRadius,
        dimensionStylesMobile: containerMobBorderRadius,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: brandPhotoDeskBGStyle,
        backgroundStylesTab: brandPhotoTabBGStyle,
        backgroundStylesMobile: brandPhotoMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BRAND_PHOTO_BG,
        attributes,
        noMainBGImg: false,
    });

    // Container Hover
    const {
        backgroundStylesDesktop: containerHoverDeskBGStyle,
        backgroundStylesTab: containerHoverTabBGStyle,
        backgroundStylesMobile: containerHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_HOVER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    // Container Hover Box Shadow
    const { boxShadowStyle: brandContainerHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
    });

    // Photo
    const {
        desktopRangeStyle: deskImageWidth,
        tabRangeStyle: tabImageWidth,
        mobRangeStyle: mobImageWidth,
    } = generateResRangeStyle({
        controlName: IMAGE_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopBorderStyle: photoBorderDesktop,
        tabBorderStyle: photoBorderTab,
        mobBorderStyle: photoBorderMob,
    } = generateBorderStyle({
        controlName: BRAND_PHOTO_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: brandPhotoBorderRadiusDesk,
        dimensionStylesTab: brandPhotoBorderRadiusTab,
        dimensionStylesMobile: brandPhotoBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // Photo Box Shadow
    const { boxShadowStyle: brandPhotoBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BRAND_PHOTO_BOX_SHADOW,
    });

    // Brand Photo Padding
    const {
        dimensionStylesDesktop: brandPhotoPaddingDesk,
        dimensionStylesTab: brandPhotoPaddingTab,
        dimensionStylesMobile: brandPhotoPaddingMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Brand Photo Margin
    const {
        dimensionStylesDesktop: brandPhotoMaringDesk,
        dimensionStylesTab: brandPhotoMarginTab,
        dimensionStylesMobile: brandPhotoMarginMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Typography
    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    // Link Typography
    const {
        typoStylesDesktop: linkTypoDesk,
        typoStylesTab: linkTypoTab,
        typoStylesMobile: linkTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LINK_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    // Title Margin
    const {
        dimensionStylesDesktop: titleMarginDesk,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Link Margin
    const {
        dimensionStylesDesktop: linkMarginDesk,
        dimensionStylesTab: linkMarginTab,
        dimensionStylesMobile: linkMarginMob,
    } = generateDimensionStyle({
        controlName: LINK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Text Shadow
    const { textShadowStyle: titleTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    // Title Text Stroke
    const {
        desktopTextStrokeStyle: titleTextStrokeDesk,
        tabTextStrokeStyle: titleTextStrokeTab,
        mobTextStrokeStyle: titleTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    // Link Text Shadow
    const { textShadowStyle: linkTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: LINK_TEXT_SHADOW,
    });

    // Link Text Stroke
    const {
        desktopTextStrokeStyle: linkTextStrokeDesk,
        tabTextStrokeStyle: linkTextStrokeTab,
        mobTextStrokeStyle: linkTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: LINK_TEXT_STROKE,
    });

    /**
     * All Style Combination
     */

    const desktopAllStyle = `
		.${uniqueId}.zb-brand-item{
            ${deskContainerHeight}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerBorderDesk}
		}
		.${uniqueId}.zb-brand-item:hover{
			${brandContainerHoverBoxShadow}
            ${containerHoverBorderColor ? `border-color:${containerHoverBorderColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingDesk}
			${deskImageWidth}
			${brandPhotoBorderRadiusDesk}
			${brandPhotoBoxShadow}
			${brandPhotoDeskBGStyle}
			${brandPhotoMaringDesk}
			${photoBorderDesktop}
		}
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentDeskAlignStyle}
        }
		.${uniqueId} .zb-brand-content{
			${containerHoverDeskBGStyle}
            ${contentHorizontalPosition ? `align-items:${contentHorizontalPosition};` : ''}
            ${contentVerticalPosition ? `justify-content:${contentVerticalPosition};` : ''}
            ${contentDeskPadding}
		}
		.${uniqueId} .zb-brand-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
			${nameColor ? `color:${nameColor};` : ''}
		}
        .${uniqueId} .zb-brand-title.has-link:hover{
            ${nameHoverColor ? `color:${nameHoverColor};` : ''}
        }

		.${uniqueId}.zb-brand-item .zb-brand-title-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
            ${labelColor ? `color:${labelColor};` : ''}
		}
		.${uniqueId}.zb-brand-item .zb-brand-title-link.has-link:hover{
			color:${labelHoverColor};
		}
  	`;

    const tabletAllStyle = `
        .${uniqueId}.zb-brand-item{
            ${tabContainerHeight}
            ${containerTabBorderRadius}
            ${containerTabBGStyle}
            ${containerBorderTab}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingTab}
            ${tabImageWidth}
            ${brandPhotoBorderRadiusTab}
            ${brandPhotoTabBGStyle}
            ${brandPhotoMarginTab}
            ${photoBorderTab}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentTabAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${containerHoverTabBGStyle}
            ${contentTabPadding}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${titleTextStrokeTab}
        }
        .${uniqueId} .zb-brand-link{
            ${linkTypoTab}
            ${linkMarginTab}
            ${linkTextStrokeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.zb-brand-item{
            ${mobContainerHeight}
            ${containerMobBorderRadius}
            ${containerMobBGStyle}
            ${containerBorderMob}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingMob}
            ${mobImageWidth}
            ${brandPhotoBorderRadiusMob}
            ${brandPhotoMobBGStyle}
            ${brandPhotoMarginMob}
            ${photoBorderMob}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentMobAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${containerHoverMobBGStyle}
            ${contentMobPadding}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoMob}
            ${titleMarginMob}
            ${titleTextStrokeMob}
        }
        .${uniqueId} .zb-brand-link{
            ${linkTypoMob}
            ${linkMarginMob}
            ${linkTextStrokeMob}
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
