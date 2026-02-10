/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useRef, useEffect } from '@wordpress/element';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
    generateResRangeStyle,
    generateResCounterStyle,
    classArrayToStr,
    DisplayZoloIcon,
    SidebarOpener,
    ZoloToolbarButton,
    ZoloToolbarGroup,
} = window.zoloModule;

import { CAROUSEL_COLUMNS, CAROUSEL_GAP } from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        preset,
        resMode,
        slideItems,
        sliderType,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        showPagination,
        paginationType,
        dynamicBullets,
        speed,
        carouselEffect,
        addNewSlideBlock,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        coverFlowEffect,
    } = attributes;

    // Revies Carousel Ref
    const reviewCarouselRef = useRef(null);

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset, `${resMode !== 'Desktop' ? resMode : ''}`),
    });
    // columns count
    const {
        desktopRangeStyle: deskCol,
        tabRangeStyle: tabCol,
        mobRangeStyle: mobCol,
    } = generateResCounterStyle({
        controlName: CAROUSEL_COLUMNS,
        attributes,
        noProperty: true,
    });

    const {
        desktopRangeStyle: deskColGap,
        tabRangeStyle: tabColGap,
        mobRangeStyle: mobColGap,
    } = generateResRangeStyle({
        controlName: CAROUSEL_GAP,
        attributes,
        noProperty: true,
        noUnits: true,
    });
    // slider options init
    const zoloSliderInit = function (sliderE, options) {
        if (sliderE.swiper) {
            sliderE.swiper.destroy();
        }

        const wrapper = sliderE.parentElement;
        const pagination = wrapper ? Array.from(wrapper.children).find((el) => el.classList.contains('swiper-pagination')) : null;

        const defaultOptions = {
            pagination: {
                el: pagination,
                clickable: true,
                type: 'bullets',
            },
            effect: 'slide',
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        };

        const finalOptions = {
            ...options,
            pagination: {
                ...options.pagination,
                el: pagination, // Override el with the actual DOM element
            },
        };

        new Swiper(sliderE, Object.keys(options).length > 0 ? finalOptions : defaultOptions);
    };

    //slider initialize
    useEffect(() => {
        let breakpoints = {};
        breakpoints = {
            ...((deskCol !== '' || deskColGap !== '') && {
                1024: {
                    slidesPerView: deskCol || 3,
                    spaceBetween: parseInt(deskColGap.slice(0, -1)) || 30,
                },
            }),
            ...((tabCol !== '' || tabColGap !== '') && {
                768: {
                    slidesPerView: tabCol || 2,
                    spaceBetween: parseInt(tabColGap.slice(0, -1)) || 30,
                },
            }),
            ...((mobCol !== '' || mobColGap !== '') && {
                640: {
                    slidesPerView: mobCol || 1,
                    spaceBetween: parseInt(mobColGap.slice(0, -1)) || 0,
                },
            }),
        };

        let options = {
            ...(infiniteLoop !== undefined && { loop: infiniteLoop }),
            ...(speed !== undefined && { speed: speed * 100 }),
            ...(carouselEffect !== 'slide' && {
                effect: carouselEffect,
            }),
            ...(carouselEffect === 'coverflow' && {
                coverflowEffect: coverFlowEffect,
            }),
            ...(autoplay && {
                autoplay: autoplay
                    ? {
                          delay: autoplayDelay * 100,
                          pauseOnMouseEnter: pauseOnMouseEnter,
                      }
                    : false,
            }),
            ...(showNavigation !== undefined && {
                navigation: showNavigation
                    ? {
                          nextEl: customNavIcon ? `.${uniqueId} .swiper-zolo-next` : `.${uniqueId} .swiper-button-next`,
                          prevEl: customNavIcon ? `.${uniqueId} .swiper-zolo-prev` : `.${uniqueId} .swiper-button-prev`,
                      }
                    : false,
            }),
            // ...((showPagination || showPagination !== undefined) && {
            pagination:
                showPagination || showPagination === undefined
                    ? {
                          el: `.${uniqueId} .swiper-pagination`,
                          clickable: true,
                          type: paginationType,
                          dynamicBullets: dynamicBullets,
                      }
                    : false,
            // }),
            // breakpoints: breakpoints,
            ...(Object.keys(breakpoints).length > 0 && {
                breakpoints: breakpoints,
            }),
        };

        setAttributes({ sliderOptions: options });
        if (reviewCarouselRef.current) {
            zoloSliderInit(reviewCarouselRef.current, options);
        }
    }, [
        reviewCarouselRef.current,
        deskCol,
        tabCol,
        mobCol,
        deskColGap,
        tabColGap,
        mobColGap,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        showPagination,
        paginationType,
        dynamicBullets,
        speed,
        carouselEffect,
        slideItems,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        addNewSlideBlock,
        resMode,
        coverFlowEffect,
    ]);

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/review-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
        setAttributes({
            addNewSlideBlock: !addNewSlideBlock,
        });
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.postCarousel} alt={__('Review Carousel Preview', 'zoloblocks')} />;
    }

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/review-child'],
            template: [['zolo/review-child'], ['zolo/review-child'], ['zolo/review-child'], ['zolo/review-child'], ['zolo/review-child']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                <ZoloToolbarGroup>
                    <ZoloToolbarButton
                        className="components-toolbar__control"
                        label={__('Add Review', 'zoloblocks')}
                        icon="insert"
                        onClick={() => appendBlock()}
                    />
                </ZoloToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <div className="swiper" ref={reviewCarouselRef}>
                    <div {...innerBlocksProps} />
                </div>
                {(showPagination || showPagination === undefined) && (
                    <div
                        className="swiper-pagination swiper-pagination-position-bottom"
                        style={{ position: 'absolute', width: '100%', left: 0, bottom: 0 }}
                    ></div>
                )}

                {showNavigation && (
                    <>
                        <div
                            className={`swiper-navigation-wrap swiper-navigation-position-center ${customNavIcon ? 'zolo-custom-nav' : ''}`}
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
        </>
    );
}
