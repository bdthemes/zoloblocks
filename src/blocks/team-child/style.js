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
    generateGapStyle,
} = window.zoloModule;

import {
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_PADDING,
    ICONS_MARGIN,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_CONTAINER_MARGIN,
    ICONS_CONTAINER_PADDING,
    TEAM_DESIGNATION_MARGIN,
    TEAM_NAME_MARGIN,
    PHOTO_BG,
    PHOTO_SIZE,
    TEAM_PHOTO_BORDER,
    TEAM_PHOTO_BORDER_RADIUS,
    TEAM_PHOTO_BOX_SHADOW,
    TEAM_PHOTO_MARGIN,
    TEAM_PHOTO_PADDING,
    IMAGE_OVERLAY,
    TEAM_SHORT_BIO_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    TEAM_MEMBER_CONTAINER_PADDING,
    TEAM_MEMBER_CONTAINER_MARGIN,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    SEPARATOR_TEAM_SIZE,
    SEPARATOR_SPACING_TEAM,
} from './constants';

import {
    TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    TEAM_MEMBER_NAME_TYPOGRAPHY,
    TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        nameColor,
        designationColor,
        separatorTeamColor,
        shortBioColor,
        separatorColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        detailPageIconColor,
        detailPageIconHoverColor,
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

    // item
    const {
        backgroundStylesDesktop: itemDeskBg,
        backgroundStylesTab: itemTabBg,
        backgroundStylesMobile: itemMobBg,
    } = generateNormalBGControlStyles({
        controlName: ITEM_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: itemBorderDeskStyle,
        tabBorderStyle: itemBorderTabStyle,
        mobBorderStyle: itemBorderMobStyle,
    } = generateBorderStyle({
        controlName: ITEM_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: itemDeskBorderRadius,
        dimensionStylesTab: itemTabBorderRadius,
        dimensionStylesMobile: itemMobBorderRadius,
    } = generateDimensionStyle({
        controlName: ITEM_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: itemBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ITEM_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: itemDeskPadding,
        dimensionStylesTab: itemTabPadding,
        dimensionStylesMobile: itemMobPadding,
    } = generateDimensionStyle({
        controlName: ITEM_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: itemDeskMargin,
        dimensionStylesTab: itemTabMargin,
        dimensionStylesMobile: itemMobMargin,
    } = generateDimensionStyle({
        controlName: ITEM_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // content
    const {
        backgroundStylesDesktop: contentDeskBg,
        backgroundStylesTab: contentTabBg,
        backgroundStylesMobile: contentMobBg,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: contentBorderDeskStyle,
        tabBorderStyle: contentBorderTabStyle,
        mobBorderStyle: contentBorderMobStyle,
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
        dimensionStylesDesktop: contentDeskPadding,
        dimensionStylesTab: contentTabPadding,
        dimensionStylesMobile: contentMobPadding,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
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

    const {
        backgroundStylesDesktop: imageDeskOverlayStyle,
        backgroundStylesTab: imageTabOverlayStyle,
        backgroundStylesMobile: imageMobOverlayStyle,
    } = generateNormalBGControlStyles({
        controlName: IMAGE_OVERLAY,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: photoDeskSize,
        tabRangeStyle: photoTabSize,
        mobRangeStyle: photoMobSize,
    } = generateResRangeStyle({
        controlName: PHOTO_SIZE,
        property: 'width',
        attributes,
    });

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

    const {
        dimensionStylesDesktop: socialContainerDeskPadding,
        dimensionStylesTab: socialContainerTabPadding,
        dimensionStylesMobile: socialContainerMobPadding,
    } = generateDimensionStyle({
        controlName: ICONS_CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: socialContainerDeskMargin,
        dimensionStylesTab: socialContainerTabMargin,
        dimensionStylesMobile: socialContainerMobMargin,
    } = generateDimensionStyle({
        controlName: ICONS_CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

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

    const { boxShadowStyle: socialIconNormalBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICONS_BOX_SHADOW,
    });

    const { boxShadowStyle: socialIconHoverBoxShadow } = generateBoxShadowStyles({
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
        desktopRangeStyle: separatorWidthTeamDeskSize,
        tabRangeStyle: separatorWidthTeamTabSize,
        mobRangeStyle: separatorWidthTeamMobSize,
    } = generateResRangeStyle({
        controlName: SEPARATOR_TEAM_SIZE,
        property: ' width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorHeightTeamDeskSize,
        tabRangeStyle: separatorHeightTeamTabSize,
        mobRangeStyle: separatorHeightTeamMobSize,
    } = generateResRangeStyle({
        controlName: SEPARATOR_TEAM_SIZE,
        property: ' height',
        attributes,
    });

    const {
        gapStylesDesktop: deskSeparatorSpacingTeam,
        gapStylesTab: tabSeparatorSpacingTeam,
        gapStylesMobile: mobSeparatorSpacingTeam,
    } = generateGapStyle({
        controlName: SEPARATOR_SPACING_TEAM,
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerDeskPadding}
			${teamMemberContainerDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentDeskBg}
			${contentBorderDeskStyle}
			${contentDeskBorderRadius}
			${contentDeskPadding}
			${contentDeskMargin}
			${contentBoxShadow}
		}
       .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-social-and-link-wrap{
			${separatorColor ? `border-top-color: ${separatorColor};` : ''}
		}
		
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap {
			${photoDeskMargin}
            
        }
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoDeskSize}
			${photoDeskBGStyle}
			${photoDeskBorderStyle}
			${photoDeskPadding}
			${teamPhotoBoxShadow}
		}

        ${
            preset === 'style-5'
                ? `
                       .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-5 .zolo-image-wrap:before {
                            ${imageDeskOverlayStyle}
                        }
            `
                : ''
        }


		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
			${photoDeskBorderRadius}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationColor ? `color: ${designationColor};` : ''}
			${designationTypoDesk}
			${designationDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
			${separatorTeamColor ? `background-color: ${separatorTeamColor};` : ''};
            ${separatorWidthTeamDeskSize}
            ${separatorHeightTeamDeskSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${deskSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioColor && shortBioColor !== '' ? `color: ${shortBioColor};` : ''}
			${shortBioTypoDesk}
			${shortBioDeskMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.default .zolo-social-and-link-wrap {
            ${socialContainerDeskPadding}
            ${socialContainerDeskMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapDesk}
		}

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginDesk}
            }
            `
                : ''
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconsNormalDeskBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover svg{
			${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
		
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
			${detailPageIconColor ? `fill: ${detailPageIconColor};` : ''}
            ${dplDeskSize}
            ${dplDeskHSize}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverDeskBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover svg{
			${detailPageIconHoverColor ? `fill: ${detailPageIconHoverColor};` : ''}
		}

        ${
            active
                ? `
                .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
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
                            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img:hover {
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
	`;

    const tabletAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerTabPadding}
			${teamMemberContainerTabMargin}
		}
        .zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentTabBg}
			${contentBorderTabStyle}
			${contentTabBorderRadius}
			${contentTabPadding}
			${contentTabMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap {
			${photoTabMargin}
           
        }
	   .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoTabSize}
			${photoTabBGStyle}
			${photoTabBorderStyle}
			${photoTabPadding}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoTabBorderRadius}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
            ${separatorWidthTeamTabSize}
            ${separatorHeightTeamTabSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${tabSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoTab}
			${shortBioTabMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child.default .zolo-social-and-link-wrap {
            ${socialContainerTabPadding}
            ${socialContainerTabMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapTab}
		}

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginTab}
            }
            `
                : ''
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverTabBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
			${dplTabSize}
            ${dplTabHSize}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverTabBG}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId}.zolo-block.wp-block-zolo-team-child {
			${teamMemberContainerMobPadding}
			${teamMemberContainerMobMargin}
		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item {
            ${itemMobBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-item .zolo-info-wrap {
            ${contentMobBg}
			${contentBorderMobStyle}
			${contentMobBorderRadius}
			${contentMobPadding}
			${contentMobMargin}

		}
        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap{
			${photoMobMargin}   
        }
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoMobSize}
			${photoMobBGStyle}
			${photoMobBorderStyle}
			${photoMobPadding}
		}
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap,
		.zolo-block.wp-block-zolo-team-child.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-image-wrap img {
			${photoMobBorderRadius}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-nameDg-separator {
            ${separatorWidthTeamMobSize}
            ${separatorHeightTeamMobSize}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child.style-4 .zolo-name-desi-wrap {
            ${mobSeparatorSpacingTeam}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoMob}
			${shortBioMobMargin}
		}
        .${uniqueId}.default .zolo-social-and-link-wrap {
            ${socialContainerMobPadding}
            ${socialContainerMobMargin}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapMob}
		}

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share {
                ${socialIconsMarginMob}
            }
            `
                : ''
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverMobBG}
		}

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn svg {
            ${dplMobSize}
            ${dplMobHSize}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverMobBG}
		}
	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.teamChild.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.teamChild.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.teamChild.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
