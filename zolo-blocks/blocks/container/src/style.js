import { useEffect } from '@wordpress/element';
/**
 * Internal depencencies
 */
const {
    softMinifyCssStrings,
    generateBorderStyle,
    generateDimensionStyle,
    generateResRangeStyle,
    generateBoxShadowStyles,
    generateNormalBGControlStyles,
    generateResAlignmentStyle,
    GlobalStyleHanlder,
} = window.zoloModule;

import {
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

const Style = ({ props }) => {
    const { clientId, attributes, setAttributes } = props;

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType } = attributes;

    // content boxed width
    const {
        desktopRangeStyle: contentDeskWidth,
        tabRangeStyle: contentTabWidth,
        mobRangeStyle: contentMobWidth,
    } = generateResRangeStyle({
        controlName: CONTENT_WIDTH,
        property: 'max-width',
        attributes,
    });

    // custom container
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

    //spacing style
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

    let editorFlexSelector =
        '.wp-block-zolo-container > .zolo-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
    let flexSelector = '.wp-block-zolo-container.zolo-root-container.alignfull > .zolo-container-inner-blocks-wrap';

    if (!isBlockRootParent || 'alignfull' !== containerWidthType || 'alignwide' !== contentWidthType) {
        editorFlexSelector = '.wp-block-zolo-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
        flexSelector = '.wp-block-zolo-container.frontend';
    }

    /**
     * All Style Combination
     */
    const desktopAllStyle = `
        .${uniqueId}.block-editor-block-list__block.wp-block-zolo-container > .zolo-container-inner-blocks-wrap,
        .wp-block-zolo-container.zolo-root-container.alignfull.${uniqueId} > .zolo-container-inner-blocks-wrap {
            ${contentDeskWidth}
        }

        ${
            'custom_width' === containerWidthType
                ? `
        #block-${clientId}.block-editor-block-list__block{
            ${containerDeskWidth}
        }`
                : ''
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}{
            ${containerDeskWidth}
            width: 100%;
        }

        .${uniqueId} {
            ${containerDeskPadding}
            ${containerDeskMinHeight}
            ${containerDeskMargin}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${rowDeskGap}
            ${columnDeskGap}
            ${flexDirectionDesk}
            ${flexWrapDesk}
            ${flexJustifyDesk}
            ${flexAlignDesk}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId}.block-editor-block-list__block.wp-block-zolo-container > .zolo-container-inner-blocks-wrap,
        .wp-block-zolo-container.zolo-root-container.alignfull.${uniqueId} > .zolo-container-inner-blocks-wrap {
            ${contentTabWidth}
        }

        ${
            'custom_width' === containerWidthType
                ? `
        #block-${clientId}.block-editor-block-list__block{
            ${containerTabWidth}
        }`
                : ''
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}{
            ${containerTabWidth}
            width: 100%;
        }

        .${uniqueId} {
            ${containerTabPadding}
            ${containerTabMinHeight}
            ${containerTabMargin}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${rowTabGap}
            ${columnTabGap}
            ${flexDirectionTab}
            ${flexWrapTab}
            ${flexJustifyTab}
            ${flexAlignTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId}.block-editor-block-list__block.wp-block-zolo-container > .zolo-container-inner-blocks-wrap,
        .wp-block-zolo-container.zolo-root-container.alignfull.${uniqueId} > .zolo-container-inner-blocks-wrap {
            ${contentMobWidth}
        }

        ${
            'custom_width' === containerWidthType
                ? `
        #block-${clientId}.block-editor-block-list__block{
            ${containerMobWidth}
        }`
                : ''
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}{
            ${containerMobWidth}
            width: 100%;
        }

        .${uniqueId} {
            ${containerMobPadding}
            ${containerMobMinHeight}
            ${containerMobMargin}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${rowMobGap}
            ${columnMobGap}
            ${flexDirectionMob}
            ${flexWrapMob}
            ${flexJustifyMob}
            ${flexAlignMob}
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
