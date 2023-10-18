/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
const {
    generateResRangeStyle,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBorderStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

// Constants
import {
    COLUMNS,
    COLUMNS_GAP,
    SLIDER_HEIGHT,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, navColor, navHoverColor } = attributes;

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

    // Navigation
    const {
        desktopRangeStyle: navDeskWidth,
        tabRangeStyle: navTabWidth,
        mobRangeStyle: navMobWidth,
    } = generateResRangeStyle({
        controlName: NAV_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskHeight,
        tabRangeStyle: navTabHeight,
        mobRangeStyle: navMobHeight,
    } = generateResRangeStyle({
        controlName: NAV_HEIGHT,
        property: 'height',
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

    // Pagination
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
        .${uniqueId}.wp-block-zolo-slider .swiper-slide {
            ${deskHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${deskContentWidth}
            ${contentPaddingDesktop}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskWidth}
            ${navDeskHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover {
            ${navHoverBGStyle}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:after, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:after {
            color: ${navColor};
            ${navDeskSize}

        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover:after, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover:after {
            color: ${navHoverColor};
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets {
            ${pagSpacingDesktop}
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
    `;
    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-slider .swiper-slide {
            ${tabHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${tabContentWidth}
            ${contentPaddingTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev {
            ${navTabWidth}
            ${navTabHeight}
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:after, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:after {
            ${navTabSize}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
            ${pagSpacingTab}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }
    `;
    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-slider .swiper-slide {
            ${mobHeight}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-content-outer {
            ${mobContentWidth}
            ${contentPaddingMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev {
            ${navMobWidth}
            ${navMobHeight}
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:hover, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-button-next:after, .${uniqueId}.wp-block-zolo-slider .swiper-button-prev:after {
            ${navMobSize}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
            ${pagSpacingMob}
        }
        .${uniqueId}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {
            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
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
