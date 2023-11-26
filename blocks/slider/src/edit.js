/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
const { Fragment, useEffect, useRef } = wp.element;
import { useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
const { generateResRangeStyle, generateResCounterStyle, classArrayToStr, DisplayIcon } = window.zoloModule;

// Constants
import { COLUMNS, COLUMNS_GAP } from './constants';

// import style
import Style from './style';

/**
 * Edit function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
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
        sliderEffect,
        addNewSlideBlock,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
    } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.slider} alt={__('Slider Preview', 'zolo-blocks')} />;
    }

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // columns count
    const {
        desktopRangeStyle: deskCol,
        tabRangeStyle: tabCol,
        mobRangeStyle: mobCol,
    } = generateResCounterStyle({
        controlName: COLUMNS,
        attributes,
        noProperty: true,
    });

    const {
        desktopRangeStyle: deskColGap,
        tabRangeStyle: tabColGap,
        mobRangeStyle: mobColGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        attributes,
        noProperty: true,
        noUnits: true,
    });

    // Slider Ref
    const swiperRef = useRef(null);
    const dispatch = useDispatch();

    // add new slide
    const addNewSlide = () => {
        // Create the new slide block
        const newSlideBlock = createBlock('zolo/slide');
        // Insert the new slide block
        dispatch('core/block-editor').insertBlocks(newSlideBlock, 100, clientId);
        setAttributes({ addNewSlideBlock: !addNewSlideBlock });
    };

    // control the click event on the slider
    const addClickEventListener = (swiperElement) => {
        swiperElement.addEventListener('click', function (e) {
            e.preventDefault();
            const outerContent = swiperElement.querySelector('.wp-block-zolo-slider');
            // Check if the click is on the inner content
            if (outerContent && outerContent.contains(e.target)) {
                dispatch('core/block-editor').selectBlock(clientId);
                dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
            }
        });
    };

    useEffect(() => {
        if (swiperRef.current) {
            addClickEventListener(swiperRef.current);
        }
    }, []);

    // slider options init
    const zoloSliderInit = function (sliderE, options) {
        if (sliderE.swiper) {
            sliderE.swiper.destroy();
        }
        new Swiper(sliderE, options);
    };

    //slider initialize
    useEffect(() => {
        let breakpoints = {};
        if (sliderType === 'carousel') {
            breakpoints = {
                1025: {
                    slidesPerView: deskCol || 2,
                    spaceBetween: parseInt(deskColGap.slice(0, -1)) || 30,
                },
                768: {
                    slidesPerView: tabCol || 2,
                    spaceBetween: parseInt(tabColGap.slice(0, -1)) || 30,
                },
                320: {
                    slidesPerView: mobCol || 1,
                    spaceBetween: parseInt(mobColGap.slice(0, -1)) || 0,
                },
            };
        }

        let options = {
            loop: infiniteLoop,
            speed: speed * 100,
            effect: sliderType === 'carousel' ? carouselEffect : sliderEffect,
            autoplay: autoplay ? { delay: autoplayDelay * 100, pauseOnMouseEnter: pauseOnMouseEnter } : false,
            navigation: showNavigation
                ? {
                      nextEl: customNavIcon ? '.swiper-zolo-next' : '.swiper-button-next',
                      prevEl: customNavIcon ? '.swiper-zolo-prev' : '.swiper-button-prev',
                  }
                : false,
            pagination: showPagination
                ? {
                      el: '.swiper-pagination',
                      clickable: true,
                      type: paginationType,
                      dynamicBullets: dynamicBullets,
                  }
                : false,
            effect: sliderType === 'carousel' ? carouselEffect : sliderEffect,
            breakpoints: breakpoints,
        };

        setAttributes({ sliderOptions: options });

        zoloSliderInit(swiperRef.current, options);
    }, [
        sliderType,
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
        sliderEffect,
        slideItems,
        addNewSlideBlock,
    ]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/slide'],
            template: [['zolo/slide'], ['zolo/slide'], ['zolo/slide']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    return (
        <Fragment>
            <Style props={props} />
            <style>{`
                [data-type="zolo/slide"] {
                    height: 100%;
                }
                [data-type="zolo/slider"] {
                    border: 2px dashed #ccc;
                    padding: 10px;                
                }
            `}</style>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton title={__('Add Slide', 'zolo-blocks')} icon="plus" onClick={addNewSlide} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="swiper" ref={swiperRef}>
                    <div {...innerBlocksProps} />
                    {showPagination && <div class="swiper-pagination swiper-pagination-position-bottom"></div>}
                    {showNavigation && (
                        <Fragment>
                            <div
                                className={`swiper-navigation-wrap  swiper-navigation-position-center ${
                                    customNavIcon ? 'zolo-custom-nav' : ''
                                }`}
                            >
                                {customNavIcon && (
                                    <>
                                        <div className="swiper-nav-button swiper-zolo-prev">
                                            <DisplayIcon icon={prevNavIcon} />
                                        </div>
                                        <div className="swiper-nav-button swiper-zolo-next">
                                            <DisplayIcon icon={nextNavIcon} />
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
                        </Fragment>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
