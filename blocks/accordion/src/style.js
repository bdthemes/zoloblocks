/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateBoxShadowStyles,
    generateBorderStyle,
    generateDimensionStyle,
    generateResRangeStyle,
    generateNormalBGControlStyles,
    generateTypographyStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    AC_CONTAINER_BORDER,
    AC_CONTAINER_BORDER_RADIUS,
    AC_CONTAINER_BG,
    AC_CONTAINER_BOX_SHADOW,
    AC_CONTAINER_PADDING,
    AC_CONTAINER_MARGIN,
    ICONCONTAINER_WIDTH,
    ICONCONTAINER_HEIGHT,
    ICONTAINER_BG,
    ICONTAINER_HBG,
    ICONTAINER_PADDING,
    ICONTAINER_BORDER,
    ICONTAINER_BRADIUS,
    ICON_SIZE,
    AC_HEADER_BORDER,
    AC_HEADER_BORDER_RADIUS,
    AC_HEADER_BG,
    AC_HEADER_HBG,
    AC_HEADER_PADDING,
    AC_HEADER_MARGIN,
    AC_BODY_BORDER,
    AC_BODY_BORDER_RADIUS,
    AC_BODY_BG,
    AC_BODY_PADDING,
    AC_BODY_MARGIN,
    AAC_HEADER_BG,
    AAC_BODY_BG,
    AICONTAINER_BG,
} from './constants';

