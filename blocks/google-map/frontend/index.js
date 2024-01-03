/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/google-map/src/frontend.js":
/*!*******************************************!*\
  !*** ./blocks/google-map/src/frontend.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render_maps_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-maps-frontend */ "./blocks/google-map/src/render-maps-frontend.js");




// render on page load
document.addEventListener('DOMContentLoaded', () => {
  const starRatingItems = document.querySelectorAll('.zolo-google-map');
  if (starRatingItems.length) {
    starRatingItems.forEach(item => {
      const latitude = item.dataset.latitude;
      const longitude = item.dataset.longitude;
      const height = item.dataset.height;
      const apiKey = item.dataset.apikey;
      const language = item.dataset.language;
      const zoom = item.dataset.zoom;
      const position = {
        lat: latitude,
        lng: longitude
      };
      const attributes = {
        latitude,
        longitude,
        height,
        apiKey,
        language,
        zoom
      };
      console.log('attributefs', typeof attributes);
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_render_maps_frontend__WEBPACK_IMPORTED_MODULE_2__["default"], {
        center: position,
        zoom: zoom,
        apiKey: apiKey
      }), item);
    });
  }
});

/***/ }),

/***/ "./blocks/google-map/src/render-maps-frontend.js":
/*!*******************************************************!*\
  !*** ./blocks/google-map/src/render-maps-frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
'use client';




function GoogleMapFrontend(props) {
  console.log('props', props);
  const {
    // preview,
    // uniqueId,
    // parentClasses,
    // location,
    // disableDefaultUI,
    // fullscreenControl,
    // draggable,
    // mapTypeControl,
    // zoomControl,
    // scrollwheel,
    // scaleControl,
    // rotateControl,
    // streetViewControl,
    // height,
    // language,
    zoom,
    center,
    // mapType,
    apiKey
    // mapId,
  } = props;
  const {
    latitude,
    longitude
  } = center;
  const position = {
    lat: latitude,
    lng: longitude
  };
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // const styles = [
  //     {
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#242f3e',
  //             },
  //         ],
  //     },
  //     {
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#746855',
  //             },
  //         ],
  //     },
  //     {
  //         elementType: 'labels.text.stroke',
  //         stylers: [
  //             {
  //                 color: '#242f3e',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'administrative.locality',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#d59563',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'poi',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#d59563',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'poi.park',
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#263c3f',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'poi.park',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#6b9a76',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road',
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#38414e',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road',
  //         elementType: 'geometry.stroke',
  //         stylers: [
  //             {
  //                 color: '#212a37',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#9ca5b3',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road.highway',
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#746855',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road.highway',
  //         elementType: 'geometry.stroke',
  //         stylers: [
  //             {
  //                 color: '#1f2835',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'road.highway',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#f3d19c',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'transit',
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#2f3948',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'transit.station',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#d59563',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [
  //             {
  //                 color: '#17263c',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'water',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //             {
  //                 color: '#515c6d',
  //             },
  //         ],
  //     },
  //     {
  //         featureType: 'water',
  //         elementType: 'labels.text.stroke',
  //         stylers: [
  //             {
  //                 color: '#17263c',
  //             },
  //         ],
  //     },
  // ];

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.APIProvider, {
    apiKey: apiKey
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      height: '450px',
      width: '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.Map
  // styles={styles}
  , {
    zoom: parseInt(zoom),
    center: center
    // mapId={mapId}
    // mapTypeId={mapType}
    // scaleControl={scaleControl}
    // streetViewControl={streetViewControl}
    // rotateControl={rotateControl}
    // draggable={draggable}
    // scrollwheel={scrollwheel}
    // disableDefaultUI={disableDefaultUI}
    // fullscreenControl={fullscreenControl}
    // mapTypeControl={mapTypeControl}
    // zoomControl={zoomControl}
    // disableDoubleClickZoom={true}
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleMapFrontend);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/google-map/frontend": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkzolo_blocks"] = globalThis["webpackChunkzolo_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-bundle"], () => (__webpack_require__("./blocks/google-map/src/frontend.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map