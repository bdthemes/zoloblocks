/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateNormalBGControlStyles,
    GlobalStyleHanlder,
    generateBorderStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
} = window.zoloModule;

import {
    CHART_HEIGHT,
    CHART_BG_COLOR,
    CHART_BORDER,
    CHART_BORDER_RADIUS,
    CHART_MARGIN,
    CHART_PADDING,
    CHART_BOX_SHADOW,
    SUB_TITLE_ALIGNMENT,
} from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;
    const {} = attributes;

    // styles

    // const {
    //   desktopRangeStyle: deskHeight,
    //   tabRangeStyle: tabHeight,
    //   mobRangeStyle: mobHeight,
    // } = generateResRangeStyle({
    //   controlName: STAR_SIZE,
    //   property: "height",
    //   attributes,
    // });
    // accordion container
    const {
        desktopBorderStyle: chartBorderStyles,
        tabBorderStyle: chartBorderStylesTab,
        mobBorderStyle: chartBorderStylesMob,
    } = generateBorderStyle({
        controlName: CHART_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: chartBorderRadiusDesktop,
        dimensionStylesTab: chartBorderRadiusTab,
        dimensionStylesMobile: chartBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CHART_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: chartBoxShadow } = generateBoxShadowStyles({
        controlName: CHART_BOX_SHADOW,
        attributes,
    });

    const {
        dimensionStylesDesktop: chartPaddingDesk,
        dimensionStylesTab: chartPaddingTab,
        dimensionStylesMobile: chartPaddingMob,
    } = generateDimensionStyle({
        controlName: CHART_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: chartMarginDesk,
        dimensionStylesTab: chartMarginTab,
        dimensionStylesMobile: chartMarginMob,
    } = generateDimensionStyle({
        controlName: CHART_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const {
        backgroundStylesDesktop: chartDeskBg,
        backgroundStylesTab: chartTabBg,
        backgroundStylesMobile: chartMobBg,
    } = generateNormalBGControlStyles({
        controlName: CHART_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
       .${uniqueId} {
        ${chartDeskBg}
        ${chartBorderStyles}
        ${chartBorderRadiusDesktop}
        ${chartBoxShadow}
        ${chartPaddingDesk}
        ${chartMarginDesk}
        }
    `;

    const tabletAllStyle = `

    `;

    const mobileAllStyle = `

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