import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;

    const { uniqueId, iconColor, iconHoverColor, aiconColor, titleColor, titleHoverColor, atitleColor } = attributes;

    // accordion container
    const {
        desktopBorderStyle: containerBorderStyles,
        tabBorderStyle: containerBorderStylesTab,
        mobBorderStyle: containerBorderStylesMob,
    } = generateBorderStyle({
        controlName: AC_CONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerBorderRadiusDesktop,
        dimensionStylesTab: containerBorderRadiusTab,
        dimensionStylesMobile: containerBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: AC_CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: containerNormalBgDesktop,
        backgroundStylesTab: containerNormalBgTab,
        backgroundStylesMobile: containerNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AC_CONTAINER_BG,
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        controlName: AC_CONTAINER_BOX_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerPaddingDesk,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMob,
    } = generateDimensionStyle({
        controlName: AC_CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: AC_CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Accordion Head
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });

    // icon container
    const {
        backgroundStylesDesktop: icNormalDesk,
        backgroundStylesTab: icNormalTab,
        backgroundStylesMobile: icNormalMob,
    } = generateNormalBGControlStyles({
        controlName: ICONTAINER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: icHoverDesk,
        backgroundStylesTab: icHoverTab,
        backgroundStylesMobile: icHoverMob,
    } = generateNormalBGControlStyles({
        controlName: ICONTAINER_HBG,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: borderStyles,
        tabBorderStyle: borderStylesTab,
        mobBorderStyle: borderStylesMob,
    } = generateBorderStyle({
        controlName: ICONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: borderRadiusDesktop,
        dimensionStylesTab: borderRadiusTab,
        dimensionStylesMobile: borderRadiusMob,
    } = generateDimensionStyle({
        controlName: ICONTAINER_BRADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: icPaddingDesk,
        dimensionStylesTab: icPaddingTab,
        dimensionStylesMobile: icPaddingMob,
    } = generateDimensionStyle({
        controlName: ICONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        desktopRangeStyle: icHeightDesk,
        tabRangeStyle: icHeightTab,
        mobRangeStyle: icHeightMob,
    } = generateResRangeStyle({
        controlName: ICONCONTAINER_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: icWidthtDesk,
        tabRangeStyle: icWidthTab,
        mobRangeStyle: icWidthMob,
    } = generateResRangeStyle({
        controlName: ICONCONTAINER_WIDTH,
        property: 'width',
        attributes,
    });

    // accordion icon
    const {
        desktopRangeStyle: iconSizeDesk,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // accordion head
    const {
        desktopBorderStyle: achBorderDesk,
        tabBorderStyle: achBorderTab,
        mobBorderStyle: achBorderMob,
    } = generateBorderStyle({
        controlName: AC_HEADER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: achBorderRadiusDesk,
        dimensionStylesTab: achBorderRadiusTab,
        dimensionStylesMobile: achBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: AC_HEADER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: achNormalBgDesktop,
        backgroundStylesTab: achNormalBgTab,
        backgroundStylesMobile: achNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AC_HEADER_BG,
        attributes,
    });

    const {
        backgroundStylesDesktop: achNormalHBgDesktop,
        backgroundStylesTab: achNormalHBgTab,
        backgroundStylesMobile: achNormalHBgMob,
    } = generateNormalBGControlStyles({
        controlName: AC_HEADER_HBG,
        attributes,
    });

    const {
        dimensionStylesDesktop: achPaddingDesk,
        dimensionStylesTab: achPaddingTab,
        dimensionStylesMobile: achPaddingMob,
    } = generateDimensionStyle({
        controlName: AC_HEADER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: achMarginDesk,
        dimensionStylesTab: achMarginTab,
        dimensionStylesMobile: achMarginMob,
    } = generateDimensionStyle({
        controlName: AC_HEADER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // accordion body
    const {
        desktopBorderStyle: acbBorderDesk,
        tabBorderStyle: acbBorderTab,
        mobBorderStyle: acbBorderMob,
    } = generateBorderStyle({
        controlName: AC_BODY_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: acbBorderRadiusDesk,
        dimensionStylesTab: acbBorderRadiusTab,
        dimensionStylesMobile: acbBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: AC_BODY_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: acbNormalBgDesktop,
        backgroundStylesTab: acbNormalBgTab,
        backgroundStylesMobile: acbNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AC_BODY_BG,
        attributes,
    });

    const {
        dimensionStylesDesktop: acbPaddingDesk,
        dimensionStylesTab: acbPaddingTab,
        dimensionStylesMobile: acbPaddingMob,
    } = generateDimensionStyle({
        controlName: AC_BODY_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: acbMarginDesk,
        dimensionStylesTab: acbMarginTab,
        dimensionStylesMobile: acbMarginMob,
    } = generateDimensionStyle({
        controlName: AC_BODY_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // accordion active
    const {
        backgroundStylesDesktop: aachNormalBgDesktop,
        backgroundStylesTab: aachNormalBgTab,
        backgroundStylesMobile: aachNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AAC_HEADER_BG,
        attributes,
    });

    const {
        backgroundStylesDesktop: aacbNormalBgDesktop,
        backgroundStylesTab: aacbNormalBgTab,
        backgroundStylesMobile: aacbNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AAC_BODY_BG,
        attributes,
    });

    const {
        backgroundStylesDesktop: aaiNormalBgDesktop,
        backgroundStylesTab: aaiNormalBgTab,
        backgroundStylesMobile: aaiNormalBgMob,
    } = generateNormalBGControlStyles({
        controlName: AICONTAINER_BG,
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} .wp-block-zolo-accordion-child{
            ${containerNormalBgDesktop}
            ${containerBorderStyles}
            ${containerBorderRadiusDesktop}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerBoxShadow}
        }
        .${uniqueId} .accordion-head {
            ${achNormalBgDesktop}
            ${achBorderDesk}
            ${achBorderRadiusDesk}
            ${achPaddingDesk}
            ${achMarginDesk}
        }

        .${uniqueId} .accordion-head:hover {
            ${achNormalHBgDesktop}
        }

        .${uniqueId} .accordion-head .accordion-title {
            ${titleDeskTypo}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle {
            ${icNormalDesk}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${icPaddingDesk}
            ${icHeightDesk}
            ${icWidthtDesk}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle:hover {
            ${icHoverDesk}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle i {
            ${iconSizeDesk}
            ${iconColor ? `color: ${iconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle:hover i {
            ${iconHoverColor ? `color: ${iconHoverColor};` : ''}
        }

        .${uniqueId} .accordion-body-inner {
            ${acbBorderDesk}
            ${acbBorderRadiusDesk}
            ${acbPaddingDesk}
            ${acbMarginDesk}
            ${acbNormalBgDesktop}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-head.zolo-active {
            ${aachNormalBgDesktop}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-head .accordion-title{
            ${titleColor ? `color: ${titleColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-head .accordion-title:hover{
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-head.zolo-active .accordion-title{
            ${atitleColor ? `color: ${atitleColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle.zolo-active {
            ${aaiNormalBgDesktop}
            ${aiconColor ? `color: ${aiconColor};` : ''}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-body.zolo-active {
            ${aacbNormalBgDesktop}
        }

    `;

    const tabletAllStyle = `
        .${uniqueId} .wp-block-zolo-accordion-child{
            ${containerNormalBgTab}
            ${containerBorderStylesTab}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerBoxShadow}
        }
        .${uniqueId} .accordion-head {
            ${achNormalBgTab}
            ${achBorderTab}
            ${achBorderRadiusTab}
            ${achPaddingTab}
            ${achMarginTab}
        }

        .${uniqueId} .accordion-head:hover {
            ${achNormalHBgTab}
        }

        .${uniqueId} .accordion-head .accordion-title {
            ${titleTabTypo}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle {
            ${icNormalTab}
            ${borderStylesTab}
            ${borderRadiusTab}
            ${icPaddingTab}
            ${icHeightTab}
            ${icWidthTab}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle:hover {
            ${icHoverTab}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle i {
            ${iconSizeTab}
        }

        .${uniqueId} .accordion-body-inner {
            ${acbBorderTab}
            ${acbBorderRadiusTab}
            ${acbPaddingTab}
            ${acbMarginTab}
            ${acbNormalBgTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .wp-block-zolo-accordion-child{
            ${containerNormalBgMob}
            ${containerBorderStylesMob}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerBoxShadow}
        }
        
        .${uniqueId} .accordion-head {
            ${achNormalBgMob}
            ${achBorderMob}
            ${achBorderRadiusMob}
            ${achPaddingMob}
            ${achMarginMob}
        }

        .${uniqueId} .accordion-head:hover {
            ${achNormalHBgMob}
        }

        .${uniqueId} .accordion-head .accordion-title {
            ${titleMobTypo}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle {
            ${icNormalMob}
            ${borderStylesMob}
            ${borderRadiusMob}
            ${icPaddingMob}
            ${icHeightMob}
            ${icWidthMob}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle:hover {
            ${icHoverMob}
        }

        .${uniqueId}.wp-block-zolo-accordion .accordion-toggle i {
            ${iconSizeMob}
        }

        .${uniqueId} .accordion-body-inner {
            ${acbBorderMob}
            ${acbBorderRadiusMob}
            ${acbPaddingMob}
            ${acbMarginMob}
            ${acbNormalBgMob}
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
