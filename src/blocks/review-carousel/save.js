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
        showPagination = true,
        customNavIcon,
        sliderOptions,
        breakpoints,
        prevNavIcon,
        nextNavIcon,
        pagiPosition: attrPagiPosition,
    } = attributes;

    const {
        navigation = false,
        paginationType = 'bullets',
        pagiPosition = 'bottom-center',
        navPosition = 'center-center',
        progressDirection = 'top',
    } = sliderOptions || {};

    const pagiPos = attrPagiPosition ?? pagiPosition;
    const isNavVisible = showNavigation !== undefined ? showNavigation : navigation;
    const isPaginationVisible = showPagination !== false;

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
        navigation: isNavVisible,
        pagination: isPaginationVisible,
    };
    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            preset,
            showPagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPos}`) : ''
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
            {showPagination && (
                <div className="swiper-pagination swiper-pagination-position-bottom"></div>
            )}
            {isNavVisible && (
                <>
                    <div className={`swiper-navigation-wrap  swiper-navigation-position-center ${customNavIcon ? 'zolo-custom-nav' : ''}`}>
                        {customNavIcon && (
                            <>
                                <div className="swiper-nav-button swiper-zolo-prev swiper-button-prev">
                                    <DisplayZoloIcon icon={prevNavIcon} />
                                </div>
                                <div className="swiper-nav-button swiper-zolo-next swiper-button-next">
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
};

export default Save;
