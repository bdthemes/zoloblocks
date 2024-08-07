/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./blocks/progress-bar/src/frontend.js ***!
  \*********************************************/
document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.wp-block-zolo-progress-bar');
  const offset = progressBars[0].getAttribute('data-progressoffset');
  progressBars.forEach(function (progressBar) {
    const bars = progressBar.querySelectorAll('.wp-block-zolo-progress-bar-child');

    // add way point to each bar
    bars.forEach(function (bar) {
      // single bar
      const singleBar = bar.querySelector('.zolo-progress-bar__progress-bar');
      const singleCounter = bar.querySelector('.zolo-progress-bar_value');
      const singleValue = singleCounter.getAttribute('data-value');
      new Waypoint({
        element: singleBar,
        handler: function () {
          if (singleBar.classList.contains('active')) {
            singleBar.classList.remove('active');
          } else {
            singleBar.classList.add('active');
          }
          zoloNumberRolling(singleCounter, {
            number: singleValue,
            speed: 600
          });
        },
        continuous: true,
        offset: offset !== null ? `${offset}%` : 'bottom-in-view'
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=index.js.map