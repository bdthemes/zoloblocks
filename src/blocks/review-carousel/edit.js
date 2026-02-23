/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useRef, useEffect } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import { useSelect, dispatch } from '@wordpress/data';
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
        pagiPosition,
        showPagination = true,
    } = attributes;
    // Swiper Options
    const {
        speed = 800,
        loop = true,
        autoplay = true,
        pauseOnMouseEnter = true,
        autoplayDelay = 3000,
        effect = 'slide',
        coverflowEffect = {
            slideShadows: true,
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
        },
        navigation = false,
        navPosition = 'center-center',
        paginationType = 'bullets',
        progressDirection,
    } = sliderOptions || {};

    // Revies Carousel Ref
    const swiperRef = useRef(null);
    const sliderRef = useRef(null);
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

    const handlePrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    };
    const handleNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    };

    const blockProps = useBlockProps({
        ref: useMergeRefs([sliderRef]),
        className: classnames(
            className,
            uniqueId,
            showPagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : '',
            classArrayToStr(parentClasses),
            preset,
            resMode !== 'Desktop' ? resMode : ''
        ),
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
    const deviceType = useSelect((select) => select('core/editor').getDeviceType());

    // add new slide
    const appendBlock = () => {
        const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
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
            // templateLock: false,
            // renderAppender: false,
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
                <Swiper
                    key={`${addNewSlideBlock}${paginationType}${pagiPosition}${progressDirection}${JSON.stringify(sliderOptions)}`}
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
                    observer={true}
                    observeParents={true}
                    loop={wp.data.select('core/block-editor').getBlocks(clientId).length > (sliderOptions?.perviewDesktop || 4) ? loop : false}
                    pagination={
                        showPagination
                            ? {
                                  clickable: true,
                                  type: paginationType || 'bullets',
                              }
                            : false
                    }
                    effect={effect || 'slide'}
                    coverflowEffect={effect === 'coverflow' ? coverflowEffect : {}}
                    slidesPerView={deviceType === 'Desktop' ? (deskCol ?? 3) : deviceType === 'Tablet' ? (tabCol ?? 2) : (mobCol ?? 1)}
                    spaceBetween={
                        deviceType === 'Desktop'
                            ? deskColGap && deskColGap !== ''
                                ? deskColGap
                                : 30
                            : deviceType === 'Tablet'
                              ? tabColGap && tabColGap !== ''
                                  ? tabColGap
                                  : 20
                              : mobColGap && mobColGap !== ''
                                ? mobColGap
                                : 10
                    }
                    speed={speed || 800}
                    autoplay={
                        autoplay
                            ? {
                                  delay: autoplayDelay || 3000,
                                  disableOnInteraction: false,
                                  pauseOnMouseEnter: pauseOnMouseEnter || false,
                              }
                            : false
                    }
                >
                    <div {...innerBlocksProps} />
                </Swiper>
                {showNavigation && (
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
            </div>
        </>
    );
}
