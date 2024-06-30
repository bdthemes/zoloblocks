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
        .${uniqueId}.zb-brand-grid-wrap{
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
        }
        .${uniqueId} .zb-brand-item{
            ${deskContainerHeight}
            ${containerBorderDesk}

            ${containerBoxShadow}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerDeskBGStyle}
		}
        .${uniqueId} .zb-brand-item:hover .zb-brand-content{
            ${containerDeskBGHStyle}
		}

        .${uniqueId} .zb-brand-item, .${uniqueId} .zb-brand-content{
            ${containerBorderRadiusDesk}
		}

		.${uniqueId} .wp-block-zolo-brand-child .zb-brand-image img {
            ${brandPhotoPaddingDesk}
			${deskImageWidth}
			${brandPhotoBorderRadiusDesk}
			${brandPhotoBoxShadow}
			${brandPhotoDeskBGStyle}
			${brandPhotoMaringDesk}
			${photoBorderDesktop}
		}
        .${uniqueId}.zb-brand-grid-wrap.wp-block-zolo-brand-grid .zb-brand-inner-content{
            ${brandContentDeskAlignStyle}
        }
		.${uniqueId}.zb-brand-grid-wrap.wp-block-zolo-brand-grid .zb-brand-content{
            ${contentHorizontalPosition ? `align-items:${contentHorizontalPosition};` : ''}
            ${contentVerticalPosition ? `justify-content:${contentVerticalPosition};` : ''}
		}
		.${uniqueId} .zb-brand-content{
            ${contentDeskBGStyle}
            ${contentDeskPadding}
		}
		.${uniqueId} .zb-brand-title{
			${titleTypoDesk}
			${titleMarginDesk}
			${titleTextShadow}
			${titleTextStrokeDesk}
            ${nameColor ? `color:${nameColor};` : ''}
		}
		.${uniqueId} .zb-brand-title.has-link:hover{
            ${nameHoverColor ? `color:${nameHoverColor};` : ''}
		}
		.${uniqueId} .zb-brand-item .zb-brand-title-link{
			${linkTypoDesk}
			${linkMarginDesk}
			${linkTextShadow}
			${linkTextStrokeDesk}
            ${labelColor ? `color:${labelColor};` : ''}
		}
		.${uniqueId} .zb-brand-item .zb-brand-title-link.has-link:hover{
            ${labelHoverColor ? `color:${labelHoverColor};` : ''}
		}
    `;

    const tabletAllStyle = `
        .${uniqueId}.zb-brand-grid-wrap{
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}

        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}
        }
        .${uniqueId} .zb-brand-item{
            ${tabContainerHeight}
            ${containerBorderTab}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerTabBGStyle}
        }
        .${uniqueId} .zb-brand-image img{
            ${brandPhotoPaddingTab}
            ${tabImageWidth}
            ${brandPhotoBorderRadiusTab}
            ${brandPhotoTabBGStyle}
            ${brandPhotoMarginTab}
            ${photoBorderTab}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentTabAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${contentTabBGStyle}
            ${contentTabPadding}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${titleTextStrokeTab}
        }
        .${uniqueId} .zb-brand-link{
            ${linkTypoTab}
            ${linkMarginTab}
            ${linkTextStrokeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.zb-brand-grid-wrap{
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
        }
        .${uniqueId} .zb-brand-item{
            ${mobContainerHeight}
            ${containerBorderMob}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerMobBGStyle}
        }
        .${uniqueId} .zb-brand-image img{
            ${brandPhotoPaddingMob}
            ${mobImageWidth}
            ${brandPhotoBorderRadiusMob}
            ${brandPhotoMobBGStyle}
            ${brandPhotoMarginMob}
            ${photoBorderMob}
        }
        .${uniqueId} .zb-brand-inner-content{
            ${brandContentMobAlignStyle}
        }
        .${uniqueId} .zb-brand-content{
            ${contentMobBGStyle}
            ${contentMobPadding}
        }
        .${uniqueId} .zb-brand-title{
            ${titleTypoMob}
            ${titleMarginMob}
            ${titleTextStrokeMob}
        }
        .${uniqueId} .zb-brand-link{
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
