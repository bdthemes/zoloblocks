/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateBorderStyle,
    generateResRangeStyle,
    generateResCounterStyle,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateTypographyStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    generateGapStyle,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    GRID_GAP,
    CONTAINER_HEIGHT,
    CONTAINER_BG,
    CONTAINER_H_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    CONTENT_ALIGNMENT,
    CONTENT_PADDING,
    CONTENT_BG,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    LINK_MARGIN,
    LINK_TEXT_SHADOW,
    LINK_TEXT_STROKE,
    BRAND_PHOTO_BORDER,
    BRAND_PHOTO_BORDER_RADIUS,
    BRAND_PHOTO_BOX_SHADOW,
    BRAND_PHOTO_BG,
    BRAND_PHOTO_PADDING,
    BRAND_PHOTO_MARGIN,
    IMAGE_WIDTH,
} from './constants';

import { TITLE_TYPOGRAPHY, LINK_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, nameColor, nameHoverColor, labelColor, labelHoverColor, contentHorizontalPosition, contentVerticalPosition } =
        attributes;

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 4,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // column gap
    const {
        gapStylesDesktop: colGapDeskstyle,
        gapStylesTab: colGapTabStyle,
        gapStylesMobile: colGapMobStyle,
    } = generateGapStyle({
        controlName: GRID_GAP,
        attributes,
    });

    // Content Align
    const {
        desktopAlignStyle: brandContentDeskAlignStyle,
        tabAlignStyle: brandContentTabAlignStyle,
        mobAlignStyle: brandContentMobAlignStyle,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGNMENT,
        property: 'text-align',
        attributes,
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
        backgroundStylesDesktop: contentDeskBGStyle,
        backgroundStylesTab: contentTabBGStyle,
        backgroundStylesMobile: contentMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTENT_BG,
        attributes,
        noMainBGImg: false,
    });

    // Container
    const {
        desktopRangeStyle: deskContainerHeight,
        tabRangeStyle: tabContainerHeight,
        mobRangeStyle: mobContainerHeight,
    } = generateResRangeStyle({
        controlName: CONTAINER_HEIGHT,
        property: 'height',
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
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: containerDeskBGHStyle,
        backgroundStylesTab: containerTabBGHStyle,
        backgroundStylesMobile: containerMobBGHStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_H_BG,
        attributes,
        noMainBGImg: false,
    });

    // Photo
    const {
        backgroundStylesDesktop: brandPhotoDeskBGStyle,
        backgroundStylesTab: brandPhotoTabBGStyle,
        backgroundStylesMobile: brandPhotoMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: BRAND_PHOTO_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopRangeStyle: deskImageWidth,
        tabRangeStyle: tabImageWidth,
        mobRangeStyle: mobImageWidth,
    } = generateResRangeStyle({
        controlName: IMAGE_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopBorderStyle: photoBorderDesktop,
        tabBorderStyle: photoBorderTab,
        mobBorderStyle: photoBorderMob,
    } = generateBorderStyle({
        controlName: BRAND_PHOTO_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: brandPhotoBorderRadiusDesk,
        dimensionStylesTab: brandPhotoBorderRadiusTab,
        dimensionStylesMobile: brandPhotoBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    // Photo Box Shadow
    const { boxShadowStyle: brandPhotoBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: BRAND_PHOTO_BOX_SHADOW,
    });

    // Brand Photo Padding
    const {
        dimensionStylesDesktop: brandPhotoPaddingDesk,
        dimensionStylesTab: brandPhotoPaddingTab,
        dimensionStylesMobile: brandPhotoPaddingMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Brand Photo Margin
    const {
        dimensionStylesDesktop: brandPhotoMaringDesk,
        dimensionStylesTab: brandPhotoMarginTab,
        dimensionStylesMobile: brandPhotoMarginMob,
    } = generateDimensionStyle({
        controlName: BRAND_PHOTO_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Typography
    const {
        typoStylesDesktop: titleTypoDesk,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMob,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    // Link Typography
    const {
        typoStylesDesktop: linkTypoDesk,
        typoStylesTab: linkTypoTab,
        typoStylesMobile: linkTypoMob,
    } = generateTypographyStyles({
        prefixConstant: LINK_TYPOGRAPHY,
        defaultFontSize: 16,
        attributes,
    });

    // Title Margin
    const {
        dimensionStylesDesktop: titleMarginDesk,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Link Margin
    const {
        dimensionStylesDesktop: linkMarginDesk,
        dimensionStylesTab: linkMarginTab,
        dimensionStylesMobile: linkMarginMob,
    } = generateDimensionStyle({
        controlName: LINK_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Title Text Shadow
    const { textShadowStyle: titleTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    // Title Text Stroke
    const {
        desktopTextStrokeStyle: titleTextStrokeDesk,
        tabTextStrokeStyle: titleTextStrokeTab,
        mobTextStrokeStyle: titleTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    // Link Text Shadow
    const { textShadowStyle: linkTextShadow } = generateTextShadowStyles({
        attributes,
        controlName: LINK_TEXT_SHADOW,
    });

    // Link Text Stroke
    const {
        desktopTextStrokeStyle: linkTextStrokeDesk,
        tabTextStrokeStyle: linkTextStrokeTab,
        mobTextStrokeStyle: linkTextStrokeMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: LINK_TEXT_STROKE,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.zolo-menu-grid-wrap{
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
        }
        .${uniqueId}.zolo-menu-grid-wrap .block-editor-block-list__layout{
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
        }
        .${uniqueId} .zolo-menu-item{
            ${deskContainerHeight}
            ${containerBorderDesk}

            ${containerBoxShadow}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerDeskBGStyle}
		}
        .${uniqueId} .zolo-menu-item:hover .zolo-menu-content{
            ${containerDeskBGHStyle}
		}

        .${uniqueId} .zolo-menu-item, .${uniqueId} .zolo-menu-content{
            ${containerBorderRadiusDesk}
		}

		.${uniqueId} .wp-block-zolo-brand-child .zolo-menu-image img {
            ${brandPhotoPaddingDesk}
			${deskImageWidth}
			${brandPhotoBorderRadiusDesk}
			${brandPhotoBoxShadow}
			${brandPhotoDeskBGStyle}
			${brandPhotoMaringDesk}
			${photoBorderDesktop}
		}
        .${uniqueId}.zolo-menu-grid-wrap.wp-block-zolo-brand-grid .zolo-menu-inner-content{
            ${brandContentDeskAlignStyle}
        }
		.${uniqueId}.zolo-menu-grid-wrap.wp-block-zolo-brand-grid .zolo-menu-content{
            ${contentHorizontalPosition ? `align-items:${contentHorizontalPosition};` : ''}
            ${contentVerticalPosition ? `justify-content:${contentVerticalPosition};` : ''}
		}
		.${uniqueId} .zolo-menu-content{
            ${contentDeskBGStyle}
            ${contentDeskPadding}
		}
		.${uniqueId} .zolo-menu-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
            ${nameColor ? `color:${nameColor};` : ''}
		}
		.${uniqueId} .zolo-menu-title.has-link:hover{
            ${nameHoverColor ? `color:${nameHoverColor};` : ''}
		}
		.${uniqueId} .zolo-menu-item .zolo-menu-title-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
            ${labelColor ? `color:${labelColor};` : ''}
		}
		.${uniqueId} .zolo-menu-item .zolo-menu-title-link.has-link:hover{
            ${labelHoverColor ? `color:${labelHoverColor};` : ''}
		}
    `;

    const tabletAllStyle = `
        .${uniqueId}.zolo-menu-grid-wrap{
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}

        }
        .${uniqueId}.zolo-menu-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}
        }
        .${uniqueId} .zolo-menu-item{
            ${tabContainerHeight}
            ${containerBorderTab}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerTabBGStyle}
        }
        .${uniqueId} .zolo-menu-image img{
            ${brandPhotoPaddingTab}
            ${tabImageWidth}
            ${brandPhotoBorderRadiusTab}
            ${brandPhotoTabBGStyle}
            ${brandPhotoMarginTab}
            ${photoBorderTab}
        }
        .${uniqueId} .zolo-menu-inner-content{
            ${brandContentTabAlignStyle}
        }
        .${uniqueId} .zolo-menu-content{
            ${contentTabBGStyle}
            ${contentTabPadding}
        }
        .${uniqueId} .zolo-menu-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${titleTextStrokeTab}
        }
        .${uniqueId} .zolo-menu-link{
            ${linkTypoTab}
            ${linkMarginTab}
            ${linkTextStrokeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.zolo-menu-grid-wrap{
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
        }
        .${uniqueId}.zolo-menu-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
        }
        .${uniqueId} .zolo-menu-item{
            ${mobContainerHeight}
            ${containerBorderMob}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerMobBGStyle}
        }
        .${uniqueId} .zolo-menu-image img{
            ${brandPhotoPaddingMob}
            ${mobImageWidth}
            ${brandPhotoBorderRadiusMob}
            ${brandPhotoMobBGStyle}
            ${brandPhotoMarginMob}
            ${photoBorderMob}
        }
        .${uniqueId} .zolo-menu-inner-content{
            ${brandContentMobAlignStyle}
        }
        .${uniqueId} .zolo-menu-content{
            ${contentMobBGStyle}
            ${contentMobPadding}
        }
        .${uniqueId} .zolo-menu-title{
            ${titleTypoMob}
            ${titleMarginMob}
            ${titleTextStrokeMob}
        }
        .${uniqueId} .zolo-menu-link{
            ${linkTypoMob}
            ${linkMarginMob}
            ${linkTextStrokeMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.brandGrid.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.brandGrid.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.brandGrid.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
