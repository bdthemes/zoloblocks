/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./blocks/flipbox/src/frontend.js ***!
  \****************************************/
document.addEventListener('DOMContentLoaded', function () {
  // flipbox items
  const zoloFlipBoxItems = document.querySelectorAll('.zolo-flip-box_item');
  if (zoloFlipBoxItems.length > 0) {
    zoloFlipBoxItems.forEach(function (item) {
      const triggerType = item.dataset.triggertype;
      if (triggerType === 'click') {
        item.addEventListener('click', function () {
          item.classList.toggle('zolo-flip-box_active');
        });
      }
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map