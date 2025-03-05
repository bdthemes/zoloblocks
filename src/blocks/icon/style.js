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
    generateNormalBGControlStyles,
    generateBoxShadowStyles,
    GlobalStyleHanlder,
    generateResAlignmentStyle,
    generateDimensionStyle,
} = window.zoloModule;

import {
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_BOX_SHADOW,
    ICON_HOVER_BOX_SHADOW,
    ICON_ALIGNMENT,
    ICON_BG_COLOR,
    ICON_HOVER_BG_COLOR,
} from './constants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const { uniqueId, iconColor, iconHover } = attributes;

    // settings

    const {
        desktopRangeStyle: iconHeightSizeDesk,
        tabRangeStyle: iconHeightSizeTab,
        mobRangeStyle: iconHeightSizeMob,
    } = generateResRangeStyle({
        controlName: ICON_SIZE,
        property: '--zolo-icon-size',
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
        dimensionStylesDesktop: iconMarginDesk,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMob,
    } = generateDimensionStyle({
        controlName: ICON_MARGIN,
        styleFor: 'margin',
        attributes,
    });
    const {
        dimensionStylesDesktop: iconPaddingDesk,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMob,
    } = generateDimensionStyle({
        controlName: ICON_PADDING,
        styleFor: 'padding',
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

    const {
        backgroundStylesDesktop: iconHoverBgDesk,
        backgroundStylesTab: iconHoverBgTab,
        backgroundStylesMobile: iconHoverBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_HOVER_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });
    const {
        backgroundStylesDesktop: iconBgDesk,
        backgroundStylesTab: iconBgTab,
        backgroundStylesMobile: iconBgMob,
    } = generateNormalBGControlStyles({
        controlName: ICON_BG_COLOR,
        attributes,
        noMainBGImg: false,
    });

    // All Icon Style
    const desktopAllStyle = `
        .${uniqueId}.wp-block-zolo-icon {
            ${iconDeskAlign}
            ${iconDeskTextAlign}
        }
        .${uniqueId} .zolo__display-icon {
            ${iconBorderDesktop}
            ${iconBorderRadiusDesk}
            ${iconMarginDesk}
            ${iconPaddingDesk}
            ${iconBoxShadow}
            ${iconBgDesk}
        }

        .${uniqueId}.wp-block-zolo-icon.zolo-icon-custom .zolo__display-icon svg {
            ${iconHeightSizeDesk}
        }

        .${uniqueId} .zolo__display-icon svg {
            fill: ${iconColor};

       }
        .${uniqueId} .zolo__display-icon:hover {
            ${iconHoverBoxShadow}
            ${iconHoverBgDesk}
        }
            .${uniqueId} .zolo__display-icon:hover svg{
            fill: ${iconHover};
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-icon {
            ${iconTabAlign}
            ${iconTabTextAlign}
        }
        .${uniqueId} .zolo__display-icon {
            ${iconBorderTab}
            ${iconBorderRadiusTab}
            ${iconMarginTab}
            ${iconPaddingTab}
            ${iconBoxShadow}
        }

        .${uniqueId}.wp-block-zolo-icon.zolo-icon-custom .zolo__display-icon svg {
           ${iconHeightSizeTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-icon {
            ${iconMobAlign}
            ${iconMobTextAlign}
        }
        .${uniqueId} .zolo__display-icon {
            ${iconBorderMob}
            ${iconBorderRadiusMob}
            ${iconMarginMob}
            ${iconPaddingMob}
        }

        .${uniqueId}.wp-block-zolo-icon.zolo-icon-custom .zolo__display-icon svg {
           ${iconHeightSizeMob}
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
