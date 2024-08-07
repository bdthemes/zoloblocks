/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/text-path/src/svg.js":
/*!*************************************!*\
  !*** ./blocks/text-path/src/svg.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SvgComponent = ({
  children,
  uniqueId,
  pathType
}) => {
  // Ensure uniqueId is defined and unique for each instance
  // Generate random id if not provided
  let path, viewBox, height, width;
  if (pathType == 'wave') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0,42.2494C62.5,42.2494,62.5,0.25,125,0.25s62.5,41.9994,125,41.9994",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M-41.6693,49.25"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M-208.3307,-6.75"
    }));
    viewBox = '0 0 250 42.4994';
    height = '42.4994';
    width = '250';
  } else if (pathType == 'arc') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M.25,125.25a125,125,0,0,1,250,0",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250.5 125.25';
    height = '125.25';
    width = '250.5';
  } else if (pathType == 'circle') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250.5 250.5';
    height = '250.5';
    width = '250.5';
  } else if (pathType == 'line') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M 0 27 l 250 -22",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250 22';
    height = '22';
    width = '250';
  } else if (pathType == 'oval') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250.5 125.75';
    height = '125.75';
    width = '250.5';
  } else if (pathType == 'spiral') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250.4348 239.4454';
    height = '239.4454';
    width = '250.4348';
  } else if (pathType == 'triangle') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1.94003 116.22C1.94003 115.64 1.92003 115.06 1.90003 114.48C1.75003 110.07 2.05003 82.7502 30.43 62.0302C56.35 43.1102 134.64 15.7402 159.41 7.35024C170.51 3.59024 182.34 2.39024 193.93 4.16024C209.42 6.53024 227.98 14.5202 239.25 37.2702C243.6 46.0402 246.01 55.6302 246.64 65.4002C248.03 86.8802 249.54 141.78 234.81 198.62C234.81 198.62 222.34 251.39 165.89 246.31C157.13 245.52 148.63 242.93 140.8 238.9C116.41 226.35 49.98 190.56 16.67 156.86C16.67 156.86 2.29003 143.24 1.94003 116.23V116.22Z",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    width = '250';
    height = '250';
    viewBox = '0 0 250 250';
  } else if (pathType == 'rectangle') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "m2.56,125.5s.49-45,7.96-64.5c0,0,10.4-33.15,45.61-47.83,0,0,17.71-8.84,68.04-9.67,0,0,51.31-.76,73.57,11.04,0,0,25.81,10.04,38.89,38.98,10.54,23.31,10.82,71.48,10.82,71.48,0,0-1.33,44.22-8.88,65.92-6.35,18.24-19.68,34.51-39.96,43.96s-49.83,11.34-73.27,11.62-51.47-2.11-71.01-10.14-35.39-27.83-40.15-38.76c-4.44-10.18-11.39-27.16-11.61-72.1Z",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    viewBox = '0 0 250 250';
    height = '250';
    width = '250';
  } else if (pathType == 'polygon') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "m9.36,125.54s-.03-29.45,3.8-44.86,11.85-27.14,22.29-35.52c10.44-8.38,28.22-21.7,49-30.89,0,0,22.19-11.17,38.53-10.94,16.34.23,29.99,6.47,41.28,12.24,11.28,5.77,33.53,18.04,48.66,29.68s21.15,25.18,23.76,34.91,4.49,39.38,3.82,47.28c-.67,7.9-.15,26.42-3.22,41.23s-10.11,23.59-18.79,32.75c-8.68,9.17-45.87,30.41-54.35,34.35-8.48,3.95-20.99,11.76-36.81,11.87-15.82.11-22.35-2.86-29.98-5.6-13-4.68-37.24-18.34-45.53-24.24-8.3-5.9-30.14-18.19-37.67-43.7,0,0-3.97-14.67-4.78-48.57Z",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    width = '221';
    height = '233';
    viewBox = '0 0 221 233';
  } else if (pathType == 'curve') {
    path = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0.719971 46.8898C0.719971 46.8898 33.76 7.04983 80.9 23.9798C128.04 40.9098 117.75 52.1998 169.21 41.2398C220.67 30.2798 249.44 50.1998 249.44 50.1998",
      id: `MyPath-${uniqueId}`,
      className: "zolo-path"
    });
    width = '250';
    height = '70';
    viewBox = '0 0 250 70';
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: viewBox,
    height: height,
    width: width
  }, path, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgComponent);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./blocks/text-path/src/frontend.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./blocks/text-path/src/svg.js");



document.addEventListener('DOMContentLoaded', () => {
  const textPath = document.querySelectorAll('.wp-block-zolo-text-path');
  if (textPath.length < 0) {
    return;
  }
  const SvgItem = ({
    textpathContent,
    textPathType,
    pathlink,
    uniqueid,
    textpathLength,
    textPathSpoint
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      uniqueId: uniqueid,
      pathType: textPathType
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textPath", {
      href: `#MyPath-${uniqueid}`,
      textLength: textpathLength ? textpathLength : 0,
      startOffset: textPathSpoint ? 100 - textPathSpoint + '%' : 0 + '%'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "zolo-textpath",
      href: pathlink && pathlink.url,
      rel: pathlink && pathlink.openInNewTab && 'noreferrer noopener',
      target: pathlink && pathlink.openInNewTab && '_blank',
      title: textpathContent
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tspan", null, textpathContent && textpathContent)))));
  };
  textPath.forEach(item => {
    const textpathContent = item.dataset.textpathcontent;
    const textPathType = item.dataset.textpathtype;
    const pathlink = JSON.parse(item.dataset.pathlink);
    const textpathLength = item.dataset.textpathlength;
    const textPathSpoint = item.dataset.textstartoffset;
    const uniqueId = item.dataset.uniqueid;
    let root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(item);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SvgItem, {
      textpathContent: textpathContent,
      textPathType: textPathType,
      pathlink: pathlink,
      uniqueid: uniqueId,
      textpathLength: textpathLength,
      textPathSpoint: textPathSpoint
    }));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map