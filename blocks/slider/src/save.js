/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
const { Fragment } = wp.element;
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

/**
 * Save function
 */

export default function save({ attributes }) {
    const { uniqueId, parentClasses, sliderOptions, breakpoints, showPagination, showNavigation } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames('swiper', uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)} data-swiper-breakpoints={JSON.stringify(breakpoints)}>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
                {showPagination && <div className="swiper-pagination swiper-pagination-position-bottom"></div>}
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
