/**
 * Internal depencencies
 */
const { generateNormalBGControlStyles, generateBorderStyle, generateDimensionStyle, generateResRangeStyle, generateTypographyStyles } =
    window.zoloModule;

import {
    TEXT_BG_COLOR,
    DOT_SIZE,
    IMAGE_SIZE,
    ICON_SIZE,
    TEXT_BORDER,
    TEXT_BORDER_RADIUS,
    TEXT_PADDING,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
} from './constants';

// import { CURSOR_TEXT_TYPOGRAPHY } from './constants/typoPrefixConstants';
import { CURSOR_TEXT_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Style = (props) => {

    const { attributes } = props;
    const { zoloParticles, uniqueId } = attributes;

    const { primaryColor, textColor, iconColor, disabledDefault } = zoloParticles;

    // Accordion Head
    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: CURSOR_TEXT_TYPOGRAPHY,
        attributes,
    });

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
        desktopRangeStyle: imageWidthDesk,
        tabRangeStyle: imageWidthTab,
        mobRangeStyle: imageWidthMob,
    } = generateResRangeStyle({
        controlName: IMAGE_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: imageHeightDesk,
        tabRangeStyle: imageHeightTab,
        mobRangeStyle: imageHeightMob,
    } = generateResRangeStyle({
        controlName: IMAGE_SIZE,
        property: 'height',
        attributes,
    });
    const {
        desktopRangeStyle: iconWidthDesk,
        tabRangeStyle: iconWidthTab,
        mobRangeStyle: iconWidthMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHeightDesk,
        tabRangeStyle: iconHeightTab,
        mobRangeStyle: iconHeightMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
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

    const zoloParticlesDesktop = `
       ${
           disabledDefault
               ? `
            .${uniqueId} {
        cursor: none !important;
        }
        `
               : ``
       }
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
        .cursors-${uniqueId}.zolo-cursors.cursor-type-image.cotton-moving .zolo-cursor-image{
        ${imageWidthDesk}
        ${imageHeightDesk}
        ${imageBorderDesk}
        ${imageBorderRadiusDesk}
        }
        .cursors-${uniqueId}.zolo-cursors.cursor-type-icon.cotton-moving .zolo__display-icon svg{
        ${iconColor ? `fill: ${iconColor};` : ''}
        ${iconWidthDesk}
        ${iconHeightDesk}
        }
    `;
    // const zoloParticlesDesktop = ``;
    const zoloParticlesTablet = `
        .cursors-${uniqueId}.zolo-cursors.cursor-type-default.cotton-moving{
        ${dotWidthTab}
        ${dotHeightTab}
        }

        .cursors-${uniqueId}.zolo-cursors.cursor-type-text.cotton-moving .zolo-cursor-text{
        ${textBgColorTab}
        ${textBorderTab}
        ${textBorderRadiusTab}
        ${textPaddingTab}
        ${titleTabTypo}
        }
         .cursors-${uniqueId}.zolo-cursors.cursor-type-image.cotton-moving .zolo-cursor-image{
        ${imageWidthTab}
        ${imageHeightTab}
        ${imageBorderTab}
        ${imageBorderRadiusTab}
        }
        .cursors-${uniqueId}.zolo-cursors.cursor-type-icon.cotton-moving .zolo__display-icon svg{
        ${iconWidthTab}
        ${iconHeightTab}
        }
    `;
    const zoloParticlesMobile = `
        .cursors-${uniqueId}.zolo-cursors.cursor-type-default.cotton-moving{
        ${dotWidthMob}
        ${dotHeightMob}
        }

        .cursors-${uniqueId}.zolo-cursors.cursor-type-text.cotton-moving .zolo-cursor-text{
        ${textBgColorMob}
        ${textBorderMob}
        ${textBorderRadiusMob}
        ${textPaddingMob}
        ${titleMobTypo}
        }
         .cursors-${uniqueId}.zolo-cursors.cursor-type-image.cotton-moving .zolo-cursor-image{
        ${imageWidthMob}
        ${imageHeightMob}
        ${imageBorderMob}
        ${imageBorderRadiusMob}
        }
        .cursors-${uniqueId}.zolo-cursors.cursor-type-icon.cotton-moving .zolo__display-icon svg{
        ${iconWidthMob}
        ${iconHeightMob}
        }
    `;

    return {
        zoloParticlesDesktop,
        zoloParticlesTablet,
        zoloParticlesMobile,
    };
};
export default Style;
