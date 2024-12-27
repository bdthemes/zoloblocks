/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    GlobalStyleHanlder,
    generateResCounterStyle,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateGapStyle,
    generateTextShadowStyles,
    generateTextStrokeStyles,
} = window.zoloModule;

import {
    CAROUSEL_COLUMNS,
    CAROUSEL_GAP,
    // carousel start
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_OFFSET_HORIZONTAL,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    PAG_BOTTOM_SPACING,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,

    // Brand Carousel
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTENT_ALIGNMENT,
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

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        navColor,
        navHoverColor,
        navHoverBorderColor,

        // brand carousel
        nameColor,
        nameHoverColor,
        labelColor,
        labelHoverColor,
        contentHorizontalPosition,
        contentVerticalPosition,
    } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};
    const {
        active: activeHover = false,
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

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
        backgroundStylesDesktop: containerDeskBGHStyle,
        backgroundStylesTab: containerTabBGHStyle,
        backgroundStylesMobile: containerMobBGHStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_H_BG,
        attributes,
        noMainBGImg: false,
    });

    // Photo
    const {
        backgroundStylesDesktop: brandPhotoDeskBGStyle,
        backgroundStylesTab: brandPhotoTabBGStyle,
        backgroundStylesMobile: brandPhotoMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BRAND_PHOTO_BG,
        attributes,
        noMainBGImg: false,
    });

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

    // column count
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: CAROUSEL_COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // Carousel Columns Gap
    const {
        gapStylesDesktop: deskCarouselGap,
        gapStylesTab: tabCarouselGap,
        gapStylesMobile: mobCarouselGap,
    } = generateGapStyle({
        controlName: CAROUSEL_GAP,
        attributes,
    });

    // carousel start
    // Navigation
    const {
        desktopRangeStyle: navDeskWidth,
        tabRangeStyle: navTabWidth,
        mobRangeStyle: navMobWidth,
    } = generateResRangeStyle({
        controlName: NAV_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskHeight,
        tabRangeStyle: navTabHeight,
        mobRangeStyle: navMobHeight,
    } = generateResRangeStyle({
        controlName: NAV_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskOffsetLeft,
        tabRangeStyle: navTabOffsetLeft,
        mobRangeStyle: navMobOffsetLeft,
    } = generateResRangeStyle({
        controlName: NAV_OFFSET_HORIZONTAL,
        property: 'left',
        attributes,
    });
    const {
        desktopRangeStyle: navDeskOffsetRight,
        tabRangeStyle: navTabOffsetRight,
        mobRangeStyle: navMobOffsetRight,
    } = generateResRangeStyle({
        controlName: NAV_OFFSET_HORIZONTAL,
        property: 'right',
        attributes,
    });

    const {
        desktopBorderStyle: navBorderStyles,
        tabBorderStyle: navBorderStylesTab,
        mobBorderStyle: navBorderStylesMob,
    } = generateBorderStyle({
        controlName: NAV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: navBorderRadiusDesktop,
        dimensionStylesTab: navBorderRadiusTab,
        dimensionStylesMobile: navBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: navNormalBGStyle,
        backgroundStylesTab: navNormalBGStyleTab,
        backgroundStylesMobile: navNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: navHoverBGStyle,
        backgroundStylesTab: navHoverBGStyleTab,
        backgroundStylesMobile: navHoverBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    // navigation icon
    const {
        desktopRangeStyle: navDeskSize,
        tabRangeStyle: navTabSize,
        mobRangeStyle: navMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopRangeStyle: cnavDeskSize,
        tabRangeStyle: cnavTabSize,
        mobRangeStyle: cnavMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: cnavDeskHSize,
        tabRangeStyle: cnavTabHSize,
        mobRangeStyle: cnavMobHSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'height',
        attributes,
    });

    // Pagination
    const {
        desktopRangeStyle: pagDeskWidth,
        tabRangeStyle: pagTabWidth,
        mobRangeStyle: pagMobWidth,
    } = generateResRangeStyle({
        controlName: PAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: pagDeskHeight,
        tabRangeStyle: pagTabHeight,
        mobRangeStyle: pagMobHeight,
    } = generateResRangeStyle({
        controlName: PAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: pagBorderStyles,
        tabBorderStyle: pagBorderStylesTab,
        mobBorderStyle: pagBorderStylesMob,
    } = generateBorderStyle({
        controlName: PAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagBorderRadiusDesktop,
        dimensionStylesTab: pagBorderRadiusTab,
        dimensionStylesMobile: pagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: pagNormalBGStyle,
        backgroundStylesTab: pagNormalBGStyleTab,
        backgroundStylesMobile: pagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: PAG_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: pagSpacingDesktop,
        tabRangeStyle: pagSpacingTab,
        mobRangeStyle: pagSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_SPACING,
        property: 'gap',
        attributes,
    });

    const {
        desktopRangeStyle: pagBottomSpacingDesktop,
        tabRangeStyle: pagBottomSpacingTab,
        mobRangeStyle: pagBottomSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_BOTTOM_SPACING,
        property: '--zolo-pagination-offset',
        attributes,
    });

    // Active Pagination
    const {
        desktopRangeStyle: apagDeskWidth,
        tabRangeStyle: apagTabWidth,
        mobRangeStyle: apagMobWidth,
    } = generateResRangeStyle({
        controlName: APAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: apagDeskHeight,
        tabRangeStyle: apagTabHeight,
        mobRangeStyle: apagMobHeight,
    } = generateResRangeStyle({
        controlName: APAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: apagBorderStyles,
        tabBorderStyle: apagBorderStylesTab,
        mobBorderStyle: apagBorderStylesMob,
    } = generateBorderStyle({
        controlName: APAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: apagBorderRadiusDesktop,
        dimensionStylesTab: apagBorderRadiusTab,
        dimensionStylesMobile: apagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: APAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: apagNormalBGStyle,
        backgroundStylesTab: apagNormalBGStyleTab,
        backgroundStylesMobile: apagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: APAG_BG,
        attributes,
        noMainBGImg: true,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item{
            ${deskContainerHeight}
            ${containerBorderDesk}
            ${containerBoxShadow}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerDeskBGStyle}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover .zb-brand-content{
            ${containerDeskBGHStyle}
		}

        ${
            preset === 'zb-brand-basic-style'
                ? `.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover {
			      	${containerDeskBGHStyle}
			    }`
                : ''
        }
        
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item,
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${containerBorderRadiusDesk}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image img {
            ${brandPhotoPaddingDesk}
			${deskImageWidth}
			${brandPhotoBorderRadiusDesk}
			${brandPhotoBoxShadow}
			${brandPhotoDeskBGStyle}
			${photoBorderDesktop}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image {
			${brandPhotoMaringDesk}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-inner-content{
            ${brandContentDeskAlignStyle}
        }
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${contentHorizontalPosition ? `align-items:${contentHorizontalPosition};` : ''}
            ${contentVerticalPosition ? `justify-content:${contentVerticalPosition};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${contentDeskBGStyle}
            ${contentDeskPadding}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
            ${nameColor ? `color:${nameColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-title.has-link:hover{
            ${nameHoverColor ? `color:${nameHoverColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item .zb-brand-title-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
            ${labelColor ? `color:${labelColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item .zb-brand-title-link.has-link:hover{
            ${labelHoverColor ? `color:${labelHoverColor};` : ''}
		}

        ${
            active
                ? `
                    .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image img  {
                        filter:
                            blur(${blur}px)
                            brightness(${brightness}%)
                            contrast(${contrast}%)
                            saturate(${saturate}%)
                            hue-rotate(${hueRotate}deg)
                    }
                `
                : ''
        }

        ${
            activeHover && preset === 'zb-brand-basic-style'
                ? `
                    .${uniqueId}.wp-block-zolo-brand-carousel:hover .zb-brand-image img {
                        filter:
                            blur(${blurHover}px)
                            brightness(${brightnessHover}%)
                            contrast(${contrastHover}%)
                            saturate(${saturateHover}%)
                            hue-rotate(${hueRotateHover}deg)
                    }

       `
                : ''
        }
       
		.${uniqueId}.zolo-block.wp-block-zolo-brand-carousel {
			${deskCarouselGap}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:hover,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:hover,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next:hover, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev:hover {
            border-color: ${navHoverBorderColor} !important;
        }

        .${uniqueId}.wp-block-zolo-brand-carousel .swiper-button-next, 
        .${uniqueId}.wp-block-zolo-brand-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-brand-carousel .swiper-zolo-next, 
        .${uniqueId}.wp-block-zolo-brand-carousel .swiper-zolo-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskWidth}
            ${navDeskHeight}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev{
            ${navDeskOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next{
            ${navDeskOffsetRight}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:hover,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:hover,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next:hover, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev:hover {
            ${navHoverBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:after, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:after {
            color: ${navColor};
            ${navDeskSize}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next svg, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev svg {
            fill: ${navColor};
            ${cnavDeskSize}
            ${cnavDeskHSize}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:hover:after, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:hover:after, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next:hover i, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev:hover i {
            color: ${navHoverColor};
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next:hover svg, 
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev:hover svg {
            fill: ${navHoverColor};
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullets {
            ${pagSpacingDesktop}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination {
            ${pagBottomSpacingDesktop}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullets .swiper-pagination-bullet {
            ${pagDeskWidth}
            ${pagDeskHeight}
            ${pagBorderStyles}
            ${pagBorderRadiusDesktop}
            ${pagNormalBGStyle}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagDeskWidth}
            ${apagDeskHeight}
            ${apagBorderStyles}
            ${apagBorderRadiusDesktop}
            ${apagNormalBGStyle}
        }
	`;

    const tabletAllStyle = `

         .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item{
            ${tabContainerHeight}
            ${containerBorderTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerTabBGStyle}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover .zb-brand-content{
            ${containerTabBGHStyle}
		}

        ${
            preset === 'zb-brand-basic-style'
                ? `.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover {
			      	${containerTabBGHStyle}
			    }`
                : ''
        }
        
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item,
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${containerBorderRadiusTab}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image img {
            ${brandPhotoPaddingTab}
			${tabImageWidth}
			${brandPhotoBorderRadiusTab}
			${brandPhotoTabBGStyle}
			${photoBorderTab}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image {
			${brandPhotoMarginTab}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-inner-content{
            ${brandContentTabAlignStyle}
        }

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${contentTabBGStyle}
            ${contentTabPadding}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-title{
			${titleTypoTab}
			${titleMarginTab}
			${titleTextStrokeTab}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item .zb-brand-title-link{
			${linkTypoTab}
			${linkMarginTab}
			${linkTextStrokeTab}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-brand-carousel {
			${tabCarouselGap}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev{
            ${navTabOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next{
            ${navTabOffsetRight}
        }

    .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev {
            ${navTabWidth}
            ${navTabHeight}
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:after, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:after {
            ${navTabSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next svg, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev svg {
            ${cnavTabSize}
            ${cnavTabHSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
            ${pagSpacingTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination {
            ${pagBottomSpacingTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }
	`;
    const mobileAllStyle = `

        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item{
            ${mobContainerHeight}
            ${containerBorderMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerMobBGStyle}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover .zb-brand-content{
            ${containerMobBGHStyle}
		}

        ${
            preset === 'zb-brand-basic-style'
                ? `.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item:hover {
			      	${containerMobBGHStyle}
			    }`
                : ''
        }
        
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item,
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${containerBorderRadiusMob}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image img {
            ${brandPhotoPaddingMob}
			${mobImageWidth}
			${brandPhotoBorderRadiusMob}
			${brandPhotoMobBGStyle}
			${photoBorderMob}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-image {
			${brandPhotoMarginMob}
		}
        .${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-inner-content{
            ${brandContentMobAlignStyle}
        }

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-content{
            ${contentMobBGStyle}
            ${contentMobPadding}
		}
		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-title{
			${titleTypoMob}
			${titleMarginMob}
			${titleTextStrokeMob}
		}

		.${uniqueId}.wp-block-zolo-brand-carousel .zb-brand-item .zb-brand-title-link{
			${linkTypoMob}
			${linkMarginMob}
			${linkTextStrokeMob}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-brand-carousel {
			${mobCarouselGap}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev{
            ${navMobOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next{
            ${navMobOffsetRight}
        }
      .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev {
            ${navMobWidth}
            ${navMobHeight}
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-next:after, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-button-prev:after {
            ${navMobSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-next svg, .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-zolo-prev svg {
            ${cnavMobSize}
            ${cnavMobHSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
            ${pagSpacingMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination {
            ${pagBottomSpacingMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-brand-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {

            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
        }
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.reviewCarousel.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.reviewCarousel.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.reviewCarousel.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
