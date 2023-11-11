/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    COLUMNS_GAP,
    GRID_COLUMNS,
    ROWS_GAP,
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
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    TEAM_MEMBER_CONTAINER_PADDING,
    TEAM_MEMBER_CONTAINER_MARGIN,
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
        blurBgColor,
        blurBgOpacity,
        addDetailPageLink,
        nameColor,
        nameLinkColor,
        nameHoverColor,
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
    });

    const {
        desktopRangeStyle: deskColumnsGap,
        tabRangeStyle: tabColumnsGap,
        mobRangeStyle: mobColumnsGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-column-gap',
        attributes,
    });

    const {
        desktopRangeStyle: deskRowsGap,
        tabRangeStyle: tabRowsGap,
        mobRangeStyle: mobRowsGap,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'grid-row-gap',
        attributes,
    });

    // Global style for child blocks

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
        property: 'font-size',
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

    const totalDeskWidth = dpNumber + dwNumber + dbNumber !== 0 ? dpNumber * 2 + dwNumber + dbNumber * 2 : 45;

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

    const totalTabWidth = tpNumber + twNumber + tbNumber !== 0 ? tpNumber * 2 + twNumber + tbNumber * 2 : 45;

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

    const totalMobWidth = mpNumber + mwNumber + mbNumber !== 0 ? mpNumber * 2 + mwNumber + mbNumber * 2 : 45;

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${deskColumns}, 1fr);
            ${deskColumnsGap};
            ${deskRowsGap};
        }
        .${uniqueId} {
			${teamMemberContainerDeskPadding}
			${teamMemberContainerDeskMargin}
		}
		.${uniqueId} .zolo-name, .${uniqueId} .zolo-designation, .${uniqueId} .zolo-desc {
			${teamDeskAlignStyle}
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
		.${uniqueId}.wp-block-zolo-team-grid.style-2 .zolo-image-wrap::before {
			background-color: ${blurBgColor};
			backdrop-filter: blur(${blurBgOpacity}px);
		}
		.${uniqueId} .zolo-social-share {
			${socialDeskAlignStyle}
		}
		.${uniqueId} .zolo-item .zolo-social-and-link-wrap {
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
		.${uniqueId} .zolo-name {
			${nameTypoDesk}
			${nameDeskMargin}
            ${nameColor ? `color: ${nameColor};` : ''}
		}

        .${uniqueId} .zolo-name.has-link:hover {
			color: ${nameHoverColor} !important;
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
		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a {
			${socialIconContainerHeightDesk}
			${socialIconContainerWidthDesk}
			${socialIconDeskBorderStyle}
			${socialIconsBorderRadiusDesk}
			${socialIconsPaddingDesk}
			${socialIconNormalBoxShadow}
			${iconColor ? `color: ${iconColor};` : ''}
			${iconsNormalDeskBG}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:hover {
			${socialIconHoverBoxShadow}
			${iconHoverColor ? `color: ${iconHoverColor};` : ''}
			${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
			${iconsHoverDeskBG}
		}
        .${uniqueId}.wp-block-zolo-team-grid .zolo-social-share a:before {
			${iconsHoverDeskBG}
		}
		.${uniqueId} .zolo-social-share i {
			${socialIconDesk}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a {
			${detailPageNormalDeskBG}
			${detailPageIconColor ? `color: ${detailPageIconColor};` : ''}
			${dplDeskBorderStyle}
			${dplDeskBorderRadius}
			${dplDeskPadding}
			${dplDeskMargin}
			${dplDeskHeight}
			${dplDeskWidth}
			${dplDeskSize}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:hover {
			${detailPageIconHoverColor ? `color: ${detailPageIconHoverColor};` : ''}
			${detailPageHoverDeskBG}
		}
		.${uniqueId}.wp-block-zolo-team-grid .zolo-link-btn a:before {
			${detailPageHoverDeskBG}
		}
    `;
    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${tabColumns}, 1fr);
            ${tabColumnsGap};
            ${tabRowsGap};
        }
    `;
    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-team-grid {
            grid-template-columns: repeat(${mobColumns}, 1fr);
            ${mobColumnsGap};
            ${mobRowsGap};
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
