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
    generateGapStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    COLUMN_COUNT,
    COLUMN_GAP,
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
    IMAGE_HEIGHT,
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
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const { uniqueId, headingColor, zoomIconColor, zoomIconHoverColor, zoomIconHoverBorderColor, imageHoverBorderColor } = attributes;

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: COLUMN_COUNT,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // column gap
    const {
        gapStylesDesktop: deskGridGap,
        gapStylesTab: tabGridGap,
        gapStylesMobile: mobGridGap,
    } = generateGapStyle({
        controlName: COLUMN_GAP,
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
        desktopRangeStyle: imageHeightDesk,
        tabRangeStyle: imageHeightTab,
        mobRangeStyle: imageHeightMob,
    } = generateResRangeStyle({
        controlName: IMAGE_HEIGHT,
        property: 'height',
        attributes,
    });

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
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: zoomIconHSizeDesk,
        tabRangeStyle: zoomIconHSizeTab,
        mobRangeStyle: zoomIconHSizeMob,
    } = generateResRangeStyle({
        controlName: ZOOM_ICON_SIZE,
        property: 'height',
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
		.${uniqueId} {
			${containerDeskBGStyle}
			${containerMarginDesk}
			${containerPaddingDesk}
			${containerBorderDesk}
			${containerBorderRadiusDesk}
			${containerBoxShadow}
		}
		.${uniqueId}:hover {
			${containerHoverDeskBGStyle}
			${containerHoverBorderDesk}
			${containerBoxShadowHover}
		}
		.${uniqueId}.zolo-image-gallery {
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
			${deskGridGap}
		}
		.${uniqueId} .zolo-image-wrap {
			${imageDeskBGStyle}
			${imageBorderDesk}
			${imageBorderRadiusDesk}
			${imageBoxShadow}
			${imagePaddingDesk}
            ${imageHeightDesk}
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
            ${zoomIconPaddingDesk}
            ${zoomIconBorderDesk}
            ${zoomIconBorderRadiusDesk}
            ${zoomIconBoxShadow}
            ${zoomIconDeskBGStyle}
        }

        .${uniqueId} .zolo-item .zolo-icon svg {
            ${zoomIconSizeDesk}
            ${zoomIconHSizeDesk}
            fill: ${zoomIconColor ? zoomIconColor : ''};
        }

        .${uniqueId} .zolo-item .zolo-icon:hover svg {
            fill: ${zoomIconHoverColor ? zoomIconHoverColor : ''};
        }

        .${uniqueId}  .zolo-item .zolo-icon:hover {
            border-color: ${zoomIconHoverBorderColor ? zoomIconHoverBorderColor : ''};
            ${zoomIconHoverBoxShadow}
            ${zoomIconBgHoverDesk}
        }
  	`;

    const tabletAllStyle = `
	.${uniqueId} {
		${containerTabBGStyle}
		${containerMarginTab}
		${containerPaddingTab}
		${containerBorderTab}
		${containerBorderRadiusTab}
	}
	.${uniqueId}:hover {
		${containerHoverTabBGStyle}
		${containerHoverBorderTab}
	}
	.${uniqueId}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
		${tabGridGap}
	}
	.${uniqueId} .zolo-image-wrap {
		${imageTabBGStyle}
		${imageBorderTab}
		${imageBorderRadiusTab}
		${imagePaddingTab}
        ${imageHeightTab}
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
    .${uniqueId} .zolo-item .zolo-icon {
        ${zoomIconPaddingTab}
        ${zoomIconBorderTab}
        ${zoomIconBorderRadiusTab}
        ${zoomIconTabBGStyle}
    }
    .${uniqueId} .zolo-item .zolo-icon svg{
        ${zoomIconSizeTab}
        ${zoomIconHSizeTab}
    }
    .${uniqueId} .zolo-item .zolo-icon:hover svg{
        ${zoomIconBgHoverTab}
    }
	`;

    const mobileAllStyle = `
	.${uniqueId} {
		${containerMobBGStyle}
		${containerMarginMob}
		${containerPaddingMob}
		${containerBorderMob}
		${containerBorderRadiusMob}
	}
	.${uniqueId}:hover {
		${containerHoverMobBGStyle}
		${containerHoverBorderMob}
	}
	.${uniqueId}.zolo-image-gallery {
		grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
		${mobGridGap}
	}
	.${uniqueId} .zolo-image-wrap {
		${imageMobBGStyle}
		${imageBorderMob}
		${imageBorderRadiusMob}
		${imagePaddingMob}
        ${imageHeightMob}
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

    .${uniqueId} .zolo-item .zolo-icon {
        ${zoomIconPaddingMob}
        ${zoomIconBorderMob}
        ${zoomIconBorderRadiusMob}
        ${zoomIconMobBGStyle}
    }
    .${uniqueId} .zolo-item .zolo-icon svg{
        ${zoomIconSizeMob}
        ${zoomIconHSizeMob}
    }
    .${uniqueId} .zolo-item .zolo-icon:hover svg{
        ${zoomIconBgHoverMob}
    }
  	`;

    return (
        <GlobalStyleHanlder
            attributes={attributes}
            setAttributes={setAttributes}
            desktopAllStyle={applyFilters('zolo.imageGallery.desktopAllStyle', desktopAllStyle, props)}
            tabAllStyle={applyFilters('zolo.imageGallery.tabletAllStyle', tabletAllStyle, props)}
            mobileAllStyle={applyFilters('zolo.imageGallery.mobileAllStyle', mobileAllStyle, props)}
        />
    );
}
