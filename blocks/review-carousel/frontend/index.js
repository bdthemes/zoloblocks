/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./blocks/review-carousel/src/frontend.js ***!
  \************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const zoloRevewCarousel = document.querySelectorAll('.wp-block-zolo-review-carousel');
  if (zoloRevewCarousel.length > 0) {
    zoloRevewCarousel.forEach(carousel => {
      const carouselSelector = carousel.querySelector('.swiper');
      const carouselOptions = carousel.dataset.swiperOptions;
      const carouselOptionsObj = JSON.parse(carouselOptions);
      new Swiper(carouselSelector, carouselOptionsObj);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map


// Path: blocks/review-carousel/src/frontend.js