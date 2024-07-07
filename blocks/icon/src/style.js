/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';


/**
 * Internal depencencies
 */
const {
    generateResAlignmentStyle,
    generateNormalBGControlStyles,
    generateResRangeStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateTextShadowStyles,
    generateTextStrokeStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
} from './constants';


export default function Style({ props }) {
    const { attributes, setAttributes } = props

    const {
        uniqueId,
        iconColor,
        iconBackgroundColor,
        iconHover,
        iconBackgroundHoverColor,
    } = attributes;

    // settings
    const {
        desktopRangeStyle: iconWidthSizeDesk,
        tabRangeStyle: iconWidthSizeTab,
        mobRangeStyle: iconWidthSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: iconHeightSizeDesk,
        tabRangeStyle: iconHeightSizeTab,
        mobRangeStyle: iconHeightSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'height',
        attributes,
    });


    const {
        desktopBorderStyle: iconBorderDesktop,
        tabBorderStyle: iconBorderTab,
        mobBorderStyle: iconBorderMob,
    } = generateBorderStyle({
        controlName: ICON_BORDER,
        attributes,
    });

    const {
        desktopRangeStyle: iconBorderRadiusDesk,
        tabRangeStyle: iconBorderRadiusTab,
        mobRangeStyle: iconBorderRadiusMob,
    } = generateResRangeStyle({
        controlName: ICON_BORDER_RADIUS,
        property: 'border-radius',
        attributes,
    });

    const {
        desktopRangeStyle: iconMarginDesk,
        tabRangeStyle: iconMarginTab,
        mobRangeStyle: iconMarginMob,
    } = generateResRangeStyle({
        controlName: ICON_MARGIN,
        property: 'margin',
        attributes,
    });

    const {
        desktopRangeStyle: iconPaddingDesk,
        tabRangeStyle: iconPaddingTab,
        mobRangeStyle: iconPaddingMob,
    } = generateResRangeStyle({
        controlName: ICON_PADDING,
        property: 'padding',
        attributes,
    });

    const {
        boxShadowStyle: iconBoxShadow,
    } = generateBoxShadowStyles({
        controlName: ICON_BOX_SHADOW,
        attributes,
    });

    const {
        boxShadowStyle: iconHoverBoxShadow,
    } = generateBoxShadowStyles({
        controlName: ICON_HOVER_BOX_SHADOW,
        attributes,
    });



    // All Icon Style
    const desktopAllStyle = `
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon svg {
            ${iconWidthSizeDesk}
            ${iconHeightSizeDesk}
            ${iconBorderDesktop}
            ${iconBorderRadiusDesk}
            ${iconMarginDesk}
            ${iconPaddingDesk}
            ${iconBoxShadow}

        }
        .${uniqueId} .zolo__display-icon svg {
            fill: ${iconColor};
            background-color: ${iconBackgroundColor};

       }
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon svg:hover {
            fill: ${iconHover};
            background-color: ${iconBackgroundHoverColor};
            ${iconHoverBoxShadow}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon svg {
            ${iconWidthSizeTab}
            ${iconHeightSizeTab}
            ${iconBorderTab}
            ${iconBorderRadiusTab}
            ${iconMarginTab}
            ${iconPaddingTab}
            ${iconBoxShadow}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon svg {
            ${iconWidthSizeMob}
            ${iconHeightSizeMob}
            ${iconBorderMob}
            ${iconBorderRadiusMob}
            ${iconMarginMob}
            ${iconPaddingMob}
            ${iconBoxShadow}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters(
                    "zolo.firstBlock.desktopAllStyle",
                    desktopAllStyle,
                    props,
                )}
                tabAllStyle={applyFilters(
                    "zolo.firstBlock.tabletAllStyle",
                    tabletAllStyle,
                    props,
                )}
                mobileAllStyle={applyFilters(
                    "zolo.firstBlock.mobileAllStyle",
                    mobileAllStyle,
                    props,
                )}
            />
        </>
    )

}