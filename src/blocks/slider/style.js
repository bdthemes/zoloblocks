/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
const {
    generateResRangeStyle,
    generateDimensionStyle,
    generateBorderStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
    generateTypographyStyles,
} = window.zoloModule;

// Constants
import {
    SLIDER_HEIGHT,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    NAV_PADDING,
    NAV_MARGIN,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAGI_MARGIN,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    PAG_VERTICAL_OFFSET,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

import { PAGI_FRACTIONS_TYPO } from './constants/typoPrefixConstants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, navColor, navHoverColor, navHoverBorderColor, pagiFractionCurrentColor, pagiFractionColor, sliderOptions } =
        attributes;

    const { paginationType = 'bullets', navPosition = 'bottom-center' } = sliderOptions || {};

    // slider height
    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: SLIDER_HEIGHT,
        property: 'height',
        attributes,
    });

    // slider content
    const {
        desktopRangeStyle: deskContentWidth,
        tabRangeStyle: tabContentWidth,
        mobRangeStyle: mobContentWidth,
    } = generateResRangeStyle({
        controlName: CONTENT_WIDTH,
        property: 'max-width',
        attributes,
    });

    // content
    const {
        dimensionStylesDesktop: contentPaddingDesktop,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: navDeskMargin,
        dimensionStylesTab: navTabMargin,
        dimensionStylesMobile: navMobMargin,
    } = generateDimensionStyle({
        controlName: NAV_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        dimensionStylesDesktop: navDeskPadding,
        dimensionStylesTab: navTabPadding,
        dimensionStylesMobile: navMobPadding,
    } = generateDimensionStyle({
        controlName: NAV_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopBorderStyle: navBorderStyles,
        tabBorderStyle: navBorderStylesTab,
        mobBorderStyle: navBorderStylesMob,
    } = generateBorderStyle({
        controlName: NAV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: navBorderRadiusDesktop,
        dimensionStylesTab: navBorderRadiusTab,
        dimensionStylesMobile: navBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: navNormalBGStyle,
        backgroundStylesTab: navNormalBGStyleTab,
        backgroundStylesMobile: navNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: navHoverBGStyle,
        backgroundStylesTab: navHoverBGStyleTab,
        backgroundStylesMobile: navHoverBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    // navigation icon
    const {
        desktopRangeStyle: navDeskSize,
        tabRangeStyle: navTabSize,
        mobRangeStyle: navMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    const {
        desktopRangeStyle: cnavDeskSize,
        tabRangeStyle: cnavTabSize,
        mobRangeStyle: cnavMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // Pagination

    const {
        typoStylesDesktop: pagiFractionTypoDesk,
        typoStylesTab: pagiFractionTypoTab,
        typoStylesMobile: pagiFractionTypoMob,
    } = generateTypographyStyles({
        prefixConstant: PAGI_FRACTIONS_TYPO,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagiDeskMargin,
        dimensionStylesTab: pagiTabMargin,
        dimensionStylesMobile: pagiMobMargin,
    } = generateDimensionStyle({
        controlName: PAGI_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        desktopRangeStyle: pagDeskWidth,
        tabRangeStyle: pagTabWidth,
        mobRangeStyle: pagMobWidth,
    } = generateResRangeStyle({
        controlName: PAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: pagDeskHeight,
        tabRangeStyle: pagTabHeight,
        mobRangeStyle: pagMobHeight,
    } = generateResRangeStyle({
        controlName: PAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: pagBottomSpacingDesktop,
        tabRangeStyle: pagBottomSpacingTab,
        mobRangeStyle: pagBottomSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_VERTICAL_OFFSET,
        property: 'bottom',
        attributes,
    });

    const {
        desktopBorderStyle: pagBorderStyles,
        tabBorderStyle: pagBorderStylesTab,
        mobBorderStyle: pagBorderStylesMob,
    } = generateBorderStyle({
        controlName: PAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagBorderRadiusDesktop,
        dimensionStylesTab: pagBorderRadiusTab,
        dimensionStylesMobile: pagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: pagNormalBGStyle,
        backgroundStylesTab: pagNormalBGStyleTab,
        backgroundStylesMobile: pagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: PAG_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: pagSpacingDesktop,
        tabRangeStyle: pagSpacingTab,
        mobRangeStyle: pagSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_SPACING,
        property: 'gap',
        attributes,
    });

    // Active Pagination
    const {
        desktopRangeStyle: apagDeskWidth,
        tabRangeStyle: apagTabWidth,
        mobRangeStyle: apagMobWidth,
    } = generateResRangeStyle({
        controlName: APAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: apagDeskHeight,
        tabRangeStyle: apagTabHeight,
        mobRangeStyle: apagMobHeight,
    } = generateResRangeStyle({
        controlName: APAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: apagBorderStyles,
        tabBorderStyle: apagBorderStylesTab,
        mobBorderStyle: apagBorderStylesMob,
    } = generateBorderStyle({
        controlName: APAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: apagBorderRadiusDesktop,
        dimensionStylesTab: apagBorderRadiusTab,
        dimensionStylesMobile: apagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: APAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: apagNormalBGStyle,
        backgroundStylesTab: apagNormalBGStyleTab,
        backgroundStylesMobile: apagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: APAG_BG,
        attributes,
        noMainBGImg: true,
    });

    /**
     * Block Styles
     */
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-slider .swiper-slide,
        .${uniqueId}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {
            ${deskHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${deskContentWidth}
            ${contentPaddingDesktop}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev:hover {
            border-color: ${navHoverBorderColor} !important;
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev,
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskPadding}
        }

        ${
            navPosition !== 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-navigation-wrap {
                        ${navDeskMargin}
                    }
                 `
                : ''
        }

        ${
            navPosition === 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .zolo-nav-ps-center-center .swiper-nav-button {
                        ${navDeskMargin}
                    }
                 `
                : ''
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover,
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev:hover {
            ${navHoverBGStyle}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev{
            color: ${navColor};
            ${navDeskSize}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev svg {
            fill: ${navColor};
            ${cnavDeskSize}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, 
        .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover, 
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next:hover i, 
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev:hover i {
            color: ${navHoverColor};
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next:hover svg, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev:hover svg {
            fill: ${navHoverColor};
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-pagination {
            ${pagBottomSpacingDesktop}
            ${pagiDeskMargin}
            ${pagSpacingDesktop}
            ${pagiFractionTypoDesk}
            ${pagiFractionColor ? `color: ${pagiFractionColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-pagination .swiper-pagination-current {
            ${pagiFractionCurrentColor ? `color: ${pagiFractionCurrentColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet {
            ${pagDeskWidth}
            ${pagDeskHeight}
            ${pagBorderStyles}
            ${pagBorderRadiusDesktop}
            ${pagNormalBGStyle}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagDeskWidth}
            ${apagDeskHeight}
            ${apagBorderStyles}
            ${apagBorderRadiusDesktop}
            ${apagNormalBGStyle}
        }

        ${
            paginationType === 'progressbar'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar {
                        ${pagDeskHeight}
                        ${pagBorderStyles}
                        ${pagBorderRadiusDesktop}
                        ${pagNormalBGStyle}
                    }

                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                        ${apagNormalBGStyle}
                    }
                 `
                : ''
        }


    `;
    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-slider .swiper-slide,
        .${uniqueId}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {
            ${tabHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${tabContentWidth}
            ${contentPaddingTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev {
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
            ${navTabPadding}
        }

        ${
            navPosition !== 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-navigation-wrap {
                        ${navTabMargin}
                    }
                 `
                : ''
        }

        ${
            navPosition === 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .zolo-nav-ps-center-center .swiper-nav-button {
                        ${navTabMargin}
                    }
                 `
                : ''
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev{
            ${navTabSize}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev svg {
            ${cnavTabSize}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination {
            ${pagBottomSpacingTab}
            ${pagiTabMargin}
            ${pagSpacingTab}
            ${pagiFractionTypoTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }

        ${
            paginationType === 'progressbar'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar {
                        ${pagTabHeight}
                        ${pagBorderStylesTab}
                        ${pagBorderRadiusTab}
                        ${pagNormalBGStyleTab}
                    }

                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                        ${apagNormalBGStyleTab}
                    }
                 `
                : ''
        }
    `;
    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-slider .swiper-slide,
        .${uniqueId}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {
            ${mobHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${mobContentWidth}
            ${contentPaddingMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev {
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
            ${navMobPadding}
        }

        ${
            navPosition !== 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-navigation-wrap {
                        ${navMobMargin}
                    }
                 `
                : ''
        }

        ${
            navPosition === 'center-center'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .zolo-nav-ps-center-center .swiper-nav-button {
                        ${navMobMargin}
                    }
                 `
                : ''
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev{
            ${navMobSize}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-zolo-next svg, .${uniqueId}.wp-block-zolo-slider .swiper-zolo-prev svg {
            ${cnavMobSize}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-pagination {
            ${pagBottomSpacingMob}
            ${pagiMobMargin}
            ${pagSpacingMob}
            ${pagiFractionTypoMob}
        }

        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
        }

        ${
            paginationType === 'progressbar'
                ? `
                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar {
                        ${pagMobHeight}
                        ${pagBorderStylesMob}
                        ${pagBorderRadiusMob}
                        ${pagNormalBGStyleMob}
                    }

                    .${uniqueId}.wp-block-zolo-slider .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                        ${apagNormalBGStyleMob}
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
                desktopAllStyle={applyFilters('zolo.slider.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.slider.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.slider.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
