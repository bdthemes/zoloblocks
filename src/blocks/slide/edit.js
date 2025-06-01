/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const { classArrayToStr } = window.zoloModule;

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
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
    const { attributes, setAttributes, isSelected } = props;
    const { uniqueId, parentClasses } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-content-outer`,
            slot: 'container-start',
        },
        {
            template: [],
            templateLock: false,
            orientation: 'horizontal',
        }
    );

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore}
                <div {...innerBlocksProps} />
                {renderHookAfter}
            </div>
        </>
    );
}
