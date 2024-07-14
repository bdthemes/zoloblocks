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
    CONTENT_ALIGNMENT,
    CONTENT_BACKGROUND,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    CONTENT_MARGIN,
    CONTENT_PADDING,
    REVIEWER_DESIGNATION_MARGIN,
    REVIEWER_NAME_MARGIN,
    REVIEWER_PHOTO_SIZE,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
    DPL_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    CONTENT_GAP,
    RW_BACKGROUND,
    RW_BORDER,
    RW_BORDER_RADIUS,
    RW_BOX_SHADOW,
    RW_MARGIN,
    RW_PADDING,
} from './constants';

import { REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_NAME_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        stylePreset,
        uniqueId,
        nameColor,
        separatorColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        dplIconColor,
        objectFit,
        photoOverflow,
    } = attributes;

    // content align
    const {
        desktopAlignStyle: reviewContentDeskAlignStyle,
        tabAlignStyle: reviewContentTabAlignStyle,
        mobAlignStyle: reviewContentMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
    });

    const {
        backgroundStylesDesktop: contentDeskBGStyle,
        backgroundStylesTab: contentTabBGStyle,
        backgroundStylesMobile: contentMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BACKGROUND,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: contentDeskBorderStyle,
        tabBorderStyle: contentTabBorderStyle,
        mobBorderStyle: contentMobBorderStyle,
    } = generateBorderStyle({
        controlName: CONTENT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: contentDeskBorderRadius,
        dimensionStylesTab: contentTabBorderRadius,
        dimensionStylesMobile: contentMobBorderRadius,
    } = generateDimensionStyle({
        controlName: CONTENT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: contentBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTENT_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: contentDeskMargin,
        dimensionStylesTab: contentTabMargin,
        dimensionStylesMobile: contentMobMargin,
    } = generateDimensionStyle({
        controlName: CONTENT_MARGIN,
        styleFor: 'margin',
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

    // Photo
    const {
        desktopRangeStyle: photoDeskWidth,
        tabRangeStyle: photoTabWidth,
        mobRangeStyle: photoMobWidth,
    } = generateResRangeStyle({
        controlName: REVIEWER_PHOTO_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: photoDeskMinWidth,
        tabRangeStyle: photoTabMinWidth,
        mobRangeStyle: photoMobMinWidth,
    } = generateResRangeStyle({
        controlName: REVIEWER_PHOTO_SIZE,
        property: 'min-width',
        attributes,
    });

    const {
        desktopRangeStyle: photoDeskHeight,
        tabRangeStyle: photoTabHeight,
        mobRangeStyle: photoMobHeight,
    } = generateResRangeStyle({
        controlName: REVIEWER_PHOTO_SIZE,
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

    // content gap
    const {
        desktopRangeStyle: contentDeskGap,
        tabRangeStyle: contentTabGap,
        mobRangeStyle: contentMobGap,
    } = generateResRangeStyle({
        controlName: CONTENT_GAP,
        property: 'gap',
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

    // Detail page link icon
    const {
        backgroundStylesDesktop: dplNormDeskBG,
        backgroundStylesTab: dplNormTabBG,
        backgroundStylesMobile: dplNormMobBG,
    } = generateNormalBGControlStyles({
        controlName: DPL_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: dplDeskSize,
        tabRangeStyle: dplTabSize,
        mobRangeStyle: dplMobSize,
    } = generateResRangeStyle({
        controlName: DPL_ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: dplDeskHSize,
        tabRangeStyle: dplTabHSize,
        mobRangeStyle: dplMobHSize,
    } = generateResRangeStyle({
        controlName: DPL_ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: dplDeskBorderStyle,
        tabBorderStyle: dplTabBorderStyle,
        mobBorderStyle: dplMobBorderStyle,
    } = generateBorderStyle({
        controlName: DPL_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: dplDeskBorderRadius,
        dimensionStylesTab: dplTabBorderRadius,
        dimensionStylesMobile: dplMobBorderRadius,
    } = generateDimensionStyle({
        controlName: DPL_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: dplDeskPadding,
        dimensionStylesTab: dplTabPadding,
        dimensionStylesMobile: dplMobPadding,
    } = generateDimensionStyle({
        controlName: DPL_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: dplDeskMargin,
        dimensionStylesTab: dplTabMargin,
        dimensionStylesMobile: dplMobMargin,
    } = generateDimensionStyle({
        controlName: DPL_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: rwDeskMargin,
        dimensionStylesTab: rwTabMargin,
        dimensionStylesMobile: rwMobMargin,
    } = generateDimensionStyle({
        controlName: RW_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: rwDeskPadding,
        dimensionStylesTab: rwTabPadding,
        dimensionStylesMobile: rwMobPadding,
    } = generateDimensionStyle({
        controlName: RW_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: rwDeskBG,
        backgroundStylesTab: rwTabBG,
        backgroundStylesMobile: rwMobBG,
    } = generateNormalBGControlStyles({
        controlName: RW_BACKGROUND,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: rwDeskBorder,
        tabBorderStyle: rwTabBorder,
        mobBorderStyle: rwMobBorder,
    } = generateBorderStyle({
        controlName: RW_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: rwDeskBorderRadius,
        dimensionStylesTab: rwTabBorderRadius,
        dimensionStylesMobile: rwMobBorderRadius,
    } = generateDimensionStyle({
        controlName: RW_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: rwBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: RW_BOX_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${reviewContentDeskAlignStyle}
            ${contentDeskGap}
		}

        ${
            stylePreset === 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review.style-preset-2 .zolo-item {
                    ${rwDeskMargin}
                    ${rwDeskPadding}
                    ${rwDeskBG}
                    ${rwDeskBorder}
                    ${rwDeskBorderRadius}
                    ${rwBoxShadow}
                }
                .${uniqueId}.wp-block-zolo-review.style-preset-2 .zolo-meta-content {
                    ${separatorColor ? `border-top-color: ${separatorColor};` : ''}
                }
            `
            : ''
        }

        ${
            stylePreset !== 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
                    ${contentDeskMargin}
                    ${contentDeskPadding}
                    ${contentDeskBorderStyle}
                    ${contentDeskBorderRadius}
                    ${contentDeskBGStyle}
                    ${contentBoxShadow}
                }

            `
            : ''
        }

		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}

		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
			${photoDeskWidth}
            ${photoDeskMinWidth}
            ${photoDeskHeight}
            ${photoOverflow ? `overflow: ${photoOverflow};` : ''}
		}

        .${uniqueId}.wp-block-zolo-review .zolo-image-wrap .zolo-img {
            ${objectFit ? `object-fit: ${objectFit};` : ''}
        }

		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg.empty-star {
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-review .zolo-quote-icon {
			${dplNormDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
			
		}

        .${uniqueId}.wp-block-zolo-review .zolo-quote-icon svg{
            ${dplDeskSize}
            ${dplDeskHSize}
            ${dplIconColor ? `fill: ${dplIconColor};` : ''}
        }
	`;

    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${reviewContentTabAlignStyle}
            ${contentTabGap}
		}

        ${
            stylePreset === 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review.style-preset-2 .zolo-item {
                    ${rwTabMargin}
                    ${rwTabPadding}
                    ${rwTabBG}
                    ${rwTabBorder}
                    ${rwTabBorderRadius}
                }
            `
            : ''
        }

        ${
            stylePreset !== 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
                    ${contentTabMargin}
                    ${contentTabPadding}
                    ${contentTabBorderStyle}
                    ${contentTabBorderRadius}
                    ${contentTabBGStyle}
                }
            `
            : ''
        }

		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconTabAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap {
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabMargin}
			${photoTabPadding}
			${photoTabBGStyle}
			${photoTabWidth}
            ${photoTabMinWidth}
            ${photoTabHeight}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-desc {
			${testimonialMessageTypoTab}
			${testimonialMessageTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthTab}
		}
        .${uniqueId}.wp-block-zolo-review .zolo-quote-icon {
			${dplNormTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			
		}

        .${uniqueId}.wp-block-zolo-review .zolo-quote-icon svg{
            ${dplTabSize}
            ${dplTabHSize}
        }
	`;

    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${reviewContentMobAlignStyle}
            ${contentMobGap}
		}

        ${
            stylePreset === 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review.style-preset-2 .zolo-item {
                    ${rwMobMargin}
                    ${rwMobPadding}
                    ${rwMobBG}
                    ${rwMobBorder}
                    ${rwMobBorderRadius}
                }
            `
            : ''
        }

        ${
            stylePreset !== 'style-preset-2'
            ? `
                .${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
                    ${contentMobMargin}
                    ${contentMobPadding}
                    ${contentMobBorderStyle}
                    ${contentMobBorderRadius}
                    ${contentMobBGStyle}
                }
            `
            : ''
        }

		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconMobAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap {
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobMargin}
			${photoMobPadding}
			${photoMobBGStyle}
			${photoMobWidth}
            ${photoMobMinWidth}
            ${photoMobHeight}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-desc {
			${testimonialMessageTypoMob}
			${testimonialMessageMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthMob}
		}
        .${uniqueId}.wp-block-zolo-review .zolo-quote-icon {
			${dplNormMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
			
		}

        .${uniqueId}.wp-block-zolo-review .zolo-quote-icon svg{
            ${dplMobSize}
            ${dplMobHSize}
        }
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.review.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.review.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.review.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
