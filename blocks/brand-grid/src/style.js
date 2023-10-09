/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateBorderStyle,
    generateResRangeStyle,
    generateResCounterStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_MARGIN,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, preset, zoloStyles, borderHoverColor } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, `zb-brand-grid-wrap ${uniqueId} ${preset}`),
    });

    // column count
    const {
        desktopRangeStyle: columnCountDeskstyle,
        tabRangeStyle: columnCountTabStyle,
        mobRangeStyle: columnCountMobStyle,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
    });

    // column gap
    const {
        desktopRangeStyle: colGapDeskstyle,
        tabRangeStyle: colGapTabStyle,
        mobRangeStyle: colGapMobStyle,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'column-gap',
        attributes,
    });

    // row gap
    const {
        desktopRangeStyle: rowGapDeskstyle,
        tabRangeStyle: rowGapTabStyle,
        mobRangeStyle: rowGapMobStyle,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'row-gap',
        attributes,
    });

    // container
    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        backgroundStylesDesktop: containerHoverDeskBGStyle,
        backgroundStylesTab: containerHoverTabBGStyle,
        backgroundStylesMobile: containerHoverMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_HOVER_BACKGROUND,
        attributes,
        noMainBGImg: false,
    });

    const {
        desktopBorderStyle: containerDeskBorderStyle,
        tabBorderStyle: containerTabBorderStyle,
        mobBorderStyle: containerMobBorderStyle,
    } = generateBorderStyle({
        controlName: CONTAINER_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: containerBorderRadiusDesk,
        dimensionStylesTab: containerBorderRadiusTab,
        dimensionStylesMobile: containerBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerPaddingDesk,
        dimensionStylesTab: containerPaddingTab,
        dimensionStylesMobile: containerPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerMarginDesk,
        dimensionStylesTab: containerMarginTab,
        dimensionStylesMobile: containerMarginMob,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const { boxShadowStyle: containerBoxShadowHover } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_HOVER_BOX_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.zb-brand-grid-wrap{
            ${containerDeskBGStyle}
            ${containerDeskBorderStyle}
            ${containerBorderRadiusDesk}
            ${containerPaddingDesk}
            ${containerMarginDesk}
            ${containerBoxShadow}
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
            ${rowGapDeskstyle}
        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
			grid-template-columns:repeat(${columnCountDeskstyle}, 1fr);
            ${colGapDeskstyle}
            ${rowGapDeskstyle}
        }
        .${uniqueId}.zb-brand-grid-wrap:hover{
            ${containerHoverDeskBGStyle}
            ${containerBoxShadowHover}
            ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.zb-brand-grid-wrap{
            ${containerTabBGStyle}
            ${containerTabBorderStyle}
            ${containerBorderRadiusTab}
            ${containerPaddingTab}
            ${containerMarginTab}
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}
            ${rowGapTabStyle}

        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountTabStyle}, 1fr);
            ${colGapTabStyle}
            ${rowGapTabStyle}
        }
        .${uniqueId}.zb-brand-grid-wrap:hover{
            ${containerHoverTabBGStyle}
        }

    `;

    const mobileAllStyle = `
        .${uniqueId}.zb-brand-grid-wrap{
            ${containerMobBGStyle}
            ${containerMobBorderStyle}
            ${containerBorderRadiusMob}
            ${containerPaddingMob}
            ${containerMarginMob}
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
            ${rowGapMobStyle}
        }
        .${uniqueId}.zb-brand-grid-wrap .block-editor-block-list__layout{
            grid-template-columns:repeat(${columnCountMobStyle}, 1fr);
            ${colGapMobStyle}
            ${rowGapMobStyle}
        }
        .${uniqueId}.zb-brand-grid-wrap:hover{
            ${containerHoverMobBGStyle}
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
