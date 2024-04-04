/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal depencencies
 */
const {
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
    CONTAINER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTENT_PADDING,
    CONTENT_BG,
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
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, nameColor, nameHoverColor, labelColor, labelHoverColor } = attributes;

    const {
        dimensionStylesDesktop: contentDeskPadding,
        dimensionStylesTab: contentTabPadding,
        dimensionStylesMobile: contentMobPadding,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: contentDeskBGStyle,
        backgroundStylesTab: contentTabBGStyle,
        backgroundStylesMobile: contentMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: false,
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
        dimensionStylesDesktop: containerBorderRadiusDesk,
        dimensionStylesTab: containerBorderRadiusTab,
        dimensionStylesMobile: containerBorderRadiusMob,
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
        dimensionStylesDesktop: containerPaddingDesk,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BG,
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
        defaultFontSize: '',
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
		.${uniqueId}.wp-block-zolo-brand-child.zb-brand-item{
            ${deskContainerHeight}
            ${containerBorderDesk}
            ${containerBorderRadiusDesk}
            ${containerBoxShadow}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerDeskBGStyle}
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

		.${uniqueId}.wp-block-zolo-brand-child .zb-brand-content{
			${contentDeskBGStyle}
            ${contentDeskPadding}
		}
		.${uniqueId}.wp-block-zolo-brand-child .zb-brand-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
			${nameColor ? `color:${nameColor};` : ''}
		}
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-title.has-link:hover{
            ${nameHoverColor ? `color:${nameHoverColor};` : ''}
        }

		.${uniqueId}.wp-block-zolo-brand-child.zb-brand-item .zb-brand-title-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
            ${labelColor ? `color:${labelColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-child.zb-brand-item .zb-brand-title-link.has-link:hover{
			color:${labelHoverColor};
		}
  	`;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-brand-child.zb-brand-item{
            ${tabContainerHeight}
            ${containerBorderTab}
            ${containerBorderRadiusTab}
            ${containerTabBGStyle}
            ${containerPaddingTab}
            ${containerMarginTab}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingTab}
            ${tabImageWidth}
            ${brandPhotoBorderRadiusTab}
            ${brandPhotoTabBGStyle}
            ${brandPhotoMarginTab}
            ${photoBorderTab}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-content{
            ${contentTabBGStyle}
            ${contentTabPadding}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${titleTextStrokeTab}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-link{
            ${linkTypoTab}
            ${linkMarginTab}
            ${linkTextStrokeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-brand-child.zb-brand-item{
            ${mobContainerHeight}
            ${containerBorderMob}
            ${containerBorderRadiusMob}
            ${containerMobBGStyle}
            ${containerPaddingMob}
            ${containerMarginMob}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-image img{
            ${brandPhotoPaddingMob}
            ${mobImageWidth}
            ${brandPhotoBorderRadiusMob}
            ${brandPhotoMobBGStyle}
            ${brandPhotoMarginMob}
            ${photoBorderMob}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-content{
            ${contentMobBGStyle}
            ${contentMobPadding}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-title{
            ${titleTypoMob}
            ${titleMarginMob}
            ${titleTextStrokeMob}
        }
        .${uniqueId}.wp-block-zolo-brand-child .zb-brand-link{
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
                desktopAllStyle={applyFilters('zolo.brandChild.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.brandChild.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.brandChild.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
