/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./blocks/accordion/src/frontend.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', function () {
  const zoloAccordions = document.querySelectorAll('.wp-block-zolo-accordion');
  if (zoloAccordions && zoloAccordions.length > 0) {
    zoloAccordions.forEach(accordion => {
      new ZoloAccordion(accordion);
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map