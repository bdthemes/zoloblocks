import {useBlockProps} from '@wordpress/block-editor';
import {useEffect, useRef} from '@wordpress/element';
import {dispatch} from '@wordpress/data';
import classnames from 'classnames';
import MainSlider from './main-slider';
import ThumbItem from './thumb-item';
import {COLUMNS, COLUMNS_GAP} from './constants';
import {createThumbsSwiper, createMainSwiper, resetVideos, handleVideoTrigger} from './helpers';

const {
  generateResRangeStyle,
  generateResCounterStyle,
  classArrayToStr,
  DisplayZoloIcon,
  SidebarOpener
} = window.zoloModule;

export default function RenderView({props, postResults}) {
  const {attributes, setAttributes, className, clientId} = props;
  const {
    uniqueId,
    parentClasses,
    postQuery,
    contentPosition,
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

  // Slider Ref
  const sliderRef = useRef(null);
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  //when click swiper slider open block sidebar
  if (sliderRef.current) {
    sliderRef.current.addEventListener('click', function () {
      dispatch('core/block-editor').selectBlock(clientId);
      dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
    });
  }

  useEffect(() => {
    console.log('slider init before1');
    const initSwiper = () => {
      if (!sliderRef.current || !thumbSliderRef.current || !mainSliderRef.current) {
        //setTimeout(initSwiper, 100);
        return;
      }
      console.log('slider init after');
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
        parallax: true,
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
        breakpoints: breakpointsInit,
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

      const observer = new MutationObserver(() => {
        const videoTriggers = slider.querySelectorAll('.zolo-post-video-trigger');
        if (videoTriggers.length > 0) {
          videoTriggers.forEach((trigger) => {
            if (!trigger.dataset.listenerAttached) {
              // Check to avoid duplicate listeners
              console.log('Adding event listener for video trigger');
              trigger.addEventListener('click', (event) => {
                event.preventDefault();
                handleVideoTrigger(trigger, slider);
              });
              trigger.dataset.listenerAttached = true; // Mark the trigger to prevent duplicate listeners
            }
          });
        }
      });

      // Start observing for child changes inside the slider
      observer.observe(slider, {childList: true, subtree: true});

      mainSwiper.on('slideChange', () => resetVideos(slider));
      setAttributes({sliderOptions: sliderSettings});
    };

    initSwiper();

    // const timeoutId = setTimeout(() => {
    //   initSwiper();
    // }, 1000);
    // return () => clearTimeout(timeoutId);
  }, [
    postQuery,
    uniqueId,
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

  return (
    <div {...blockProps} ref={sliderRef}>
      <SidebarOpener clientId={clientId}/>

      <div className="swiper zolo-main-slider" ref={mainSliderRef}>
        <div className="swiper-wrapper">
          <MainSlider attributes={attributes} setAttributes={setAttributes} postResults={postResults}/>
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
  )
}
