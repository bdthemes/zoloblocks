/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const { generateResRangeStyle, generateBorderStyle, generateBoxShadowStyles, GlobalStyleHanlder, generateResAlignmentStyle } =
    window.zoloModule;

import {
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_ALIGNMENT,
} from './constants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const { uniqueId, iconColor, iconBackgroundColor, iconHover, iconBackgroundHoverColor } = attributes;

    // settings

    const {
        desktopRangeStyle: iconHeightSizeDesk,
        tabRangeStyle: iconHeightSizeTab,
        mobRangeStyle: iconHeightSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: 'font-size',
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

    const { boxShadowStyle: iconBoxShadow } = generateBoxShadowStyles({
        controlName: ICON_BOX_SHADOW,
        attributes,
    });

    const { boxShadowStyle: iconHoverBoxShadow } = generateBoxShadowStyles({
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
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon {
            ${iconHeightSizeDesk}
            ${iconBorderDesktop}
            ${iconBorderRadiusDesk}
            ${iconMarginDesk}
            ${iconPaddingDesk}
            ${iconBoxShadow}
            background-color: ${iconBackgroundColor};
        }
        .${uniqueId} .zolo__display-icon svg {
            fill: ${iconColor};

       }
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon:hover {
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
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon {
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
        .${uniqueId} .zolo-icon-wrap .zolo__display-icon {
            ${iconHeightSizeMob}
            ${iconBorderMob}
            ${iconBorderRadiusMob}
            ${iconMarginMob}
            ${iconPaddingMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.firstBlock.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.firstBlock.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.firstBlock.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
