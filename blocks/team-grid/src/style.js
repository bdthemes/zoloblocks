/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateResCounterStyle,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateGapStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    GRID_GAP,
    CONTENT_BG,
    CONTENT_ALIGNMENT,
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
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
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
    // DPL_HEIGHT,
    // DPL_WIDTH,
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
    ITEM_OVERLAY,
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
        preset,
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

    // Grid Columns
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

    const {
        gapStylesDesktop: deskGridGap,
        gapStylesTab: tabGridGap,
        gapStylesMobile: mobGridGap,
    } = generateGapStyle({
        controlName: GRID_GAP,
        attributes,
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
        desktopAlignStyle: teamDeskAlignStyle,
        tabAlignStyle: teamTabAlignStyle,
        mobAlignStyle: teamMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
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
        property: ' width',
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
        backgroundStylesDesktop: itemDeskOverlay,
        backgroundStylesTab: itemTabOverlay,
        backgroundStylesMobile: itemMobOverlay,
    } = generateNormalBGControlStyles({
        controlName: ITEM_OVERLAY,
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

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${deskColumns}, 1fr);
            ${deskGridGap};
        }
          .${uniqueId}.wp-block-zolo-team-grid .zolo-item {
            ${itemDeskBg}
			${itemBorderDeskStyle}
			${itemDeskBorderRadius}
			${itemDeskPadding}
			${itemDeskMargin}
			${itemBoxShadow}
		}
       .${uniqueId}.wp-block-zolo-team-grid .wp-block-zolo-team-child.style-2 .zolo-image-wrap:before{
            ${itemDeskOverlay}
        }
        .${uniqueId}.wp-block-zolo-team-grid {
			${teamMemberContainerDeskPadding}image
			${teamMemberContainerDeskMargin}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-name, .${uniqueId}.wp-block-zolo-team-grid .zolo-designation, .${uniqueId}.wp-block-zolo-team-grid .zolo-desc {
			${teamDeskAlignStyle}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-info-wrap{
            ${contentDeskBg}
			${contentBorderDeskStyle}
			${contentDeskBorderRadius}
			${contentDeskPadding}
			${contentDeskMargin}
			${contentBoxShadow}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-social-and-link-wrap {
			${separatorColor ? `border-top-color: ${separatorColor};` : ''}
            ${socialContainerDeskPadding}
            ${socialContainerDeskMargin}
		}
        .${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap {
            ${teamDeskAlignStyle}
            ${photoDeskMargin}

        }
		.wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
            ${photoDeskSize}
			${photoDeskBGStyle}
			${photoDeskBorderStyle}
			${photoDeskPadding}
			${teamPhotoBoxShadow}
		}

        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap,
        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
			${photoDeskBorderRadius}
		}


		.wp-block-zolo-team-grid.${uniqueId} .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
		}

		.wp-block-zolo-team-grid.${uniqueId} .zolo-designation {
			${designationColor ? `color: ${designationColor};` : ''}
			${designationTypoDesk}
			${designationDeskMargin}
		}
		.wp-block-zolo-team-grid.${uniqueId} .zolo-desc {
			${shortBioColor && shortBioColor !== '' ? `color: ${shortBioColor};` : ''}
			${shortBioTypoDesk}
			${shortBioDeskMargin}
		}

		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
			${socialIconsGapDesk}
            ${socialDeskAlignStyle}
		}

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
                ${socialIconsMarginDesk}
            }
            `
                : ''
        }

		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a {
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconsNormalDeskBG}
		}

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share svg{
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}


		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:hover svg {
			${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
		}

		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}

		}

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn svg {
			${dplDeskSize}
            ${dplDeskHSize}
            ${detailPageIconColor ? `fill: ${detailPageIconColor};` : ''}
        }

		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn:hover a{
			${detailPageHoverDeskBG}
		}

		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn:hover svg{
			${detailPageIconHoverColor ? `fill: ${detailPageIconHoverColor};` : ''}
		}
    `;
    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${tabColumns}, 1fr);
            ${tabGridGap};
        }
         .${uniqueId}.wp-block-zolo-team-grid .zolo-item {
            ${itemTabBg}
			${itemBorderTabStyle}
			${itemTabBorderRadius}
			${itemTabPadding}
			${itemTabMargin}
			${itemBoxShadow}
		}

        .${uniqueId}.wp-block-zolo-team-grid {
            ${teamMemberContainerTabPadding}
            ${teamMemberContainerTabMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-name, .${uniqueId}.wp-block-zolo-team-grid .zolo-designation, .${uniqueId}.wp-block-zolo-team-grid .zolo-desc {
            ${teamTabAlignStyle}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-info-wrap {
            ${contentTabBg}
            ${contentBorderTabStyle}
            ${contentTabBorderRadius}
            ${contentTabPadding}
            ${contentTabMargin}
            ${contentBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-social-and-link-wrap {
            ${socialContainerTabPadding}
            ${socialContainerTabMargin}
		}

        .${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap {
            ${teamTabAlignStyle}
            ${photoTabMargin}

        }

        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
            ${photoTabSize}
            ${photoTabBGStyle}
            ${photoTabBorderStyle}
            ${photoTabPadding}
            ${teamPhotoBoxShadow}
        }

        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap,
        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
            ${photoTabBorderRadius}
		}


        .${uniqueId}.wp-block-zolo-team-grid .zolo-name {
            ${nameTypoTab}
            ${nameTabMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-designation {
            ${designationTypoTab}
            ${designationTabMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-desc {
            ${shortBioTypoTab}
            ${shortBioTabMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
            ${socialIconsGapTab}
            ${socialTabAlignStyle}
        }

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
                ${socialIconsMarginTab}
            }
            `
                : ''
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a {
            ${socialIconTabBorderStyle}
            ${socialIconsBorderRadiusTab}
            ${socialIconsPaddingTab}
            ${socialIconNormalBoxShadow}
            ${iconsNormalTabBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share svg {
            ${socialIconContainerHeightTab}
            ${socialIconContainerWidthTab}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:hover {
            ${socialIconHoverBoxShadow}
            ${iconsHoverTabBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:before {
            ${iconsHoverTabBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a {
            ${detailPageNormalTabBG}
            ${dplTabBorderStyle}
            ${dplTabBorderRadius}
            ${dplTabPadding}
            ${dplTabMargin}
            ${dplTabSize}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:hover {
            ${detailPageHoverTabBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:before {
            ${detailPageHoverTabBG}
        }
    `;
    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${mobColumns}, 1fr);
            ${mobGridGap};
        }
         .${uniqueId}.wp-block-zolo-team-grid .zolo-item {
            ${itemDeskBg}
			${itemBorderMobStyle}
			${itemMobBorderRadius}
			${itemMobPadding}
			${itemMobMargin}
			${itemBoxShadow}
		}
        .${uniqueId}.wp-block-zolo-team-grid {
            ${teamMemberContainerMobPadding}
            ${teamMemberContainerMobMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-name, .${uniqueId}.wp-block-zolo-team-grid .zolo-designation, .${uniqueId}.wp-block-zolo-team-grid .zolo-desc {
            ${teamMobAlignStyle}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-info-wrap {
            ${contentMobBg}
            ${contentBorderMobStyle}
            ${contentMobBorderRadius}
            ${contentMobPadding}
            ${contentMobMargin}
            ${contentBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-item .zolo-social-and-link-wrap {
            ${socialContainerMobPadding}
            ${socialContainerMobMargin}
		}

        .${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap {
            ${teamMobAlignStyle}
            ${photoMobMargin}

        }

        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
            ${photoMobSize}
            ${photoMobBGStyle}
            ${photoMobBorderStyle}
            ${photoMobPadding}
            ${teamPhotoBoxShadow}
        }

        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap,
        .wp-block-zolo-team-grid.${uniqueId}.wp-block-zolo-team-grid .zolo-image-wrap img {
            ${photoMobBorderRadius}
		}

        .${uniqueId}.wp-block-zolo-team-grid .zolo-name {
            ${nameTypoMob}
            ${nameMobMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-designation {
            ${designationTypoMob}
            ${designationMobMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-desc {
            ${shortBioTypoMob}
            ${shortBioMobMargin}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
            ${socialIconsGapMob}
            ${socialMobAlignStyle}
        }

        ${
            preset !== 'style-1'
                ? `
            .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share {
                ${socialIconsMarginMob}
            }
            `
                : ''
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a {
            ${socialIconMobBorderStyle}
            ${socialIconsBorderRadiusMob}
            ${socialIconsPaddingMob}
            ${socialIconNormalBoxShadow}
            ${iconsNormalMobBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share svg {
            ${socialIconContainerHeightMob}
            ${socialIconContainerWidthMob}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:hover {
            ${socialIconHoverBoxShadow}
            ${iconsHoverMobBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:before {
            ${iconsHoverMobBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a {
            ${detailPageNormalMobBG}
            ${dplMobBorderStyle}
            ${dplMobBorderRadius}
            ${dplMobPadding}
            ${dplMobMargin}
            ${dplMobSize}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:hover {
            ${detailPageHoverMobBG}
        }

        .${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:before {
            ${detailPageHoverMobBG}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.teamGrid.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.teamGrid.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.teamGrid.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
