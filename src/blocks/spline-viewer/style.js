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
    generateTypographyStyles,
    generateResRangeStyle,
    GlobalStyleHanlder,
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBorderStyle,
} = window.zoloModule;

import { WIDTH, HEIGHT, ALIGNMENT } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId } = attributes;
    // Star Rating Style
    const {
        desktopRangeStyle: deskWidth,
        tabRangeStyle: tabWidth,
        mobRangeStyle: mobWidth,
    } = generateResRangeStyle({
        controlName: WIDTH,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: HEIGHT,
        property: 'height',
        attributes,
    });

    // alignment
    const {
        desktopAlignStyle: alignmentDesktop,
        tabAlignStyle: alignmentTab,
        mobAlignStyle: alignmentMob,
    } = generateResAlignmentStyle({
        controlName: ALIGNMENT,
        property: 'justify-content',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId} {
        display: flex;
            ${alignmentDesktop}
        }
        .${uniqueId} .zolo-spline-loader {
            ${deskWidth}
            ${deskHeight}
        }
        `;

    const tabletAllStyle = `
        .${uniqueId} {
            ${alignmentTab}
        }
    .${uniqueId} .zolo-spline-loader {
            ${tabWidth}
            ${tabHeight}
        }
        `;

    const mobileAllStyle = `
            .${uniqueId} {
            ${alignmentMob}
        }
    .${uniqueId} .zolo-spline-loader {
            ${mobWidth}
            ${mobHeight}
            ${alignmentMob}
        }
         `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.starRating.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.starRating.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.starRating.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
