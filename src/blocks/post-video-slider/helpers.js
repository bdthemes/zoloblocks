import {useSelect} from "@wordpress/data";

/**
 * Function to create the main Swiper instance
 * @param {HTMLElement} mainSlider
 * @param {Object} settings
 * @param {boolean} destroy
 */
export const createMainSwiper = (mainSlider, settings, destroy = false) => {
  if (destroy && mainSlider && mainSlider.swiper) {
    mainSlider.swiper.destroy(true, true);
  }
  return new Swiper(mainSlider, settings);
};

/**
 * Function to create the thumbs Swiper instance
 * @param {HTMLElement} thumbsSlider
 * @param {Object} settings
 * @param {boolean} destroy
 */
export const createThumbsSwiper = (thumbsSlider, settings, destroy = false) => {
  if (destroy && thumbsSlider && thumbsSlider.swiper) {
    thumbsSlider.swiper.destroy(true, true);
  }
  return new Swiper(thumbsSlider, {
    spaceBetween: 20,
    slidesPerView: 2,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: !!settings.loop && settings.loop,
    speed: settings.speed || 500,
    breakpoints: settings.breakpoints
  });
};

/**
 * Function to reset video iframes
 * @param {HTMLElement} slider
 */
export const resetVideos = (slider) => {
  slider.querySelectorAll('.zolo-video-wrap').forEach(videoWrap => {
    videoWrap.style.zIndex = -1;
  });

  slider.querySelectorAll('.zolo-video-iframe').forEach(iframe => {
    const src = iframe.src;
    iframe.src = src.replace("autoplay=1", "");
    iframe.setAttribute('src', '');
  });
};


/**
 * Event handler for video triggers
 * @param {HTMLElement} trigger
 * @param {HTMLElement} slider
 */
export const handleVideoTrigger = (trigger, slider) => {
  const videoSrc = trigger.getAttribute('data-src').split("?")[0];
  const activeSlide = slider.querySelector('.zolo-main-slider .swiper-slide-active .zolo-post-image-wrap');

  const iframe = activeSlide.querySelector('.zolo-video-iframe');
  iframe.setAttribute('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0&rel=0&controls=0&loop=1`);

  activeSlide.querySelector('.zolo-video-wrap').style.zIndex = 10;
};


export const getPostMetaFieldValue = (postId, metaKey, postType = 'post') => {
  return useSelect((select) =>
    select('core').getEntityRecord('postType', postType, postId)?.meta?.[metaKey]
  );
};

export const videoLinkRender = (videoLink) => {
  const youtubeRegex = /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
  const vimeoRegex = /^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$/im;

  const youtubeMatch = videoLink.match(youtubeRegex);
  const youtubeId = youtubeMatch ? youtubeMatch[1] : false;

  const vimeoMatch = videoLink.match(vimeoRegex);
  const vimeoId = vimeoMatch ? vimeoMatch[3] : false;

  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  } else if (vimeoId) {
    return `https://vimeo.com/${vimeoId}`;
  }

  return false;
};
