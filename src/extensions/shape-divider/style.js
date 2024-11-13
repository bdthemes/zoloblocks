/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateResRangeStyle } = window.zoloModule;

import { TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

const Style = (props) => {
    const { attributes } = props;
    const { shapeDivider, uniqueId } = attributes;

    if(shapeDivider?.top?.type === 'none' || shapeDivider?.bottom?.type === 'none') {
        return {
            shapeDividerDesktop: '',
            shapeDividerTablet: '',
            shapeDividerMobile: '',
        };
    }
    // settings
    const {
        desktopRangeStyle: topWidthDesk,
        tabRangeStyle: topWidthTab,
        mobRangeStyle: topWidthMob,
    } = generateResRangeStyle({
        controlName: TOP_WIDTH_SHAPE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: topHeightDesk,
        tabRangeStyle: topHeightTab,
        mobRangeStyle: topHeightMob,
    } = generateResRangeStyle({
        controlName: TOP_HEIGHT_SHAPE,
        property: 'height',
        attributes,
    });

    const {
        desktopRangeStyle: bottomWidthDesk,
        tabRangeStyle: bottomWidthTab,
        mobRangeStyle: bottomWidthMob,
    } = generateResRangeStyle({
        controlName: BOTTOM_WIDTH_SHAPE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: bottomHeightDesk,
        tabRangeStyle: bottomHeightTab,
        mobRangeStyle: bottomHeightMob,
    } = generateResRangeStyle({
        controlName: BOTTOM_HEIGHT_SHAPE,
        property: 'height',
        attributes,
    });
    const shapeDividerDesktop = `
        .${uniqueId} .zolo-shape-top.${uniqueId} {
            ${shapeDivider.top.bringToFront ? 'z-index: 2;' : ''}
        }
        .${uniqueId} .zolo-shape-top.${uniqueId} svg {
            fill :${shapeDivider.top.color};
            ${topHeightDesk}
            ${topWidthDesk}
            ${shapeDivider.top.flip ? 'transform: translateX(-50%) rotateY(180deg);' : ''}
            ${shapeDivider.top.bringToFront ? 'z-index: 2;' : ''}
        }

        .${uniqueId} .zolo-shape-bottom.${uniqueId} {
            ${shapeDivider.bottom.bringToFront ? 'z-index: 2;' : ''}
        }
        .${uniqueId} .zolo-shape-bottom.${uniqueId} svg {
            fill: ${shapeDivider.bottom.color};
            ${bottomHeightDesk}
            ${bottomWidthDesk}
            ${shapeDivider.bottom.flip ? 'transform: translateX(-50%) rotateY(180deg);' : ''}
            z-index: 2;
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
};
export default Style;
