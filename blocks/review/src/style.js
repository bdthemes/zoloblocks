/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
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
    DPL_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
} from './constants';

import { REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_NAME_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        blurBgOpacity,
        addReviewerWebsiteLink,
        nameColor,
        nameLinkColor,
        nameHoverColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        dplIconColor,
        dplIconHoverColor,
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

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: containerDeskMargin,
        dimensionStylesTab: containerTabMargin,
        dimensionStylesMobile: containerMobMargin,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
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
        backgroundStylesDesktop: dplHoverDeskBG,
        backgroundStylesTab: dplHoverTabBG,
        backgroundStylesMobile: dplHoverMobBG,
    } = generateNormalBGControlStyles({
        controlName: DPL_HOVER_BG,
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
        desktopRangeStyle: dplDeskHeight,
        tabRangeStyle: dplTabHeight,
        mobRangeStyle: dplMobHeight,
    } = generateResRangeStyle({
        controlName: DPL_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: dplDeskWidth,
        tabRangeStyle: dplTabWidth,
        mobRangeStyle: dplMobWidth,
    } = generateResRangeStyle({
        controlName: DPL_WIDTH,
        property: 'width',
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${containerDeskMargin}
			${containerDeskPadding}
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
			${contentDeskMargin}
			${contentDeskPadding}
			${contentDeskBorderStyle}
			${contentDeskBorderRadius}
			${contentDeskBGStyle}
            ${contentBoxShadow}
		}

        .${uniqueId}.wp-block-zolo-review.style-2 .zolo-info-wrap {
			backdrop-filter: blur(${blurBgOpacity}px);
		}

		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
			${photoDeskWidth}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			color: ${addReviewerWebsiteLink ? nameLinkColor : nameColor};
		}
        ${
            addReviewerWebsiteLink
                ? `.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name:hover {
                    ${nameHoverColor ? `color: ${nameHoverColor};` : ''}
                }`
                : ''
        }

		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating .filled-star svg, .${uniqueId}.wp-block-zolo-review .zolo-star-rating .fraction-star svg{
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating .empty-star svg{
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a {
			${dplNormDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
			${dplDeskHeight}
			${dplDeskWidth}
		}

		.${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a:hover {
			${dplHoverDeskBG}
		}

		.${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn i {
			color: ${dplIconColor ? dplIconColor : ''};
            ${dplDeskSize}
            transition: 0.3s;
		}

		.${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a:hover i{
			color: ${dplIconHoverColor ? dplIconHoverColor : ''};
		}
	`;

    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${containerTabMargin}
			${containerTabPadding}
			${reviewContentTabAlignStyle}
			${containerTabBorderStyle}
			${containerTabBorderRadius}
			${containerTabBGStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
			${contentTabMargin}
			${contentTabPadding}
			${contentTabBorderStyle}
			${contentTabBorderRadius}
			${contentTabBGStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconTabAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap .zolo-img {
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabMargin}
			${photoTabPadding}
			${photoTabBGStyle}
			${photoTabWidth}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoTab}
			${testimonialMessageTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthTab}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a {
			${dplNormTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			${dplTabHeight}
			${dplTabWidth}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn svg{
            ${dplTabSize}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a:hover {
			${dplHoverTabBG}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review .zolo-item {
			${containerMobMargin}
			${containerMobPadding}
			${reviewContentMobAlignStyle}
			${containerMobBorderStyle}
			${containerMobBorderRadius}
			${containerMobBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review .zolo-info-wrap {
			${contentMobMargin}
			${contentMobPadding}
			${contentMobBorderStyle}
			${contentMobBorderRadius}
			${contentMobBGStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating {
			${ratingIconMobAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-image-wrap .zolo-img {
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobMargin}
			${photoMobPadding}
			${photoMobBGStyle}
			${photoMobWidth}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoMob}
			${testimonialMessageMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review .zolo-star-rating svg {
			${ratingIconWidthMob}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a {
			${dplNormMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
			${dplMobHeight}
			${dplMobWidth}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn svg{
			${dplMobSize}
		}
        .${uniqueId}.wp-block-zolo-review.style-1 .zolo-link-btn a:hover {
			${dplHoverMobBG}
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
