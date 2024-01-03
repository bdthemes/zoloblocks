/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
    REVIEWER_PHOTO_SIZE,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
} from './constants';

import { REVIEWER_DESIGNATION_TYPOGRAPHY, REVIEWER_NAME_TYPOGRAPHY, REVIEWER_MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        addReviewerWebsiteLink,
        nameColor,
        nameHoverColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
    } = attributes;

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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			grid-template-columns: repeat(${deskColumns}, 1fr);
			${deskGridGap}
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
		.${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
            ${photoDeskWidth}
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
	`;
    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			grid-template-columns: repeat(${tabColumns}, 1fr);
			${tabGridGap}
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

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
            ${photoTabBorderStyle}
            ${photoTabBorderRadius}
            ${photoTabMargin}
            ${photoTabPadding}
            ${photoTabBGStyle}
            ${photoTabWidth}
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
	`;
    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-grid {
			grid-template-columns: repeat(${mobColumns}, 1fr);
			${mobGridGap}
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

        .${uniqueId}.wp-block-zolo-review-grid .zolo-image-wrap .zolo-img {
            ${photoMobBorderStyle}
            ${photoMobBorderRadius}
            ${photoMobMargin}
            ${photoMobPadding}
            ${photoMobBGStyle}
            ${photoMobWidth}
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
