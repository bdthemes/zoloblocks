import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';

const { generateResRangeStyle, generateResCounterStyle, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

// Constants
import { COLUMNS, COLUMNS_GAP } from './constants';
import Style from './styles';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    // Slider Ref
    const postCarouselRef = useRef(null);

    const {
        uniqueId,
        parentClasses,
        postQuery,
        preset,
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
        sliderEffect,
        addNewSlideBlock,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
    } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} zolo-post-carousel-wrap zolo-post-${preset}`, classArrayToStr(parentClasses)),
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
                    postPerPage: 6,
                    postOffset: 0,
                    postOrderby: 'date',
                    postOrder: 'desc',
                    postThumbnail: '',
                    showPagination: false,
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
        // if (sliderType === 'carousel') {
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
            // };
        };

        let options = {
            loop: infiniteLoop,
            speed: speed * 100,
            effect: carouselEffect,
            autoplay: autoplay ? { delay: autoplayDelay * 100, pauseOnMouseEnter: pauseOnMouseEnter } : false,
            navigation: showNavigation
                ? {
                      nextEl: customNavIcon ? `.${uniqueId} .swiper-zolo-next` : `.${uniqueId} .swiper-button-next`,
                      prevEl: customNavIcon ? `.${uniqueId} .swiper-zolo-prev` : `.${uniqueId} .swiper-button-prev`,
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
            effect: carouselEffect,
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
        sliderEffect,
        slideItems,
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        addNewSlideBlock,
        resMode,
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
                    setPageTotal(response.data.total_page);
                    setDataSuccess(response.success);
                } else {
                    setPostResults([]);
                    setPageTotal(0);
                    setDataSuccess(response.success);
                }
            })
            .catch((error) => console.log(error));
    }, [postQuery]);

    if (Array.isArray(postResults) && postResults.length === 0) {
        return [
            isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />,
            dataSuccess ? (
                <div className="zolo-spinner">
                    <Spinner />
                </div>
            ) : (
                <p>{__('No posts found.', 'zolo-blocks')}</p>
            ),
        ];
    }

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.postCarousel} alt={__('Post Carousel Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="swiper" ref={postCarouselRef}>
                    <div className="swiper-wrapper">
                        <RenderView attributes={attributes} setAttributes={setAttributes} postResults={postResults} />
                    </div>
                </div>
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
            </div>
        </>
    );
}
