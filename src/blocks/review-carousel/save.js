import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

// Save function
const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        zoloId,
        showNavigation,
        showPagination,
        customNavIcon,
        sliderOptions,
        breakpoints,
        prevNavIcon,
        nextNavIcon,
    } = attributes;

    const {
        pagination = true,
        navigation = false,
        paginationType = 'bullets',
        pagiPosition = 'bottom-center',
        navPosition = 'center-center',
        progressDirection = 'top',
    } = sliderOptions || {};

    //merge slider options
    const defaultOptions = {
        perviewDesktop: attributes?.zolo_carouselColumnsRange,
        perviewTab: attributes?.zolo_TABcarouselColumnsRange,
        perviewMobile: attributes?.zolo_MOBcarouselColumnsRange,
        spacingDesktop: attributes?.zolo_carouselGapRange,
        spacingTab: attributes?.zolo_TABcarouselGapRange,
        spacingMob: attributes?.zolo_MOBcarouselGapRange,
    };
    const swiperOptions = {
        ...defaultOptions,
        ...attributes?.sliderOptions,
    };
    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            preset,
            pagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : ''
        ),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(swiperOptions &&
                Object.keys(swiperOptions).length > 1 && {
                    'data-swiper-options': JSON.stringify(swiperOptions),
                })}
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
            </div>
            {(showPagination || showPagination === undefined) && (
                <div className="swiper-pagination swiper-pagination-position-bottom"></div>
            )}
            {showNavigation && (
                <>
                    <div className={`swiper-navigation-wrap  swiper-navigation-position-center ${customNavIcon ? 'zolo-custom-nav' : ''}`}>
                        {customNavIcon && (
                            <>
                                <div className="swiper-nav-button swiper-zolo-prev">
                                    <DisplayZoloIcon icon={prevNavIcon} />
                                </div>
                                <div className="swiper-nav-button swiper-zolo-next">
                                    <DisplayZoloIcon icon={nextNavIcon} />
                                </div>
                            </>
                        )}
                        {!customNavIcon && (
                            <>
                                <div className="swiper-nav-button swiper-button-prev"></div>
                                <div className="swiper-nav-button swiper-button-next"></div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};;

export default Save;
