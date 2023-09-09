/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    StarRating,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    CONTAINER_BACKGROUND,
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

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        uniqueId,
        preset,
        blurBgOpacity,
        blockStyle,
        showPhoto,
        memberPhoto,
        showName,
        memberName,
        showDesignation,
        showTestimonialMessage,
        testimonialMessage,
        memberDesignation,
        addReviewerWebsiteLink,
        reviewerWebsiteLink,
        showRating,
        rating,
        nameColor,
        nameHoverColor,
        nameLinkColor,
        designationColor,
        testimonialMessageColor,
        activeRatingColor,
        inactiveRatingColor,
        dplIconColor,
        dplIconHoverColor,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            showDesignation: context['zolo/showDesignation'],
            showTestimonialMessage: context['zolo/showTestimonialMessage'],
            preset: context['zolo/preset'],
            showPhoto: context['zolo/showPhoto'],
            showName: context['zolo/showName'],
            showRating: context['zolo/showRating'],
            addReviewerWebsiteLink: context['zolo/addReviewerWebsiteLink'],
        });
    }, [context]);

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
        defaultFontSize: 20,
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
        defaultFontSize: 16,
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
        defaultFontSize: 16,
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
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review-child .zolo-info-wrap {
			${contentDeskMargin}
			${contentDeskPadding}
			${contentDeskBorderStyle}
			${contentDeskBorderRadius}
			${contentDeskBGStyle}
            ${contentBoxShadow}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-2 .zolo-info-wrap {
			backdrop-filter: blur(${blurBgOpacity}px);
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating {
			${ratingIconDeskAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-image-wrap .zolo-img {
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoBoxShadow}
			${photoDeskMargin}
			${photoDeskPadding}
			${photoDeskBGStyle}
            ${photoDeskWidth}
		}
        .${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			color: ${addReviewerWebsiteLink ? nameLinkColor : nameColor};
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-name:hover {
			color: ${addReviewerWebsiteLink ? nameHoverColor : nameColor};
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-designation {
			${designationTypoDesk}
			${designationDeskMargin}
			${designationColor ? `color: ${designationColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoDesk}
			${testimonialMessageDeskMargin}
			${testimonialMessageColor ? `color: ${testimonialMessageColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating svg {
			${ratingIconWidthDesk}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating .filled-star, .${uniqueId}.wp-block-zolo-review-child .zolo-star-rating .fraction-star {
			${activeRatingColor ? `fill: ${activeRatingColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating .empty-star {
			${inactiveRatingColor ? `fill: ${inactiveRatingColor};` : ''}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a {
			${dplNormDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
			${dplDeskHeight}
			${dplDeskWidth}
		}
		.${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a:hover {
			${dplHoverDeskBG}
		}
		.${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn svg {
			fill: ${dplIconColor ? dplIconColor : ''};
            ${dplDeskSize}
		}
		.${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a:hover svg{
			fill: ${dplIconHoverColor ? dplIconHoverColor : ''};
		}
	`;

    const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${reviewContentTabAlignStyle}
			${containerTabBorderStyle}
			${containerTabBorderRadius}
			${containerTabBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review-child .zolo-info-wrap {
			${contentTabMargin}
			${contentTabPadding}
			${contentTabBorderStyle}
			${contentTabBorderRadius}
			${contentTabBGStyle}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating {
			${ratingIconTabAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-image-wrap .zolo-img {
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabMargin}
			${photoTabPadding}
			${photoTabBGStyle}
            ${photoTabWidth}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoTab}
			${testimonialMessageTabMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating svg {
			${ratingIconWidthTab}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a {
			${dplNormTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			${dplTabHeight}
			${dplTabWidth}
			${dplTabSize}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a:hover {
			${dplHoverTabBG}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${reviewContentMobAlignStyle}
			${containerMobBorderStyle}
			${containerMobBorderRadius}
			${containerMobBGStyle}
		}
        .${uniqueId}.wp-block-zolo-review-child .zolo-info-wrap {
			${contentMobMargin}
			${contentMobPadding}
			${contentMobBorderStyle}
			${contentMobBorderRadius}
			${contentMobBGStyle}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating {
			${ratingIconMobAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-image-wrap .zolo-img {
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobMargin}
			${photoMobPadding}
			${photoMobBGStyle}
            ${photoMobWidth}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-desc {
			${testimonialMessageTypoMob}
			${testimonialMessageMobMargin}
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-star-rating svg {
			${ratingIconWidthMob}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a {
			${dplNormMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
			${dplMobHeight}
			${dplMobWidth}
			${dplMobSize}
		}
        .${uniqueId}.wp-block-zolo-review-child.style-1 .zolo-link-btn a:hover {
			${dplHoverMobBG}
		}
	`;

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{`${softMinifyCssStrings(allStyle)}`}</style>
            <BlockControls>
                {memberPhoto && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        memberPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <div className="zolo-item">
                    {showPhoto && (
                        <div className="zolo-image-wrap">
                            {memberPhoto ? (
                                <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} className="zolo-img" />
                            ) : (
                                <MediaPlaceholder
                                    icon="format-image"
                                    labels={{
                                        title: __('Add Photo', 'zolo-blocks'),
                                        instructions: '',
                                    }}
                                    onSelect={(media) => {
                                        setAttributes({
                                            memberPhoto: media,
                                        });
                                    }}
                                    accept="image/*"
                                    allowedTypes={['image']}
                                />
                            )}
                            {addReviewerWebsiteLink && (
                                <div className="zolo-link-btn">
                                    <a
                                        href={reviewerWebsiteLink && reviewerWebsiteLink.url}
                                        rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && 'noreferer noopener'}
                                        target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && '_blank'}
                                    >
                                        <svg
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                                                fill-rule="nonzero"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="zolo-info-wrap">
                        <div className="zolo-meta-content">
                            {showName && (
                                <RichText
                                    value={memberName}
                                    onChange={(content) =>
                                        setAttributes({
                                            memberName: content,
                                        })
                                    }
                                    className="zolo-name"
                                    placeholder={__('Reviewer name', 'zolo-blocks')}
                                />
                            )}

                            {showDesignation && (
                                <div className="zolo-designation">
                                    <RichText
                                        value={memberDesignation}
                                        onChange={(content) =>
                                            setAttributes({
                                                memberDesignation: content,
                                            })
                                        }
                                        placeholder={__('Reviewer designation', 'zolo-blocks')}
                                    />
                                </div>
                            )}
                            {showTestimonialMessage && (
                                <div className="zolo-desc">
                                    <RichText
                                        value={testimonialMessage}
                                        onChange={(content) =>
                                            setAttributes({
                                                testimonialMessage: content,
                                            })
                                        }
                                        placeholder={__('Reviewer testimonial message', 'zolo-blocks')}
                                    />
                                </div>
                            )}
                        </div>
                        {showRating && (
                            <div className="zolo-review-icon">
                                <StarRating rating={rating} total={5} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
