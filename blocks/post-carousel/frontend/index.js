/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./blocks/post-carousel/src/frontend.js ***!
  \**********************************************/
window.addEventListener('DOMContentLoaded', () => {
  const zoloSliders = document.querySelectorAll('.wp-block-zolo-post-carousel');
  if (zoloSliders.length > 0) {
    zoloSliders.forEach(slider => {
      const sliderSelector = slider.querySelector('.swiper');
      const sliderOptions = slider.dataset.settings;
      const sliderOptionsObj = JSON.parse(sliderOptions);
      new Swiper(sliderSelector, sliderOptionsObj);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map