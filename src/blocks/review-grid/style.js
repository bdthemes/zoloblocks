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
    GRID_COLUMNS,
    GRID_GAP,
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
    // Quote
    QUOTE_SIZE,
    QUOTE_BACKGROUND,
    QUOTE_PADDING,
    QUOTE_BORDER,
    QUOTE_BOX_SHADOW,
    QUOTE_BORDER_RADIUS,
    QUOTE_H_SPACING,
    QUOTE_V_SPACING,
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
        presetFiveArrowColor,
        quoteColor,
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
    // column count
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // Grid Columns Gap
    const {
        gapStylesDesktop: deskGridGap,
        gapStylesTab: tabGridGap,
        gapStylesMobile: mobGridGap,
    } = generateGapStyle({
        controlName: GRID_GAP,
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

    // Quote

    const {
        desktopRangeStyle: quoteDeskSize,
        tabRangeStyle: quoteTabSize,
        mobRangeStyle: quoteMobSize,
    } = generateResRangeStyle({
        controlName: QUOTE_SIZE,
        property: '--zolo-quote-icon-size',
        attributes,
    });

    const {
        backgroundStylesDesktop: quoteDeskBG,
        backgroundStylesTab: quoteTabBG,
        backgroundStylesMobile: quoteMobBG,
    } = generateNormalBGControlStyles({
        controlName: QUOTE_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: quoteDeskPadding,
        dimensionStylesTab: quoteTabPadding,
        dimensionStylesMobile: quoteMobPadding,
    } = generateDimensionStyle({
        controlName: QUOTE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: quoteDeskBorder,
        tabBorderStyle: quoteTabBorder,
        mobBorderStyle: quoteMobBorder,
    } = generateBorderStyle({
        controlName: QUOTE_BORDER,
        attributes,
    });

    const { boxShadowStyle: quoteBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: QUOTE_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: quoteDeskBorderRadius,
        dimensionStylesTab: quoteTabBorderRadius,
        dimensionStylesMobile: quoteMobBorderRadius,
    } = generateDimensionStyle({
        controlName: QUOTE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopRangeStyle: quoteDeskHSpacing,
        tabRangeStyle: quoteTabHSpacing,
        mobRangeStyle: quoteMobHSpacing,
    } = generateResRangeStyle({
        controlName: QUOTE_H_SPACING,
        property: 'right',
        attributes,
    });

    const {
        desktopRangeStyle: quoteDeskVSpacing,
        tabRangeStyle: quoteTabVSpacing,
        mobRangeStyle: quoteMobVSpacing,
    } = generateResRangeStyle({
        controlName: QUOTE_V_SPACING,
        property: 'bottom',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid.grid {
			grid-template-columns: repeat(${deskColumns}, 1fr);
			${deskGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column {
			column-count: ${deskColumns};
			${deskGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column .swiper-slide + .swiper-slide {
			margin-top: ${deskGridGap.replace('gap:', '')};
		}

        .${uniqueId}.wp-block-zolo-review-grid .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
            ${containerDeskPadding}
		}

		.${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap {
            ${photoDeskWidth}
            ${photoDeskHeight}
        }

		.${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			color: ${nameColor};
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-name.has-link:hover {
			color: ${addReviewerWebsiteLink ? nameHoverColor : nameColor};
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating svg {
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating svg.empty-star {
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.style-4 .zolo-item {
                    ${mcDeskSpacing}
                }
                .${uniqueId}.style-4 .zolo-review-img-meta-wrap {
                    ${mcDeskPadding}
                }
                .${uniqueId}.style-4 .zolo-meta-content {
                    ${rcDeskBorderStyle}
                    ${rcDeskBorderRadius}
                    ${rcBoxShadow}
                    ${rcDeskBGStyle}
                    ${rcDeskPadding}
                }
                .${uniqueId}.style-4 .zolo-info-wrap:before {
                    --zolo-style-4-meta-content-bg-color: ${presetFiveArrowColor};
                }

            `
                : ''
        }
        ${
            active
                ? `
                    .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
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
            activeHover
                ? `
                    .${uniqueId}.wp-block-zolo-review-grid .zolo-item:hover .zolo-image-wrap .zolo-img {
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


        ${
            preset === 'style-5'
                ? `
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon svg {
                        color: ${quoteColor};
                        ${quoteDeskSize}
                    }
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon {
                        ${quoteDeskBG}
                        ${quoteDeskPadding}
                        ${quoteDeskBorder}
                        ${quoteBoxShadow}
                        ${quoteDeskBorderRadius}
                        ${quoteDeskHSpacing}
                        ${quoteDeskVSpacing}
                    }
                `
                : ''
        }


	`;
    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid.grid {
			grid-template-columns: repeat(${tabColumns}, 1fr);
			${tabGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column {
			column-count: ${tabColumns};
			${tabGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column .swiper-slide + .swiper-slide {
			margin-top: ${tabGridGap.replace('gap:', '')};
		}

        .${uniqueId}.wp-block-zolo-review-grid .zolo-item {
            ${reviewContentTabAlignStyle}
            ${containerTabBorderStyle}
            ${containerTabBorderRadius}
            ${containerBoxShadow}
            ${containerTabBGStyle}
            ${containerTabPadding}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating {
            ${ratingIconDeskAlignStyle}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap{
            ${photoTabWidth}
            ${photoTabHeight}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
            ${photoTabBorderStyle}
            ${photoTabBorderRadius}
            ${photoTabMargin}
            ${photoTabPadding}
            ${photoTabBGStyle}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-name {
            ${nameTypoTab}
            ${nameTabMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-designation {
            ${designationTypoTab}
            ${designationTabMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-meta-content .zolo-desc {
            ${testimonialMessageTypoTab}
            ${testimonialMessageTabMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating svg {
            ${ratingIconWidthTab}
        }

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.style-4 .zolo-item {
                    ${mcTabSpacing}
                }
                .${uniqueId}.style-4 .zolo-review-img-meta-wrap {
                    ${mcTabPadding}
                }
                .${uniqueId}.style-4 .zolo-meta-content {
                    ${rcTabBorderStyle}
                    ${rcTabBorderRadius}
                    ${rcTabBGStyle}
                    ${rcTabPadding}
                }
            `
                : ''
        }

        ${
            preset === 'style-5'
                ? `
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon svg {
                        ${quoteTabSize}
                    }
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon {
                        ${quoteTabBG}
                        ${quoteTabPadding}
                        ${quoteTabBorder}
                        ${quoteBoxShadow}
                        ${quoteTabBorderRadius}
                        ${quoteTabHSpacing}
                        ${quoteTabVSpacing}
                    }
                 `
                : ''
        }
	`;
    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid.grid {
			grid-template-columns: repeat(${mobColumns}, 1fr);
			${mobGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column {
			column-count: ${mobColumns};
			${mobGridGap}
		}
		.${uniqueId}.wp-block-zolo-review-grid.column .swiper-slide + .swiper-slide {
			margin-top: ${mobGridGap.replace('gap:', '')};
		}

        .${uniqueId}.wp-block-zolo-review-grid .zolo-item {
            ${reviewContentMobAlignStyle}
            ${containerMobBorderStyle}
            ${containerMobBorderRadius}
            ${containerBoxShadow}
            ${containerMobBGStyle}
            ${containerMobPadding}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating {
            ${ratingIconDeskAlignStyle}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap {
            ${photoMobWidth}
            ${photoMobHeight}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
            ${photoMobBorderStyle}
            ${photoMobBorderRadius}
            ${photoMobMargin}
            ${photoMobPadding}
            ${photoMobBGStyle}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-name {
            ${nameTypoMob}
            ${nameMobMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-review-meta-content .zolo-designation {
            ${designationTypoMob}
            ${designationMobMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-meta-content .zolo-desc {
            ${testimonialMessageTypoMob}
            ${testimonialMessageMobMargin}
        }

        .${uniqueId}.wp-block-zolo-review-grid .zolo-star-rating svg {
            ${ratingIconWidthMob}
        }

        ${
            preset === 'style-4'
                ? `
                .${uniqueId}.style-4 .zolo-item {
                    ${mcMobSpacing}
                }
                .${uniqueId}.style-4 .zolo-review-img-meta-wrap {
                    ${mcMobPadding}
                }
                .${uniqueId}.style-4 .zolo-meta-content {
                    ${rcMobBorderStyle}
                    ${rcMobBorderRadius}
                    ${rcMobBGStyle}
                    ${rcMobPadding}
                }
            `
                : ''
        }

        ${
            preset === 'style-5'
                ? `
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon svg {
                        ${quoteMobSize}
                    }
                    .${uniqueId}.wp-block-zolo-review-grid.style-5 .zolo-review-quote-icon {
                        ${quoteMobBG}
                        ${quoteMobPadding}
                        ${quoteMobBorder}
                        ${quoteBoxShadow}
                        ${quoteMobBorderRadius}
                        ${quoteMobHSpacing}
                        ${quoteMobVSpacing}
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
                desktopAllStyle={applyFilters('zolo.reviewGrid.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.reviewGrid.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.reviewGrid.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
