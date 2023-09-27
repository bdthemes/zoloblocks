/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
const { Fragment } = wp.element;
import classnames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
    const { uniqueId, sliderOptions, breakpoints, showPagination, showNavigation } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('swiper', uniqueId),
    });

    return (
        <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)} data-swiper-breakpoints={JSON.stringify(breakpoints)}>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
                {showPagination && <div class="swiper-pagination swiper-pagination-position-bottom"></div>}
                {showNavigation && (
                    <Fragment>
                        <div className="swiper-navigation-wrap swiper-navigation-position-center">
                            <div className="swiper-nav-button swiper-button-prev"></div>
                            <div className="swiper-nav-button swiper-button-next"></div>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}
