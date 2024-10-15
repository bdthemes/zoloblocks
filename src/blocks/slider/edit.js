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
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
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
    const {
        uniqueId,
        parentClasses,
        addNewSlideBlock,
        showNavigation,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        showPagination,
        paginationType,
        navPosition,
        pagiPosition,
        progressDirection,
    } = attributes;

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

    useEffect(() => {
        // Ensure the swiper element exists
        if (!swiperRef.current) return;

        // Define event handler functions
        const handleSwiperProgress = (e) => {
            const [swiper, progress] = e.detail;
            // Handle progress here if needed
        };

        const handleSlideChange = (e) => {
            const [swiper] = e.detail;
            // Handle slide change here if needed
        };

        const handleSwiperInit = (e) => {
            const [swiper] = e.detail;
            swiper.update();
        };

        // Add event listeners
        swiperRef.current.addEventListener('swiperprogress', handleSwiperProgress);
        swiperRef.current.addEventListener('swiperslidechange', handleSlideChange);
        swiperRef.current.addEventListener('swiperinit', handleSwiperInit);

        // Cleanup event listeners when component updates or unmounts
        return () => {
            if (!swiperRef.current) return;
            swiperRef.current.removeEventListener('swiperprogress', handleSwiperProgress);
            swiperRef.current.removeEventListener('swiperslidechange', handleSlideChange);
            swiperRef.current.removeEventListener('swiperinit', handleSwiperInit);
        };
    }, [attributes.slider]); // Depend on relevant attributes

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
                    className={`${showPagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : ''}`}
                    key={JSON.parse(addNewSlideBlock)}
                    ref={swiperRef}
                    modules={[A11y, Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    observer={true}
                    observeParents={true}
                    // navigation={true}
                    loop={true}
                    pagination={
                        showPagination
                            ? {
                                  clickable: true,
                                  type: paginationType || 'bullets',
                              }
                            : false
                    }
                    slidesPerView={1}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    // slidesPerView={deviceType === 'Desktop' ? 3 : deviceType === 'Tablet' ? 2 : 1}
                >
                    <div {...innerBlocksProps} />
                    {showNavigation && (
                        <>
                            <div
                                className={`swiper-navigation-wrap ${navPosition ? `zolo-nav-ps-${navPosition}` : ''} ${customNavIcon ? 'zolo-custom-nav' : ''}`}
                            >
                                {customNavIcon && (
                                    <>
                                        <div slot="navigation" className="swiper-nav-button swiper-zolo-prev" onClick={handlePrev}>
                                            <DisplayZoloIcon icon={prevNavIcon} />
                                        </div>
                                        <div slot="navigation" className="swiper-nav-button swiper-zolo-next" onClick={handleNext}>
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
