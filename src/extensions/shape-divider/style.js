/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';


/**
 * Internal depencencies
 */
const {
    generateDimensionStyle,

} = window.zoloModule;

import {
    TOP_WIDTH_SHAPE,
    TOP_HEIGHT_SHAPE,
    BOTTOM_WIDTH_SHAPE,
    BOTTOM_HEIGHT_SHAPE
} from './constants';


const Style = (props) => {
    const { attributes } = props;
    const { shapeDivider, uniqueId } = attributes;

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
    const shapeDividerDesktop = `
        .${uniqueId} .zolo-shape-top.${uniqueId} svg {
            fill :${shapeDivider.top.color};
            ${topHeightDesk}
            ${topWidthDesk}
        }
        .${uniqueId} .zolo-shape-bottom.${uniqueId} svg {
            fill: ${shapeDivider.bottom.color};
            ${bottomHeightDesk}
            ${bottomWidthDesk}
        }
    `;
    const shapeDividerTablet = `
        .${uniqueId} .zolo-shape-top.${uniqueId} svg {
            fill :${shapeDivider.top.color};
            ${topHeightTab}
            ${topWidthTab}
        }
        .${uniqueId} .zolo-shape-bottom.${uniqueId} svg {
            fill: ${shapeDivider.bottom.color};
            ${bottomHeightTab}
            ${bottomWidthTab}
        }
    `;
    const shapeDividerMobile = `
        .${uniqueId} .zolo-shape-top.${uniqueId} svg {
            fill :${shapeDivider.top.color};
            ${topHeightMob}
            ${topWidthMob}
        }
        .${uniqueId} .zolo-shape-bottom.${uniqueId} svg {
            fill: ${shapeDivider.bottom.color};
            ${bottomHeightMob}
            ${bottomWidthMob}
        }
    `;
    return {
        shapeDividerDesktop,
        shapeDividerTablet,
        shapeDividerMobile,
    };
}
export default Style
