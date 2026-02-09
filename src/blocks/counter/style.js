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
    generateMaskStyles,
} = window.zoloModule;

import {
    CONTENT_ALIGN,
    CONTENT_V_ALIGN,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
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
    ICON_HOVER_BG,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    TITLE_MARGIN,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TITLE_BACKGROUND,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_PADDING,
    TITLE_BOX_SHADOW,
    TITLE_HOVER_BOX_SHADOW,
    NUMBER_BG_MASK,
    NUMBER_BACKGROUND,
    NUMBER_BG_SIZE,
    NUMBER_PADDING,
    NUMBER_BORDER,
    NUMBER_BOX_SHADOW,
    NUMBER_HOVER_BOX_SHADOW,
    NUMBER_BORDER_RADIUS,
} from './constants';

import { TITLE_TYPOGRAPHY, COUNTER_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        uniqueId,
        titleTextColor,
        titleHoverColor,
        textColor,
        suffixColor,
        descColor,
        iconColor,
        iconHoverColor,
        numberHoverColor,
        suffixHoverColor,
    } = attributes;

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
        backgroundStylesDesktop: containerHoverDeskBGStyle,
        backgroundStylesTab: containerHoverTabBGStyle,
        backgroundStylesMobile: containerHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_HOVER_BG,
        attributes,
        noMainBGImg: false,
    });

    const { boxShadowStyle: containerHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
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

    const {
        backgroundStylesDesktop: titleDeskBGStyle,
        backgroundStylesTab: titleTabBGStyle,
        backgroundStylesMobile: titleMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: TITLE_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: titleBorderDeskStyle,
        tabBorderStyle: titleBorderTabStyle,
        mobBorderStyle: titleBorderMobStyle,
    } = generateBorderStyle({
        controlName: TITLE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: titleDeskBorderRadius,
        dimensionStylesTab: titleTabBorderRadius,
        dimensionStylesMobile: titleMobBorderRadius,
    } = generateDimensionStyle({
        controlName: TITLE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: titlePaddingDesk,
        dimensionStylesTab: titlePaddingTab,
        dimensionStylesMobile: titlePaddingMob,
    } = generateDimensionStyle({
        controlName: TITLE_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const { boxShadowStyle: titleBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_BOX_SHADOW,
    });

    const { boxShadowStyle: titleHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: TITLE_HOVER_BOX_SHADOW,
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

    const {
        backgroundStylesDesktop: iconHoverBgDesk,
        backgroundStylesTab: iconHoverBgTab,
        backgroundStylesMobile: iconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    const { boxShadowStyle: iconHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: ICON_HOVER_BOX_SHADOW,
    });

    // masking
    const { maskStyle: maskStyles } = generateMaskStyles({
        attributes,
        controlName: NUMBER_BG_MASK,
    });

    // Number
    const {
        backgroundStylesDesktop: numberBgDesktop,
        backgroundStylesTab: numberBgTab,
        backgroundStylesMobile: numberBgMobile,
    } = generateNormalBGControlStyles({
        controlName: NUMBER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopRangeStyle: numberBgSizeDesktop,
        tabRangeStyle: numberBgSizeTab,
        mobRangeStyle: numberBgSizeMobile,
    } = generateResRangeStyle({
        controlName: NUMBER_BG_SIZE,
        property: '--zolo-counter-number-bg-size',
        attributes,
    });

    const {
        dimensionStylesDesktop: numberPaddingDesktop,
        dimensionStylesTab: numberPaddingTab,
        dimensionStylesMobile: numberPaddingMobile,
    } = generateDimensionStyle({
        controlName: NUMBER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: numberBorderDesktop,
        tabBorderStyle: numberBorderTab,
        mobBorderStyle: numberBorderMobile,
    } = generateBorderStyle({
        controlName: NUMBER_BORDER,
        attributes,
    });

    const { boxShadowStyle: numberBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: NUMBER_BOX_SHADOW,
    });

    const {
        dimensionStylesDesktop: numberBorderRadiusDesktop,
        dimensionStylesTab: numberBorderRadiusTab,
        dimensionStylesMobile: numberBorderRadiusMobile,
    } = generateDimensionStyle({
        controlName: NUMBER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: numberHoverBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: NUMBER_HOVER_BOX_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item {
            ${contentAlignDesk}
            ${containerDeskBGStyle}
			${containerBorderDeskStyle}
			${containerDeskBorderRadius}
			${containerBoxShadow}
			${containerMarginDesk}
			${containerPaddingDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover {
            ${containerHoverDeskBGStyle}
            ${containerHoverBoxShadow}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-count{
            color: ${textColor ? textColor : ''};
            ${counterMarginDesk}
            ${counterTextStrokeStyleDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text {
            ${suffixColor ? `color: ${suffixColor}; ` : ''}
            ${counterGapDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-count {
            ${numberHoverColor ? `color: ${numberHoverColor};` : ''}
            ${numberHoverBoxShadow}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-sub-text {
            ${suffixHoverColor ? `color: ${suffixHoverColor};` : ''}
        }

		.${uniqueId}.zolo-block.wp-block-zolo-counter .animated-counter, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text{
			${counterTypoDesktop}
			${counterTextShadowStyle}
			color: ${descColor ? descColor : ''};
		}

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title{
            color: ${titleTextColor ? titleTextColor : ''};
            ${titleTypoDesktop}
            ${titleMarginDesktop}
            ${titleTextShadowStyle}
            ${titleTextStrokeStyle}
            ${titleBoxShadow}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            ${titleHoverBoxShadow}
        }

        ${
            preset === 'style-3'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title {
                        ${titleDeskBGStyle}
                        ${titleBorderDeskStyle}
                        ${titleDeskBorderRadius}
                        ${titlePaddingDesk}
                    }
                `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon svg {
            ${iconSize}
            ${iconHSize}
			${iconColor ? `fill: ${iconColor}` : ''};
		}

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon .zolo__display-icon, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
			${borderStyles}
			${iconBorderRadiusDesktop}
			${iconPaddingDesktop}
			${iconMarginDesktop}
			${iconBoxShadow}
            ${mediaBgDesk}
		}

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon svg {
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon .zolo__display-icon,
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon img {
            ${iconHoverBgDesk}
            ${iconHoverBoxShadow}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
            ${iconImageWidthDesk}
        }

        ${
            preset === 'style-4'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-4 .zolo-counter-count{
                        ${maskStyles}
                        ${numberBgDesktop}
                        ${numberBgSizeDesktop}
                        ${numberPaddingDesktop}
                        ${numberBorderDesktop}

                        ${numberBoxShadow}
                        ${numberBorderRadiusDesktop}
                    }
                `
                : ''
        }


  	`;

    const tabletAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item {
            ${contentAlignTab}
            ${containerTabBGStyle}
            ${containerBorderTabStyle}
            ${containerTabBorderRadius}
            ${containerMarginTab}
            ${containerPaddingTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover {
            ${containerHoverTabBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvTab}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-count{
            ${counterMarginTab}
            ${counterTextStrokeStyleTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text {
            ${counterGapTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-count {
            ${numberHoverColor ? `color: ${numberHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-sub-text {
            ${suffixHoverColor ? `color: ${suffixHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .animated-counter, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text{
            ${counterTypoTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title{
            ${titleTypoTab}
            ${titleMarginTab}
            ${tabTitleTextStrokeStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }
        
        ${
            preset === 'style-3'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title {
                        ${titleBorderTabStyle}
                        ${titleTabBorderRadius}
                        ${titlePaddingTab}
                    }
                `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon .zolo__display-icon, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
            ${borderStylesTab}
            ${iconBorderRadiusTab}
            ${iconPaddingTab}
            ${iconMarginTab}
            ${iconBoxShadow}
            ${mediaBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon .zolo__display-icon,
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon img {
            ${iconHoverBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon svg {
            ${iconSizeTab}
            ${iconHSizeTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
            ${iconImageWidthTab}
        }

        ${
            preset === 'style-4'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-4 .zolo-counter-count{
                        ${numberBgTab}
                        ${numberBgSizeTab}
                        ${numberPaddingTab}
                        ${numberBorderTab}
                        ${numberBorderRadiusTab}
                    }
                `
                : ''
        }
	`;

    const mobileAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item {
            ${contentAlignMob}
            ${containerMobBGStyle}
            ${containerBorderMobStyle}
            ${containerMobBorderRadius}
            ${containerMarginMob}
            ${containerPaddingMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover {
            ${containerHoverMobBGStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-1 .zolo-counter-item {
            ${contentAlignvMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-count{
            ${counterMarginMob}
            ${counterTextStrokeStyleMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text {
            ${counterGapMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-count {
            ${numberHoverColor ? `color: ${numberHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-sub-text {
            ${suffixHoverColor ? `color: ${suffixHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .animated-counter, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-sub-text{
            ${counterTypoMobile}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title{
            ${titleTypoMobile}
            ${titleMarginMob}
            ${mobTitleTextStrokeStyle}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        ${
            preset === 'style-3'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-title {
                        ${titleBorderMobStyle}
                        ${titleMobBorderRadius}
                        ${titlePaddingMob}
                    }
                `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon .zolo__display-icon, .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
            ${borderStylesMob}
            ${iconBorderRadiusMob}
            ${iconPaddingMob}
            ${iconMarginMob}
            ${iconBoxShadow}
            ${mediaBgMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon .zolo__display-icon,
        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-item:hover .zolo-counter-icon img {
            ${iconHoverBgMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon svg {
            ${iconSizeMob}
            ${iconHSizeMob}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-icon img {
            ${iconImageWidthMob}
        }


        ${
            preset === 'style-4'
                ? `
                    .${uniqueId}.zolo-block.wp-block-zolo-counter .zolo-counter-wrap.style-4 .zolo-counter-count{
                        ${numberBgMobile}
                        ${numberBgSizeMobile}
                        ${numberPaddingMobile}
                        ${numberBorderMobile}
                        ${numberBorderRadiusMobile}
                    }
                `
                : ''
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
