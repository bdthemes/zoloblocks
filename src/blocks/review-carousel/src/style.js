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
} = window.zoloModule;

import {
    CAROUSEL_COLUMNS,
    CAROUSEL_GAP,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_BOX_SHADOW,
    CONTENT_ALIGNMENT,
    REVIEWER_DESIGNATION_MARGIN,
    REVIEWER_NAME_MARGIN,
    REVIEWER_PHOTO_WIDTH,
    REVIEWER_PHOTO_HEIGHT,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
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

    RCONTAINER_BG,
    RCONTAINER_BORDER,
    RCONTAINER_BRADIUS,
    RCONTAINER_BSHADOW,
    RCONTAINER_PADDING,

    CAROUSEL_CONTAINER_PADDING

} from './constants';

import { REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_NAME_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        addReviewerWebsiteLink,
        nameColor,
        nameHoverColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        navColor,
        navHoverColor,
        navHoverBorderColor,
        presetFiveArrowColor,
    } = attributes;

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

    // child global styles
    const {
        desktopAlignStyle: reviewContentDeskAlignStyle,
        tabAlignStyle: reviewContentTabAlignStyle,
        mobAlignStyle: reviewContentMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    // rating icon align
    let ratingIconDeskAlignStyle;
    switch (reviewContentDeskAlignStyle) {
        case 'text-align:left;':
            ratingIconDeskAlignStyle = 'justify-content: flex-start;';
            break;
        case 'text-align:center;':
            ratingIconDeskAlignStyle = 'justify-content: center;';
            break;
        case 'text-align:right;':
            ratingIconDeskAlignStyle = 'justify-content: flex-end;';
            break;
        default:
            ratingIconDeskAlignStyle = 'justify-content: flex-start;';
    }

    // Container
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
        desktopBorderStyle: containerDeskBorderStyle,
        tabBorderStyle: containerTabBorderStyle,
        mobBorderStyle: containerMobBorderStyle,
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

    const {
        dimensionStylesDesktop: containerDeskPadding,
        dimensionStylesTab: containerTabPadding,
        dimensionStylesMobile: containerMobPadding,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    // Photo
    const {
        desktopRangeStyle: photoDeskWidth,
        tabRangeStyle: photoTabWidth,
        mobRangeStyle: photoMobWidth,
    } = generateResRangeStyle({
        controlName: REVIEWER_PHOTO_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: photoDeskHeight,
        tabRangeStyle: photoTabHeight,
        mobRangeStyle: photoMobHeight,
    } = generateResRangeStyle({
        controlName: REVIEWER_PHOTO_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        backgroundStylesDesktop: photoDeskBGStyle,
        backgroundStylesTab: photoTabBGStyle,
        backgroundStylesMobile: photoMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: REVIEWER_PHOTO_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: photoDeskBorderStyle,
        tabBorderStyle: photoTabBorderStyle,
        mobBorderStyle: photoMobBorderStyle,
    } = generateBorderStyle({
        controlName: REVIEWER_PHOTO_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: photoDeskBorderRadius,
        dimensionStylesTab: photoTabBorderRadius,
        dimensionStylesMobile: photoMobBorderRadius,
    } = generateDimensionStyle({
        controlName: REVIEWER_PHOTO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: photoBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: REVIEWER_PHOTO_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: photoDeskMargin,
        dimensionStylesTab: photoTabMargin,
        dimensionStylesMobile: photoMobMargin,
    } = generateDimensionStyle({
        controlName: REVIEWER_PHOTO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: photoDeskPadding,
        dimensionStylesTab: photoTabPadding,
        dimensionStylesMobile: photoMobPadding,
    } = generateDimensionStyle({
        controlName: REVIEWER_PHOTO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Name
    const {
        typoStylesDesktop: nameTypoDesk,
        typoStylesTab: nameTypoTab,
        typoStylesMobile: nameTypoMob,
    } = generateTypographyStyles({
        prefixConstant: REVIEWER_NAME_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: nameDeskMargin,
        dimensionStylesTab: nameTabMargin,
        dimensionStylesMobile: nameMobMargin,
    } = generateDimensionStyle({
        controlName: REVIEWER_NAME_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Designation
    const {
        typoStylesDesktop: designationTypoDesk,
        typoStylesTab: designationTypoTab,
        typoStylesMobile: designationTypoMob,
    } = generateTypographyStyles({
        prefixConstant: REVIEWER_DESIGNATION_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: designationDeskMargin,
        dimensionStylesTab: designationTabMargin,
        dimensionStylesMobile: designationMobMargin,
    } = generateDimensionStyle({
        controlName: REVIEWER_DESIGNATION_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Testimonial Message
    const {
        typoStylesDesktop: testimonialMessageTypoDesk,
        typoStylesTab: testimonialMessageTypoTab,
        typoStylesMobile: testimonialMessageTypoMob,
    } = generateTypographyStyles({
        prefixConstant: REVIEWER_MESSAGE_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: testimonialMessageDeskMargin,
        dimensionStylesTab: testimonialMessageTabMargin,
        dimensionStylesMobile: testimonialMessageMobMargin,
    } = generateDimensionStyle({
        controlName: REVIEWER_TESTIMONIAL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // review icons
    const {
        desktopRangeStyle: ratingIconWidthDesk,
        tabRangeStyle: ratingIconWidthTab,
        mobRangeStyle: ratingIconWidthMob,
    } = generateResRangeStyle({
        controlName: ICONS_SIZE,
        property: 'width',
        attributes,
    });

    // RC
    const {
        desktopBorderStyle: rcDeskBorderStyle,
        tabBorderStyle: rcTabBorderStyle,
        mobBorderStyle: rcMobBorderStyle,
    } = generateBorderStyle({
        controlName: RCONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: rcDeskBorderRadius,
        dimensionStylesTab: rcTabBorderRadius,
        dimensionStylesMobile: rcMobBorderRadius,
    } = generateDimensionStyle({
        controlName: RCONTAINER_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: rcDeskPadding,
        dimensionStylesTab: rcTabPadding,
        dimensionStylesMobile: rcMobPadding,
    } = generateDimensionStyle({
        controlName: RCONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });
    
        const { boxShadowStyle: rcBoxShadow } = generateBoxShadowStyles({
            attributes,
            controlName: RCONTAINER_BSHADOW,
        });
    
        const {
            backgroundStylesDesktop: rcDeskBGStyle,
            backgroundStylesTab: rcTabBGStyle,
            backgroundStylesMobile: rcMobBGStyle,
        } = generateNormalBGControlStyles({
            controlName: RCONTAINER_BG,
            attributes,
            noMainBGImg: false,
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
        property: 'bottom',
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

    // carousel container padding
    const {
        dimensionStylesDesktop: carouselContainerDeskPadding,
        dimensionStylesTab: carouselContainerTabPadding,
        dimensionStylesMobile: carouselContainerMobPadding,
    } = generateDimensionStyle({
        controlName: CAROUSEL_CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // const {
    //     dimensionStylesDesktop: contentPaddingDesk,
    //     dimensionStylesTab: contentPaddingTab,
    //     dimensionStylesMobile: contentPaddingMob,
    // } = generateDimensionStyle({
    //     controlName: CONTENT_PADDING,
    //     styleFor: 'padding',
    //     attributes,
    // });
    //carousel end
    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel {
			${deskCarouselGap}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerDeskPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper {
            ${carouselContainerDeskPadding}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap {
            ${photoDeskWidth}
            ${photoDeskHeight}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			color: ${nameColor};
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-name.has-link:hover {
			color: ${addReviewerWebsiteLink ? nameHoverColor : nameColor};
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating svg {
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating svg.empty-star {
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev:hover {
            border-color: ${navHoverBorderColor} !important;
        }

        .${uniqueId}.wp-block-zolo-review-carousel .swiper-button-next, .${uniqueId}.wp-block-zolo-review-carousel .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-review-carousel .swiper-zolo-next, .${uniqueId}.wp-block-zolo-review-carousel .swiper-zolo-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskWidth}
            ${navDeskHeight}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev{
            ${navDeskOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next{
            ${navDeskOffsetRight}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:hover,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev:hover {
            ${navHoverBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:after, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:after {
            color: ${navColor};
            ${navDeskSize}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next svg, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev svg {
            fill: ${navColor};
            ${cnavDeskSize}
            ${cnavDeskHSize}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:hover:after, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:hover:after, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next:hover i, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev:hover i {
            color: ${navHoverColor};
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next:hover svg, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev:hover svg {
            fill: ${navHoverColor};
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullets {
            ${pagSpacingDesktop}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination {
            ${pagBottomSpacingDesktop.replace(/;/g, ' !important;')}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullets .swiper-pagination-bullet {
            ${pagDeskWidth}
            ${pagDeskHeight}
            ${pagBorderStyles}
            ${pagBorderRadiusDesktop}
            ${pagNormalBGStyle}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagDeskWidth}
            ${apagDeskHeight}
            ${apagBorderStyles}
            ${apagBorderRadiusDesktop}
            ${apagNormalBGStyle}
        }

         ${
            preset === 'style-4'
                ? `
                .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content {
                    ${rcDeskBorderStyle}
                    ${rcDeskBorderRadius}
                    ${rcBoxShadow}
                    ${rcDeskBGStyle}
                    ${rcDeskPadding}
                }
                .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-info-wrap:before {
                    --zolo-style-4-meta-content-bg-color: ${presetFiveArrowColor};
                }

            `
                : ''
        }
	`;

    const tabletAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel {
			${tabCarouselGap}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerDeskPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper {
            ${carouselContainerTabPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating {
            ${ratingIconDeskAlignStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap{
            ${photoTabWidth}
            ${photoTabHeight}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap .zolo-img {
            ${photoTabBorderStyle}
            ${photoTabBorderRadius}
            ${photoTabMargin}
            ${photoTabPadding}
            ${photoTabBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-name {
            ${nameTypoTab}
            ${nameTabMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-designation {
            ${designationTypoTab}
            ${designationTabMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content .zolo-desc {
            ${testimonialMessageTypoTab}
            ${testimonialMessageTabMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating svg {
            ${ratingIconWidthTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev{
            ${navTabOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next{
            ${navTabOffsetRight}
        }

    .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev {
            ${navTabWidth}
            ${navTabHeight}
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:after, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:after {
            ${navTabSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next svg, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev svg {
            ${cnavTabSize}
            ${cnavTabHSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
            ${pagSpacingTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination {
            ${pagBottomSpacingTab.replace(/;/g, ' !important;')}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content {
                    ${rcTabBorderStyle}
                    ${rcTabBorderRadius}
                    ${rcTabBGStyle}
                    ${rcTabPadding}
                }

            `
                : ''
        }
	`;
    const mobileAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-review-carousel {
			${mobCarouselGap}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerDeskPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper {
            ${carouselContainerMobPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating {
            ${ratingIconDeskAlignStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap {
            ${photoMobWidth}
            ${photoMobHeight}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-image-wrap .zolo-img {
            ${photoMobBorderStyle}
            ${photoMobBorderRadius}
            ${photoMobMargin}
            ${photoMobPadding}
            ${photoMobBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-name {
            ${nameTypoMob}
            ${nameMobMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-review-meta-content .zolo-designation {
            ${designationTypoMob}
            ${designationMobMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content .zolo-desc {
            ${testimonialMessageTypoMob}
            ${testimonialMessageMobMargin}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-star-rating svg {
            ${ratingIconWidthMob}
        }
          .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev{
            ${navMobOffsetLeft}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next,
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next{
            ${navMobOffsetRight}
        }
      .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev {
            ${navMobWidth}
            ${navMobHeight}
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:hover, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-next:after, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-button-prev:after {
            ${navMobSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-next svg, .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-zolo-prev svg {
            ${cnavMobSize}
            ${cnavMobHSize}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
            ${pagSpacingMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination {
            ${pagBottomSpacingMob.replace(/;/g, ' !important;')}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .swiper-pagination-bullets .swiper-pagination-bullet-active {

            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
        }

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.zolo-block.wp-block-zolo-review-carousel .zolo-meta-content {
                    ${rcMobBorderStyle}
                    ${rcMobBorderRadius}
                    ${rcMobBGStyle}
                    ${rcMobPadding}
                }

            `
                : ''
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
