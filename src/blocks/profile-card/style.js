/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    HEADER_AREA_BORDER_RADIUS,
    HEADER_AREA_PADDING,
    HEADER_BADGE_BORDER,
    HEADER_AREA_BG,
    BADGE_PADDING,
    BADGE_MARGIN,
    BADGE_BG,
    BADGE_BORDER_RADIUS,
    CONTENT_BORDER,
    CONTENT_PADDING,
    INNER_CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BG,
    CONTENT_BORDER_RADIUS,
    PHOTO_VOFFSET,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_BORDER_RADIUS,
    META_WRAP_MARGIN,
    NAME_MARGIN,
    USERNAME_MARGIN,
    EMAIL_MARGIN,
    BIO_MARGIN,
    STATUS_GAP,
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

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
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

    const { active = false, blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

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
        dimensionStylesDesktop: headerAreaDeskPadding,
        dimensionStylesTab: headerAreaTabPadding,
        dimensionStylesMobile: headerAreaMobPadding,
    } = generateDimensionStyle({
        controlName: HEADER_AREA_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        backgroundStylesDesktop: headerAreaBgDeskStyle,
        backgroundStylesTab: headerAreaBgTabStyle,
        backgroundStylesMobile: headerAreaBgMobStyle,
    } = generateNormalBGControlStyles({
        controlName: HEADER_AREA_BG,
        attributes,
        noMainBGImg: true,
    });

    // header badge
    const {
        dimensionStylesDesktop: badgeDeskPadding,
        dimensionStylesTab: badgeTabPadding,
        dimensionStylesMobile: badgeMobPadding,
    } = generateDimensionStyle({
        controlName: BADGE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: badgeDeskMargin,
        dimensionStylesTab: badgeTabMargin,
        dimensionStylesMobile: badgeMobMargin,
    } = generateDimensionStyle({
        controlName: BADGE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

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

    const {
        dimensionStylesDesktop: innerContentPaddingDesk,
        dimensionStylesTab: innerContentPaddingTab,
        dimensionStylesMobile: innerContentPaddingMob,
    } = generateDimensionStyle({
        controlName: INNER_CONTENT_PADDING,
        styleFor: 'padding',
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
        desktopRangeStyle: photoDeskOffset,
        tabRangeStyle: photoTabOffset,
        mobRangeStyle: photoMobOffset,
    } = generateResRangeStyle({
        controlName: PHOTO_VOFFSET,
        property: 'margin-top',
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

    const {
        dimensionStylesDesktop: metaWrapMarginDesk,
        dimensionStylesTab: metaWrapMarginTab,
        dimensionStylesMobile: metaWrapMarginMob,
    } = generateDimensionStyle({
        controlName: META_WRAP_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // name
    const {
        typoStylesDesktop: nameTypoDesk,
        typoStylesTab: nameTypoTab,
        typoStylesMobile: nameTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PROFILE_NAME,
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

    // status gap
    const {
        desktopRangeStyle: statusDeskGap,
        tabRangeStyle: statusTabGap,
        mobRangeStyle: statusMobGap,
    } = generateResRangeStyle({
        controlName: STATUS_GAP,
        property: 'gap',
        attributes,
    });

    // status: Number
    const {
        typoStylesDesktop: counterTypoDesk,
        typoStylesTab: counterTypoTab,
        typoStylesMobile: counterTypoMob,
    } = generateTypographyStyles({
        prefixConstant: NUMBER_TYPO,
        attributes,
    });

    // status: Label
    const {
        typoStylesDesktop: labelTypoDesk,
        typoStylesTab: labelTypoTab,
        typoStylesMobile: labelTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LABEL_TYPO,
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
        ${
            preset !== 'style-1'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                    ${photoDeskWidth}
                    ${photoDeskHeight}
                    ${photoDeskBorderRadius}
                    ${photoDeskBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoDeskOffset}
                }
        
            `
                : ''
        }

        ${
            preset === 'style-1'
                ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                       ${photoDeskWidth}
                       ${photoDeskHeight}
                       ${photoDeskBorderRadius}
                       ${photoDeskBorderStyle}
                   }
               `
                : ''
        }


		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
			${photoDeskOffset}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgDeskStyle}
			${headerAreaDeskPadding}
			${headerAreaDeskBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			color: ${badgeColor ? badgeColor : ''};
			${headerBadgeDeskBorderStyle}
			${headerBadgeBgDeskStyle}
			${headerBadgeDeskBorderRadius}
			${badgeTypoDesk}
			${badgeDeskPadding}
		}

        ${
            preset === 'style-1'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeDeskMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginDesk}
                }

                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingDesk}
                }
            `
                : ''
        }

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			color: ${nameColor ? nameColor : ''};
			${nameTypoDesk}
			${nameDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			color: ${usernameColor ? usernameColor : ''};
			${userNameTypoDesk}
			${userNameDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			color: ${emailColor ? emailColor : ''};
			${emailTypoDesk}
			${emailDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			color: ${bioColor ? bioColor : ''};
			${bioTypoDesk}
			${bioDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusDeskGap}
			${statusDeskMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			color: ${numberColor ? numberColor : ''};
			${counterTypoDesk}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			color: ${labelColor ? labelColor : ''};
			${labelTypoDesk}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			color: ${btnColor ? btnColor : ''};
			${btnTypoDesk}
			${btnDeskBGStyle}
			${btnDeskBorderRadius}
			${btnDeskBorderStyle}
			${btnDeskPadding}
			${btnDeskMargin}
			${btnBoxShadow}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			color: ${btnHoverColor ? btnHoverColor : ''};
			border-color: ${btnHoverBorderColor ? btnHoverBorderColor : ''};
			${btnHoverDeskBGStyle}
			${btnHoverBoxShadow}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${iconsNormalDeskBG}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}

        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover svg{
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }

        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapDesk}
			${socialIconsMarginDesk}
		}

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoDeskWidth}
			${photoDeskHeight}
			${photoDeskBorderRadius}
			${photoDeskBorderStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {
			${contentDeskBGStyle}
			${contentBorderRadiusDesk}
			${contentBorderStyleDesk}
			${contentPaddingDesk}
			${contentMarginDesk}
		}

        ${
            active
                ? `
                    .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
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
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgTabStyle}
			${headerAreaTabPadding}
			${headerAreaTabBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			${headerBadgeTabBorderStyle}
			${headerBadgeBgTabStyle}
			${headerBadgeTabBorderRadius}
			${badgeTypoTab}
			${badgeTabPadding}
		}

         ${
             preset === 'style-1'
                 ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeTabMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginTab}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingTab}
                }
            `
                 : ''
         }

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoTab}
			${nameTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			${userNameTypoTab}
			${userNameTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			${emailTypoTab}
			${emailTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			${bioTypoTab}
			${bioTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			${btnTypoTab}
			${btnTabBGStyle}
			${btnTabBorderRadius}
			${btnTabBorderStyle}
			${btnTabPadding}
			${btnTabMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusTabMargin}
			${statusTabGap}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			${counterTypoTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			${labelTypoTab}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconsHoverTabBG}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapTab}
			${socialIconsMarginTab}
		}

        ${
            preset !== 'style-1'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                   ${photoTabWidth}
                    ${photoTabHeight}
                    ${photoTabBorderRadius}
                    ${photoTabBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoTabOffset}
                }
            `
                : ''
        }

        ${
            preset === 'style-1'
                ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                      ${photoTabWidth}
                      ${photoTabHeight}
                      ${photoTabBorderRadius}
                      ${photoTabBorderStyle}
                   }
                 .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginTab}
                 }
               `
                : ''
        }



		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentTabBGStyle}
			${contentBorderRadiusTab}
			${contentBorderStyleTab}
			${contentPaddingTab}
			${contentMarginTab}
		}
	`;

    const mobileAllStyle = `
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-header-content {
			${headerAreaBgMobStyle}
			${headerAreaMobPadding}
			${headerAreaMobBorderRadius}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-badge {
			${headerBadgeMobBorderStyle}
			${headerBadgeBgMobStyle}
			${headerBadgeMobBorderRadius}
			${badgeTypoMob}
			${badgeMobPadding}
		}

         ${
             preset === 'style-1'
                 ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-badge {
                    ${badgeMobMargin}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-info {
                   ${metaWrapMarginMob}
                }
               .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-inner-content {
                    ${innerContentPaddingMob}
                }
            `
                 : ''
         }

		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {

			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-username{
			${userNameTypoMob}
			${userNameMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-email {
			${emailTypoMob}
			${emailMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-card-bio {
			${bioTypoMob}
			${bioMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn {
			${btnTypoMob}
			${btnMobBGStyle}
			${btnMobBorderRadius}
			${btnMobBorderStyle}
			${btnMobPadding}
			${btnMobMargin}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-fllow-btn:hover {
			${btnHoverTabBGStyle}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status {
			${statusMobMargin}
			${statusMobGap}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-count {
			${counterTypoMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-status-text {
			${labelTypoMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}
        .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share svg {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
        }
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share a:hover {
			${iconsHoverMobBG}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-socail-share {
			${socialIconsGapMob}
			${socialIconsMarginMob}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoMobOffset}
		}
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
			${photoMobWidth}
			${photoMobHeight}
			${photoMobBorderRadius}
			${photoMobBorderStyle}
		}

        ${
            preset !== 'style-1'
                ? `
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image img {
                    ${photoMobWidth}
                    ${photoMobHeight}
                    ${photoMobBorderRadius}
                    ${photoMobBorderStyle}
                }
                .zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-image {
                    ${photoMobOffset}
                }
            `
                : ''
        }

        ${
            preset === 'style-1'
                ? `
                   .zolo-block.${uniqueId}.wp-block-zolo-profile-card.style-1 .zb-profile-image {
                        ${photoMobWidth}
                        ${photoMobHeight}
                        ${photoMobBorderRadius}
                        ${photoMobBorderStyle}
                   }
               `
                : ''
        }
		.zolo-block.${uniqueId}.wp-block-zolo-profile-card .zb-profile-bottom-content {
			${contentMobBGStyle}
			${contentBorderRadiusMob}
			${contentBorderStyleMob}
			${contentPaddingMob}
			${contentMarginMob}
		}
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.profileCard.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.profileCard.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.profileCard.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
