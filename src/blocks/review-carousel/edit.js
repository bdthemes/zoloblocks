/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useRef, useEffect } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import { createBlock } from '@wordpress/blocks';

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
// Import Swiper core and required modules
import {
    A11y,
    Autoplay,
    Controller,
    EffectCoverflow,
    EffectCube,
    EffectFade,
    EffectFlip,
    EffectCreative,
    EffectCards,
    HashNavigation,
    History,
    Keyboard,
    Lazy,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
    Thumbs,
    Virtual,
    Zoom,
    FreeMode,
    Grid,
    Manipulation,
} from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
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
        // autoplay,
        // autoplayDelay,
        // pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        showPagination,
        // paginationType,
        dynamicBullets,
        // speed,
        carouselEffect,
        addNewSlideBlock,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        coverFlowEffect,
        sliderOptions,
        contentPosition,
    } = attributes;

    const {
        speed = 800,
        autoplay = false,
        autoplayDelay = 3000,
        pauseOnMouseEnter = false,
        loop = false,
        navigation = true,
        navPosition = 'center-center',
        effect = 'slide', // slide, fade, cube, coverflow, flip, creative, cards

        cardsEffect = {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
        },
        coverflowEffect = {
            slideShadows: true,
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            // shadowOffset: 20,
            // shadowScale: 0.94,
        },
        cubeEffect = {
            slideShadows: false,
            shadow: false,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        creativePreset = 'preset1',
        fadeEffect = {
            crossfade: false,
        },
        flipEffect = {
            slideShadows: true,
            limitRotation: true,
            // shadowOffset: 20,
            // shadowScale: 0.94,
        },
        pagination = true,
        paginationType = 'bullets',
        pagiPosition = 'bottom-center',
        progressDirection = 'top',
    } = sliderOptions || {};

    const sliderRef = useRef(null);

    const blockProps = useBlockProps({
        ref: useMergeRefs([sliderRef]),
        className: classnames(className, uniqueId, parentClasses),
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = (event) => {
            const childBlock = event?.target?.closest('.wp-block');
            if (!childBlock) {
                return;
            }
            const childBlockID = childBlock?.dataset?.block;
            if (childBlockID) {
                dispatch('core/block-editor').selectBlock(childBlockID);
            }
        };

        const sliderElement = sliderRef.current;

        if (sliderElement) {
            sliderElement.addEventListener('click', handleClick);
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('click', handleClick);
            }
        };
    }, [clientId, dispatch]);

    const deviceType = useSelect((select) => select('core/editor').getDeviceType());
    const swiperRef = useRef(null);
    const handlePrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    };
    const handleNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    };

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

    // add new slide
    const addNewSlide = () => {
        // Create the new slide block
        const newSlideBlock = createBlock('zolo/review-child');
        // Insert the new slide block
        dispatch('core/block-editor').insertBlocks(newSlideBlock, 100, clientId);
        setAttributes({ addNewSlideBlock: !addNewSlideBlock });
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
            // templateLock: false,
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
                        onClick={() => addNewSlide()}
                    />
                </ZoloToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <Swiper
                    className={`${pagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : ''} ${contentPosition}`}
                    key={`${addNewSlideBlock}${paginationType}${navPosition}${pagiPosition}${progressDirection}${JSON.stringify(sliderOptions)}`}
                    ref={swiperRef}
                    modules={[
                        A11y,
                        Autoplay,
                        Navigation,
                        Pagination,
                        EffectCoverflow,
                        EffectCube,
                        EffectFade,
                        EffectFlip,
                        EffectCreative,
                        EffectCards,
                    ]}
                    // spaceBetween={20}
                    observer={true}
                    observeParents={true}
                    loop={loop}
                    pagination={
                        pagination
                            ? {
                                  clickable: true,
                                  type: paginationType || 'bullets',
                              }
                            : false
                    }
                    // effect={effect}
                    effect={effect}
                    coverflowEffect={effect === 'coverflow' ? coverflowEffect : {}}
                    cubeEffect={effect === 'cube' ? cubeEffect : {}}
                    cardsEffect={effect === 'cards' ? cardsEffect : {}}
                    // creativeEffect={effect === 'creative' ? creativePresets[creativePreset] : {}}
                    fadeEffect={effect === 'fade' ? fadeEffect : {}}
                    flipEffect={effect === 'flip' ? flipEffect : {}}
                    // slidesPerView={3 }
                    speed={speed || 800}
                    autoplay={
                        autoplay
                            ? {
                                  delay: autoplayDelay || 3,
                                  disableOnInteraction: false,
                                  pauseOnMouseEnter: pauseOnMouseEnter || false,
                              }
                            : false
                    }
                    navigation={showNavigation ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false}
                    slidesPerView={deviceType === 'Desktop' ? 3 : deviceType === 'Tablet' ? 2 : 1}
                    spaceBetween={deviceType === 'Desktop' ? 30 : deviceType === 'Tablet' ? 30 : 0}
                >
                    <div {...innerBlocksProps} />
                    {showNavigation && (
                        <>
                            <div className="swiper-navigation-wrap">
                                {customNavIcon && (
                                    <>
                                        <div
                                            slot="navigation"
                                            className="swiper-nav-button swiper-zolo-prev swiper-button-prev"
                                            onClick={handlePrev}
                                        >
                                            <DisplayZoloIcon icon={prevNavIcon} />
                                        </div>
                                        <div
                                            slot="navigation"
                                            className="swiper-nav-button swiper-zolo-next swiper-button-next"
                                            onClick={handleNext}
                                        >
                                            <DisplayZoloIcon icon={nextNavIcon} />
                                        </div>
                                    </>
                                )}
                                {!customNavIcon && (
                                    <>
                                        <div slot="navigation" className="swiper-nav-button swiper-button-prev" onClick={handlePrev}></div>
                                        <div slot="navigation" className="swiper-nav-button swiper-button-next" onClick={handleNext}></div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </Swiper>
            </div>
        </>
    );
}
