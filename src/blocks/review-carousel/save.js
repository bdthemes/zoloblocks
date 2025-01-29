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
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-swiper-breakpoints={JSON.stringify(breakpoints)}
            {...(sliderOptions &&
                (Object.keys(sliderOptions).length > 2 ||
                    sliderOptions?.breakpoints['1024']['slidesPerView'] !== '3' ||
                    sliderOptions?.breakpoints['1024']['spaceBetween'] !== 30 ||
                    sliderOptions?.breakpoints['768']['slidesPerView'] !== '2' ||
                    sliderOptions?.breakpoints['768']['spaceBetween'] !== 30 ||
                    sliderOptions?.breakpoints['640']['slidesPerView'] !== '1' ||
                    sliderOptions?.breakpoints['640']['spaceBetween'] !== 0) && {
                    'data-swiper-options': JSON.stringify(sliderOptions),
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
};

export default Save;
