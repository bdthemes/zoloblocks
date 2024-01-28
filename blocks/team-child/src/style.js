/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
    TEAM_SHORT_BIO_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
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
} from './constants';

import {
    TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    TEAM_MEMBER_NAME_TYPOGRAPHY,
    TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
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
		.${uniqueId} {
			${teamMemberContainerDeskPadding}
			${teamMemberContainerDeskMargin}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-item {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}

		.${uniqueId}.default .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-2 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-3 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
            ${contentDeskBg}
			${contentBorderDeskStyle}
			${contentDeskBorderRadius}
			${contentDeskPadding}
			${contentDeskMargin}
			${contentBoxShadow}
		}
       .${uniqueId} .zolo-item .zolo-social-and-link-wrap{
			${separatorColor ? `border-top-color: ${separatorColor};` : ''}
		}
		
        .${uniqueId} .zolo-image-wrap {
			${photoDeskMargin}
            
        }
		.wp-block-zolo-team-child.${uniqueId}.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoDeskSize}
			${photoDeskBGStyle}
			${photoDeskBorderStyle}
			${photoDeskBorderRadius}
			${photoDeskPadding}
			${teamPhotoBoxShadow}
          
		}
		.${uniqueId} .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
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

        .${uniqueId}.default .zolo-social-and-link-wrap {
            ${socialContainerDeskPadding}
            ${socialContainerDeskMargin}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapDesk}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconsNormalDeskBG}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-social-share a:hover svg{
			${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
			${dplDeskHeight}
			${dplDeskWidth}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-link-btn svg {
			${detailPageIconColor ? `fill: ${detailPageIconColor};` : ''}
            ${dplDeskSize}
            ${dplDeskHSize}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverDeskBG}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a:hover svg{
			${detailPageIconHoverColor ? `fill: ${detailPageIconHoverColor};` : ''}
		}
	`;

    const tabletAllStyle = `
		.${uniqueId} {
			${teamMemberContainerTabPadding}
			${teamMemberContainerTabMargin}
		}
        .wp-block-zolo-team-child.${uniqueId}.wp-block-zolo-team-child .zolo-item {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
		}
		.${uniqueId}.default .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-2 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-3 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
            ${contentTabBg}
			${contentBorderTabStyle}
			${contentTabBorderRadius}
			${contentTabPadding}
			${contentTabMargin}
		}
        .${uniqueId}.wp-block-zolo-team-child .zolo-image-wrap {
			${photoTabMargin}
           
        }
	   .${uniqueId}.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoTabSize}
			${photoTabBGStyle}
			${photoTabBorderStyle}
			${photoTabBorderRadius}
			${photoTabPadding}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-name {
			${nameTypoTab}
			${nameTabMargin}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-designation {
			${designationTypoTab}
			${designationTabMargin}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoTab}
			${shortBioTabMargin}
		}
        .${uniqueId}.default .zolo-social-and-link-wrap {
            ${socialContainerTabPadding}
            ${socialContainerTabMargin}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapTab}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconTabBorderStyle}
			${socialIconsBorderRadiusTab}
			${socialIconsPaddingTab}
			${iconsNormalTabBG}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightTab}
			${socialIconContainerWidthTab}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverTabBG}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalTabBG}
			${dplTabBorderStyle}
			${dplTabBorderRadius}
			${dplTabPadding}
			${dplTabMargin}
			${dplTabHeight}
			${dplTabWidth}

		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-link-btn svg {
			${dplTabSize}
            ${dplTabHSize}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverTabBG}
		}
	`;

    const mobileAllStyle = `
		.${uniqueId} {
			${teamMemberContainerMobPadding}
			${teamMemberContainerMobMargin}
		}
        .${uniqueId}.wp-block-zolo-team-child .zolo-item {
            ${itemMobBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
		}
		.${uniqueId}.default .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-1 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-2 .zolo-item .zolo-info-wrap,
		.${uniqueId}.style-3 .zolo-item .zolo-info-wrap,
		.${uniqueId}.default .zolo-item .zolo-hover-content,
		.${uniqueId}.style-1 .zolo-item .zolo-hover-content {
            ${contentMobBg}
			${contentBorderMobStyle}
			${contentMobBorderRadius}
			${contentMobPadding}
			${contentMobMargin}

		}
        .${uniqueId}.wp-block-zolo-team-child .zolo-image-wrap{
			${photoMobMargin}   
        }
		.wp-block-zolo-team-child.${uniqueId}.wp-block-zolo-team-child .zolo-image-wrap img {
            ${photoMobSize}
			${photoMobBGStyle}
			${photoMobBorderStyle}
			${photoMobBorderRadius}
			${photoMobPadding}
		}
		.${uniqueId}.wp-block-zolo-team-child .zolo-name {
			${nameTypoMob}
			${nameMobMargin}
		}
		.${uniqueId}.wp-block-zolo-team-child .zolo-designation {
			${designationTypoMob}
			${designationMobMargin}
		}
		.${uniqueId}.wp-block-zolo-team-child .zolo-desc {
			${shortBioTypoMob}
			${shortBioMobMargin}
		}
        .${uniqueId}.default .zolo-social-and-link-wrap {
            ${socialContainerMobPadding}
            ${socialContainerMobMargin}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share {
			${socialIconsGapMob}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a {
			${socialIconMobBorderStyle}
			${socialIconsBorderRadiusMob}
			${socialIconsPaddingMob}
			${iconsNormalMobBG}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-social-share svg {
			${socialIconContainerHeightMob}
			${socialIconContainerWidthMob}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-social-share a:hover {
			${iconsHoverMobBG}
		}

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a {
			${detailPageNormalMobBG}
			${dplMobBorderStyle}
			${dplMobBorderRadius}
			${dplMobPadding}
			${dplMobMargin}
			${dplMobHeight}
			${dplMobWidth}
		}

        .${uniqueId}.wp-block-zolo-team-child .zolo-link-btn svg {
            ${dplMobSize}
            ${dplMobHSize}
        }

		.${uniqueId}.wp-block-zolo-team-child .zolo-link-btn a:hover {
			${detailPageHoverMobBG}
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
