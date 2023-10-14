/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks } from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    generateResRangeStyle,
    generateDimensionStyle,
    generateNormalBGControlStyles,
    generateResCounterStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import { BLOCK_PREFIX, TEAM_GRID_BG, COLUMNS_GAP, GRID_COLUMNS, ROWS_GAP, CONTAINER_MARGIN, CONTAINER_PADDING } from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, zoloStyles } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
    });

    const {
        backgroundStylesDesktop: normalDeskBGStyle,
        backgroundStylesTab: normalTabBGStyle,
        backgroundStylesMobile: normalMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: TEAM_GRID_BG,
        attributes,
        noMainBGImg: false,
    });

    // Grid Columns
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
    });

    // Grid Columns Gap
    const {
        desktopRangeStyle: deskColumnsGap,
        tabRangeStyle: tabColumnsGap,
        mobRangeStyle: mobColumnsGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-column-gap',
        attributes,
    });

    // Grid Rows Gap
    const {
        desktopRangeStyle: deskRowsGap,
        tabRangeStyle: tabRowsGap,
        mobRangeStyle: mobRowsGap,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'grid-row-gap',
        attributes,
    });

    // Container Margin
    const {
        dimensionStylesDesktop: containerDeskMargin,
        dimensionStylesTab: containerTabMargin,
        dimensionStylesMobile: containerMobMargin,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // Container Padding
    const {
        dimensionStylesDesktop: containerDeskPadding,
        dimensionStylesTab: containerTabPadding,
        dimensionStylesMobile: containerMobPadding,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
    .${uniqueId}.wp-block-zolo-team-grid {
        ${normalDeskBGStyle}
        ${containerDeskMargin}
        ${containerDeskPadding}
        grid-template-columns: repeat(${deskColumns}, 1fr);
        ${deskColumnsGap};
        ${deskRowsGap};
    }
`;
    const tabletAllStyle = `
    .${uniqueId}.wp-block-zolo-team-grid {
        ${normalTabBGStyle}
        ${containerTabMargin}
        ${containerTabPadding}
        grid-template-columns: repeat(${tabColumns}, 1fr);
        ${tabColumnsGap};
        ${tabRowsGap};
    }
`;
    const mobileAllStyle = `
    .${uniqueId}.wp-block-zolo-team-grid {
        ${normalMobBGStyle}
        ${containerMobMargin}
        ${containerMobPadding}
        grid-template-columns: repeat(${mobColumns}, 1fr);
        ${mobColumnsGap};
        ${mobRowsGap};
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
