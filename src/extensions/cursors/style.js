/**
 * Internal depencencies
 */
const { generateNormalBGControlStyles, generateBorderStyle, generateDimensionStyle, generateResRangeStyle, generateTypographyStyles } =
    window.zoloModule;

import { TEXT_BG_COLOR,DOT_SIZE,TEXT_BORDER, TEXT_BORDER_RADIUS, TEXT_PADDING, IMAGE_BORDER, IMAGE_BORDER_RADIUS } from './constants';

// import { CURSOR_TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { CURSOR_TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = (props) => {
console.log('CURSOR_TEXT_TYPOGRAPHY', CURSOR_TEXT_TYPOGRAPHY);

    const { attributes } = props;
    const { zoloCursors, uniqueId } = attributes;

    const { primaryColor, textColor } = zoloCursors;

    // Accordion Head
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: CURSOR_TEXT_TYPOGRAPHY,
        attributes,
    });

    console.log('titleDeskTypo', titleDeskTypo);
    const {
        desktopRangeStyle: dotWidthDesk,
        tabRangeStyle: dotWidthTab,
        mobRangeStyle: dotWidthMob,
    } = generateResRangeStyle({
        controlName: DOT_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: dotHeightDesk,
        tabRangeStyle: dotHeightTab,
        mobRangeStyle: dotHeightMob,
    } = generateResRangeStyle({
        controlName: DOT_SIZE,
        property: 'height',
        attributes,
    });
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
    } = generateDimensionStyle({
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
    //     prefixContants: CURSOR_TEXT_TYPOGRAPHY,
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

    const zoloCursorsDesktop = `
        .cursors-${uniqueId}.zolo-cursors.cursor-type-default.cotton-moving{
        background-color: ${primaryColor} !important;
        ${dotWidthDesk}
        ${dotHeightDesk}
        }

        .cursors-${uniqueId}.zolo-cursors.cursor-type-text.cotton-moving .zolo-cursor-text{
        ${textBgColorDesk}
        ${textColor ? `color: ${textColor};` : ''}
        ${textBorderDesk}
        ${textBorderRadiusDesk}
        ${textPaddingDesk}
        ${titleDeskTypo}
        }
    `;
    // const zoloCursorsDesktop = ``;
    const zoloCursorsTablet = ``;
    const zoloCursorsMobile = ``;

    return {
        zoloCursorsDesktop,
        zoloCursorsTablet,
        zoloCursorsMobile,
    };
};
export default Style;
