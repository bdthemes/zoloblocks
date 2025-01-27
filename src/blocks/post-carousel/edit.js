import apiFetch from '@wordpress/api-fetch';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import './editor.scss';
import Inspector from './inspector';
import RenderView from './render-view';

const { generateResRangeStyle, generateResCounterStyle, classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

// Constants
import { COLUMNS, COLUMNS_GAP } from './constants';
import Style from './styles';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    // Slider Ref
    const postCarouselRef = useRef(null);

    const {
        uniqueId,
        parentClasses,
        postQuery,
        preset,
        postTitleAnimation,
        preview,
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
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} zolo-post-carousel zolo-post-${preset}`,
            classArrayToStr(parentClasses),
            postTitleAnimation,
            `${resMode !== 'Desktop' ? resMode : ''}`
        ),
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

    useEffect(() => {
        if (typeof postQuery === 'undefined') {
            setAttributes({
                postQuery: {
                    postType: 'post',
                    postInclude: '',
                    postExclude: '',
                    postAuthors: [],
                    postTaxonomies: {},
                    postPerPage: 7,
                    postOffset: 0,
                    postOrderby: 'date',
                    postOrder: 'desc',
                    postThumbnail: '',
                    // showPagination: false,
                },
            });
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
        breakpoints = {
            1024: {
                slidesPerView: deskCol || 2,
                spaceBetween: parseInt(deskColGap.slice(0, -1)) || 30,
            },
            768: {
                slidesPerView: tabCol || 2,
                spaceBetween: parseInt(tabColGap.slice(0, -1)) || 30,
            },
            640: {
                slidesPerView: mobCol || 1,
                spaceBetween: parseInt(mobColGap.slice(0, -1)) || 0,
            },
        };

        let options = {
            loop: infiniteLoop,
            speed: speed * 100,
            effect: carouselEffect,
            ...(carouselEffect === 'coverflow' && {
                coverflowEffect: coverFlowEffect,
            }),
            autoplay: autoplay ? { delay: autoplayDelay * 100, pauseOnMouseEnter: pauseOnMouseEnter } : false,
            navigation: showNavigation
                ? {
                    nextEl: customNavIcon ? `.${uniqueId} .swiper-zolo-next` : `.${uniqueId} .swiper-button-next`,
                    prevEl: customNavIcon ? `.${uniqueId} .swiper-zolo-prev` : `.${uniqueId} .swiper-button-prev`,
                }
                : false,
            pagination: showPagination
                ? {
                    el: `.${uniqueId} .swiper-pagination`,
                    clickable: true,
                    type: paginationType,
                    dynamicBullets: dynamicBullets,
                }
                : false,
            breakpoints: breakpoints,
        };

        setAttributes({ sliderOptions: options });
        if (postCarouselRef.current) {
            zoloSliderInit(postCarouselRef.current, options);
        }
    }, [
        postCarouselRef.current,
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
        slideItems,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        addNewSlideBlock,
        resMode,
        coverFlowEffect,
    ]);

    const [postResults, setPostResults] = useState([]);
    const [dataSuccess, setDataSuccess] = useState(true);

    useEffect(() => {
        const apiData = {
            zolo_nonce: zoloParams.zolo_nonce,
            attributes: attributes,
            postQuery: postQuery,
        };

        apiFetch({
            path: '/zolo/v1/posts',
            method: 'POST',
            data: apiData,
        })
            .then((response) => {
                if (response.success) {
                    setPostResults([...response.data.posts]);
                    setDataSuccess(response.success);
                } else {
                    setPostResults([]);
                    setDataSuccess(response.success);
                }
            })
            .catch((error) => console.log(error));
    }, [postQuery]);

    let content;
    
    if (preview) {
        content = <img src={zoloParams.blocksPreview.postCarousel} alt={__('Post Carousel Preview', 'zoloblocks')} />;
    } else if (Array.isArray(postResults) && postResults.length === 0) {
        content = (
            <>
                {
                    dataSuccess ? (
                        <div className="zolo-spinner">
                            <Spinner />
                        </div>
                    ) : (
                        <p>{__('No posts found.', 'zoloblocks')}</p>
                    )
                }
            </>
        )
    } else {
        content = (
            <>
                <SidebarOpener clientId={clientId} />
                <div className="swiper" ref={postCarouselRef}>
                    <div className="swiper-wrapper">
                        <RenderView attributes={attributes} setAttributes={setAttributes} postResults={postResults} />
                    </div>
                </div>
                {showPagination && <div className="swiper-pagination swiper-pagination-position-bottom"></div>}
                {showNavigation && (
                    <Fragment>
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
                    </Fragment>
                )}
            </>
        )
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {content}
            </div>
        </>
    );
}
