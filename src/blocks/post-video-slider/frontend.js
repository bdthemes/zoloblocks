import {
  createThumbsSwiper,
  createMainSwiper,
  resetVideos,
  handleVideoTrigger
} from './helpers';

(() => {
  "use strict";

  /**
   * Function to initialize the sliders
   */
  const initPostVideoSlider = () => {
    const slider = document.querySelector('.wp-block-zolo-post-video-slider');

    if (!slider) return;

    const settings = JSON.parse(slider.getAttribute('data-settings'));

    const thumbsSlider = slider.querySelector('.zolo-thumbs-slider');
    const mainSlider = slider.querySelector('.zolo-main-slider');

    // Initialize the main slider and thumbs slider
    const thumbsSwiper = createThumbsSwiper(thumbsSlider, settings);
    const {breakpoints,...withoutBreakPoint}=settings;
    const mainSwiper = createMainSwiper(mainSlider, {
      ...withoutBreakPoint,
      thumbs: {
        swiper: thumbsSwiper,
      }
    });

    mainSwiper.on('slideChange', () => resetVideos(slider));
    thumbPlayBtnTriggers(slider);
  };

  const thumbPlayBtnTriggers = (slider) => {
    slider.querySelectorAll('.zolo-post-video-trigger').forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        handleVideoTrigger(trigger, slider);
      });
    });
  };

  // Initialize the slider on window load
  window.addEventListener('DOMContentLoaded', initPostVideoSlider);
})();
