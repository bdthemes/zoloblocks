/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
} from '@wordpress/block-editor';
import { Fragment, useState, useEffect } from '@wordpress/element';

import {
	ToolbarButton,
	ToolbarGroup,
	Popover,
	Icon,
	Button,
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
	generateNormalBGControlStyles,
} = window.zoloModule;

import {
	BLOCK_PREFIX,
	HEADER_AREA_BORDER_RADIUS,
	HEADER_AREA_PADDING,
	HEADER_BADGE_BORDER,
	BADGE_BG,
	BADGE_BORDER_RADIUS,
	CONTENT_BORDER,
	CONTENT_PADDING,
	CONTENT_MARGIN,
	CONTENT_BG,
	CONTENT_BORDER_RADIUS,
	PHOTO_SIZE,
	PHOTO_BORDER,
	PHOTO_BORDER_RADIUS,
	NAME_MARGIN,
	USERNAME_MARGIN,
	EMAIL_MARGIN,
	BIO_MARGIN,
	STATUS_MARGIN,
	FBTN_BG,
	FBTN_BOX_SHADOW,
	FBTN_HOVER_BOX_SHADOW,
	FBTN_BORDER,
	FBTN_HOVER_BG,
	FBTN_BORDER_RADIUS,
	FBTN_MARGIN,
	FBTN_PADDING,
	ICONS_BG,
	ICONS_HOVER_BG,
	ICONS_BORDER,
	ICONS_BORDER_RADIUS,
	ICONS_PADDING,
	ICONS_MARGIN,
	ICONS_SIZE,
	ICONS_SPACING,
} from './constants';

