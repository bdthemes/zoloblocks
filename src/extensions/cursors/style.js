/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateNormalBGControlStyles,
    generateBorderStyle,
    generateDimensionStyle,
} = window.zoloModule;

import { 
    TEXT_BG_COLOR, 
    TEXT_BORDER, 
    TEXT_BORDER_RADIUS, 
    TEXT_PADDING,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
} from './constants';

// import { TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';

const Style = (props) => {
    const { attributes } = props;
    const { zoloCursors, uniqueId } = attributes;

    const {} = zoloCursors;

    const {
        backgroundStylesDesktop: textBgColorDesk,
        backgroundStylesTab: textBgColorTab,
        backgroundStylesMob: textBgColorMob,
    } = generateNormalBGControlStyles({
        controlName: TEXT_BG_COLOR,
        noMainBGIMG: false,
        attributes,
    });

    const {
        desktopBorderStyle: textBorderDesk,
        tabBorderStyle: textBorderTab,
        mobBorderStyle: textBorderMob,
    } = generateBorderStyle({
        controlName: TEXT_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: textBorderRadiusDesk,
        dimensionStylesTab: textBorderRadiusTab,
        dimensionStylesMobile: textBorderRadiusMob,
    } =generateDimensionStyle({
        controlName: TEXT_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: textPaddingDesk,
        dimensionStylesTab: textPaddingTab,
        dimensionStylesMobile: textPaddingMob,
    } = generateDimensionStyle({
        controlName: TEXT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // const {
    //     typoStylesDesktop: textTypoDesk,
    //     typoStylesTab: textTypoTab,
    //     typoStylesMobile: textTypoMob,
    // } = generateTypographyStyles({
    //     prefixContants: TEXT_TYPOGRAPHY,
    //     attributes,
    // });

    const {
        desktopBorderStyle: imageBorderDesk,
        tabBorderStyle: imageBorderTab,
        mobBorderStyle: imageBorderMob,
    } = generateBorderStyle({
        controlName: IMAGE_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: imageBorderRadiusDesk,
        dimensionStylesTab: imageBorderRadiusTab,
        dimensionStylesMobile: imageBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: IMAGE_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });


    const zoloCursorsDesktop = ``;
    const zoloCursorsTablet = ``;
    const zoloCursorsMobile = ``;

    return {
        zoloCursorsDesktop,
        zoloCursorsTablet,
        zoloCursorsMobile,
    };
};
export default Style;
