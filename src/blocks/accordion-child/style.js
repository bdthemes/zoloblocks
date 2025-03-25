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
    ICONTAINER_BG,
    ICONTAINER_HBG,
    ICONTAINER_PADDING,
    ICONTAINER_BORDER,
    ICONTAINER_BRADIUS,
    ICON_SIZE,
    ANIMATED_BORDER_SIZE,
} from './constants';

import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, preset, iconColor, iconHoverColor, titleColor, titleHoverColor, animatedBorderColor, animatedBorderActiveColor } =
        attributes;

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

    // accordion head
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });

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

    // accordion icon
    const {
        desktopRangeStyle: iconSizeDesk,
        tabRangeStyle: iconSizeTab,
        mobRangeStyle: iconSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHSizeDesk,
        tabRangeStyle: iconHSizeTab,
        mobRangeStyle: iconHSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: animatedBorderSizeDesk,
        tabRangeStyle: animatedBorderSizeTab,
        mobRangeStyle: animatedBorderSizeMob,
    } = generateResRangeStyle({
        controlName: ANIMATED_BORDER_SIZE,
        property: 'height',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child {
            ${containerNormalBgDesktop}
            ${containerBorderStyles}
            ${containerBorderRadiusDesktop}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderDesk}
            ${achBorderRadiusDesk}
            ${achPaddingDesk}
            ${achMarginDesk}
            ${achNormalBgDesktop}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgDesktop}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item .zolo-accordion-head-title {
            ${titleDeskTypo}
            ${titleColor ? `color: ${titleColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-head-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        ${
            preset === 'style-3'
                ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeDesk}
                    }

                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderColor ? `background: ${animatedBorderColor};` : ''}
                    }

                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before{
                        ${animatedBorderActiveColor ? `background: ${animatedBorderActiveColor};` : ''}
                    }
            `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item .zolo-accordion-toggle {
            ${icNormalDesk}
            ${borderStyles}
            ${borderRadiusDesktop}
            ${icPaddingDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverDesk}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg {
            ${iconSizeDesk}
            ${iconHSizeDesk}
            ${iconColor ? `fill: ${iconColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle svg {
            ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
            ${acbBorderDesk}
            ${acbBorderRadiusDesk}
            ${acbPaddingDesk}
            ${acbMarginDesk}
            ${acbNormalBgDesktop}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-block.wp-block-zolo-accordion-child{
            ${containerNormalBgTab}
            ${containerBorderStylesTab}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderTab}
            ${achBorderRadiusTab}
            ${achPaddingTab}
            ${achMarginTab}
            ${achNormalBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-title {
            ${titleTabTypo}
        }

        ${
            preset === 'style-3'
                ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeTab}
                    }
            `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle {
            ${icNormalTab}
            ${borderStylesTab}
            ${borderRadiusTab}
            ${icPaddingTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg {
            ${iconSizeTab}
            ${iconHSizeTab}
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
            ${acbBorderTab}
            ${acbBorderRadiusTab}
            ${acbPaddingTab}
            ${acbMarginTab}
            ${acbNormalBgTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-block.wp-block-zolo-accordion-child{
            ${containerNormalBgMob}
            ${containerBorderStylesMob}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            ${containerBoxShadow}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item {
            ${achBorderMob}
            ${achBorderRadiusMob}
            ${achPaddingMob}
            ${achMarginMob}
            ${achNormalBgMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover {
            ${achNormalHBgMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-title {
            ${titleMobTypo}
        }

        ${
            preset === 'style-3'
                ? `
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:before,
                    .zolo-accordion-wrap .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:after{
                        ${animatedBorderSizeMob}
                    }
            `
                : ''
        }

        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle {
            ${icNormalMob}
            ${borderStylesMob}
            ${borderRadiusMob}
            ${icPaddingMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-head-item:hover .zolo-accordion-toggle {
            ${icHoverMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-toggle svg{
            ${iconSizeMob}
            ${iconHSizeMob}
        }
        .${uniqueId}.zolo-block.wp-block-zolo-accordion-child .zolo-accordion-inner {
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
