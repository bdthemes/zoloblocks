import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { generateResRangeStyle, generateResAlignmentStyle, generateGapStyle, GlobalStyleHanlder } = window.zoloModule;

import {
    CONTAINER_GAP,
    CONTAINER_WIDTH,
    CONTENT_WIDTH,
    FLEX_ALIGN,
    FLEX_DIRECTION,
    FLEX_JUSTIFY,
    FLEX_WRAP,
    MIN_HEIGHT,
} from './constants';

const Style = ({ props }) => {
    const { clientId, attributes, setAttributes } = props;

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType } = attributes;

    // content boxed width
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
        desktopRangeStyle: innerContainerDeskWidth,
        tabRangeStyle: innerContainerTabWidth,
        mobRangeStyle: innerContainerMobWidth,
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
        .wp-block-zolo-container.zolo-root-container.frontend.custom_width.${uniqueId} {
            ${containerDeskWidth}
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}:not(.zolo-background-parallax) {
            ${containerDeskWidth}
            ${innerContainerDeskWidth}
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

   .zolo-background-parallax-image {
        background-image: ${attributes?.advBtnBgbgImageURL ? `url("${attributes?.advBtnBgbgImageURL}")` : 'none'};
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

        .wp-block-zolo-container.zolo-root-container.frontend.custom_width.${uniqueId} {
            ${containerTabWidth}
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}:not(.zolo-background-parallax) {
            ${containerTabWidth}
            ${innerContainerTabWidth}
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

        .wp-block-zolo-container.zolo-root-container.frontend.custom_width.${uniqueId} {
            ${containerMobWidth}
        }

        .is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${clientId},
        .wp-block-zolo-container.zolo-root-container.frontend .${uniqueId}:not(.zolo-background-parallax) {
            ${containerMobWidth}
            ${innerContainerMobWidth}
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
                blockName={props?.name}
            />
        </>
    );
};

export default Style;
