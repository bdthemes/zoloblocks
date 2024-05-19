/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    CONTENT_ALIGN,
    CONTENT_V_ALIGN,
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
    COUNTER_MARGIN,
    COUNTER_GAP,
    COUNTER_TEXT_STROKE,
    COUNTER_TEXT_SHADOW,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_IMAGE_SIZE,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_BACKGROUND,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    ICON_BOX_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, titleTextColor, textColor, suffixColor, descColor, iconColor } = attributes;

    // content align
    const {
        desktopAlignStyle: contentAlignDesk,
        tabAlignStyle: contentAlignTab,
        mobAlignStyle: contentAlignMob,
    } = generateResAlignmentStyle({
        controlName: CONTENT_ALIGN,
        property: 'text-align',
        attributes,
    });

    const {
        desktopAlignStyle: contentAlignvDesk,
        tabAlignStyle: contentAlignvTab,
        mobAlignStyle: contentAlignvMob,
    } = generateResAlignmentStyle({
        controlName: CONTENT_V_ALIGN,
        property: 'align-items',
        attributes,
    });

    // Container
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
        desktopBorderStyle: containerBorderDeskStyle,
        tabBorderStyle: containerBorderTabStyle,
        mobBorderStyle: containerBorderMobStyle,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerDeskBorderRadius,
        dimensionStylesTab: containerTabBorderRadius,
        dimensionStylesMobile: containerMobBorderRadius,
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

    // counter
    const {
        dimensionStylesDesktop: counterMarginDesk,
        dimensionStylesTab: counterMarginTab,
        dimensionStylesMobile: counterMarginMob,
    } = generateDimensionStyle({
        controlName: COUNTER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        typoStylesDesktop: counterTypoDesktop,
        typoStylesTab: counterTypoTab,
        typoStylesMobile: counterTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: COUNTER_TYPOGRAPHY,
        attributes,
    });

    const {
        desktopRangeStyle: counterGapDesk,
        tabRangeStyle: counterGapTab,
        mobRangeStyle: counterGapMob,
    } = generateResRangeStyle({
        controlName: COUNTER_GAP,
        property: 'margin-left',
        attributes,
    });

    const { textShadowStyle: counterTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: COUNTER_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: counterTextStrokeStyleDesk,
        tabTextStrokeStyle: counterTextStrokeStyleTab,
        mobTextStrokeStyle: counterTextStrokeStyleMob,
    } = generateTextStrokeStyles({
        attributes,
        controlName: COUNTER_TEXT_STROKE,
    });

    // counter title
    const {
        typoStylesDesktop: titleTypoDesktop,
        typoStylesTab: titleTypoTab,
        typoStylesMobile: titleTypoMobile,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPOGRAPHY,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleMarginDesktop,
        dimensionStylesTab: titleMarginTab,
        dimensionStylesMobile: titleMarginMob,
    } = generateDimensionStyle({
        controlName: TITLE_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: TITLE_TEXT_SHADOW,
    });

    const {
        desktopTextStrokeStyle: titleTextStrokeStyle,
        tabTextStrokeStyle: tabTitleTextStrokeStyle,
        mobTextStrokeStyle: mobTitleTextStrokeStyle,
    } = generateTextStrokeStyles({
        attributes,
        controlName: TITLE_TEXT_STROKE,
    });

    // ICON - IMAGE
    const {
        desktopRangeStyle: iconImageWidthDesk,
        tabRangeStyle: iconImageWidthTab,
        mobRangeStyle: iconImageWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_IMAGE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: iconBorderRadiusDesktop,
        dimensionStylesTab: iconBorderRadiusTab,
        dimensionStylesMobile: iconBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICON_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMob,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: iconMarginDesktop,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMob,
    } = generateDimensionStyle({
        controlName: ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const {
        desktopRangeStyle: iconSize,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSize,
        tabRangeStyle: iconHSizeTab,
        mobRangeStyle: iconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        backgroundStylesDesktop: mediaBgDesk,
        backgroundStylesTab: mediaBgTab,
        backgroundStylesMobile: mediaBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BACKGROUND,
        attributes,
        noMainBGImg: true,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .zolo-counter-item {
            ${contentAlignDesk}
            ${containerDeskBGStyle}
			${containerBorderDeskStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerMarginDesk}
			${containerPaddingDesk}
        }
        .${uniqueId} .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvDesk}
        }

        .${uniqueId} .zolo-counter-count{
            color: ${textColor ? textColor : ''};
            ${counterMarginDesk}
            ${counterTextStrokeStyleDesk}
        }

        .${uniqueId} .zolo-counter-sub-text {
            ${suffixColor ? `color: ${suffixColor}; ` : ''}
            ${counterGapDesk}
        }

		.${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
			${counterTypoDesktop}
			${counterTextShadowStyle}
			color: ${descColor ? descColor : ''};
		}

        .${uniqueId} .zolo-counter-title{
            color: ${titleTextColor ? titleTextColor : ''};
            ${titleTypoDesktop}
            ${titleMarginDesktop}
            ${titleTextShadowStyle}
            ${titleTextStrokeStyle}
        }

        .${uniqueId} .zolo-counter-icon svg {
            ${iconSize}
            ${iconHSize}
			${iconColor ? `fill: ${iconColor}` : ''};
		}

        .${uniqueId} .zolo-counter-icon .zolo__display-icon, .${uniqueId} .zolo-counter-icon img {
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
            ${mediaBgDesk}
		}

        .${uniqueId} .zolo-counter-icon img {
            ${iconImageWidthDesk}
        }
  	`;

    const tabletAllStyle = `
        .${uniqueId} .zolo-counter-item {
            ${contentAlignTab}
            ${containerTabBGStyle}
            ${containerBorderTabStyle}
            ${containerTabBorderRadius}
            ${containerMarginTab}
            ${containerPaddingTab}
        }
        .${uniqueId} .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvTab}
        }
        .${uniqueId} .zolo-counter-count{
            ${counterMarginTab}
            ${counterTextStrokeStyleTab}
        }

        .${uniqueId} .zolo-counter-sub-text {
            ${counterGapTab}
        }

        .${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
            ${counterTypoTab}
        }

        .${uniqueId} .zolo-counter-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${tabTitleTextStrokeStyle}
        }

        .${uniqueId} .zolo-counter-icon .zolo__display-icon, .${uniqueId} .zolo-counter-icon img {
            ${borderStylesTab}
            ${iconBorderRadiusTab}
            ${iconPaddingTab}
            ${iconMarginTab}
            ${iconBoxShadow}
            ${mediaBgTab}
        }

        .${uniqueId} .zolo-counter-icon svg {
            ${iconSizeTab}
            ${iconHSizeTab}
        }

        .${uniqueId} .zolo-counter-icon img {
            ${iconImageWidthTab}
        }
	`;

    const mobileAllStyle = `
        .${uniqueId} .zolo-counter-item {
            ${contentAlignMob}
            ${containerMobBGStyle}
            ${containerBorderMobStyle}
            ${containerMobBorderRadius}
            ${containerMarginMob}
            ${containerPaddingMob}
        }
        .${uniqueId} .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvMob}
        }
        .${uniqueId} .zolo-counter-count{
            ${counterMarginMob}
            ${counterTextStrokeStyleMob}
        }

        .${uniqueId} .zolo-counter-sub-text {
            ${counterGapMob}
        }

        .${uniqueId} .animated-counter, .${uniqueId} .zolo-counter-sub-text{
            ${counterTypoMobile}
        }

        .${uniqueId} .zolo-counter-title{
            ${titleTypoMobile}
            ${titleMarginMob}
            ${mobTitleTextStrokeStyle}
        }

        .${uniqueId} .zolo-counter-icon .zolo__display-icon, .${uniqueId} .zolo-counter-icon img {
            ${borderStylesMob}
            ${iconBorderRadiusMob}
            ${iconPaddingMob}
            ${iconMarginMob}
            ${iconBoxShadow}
            ${mediaBgMob}
        }

        .${uniqueId} .zolo-counter-icon svg {
            ${iconSizeMob}
            ${iconHSizeMob}
        }

        .${uniqueId} .zolo-counter-icon img {
            ${iconImageWidthMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.counter.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.counter.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.counter.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
