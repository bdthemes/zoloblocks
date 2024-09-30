/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateMaskStyles,
    generateBoxShadowStyles,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    PHOTO_MASK,
    IMG_BORDER,
    IMG_BRADIUS,
    IMG_BSHADOW,
    IMG_HBSHADOW,
    PHOTO_ALIGN,
    IMG_WIDTH,
    IMGMAX_WIDTH,
    IMG_HEIGHT,
    CAPTION_ALIGN,
    IMG_MARGIN,
    CAPTION_MARGIN,
    OVERLAY_BG,
    OVERLAY_BORDER,
    OVERLAY_BRADIUS,
    OVERLAY_EDGE_DISTANCE,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_MAX_WIDTH,
    HEADING_MARGIN,
    DESC_MARGIN,
    SEPARATOR_WIDTH,
    SEPARATOR_HEIGHT,
    SEPARATOR_MARGIN,
} from './constants';

import { CAPTION_TYPO, HEADING_TYPO, DESC_TYPO } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        imgHoverBorder,
        captionColor,
        onOpacity,
        ohOpacity,
        ocPosition,
        headingColor,
        descriptionColor,
        separatorColor,
        separatorStyle,
        objectFit,
        // cssFilters: {},
    } = attributes;

    const { blur = 0, brightness = 100, contrast = 100, saturate = 100, hueRotate = 0 } = attributes?.cssFilters || {};

    const {
        blur: blurHover = 0,
        brightness: brightnessHover = 100,
        contrast: contrastHover = 100,
        saturate: saturateHover = 100,
        hueRotate: hueRotateHover = 0,
    } = attributes?.cssFiltersHover || {};

    // Image Alignment
    const {
        desktopAlignStyle: titleDeskAlign,
        tabAlignStyle: titleTabAlign,
        mobAlignStyle: titleMobAlign,
    } = generateResAlignmentStyle({
        controlName: PHOTO_ALIGN,
        property: 'justify-content',
        attributes,
    });
    //image sizes
    const {
        desktopRangeStyle: DesktopWidth,
        tabRangeStyle: TabWidth,
        mobRangeStyle: MobWidth,
    } = generateResRangeStyle({
        controlName: IMG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopMwidth,
        tabRangeStyle: TabMwidth,
        mobRangeStyle: MobMwidth,
    } = generateResRangeStyle({
        controlName: IMGMAX_WIDTH,
        property: 'max-width',
        attributes,
    });

    const {
        desktopRangeStyle: DesktopHeight,
        tabRangeStyle: TabHeight,
        mobRangeStyle: MobHeight,
    } = generateResRangeStyle({
        controlName: IMG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopAlignStyle: captionDeskAlign,
        tabAlignStyle: captionTabAlign,
        mobAlignStyle: captionMobAlign,
    } = generateResAlignmentStyle({
        controlName: CAPTION_ALIGN,
        property: 'text-align',
        attributes,
    });

    // masking
    const { maskStyle: maskStyles } = generateMaskStyles({
        attributes,
        controlName: PHOTO_MASK,
    });

    // overlay
    const {
        backgroundStylesDesktop: overlayDeskBGStyle,
        backgroundStylesTab: overlayTabBGStyle,
        backgroundStylesMobile: overlayMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: OVERLAY_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopBorderStyle: overlayDeskBorderStyles,
        tabBorderStyle: overlayTabBorderStyles,
        mobBorderStyle: overlayMobBorderStyles,
    } = generateBorderStyle({
        controlName: OVERLAY_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: overlayDeskBradius,
        dimensionStylesTab: overlayTabBradius,
        dimensionStylesMobile: overlayMobBradius,
    } = generateDimensionStyle({
        controlName: OVERLAY_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        desktopRangeStyle: overlayDeskEdgeDistance,
        tabRangeStyle: overlayTabEdgeDistance,
        mobRangeStyle: overlayMobEdgeDistance,
    } = generateResRangeStyle({
        controlName: OVERLAY_EDGE_DISTANCE,
        property: 'margin',
        attributes,
    });

    // image border
    const {
        desktopBorderStyle: imgBorderStyles,
        tabBorderStyle: imgBorderStylesTab,
        mobBorderStyle: imgBorderStylesMob,
    } = generateBorderStyle({
        controlName: IMG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: imgBradiusDesk,
        dimensionStylesTab: imgBradiusTab,
        dimensionStylesMobile: imgBradiusMob,
    } = generateDimensionStyle({
        controlName: IMG_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: imgBoxShadow } = generateBoxShadowStyles({
        controlName: IMG_BSHADOW,
        attributes,
    });

    const { boxShadowStyle: imgHBoxShadow } = generateBoxShadowStyles({
        controlName: IMG_HBSHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: imgMarginDesktop,
        dimensionStylesTab: imgMarginTab,
        dimensionStylesMobile: imgMarginMob,
    } = generateDimensionStyle({
        controlName: IMG_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Caption
    const {
        typoStylesDesktop: captionTypoDesktop,
        typoStylesTab: captionTypoTab,
        typoStylesMobile: captionTypoMob,
    } = generateTypographyStyles({
        prefixConstant: CAPTION_TYPO,
        attributes,
    });

    const {
        dimensionStylesDesktop: captionMarginDesktop,
        dimensionStylesTab: captionMarginTab,
        dimensionStylesMobile: captionMarginMob,
    } = generateDimensionStyle({
        controlName: CAPTION_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // content
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
        desktopRangeStyle: contentWidthDesktop,
        tabRangeStyle: contentWidthTab,
        mobRangeStyle: contentWidthMob,
    } = generateResRangeStyle({
        controlName: CONTENT_MAX_WIDTH,
        property: 'max-width',
        attributes,
    });

    // heading
    const {
        typoStylesDesktop: headingTypoDesktop,
        typoStylesTab: headingTypoTab,
        typoStylesMobile: headingTypoMob,
    } = generateTypographyStyles({
        prefixConstant: HEADING_TYPO,
        attributes,
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

    // description
    const {
        typoStylesDesktop: descTypoDesktop,
        typoStylesTab: descTypoTab,
        typoStylesMobile: descTypoMob,
    } = generateTypographyStyles({
        prefixConstant: DESC_TYPO,
        attributes,
    });

    const {
        dimensionStylesDesktop: descMarginDesk,
        dimensionStylesTab: descMarginTab,
        dimensionStylesMobile: descMarginMob,
    } = generateDimensionStyle({
        controlName: DESC_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // separator
    const {
        desktopRangeStyle: separatorWidthDesktop,
        tabRangeStyle: separatorWidthTab,
        mobRangeStyle: separatorWidthMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: separatorHeightDesktop,
        tabRangeStyle: separatorHeightTab,
        mobRangeStyle: separatorHeightMob,
    } = generateResRangeStyle({
        controlName: SEPARATOR_HEIGHT,
        property: 'border-top-width',
        attributes,
    });

    const {
        dimensionStylesDesktop: separatorMarginDesk,
        dimensionStylesTab: separatorMarginTab,
        dimensionStylesMobile: separatorMarginMob,
    } = generateDimensionStyle({
        controlName: SEPARATOR_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Overlay Content Position
    let overlayContentPosition;
    switch (ocPosition) {
        case 'top left':
            overlayContentPosition = `justify-content: flex-start; align-items: flex-start; text-align: left;`;
            break;

        case 'top center':
            overlayContentPosition = `justify-content: flex-start; align-items: center; text-align: center;`;
            break;

        case 'top right':
            overlayContentPosition = `justify-content: flex-start; align-items: flex-end; text-align: right;`;
            break;

        case 'center left':
            overlayContentPosition = `justify-content: center; align-items: flex-start; text-align: left;`;
            break;

        case 'center center':
            overlayContentPosition = `justify-content: center; align-items: center; text-align: center;`;
            break;

        case 'center right':
            overlayContentPosition = `justify-content: center; align-items: flex-end; text-align: right;`;
            break;

        case 'bottom left':
            overlayContentPosition = `justify-content: flex-end; align-items: flex-start; text-align: left;`;
            break;

        case 'bottom center':
            overlayContentPosition = `justify-content: flex-end; align-items: center; text-align: center;`;
            break;

        case 'bottom right':
            overlayContentPosition = `justify-content: flex-end; align-items: flex-end; text-align: right;`;
            break;

        default:
            overlayContentPosition = `justify-content: center; align-items: center; text-align: center;`;
            break;
    }

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-caption {
            ${captionDeskAlign}
            ${captionColor ? `color: ${captionColor};` : ''}
            ${captionTypoDesktop}
            ${captionMarginDesktop}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-img-wrap {
            ${DesktopWidth}
            ${DesktopMwidth}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${titleDeskAlign}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-mask .zolo-img-wrap,
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-mask .zolo-img-wrap::before {
            ${maskStyles}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${imgMarginDesktop}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap.no-mask .zolo-img {
            ${imgBorderStyles}
            ${imgBradiusDesk}
            ${imgBoxShadow}
            ${objectFit && objectFit !== 'none' && `object-fit:${objectFit}`}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img {
            ${DesktopHeight}
        }

       .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img{
            filter:
                blur(${blur}px)
                brightness(${brightness}%)
                contrast(${contrast}%)
                saturate(${saturate}%)
                hue-rotate(${hueRotate}deg)
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img:hover {
            filter:
                blur(${blurHover}px)
                brightness(${brightnessHover}%)
                contrast(${contrastHover}%)
                saturate(${saturateHover}%)
                hue-rotate(${hueRotateHover}deg)
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap.no-mask:hover .zolo-img-wrap .zolo-img {
            border-color: ${imgHoverBorder};
            ${imgHBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-img-wrap::before {
            ${overlayDeskBGStyle}
            ${imgBradiusDesk}
            opacity: ${onOpacity};
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-image-block-inner:hover .zolo-img-wrap::before{
            opacity: ${ohOpacity};
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-img-wrap::after {
            ${overlayDeskBorderStyles}
            ${overlayDeskEdgeDistance}
            ${overlayDeskBradius}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-content-wrap {
            ${overlayContentPosition}
            ${contentPaddingDesk}
            ${contentMarginDesk}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-inner-content {
            ${contentWidthDesktop}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-title {
            ${headingColor ? `color: ${headingColor};` : ''}
            ${headingTypoDesktop}
            ${headingMarginDesk}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-caption {
            ${descriptionColor ? `color: ${descriptionColor};` : ''}
            ${descTypoDesktop}
            ${descMarginDesk}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator {
            ${separatorMarginDesk}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator span {
            border-top-color: ${separatorColor};
            ${separatorStyle ? `border-top-style: ${separatorStyle};` : ''}
            ${separatorWidthDesktop}
            ${separatorHeightDesktop}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-caption {
            ${captionTabAlign}
            ${captionTypoTab}
            ${captionMarginTab}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-img-wrap {
            ${TabWidth}
            ${TabMwidth}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${titleTabAlign}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${imgMarginTab}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap.no-mask .zolo-img {
            ${imgBorderStylesTab}
            ${imgBradiusTab}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img {
           ${TabHeight}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img-wrap::before {
            ${overlayTabBGStyle}
            ${imgBradiusTab}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img-wrap::after {
            ${overlayTabBorderStyles}
            ${overlayTabEdgeDistance}
            ${overlayTabBradius}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-content-wrap {
            ${contentPaddingTab}
            ${contentMarginTab}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-inner-content {
            ${contentWidthTab}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-title {
            ${headingTypoTab}
            ${headingMarginTab}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-caption {
            ${descTypoTab}
            ${descMarginTab}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator {
            ${separatorMarginTab}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator span {
            ${separatorWidthTab}
            ${separatorHeightTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-caption {
            ${captionMobAlign}
            ${captionTypoMob}
            ${captionMarginMob}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-img-wrap {
            ${MobWidth}
            ${MobMwidth}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${titleMobAlign}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap {
            ${imgMarginMob}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap.no-mask .zolo-img {
            ${imgBorderStylesMob}
            ${imgBradiusMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img {
           ${MobHeight}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img-wrap::before {
            ${overlayMobBGStyle}
            ${imgBradiusMob}
        }
        .${uniqueId}.wp-block-zolo-advanced-image .zolo-image-block-wrap .zolo-img-wrap::after {
            ${overlayMobBorderStyles}
            ${overlayMobEdgeDistance}
            ${overlayMobBradius}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-content-wrap {
            ${contentPaddingMob}
            ${contentMarginMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-inner-content {
            ${contentWidthMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-title {
            ${headingTypoMob}
            ${headingMarginMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-adi-overlay .zolo-caption {
            ${descTypoMob}
            ${descMarginMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator {
            ${separatorMarginMob}
        }

        .${uniqueId}.wp-block-zolo-advanced-image .zolo-separator span {
            ${separatorWidthMob}
            ${separatorHeightMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedImage.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedImage.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedImage.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