import {
	BADGE_TYPO,
	BIO_TYPO,
	BTN_TYPO,
	EMAIL_TYPO,
	LABEL_TYPO,
	NUMBER_TYPO,
	PROFILE_NAME,
	PROFILE_USERNAME,
} from './constants/typoPrefixConstants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
		showBadge,
		badgeText,
		showPhoto,
		photo,
		showName,
		name,
		showUsername,
		username,
		showEmail,
		email,
		showBio,
		bio,
		showStatus,
		statusItems,
		showFollowButton,
		followButtonText,
		headerAreaBG,
		showDetailPageIcon,
		memberDetailPageLink,
		showSocialProfiles,
		socialProfiles,
		socialProfilesLinkTarget,
		badgeColor,
		nameColor,
		usernameColor,
		emailColor,
		bioColor,
		numberColor,
		labelColor,
		btnColor,
		btnHoverColor,
		btnHoverBorderColor,
		iconColor,
		iconHoverColor,
		iconHoverBorderColor,
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

	// Container
	// const {
	// 	backgroundStylesDesktop: containerDeskBGStyle,
	// 	backgroundStylesTab: containerTabBGStyle,
	// 	backgroundStylesMobile: containerMobBGStyle,
	// } = generateNormalBGControlStyles({
	// 	controlName: CONTAINER_BG,
	// 	attributes,
	// 	noMainBGImg: false,
	// });

	// header area part
	const {
		dimensionStylesDesktop: headerAreaDeskBorderRadius,
		dimensionStylesTab: headerAreaTabBorderRadius,
		dimensionStylesMobile: headerAreaMobBorderRadius,
	} = generateDimensionStyle({
		controlName: HEADER_AREA_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const {
		desktopRangeStyle: headerAreaDeskPadding,
		tabRangeStyle: headerAreaTabPadding,
		mobRangeStyle: headerAreaMobPadding,
	} = generateResRangeStyle({
		controlName: HEADER_AREA_PADDING,
		property: 'padding-bottom',
		attributes,
	});

	// header badge
	const {
		desktopBorderStyle: headerBadgeDeskBorderStyle,
		tabBorderStyle: headerBadgeTabBorderStyle,
		mobBorderStyle: headerBadgeMobBorderStyle,
	} = generateBorderStyle({
		controlName: HEADER_BADGE_BORDER,
		attributes,
	});

	const {
		backgroundStylesDesktop: headerBadgeBgDeskStyle,
		backgroundStylesTab: headerBadgeBgTabStyle,
		backgroundStylesMobile: headerBadgeBgMobStyle,
	} = generateNormalBGControlStyles({
		controlName: BADGE_BG,
		attributes,
		noMainBGImg: true,
	});

	const {
		dimensionStylesDesktop: headerBadgeDeskBorderRadius,
		dimensionStylesTab: headerBadgeTabBorderRadius,
		dimensionStylesMobile: headerBadgeMobBorderRadius,
	} = generateDimensionStyle({
		controlName: BADGE_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const {
		typoStylesDesktop: badgeTypoDesk,
		typoStylesTab: badgeTypoTab,
		typoStylesMobile: badgeTypoMob,
	} = generateTypographyStyles({
		prefixConstant: BADGE_TYPO,
		defaultFontSize: 11,
		attributes,
	});

	// Content area
	const {
		backgroundStylesDesktop: contentDeskBGStyle,
		backgroundStylesTab: contentTabBGStyle,
		backgroundStylesMobile: contentMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: CONTENT_BG,
		attributes,
		noMainBGImg: false,
	});

	const {
		desktopBorderStyle: contentBorderStyleDesk,
		tabBorderStyle: contentBorderStyleTab,
		mobBorderStyle: contentBorderStyleMob,
	} = generateBorderStyle({
		controlName: CONTENT_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: contentBorderRadiusDesk,
		dimensionStylesTab: contentBorderRadiusTab,
		dimensionStylesMobile: contentBorderRadiusMob,
	} = generateDimensionStyle({
		controlName: CONTENT_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const {
		dimensionStylesDesktop: contentPaddingDesk,
		dimensionStylesTab: contentPaddingTab,
		dimensionStylesMobile: contentPaddingMob,
	} = generateDimensionStyle({
		controlName: CONTENT_PADDING,
		styleFor: 'padding',
		attributes,
	});

	const {
		dimensionStylesDesktop: contentMarginDesk,
		dimensionStylesTab: contentMarginTab,
		dimensionStylesMobile: contentMarginMob,
	} = generateDimensionStyle({
		controlName: CONTENT_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Photo
	const {
		desktopRangeStyle: photoDeskWidth,
		tabRangeStyle: photoTabWidth,
		mobRangeStyle: photoMobWidth,
	} = generateResRangeStyle({
		controlName: PHOTO_SIZE,
		property: 'width',
		attributes,
	});

	const {
		desktopRangeStyle: photoDeskHeight,
		tabRangeStyle: photoTabHeight,
		mobRangeStyle: photoMobHeight,
	} = generateResRangeStyle({
		controlName: PHOTO_SIZE,
		property: 'height',
		attributes,
	});

	const {
		desktopBorderStyle: photoDeskBorderStyle,
		tabBorderStyle: photoTabBorderStyle,
		mobBorderStyle: photoMobBorderStyle,
	} = generateBorderStyle({
		controlName: PHOTO_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: photoDeskBorderRadius,
		dimensionStylesTab: photoTabBorderRadius,
		dimensionStylesMobile: photoMobBorderRadius,
	} = generateDimensionStyle({
		controlName: PHOTO_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	// name
	const {
		typoStylesDesktop: nameTypoDesk,
		typoStylesTab: nameTypoTab,
		typoStylesMobile: nameTypoMob,
	} = generateTypographyStyles({
		prefixConstant: PROFILE_NAME,
		defaultFontSize: 28,
		attributes,
	});

	const {
		dimensionStylesDesktop: nameDeskMargin,
		dimensionStylesTab: nameTabMargin,
		dimensionStylesMobile: nameMobMargin,
	} = generateDimensionStyle({
		controlName: NAME_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// username
	const {
		typoStylesDesktop: userNameTypoDesk,
		typoStylesTab: userNameTypoTab,
		typoStylesMobile: userNameTypoMob,
	} = generateTypographyStyles({
		prefixConstant: PROFILE_USERNAME,
		defaultFontSize: 18,
		attributes,
	});

	const {
		dimensionStylesDesktop: userNameDeskMargin,
		dimensionStylesTab: userNameTabMargin,
		dimensionStylesMobile: userNameMobMargin,
	} = generateDimensionStyle({
		controlName: USERNAME_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// email
	const {
		typoStylesDesktop: emailTypoDesk,
		typoStylesTab: emailTypoTab,
		typoStylesMobile: emailTypoMob,
	} = generateTypographyStyles({
		prefixConstant: EMAIL_TYPO,
		defaultFontSize: 18,
		attributes,
	});

	const {
		dimensionStylesDesktop: emailDeskMargin,
		dimensionStylesTab: emailTabMargin,
		dimensionStylesMobile: emailMobMargin,
	} = generateDimensionStyle({
		controlName: EMAIL_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// bio
	const {
		typoStylesDesktop: bioTypoDesk,
		typoStylesTab: bioTypoTab,
		typoStylesMobile: bioTypoMob,
	} = generateTypographyStyles({
		prefixConstant: BIO_TYPO,
		defaultFontSize: 18,
		attributes,
	});

	const {
		dimensionStylesDesktop: bioDeskMargin,
		dimensionStylesTab: bioTabMargin,
		dimensionStylesMobile: bioMobMargin,
	} = generateDimensionStyle({
		controlName: BIO_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// status: Number
	const {
		typoStylesDesktop: counterTypoDesk,
		typoStylesTab: counterTypoTab,
		typoStylesMobile: counterTypoMob,
	} = generateTypographyStyles({
		prefixConstant: NUMBER_TYPO,
		defaultFontSize: 18,
		attributes,
	});

	// status: Label
	const {
		typoStylesDesktop: labelTypoDesk,
		typoStylesTab: labelTypoTab,
		typoStylesMobile: labelTypoMob,
	} = generateTypographyStyles({
		prefixConstant: LABEL_TYPO,
		defaultFontSize: 14,
		attributes,
	});

	// status container
	const {
		dimensionStylesDesktop: statusDeskMargin,
		dimensionStylesTab: statusTabMargin,
		dimensionStylesMobile: statusMobMargin,
	} = generateDimensionStyle({
		controlName: STATUS_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	// Follow Button
	const {
		typoStylesDesktop: btnTypoDesk,
		typoStylesTab: btnTypoTab,
		typoStylesMobile: btnTypoMob,
	} = generateTypographyStyles({
		prefixConstant: BTN_TYPO,
		defaultFontSize: 12,
		attributes,
	});

	const {
		backgroundStylesDesktop: btnDeskBGStyle,
		backgroundStylesTab: btnTabBGStyle,
		backgroundStylesMobile: btnMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: FBTN_BG,
		attributes,
		noMainBGImg: false,
	});

	const {
		backgroundStylesDesktop: btnHoverDeskBGStyle,
		backgroundStylesTab: btnHoverTabBGStyle,
		backgroundStylesMobile: btnHoverMobBGStyle,
	} = generateNormalBGControlStyles({
		controlName: FBTN_HOVER_BG,
		attributes,
		noMainBGImg: false,
	});

	const { boxShadowStyle: btnBoxShadow } = generateBoxShadowStyles({
		attributes,
		controlName: FBTN_BOX_SHADOW,
	});

	const { boxShadowStyle: btnHoverBoxShadow } = generateBoxShadowStyles({
		attributes,
		controlName: FBTN_HOVER_BOX_SHADOW,
	});

	const {
		desktopBorderStyle: btnDeskBorderStyle,
		tabBorderStyle: btnTabBorderStyle,
		mobBorderStyle: btnMobBorderStyle,
	} = generateBorderStyle({
		controlName: FBTN_BORDER,
		attributes,
	});

	const {
		dimensionStylesDesktop: btnDeskBorderRadius,
		dimensionStylesTab: btnTabBorderRadius,
		dimensionStylesMobile: btnMobBorderRadius,
	} = generateDimensionStyle({
		controlName: FBTN_BORDER_RADIUS,
		styleFor: 'border-radius',
		attributes,
	});

	const {
		dimensionStylesDesktop: btnDeskPadding,
		dimensionStylesTab: btnTabPadding,
		dimensionStylesMobile: btnMobPadding,
	} = generateDimensionStyle({
		controlName: FBTN_PADDING,
		styleFor: 'padding',
		attributes,
	});

	const {
		dimensionStylesDesktop: btnDeskMargin,
		dimensionStylesTab: btnTabMargin,
		dimensionStylesMobile: btnMobMargin,
	} = generateDimensionStyle({
		controlName: FBTN_MARGIN,
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

	const {
		dimensionStylesDesktop: socialIconsMarginDesk,
		dimensionStylesTab: socialIconsMarginTab,
		dimensionStylesMobile: socialIconsMarginMob,
	} = generateDimensionStyle({
		controlName: ICONS_MARGIN,
		styleFor: 'margin',
		attributes,
	});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = `
		.${uniqueId} .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.${uniqueId} .zb-profile-header-content {
			background: ${headerAreaBG ? headerAreaBG : ''};
		}
		.${uniqueId} .zb-profile-header-content {
			background: ${headerAreaBG ? headerAreaBG : ''}; 
			${headerAreaDeskPadding}
			${headerAreaDeskBorderRadius}
		}
		.${uniqueId} .zb-profile-badge {
			color: ${badgeColor ? badgeColor : ''};
			${headerBadgeDeskBorderStyle}
			${headerBadgeBgDeskStyle}
			${headerBadgeDeskBorderRadius}
			${badgeTypoDesk}
		}
		.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			color: ${nameColor ? nameColor : ''};
			${nameTypoDesk}
			${nameDeskMargin}
		}
		.${uniqueId} .zb-profile-username{
			color: ${usernameColor ? usernameColor : ''};
			${userNameTypoDesk}
			${userNameDeskMargin}
		}
		.${uniqueId} .zb-profile-email {
			color: ${emailColor ? emailColor : ''};
			${emailTypoDesk}
			${emailDeskMargin}
		}
		.${uniqueId} .zb-profile-card-bio {
			color: ${bioColor ? bioColor : ''};
			${bioTypoDesk}
			${bioDeskMargin}
		}
		.${uniqueId} .zb-profile-status-count {
			color: ${numberColor ? numberColor : ''};
			${counterTypoDesk}
		}
		.${uniqueId} .zb-profile-status-text {
			color: ${labelColor ? labelColor : ''};
			${labelTypoDesk}
		}
		.${uniqueId} .zb-profile-fllow-btn {
			color: ${btnColor ? btnColor : ''};
			${btnTypoDesk}
			${btnDeskBGStyle}
			${btnDeskBorderRadius}
			${btnDeskBorderStyle}
			${btnDeskPadding}
			${btnDeskMargin}
			${btnBoxShadow}
		}
		.${uniqueId} .zb-profile-fllow-btn:hover {
			color: ${btnHoverColor ? btnHoverColor : ''};
			border-color: ${btnHoverBorderColor ? btnHoverBorderColor : ''};
			${btnHoverDeskBGStyle}
			${btnHoverBoxShadow}
		}
		.${uniqueId} .zb-profile-socail-share a {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${iconColor ? `color: ${iconColor};` : ''}
			${iconsNormalDeskBG}
		}
		.${uniqueId} .zb-profile-socail-share a:hover {
			${iconHoverColor ? `color: ${iconHoverColor};` : ''}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}
		.${uniqueId} .zb-profile-socail-share {
			${socialIconsGapDesk}
			${socialIconsMarginDesk}
		}
		.${uniqueId} .zb-profile-socail-share i, .${uniqueId} .zb-profile-socail-share .dashicon {
			${socialIconDesk}
		}
		.${uniqueId} .zb-profile-status {
			${statusDeskMargin}
		}
		.${uniqueId} .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.${uniqueId} .zb-profile-bottom-content {
			${contentDeskBGStyle}
			${contentBorderRadiusDesk}
			${contentBorderStyleDesk}
			${contentPaddingDesk}
			${contentMarginDesk}
		}
	`;

	const tabletAllStyle = `
		.${uniqueId} .zb-profile-header-content {
			${headerAreaTabPadding}
			${headerAreaTabBorderRadius}
		}
		.${uniqueId} .zb-profile-badge {
			${headerBadgeTabBorderStyle}
			${headerBadgeBgTabStyle}
			${headerBadgeTabBorderRadius}
			${badgeTypoTab}
		}
		.${uniqueId} .zb-profile-bottom-content {
			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
		.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.${uniqueId} .zb-profile-username{
			${userNameTypoTab}
			${userNameTabMargin}
		}
		.${uniqueId} .zb-profile-email {
			${emailTypoTab}
			${emailTabMargin}
		}
		.${uniqueId} .zb-profile-card-bio {
			${bioTypoTab}
			${bioTabMargin}
		}
		.${uniqueId} .zb-profile-fllow-btn {
			${btnTypoTab}
			${btnTabBGStyle}
			${btnTabBorderRadius}
			${btnTabBorderStyle}
			${btnTabPadding}
			${btnTabMargin}
		}
		.${uniqueId} .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.${uniqueId} .zb-profile-status {
			${statusTabMargin}
		}
		.${uniqueId} .zb-profile-status-count {
			${counterTypoTab}
		}
		.${uniqueId} .zb-profile-status-text {
			${labelTypoTab}
		}
		.${uniqueId} .zb-profile-socail-share a {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}
		.${uniqueId} .zb-profile-socail-share a:hover {
			${iconsHoverTabBG}
		}
		.${uniqueId} .zb-profile-socail-share {
			${socialIconsGapTab}
			${socialIconsMarginTab}
		}
		.${uniqueId} .zb-profile-socail-share i, .${uniqueId} .zb-profile-socail-share .dashicon {
			${socialIconTab}
		}
		.${uniqueId} .zb-profile-image img {
			${photoTabWidth}
			${photoTabHeight}
			${photoTabBorderRadius}
			${photoTabBorderStyle}
		}
		.${uniqueId} .zb-profile-bottom-content {
			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
	`;

	const mobileAllStyle = `
		.${uniqueId} .zb-profile-header-content {
			${headerAreaMobPadding}
			${headerAreaMobBorderRadius}
		}
		.${uniqueId} .zb-profile-badge {
			${headerBadgeMobBorderStyle}
			${headerBadgeBgMobStyle}
			${headerBadgeMobBorderRadius}
			${badgeTypoMob}
		}
		.${uniqueId} .zb-profile-bottom-content {
			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
		.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId} .zb-profile-username{
			${userNameTypoMob}
			${userNameMobMargin}
		}
		.${uniqueId} .zb-profile-email {
			${emailTypoMob}
			${emailMobMargin}
		}
		.${uniqueId} .zb-profile-card-bio {
			${bioTypoMob}
			${bioMobMargin}
		}
		.${uniqueId} .zb-profile-fllow-btn {
			${btnTypoMob}
			${btnMobBGStyle}
			${btnMobBorderRadius}
			${btnMobBorderStyle}
			${btnMobPadding}
			${btnMobMargin}
		}
		.${uniqueId} .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.${uniqueId} .zb-profile-status {
			${statusMobMargin}
		}
		.${uniqueId} .zb-profile-status-count {
			${counterTypoMob}
		}
		.${uniqueId} .zb-profile-status-text {
			${labelTypoMob}
		}
		.${uniqueId} .zb-profile-socail-share a {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}
		.${uniqueId} .zb-profile-socail-share a:hover {
			${iconsHoverMobBG}
		}
		.${uniqueId} .zb-profile-socail-share {
			${socialIconsGapMob}
			${socialIconsMarginMob}
		}
		.${uniqueId} .zb-profile-socail-share i, .${uniqueId} .zb-profile-socail-share .dashicon {
			${socialIconMob}
		}
		.${uniqueId} .zb-profile-image img {
			${photoMobWidth}
			${photoMobHeight}
			${photoMobBorderRadius}
			${photoMobBorderStyle}
		}
		.${uniqueId} .zb-profile-bottom-content {
			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
	`;

	// const allStyle = `
	// 	${desktopAllStyle}
	// 	${tabletAllStyle}
	// 	${mobileAllStyle}
	// `;

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
			<style>
				{`
					/* desktopcssStart */
					${softMinifyCssStrings(desktopAllStyle)}
					/* desktopcssEnd */

					@media all and (max-width: 1024px) {
						/* tabcssStart */
						${softMinifyCssStrings(tabletAllStyle)}
						/* tabcssEnd */
					}

					@media all and (max-width: 767px) {
						/* mobcssStart */
						${softMinifyCssStrings(mobileAllStyle)}
						/* mobcssEnd */
					}
				`}
			</style>

			<BlockControls>
				{photo && (
					<Fragment>
						<ToolbarGroup>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										photo: media,
									});
								}}
								allowedTypes={['image']}
								value={photo && photo.id}
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
										photo: null,
									});
								}}
							/>
						</ToolbarGroup>
					</Fragment>
				)}
				{showDetailPageIcon && (
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
				<div className="zb-profile-item">
					<div className="zb-profile-header-content">
						{showBadge && (
							<div className="zb-profile-badge">
								<span>{badgeText}</span>
							</div>
						)}
					</div>
					<div className="zb-profile-bottom-content">
						<div className="zb-profile-meta-wrap">
							{showPhoto && (
								<div className="zb-profile-image">
									{photo ? (
										<img
											src={photo.url}
											alt={photo.alt || 'profile card'}
										/>
									) : (
										<MediaUpload
											onSelect={(media) => {
												setAttributes({
													photo: media,
												});
											}}
											allowedTypes={['image']}
											value={photo && photo.id}
											render={({ open }) => (
												<Button
													className="components-button button button-large"
													onClick={open}
												>
													{__(
														'Upload Photo',
														'zolo-blocks'
													)}
												</Button>
											)}
										/>
									)}
								</div>
							)}
							<div className="zb-profile-info">
								{showName && (
									<a className="zb-profile-name" href="#">
										<RichText
											tagName="span"
											value={name}
											onChange={(content) =>
												setAttributes({ name: content })
											}
											placeholder={__(
												'Name',
												'zolo-blocks'
											)}
										/>
									</a>
								)}
								{showUsername && (
									<div className="zb-profile-username">
										<RichText
											tagName="span"
											value={username}
											onChange={(content) =>
												setAttributes({
													username: content,
												})
											}
											placeholder={__(
												'Username',
												'zolo-blocks'
											)}
										/>
									</div>
								)}
								{showEmail && (
									<div className="zb-profile-email">
										<RichText
											tagName="span"
											value={email}
											onChange={(content) =>
												setAttributes({
													email: content,
												})
											}
											placeholder={__(
												'Email',
												'zolo-blocks'
											)}
										/>
									</div>
								)}
							</div>
						</div>
						{showBio && (
							<div className="zb-profile-card-bio">
								<RichText
									tagName="p"
									value={bio}
									onChange={(content) =>
										setAttributes({ bio: content })
									}
									placeholder={__('Bio', 'zolo-blocks')}
								/>
							</div>
						)}
						{showStatus && (
							<div className="zb-profile-status">
								{statusItems &&
									statusItems.length > 0 &&
									statusItems.map((item, index) => {
										return (
											<div
												className="zb-profile-status-item"
												key={index}
											>
												<RichText
													tagName="span"
													className="zb-profile-status-count"
													value={item && item.number}
													onChange={(content) => {
														let newStatusItems = [
															...statusItems,
														];
														newStatusItems[
															index
														].number = content;
														setAttributes({
															statusItems:
																newStatusItems,
														});
													}}
													placeholder={__(
														'Number',
														'zolo-blocks'
													)}
													allowedFormats={[
														'core/bold',
														'core/italic',
													]}
												/>
												<RichText
													tagName="span"
													className="zb-profile-status-text"
													value={item && item.label}
													onChange={(content) => {
														let newStatusItems = [
															...statusItems,
														];
														newStatusItems[
															index
														].label = content;
														setAttributes({
															statusItems:
																newStatusItems,
														});
													}}
													placeholder={__(
														'Label',
														'zolo-blocks'
													)}
													allowedFormats={[
														'core/bold',
														'core/italic',
													]}
												/>
											</div>
										);
									})}
							</div>
						)}

						<div className="zb-profile-socail-and-fllow">
							{showFollowButton && (
								<RichText
									tagName="span"
									className="zb-profile-fllow-btn"
									value={followButtonText}
									onChange={(content) =>
										setAttributes({
											followButtonText: content,
										})
									}
									placeholder={__('Follow', 'zolo-blocks')}
								/>
							)}
							{showSocialProfiles && (
								<div className="zb-profile-socail-share">
									{socialProfiles &&
										socialProfiles.map((profile, index) => {
											return (
												<a
													href={profile.link}
													key={index}
													rel={
														socialProfilesLinkTarget &&
														'noopener noreferer'
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
