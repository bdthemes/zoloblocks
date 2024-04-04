/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const { generateResAlignmentStyle, generateTypographyStyles, generateResRangeStyle, GlobalStyleHanlder } = window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { uniqueId, titleColor, activeStarColor, inactiveStarColor } = attributes;

    // styles
    const {
        desktopAlignStyle: itemsVDeskAlign,
        tabAlignStyle: itemsVTabAlign,
        mobAlignStyle: itemsVMobAlign,
    } = generateResAlignmentStyle({
        controlName: ITEMS_ALIGN,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopRangeStyle: deskGap,
        tabRangeStyle: tabGap,
        mobRangeStyle: mobGap,
    } = generateResRangeStyle({
        controlName: TITLE_GAP,
        property: 'gap',
        attributes,
    });

    const {
        typoStylesDesktop: titleDeskTypo,
        typoStylesTab: titleTabTypo,
        typoStylesMobile: titleMobTypo,
    } = generateTypographyStyles({
        prefixConstant: TITLE_TYPO,
        attributes,
    });

    // Star Rating Style
    const {
        desktopRangeStyle: deskSize,
        tabRangeStyle: tabSize,
        mobRangeStyle: mobSize,
    } = generateResRangeStyle({
        controlName: STAR_SIZE,
        property: 'width',
        attributes,
    });
    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: STAR_SIZE,
        property: 'height',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

    `;

    const tabletAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVTabAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${tabGap}
        }
        .${uniqueId} .start-rating-title {
            ${titleTabTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${tabSize}
            ${tabHeight}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} .start-rating-wrapper {
            ${itemsVMobAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${mobGap}
        }
        .${uniqueId} .start-rating-title {
            ${titleMobTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${mobSize}
            ${mobHeight}
        }
    `;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.star-rating.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.star-rating.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.star-rating.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
