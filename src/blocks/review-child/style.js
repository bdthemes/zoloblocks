/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
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
    RC_BORDER,
    RC_BRADIUS,
    RC_PADDING,
    RC_BSHADOW,
    RC_BG,
    MC_SPACING,
    MC_PADDING,
} from './constants';

import { REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_NAME_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        preset,
        blurBgOpacity,
        addReviewerWebsiteLink,
        nameColor,
        nameHoverColor,
        nameLinkColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        objectFit,
        presetFiveArrowColor,
    } = attributes;

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};
    // content
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

    let ratingIconTabAlignStyle;
    switch (reviewContentTabAlignStyle) {
        case 'text-align:left;':
            ratingIconTabAlignStyle = 'justify-content: flex-start;';
            break;
        case 'text-align:center;':
            ratingIconTabAlignStyle = 'justify-content: center;';
            break;
        case 'text-align:right;':
            ratingIconTabAlignStyle = 'justify-content: flex-end;';
            break;
        default:
            ratingIconTabAlignStyle = 'justify-content: flex-start;';
    }

    let ratingIconMobAlignStyle;
    switch (reviewContentMobAlignStyle) {
        case 'text-align:left;':
            ratingIconMobAlignStyle = 'justify-content: flex-start;';
            break;
        case 'text-align:center;':
            ratingIconMobAlignStyle = 'justify-content: center;';
            break;
        case 'text-align:right;':
            ratingIconMobAlignStyle = 'justify-content: flex-end;';
            break;
        default:
            ratingIconMobAlignStyle = 'justify-content: flex-start;';
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
        controlName: RC_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: rcDeskBorderRadius,
        dimensionStylesTab: rcTabBorderRadius,
        dimensionStylesMobile: rcMobBorderRadius,
    } = generateDimensionStyle({
        controlName: RC_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: rcDeskPadding,
        dimensionStylesTab: rcTabPadding,
        dimensionStylesMobile: rcMobPadding,
    } = generateDimensionStyle({
        controlName: RC_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: rcBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: RC_BSHADOW,
    });

    const {
        backgroundStylesDesktop: rcDeskBGStyle,
        backgroundStylesTab: rcTabBGStyle,
        backgroundStylesMobile: rcMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: RC_BG,
        attributes,
        noMainBGImg: false,
    });

    // mc
    const {
        desktopRangeStyle: mcDeskSpacing,
        tabRangeStyle: mcTabSpacing,
        mobRangeStyle: mcMobSpacing,
    } = generateResRangeStyle({
        controlName: MC_SPACING,
        property: '--zolo-item-gap',
        attributes,
    });

    const {
        dimensionStylesDesktop: mcDeskPadding,
        dimensionStylesTab: mcTabPadding,
        dimensionStylesMobile: mcMobPadding,
    } = generateDimensionStyle({
        controlName: MC_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.zolo-block.${uniqueId}.wp-block-zolo-review-child.zolo-block .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerDeskPadding}
		}
      
        .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-2 .zolo-info-wrap {
			backdrop-filter: blur(${blurBgOpacity}px);
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap {
            ${photoDeskWidth}
            ${photoDeskHeight}
            ${photoDeskMargin}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskPadding}
			${photoDeskBGStyle}
            ${objectFit ? `object-fit: ${objectFit};` : ''}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			color: ${nameColor};
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-name:hover {
			color: ${addReviewerWebsiteLink ? nameHoverColor : nameColor};
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating svg {
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating svg.empty-star {
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}
        ${
            preset === 'style-4'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-item {
                    ${mcDeskSpacing}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-review-img-meta-wrap {
                    ${mcDeskPadding}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-meta-content {
                    ${rcDeskBorderStyle}
                    ${rcDeskBorderRadius}
                    ${rcBoxShadow}
                    ${rcDeskBGStyle}
                    ${rcDeskPadding}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-info-wrap:before {
                    --zolo-style-4-meta-content-bg-color: ${presetFiveArrowColor};
                }
            `
                : ''
        }

        ${
            active
                ? `
                    .zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap .zolo-img {
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
	`;

    const tabletAllStyle = `
		.zolo-block.${uniqueId}.wp-block-zolo-review-child.zolo-block .zolo-item {
			${reviewContentTabAlignStyle}
			${containerTabBorderStyle}
			${containerTabBorderRadius}
			${containerTabBGStyle}
            ${containerTabPadding}
		}
      
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating {
			${ratingIconTabAlignStyle}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap {
            ${photoTabWidth}
            ${photoTabHeight}
            ${photoTabMargin}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap .zolo-img {
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabPadding}
			${photoTabBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoTab}
			${testimonialMessageTabMargin}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating svg {
			${ratingIconWidthTab}
		}

        ${
            preset === 'style-4'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-item {
                    ${mcTabSpacing}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-review-img-meta-wrap {
                    ${mcTabPadding}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-meta-content {
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
		.zolo-block.${uniqueId}.wp-block-zolo-review-child.zolo-block .zolo-item {
			${reviewContentMobAlignStyle}
			${containerMobBorderStyle}
			${containerMobBorderRadius}
			${containerMobBGStyle}
            ${containerMobPadding}
		}
   
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating {
			${ratingIconMobAlignStyle}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap {
            ${photoMobWidth}
            ${photoMobHeight}
            ${photoMobMargin}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-image-wrap .zolo-img {
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobPadding}
			${photoMobBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
        
		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-review-meta-content .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoMob}
			${testimonialMessageMobMargin}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-review-child .zolo-item .zolo-star-rating svg {
			${ratingIconWidthMob}
		}

        ${
            preset === 'style-4'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-item {
                    ${mcMobSpacing}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-review-img-meta-wrap {
                    ${mcMobPadding}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-review-child.style-4 .zolo-meta-content {
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
                desktopAllStyle={applyFilters('zolo.reviewChild.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.reviewChild.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.reviewChild.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
