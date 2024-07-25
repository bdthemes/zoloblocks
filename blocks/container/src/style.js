import { useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { generateResRangeStyle, generateResAlignmentStyle, generateGapStyle, GlobalStyleHanlder } = window.zoloModule;

import {
    CONTENT_WIDTH,
    MIN_HEIGHT,
    CONTAINER_WIDTH,
    FLEX_DIRECTION,
    FLEX_WRAP,
    FLEX_JUSTIFY,
    FLEX_ALIGN,
    CONTAINER_GAP,
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
        property: '--zolo-container-content-width',
        attributes,
    });

    // custom container
    const {
        desktopRangeStyle: containerDeskWidth,
        tabRangeStyle: containerTabWidth,
        mobRangeStyle: containerMobWidth,
    } = generateResRangeStyle({
        controlName: CONTAINER_WIDTH,
        property: 'width',
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

    // row and column
    const {
        gapStylesDesktop: containerDeskGap,
        gapStylesTab: containerTabGap,
        gapStylesMobile: containerMobGap,
    } = generateGapStyle({
        controlName: CONTAINER_GAP,
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
        .${uniqueId} {
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
           
        }

        .${uniqueId} {
            ${containerDeskMinHeight}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${containerDeskGap}
            ${flexDirectionDesk}
            ${flexWrapDesk}
            ${flexJustifyDesk}
            ${flexAlignDesk}
        }
    `;

    const tabletAllStyle = `
        .${uniqueId} {
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
           
        }

        .${uniqueId} {
            ${containerTabMinHeight}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${containerTabGap}
            ${flexDirectionTab}
            ${flexWrapTab}
            ${flexJustifyTab}
            ${flexAlignTab}
        }
    `;

    const mobileAllStyle = `
        .${uniqueId} {
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
           
        }

        .${uniqueId} {
            ${containerMobMinHeight}
        }

        .${uniqueId + editorFlexSelector},
        .${uniqueId + flexSelector}{
            ${containerMobGap}  
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
                desktopAllStyle={applyFilters('zolo.container.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.container.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.container.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};

export default Style;
