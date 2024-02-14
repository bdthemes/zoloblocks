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
    PHOTO_ALIGN,
    CAPTION_ALIGN,
    IMG_MARGIN,
    CAPTION_MARGIN,
    OVERLAY_BG,
    OVERLAY_BORDER,
    OVERLAY_BRADIUS,
    OVERLAY_EDGE_DISTANCE,
    CONTENT_PADDING,
    HEADING_MARGIN,
    DESC_MARGIN,
    SEPARATOR_WIDTH,
    SEPARATOR_HEIGHT,
    SEPARATOR_MARGIN,
} from './constants';

import { CAPTION_TYPO, HEADING_TYPO, DESC_TYPO } from './constants/typoPrefixConstant';

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
    } = attributes;

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

    // overlay content
    const {
        dimensionStylesDesktop: contentPaddingDesk,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
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
            overlayContentPosition = `justify-content: flex-start; align-items: flex-start;`;
            break;

        case 'top center':
            overlayContentPosition = `justify-content: flex-start; align-items: center;`;
            break;

        case 'top right':
            overlayContentPosition = `justify-content: flex-start; align-items: flex-end;`;
            break;

        case 'center left':
            overlayContentPosition = `justify-content: center; align-items: flex-start;`;
            break;

        case 'center center':
            overlayContentPosition = `justify-content: center; align-items: center;`;
            break;

        case 'center right':
            overlayContentPosition = `justify-content: center; align-items: flex-end;`;
            break;

        case 'bottom left':
            overlayContentPosition = `justify-content: flex-end; align-items: flex-start;`;
            break;

        case 'bottom center':
            overlayContentPosition = `justify-content: flex-end; align-items: center;`;
            break;

        case 'bottom right':
            overlayContentPosition = `justify-content: flex-end; align-items: flex-end;`;
            break;

        default:
            overlayContentPosition = `justify-content: center; align-items: center;`;
            break;
    }

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-caption {
            ${captionDeskAlign}
            ${captionColor ? `color: ${captionColor};` : ''}
            ${captionTypoDesktop}
            ${captionMarginDesktop}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${titleDeskAlign}
        }
        .${uniqueId} .zolo-image-mask .zolo-img-wrap,
        .${uniqueId} .zolo-image-mask .zolo-img-wrap::before {
            ${maskStyles}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${imgMarginDesktop}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img {
            ${imgBorderStyles}
            ${imgBradiusDesk}
            ${imgBoxShadow}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap:hover .zolo-img {
            border-color: ${imgHoverBorder};
        }

        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::before {
            ${overlayDeskBGStyle}
            ${overlayDeskBradius}
            ${overlayDeskEdgeDistance}
            opacity: ${onOpacity};
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::after {
            ${overlayDeskBorderStyles}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap:hover::after {
            opacity: ${ohOpacity};
        }

        .${uniqueId} .zolo-adi-overlay .zolo-content-wrap {
            ${overlayContentPosition}
            ${contentPaddingDesk}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-title {
            ${headingColor ? `color: ${headingColor};` : ''}
            ${headingTypoDesktop}
            ${headingMarginDesk}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-caption {
            ${descriptionColor ? `color: ${descriptionColor};` : ''}
            ${descTypoDesktop}
            ${descMarginDesk}
        }
        .${uniqueId} .zolo-separator {
            ${separatorMarginDesk}
        }
        .${uniqueId} .zolo-separator span {
            border-top-color: ${separatorColor};
            ${separatorStyle ? `border-top-style: ${separatorStyle};` : ''}
            ${separatorWidthDesktop}
            ${separatorHeightDesktop}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-caption {
            ${captionTabAlign}
            ${captionTypoTab}
            ${captionMarginTab}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${titleTabAlign}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${imgMarginTab}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img {
            ${imgBorderStylesTab}
            ${imgBradiusTab}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::before {
            ${overlayTabBGStyle}
            ${overlayTabBradius}
            ${overlayTabEdgeDistance}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::after {
            ${overlayTabBorderStyles}
        }
        .${uniqueId} .zolo-adi-overlay .zolo-content-wrap {
            ${contentPaddingTab}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-title {
            ${headingTypoTab}
            ${headingMarginTab}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-caption {
            ${descTypoTab}
            ${descMarginTab}
        }

        .${uniqueId} .zolo-separator {
            ${separatorMarginTab}
        }
        .${uniqueId} .zolo-separator span {
            ${separatorWidthTab}
            ${separatorHeightTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-caption {
            ${captionMobAlign}
            ${captionTypoMob}
            ${captionMarginMob}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${titleMobAlign}
        }
        .${uniqueId} .zolo-image-block-wrap {
            ${imgMarginMob}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img {
            ${imgBorderStylesMob}
            ${imgBradiusMob}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::before {
            ${overlayMobBGStyle}
            ${overlayMobBradius}
            ${overlayMobEdgeDistance}
        }
        .${uniqueId} .zolo-image-block-wrap .zolo-img-wrap::after {
            ${overlayMobBorderStyles}
        }
        .${uniqueId} .zolo-adi-overlay .zolo-content-wrap {
            ${contentPaddingMob}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-title {
            ${headingTypoMob}
            ${headingMarginMob}
        }

        .${uniqueId} .zolo-adi-overlay .zolo-caption {
            ${descTypoMob}
            ${descMarginMob}
        }

        .${uniqueId} .zolo-separator {
            ${separatorMarginMob}
        }

        .${uniqueId} .zolo-separator span {
            ${separatorWidthMob}
            ${separatorHeightMob}
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
