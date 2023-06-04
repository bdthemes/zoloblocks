/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	MediaPlaceholder,
	MediaUpload,
} from '@wordpress/block-editor';
import { Fragment, useState, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup, Popover } from '@wordpress/components';
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
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
	CONTAINER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTENT_ALIGNMENT,
	REVIEWER_DESIGNATION_MARGIN,
	REVIEWER_NAME_MARGIN,
	REVIEWER_PHOTO_BORDER,
	REVIEWER_PHOTO_BORDER_RADIUS,
	REVIEWER_PHOTO_BOX_SHADOW,
	REVIEWER_PHOTO_MARGIN,
	REVIEWER_PHOTO_PADDING,
	REVIEWER_TESTIMONIAL_MARGIN,
	ICONS_SIZE,
	CONTAINER_BACKGROUND,
	REVIEWER_PHOTO_BG,
} from './constants';

import {
	REVIEWER_DESIGNATION_TYPOGRAPHY,
	REVIEWER_NAME_TYPOGRAPHY,
	REVIEWER_MESSAGE_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

import Inspector from './inspector';

export default function Edit(props) {
	const {
		attributes,
		setAttributes,
		className,
		clientId,
		isSelected,
		context,
	} = props;
	const {
		uniqueId,
		preset,
		blockStyle,
		memberPhoto,
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
		designationColor,
		testimonialMessageColor,
		activeRatingColor,
		inactiveRatingColor,
	} = attributes;
	const [popoverVisible, setPopoverVisible] = useState(false);

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
		className: classnames(className, `${uniqueId} ${preset}`),
	});

	/**
	 * context
	 */
	useEffect(() => {
		setAttributes({
			showDesignation: context['zolo/showDesignation'],
			showTestimonialMessage: context['zolo/showTestimonialMessage'],
			preset: context['zolo/preset'],
		});
	}, [context]);

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

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${containerDeskMargin}
			${containerDeskPadding}
			${reviewContentDeskAlignStyle}
			${containerDeskBorderStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerDeskBGStyle}
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
		}
		.${uniqueId}.wp-block-zolo-review-child .zolo-meta-content .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
			${nameColor ? `color: ${nameColor};` : ''}
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
	`;

	const tabletAllStyle = `
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${containerTabMargin}
			${containerTabPadding}
			${reviewContentTabAlignStyle}
			${containerTabBorderStyle}
			${containerTabBorderRadius}
			${containerTabBGStyle}
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
	`;

	const mobileAllStyle = `
		.${uniqueId}.wp-block-zolo-review-child .zolo-item {
			${containerMobMargin}
			${containerMobPadding}
			${reviewContentMobAlignStyle}
			${containerMobBorderStyle}
			${containerMobBorderRadius}
			${containerMobBGStyle}
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
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
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
										label={__(
											'Replace Photo',
											'zolo-blocks'
										)}
										icon="update"
										onClick={open}
									/>
								)}
							/>
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
				{addReviewerWebsiteLink && (
					<ToolbarGroup>
						<ToolbarButton
							icon="admin-links"
							onClick={() => setPopoverVisible(!popoverVisible)}
						/>
					</ToolbarGroup>
				)}
				{popoverVisible && (
					<Popover
						position="bottom right"
						onFocusOutside={() => setPopoverVisible(false)}
						offset={10}
					>
						<LinkControl
							searchInputPlaceholder="Search here..."
							value={reviewerWebsiteLink}
							settings={[
								{
									id: 'opensInNewTab',
									title: __('Open in new tab', 'zolo-blocks'),
								},
							]}
							onChange={(data) =>
								setAttributes({ reviewerWebsiteLink: data })
							}
						/>
					</Popover>
				)}
			</BlockControls>
			<div {...blockProps}>
				<div className="zolo-item">
					<div className="zolo-image-wrap">
						{memberPhoto ? (
							<img
								src={memberPhoto.url}
								alt={memberPhoto.alt || 'Reviewer'}
								className="zolo-img"
							/>
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
									href={
										reviewerWebsiteLink &&
										reviewerWebsiteLink.url
									}
									rel={
										reviewerWebsiteLink &&
										reviewerWebsiteLink.opensInNewTab &&
										'noreferer noopener'
									}
									target={
										reviewerWebsiteLink &&
										reviewerWebsiteLink.opensInNewTab &&
										'_blank'
									}
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
					<div className="zolo-info-wrap">
						<div className="zolo-meta-content">
							<div className="zolo-name">
								<RichText
									value={memberName}
									onChange={(content) =>
										setAttributes({
											memberName: content,
										})
									}
									placeholder={__(
										'Reviewer name',
										'zolo-blocks'
									)}
								/>
							</div>
							{showDesignation && (
								<div className="zolo-designation">
									<RichText
										value={memberDesignation}
										onChange={(content) =>
											setAttributes({
												memberDesignation: content,
											})
										}
										placeholder={__(
											'Reviewer designation',
											'zolo-blocks'
										)}
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
										placeholder={__(
											'Reviewer testimonial message',
											'zolo-blocks'
										)}
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
