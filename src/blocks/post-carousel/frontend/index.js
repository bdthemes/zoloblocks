/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./blocks/post-carousel/src/frontend.js ***!
  \**********************************************/
window.addEventListener('DOMContentLoaded', () => {
  const zoloPostCarousel = document.querySelectorAll('.wp-block-zolo-post-carousel');
  if (zoloPostCarousel.length > 0) {
    zoloPostCarousel.forEach(carousel => {
      const carouselSelector = carousel.querySelector('.swiper');
      const carouselOptions = carousel.dataset.settings;
      const carouselOptionsObj = JSON.parse(carouselOptions);
      new Swiper(carouselSelector, carouselOptionsObj);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map