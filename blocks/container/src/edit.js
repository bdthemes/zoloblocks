/**
 * WordPress dependencies
 */
import {
    useBlockProps,
    InnerBlocks,
    BlockControls,
    MediaUpload,
    __experimentalBlockVariationPicker as BlockVariationPicker,
    useInnerBlocksProps,
} from '@wordpress/block-editor';
import { Fragment, useEffect, useState } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    softMinifyCssStrings,
    generateBorderStyle,
    generateDimensionStyle,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateResAlignmentStyle,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    CONTENT_WIDTH,
    MIN_HEIGHT,
    CONTAINER_WIDTH,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
    FLEX_ALIGN,
    CONTAINER_BG,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_BOX_SHADOW,
    CONTAINER_PADDING,
    CONTAINER_MARGIN,
    ROW_GAP,
    COLUMN_GAP,
} from './constants';

import Inspector from './inspector';

// Include Child Block
import './column';

// import variations
import variations from './variations';
import { set } from 'lodash';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, preset, blockStyle, templates, variationStatus } = attributes;

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
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`),
    });

    // content
    const {
        desktopRangeStyle: contentDeskWidth,
        tabRangeStyle: contentTabWidth,
        mobRangeStyle: contentMobWidth,
    } = generateResRangeStyle({
        controlName: CONTENT_WIDTH,
        property: 'max-width',
        attributes,
    });

    // container
    const {
        desktopRangeStyle: containerDeskWidth,
        tabRangeStyle: containerTabWidth,
        mobRangeStyle: containerMobWidth,
    } = generateResRangeStyle({
        controlName: CONTAINER_WIDTH,
        property: 'max-width',
        attributes,
    });

    const {
        desktopRangeStyle: containerDeskMinHeight,
        tabRangeStyle: containerTabMinHeight,
        mobRangeStyle: containerMobMinHeight,
    } = generateResRangeStyle({
        controlName: MIN_HEIGHT,
        property: 'min-height',
        attributes,
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
        dimensionStylesDesktop: containerDeskBorderRadius,
        dimensionStylesTab: containerTabBorderRadius,
        dimensionStylesMobile: containerMobBorderRadius,
    } = generateDimensionStyle({
        controlName: CONTAINER_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const { boxShadowStyle: containerBoxShadow } = generateBoxShadowStyles({
        attributes,
        controlName: CONTAINER_BOX_SHADOW,
    });

    const {
        backgroundStylesDesktop: containerDeskBGStyle,
        backgroundStylesTab: containerTabBGStyle,
        backgroundStylesMobile: containerMobBGStyle,
    } = generateNormalBGControlStyles({
        controlName: CONTAINER_BG,
        attributes,
        noMainBGImg: false,
    });

    const {
        dimensionStylesDesktop: containerDeskPadding,
        dimensionStylesTab: containerTabPadding,
        dimensionStylesMobile: containerMobPadding,
    } = generateDimensionStyle({
        controlName: CONTAINER_PADDING,
        styleFor: 'padding',
        attributes,
    });

    const {
        dimensionStylesDesktop: containerDeskMargin,
        dimensionStylesTab: containerTabMargin,
        dimensionStylesMobile: containerMobMargin,
    } = generateDimensionStyle({
        controlName: CONTAINER_MARGIN,
        styleFor: 'margin',
        attributes,
    });

    // row and column
    const {
        desktopRangeStyle: rowDeskGap,
        tabRangeStyle: rowTabGap,
        mobRangeStyle: rowMobGap,
    } = generateResRangeStyle({
        controlName: ROW_GAP,
        property: 'row-gap',
        attributes,
    });

    const {
        desktopRangeStyle: columnDeskGap,
        tabRangeStyle: columnTabGap,
        mobRangeStyle: columnMobGap,
    } = generateResRangeStyle({
        controlName: COLUMN_GAP,
        property: 'column-gap',
        attributes,
    });

    // flex properties
    const {
        desktopAlignmentStyle: flexDirectionDesk,
        tabAlignmentStyle: flexDirectionTab,
        mobAlignmentStyle: flexDirectionMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_DIRECTION,
        attributes,
        property: 'flex-direction',
    });

    const {
        desktopAlignmentStyle: flexWrapDesk,
        tabAlignmentStyle: flexWrapTab,
        mobAlignmentStyle: flexWrapMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_WRAP,
        attributes,
        property: 'flex-wrap',
    });

    const {
        desktopAlignmentStyle: flexJustifyDesk,
        tabAlignmentStyle: flexJustifyTab,
        mobAlignmentStyle: flexJustifyMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_JUSTIFY,
        attributes,
        property: 'justify-content',
    });

    const {
        desktopAlignmentStyle: flexAlignDesk,
        tabAlignmentStyle: flexAlignTab,
        mobAlignmentStyle: flexAlignMob,
    } = generateResAlignmentStyle({
        controlName: FLEX_ALIGN,
        attributes,
        property: 'align-items',
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = ``;

    const tabletAllStyle = ``;

    const mobileAllStyle = ``;

    // const allStyle = `
    // 	${desktopAllStyle}
    // 	${tabletAllStyle}
    // 	${mobileAllStyle}
    // `;

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
     * Column Variation and InnerBlocks
     */

    // const [template, setTemplate] = useState([]);

    const innerBlocksProps = useInnerBlocksProps(
        {},
        {
            template: templates.length > 0 ? templates : [['zolo/column', { width: 100 }]],
            templateLock: 'all',
        }
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>
                {`
                    .zolo-blocks-container .block-editor-block-list__layout {
                        display: flex;
                    }
					/* desktopcssStart */
					${softMinifyCssStrings(desktopAllStyle)}
					/* desktopcssEnd */

					@media all and (max-width: 1024px) {
						/* tabcssStart */
						${softMinifyCssStrings(tabletAllStyle)}
						/* tabcssEnd */
					}

					@media all and (max-width: 767px) {
						/* mobcssStart */
						${softMinifyCssStrings(mobileAllStyle)}
						/* mobcssEnd */
					}
				`}
            </style>
            <div {...blockProps}>
                <div className="zolo-blocks-container">
                    {variationStatus ? (
                        <BlockVariationPicker
                            icon="smiley"
                            label={__('Choose a Layout', 'zolo-blocks')}
                            instructions={__('Select a columns layout to start with.', 'zolo-blocks')}
                            onSelect={(variation) => {
                                setAttributes({ templates: variation.innerBlocks });
                                setAttributes({ variationStatus: false });
                            }}
                            variations={variations}
                        />
                    ) : (
                        <div {...innerBlocksProps} />
                    )}
                </div>
            </div>
        </>
    );
}
