/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
    generateGapStyle,
    generateResCounterStyle,
} = window.zoloModule;

import {
    // GRID
    GRID_MIN_WIDTH,
    GRID_MIN_HEIGHT,
    GRID_GAP,
    GRID_COL_COUNT,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_JUSTIFY,
    FLEX_WRAP,
} from './constants';

import { TITLE_TYPOGRAPHY, DESCRIPTION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

export default function Style({ props }) {
    const { attributes, setAttributes } = props;
    const { preset, uniqueId } = attributes;

    // GRID

    const {
        desktopRangeStyle: gridMinWidthDesk,
        tabRangeStyle: gridMinWidthTab,
        mobRangeStyle: gridMinWidthMob,
    } = generateResRangeStyle({
        controlName: GRID_MIN_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: gridMinHeightDesk,
        tabRangeStyle: gridMinHeightTab,
        mobRangeStyle: gridMinHeightMob,
    } = generateResRangeStyle({
        controlName: GRID_MIN_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        gapStylesDesktop: gridDeskGap,
        gapStylesTab: gridTabGap,
        gapStylesMobile: gridMobGap,
    } = generateGapStyle({
        controlName: GRID_GAP,

        attributes,
    });

    const {
        desktopRangeStyle: gridColCountDesk,
        tabRangeStyle: gridColCountTab,
        mobRangeStyle: gridColCountMob,
    } = generateResCounterStyle({
        controlName: GRID_COL_COUNT,
        attributes,
        noProperty: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    });

    // flex properties
    const {
        desktopAlignStyle: flexDirectionDesk,
        tabAlignStyle: flexDirectionTab,
        mobAlignStyle: flexDirectionMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_DIRECTION,
        property: 'flex-direction',
        attributes,
    });

    const {
        desktopAlignStyle: flexWrapDesk,
        tabAlignStyle: flexWrapTab,
        mobAlignStyle: flexWrapMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_WRAP,
        property: 'flex-wrap',
        attributes,
    });

    const {
        desktopAlignStyle: flexJustifyDesk,
        tabAlignStyle: flexJustifyTab,
        mobAlignStyle: flexJustifyMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_JUSTIFY,
        property: 'justify-content',
        attributes,
    });

    const {
        desktopAlignStyle: flexAlignDesk,
        tabAlignStyle: flexAlignTab,
        mobAlignStyle: flexAlignMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_ALIGN,
        property: 'align-items',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `

        .${uniqueId}.wp-block-zolo-loop.grid.loop-grid {
            ${gridDeskGap}
            grid-template-columns:repeat(${gridColCountDesk}, 1fr);
        }

        .${uniqueId}.wp-block-zolo-loop.grid.loop-masonary {
			column-count: ${gridColCountDesk};
			${gridDeskGap}
		}
		.${uniqueId}.wp-block-zolo-loop.grid.loop-masonary .zolo-loop-item + .zolo-loop-item{
			margin-top: ${gridDeskGap.replace('gap:', '')};
		}

        .${uniqueId}.wp-block-zolo-loop.flex {
            ${flexDirectionDesk}
            ${flexWrapDesk}
            ${flexJustifyDesk}
            ${flexAlignDesk}
            ${gridDeskGap}
        }

        .${uniqueId}.wp-block-zolo-loop.flex  .zolo-loop-item{
            ${gridMinWidthDesk}
            ${gridMinHeightDesk}
        }
  	`;

    const tabletAllStyle = `
        .${uniqueId}.wp-block-zolo-loop.grid.loop-grid {
            ${gridTabGap}
            grid-template-columns:repeat(${gridColCountTab}, 1fr);
        }

        .${uniqueId}.wp-block-zolo-loop.grid.loop-masonary {
            column-count: ${gridColCountTab};
            ${gridTabGap}
        }
        .${uniqueId}.wp-block-zolo-loop.grid.loop-masonary .zolo-loop-item + .zolo-loop-item{
            margin-top: ${gridTabGap.replace('gap:', '')};
        }

        .${uniqueId}.wp-block-zolo-loop.flex {
            ${flexDirectionTab}
            ${flexWrapTab}
            ${flexJustifyTab}
            ${flexAlignTab}
            ${gridTabGap}
        }

        .${uniqueId}.wp-block-zolo-loop.flex  .zolo-loop-item{
            ${gridMinWidthTab}
            ${gridMinHeightTab}
        }

	`;

    const mobileAllStyle = `
        .${uniqueId}.wp-block-zolo-loop.grid.loop-grid {
            ${gridMobGap}
            grid-template-columns:repeat(${gridColCountMob}, 1fr);
        }

        .${uniqueId}.wp-block-zolo-loop.grid.loop-masonary {
            column-count: ${gridColCountMob};
            ${gridMobGap}
        }
        .${uniqueId}.wp-block-zolo-loop.grid.loop-masonary .zolo-loop-item + .zolo-loop-item{
            margin-top: ${gridMobGap.replace('gap:', '')};
        }

        .${uniqueId}.wp-block-zolo-loop.flex {
            ${flexDirectionMob}
            ${flexWrapMob}
            ${flexJustifyMob}
            ${flexAlignMob}
            ${gridMobGap}
        }

        .${uniqueId}.wp-block-zolo-loop.flex  .zolo-loop-item{
            ${gridMinWidthMob}
            ${gridMinHeightMob}
        }
  	`;

    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.advancedIconBox.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.advancedIconBox.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.advancedIconBox.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
}
