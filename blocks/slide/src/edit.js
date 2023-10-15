/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
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
} = window.zoloModule;

import { BLOCK_PREFIX, SLIDE_BG, SLIDE_PADDING, SLIDE_BORDER, SLIDE_BORDER_RADIUS } from './constants';

import Inspector from './inspector';

// import Style
import Style from './style';

/**
 * Filter Slide Item block on Register
 * and pass the block as a child of swiper-slide
 */
const zoloSlide = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        if ('zolo/slide' === props.name) {
            return (
                <div className="swiper-slide">
                    <BlockListBlock {...props} />
                </div>
            );
        }

        return <BlockListBlock {...props} />;
    };
}, 'zoloSlide');

addFilter('editor.BlockListBlock', 'zolo/slide', zoloSlide);

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, zoloStyles, enableOverlay, overlayType, overlayColor, overlayGradient } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-content-outer`,
            slot: 'container-start',
        },
        {
            template: [['core/paragraph']],
            templateLock: false,
            orientation: 'horizontal',
        }
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div {...innerBlocksProps} />
            </div>
        </>
    );
}
