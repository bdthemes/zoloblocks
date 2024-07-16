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
    SHAPE_DIVIDER,
    TOP_WIDTH_SHAPE,
    TOP_HEIGHT_SHAPE,
    BOTTOM_WIDTH_SHAPE,
    BOTTOM_HEIGHT_SHAPE
} from './constants';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;

    const {
        uniqueId,

        // settings
        topType,
        topColor,
        bottomColor,
    } = attributes;

    // settings

    const {
        dimensionStylesDesktop: topWidthDesk,
        dimensionStylesTab: topWidthTab,
        dimensionStylesMobile: topWidthMob,
    } = generateDimensionStyle({
        controlName: TOP_WIDTH_SHAPE,
        styleFor: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: topHeightDesk,
        dimensionStylesTab: topHeightTab,
        dimensionStylesMobile: topHeightMob,
    } = generateDimensionStyle({
        controlName: TOP_HEIGHT_SHAPE,
        styleFor: 'height',
        attributes,
    });

    const {
        dimensionStylesDesktop: bottomWidthDesk,
        dimensionStylesTab: bottomWidthTab,
        dimensionStylesMobile: bottomWidthMob,
    } = generateDimensionStyle({
        controlName: BOTTOM_WIDTH_SHAPE,
        styleFor: 'width',
        attributes,
    });

    const {
        dimensionStylesDesktop: bottomHeightDesk,
        dimensionStylesTab: bottomHeightTab,
        dimensionStylesMobile: bottomHeightMob,
    } = generateDimensionStyle({
        controlName: BOTTOM_HEIGHT_SHAPE,
        styleFor: 'height',
        attributes,
    });

    // All Icon Style

    const desktopAllStyle = `
        .${uniqueId} .zolo-shape-top svg {
            fill :${topColor};
            ${topHeightDesk}
            ${topWidthDesk}
        }
        .${uniqueId} .zolo-shape-bottom svg {
            fill: ${bottomColor};
            ${bottomHeightDesk}
            ${bottomWidthDesk}
        }
    `;
    const tabletAllStyle = `
        .${uniqueId} .zolo-shape-top svg {
            fill :${topColor};
            ${topHeightTab}
            ${topWidthTab}
        }
        .${uniqueId} .zolo-shape-bottom svg {
            fill: ${bottomColor};
            ${bottomHeightTab}
            ${bottomWidthTab}
        }
    `;
    const mobileAllStyle = `
        .${uniqueId} .zolo-shape-top svg {
            fill :${topColor};
            ${topHeightMob}
            ${topWidthMob}
        }
        .${uniqueId} .zolo-shape-bottom svg {
            fill: ${bottomColor};
            ${bottomHeightMob}
            ${bottomWidthMob}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.shapeDivider.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.shapeDivider.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.shapeDivider.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
