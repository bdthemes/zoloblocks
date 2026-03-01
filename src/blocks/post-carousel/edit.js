import apiFetch from '@wordpress/api-fetch';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';

const { generateResRangeStyle, generateResCounterStyle, classArrayToStr, DisplayZoloIcon, SidebarOpener, ZoloSpinner } = window.zoloModule;

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
        customNavIcon,
        prevNavIcon,
        nextNavIcon,
        coverFlowEffect,
    } = attributes;

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

    let options = {
        slidesPerView: resMode === 'Desktop' ? deskCol || 2 : resMode === 'Tablet' ? tabCol || 2 : mobCol || 1,
        spaceBetween:
            resMode === 'Desktop'
                ? parseInt(deskColGap.slice(0, -1)) || 30
                : resMode === 'Tablet'
                  ? parseInt(tabColGap.slice(0, -1)) || 30
                  : parseInt(mobColGap.slice(0, -1)) || 0,
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
    };

    //slider initialize

    useEffect(() => {
        if (postCarouselRef?.current) {
            const { ownerDocument } = postCarouselRef.current;
            const editorWindow = ownerDocument.defaultView || window;
            const { Swiper } = editorWindow;
            let swiper = null;
            if (Swiper) {
                swiper = new Swiper(postCarouselRef.current, options);
            }
            return () => {
                if (swiper) {
                    swiper.destroy();
                }
            };
        }
    }, [postCarouselRef.current, resMode, options]);

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
                {dataSuccess ? (
                    <div className="zolo-spinner">
                        <ZoloSpinner />
                    </div>
                ) : (
                    <p>{__('No posts found.', 'zoloblocks')}</p>
                )}
            </>
        );
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
            </>
        );
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>{content}</div>
        </>
    );
}
