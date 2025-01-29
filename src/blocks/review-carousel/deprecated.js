import attributes from './attributes';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const deprecated = {
    attributes: {
        ...attributes,
        infiniteLoop: {
            type: 'boolean',
            default: true,
        },
        showNavigation: {
            type: 'boolean',
            default: false,
        },
        showPagination: {
            type: 'boolean',
            default: true,
        },
        speed: {
            type: 'number',
            default: 8,
        },
    },
    save: ({ attributes }) => {
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
                data-swiper-options={JSON.stringify(sliderOptions)}
                data-swiper-breakpoints={JSON.stringify(breakpoints)}
            >
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <InnerBlocks.Content />
                    </div>
                </div>
                {showPagination && <div className="swiper-pagination swiper-pagination-position-bottom"></div>}
                {showNavigation && (
                    <>
                        <div
                            className={`swiper-navigation-wrap  swiper-navigation-position-center ${customNavIcon ? 'zolo-custom-nav' : ''}`}
                        >
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
    },
};
export default deprecated;
