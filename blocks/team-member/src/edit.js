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
	generateNormalBGControlStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	CONTAINER_BG,
	CONTENT_BG,
	CONTENT_ALIGNMENT,
	ICONS_BG,
	ICONS_HOVER_BG,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_BOX_SHADOW,
	ICONS_HOVER_BOX_SHADOW,
	ICONS_PADDING,
	ICONS_SIZE,
	ICONS_SPACING,
	TEAM_DESIGNATION_MARGIN,
	TEAM_NAME_MARGIN,
	PHOTO_BG,
	TEAM_PHOTO_BORDER,
	TEAM_PHOTO_BORDER_RADIUS,
	TEAM_PHOTO_BOX_SHADOW,
	TEAM_PHOTO_MARGIN,
	TEAM_PHOTO_PADDING,
	TEAM_SHORT_BIO_MARGIN,
	DETAIL_PAGE_LINK_BG,
	DETAIL_PAGE_LINK_HOVER_BG,
	TEAM_MEMBER_CONTAINER_PADDING,
	TEAM_MEMBER_CONTAINER_MARGIN,
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
		addDetailPageLink,
		showDetailPageIcon,
		memberDetailPageLink,
		showDesignation,
		memberDesignation,
		showShortBio,
		memberShortBio,
		showSocialProfiles,
		socialProfiles,
		nameColor,
		designationColor,
		shortBioColor,
		separatorColor,
		iconColor,
		iconHoverColor,
		iconHoverBorderColor,
		detailPageIconColor,
		detailPageIconHoverColor,
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

	// Container padding + margin
	const {
		dimensionStylesDesktop: teamMemberContainerDeskPadding,
		dimensionStylesTab: teamMemberContainerTabPadding,
		dimensionStylesMobile: teamMemberContainerMobPadding,
	} = generateDimensionStyle({
		controlName: TEAM_MEMBER_CONTAINER_PADDING,
		styleFor: 'padding',
		attributes,
	});

	const {
		dimensionStylesDesktop: teamMemberContainerDeskMargin,
		dimensionStylesTab: teamMemberContainerTabMargin,
		dimensionStylesMobile: teamMemberContainerMobMargin,
	} = generateDimensionStyle({
		controlName: TEAM_MEMBER_CONTAINER_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Container
	const {
		backgroundStylesDesktop: containerDeskBGStyle,
		backgroundStylesTab: containerTabBGStyle,
		backgroundStylesMobile: containerMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: CONTAINER_BG,
		attributes,
		noMainBGImg: false,
	});

	// content
	const {
		backgroundStylesDesktop: contentDeskBGStyle,
		backgroundStylesTab: contentTabBGStyle,
		backgroundStylesMobile: contentMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: CONTENT_BG,
		attributes,
		noMainBGImg: false,
	});

	// Photo
	const {
		backgroundStylesDesktop: photoDeskBGStyle,
		backgroundStylesTab: photoTabBGStyle,
		backgroundStylesMobile: photoMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: PHOTO_BG,
		attributes,
		noMainBGImg: true,
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
		backgroundStylesDesktop: iconsNormalDeskBG,
		backgroundStylesTab: iconsNormalTabBG,
		backgroundStylesMobile: iconsNormalMobBG,
	} = generateNormalBGControlStyles({
		controlName: ICONS_BG,
		attributes,
		noMainBGImg: true,
	});

	const {
		backgroundStylesDesktop: iconsHoverDeskBG,
		backgroundStylesTab: iconsHoverTabBG,
		backgroundStylesMobile: iconsHoverMobBG,
	} = generateNormalBGControlStyles({
		controlName: ICONS_HOVER_BG,
		attributes,
		noMainBGImg: true,
	});

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
		desktopRangeStyle: socialIconContainerHeightDesk,
		tabRangeStyle: socialIconContainerHeightTab,
		mobRangeStyle: socialIconContainerHeightMob,
	} = generateResRangeStyle({
		controlName: ICONS_SIZE,
		property: 'height',
		attributes,
	});

	const {
		desktopRangeStyle: socialIconContainerWidthDesk,
		tabRangeStyle: socialIconContainerWidthTab,
		mobRangeStyle: socialIconContainerWidthMob,
	} = generateResRangeStyle({
		controlName: ICONS_SIZE,
		property: 'width',
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

	// detail page
	const {
		backgroundStylesDesktop: detailPageNormalDeskBG,
		backgroundStylesTab: detailPageNormalTabBG,
		backgroundStylesMobile: detailPageNormalMobBG,
	} = generateNormalBGControlStyles({
		controlName: DETAIL_PAGE_LINK_BG,
		attributes,
		noMainBGImg: true,
	});

	const {
		backgroundStylesDesktop: detailPageHoverDeskBG,
		backgroundStylesTab: detailPageHoverTabBG,
		backgroundStylesMobile: detailPageHoverMobBG,
	} = generateNormalBGControlStyles({
		controlName: DETAIL_PAGE_LINK_HOVER_BG,
		attributes,
		noMainBGImg: true,
	});

	/**
	 * Image Width Calculation for Style-4(Preset-3)
	 */

	const paddingRegex = /padding:\s*(\d+)/;
	const widthRegex = /width:\s*(\d+)/;
	const borderWidthRegex = /border-width:\s*(\d+)/;

	const deskPadding = socialIconsPaddingDesk || 'padding: 8px';
	const deskMatch = paddingRegex.exec(deskPadding);
	const dpNumber = deskMatch ? parseInt(deskMatch[1]) : 8;

	const deskWidth = socialIconContainerWidthDesk || 'width: 18px';
	const deskMatch2 = widthRegex.exec(deskWidth);
	const dwNumber = deskMatch2 ? parseInt(deskMatch2[1]) : 18;

	const deskBorderWidth = socialIconDeskBorderStyle || 'border-width: 1px';
	const deskMatch3 = borderWidthRegex.exec(deskBorderWidth);
	const dbNumber = deskMatch3 ? parseInt(deskMatch3[1]) : 1;

	const totalDeskWidth =
		dpNumber + dwNumber + dbNumber !== 0
			? dpNumber * 2 + dwNumber + dbNumber * 2
			: 45;

	// tablet
	const tabPadding = socialIconsPaddingTab || 'padding: 0px';
	const tabMatch = paddingRegex.exec(tabPadding);
	const tpNumber = tabMatch ? parseInt(tabMatch[1]) : 8;

	const tabWidth = socialIconContainerWidthTab || 'width: 0px';
	const tabMatch2 = widthRegex.exec(tabWidth);
	const twNumber = tabMatch2 ? parseInt(tabMatch2[1]) : 18;

	const tabBorderWidth = socialIconTabBorderStyle || 'border-width: 0px';
	const tabMatch3 = borderWidthRegex.exec(tabBorderWidth);
	const tbNumber = tabMatch3 ? parseInt(tabMatch3[1]) : 1;

	const totalTabWidth =
		tpNumber + twNumber + tbNumber !== 0
			? tpNumber * 2 + twNumber + tbNumber * 2
			: 45;

	// mobile
	const mobPadding = socialIconsPaddingMob || 'padding: 0px';
	const mobMatch = paddingRegex.exec(mobPadding);
	const mpNumber = mobMatch ? parseInt(mobMatch[1]) : 8;

	const mobWidth = socialIconContainerWidthMob || 'width: 0px';
	const mobMatch2 = widthRegex.exec(mobWidth);
	const mwNumber = mobMatch2 ? parseInt(mobMatch2[1]) : 18;

	const mobBorderWidth = socialIconMobBorderStyle || 'border-width: 0px';
	const mobMatch3 = borderWidthRegex.exec(mobBorderWidth);
	const mbNumber = mobMatch3 ? parseInt(mobMatch3[1]) : 1;

	const totalMobWidth =
		mpNumber + mwNumber + mbNumber !== 0
			? mpNumber * 2 + mwNumber + mbNumber * 2
			: 45;

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId} {
			${teamMemberContainerDeskPadding}
			${teamMemberContainerDeskMargin}
			${containerDeskBGStyle}
		}
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamDeskAlignStyle}
		}
		.${uniqueId}.default .zolo-item .zolo-info-wrap, 
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-2 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
			${contentDeskBGStyle}
		}
		.${uniqueId} .zolo-social-share {
			${socialDeskAlignStyle}
		}
		.${uniqueId} .zolo-item .zolo-hover-content .zolo-social-share {
			${separatorColor ? `border-top-color: ${separatorColor};` : ''}
		}
		.${uniqueId} .zolo-image-wrap img {
			${photoDeskBGStyle}
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoDeskPadding}
			${photoDeskMargin}
			${teamPhotoBoxShadow}
			${preset === 'style-3' ? `width: calc(100% - ${totalDeskWidth}px );` : ''}
		}
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-name a {
			${nameColor ? `color: ${nameColor};` : ''}
			${nameTypoDesk}
			${nameDeskMargin}
		}
		.${uniqueId} .zolo-designation {
			${designationColor ? `color: ${designationColor};` : ''}
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
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconColor ? `color: ${iconColor};` : ''}
			${iconsNormalDeskBG}
		}
		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverColor ? `color: ${iconHoverColor};` : ''}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}
		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconDesk}
		}
		.${uniqueId}.wp-block-zolo-team-member .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${detailPageIconColor ? `color: ${detailPageIconColor};` : ''}
		}
		.${uniqueId}.wp-block-zolo-team-member .zolo-link-btn a:hover {
			${detailPageIconHoverColor ? `color: ${detailPageIconHoverColor};` : ''}
			${detailPageHoverDeskBG}
		}
	`;

	const tabletAllStyle = `
		.${uniqueId} {
			${teamMemberContainerTabPadding}
			${teamMemberContainerTabMargin}
			${containerTabBGStyle}
		}
		.${uniqueId}.default .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
			${contentTabBGStyle}
		}
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamTabAlignStyle}
		}
		.${uniqueId} .zolo-social-share {
			${socialTabAlignStyle}
		}
		.${uniqueId} .zolo-image-wrap img {
			${photoTabBGStyle}
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabPadding}
			${photoTabMargin}
			${preset === 'style-3' ? `width: calc(100% - ${totalTabWidth}px );` : ''}
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
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}
		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a:hover {
			${iconsHoverTabBG}
		}
		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconTab}
		}
		.${uniqueId} .zolo-link-btn a {
			${detailPageNormalTabBG}
		}
		.${uniqueId} .zolo-link-btn a:hover {
			${detailPageHoverTabBG}
		}
	`;

	const mobileAllStyle = `
		.${uniqueId} {
			${teamMemberContainerMobPadding}
			${teamMemberContainerMobMargin}
			${containerMobBGStyle}
		}
		.${uniqueId}.default .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
			${contentMobBGStyle}
		}
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamMobAlignStyle}
		}
		.${uniqueId} .zolo-social-share {
			${socialMobAlignStyle}
		}
		.${uniqueId} .zolo-image-wrap img {
			${photoMobBGStyle}
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobPadding}
			${photoMobMargin}
			${preset === 'style-3' ? `width: calc(100% - ${totalMobWidth}px );` : ''}
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
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}
		.${uniqueId}.wp-block-zolo-team-member .zolo-social-share a:hover {
			${iconsHoverMobBG}
		}
		.${uniqueId} .zolo-social-share i, .${uniqueId} .zolo-social-share .dashicon {
			${socialIconMob}
		}
		.${uniqueId} .zolo-link-btn a {
			${detailPageNormalMobBG}
		}
		.${uniqueId} .zolo-link-btn a:hover {
			${detailPageHoverMobBG}
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
			</BlockControls>

			<div {...blockProps}>
				<div className="zolo-item">
					<div className="zolo-image-wrap">
						{memberPhoto ? (
							<img
								src={memberPhoto.url}
								alt={memberPhoto.alt || memberName}
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
													href={
														profile.link &&
														profile.link.url
													}
													key={index}
													rel={
														profile.link &&
														profile.link
															.openInNewTab &&
														'noreferer noopener'
													}
													target={
														profile.link &&
														profile.link
															.openInNewTab &&
														'_blank'
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
							{addDetailPageLink && showDetailPageIcon && (
								<div className="zolo-link-btn">
									<a
										href={
											memberDetailPageLink &&
											memberDetailPageLink.url
										}
										rel={
											memberDetailPageLink &&
											memberDetailPageLink.openInNewTab &&
											'noreferer noopener'
										}
										target={
											memberDetailPageLink &&
											memberDetailPageLink.openInNewTab &&
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
						{addDetailPageLink && showDetailPageIcon && (
							<div className="zolo-link-btn">
								<a
									href={
										memberDetailPageLink &&
										memberDetailPageLink.url
									}
									rel={
										memberDetailPageLink &&
										memberDetailPageLink.openInNewTab &&
										'noreferer noopener'
									}
									target={
										memberDetailPageLink &&
										memberDetailPageLink.openInNewTab &&
										'_blank'
									}
								>
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
