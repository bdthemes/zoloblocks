/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateResCounterStyle,
    generateResRangeStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BORDER,
    CONTAINER_HOVER_BORDER,
    IMAGE_BORDER,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    IMAGE_BORDER_RADIUS,
    IMAGE_BOX_SHADOW,
    IMAGE_BACKGROUND,
    IMAGE_HOVER_BOX_SHADOW,
    IMAGE_HOVER_BACKGROUND,
    IMAGE_PADDING,
    IMAGE_MARGIN,
    HEADING_BORDER,
    HEADING_BACKGROUND,
    HEADING_MARGIN,
    HEADING_PADDING,
    HEADING_BORDER_RADIUS,
    HEADING_BOX_SHADOW,
    ZOOM_ICON_PADDING,
    ZOOM_ICON_BORDER_RADIUS,
    ZOOM_ICON_BORDER,
    ZOOM_ICON_BOX_SHADOW,
    ZOOM_ICON_HOVER_BOX_SHADOW,
    ZOOM_ICON_BG_COLOR,
    ZOOM_ICON_BG_HOVER_COLOR,
    OVERLAY_BG_COLOR,
    ZOOM_ICON_SIZE,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const { uniqueId, preset, headingColor, zoomIconColor, zoomIconHoverColor, zoomIconHoverBorderColor, imageHoverBorderColor } =
        attributes;

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: COLUMN_COUNT,
        attributes,
        noProperty: true,
    });

    // column gap
    const {
        desktopRangeStyle: colGapDeskstyle,
        tabRangeStyle: colGapTabStyle,
        mobRangeStyle: colGapMobStyle,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'column-gap',
        attributes,
    });

    // row gap
    const {
        desktopRangeStyle: rowGapDeskstyle,
        tabRangeStyle: rowGapTabStyle,
        mobRangeStyle: rowGapMobStyle,
    } = generateResRangeStyle({
        controlName: ROW_GAP,
        property: 'row-gap',
        attributes,
    });

    // Container Styles
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
        backgroundStylesDesktop: containerHoverDeskBGStyle,
        backgroundStylesTab: containerHoverTabBGStyle,
        backgroundStylesMobile: containerHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_HOVER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerPaddingDesk,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: containerBorderDesk,
        tabBorderStyle: containerBorderTab,
        mobBorderStyle: containerBorderMob,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    const {
        desktopBorderStyle: containerHoverBorderDesk,
        tabBorderStyle: containerHoverBorderTab,
        mobBorderStyle: containerHoverBorderMob,
    } = generateBorderStyle({
        controlName: CONTAINER_HOVER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerBorderRadiusDesk,
        dimensionStylesTab: containerBorderRadiusTab,
        dimensionStylesMobile: containerBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const { boxShadowStyle: containerBoxShadowHover } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
    });

    // Image
    const {
        desktopBorderStyle: imageBorderDesk,
        tabBorderStyle: imageBorderTab,
        mobBorderStyle: imageBorderMob,
    } = generateBorderStyle({
        controlName: IMAGE_BORDER,
        attributes,
    });

    const {
        backgroundStylesDesktop: imageDeskBGStyle,
        backgroundStylesTab: imageTabBGStyle,
        backgroundStylesMobile: imageMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: IMAGE_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: imageHoverDeskBGStyle,
        backgroundStylesTab: imageHoverTabBGStyle,
        backgroundStylesMobile: imageHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: IMAGE_HOVER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: imageBorderRadiusDesk,
        dimensionStylesTab: imageBorderRadiusTab,
        dimensionStylesMobile: imageBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: IMAGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: imagePaddingDesk,
        dimensionStylesTab: imagePaddingTab,
        dimensionStylesMobile: imagePaddingMob,
    } = generateDimensionStyle({
        controlName: IMAGE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: imageMarginDesk,
        dimensionStylesTab: imageMarginTab,
        dimensionStylesMobile: imageMarginMob,
    } = generateDimensionStyle({
        controlName: IMAGE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const { boxShadowStyle: imageBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: IMAGE_BOX_SHADOW,
    });

    const { boxShadowStyle: imageHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: IMAGE_HOVER_BOX_SHADOW,
    });

    // Heading
    const {
        desktopBorderStyle: headingBorderDesk,
        tabBorderStyle: headingBorderTab,
        mobBorderStyle: headingBorderMob,
    } = generateBorderStyle({
        controlName: HEADING_BORDER,
        attributes,
    });

    const {
        backgroundStylesDesktop: headingDeskBGStyle,
        backgroundStylesTab: headingTabBGStyle,
        backgroundStylesMobile: headingMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: HEADING_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: headingMarginDesk,
        dimensionStylesTab: headingMarginTab,
        dimensionStylesMobile: headingMarginMob,
    } = generateDimensionStyle({
        controlName: HEADING_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: headingPaddingDesk,
        dimensionStylesTab: headingPaddingTab,
        dimensionStylesMobile: headingPaddingMob,
    } = generateDimensionStyle({
        controlName: HEADING_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: headingBorderRadiusDesk,
        dimensionStylesTab: headingBorderRadiusTab,
        dimensionStylesMobile: headingBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: HEADING_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        typoStylesDesktop: headingTypoDesk,
        typoStylesTab: headingTypoTab,
        typoStylesMobile: headingTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADING_TYPOGRAPHY,
        attributes,
    });

    const { boxShadowStyle: headingBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: HEADING_BOX_SHADOW,
    });

    const {
        backgroundStylesDesktop: zoomIconDeskBGStyle,
        backgroundStylesTab: zoomIconTabBGStyle,
        backgroundStylesMobile: zoomIconMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: ZOOM_ICON_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });

    // zoom icon
    const {
        dimensionStylesDesktop: zoomIconPaddingDesk,
        dimensionStylesTab: zoomIconPaddingTab,
        dimensionStylesMobile: zoomIconPaddingMob,
    } = generateDimensionStyle({
        controlName: ZOOM_ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: zoomIconBorderRadiusDesk,
        dimensionStylesTab: zoomIconBorderRadiusTab,
        dimensionStylesMobile: zoomIconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ZOOM_ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopBorderStyle: zoomIconBorderDesk,
        tabBorderStyle: zoomIconBorderTab,
        mobBorderStyle: zoomIconBorderMob,
    } = generateBorderStyle({
        controlName: ZOOM_ICON_BORDER,
        attributes,
    });

    const { boxShadowStyle: zoomIconBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ZOOM_ICON_BOX_SHADOW,
    });

    const { boxShadowStyle: zoomIconHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ZOOM_ICON_HOVER_BOX_SHADOW,
    });

    const {
        backgroundStylesDesktop: zoomIconBgHoverDesk,
        backgroundStylesTab: zoomIconBgHoverTab,
        backgroundStylesMobile: zoomIconBgHoverMob,
    } = generateNormalBGControlStyles({
        controlName: ZOOM_ICON_BG_HOVER_COLOR,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopRangeStyle: zoomIconSizeDesk,
        tabRangeStyle: zoomIconSizeTab,
        mobRangeStyle: zoomIconSizeMob,
    } = generateResRangeStyle({
        controlName: ZOOM_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // overlay BG
    const {
        backgroundStylesDesktop: overlayDeskBGStyle,
        backgroundStylesTab: overlayTabBGStyle,
        backgroundStylesMobile: overlayMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: OVERLAY_BG_COLOR,
        attributes,
        noMainBGImg: true,
    });

    /**
     * All Style Combination
     */

    const desktopAllStyle = `
		.${uniqueId}.zolo-img-gallery-${preset} {
			${containerDeskBGStyle}
			${containerMarginDesk}
			${containerPaddingDesk}
			${containerBorderDesk}
			${containerBorderRadiusDesk}
			${containerBoxShadow}
			overflow:hidden;
		}
		.${uniqueId}.zolo-img-gallery-${preset}:hover {
			${containerHoverDeskBGStyle}
			${containerHoverBorderDesk}
			${containerBoxShadowHover}
		}
		.${uniqueId}.zolo-img-gallery-${preset}.zolo-image-gallery {
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
			${colGapDeskstyle}
			${rowGapDeskstyle}
		}
		.${uniqueId} .zolo-image-wrap {
			${imageDeskBGStyle}
			${imageBorderDesk}
			${imageBorderRadiusDesk}
			${imageBoxShadow}
			${imageMarginDesk}
			${imagePaddingDesk}
		}
		.${uniqueId} .zolo-image-wrap:hover {
			${imageHoverDeskBGStyle}
			${imageHoverBoxShadow}
            ${imageHoverBorderColor ? `border-color: ${imageHoverBorderColor};` : ''}
		}

        .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
            ${overlayDeskBGStyle}
        }

		.${uniqueId} .zolo-title {
			color: ${headingColor ? headingColor : ''};
			${headingDeskBGStyle}
			${headingMarginDesk}
			${headingPaddingDesk}
			${headingBorderDesk}
			${headingBorderRadiusDesk}
			${headingBoxShadow}
			${headingTypoDesk}
		}

        .${uniqueId} .zolo-item .zolo-icon {
            color: ${zoomIconColor ? zoomIconColor : ''};
            ${zoomIconPaddingDesk}
            ${zoomIconBorderDesk}
            ${zoomIconBorderRadiusDesk}
            ${zoomIconBoxShadow}
            ${zoomIconDeskBGStyle}
            ${zoomIconSizeDesk}
        }

        .${uniqueId}  .zolo-item .zolo-icon:hover {
            color: ${zoomIconHoverColor ? zoomIconHoverColor : ''};
            border-color: ${zoomIconHoverBorderColor ? zoomIconHoverBorderColor : ''};
            ${zoomIconHoverBoxShadow}
            ${zoomIconBgHoverDesk}
        }
  	`;

    const tabletAllStyle = `
	.${uniqueId}.zolo-img-gallery-${preset} {
		${containerTabBGStyle}
		${containerMarginTab}
		${containerPaddingTab}
		${containerBorderTab}
		${containerBorderRadiusTab}
	}
	.${uniqueId}.zolo-img-gallery-${preset}:hover {
		${containerHoverTabBGStyle}
		${containerHoverBorderTab}
	}
	.${uniqueId}.zolo-img-gallery-${preset}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		${colGapTabStyle}
		${rowGapTabStyle}
	}
	.${uniqueId} .zolo-image-wrap {
		${imageTabBGStyle}
		${imageBorderTab}
		${imageBorderRadiusTab}
		${imageMarginTab}
		${imagePaddingTab}
	}
	.${uniqueId} .zolo-image-wrap:hover {
		${imageHoverTabBGStyle}
	}
    .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
        ${overlayTabBGStyle}
    }
	.${uniqueId} .zolo-title {
		${headingTabBGStyle}
		${headingMarginTab}
		${headingPaddingTab}
		${headingBorderTab}
		${headingBorderRadiusTab}
		${headingTypoTab}
	}
    .${uniqueId} .zolo-icon i{
        ${zoomIconPaddingTab}
        ${zoomIconBorderTab}
        ${zoomIconBorderRadiusTab}
        ${zoomIconTabBGStyle}
        ${zoomIconSizeTab}
    }
    .${uniqueId} .zolo-icon:hover i{
        ${zoomIconBgHoverTab}
    }
	`;

    const mobileAllStyle = `
	.${uniqueId}.zolo-img-gallery-${preset} {
		${containerMobBGStyle}
		${containerMarginMob}
		${containerPaddingMob}
		${containerBorderMob}
		${containerBorderRadiusMob}
	}
	.${uniqueId}.zolo-img-gallery-${preset}:hover {
		${containerHoverMobBGStyle}
		${containerHoverBorderMob}
	}
	.${uniqueId}.zolo-img-gallery-${preset}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		${colGapMobStyle}
		${rowGapMobStyle}
	}
	.${uniqueId} .zolo-image-wrap {
		${imageMobBGStyle}
		${imageBorderMob}
		${imageBorderRadiusMob}
		${imageMarginMob}
		${imagePaddingMob}
	}
	.${uniqueId} .zolo-image-wrap:hover {
		${imageHoverMobBGStyle}
	}
    .${uniqueId}.zolo-image-gallery .zolo-image-wrap::before{
        ${overlayMobBGStyle}
    }
	.${uniqueId} .zolo-title {
		${headingMobBGStyle}
		${headingMarginMob}
		${headingPaddingMob}
		${headingBorderMob}
		${headingBorderRadiusMob}
		${headingTypoMob}
	}

    .${uniqueId} .zolo-icon i{
        ${zoomIconPaddingMob}
        ${zoomIconBorderMob}
        ${zoomIconBorderRadiusMob}
        ${zoomIconMobBGStyle}
        ${zoomIconSizeMob}
    }
    .${uniqueId} .zolo-icon:hover i{
        ${zoomIconBgHoverMob}
    }
  	`;

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={desktopAllStyle}
            tabAllStyle={tabletAllStyle}
            mobileAllStyle={mobileAllStyle}
        />
    );
}
