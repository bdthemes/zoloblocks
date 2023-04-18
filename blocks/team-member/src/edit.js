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

import {
	ToolbarButton,
	ToolbarGroup,
	Dropdown,
	Button,
	Popover,
	Dashicon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
	handleUniqueId,
	softMinifyCssStrings,
	generateResAlignmentStyle,
	generateBorderStyle,
	generateDimensionStyle,
	generateTypographyStyles,
	generateResRangeStyle,
	generateBoxShadowStyles,
	DisplayIcon,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	CONTENT_ALIGNMENT,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_BOX_SHADOW,
	ICONS_HOVER_BOX_SHADOW,
	ICONS_PADDING,
	ICONS_SIZE,
	ICONS_SPACING,
	TEAM_DESIGNATION_MARGIN,
	TEAM_NAME_MARGIN,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_SHORT_BIO_MARGIN,
} from './constants';

import {
	TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
	TEAM_MEMBER_NAME_TYPOGRAPHY,
	TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
		memberPhoto,
		memberName,
		enableMemberDetailsPage,
		memberDetailPageLink,
		showDesignation,
		memberDesignation,
		showShortBio,
		memberShortBio,
		showSocialProfiles,
		socialProfiles,
		socialProfilesLinkTarget,
		contentBg,
		photoBgColor,
		nameColor,
		designationColor,
		shortBioColor,
		separatorColor,
		iconColor,
		iconHoverColor,
		iconHoverBorderColor,
		iconBgColor,
		iconHoverBgColor,
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
		className: classnames(className, `${uniqueId} ${preset ? preset : ''}`),
	});

	// content alignment
	const {
		desktopAlignStyle: teamDeskAlignStyle,
		tabAlignStyle: teamTabAlignStyle,
		mobAlignStyle: teamMobAlignStyle,
	} = generateResAlignmentStyle({
		controlName: CONTENT_ALIGNMENT,
		property: 'text-align',
		attributes,
	});

	// social icons alignment
	let socialDeskAlignStyle;
	switch (teamDeskAlignStyle) {
		case 'text-align:left;':
			socialDeskAlignStyle = 'justify-content: flex-start;';
			break;
		case 'text-align:center;':
			socialDeskAlignStyle = 'justify-content: center;';
			break;
		case 'text-align:right;':
			socialDeskAlignStyle = 'justify-content: flex-end;';
			break;
		default:
			socialDeskAlignStyle = 'justify-content: flex-start;';
	}

	let socialTabAlignStyle;
	switch (teamTabAlignStyle) {
		case 'text-align:left;':
			socialTabAlignStyle = 'justify-content: flex-start;';
			break;
		case 'text-align:center;':
			socialTabAlignStyle = 'justify-content: center;';
			break;
		case 'text-align:right;':
			socialTabAlignStyle = 'justify-content: flex-end;';
			break;
		default:
			socialTabAlignStyle = 'justify-content: flex-start;';
	}

	let socialMobAlignStyle;
	switch (teamMobAlignStyle) {
		case 'text-align:left;':
			socialMobAlignStyle = 'justify-content: flex-start;';
			break;
		case 'text-align:center;':
			socialMobAlignStyle = 'justify-content: center;';
			break;
		case 'text-align:right;':
			socialMobAlignStyle = 'justify-content: flex-end;';
			break;
		default:
			socialMobAlignStyle = 'justify-content: flex-start;';
	}

	// Photo
	const {
		desktopBorderStyle: photoDeskBorderStyle,
		tabBorderStyle: photoTabBorderStyle,
		mobBorderStyle: photoMobBorderStyle,
	} = generateBorderStyle({
		controlName: TEAM_PHOTO_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: photoDeskBorderRadius,
		dimensionStylesTab: photoTabBorderRadius,
		dimensionStylesMobile: photoMobBorderRadius,
	} = generateDimensionStyle({
		controlName: TEAM_PHOTO_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const { boxShadowStyle: teamPhotoBoxShadow } = generateBoxShadowStyles({
		attributes,
		controlName: TEAM_PHOTO_BOX_SHADOW,
	});

	const {
		dimensionStylesDesktop: photoDeskPadding,
		dimensionStylesTab: photoTabPadding,
		dimensionStylesMobile: photoMobPadding,
	} = generateDimensionStyle({
		controlName: TEAM_PHOTO_PADDING,
		styleFor: 'padding',
		attributes,
	});

	const {
		dimensionStylesDesktop: photoDeskMargin,
		dimensionStylesTab: photoTabMargin,
		dimensionStylesMobile: photoMobMargin,
	} = generateDimensionStyle({
		controlName: TEAM_PHOTO_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Name
	const {
		typoStylesDesktop: nameTypoDesk,
		typoStylesTab: nameTypoTab,
		typoStylesMobile: nameTypoMob,
	} = generateTypographyStyles({
		prefixConstant: TEAM_MEMBER_NAME_TYPOGRAPHY,
		defaultFontSize: 23,
		attributes,
	});

	const {
		dimensionStylesDesktop: nameDeskMargin,
		dimensionStylesTab: nameTabMargin,
		dimensionStylesMobile: nameMobMargin,
	} = generateDimensionStyle({
		controlName: TEAM_NAME_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Designation
	const {
		typoStylesDesktop: designationTypoDesk,
		typoStylesTab: designationTypoTab,
		typoStylesMobile: designationTypoMob,
	} = generateTypographyStyles({
		prefixConstant: TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
		defaultFontSize: 16,
		attributes,
	});

	const {
		dimensionStylesDesktop: designationDeskMargin,
		dimensionStylesTab: designationTabMargin,
		dimensionStylesMobile: designationMobMargin,
	} = generateDimensionStyle({
		controlName: TEAM_DESIGNATION_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Short bio
	const {
		typoStylesDesktop: shortBioTypoDesk,
		typoStylesTab: shortBioTypoTab,
		typoStylesMobile: shortBioTypoMob,
	} = generateTypographyStyles({
		prefixConstant: TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
		defaultFontSize: 16,
		attributes,
	});

	const {
		dimensionStylesDesktop: shortBioDeskMargin,
		dimensionStylesTab: shortBioTabMargin,
		dimensionStylesMobile: shortBioMobMargin,
	} = generateDimensionStyle({
		controlName: TEAM_SHORT_BIO_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Social Icons
	const {
		desktopRangeStyle: socialIconDesk,
		tabRangeStyle: socialIconTab,
		mobRangeStyle: socialIconMob,
	} = generateResRangeStyle({
		controlName: ICONS_SIZE,
		property: 'font-size',
		attributes,
	});

	const {
		desktopRangeStyle: socialIconsGapDesk,
		tabRangeStyle: socialIconsGapTab,
		mobRangeStyle: socialIconsGapMob,
	} = generateResRangeStyle({
		controlName: ICONS_SPACING,
		property: 'gap',
		attributes,
	});

	const {
		desktopBorderStyle: socialIconDeskBorderStyle,
		tabBorderStyle: socialIconTabBorderStyle,
		mobBorderStyle: socialIconMobBorderStyle,
	} = generateBorderStyle({
		controlName: ICONS_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: socialIconsBorderRadiusDesk,
		dimensionStylesTab: socialIconsBorderRadiusTab,
		dimensionStylesMobile: socialIconsBorderRadiusMob,
	} = generateDimensionStyle({
		controlName: ICONS_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const {
		dimensionStylesDesktop: socialIconsPaddingDesk,
		dimensionStylesTab: socialIconsPaddingTab,
		dimensionStylesMobile: socialIconsPaddingMob,
	} = generateDimensionStyle({
		controlName: ICONS_PADDING,
		styleFor: 'padding',
		attributes,
	});

	const { boxShadowStyle: socialIconNormalBoxShadow } =
		generateBoxShadowStyles({
			attributes,
			controlName: ICONS_BOX_SHADOW,
		});

	const { boxShadowStyle: socialIconHoverBoxShadow } =
		generateBoxShadowStyles({
			attributes,
			controlName: ICONS_HOVER_BOX_SHADOW,
		});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamDeskAlignStyle}
		}

		.${uniqueId} .zolo-item .zolo-info-wrap, .${uniqueId} .zolo-item .zolo-hover-content {
			background-color: ${contentBg}
		}

		.${uniqueId} .zolo-social-share {
			${socialDeskAlignStyle}
		}

		.${uniqueId} .zolo-item .zolo-hover-content .zolo-social-share {
			border-top-color: ${separatorColor};
		}

		.${uniqueId} .zolo-image-wrap img {
			${
				photoBgColor && photoBgColor !== ''
					? `background-color: ${photoBgColor};`
					: ''
			}
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoDeskPadding}
			${photoDeskMargin}
			${teamPhotoBoxShadow}
		}

		.${uniqueId} .zolo-name {
			${nameColor && nameColor !== '' ? `color: ${nameColor};` : ''}
			${nameTypoDesk}
			${nameDeskMargin}
		}

		.${uniqueId} .zolo-designation {
			${
				designationColor && designationColor !== ''
					? `color: ${designationColor};`
					: ''
			}
			${designationTypoDesk}
			${designationDeskMargin}
		}

		.${uniqueId} .zolo-desc {
			${shortBioColor && shortBioColor !== '' ? `color: ${shortBioColor};` : ''}
			${shortBioTypoDesk}
			${shortBioDeskMargin}
		}

		.${uniqueId} .zolo-social-share {
			${socialIconsGapDesk}
		}

		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconColor && iconColor !== '' ? `color: ${iconColor};` : ''}
			${iconBgColor && iconBgColor !== '' ? `background: ${iconBgColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverColor && iconHoverColor !== '' ? `color: ${iconHoverColor};` : ''}
			${
				iconHoverBorderColor && iconHoverBorderColor !== ''
					? `border-color: ${iconHoverBorderColor};`
					: ''
			}
			${
				iconHoverBgColor && iconHoverBgColor !== ''
					? `background: ${iconHoverBgColor};`
					: ''
			}
		}

		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconDesk}
		}
	`;
	const tabletAllStyle = `
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamTabAlignStyle}
		}
		.${uniqueId} .zolo-social-share {
			${socialTabAlignStyle}
		}
		.${uniqueId} .zolo-image-wrap img {
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabPadding}
			${photoTabMargin}
		}
		.${uniqueId} .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.${uniqueId} .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}
		.${uniqueId} .zolo-desc {
			${shortBioTypoTab}
			${shortBioTabMargin}
		}
		.${uniqueId} .zolo-social-share {
			${socialIconsGapTab}
		}

		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
		}

		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconTab}
		}
	`;

	const mobileAllStyle = `
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamMobAlignStyle}
		}
		.${uniqueId} .zolo-social-share {
			${socialMobAlignStyle}
		}
		.${uniqueId} .zolo-image-wrap img {
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobPadding}
			${photoMobMargin}
		}
		.${uniqueId} .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId} .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}
		.${uniqueId} .zolo-desc {
			${shortBioTypoMob}
			${shortBioMobMargin}
		}
		.${uniqueId} .zolo-social-share {
			${socialIconsGapMob}
		}

		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
		}
		
		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconMob}
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
			<style>{` ${softMinifyCssStrings(allStyle)}`}</style>

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
				{enableMemberDetailsPage && (
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
							value={memberDetailPageLink}
							settings={[
								{
									id: 'opensInNewTab',
									title: __('Open in new tab', 'zolo-blocks'),
								},
							]}
							onChange={(data) =>
								setAttributes({ memberDetailPageLink: data })
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
								alt={memberPhoto.alt || 'Team Member'}
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
						<div className="zolo-hover-content">
							<RichText
								className="zolo-name"
								value={memberName}
								onChange={(name) =>
									setAttributes({ memberName: name })
								}
								placeholder={__('Name...', 'zolo-blocks')}
								allowedFormats={['core/bold', 'core/italic']}
							/>
							{showDesignation && (
								<RichText
									className="zolo-designation"
									value={memberDesignation}
									onChange={(designation) =>
										setAttributes({
											memberDesignation: designation,
										})
									}
									placeholder={__(
										'Designation...',
										'zolo-blocks'
									)}
									allowedFormats={[
										'core/bold',
										'core/italic',
									]}
								/>
							)}

							{showSocialProfiles && (
								<div className="zolo-social-share">
									{socialProfiles &&
										socialProfiles.map((profile, index) => {
											return (
												<a
													href={profile.link}
													key={index}
													rel={
														socialProfilesLinkTarget &&
														'noreferer'
													}
												>
													<DisplayIcon
														icon={profile.icon}
													/>
												</a>
											);
										})}
								</div>
							)}
							{enableMemberDetailsPage && (
								<div className="zolo-link-btn">
									<a
										href={
											memberDetailPageLink &&
											memberDetailPageLink.url
										}
										rel={
											memberDetailPageLink &&
											memberDetailPageLink.newTab &&
											'noreferer'
										}
										target={
											memberDetailPageLink &&
											memberDetailPageLink.newTab &&
											'_blank'
										}
									>
										<i className="fa-solid fa-arrow-right" />
									</a>
								</div>
							)}
						</div>
					</div>
					<div className="zolo-info-wrap">
						<div className="zolo-content">
							<RichText
								className="zolo-name"
								value={memberName}
								onChange={(name) =>
									setAttributes({ memberName: name })
								}
								placeholder={__('Name...', 'zolo-blocks')}
								allowedFormats={['core/bold', 'core/italic']}
							/>
							{showDesignation && (
								<RichText
									className="zolo-designation"
									value={memberDesignation}
									onChange={(designation) =>
										setAttributes({
											memberDesignation: designation,
										})
									}
									placeholder={__(
										'Designation...',
										'zolo-blocks'
									)}
									allowedFormats={[
										'core/bold',
										'core/italic',
									]}
								/>
							)}
							{showShortBio && (
								<RichText
									className="zolo-desc"
									value={memberShortBio}
									onChange={(bio) =>
										setAttributes({
											memberShortBio: bio,
										})
									}
									placeholder={__(
										'short bio...',
										'zolo-blocks'
									)}
									allowedFormats={[
										'core/bold',
										'core/italic',
									]}
								/>
							)}
						</div>
						{enableMemberDetailsPage && (
							<div className="zolo-link-btn">
								<a href="#">
									<i className="fa-solid fa-arrow-right" />
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
