/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';


/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateBorderStyle,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle
} = window.zoloModule;

import {
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_ALIGNMENT
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

    const {
        desktopAlignStyle: iconDeskAlign,
        tabAlignStyle: iconTabAlign,
        mobAlignStyle: iconMobAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_ALIGNMENT,
        property: 'justify-content',
        attributes,
    });
    const {
        desktopAlignStyle: iconDeskTextAlign,
        tabAlignStyle: iconTabTextAlign,
        mobAlignStyle: iconMobTextAlign,
    } = generateResAlignmentStyle({
        controlName: ICON_ALIGNMENT,
        property: 'text-align',
        attributes,
    });



    // All Icon Style
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-icon {
            ${iconDeskAlign}
            ${iconDeskTextAlign}
        }
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
        .${uniqueId}.wp-block-zolo-icon {
            ${iconTabAlign}
            ${iconTabTextAlign}
        }
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
            .${uniqueId}.wp-block-zolo-icon {
            ${iconMobAlign}
            ${iconMobTextAlign}
        }
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