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
    handleUniqueId,
    softMinifyCssStrings,
    generateNormalBGControlStyles,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateBorderStyle,
    generateResRangeStyle,
    generateResCounterStyle,
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

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, preset, blockStyle, borderHoverColor } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

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

    const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/brand-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>
                {` ${softMinifyCssStrings(allStyle)}`}
                {`
                    .zb-brand-grid-wrap {
                        display: block;
                    }
                    .zb-brand-grid-wrap .block-editor-block-list__layout {
                        display: grid;
                    }
                `}
            </style>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="insert" label={__('Add Brand', 'zolo-blocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <InnerBlocks allowedBlocks={['zolo/brand-child']} template={[['zolo/brand-child', {}]]} renderAppender={false} />
                <div className="appender-btn">
                    <Button
                        className="components-button"
                        label={__('Add Brand', 'zolo-blocks')}
                        icon="insert"
                        variant="primary"
                        onClick={() => appendBlock()}
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        {__('Add Brand', 'zolo-blocks')}
                    </Button>
                </div>
            </div>
        </>
    );
}
