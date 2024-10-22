/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { Fragment, useEffect, useRef } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import Inspector from './inspector';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

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
const { DisplayZoloIcon } = window.zoloModule;
/**
 * Edit function
 */

// editor
import './editor.scss';

// import style
import Style from './style';
import { add } from '@dnd-kit/utilities';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, parentClasses, addNewSlideBlock, customNavIcon, prevNavIcon, nextNavIcon, sliderOptions } = attributes;

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

    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, parentClasses),
    });

    // add new slide
    const addNewSlide = () => {
        // Create the new slide block
        const newSlideBlock = createBlock('zolo/slide');
        // Insert the new slide block
        dispatch('core/block-editor').insertBlocks(newSlideBlock, 100, clientId);
        setAttributes({ addNewSlideBlock: !addNewSlideBlock });
    };

    const dispatch = useDispatch();

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
    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/slide'],
            template: [['zolo/slide'], ['zolo/slide'], ['zolo/slide'], ['zolo/slide']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    return (
        <>
            <Style props={props} />
            <style>
                {`
                [data-type="zolo/slide"] {
                    height: 100%;
                }
            `}
            </style>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton title={__('Add Slide', 'zoloblocks')} icon="insert" onClick={addNewSlide} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <Swiper
                    className={`${pagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : ''}`}
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
                    slidesPerView={1}
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
                    // slidesPerView={deviceType === 'Desktop' ? 3 : deviceType === 'Tablet' ? 2 : 1}
                >
                    <div {...innerBlocksProps} />
                    {navigation && (
                        <>
                            <div
                                className={`swiper-navigation-wrap ${navPosition ? `zolo-nav-ps-${navPosition}` : ''} ${customNavIcon ? 'zolo-custom-nav' : ''}`}
                            >
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
