/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    StarRating,
    generateResAlignmentStyle,
    generateBorderStyle,
    generateDimensionStyle,
    generateTypographyStyles,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateBackgroundControlStyles,
    GlobalStyleHanlder,
} = window.zoloModule;

import { BLOCK_PREFIX, STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';
import { TITLE_TYPO } from './constants/typoPrefixConstant';

const Style = ({ props }) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, blockStyle, showTitle, title, titleTag, titleColor, titlePosition, rating, activeStarColor, inactiveStarColor } =
        attributes;

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
        .${uniqueId} .start-rating-wrapper {
            ${itemsVDeskAlign}
        }
        .${uniqueId} .star-rating-inner {
            ${deskGap}
        }
        .${uniqueId} .start-rating-title {
            color: ${titleColor};
            ${titleDeskTypo}
        }
        .${uniqueId} .zolo-star-rating svg {
            ${deskSize}
            ${deskHeight}
            ${activeStarColor ? `fill: ${activeStarColor};` : ''}
        }
        .${uniqueId} .zolo-star-rating .empty-star svg {
            ${inactiveStarColor ? `fill: ${inactiveStarColor};` : ''}
        }
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
                desktopAllStyle={desktopAllStyle}
                tabAllStyle={tabletAllStyle}
                mobileAllStyle={mobileAllStyle}
            />
        </>
    );
};

export default Style;
