import apiFetch from '@wordpress/api-fetch';
import {useBlockProps} from '@wordpress/block-editor';
import {Spinner} from '@wordpress/components';
import {useEffect, useRef, useState} from '@wordpress/element';
import {dispatch} from "@wordpress/data";
import {__} from '@wordpress/i18n';
import classnames from 'classnames';
import './editor.scss';
import Inspector from './inspector';
import RenderView from './render-view';
import ThumbItem from "./thumb-item";
import {
  createThumbsSwiper,
  createMainSwiper,
  resetVideos,
  handleVideoTrigger
} from './helpers';

const {
  generateResRangeStyle,
  generateResCounterStyle,
  classArrayToStr,
  DisplayZoloIcon,
  SidebarOpener
} = window.zoloModule;

// Constants
import {COLUMNS, COLUMNS_GAP} from './constants';
import Style from './styles';

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;

  const {
    uniqueId,
    parentClasses,
    postQuery,
    contentPosition,
    preview,
    resMode,
    autoplay,
    autoplayDelay,
    pauseOnMouseEnter,
    infiniteLoop,
    showNavigation,
    speed,
    carouselEffect,
    customNavIcon,
    prevNavIcon,
    nextNavIcon,
  } = attributes;
  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(
      className,
      `${uniqueId} zolo-post-video-slider-wrap ${contentPosition}`,
      classArrayToStr(parentClasses),
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
          postExclude: [],
          postPerPage: 6,
          postOffset: 0,
          postOrderby: 'date',
          postOrder: 'desc',
          postThumbnail: '',
        },
      });
    }
  }, []);

  // Slider Ref
  const sliderRef = useRef(null);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  //when click swiper slider open block sidebar
  if (sliderRef.current) {
    sliderRef.current.addEventListener("click", function () {
      dispatch("core/block-editor").selectBlock(clientId);
      dispatch("core/edit-post").openGeneralSidebar("edit-post/block");
    });
  }

  useEffect(() => {
    console.log("slider init before");
    const timeoutId = setTimeout(() => {
      if (!sliderRef.current || !thumbSliderRef.current || !mainSliderRef.current) return;
      console.log("slider init after");

      const slider = sliderRef.current;
      const thumbsSlider = thumbSliderRef.current;
      const mainSlider = mainSliderRef.current;

      const breakpointsInit = {
        1024: {
          slidesPerView: deskCol || 4,
          spaceBetween: parseInt(deskColGap.slice(0, -1)) || 20,
        },
        768: {
          slidesPerView: tabCol || 3,
          spaceBetween: parseInt(tabColGap.slice(0, -1)) || 20,
        },
        640: {
          slidesPerView: mobCol || 2,
          spaceBetween: parseInt(mobColGap.slice(0, -1)) || 0,
        },
      };

      let sliderSettings = {
        loop: infiniteLoop,
        speed: speed * 100,
        autoplay: autoplay ? {delay: autoplayDelay * 100, pauseOnMouseEnter: pauseOnMouseEnter} : false,
        effect: carouselEffect,
        navigation: showNavigation
          ? {
            prevEl: customNavIcon ? `.${uniqueId} .swiper-zolo-prev` : `.${uniqueId} .swiper-button-prev`,
            nextEl: customNavIcon ? `.${uniqueId} .swiper-zolo-next` : `.${uniqueId} .swiper-button-next`,
          }
          : false,
        breakpoints: breakpointsInit
      };

      // Initialize Swiper
      const thumbSwiper = createThumbsSwiper(thumbsSlider, sliderSettings, true);
      const {breakpoints, ...withoutBreakPoint} = sliderSettings;
      const mainSwiper = createMainSwiper(
        mainSlider,
        {
          ...withoutBreakPoint,
          thumbs: {
            swiper: thumbSwiper,
          },
        },
        true
      );

      mainSwiper.on("slideChange", () => resetVideos(slider));

      slider.querySelectorAll('.zolo-post-video-trigger').forEach(trigger => {
        trigger.addEventListener('click', (event) => {
          event.preventDefault();
          handleVideoTrigger(trigger, slider);
        });
      });

      setAttributes({sliderOptions: sliderSettings});
    }, 4000);

    // Cleanup the timeout if the component unmounts before the timeout executes
    return () => clearTimeout(timeoutId);
  }, [
    sliderRef.current,
    thumbSliderRef.current,
    mainSliderRef.current,
    autoplay,
    autoplayDelay,
    pauseOnMouseEnter,
    infiniteLoop,
    speed,
    resMode,
    showNavigation,
    customNavIcon,
    prevNavIcon,
    nextNavIcon,
    contentPosition,
    carouselEffect,
    deskCol,
    tabCol,
    mobCol,
    deskColGap,
    tabColGap,
    mobColGap,
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

  if (Array.isArray(postResults) && postResults.length === 0) {
    return [
      isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>,
      dataSuccess ? (
        <div className="zolo-spinner">
          <Spinner/>
        </div>
      ) : (
        <p>{__('No posts found.', 'zoloblocks')}</p>
      ),
    ];
  }

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview?.postVideoSlider} alt={__('Post video slider Preview', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps} ref={sliderRef}>
        <SidebarOpener clientId={clientId}/>

        <div className="swiper zolo-main-slider" ref={mainSliderRef}>
          <div className="swiper-wrapper">
            <RenderView attributes={attributes} setAttributes={setAttributes} postResults={postResults}/>
          </div>
          {showNavigation && (
            <div className="swiper-navigation-wrap">
              {customNavIcon && (
                <>
                  <div className="swiper-nav-button swiper-zolo-prev">
                    <DisplayZoloIcon icon={prevNavIcon}/>
                  </div>
                  <div className="swiper-nav-button swiper-zolo-next">
                    <DisplayZoloIcon icon={nextNavIcon}/>
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
          )}
        </div>

        <div className="swiper zolo-thumbs-slider" ref={thumbSliderRef}>
          <div className="swiper-wrapper">
            <ThumbItem attributes={attributes} setAttributes={setAttributes} postResults={postResults}/>
          </div>
        </div>

      </div>
    </>
  );
}
