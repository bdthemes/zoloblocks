<<<<<<< HEAD
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
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marker */ "./blocks/google-map/src/marker.js");





const GoogleMapFrontend = props => {
  const {
    apiKey,
    draggable,
    showUIControls,
    uiControls,
    language,
    zoom,
    latitude,
    longitude,
    infoWindow,
    mapType,
    mapStyleType,
    mapId,
    mapStyleCodes,
    markers
  } = props;
  const position = {
    lat: latitude,
    lng: longitude
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_2__.APIProvider, {
    apiKey: apiKey,
    language: language,
    libraries: ['places']
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-gmap-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_2__.Map, {
    ...(mapStyleType === 'custom' && mapStyleCodes && {
      styles: JSON.parse(mapStyleCodes)
    }),
    zoom: zoom,
    center: position,
    language: language,
    ...(mapStyleType === 'default' && {
      mapId: mapId
    }),
    mapTypeId: mapType,
    disableDefaultUI: !showUIControls,
    draggable: draggable,
    scaleControl: showUIControls && uiControls?.scaleControl,
    streetViewControl: showUIControls && uiControls?.streetViewControl,
    zoomControl: showUIControls && uiControls?.zoomControl,
    mapTypeControl: showUIControls && uiControls?.mapTypeControl,
    fullscreenControl: showUIControls && uiControls?.fullscreenControl,
    disableDoubleClickZoom: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: position,
    info: infoWindow
  }), markers && markers.map((marker, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    position: marker.position,
    info: marker.info
  })))));
};

// Fetch google map api key once
// let apiKeyPromise = apiFetch({
//     path: '/wp/v2/settings',
//     method: 'GET',
// }).then((response) => response.zolo_google_api_key);

document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = zoloSettings?.googleAPIKey;
  const googleMaps = document.querySelectorAll('.wp-block-zolo-google-map');
  if (googleMaps.length > 0) {
    googleMaps.forEach(googleMap => {
      const options = JSON.parse(googleMap.dataset.options);
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleMapFrontend, {
        apiKey: apiKey,
        ...options
      }), googleMap);
    });
  }
});

/***/ }),

/***/ "./blocks/google-map/src/marker.js":
/*!*****************************************!*\
  !*** ./blocks/google-map/src/marker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const ZoloMarker = ({
  position,
  info
}) => {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleMarkerClick = () => {
    setOpen(true);
  };
  const handleInfoWindowClose = () => {
    setOpen(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-gmap-marker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.Marker, {
    position: position,
    onClick: handleMarkerClick
  }), open && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_1__.InfoWindow, {
    position: position,
    onCloseClick: handleInfoWindowClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, {
    className: "zolo-gmap-marker-info"
  }, info)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoloMarker);

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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
=======
(()=>{"use strict";var e,o={9629:(e,o,t)=>{var r=t(1609);const n=window.wp.element;var a=t(4550);window.wp.apiFetch,window.wp.i18n;const l=({position:e,info:o})=>{const[t,l]=(0,n.useState)(!1);return(0,r.createElement)("div",{className:"zolo-gmap-marker"},(0,r.createElement)(a.pH,{position:e,onClick:()=>{l(!0)}}),t&&(0,r.createElement)(a.Fu,{position:e,onCloseClick:()=>{l(!1)}},(0,r.createElement)(n.RawHTML,{className:"zolo-gmap-marker-info"},o)))},i=e=>{const{apiKey:o,draggable:t,showUIControls:n,uiControls:i,language:s,zoom:c,latitude:p,longitude:d,infoWindow:u,mapType:m,mapStyleType:f,mapId:g,mapStyleCodes:b,markers:y}=e,w={lat:p,lng:d};return(0,r.createElement)(a.c4,{apiKey:o,language:s,libraries:["places"]},(0,r.createElement)("div",{className:"zolo-gmap-wrapper"},(0,r.createElement)(a.T5,{..."custom"===f&&b&&{styles:JSON.parse(b)},zoom:c,center:w,language:s,..."default"===f&&{mapId:g},mapTypeId:m,disableDefaultUI:!n,draggable:t,scaleControl:n&&i?.scaleControl,streetViewControl:n&&i?.streetViewControl,zoomControl:n&&i?.zoomControl,mapTypeControl:n&&i?.mapTypeControl,fullscreenControl:n&&i?.fullscreenControl,disableDoubleClickZoom:!0},(0,r.createElement)(l,{position:w,info:u}),y&&y.map(((e,o)=>(0,r.createElement)(l,{key:o,position:e.position,info:e.info}))))))};document.addEventListener("DOMContentLoaded",(async()=>{const e=zoloSettings?.googleAPIKey,o=document.querySelectorAll(".wp-block-zolo-google-map");o.length>0&&o.forEach((o=>{const t=JSON.parse(o.dataset.options);(0,n.render)((0,r.createElement)(i,{apiKey:e,...t}),o)}))}))},1609:e=>{e.exports=window.React},5795:e=>{e.exports=window.ReactDOM}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return o[e](a,a.exports,r),a.exports}r.m=o,e=[],r.O=(o,t,n,a)=>{if(!t){var l=1/0;for(p=0;p<e.length;p++){for(var[t,n,a]=e[p],i=!0,s=0;s<t.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(p--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[t,n,a]},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=83,(()=>{var e={83:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var n,a,[l,i,s]=t,c=0;if(l.some((o=>0!==e[o]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var p=s(r)}for(o&&o(t);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},t=globalThis.webpackChunkzolo_blocks=globalThis.webpackChunkzolo_blocks||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var n=r.O(void 0,[774],(()=>r(9629)));n=r.O(n)})();
>>>>>>> 0c57acc07b29b0ef1164982eea35b96777b55414
