/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controls/background-control/bg-control.js":
/*!*******************************************************!*\
  !*** ./src/controls/background-control/bg-control.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gradient-control */ "./src/controls/gradient-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-avatar */ "./src/controls/image-avatar/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");










const BGControl = ({
  controlName,
  requiredProps,
  noMainBGImg
}) => {
  const {
    setAttributes,
    attributes,
    resMode
  } = requiredProps;
  const {
    [`${controlName}bg_hoverType`]: bg_hoverType,
    //attributes for background type normal start
    [`${controlName}backgroundType`]: backgroundType,
    [`${controlName}backgroundColor`]: backgroundColor,
    [`${controlName}gradientColor`]: gradientColor,
    [`${controlName}bgImageURL`]: bgImageURL,
    [`${controlName}bgImageID`]: bgImageID,
    [`${controlName}bgImgAttachment`]: bgImgAttachment,
    [`${controlName}backgroundSize`]: backgroundSize,
    [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
    [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
    [`${controlName}bgImgPos`]: bgImgPos,
    [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
    [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
    [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
    [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
    [`${controlName}bgImgRepeat`]: bgImgRepeat,
    [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
    [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
    [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
    [`TAB${controlName}bgImgPos`]: TABbgImgPos,
    [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
    [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
    [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
    [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
    [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
    [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
    [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
    [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
    [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
    [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
    [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
    [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
    [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
    [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
    //  attributes for bg_hoverType hover start  ⬇
    [`hov_${controlName}backgroundType`]: hov_backgroundType,
    [`hov_${controlName}backgroundColor`]: hov_backgroundColor,
    [`hov_${controlName}gradientColor`]: hov_gradientColor,
    [`hov_${controlName}bgImageURL`]: hov_bgImageURL,
    [`hov_${controlName}bgImageID`]: hov_bgImageID,
    [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,
    [`hov_${controlName}backgroundSize`]: hov_backgroundSize,
    [`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize,
    [`hov_${controlName}bgImgCustomSizeUnit`]: hov_bgImgCustomSizeUnit,
    [`hov_${controlName}bgImgPos`]: hov_bgImgPos,
    [`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX,
    [`hov_${controlName}bgImgcustomPosXUnit`]: hov_bgImgcustomPosXUnit,
    [`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY,
    [`hov_${controlName}bgImgcustomPosYUnit`]: hov_bgImgcustomPosYUnit,
    [`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat,
    [`hov_TAB${controlName}backgroundSize`]: hov_TABbackgroundSize,
    [`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize,
    [`hov_TAB${controlName}bgImgCustomSizeUnit`]: hov_TABbgImgCustomSizeUnit,
    [`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos,
    [`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX,
    [`hov_TAB${controlName}bgImgcustomPosXUnit`]: hov_TABbgImgcustomPosXUnit,
    [`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY,
    [`hov_TAB${controlName}bgImgcustomPosYUnit`]: hov_TABbgImgcustomPosYUnit,
    [`hov_TAB${controlName}bgImgRepeat`]: hov_TABbgImgRepeat,
    [`hov_MOB${controlName}backgroundSize`]: hov_MOBbackgroundSize,
    [`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize,
    [`hov_MOB${controlName}bgImgCustomSizeUnit`]: hov_MOBbgImgCustomSizeUnit,
    [`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos,
    [`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX,
    [`hov_MOB${controlName}bgImgcustomPosXUnit`]: hov_MOBbgImgcustomPosXUnit,
    [`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY,
    [`hov_MOB${controlName}bgImgcustomPosYUnit`]: hov_MOBbgImgcustomPosYUnit,
    [`hov_MOB${controlName}bgImgRepeat`]: hov_MOBbgImgRepeat
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "zolo-tab-panel",
    activeClass: "active-tab",
    tabs: _global_constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_HOVER.map(({
      value,
      label
    }) => ({
      name: value,
      title: label,
      className: `zolo-tab ${value}`
    }))
  }, tab => {
    if ('normal' === tab.name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(({
        value,
        label
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: backgroundType === value ? 'primary' : 'secondary',
        onClick: () => setAttributes({
          [`${controlName}backgroundType`]: value
        })
      }, label)))), backgroundType === 'classic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'zolo-blocks'),
        color: backgroundColor,
        onChange: backgroundColor => setAttributes({
          [`${controlName}backgroundColor`]: backgroundColor
        })
      }), noMainBGImg === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: ({
          url,
          id
        }) => setAttributes({
          [`${controlName}bgImageURL`]: url,
          [`${controlName}bgImageID`]: id
        }),
        type: "image",
        value: bgImageID,
        render: ({
          open
        }) => !bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zb-bg-control-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
          icon: "format-image",
          onClick: open
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          style: {
            padding: '10px 0',
            display: 'block'
          }
        }))
      }), bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imageUrl: bgImageURL,
        imageId: bgImageID,
        onDeleteImage: () => setAttributes({
          [`${controlName}bgImageURL`]: null
        }),
        onEditImage: (url, id) => setAttributes({
          [`${controlName}bgImageURL`]: url,
          [`${controlName}bgImageID`]: id
        })
      }), resMode === 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: bgImgPos => setAttributes({
          [`${controlName}bgImgPos`]: bgImgPos
        })
      })), bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: bgImgcustomPosXUnit => setAttributes({
          [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: bgImgcustomPosX,
        min: -2000,
        max: 2000,
        onChange: bgImgcustomPosX => setAttributes({
          [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: bgImgcustomPosYUnit => setAttributes({
          [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: bgImgcustomPosY,
        min: -2000,
        max: 2000,
        step: bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: bgImgcustomPosY => setAttributes({
          [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: bgImgAttachment => setAttributes({
          [`${controlName}bgImgAttachment`]: bgImgAttachment
        })
      }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: bgImgRepeat => setAttributes({
          [`${controlName}bgImgRepeat`]: bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: backgroundSize => setAttributes({
          [`${controlName}backgroundSize`]: backgroundSize
        })
      })), backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: bgImgCustomSizeUnit => setAttributes({
          [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: bgImgCustomSize,
        min: 0,
        max: bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: bgImgCustomSize => setAttributes({
          [`${controlName}bgImgCustomSize`]: bgImgCustomSize
        })
      })))), resMode === 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABbgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: TABbgImgPos => setAttributes({
          [`TAB${controlName}bgImgPos`]: TABbgImgPos
        })
      })), TABbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABbgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABbgImgcustomPosXUnit => setAttributes({
          [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABbgImgcustomPosX,
        min: 0,
        max: TABbgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: TABbgImgcustomPosX => setAttributes({
          [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABbgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABbgImgcustomPosYUnit => setAttributes({
          [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABbgImgcustomPosY,
        min: 0,
        max: TABbgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: TABbgImgcustomPosY => setAttributes({
          [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: bgImgAttachment => setAttributes({
          [`${controlName}bgImgAttachment`]: bgImgAttachment
        })
      }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABbgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: TABbgImgRepeat => setAttributes({
          [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABbackgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: TABbackgroundSize => setAttributes({
          [`TAB${controlName}backgroundSize`]: TABbackgroundSize
        })
      })), TABbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABbgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABbgImgCustomSizeUnit => setAttributes({
          [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABbgImgCustomSize,
        min: 0,
        max: TABbgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: TABbgImgCustomSize => setAttributes({
          [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize
        })
      })))), resMode === 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBbgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: MOBbgImgPos => setAttributes({
          [`MOB${controlName}bgImgPos`]: MOBbgImgPos
        })
      })), MOBbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBbgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBbgImgcustomPosXUnit => setAttributes({
          [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBbgImgcustomPosX,
        min: 0,
        max: MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: MOBbgImgcustomPosX => setAttributes({
          [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBbgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBbgImgcustomPosYUnit => setAttributes({
          [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBbgImgcustomPosY,
        min: 0,
        max: MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: MOBbgImgcustomPosY => setAttributes({
          [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: bgImgAttachment => setAttributes({
          [`${controlName}bgImgAttachment`]: bgImgAttachment
        })
      }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBbgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: MOBbgImgRepeat => setAttributes({
          [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBbackgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: MOBbackgroundSize => setAttributes({
          [`MOB${controlName}backgroundSize`]: MOBbackgroundSize
        })
      })), MOBbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBbgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBbgImgCustomSizeUnit => setAttributes({
          [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBbgImgCustomSize,
        min: 0,
        max: MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: MOBbgImgCustomSize => setAttributes({
          [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize
        })
      }))))))), backgroundType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: 'Gradient Color',
        value: gradientColor,
        onChange: newVal => setAttributes({
          [`${controlName}gradientColor`]: newVal
        })
      }));
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(({
        value,
        label
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: hov_backgroundType === value ? 'primary' : 'secondary',
        onClick: () => setAttributes({
          [`hov_${controlName}backgroundType`]: value
        })
      }, label)))), hov_backgroundType === 'classic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'zolo-blocks'),
        color: hov_backgroundColor,
        onChange: newVal => setAttributes({
          [`hov_${controlName}backgroundColor`]: newVal
        })
      }), noMainBGImg === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: ({
          url,
          id
        }) => setAttributes({
          [`hov_${controlName}bgImageURL`]: url,
          [`hov_${controlName}bgImageID`]: id
        }),
        type: "image",
        value: hov_bgImageID,
        render: ({
          open
        }) => !hov_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zb-bg-control-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
          icon: "format-image",
          onClick: open
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          style: {
            padding: '10px 0',
            display: 'block'
          }
        }))
      }), hov_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imageUrl: hov_bgImageURL,
        onDeleteImage: () => setAttributes({
          [`hov_${controlName}bgImageURL`]: null
        })
      }), resMode === 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_bgImgPos => setAttributes({
          [`hov_${controlName}bgImgPos`]: hov_bgImgPos
        })
      })), hov_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_bgImgcustomPosXUnit => setAttributes({
          [`hov_${controlName}bgImgcustomPosXUnit`]: hov_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_bgImgcustomPosX,
        min: -2000,
        max: 2000,
        onChange: hov_bgImgcustomPosX => setAttributes({
          [`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_bgImgcustomPosYUnit => setAttributes({
          [`hov_${controlName}bgImgcustomPosYUnit`]: hov_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_bgImgcustomPosY,
        min: -2000,
        max: 2000,
        step: hov_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_bgImgcustomPosY => setAttributes({
          [`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_bgImgAttachment => setAttributes({
          [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment
        })
      }), hov_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_bgImgRepeat => setAttributes({
          [`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_backgroundSize => setAttributes({
          [`hov_${controlName}backgroundSize`]: hov_backgroundSize
        })
      })), hov_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_bgImgCustomSizeUnit => setAttributes({
          [`hov_${controlName}bgImgCustomSizeUnit`]: hov_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_bgImgCustomSize,
        min: 0,
        max: hov_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_bgImgCustomSize => setAttributes({
          [`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize
        })
      })))), resMode === 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABbgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_TABbgImgPos => setAttributes({
          [`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos
        })
      })), hov_TABbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABbgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABbgImgcustomPosXUnit => setAttributes({
          [`hov_TAB${controlName}bgImgcustomPosXUnit`]: hov_TABbgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABbgImgcustomPosX,
        min: 0,
        max: hov_TABbgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: hov_TABbgImgcustomPosX => setAttributes({
          [`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABbgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABbgImgcustomPosYUnit => setAttributes({
          [`hov_TAB${controlName}bgImgcustomPosYUnit`]: hov_TABbgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABbgImgcustomPosY,
        min: 0,
        max: hov_TABbgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: hov_TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_TABbgImgcustomPosY => setAttributes({
          [`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_bgImgAttachment => setAttributes({
          [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment
        })
      }), hov_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABbgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_TABbgImgRepeat => setAttributes({
          [`hov_TAB${controlName}bgImgRepeat`]: hov_TABbgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABbackgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_TABbackgroundSize => setAttributes({
          [`hov_TAB${controlName}backgroundSize`]: hov_TABbackgroundSize
        })
      })), hov_TABbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABbgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABbgImgCustomSizeUnit => setAttributes({
          [`hov_TAB${controlName}bgImgCustomSizeUnit`]: hov_TABbgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABbgImgCustomSize,
        min: 0,
        max: hov_TABbgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_TABbgImgCustomSize => setAttributes({
          [`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize
        })
      })))), resMode === 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBbgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_MOBbgImgPos => setAttributes({
          [`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos
        })
      })), hov_MOBbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBbgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBbgImgcustomPosXUnit => setAttributes({
          [`hov_MOB${controlName}bgImgcustomPosXUnit`]: hov_MOBbgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBbgImgcustomPosX,
        min: 0,
        max: hov_MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: hov_MOBbgImgcustomPosX => setAttributes({
          [`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBbgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBbgImgcustomPosYUnit => setAttributes({
          [`hov_MOB${controlName}bgImgcustomPosYUnit`]: hov_MOBbgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBbgImgcustomPosY,
        min: 0,
        max: hov_MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: hov_MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_MOBbgImgcustomPosY => setAttributes({
          [`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_bgImgAttachment => setAttributes({
          [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment
        })
      }), hov_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBbgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_MOBbgImgRepeat => setAttributes({
          [`hov_MOB${controlName}bgImgRepeat`]: hov_MOBbgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBbackgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_MOBbackgroundSize => setAttributes({
          [`hov_MOB${controlName}backgroundSize`]: hov_MOBbackgroundSize
        })
      })), hov_MOBbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBbgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBbgImgCustomSizeUnit => setAttributes({
          [`hov_MOB${controlName}bgImgCustomSizeUnit`]: hov_MOBbgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBbgImgCustomSize,
        min: 0,
        max: hov_MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_MOBbgImgCustomSize => setAttributes({
          [`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize
        })
      }))))))), hov_backgroundType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: 'Gradient Color',
        value: hov_gradientColor,
        onChange: newVal => setAttributes({
          [`hov_${controlName}gradientColor`]: newVal
        })
      }));
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (BGControl);

/***/ }),

/***/ "./src/controls/background-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/background-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bg_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bg-control */ "./src/controls/background-control/bg-control.js");
/* harmony import */ var _overlay_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay-control */ "./src/controls/background-control/overlay-control.js");





const BackgroundControl = ({
  requiredProps,
  controlName,
  noOverlay = false,
  noMainBGImg = false,
  noOverlayBGImg = false,
  noTransition = false
}) => {
  const {
    setAttributes,
    attributes
  } = requiredProps;
  const {
    [`${controlName}isBgOverlay`]: isBgOverlay
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bg_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    controlName: controlName,
    requiredProps: requiredProps,
    noMainBGImg: noMainBGImg,
    noTransition: noTransition
  }), noOverlay === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Overlay", "zolo-blocks"),
    checked: isBgOverlay,
    onChange: () => setAttributes({
      [`${controlName}isBgOverlay`]: !isBgOverlay
    })
  }), isBgOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    controlName: controlName,
    requiredProps: requiredProps,
    noOverlayBGImg: noOverlayBGImg,
    noTransition: noTransition
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundControl);

/***/ }),

/***/ "./src/controls/background-control/overlay-control.js":
/*!************************************************************!*\
  !*** ./src/controls/background-control/overlay-control.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gradient-control */ "./src/controls/gradient-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-avatar */ "./src/controls/image-avatar/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");










const OverlayControl = ({
  controlName,
  requiredProps,
  noOverlayBGImg
}) => {
  const {
    setAttributes,
    attributes,
    resMode
  } = requiredProps;
  const {
    [`${controlName}ovl_hoverType`]: ovl_hoverType,
    [`${controlName}ovl_bg_transition`]: ovl_bg_transition,
    [`${controlName}ovl_filtersTransition`]: ovl_filtersTransition,
    [`${controlName}ovl_opacityTransition`]: ovl_opacityTransition,
    //  attributes for ovl_hoverType normal start  ⬇
    [`${controlName}overlayType`]: overlayType,
    [`${controlName}overlayColor`]: overlayColor,
    [`${controlName}overlayGradient`]: overlayGradient,
    [`${controlName}ovl_bgImageURL`]: ovl_bgImageURL,
    [`${controlName}ovl_bgImageID`]: ovl_bgImageID,
    [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment,
    [`${controlName}ovl_opacity`]: ovl_opacity,
    [`${controlName}ovl_blendMode`]: ovl_blendMode,
    [`${controlName}ovl_allowFilters`]: ovl_allowFilters,
    [`${controlName}ovl_fltrBrightness`]: ovl_fltrBrightness,
    [`${controlName}ovl_fltrContrast`]: ovl_fltrContrast,
    [`${controlName}ovl_fltrSaturation`]: ovl_fltrSaturation,
    [`${controlName}ovl_fltrBlur`]: ovl_fltrBlur,
    [`${controlName}ovl_fltrHue`]: ovl_fltrHue,
    [`${controlName}ovl_backgroundSize`]: ovl_backgroundSize,
    [`${controlName}ovl_bgImgCustomSize`]: ovl_bgImgCustomSize,
    [`${controlName}ovl_bgImgCustomSizeUnit`]: ovl_bgImgCustomSizeUnit,
    [`${controlName}ovl_bgImgPos`]: ovl_bgImgPos,
    [`${controlName}ovl_bgImgcustomPosX`]: ovl_bgImgcustomPosX,
    [`${controlName}ovl_bgImgcustomPosXUnit`]: ovl_bgImgcustomPosXUnit,
    [`${controlName}ovl_bgImgcustomPosY`]: ovl_bgImgcustomPosY,
    [`${controlName}ovl_bgImgcustomPosYUnit`]: ovl_bgImgcustomPosYUnit,
    [`${controlName}ovl_bgImgRepeat`]: ovl_bgImgRepeat,
    [`TAB${controlName}ovl_backgroundSize`]: TABovl_backgroundSize,
    [`TAB${controlName}ovl_bgImgCustomSize`]: TABovl_bgImgCustomSize,
    [`TAB${controlName}ovl_bgImgCustomSizeUnit`]: TABovl_bgImgCustomSizeUnit,
    [`TAB${controlName}ovl_bgImgPos`]: TABovl_bgImgPos,
    [`TAB${controlName}ovl_bgImgcustomPosX`]: TABovl_bgImgcustomPosX,
    [`TAB${controlName}ovl_bgImgcustomPosXUnit`]: TABovl_bgImgcustomPosXUnit,
    [`TAB${controlName}ovl_bgImgcustomPosY`]: TABovl_bgImgcustomPosY,
    [`TAB${controlName}ovl_bgImgcustomPosYUnit`]: TABovl_bgImgcustomPosYUnit,
    [`TAB${controlName}ovl_bgImgRepeat`]: TABovl_bgImgRepeat,
    [`MOB${controlName}ovl_backgroundSize`]: MOBovl_backgroundSize,
    [`MOB${controlName}ovl_bgImgCustomSize`]: MOBovl_bgImgCustomSize,
    [`MOB${controlName}ovl_bgImgCustomSizeUnit`]: MOBovl_bgImgCustomSizeUnit,
    [`MOB${controlName}ovl_bgImgPos`]: MOBovl_bgImgPos,
    [`MOB${controlName}ovl_bgImgcustomPosX`]: MOBovl_bgImgcustomPosX,
    [`MOB${controlName}ovl_bgImgcustomPosXUnit`]: MOBovl_bgImgcustomPosXUnit,
    [`MOB${controlName}ovl_bgImgcustomPosY`]: MOBovl_bgImgcustomPosY,
    [`MOB${controlName}ovl_bgImgcustomPosYUnit`]: MOBovl_bgImgcustomPosYUnit,
    [`MOB${controlName}ovl_bgImgRepeat`]: MOBovl_bgImgRepeat,
    //  attributes for ovl_hoverType normal end

    //  attributes for ovl_hoverType hover start ⬇
    [`hov_${controlName}overlayType`]: hov_overlayType,
    [`hov_${controlName}overlayColor`]: hov_overlayColor,
    [`hov_${controlName}overlayGradient`]: hov_overlayGradient,
    [`hov_${controlName}ovl_bgImageURL`]: hov_ovl_bgImageURL,
    [`hov_${controlName}ovl_bgImageID`]: hov_ovl_bgImageID,
    [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment,
    [`hov_${controlName}ovl_opacity`]: hov_ovl_opacity,
    [`hov_${controlName}ovl_blendMode`]: hov_ovl_blendMode,
    [`hov_${controlName}ovl_allowFilters`]: hov_ovl_allowFilters,
    [`hov_${controlName}ovl_fltrBrightness`]: hov_ovl_fltrBrightness,
    [`hov_${controlName}ovl_fltrContrast`]: hov_ovl_fltrContrast,
    [`hov_${controlName}ovl_fltrSaturation`]: hov_ovl_fltrSaturation,
    [`hov_${controlName}ovl_fltrBlur`]: hov_ovl_fltrBlur,
    [`hov_${controlName}ovl_fltrHue`]: hov_ovl_fltrHue,
    [`hov_${controlName}ovl_backgroundSize`]: hov_ovl_backgroundSize,
    [`hov_${controlName}ovl_bgImgCustomSize`]: hov_ovl_bgImgCustomSize,
    [`hov_${controlName}ovl_bgImgCustomSizeUnit`]: hov_ovl_bgImgCustomSizeUnit,
    [`hov_${controlName}ovl_bgImgPos`]: hov_ovl_bgImgPos,
    [`hov_${controlName}ovl_bgImgcustomPosX`]: hov_ovl_bgImgcustomPosX,
    [`hov_${controlName}ovl_bgImgcustomPosXUnit`]: hov_ovl_bgImgcustomPosXUnit,
    [`hov_${controlName}ovl_bgImgcustomPosY`]: hov_ovl_bgImgcustomPosY,
    [`hov_${controlName}ovl_bgImgcustomPosYUnit`]: hov_ovl_bgImgcustomPosYUnit,
    [`hov_${controlName}ovl_bgImgRepeat`]: hov_ovl_bgImgRepeat,
    [`hov_TAB${controlName}ovl_backgroundSize`]: hov_TABovl_backgroundSize,
    [`hov_TAB${controlName}ovl_bgImgCustomSize`]: hov_TABovl_bgImgCustomSize,
    [`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]: hov_TABovl_bgImgCustomSizeUnit,
    [`hov_TAB${controlName}ovl_bgImgPos`]: hov_TABovl_bgImgPos,
    [`hov_TAB${controlName}ovl_bgImgcustomPosX`]: hov_TABovl_bgImgcustomPosX,
    [`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]: hov_TABovl_bgImgcustomPosXUnit,
    [`hov_TAB${controlName}ovl_bgImgcustomPosY`]: hov_TABovl_bgImgcustomPosY,
    [`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]: hov_TABovl_bgImgcustomPosYUnit,
    [`hov_TAB${controlName}ovl_bgImgRepeat`]: hov_TABovl_bgImgRepeat,
    [`hov_MOB${controlName}ovl_backgroundSize`]: hov_MOBovl_backgroundSize,
    [`hov_MOB${controlName}ovl_bgImgCustomSize`]: hov_MOBovl_bgImgCustomSize,
    [`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]: hov_MOBovl_bgImgCustomSizeUnit,
    [`hov_MOB${controlName}ovl_bgImgPos`]: hov_MOBovl_bgImgPos,
    [`hov_MOB${controlName}ovl_bgImgcustomPosX`]: hov_MOBovl_bgImgcustomPosX,
    [`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]: hov_MOBovl_bgImgcustomPosXUnit,
    [`hov_MOB${controlName}ovl_bgImgcustomPosY`]: hov_MOBovl_bgImgcustomPosY,
    [`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]: hov_MOBovl_bgImgcustomPosYUnit,
    [`hov_MOB${controlName}ovl_bgImgRepeat`]: hov_MOBovl_bgImgRepeat
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "zolo-tab-panel",
    activeClass: "active-tab",
    tabs: _global_constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_HOVER.map(({
      value,
      label
    }) => ({
      name: value,
      title: label,
      className: `zolo-tab ${value}`
    }))
  }, tab => {
    if ('normal' === tab.name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(({
        value,
        label
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: overlayType === value ? 'primary' : 'secondary',
        onClick: () => setAttributes({
          [`${controlName}overlayType`]: value
        })
      }, label)))), overlayType === 'classic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overlay Color', 'zolo-blocks'),
        color: overlayColor,
        onChange: overlayColor => setAttributes({
          [`${controlName}overlayColor`]: overlayColor
        })
      }), noOverlayBGImg === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overlay Image', 'zolo-blocks')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: ({
          url,
          id
        }) => setAttributes({
          [`${controlName}ovl_bgImageURL`]: url,
          [`${controlName}ovl_bgImageID`]: id
        }),
        type: "image",
        value: ovl_bgImageID,
        render: ({
          open
        }) => !ovl_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zb-bg-control-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
          icon: "format-image",
          onClick: open
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          style: {
            padding: '10px 0',
            display: 'block'
          }
        }))
      }), ovl_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imageUrl: ovl_bgImageURL,
        imageId: ovl_bgImageID,
        onDeleteImage: () => setAttributes({
          [`${controlName}ovl_bgImageURL`]: null
        }),
        onEditImage: (url, id) => setAttributes({
          [`${controlName}ovl_bgImageURL`]: url,
          [`${controlName}ovl_bgImageID`]: id
        })
      }), resMode === 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: ovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: ovl_bgImgPos => setAttributes({
          [`${controlName}ovl_bgImgPos`]: ovl_bgImgPos
        })
      })), ovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: ovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: ovl_bgImgcustomPosXUnit => setAttributes({
          [`${controlName}ovl_bgImgcustomPosXUnit`]: ovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: ovl_bgImgcustomPosX,
        min: 0,
        max: ovl_bgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: ovl_bgImgcustomPosX => setAttributes({
          [`${controlName}ovl_bgImgcustomPosX`]: ovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: ovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: ovl_bgImgcustomPosYUnit => setAttributes({
          [`${controlName}ovl_bgImgcustomPosYUnit`]: ovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: ovl_bgImgcustomPosY,
        min: 0,
        max: ovl_bgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: ovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: ovl_bgImgcustomPosY => setAttributes({
          [`${controlName}ovl_bgImgcustomPosY`]: ovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: ovl_bgImgAttachment => setAttributes({
          [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
        })
      }), ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: ovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: ovl_bgImgRepeat => setAttributes({
          [`${controlName}ovl_bgImgRepeat`]: ovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: ovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: ovl_backgroundSize => setAttributes({
          [`${controlName}ovl_backgroundSize`]: ovl_backgroundSize
        })
      })), ovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: ovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: ovl_bgImgCustomSizeUnit => setAttributes({
          [`${controlName}ovl_bgImgCustomSizeUnit`]: ovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: ovl_bgImgCustomSize,
        min: 0,
        max: ovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: ovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: ovl_bgImgCustomSize => setAttributes({
          [`${controlName}ovl_bgImgCustomSize`]: ovl_bgImgCustomSize
        })
      })))), resMode === 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: TABovl_bgImgPos => setAttributes({
          [`TAB${controlName}ovl_bgImgPos`]: TABovl_bgImgPos
        })
      })), TABovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABovl_bgImgcustomPosXUnit => setAttributes({
          [`TAB${controlName}ovl_bgImgcustomPosXUnit`]: TABovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABovl_bgImgcustomPosX,
        min: -2000,
        max:
        // TABovl_bgImgcustomPosXUnit === "px"
        //   ?
        2000
        // : 100
        ,

        onChange: TABovl_bgImgcustomPosX => setAttributes({
          [`TAB${controlName}ovl_bgImgcustomPosX`]: TABovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABovl_bgImgcustomPosYUnit => setAttributes({
          [`TAB${controlName}ovl_bgImgcustomPosYUnit`]: TABovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABovl_bgImgcustomPosY,
        min: -2000,
        max:
        // TABovl_bgImgcustomPosYUnit === "px"
        //   ?
        2000
        // : 100
        ,

        step: TABovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: TABovl_bgImgcustomPosY => setAttributes({
          [`TAB${controlName}ovl_bgImgcustomPosY`]: TABovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: ovl_bgImgAttachment => setAttributes({
          [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
        })
      }), ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: TABovl_bgImgRepeat => setAttributes({
          [`TAB${controlName}ovl_bgImgRepeat`]: TABovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: TABovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: TABovl_backgroundSize => setAttributes({
          [`TAB${controlName}ovl_backgroundSize`]: TABovl_backgroundSize
        })
      })), TABovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: TABovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: TABovl_bgImgCustomSizeUnit => setAttributes({
          [`TAB${controlName}ovl_bgImgCustomSizeUnit`]: TABovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: TABovl_bgImgCustomSize,
        min: 0,
        max: TABovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: TABovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: TABovl_bgImgCustomSize => setAttributes({
          [`TAB${controlName}ovl_bgImgCustomSize`]: TABovl_bgImgCustomSize
        })
      })))), resMode === 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: MOBovl_bgImgPos => setAttributes({
          [`MOB${controlName}ovl_bgImgPos`]: MOBovl_bgImgPos
        })
      })), MOBovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBovl_bgImgcustomPosXUnit => setAttributes({
          [`MOB${controlName}ovl_bgImgcustomPosXUnit`]: MOBovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBovl_bgImgcustomPosX,
        min: 0,
        max: MOBovl_bgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: MOBovl_bgImgcustomPosX => setAttributes({
          [`MOB${controlName}ovl_bgImgcustomPosX`]: MOBovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBovl_bgImgcustomPosYUnit => setAttributes({
          [`MOB${controlName}ovl_bgImgcustomPosYUnit`]: MOBovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBovl_bgImgcustomPosY,
        min: 0,
        max: MOBovl_bgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: MOBovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: MOBovl_bgImgcustomPosY => setAttributes({
          [`MOB${controlName}ovl_bgImgcustomPosY`]: MOBovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: ovl_bgImgAttachment => setAttributes({
          [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
        })
      }), ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: MOBovl_bgImgRepeat => setAttributes({
          [`MOB${controlName}ovl_bgImgRepeat`]: MOBovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: MOBovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: MOBovl_backgroundSize => setAttributes({
          [`MOB${controlName}ovl_backgroundSize`]: MOBovl_backgroundSize
        })
      })), MOBovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: MOBovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: MOBovl_bgImgCustomSizeUnit => setAttributes({
          [`MOB${controlName}ovl_bgImgCustomSizeUnit`]: MOBovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: MOBovl_bgImgCustomSize,
        min: 0,
        max: MOBovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: MOBovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: MOBovl_bgImgCustomSize => setAttributes({
          [`MOB${controlName}ovl_bgImgCustomSize`]: MOBovl_bgImgCustomSize
        })
      }))))))), overlayType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: 'Gradient Color',
        value: overlayGradient,
        onChange: newVal => setAttributes({
          [`${controlName}overlayGradient`]: newVal
        })
      }));
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(({
        value,
        label
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: hov_overlayType === value ? 'primary' : 'secondary',
        onClick: () => setAttributes({
          [`hov_${controlName}overlayType`]: value
        })
      }, label)))), hov_overlayType === 'classic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overlay Color', 'zolo-blocks'),
        color: hov_overlayColor,
        onChange: hov_overlayColor => setAttributes({
          [`hov_${controlName}overlayColor`]: hov_overlayColor
        })
      }), noOverlayBGImg === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overlay Image', 'zolo-blocks')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: ({
          url,
          id
        }) => setAttributes({
          [`hov_${controlName}ovl_bgImageURL`]: url,
          [`hov_${controlName}ovl_bgImageID`]: id
        }),
        type: "image",
        value: hov_ovl_bgImageID,
        render: ({
          open
        }) => !hov_ovl_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "zb-bg-control-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
          icon: "format-image",
          onClick: open
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          style: {
            padding: '10px 0',
            display: 'block'
          }
        }))
      }), hov_ovl_bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imageUrl: hov_ovl_bgImageURL,
        onDeleteImage: () => setAttributes({
          [`hov_${controlName}ovl_bgImageURL`]: null
        })
      }), resMode === 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_ovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_ovl_bgImgPos => setAttributes({
          [`hov_${controlName}ovl_bgImgPos`]: hov_ovl_bgImgPos
        })
      })), hov_ovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_ovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_ovl_bgImgcustomPosXUnit => setAttributes({
          [`hov_${controlName}ovl_bgImgcustomPosXUnit`]: hov_ovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_ovl_bgImgcustomPosX,
        min: 0,
        max: hov_ovl_bgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: hov_ovl_bgImgcustomPosX => setAttributes({
          [`hov_${controlName}ovl_bgImgcustomPosX`]: hov_ovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_ovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_ovl_bgImgcustomPosYUnit => setAttributes({
          [`hov_${controlName}ovl_bgImgcustomPosYUnit`]: hov_ovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_ovl_bgImgcustomPosY,
        min: 0,
        max: hov_ovl_bgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: hov_ovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_ovl_bgImgcustomPosY => setAttributes({
          [`hov_${controlName}ovl_bgImgcustomPosY`]: hov_ovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_ovl_bgImgAttachment => setAttributes({
          [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
        })
      }), hov_ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_ovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_ovl_bgImgRepeat => setAttributes({
          [`hov_${controlName}ovl_bgImgRepeat`]: hov_ovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_ovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_ovl_backgroundSize => setAttributes({
          [`hov_${controlName}ovl_backgroundSize`]: hov_ovl_backgroundSize
        })
      })), hov_ovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_ovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_ovl_bgImgCustomSizeUnit => setAttributes({
          [`hov_${controlName}ovl_bgImgCustomSizeUnit`]: hov_ovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_ovl_bgImgCustomSize,
        min: 0,
        max: hov_ovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_ovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_ovl_bgImgCustomSize => setAttributes({
          [`hov_${controlName}ovl_bgImgCustomSize`]: hov_ovl_bgImgCustomSize
        })
      })))), resMode === 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_TABovl_bgImgPos => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgPos`]: hov_TABovl_bgImgPos
        })
      })), hov_TABovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABovl_bgImgcustomPosXUnit => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]: hov_TABovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABovl_bgImgcustomPosX,
        min: 0,
        max: hov_TABovl_bgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: hov_TABovl_bgImgcustomPosX => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgcustomPosX`]: hov_TABovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABovl_bgImgcustomPosYUnit => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]: hov_TABovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABovl_bgImgcustomPosY,
        min: 0,
        max: hov_TABovl_bgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: hov_TABovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_TABovl_bgImgcustomPosY => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgcustomPosY`]: hov_TABovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_ovl_bgImgAttachment => setAttributes({
          [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
        })
      }), hov_ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_TABovl_bgImgRepeat => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgRepeat`]: hov_TABovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_TABovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_TABovl_backgroundSize => setAttributes({
          [`hov_TAB${controlName}ovl_backgroundSize`]: hov_TABovl_backgroundSize
        })
      })), hov_TABovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_TABovl_bgImgCustomSizeUnit => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]: hov_TABovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_TABovl_bgImgCustomSize,
        min: 0,
        max: hov_TABovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_TABovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_TABovl_bgImgCustomSize => setAttributes({
          [`hov_TAB${controlName}ovl_bgImgCustomSize`]: hov_TABovl_bgImgCustomSize
        })
      })))), resMode === 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBovl_bgImgPos,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
          value: 'center center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
          value: 'center left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
          value: 'center right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
          value: 'top center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
          value: 'top left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
          value: 'top right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
          value: 'bottom center'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
          value: 'bottom left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
          value: 'bottom right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_MOBovl_bgImgPos => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgPos`]: hov_MOBovl_bgImgPos
        })
      })), hov_MOBovl_bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBovl_bgImgcustomPosXUnit => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]: hov_MOBovl_bgImgcustomPosXUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "X Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBovl_bgImgcustomPosX,
        min: 0,
        max: hov_MOBovl_bgImgcustomPosXUnit === 'px' ? 2000 : 100,
        onChange: hov_MOBovl_bgImgcustomPosX => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgcustomPosX`]: hov_MOBovl_bgImgcustomPosX
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBovl_bgImgcustomPosYUnit => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]: hov_MOBovl_bgImgcustomPosYUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Y Position"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBovl_bgImgcustomPosY,
        min: 0,
        max: hov_MOBovl_bgImgcustomPosYUnit === 'px' ? 2000 : 100,
        step: hov_MOBovl_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
        onChange: hov_MOBovl_bgImgcustomPosY => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgcustomPosY`]: hov_MOBovl_bgImgcustomPosY
        })
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Attachment",
        value: hov_ovl_bgImgAttachment,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
          value: 'scroll'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
          value: 'fixed'
        }],
        onChange: hov_ovl_bgImgAttachment => setAttributes({
          [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
        })
      }), hov_ovl_bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          marginTop: '-10px',
          paddingBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Repeat"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBovl_bgImgRepeat,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
          value: 'no-repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
          value: 'repeat'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
          value: 'repeat-x'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
          value: 'repeat-y'
        }],
        onChange: hov_MOBovl_bgImgRepeat => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgRepeat`]: hov_MOBovl_bgImgRepeat
        })
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Size"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        value: hov_MOBovl_backgroundSize,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
          value: 'auto'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
          value: 'cover'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
          value: 'contain'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
          value: 'custom'
        }],
        onChange: hov_MOBovl_backgroundSize => setAttributes({
          [`hov_MOB${controlName}ovl_backgroundSize`]: hov_MOBovl_backgroundSize
        })
      })), hov_MOBovl_backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
        unitTypes: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: '%',
          value: '%'
        }],
        onClick: hov_MOBovl_bgImgCustomSizeUnit => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]: hov_MOBovl_bgImgCustomSizeUnit
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
        requiredProps: requiredProps,
        label: "Width"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        value: hov_MOBovl_bgImgCustomSize,
        min: 0,
        max: hov_MOBovl_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
        step: hov_MOBovl_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
        onChange: hov_MOBovl_bgImgCustomSize => setAttributes({
          [`hov_MOB${controlName}ovl_bgImgCustomSize`]: hov_MOBovl_bgImgCustomSize
        })
      }))))))), hov_overlayType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: 'Gradient Color',
        value: hov_overlayGradient,
        onChange: newVal => setAttributes({
          [`hov_${controlName}overlayGradient`]: newVal
        })
      }));
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (OverlayControl);

/***/ }),

/***/ "./src/controls/border-control/border.js":
/*!***********************************************!*\
  !*** ./src/controls/border-control/border.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const Borders = ({
  top,
  right,
  bottom,
  left,
  onChange,
  neededProps,
  children
}) => {
  const {
    label,
    setAttributes,
    controlName,
    isLinked
  } = neededProps;
  const [borders, setBorders] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top,
    right,
    bottom,
    left
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setBorders({
      top,
      right,
      bottom,
      left
    });
  }, [top, left, right, bottom]);
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setBorders({
      ...borders,
      [name]: value
    });
  };
  const setLinkedBorders = value => {
    setBorders({
      ...borders,
      top: value,
      bottom: value,
      left: value,
      right: value
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange(borders);
  }, [borders]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}${controlName}IsLinked`]: isLinked
    });
  }, [isLinked]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-dimension-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: neededProps,
    controlName: controlName
  }, children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-container"
  }, isLinked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: parseInt(borders.top) || parseInt(borders.right) || parseInt(borders.bottom) || parseInt(borders.left),
    onChange: value => setLinkedBorders(value.toString()),
    min: 0,
    max: 100
  }), !isLinked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "top",
    value: borders.top,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "right",
    value: borders.right,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "bottom",
    value: borders.bottom,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "left",
    value: borders.left,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'zolo-blocks')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Borders);

/***/ }),

/***/ "./src/controls/border-control/index.js":
/*!**********************************************!*\
  !*** ./src/controls/border-control/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border */ "./src/controls/border-control/border.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _color_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../color-btn */ "./src/controls/color-btn/index.js");
/* harmony import */ var _link_unlink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../link-unlink */ "./src/controls/link-unlink/index.js");











const BorderControl = ({
  label,
  controlName,
  requiredProps,
  units
}) => {
  const {
    attributes,
    setAttributes,
    resMode
  } = requiredProps;
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderType`]: borderType,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Unit`]: borderUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: borderTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: borderRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: borderBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: borderLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderStyle`]: borderStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderColor`]: borderColor,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderType`]: TABborderType,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Unit`]: TABborderUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: TABborderTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: TABborderRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: TABborderBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: TABborderLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderStyle`]: TABborderStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderColor`]: TABborderColor,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderType`]: MOBborderType,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Unit`]: MOBborderUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: MOBborderTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: MOBborderRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: MOBborderBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: MOBborderLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderStyle`]: MOBborderStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderColor`]: MOBborderColor,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}IsLinked`]: borderIsLinked
  } = attributes;
  const [isLinked, setIsLinked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(borderIsLinked);
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: 'em',
    value: 'em'
  }, {
    label: '%',
    value: '%'
  }];
  const neededProps = {
    label,
    controlName,
    setAttributes,
    resMode,
    controlName,
    isLinked
  };
  const onButtonClick = () => {
    setIsLinked(!isLinked);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-dimensions-control-wraper zolo-border-control"
  }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: borderUnit,
    unitTypes: units || defaultUnits,
    onClick: borderUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Unit`]: borderUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderType`]: 'none',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Unit`]: 'px',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderStyle`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderColor`]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: borderColor,
    onChange: color => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderColor`]: color
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: borderTop,
    right: borderRight,
    bottom: borderBottom,
    left: borderLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: top,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: right,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: bottom,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: left
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "border-styles-group"
  }, _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES && _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES.map((type, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: index,
      className: `border-style-btn ${borderType === type.value ? 'active' : ''}`,
      onClick: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderType`]: type.value
      })
    }, type.label);
  })), borderType === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: borderStyle,
    options: _global_constants__WEBPACK_IMPORTED_MODULE_3__.SEPERATOR_STYLES,
    onChange: value => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}BorderStyle`]: value
      });
    }
  }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABborderUnit,
    unitTypes: units || defaultUnits,
    onClick: TABdimensionUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Unit`]: TABdimensionUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderType`]: 'none',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Unit`]: 'px',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderStyle`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderColor`]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: TABborderColor,
    onChange: color => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderColor`]: color
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: TABborderTop,
    right: TABborderRight,
    bottom: TABborderBottom,
    left: TABborderLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: top,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: right,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: bottom,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: left
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "border-styles-group"
  }, _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES && _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES.map((type, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: index,
      className: `border-style-btn ${TABborderType === type.value ? 'active' : ''}`,
      onClick: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderType`]: type.value
      })
    }, type.label);
  })), TABborderType === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: TABborderStyle,
    options: _global_constants__WEBPACK_IMPORTED_MODULE_3__.SEPERATOR_STYLES,
    onChange: value => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}BorderStyle`]: value
      });
    }
  }))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBborderUnit,
    unitTypes: units || defaultUnits,
    onClick: value => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Unit`]: value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderType`]: 'none',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Unit`]: 'px',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderStyle`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderColor`]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: MOBborderColor,
    onChange: color => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderColor`]: color
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: MOBborderTop,
    right: MOBborderRight,
    bottom: MOBborderBottom,
    left: MOBborderLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: top,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: right,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: bottom,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: left
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "border-styles-group"
  }, _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES && _global_constants__WEBPACK_IMPORTED_MODULE_3__.BORDER_TYPES.map((type, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: index,
      className: `border-style-btn ${MOBborderType === type.value ? 'active' : ''}`,
      onClick: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderType`]: type.value
      })
    }, type.label);
  })), MOBborderType === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: MOBborderStyle,
    options: _global_constants__WEBPACK_IMPORTED_MODULE_3__.SEPERATOR_STYLES,
    onChange: value => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}BorderStyle`]: value
      });
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BorderControl);

/***/ }),

/***/ "./src/controls/boxshadow-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/boxshadow-control/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _color_btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../color-btn */ "./src/controls/color-btn/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");





/**
 * Internal dependencies
 */





const BoxShadowControl = ({
  label = '',
  controlName,
  requiredProps
}) => {
  const {
    setAttributes,
    attributes
  } = requiredProps;
  const {
    [`${controlName}shadowType`]: shadowType,
    [`${controlName}shadowUnit`]: shadowUnit,
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hOffset`]: hOffset,
    [`${controlName}vOffset`]: vOffset,
    [`${controlName}blur`]: blur,
    [`${controlName}spread`]: spread
  } = attributes;
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: 'em',
    value: 'em'
  }, {
    label: '%',
    value: '%'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-label-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: shadowUnit,
    unitTypes: defaultUnits,
    onClick: sizeUnit => setAttributes({
      [`${controlName}shadowUnit`]: sizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: () => {
      setAttributes({
        [`${controlName}shadowType`]: 'none',
        [`${controlName}shadowUnit`]: 'px',
        [`${controlName}shadowColor`]: '',
        [`${controlName}hOffset`]: '',
        [`${controlName}vOffset`]: '',
        [`${controlName}blur`]: '',
        [`${controlName}spread`]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: shadowColor,
    onChange: value => setAttributes({
      [`${controlName}shadowColor`]: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Box Shadow', 'zolo-blocks'),
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true,
    noResponsive: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "shadow-style-btn-group"
  }, _global_constants__WEBPACK_IMPORTED_MODULE_8__.BOX_SHADOW_TYPES && _global_constants__WEBPACK_IMPORTED_MODULE_8__.BOX_SHADOW_TYPES.map((type, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: index,
      className: `shadow-style-btn ${shadowType === type.value ? 'active' : ''}`,
      onClick: () => setAttributes({
        [`${controlName}shadowType`]: type.value
      })
    }, type.label);
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow-options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: hOffset => setAttributes({
      [`${controlName}hOffset`]: parseInt(hOffset)
    }),
    value: hOffset,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('X', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: vOffset => setAttributes({
      [`${controlName}vOffset`]: parseInt(vOffset)
    }),
    value: vOffset,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Y', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: blur => setAttributes({
      [`${controlName}blur`]: parseInt(blur)
    }),
    value: blur,
    min: 0,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: spread => setAttributes({
      [`${controlName}spread`]: parseInt(spread)
    }),
    value: spread,
    min: 0,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spread', 'zolo-blocks')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

/***/ }),

/***/ "./src/controls/color-btn/index.js":
/*!*****************************************!*\
  !*** ./src/controls/color-btn/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const ColorBtn = ({
  color,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "zolo-color-picker-btn",
    position: "bottom right",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: onToggle,
      "aria-expanded": isOpen,
      className: "color-ball-btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
      colorValue: color,
      className: "color-ball"
    })),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zolo-color-picker"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: color,
      disableAlpha: false,
      onChangeComplete: value => onChange(value.hex)
    }))
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ColorBtn);

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");




const colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: 'white',
  border: '1px solid #ebebeb'
};
const colorStyles = {
  height: 16,
  width: 16,
  borderRadius: '0%',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)'
};
const ColorControl = ({
  label,
  defaultColor,
  color,
  onChange
}) => {
  const [bgColor, setBgColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChange(bgColor);
  }, [bgColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setBgColor(color || defaultColor);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-color-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label || '',
    className: "color-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: bgColor || 'default'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "color-ball",
      style: bgColor && colorBallStyles
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        ...colorStyles,
        backgroundColor: bgColor
      },
      "aria-expanded": isOpen,
      onClick: onToggle,
      "aria-label": bgColor || 'default'
    }))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      color: bgColor,
      onChangeComplete: ({
        rgb
      }) => {
        setBgColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
      }
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onReset: () => {
      setBgColor(defaultColor);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/controls/dimensions-control/dimension.js":
/*!******************************************************!*\
  !*** ./src/controls/dimensions-control/dimension.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const DimensionControl = ({
  top,
  right,
  bottom,
  left,
  onChange,
  neededProps,
  min = null,
  max = null
}) => {
  const {
    label,
    setAttributes,
    forBorderRadius,
    controlName,
    isLinked
  } = neededProps;
  const [dimensions, setDimensions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top,
    right,
    bottom,
    left
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setDimensions({
      top,
      right,
      bottom,
      left
    });
  }, [top, left, right, bottom]);
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setDimensions({
      ...dimensions,
      [name]: value
    });
  };
  const setLinkedDimensions = value => {
    setDimensions({
      ...dimensions,
      top: value,
      bottom: value,
      left: value,
      right: value
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange(dimensions);
  }, [dimensions]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}${controlName}IsLinked`]: isLinked
    });
  }, [isLinked]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-dimension-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: neededProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-container"
  }, isLinked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: parseInt(dimensions.top) || parseInt(dimensions.right) || parseInt(dimensions.bottom) || parseInt(dimensions.left),
    onChange: value => setLinkedDimensions(value.toString()),
    max: max || 100
  }), !isLinked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('T.Left', 'zolo-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Top', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('T.Right', 'zolo-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Right', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('B.Right', 'zolo-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Bottom', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('B.Left', 'zolo-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left', 'zolo-blocks')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionControl);

/***/ }),

/***/ "./src/controls/dimensions-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/dimensions-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimension */ "./src/controls/dimensions-control/dimension.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _link_unlink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link-unlink */ "./src/controls/link-unlink/index.js");








const ResDimensionsControl = ({
  label,
  controlName,
  requiredProps,
  forBorderRadius,
  units
}) => {
  const {
    attributes,
    setAttributes,
    resMode
  } = requiredProps;
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Unit`]: dimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: dimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: dimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: dimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: dimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Unit`]: TABdimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: TABdimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: TABdimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: TABdimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: TABdimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Unit`]: MOBdimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: MOBdimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: MOBdimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: MOBdimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: MOBdimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}IsLinked`]: dimensionIsLinked
  } = attributes;
  const [isLinked, setIsLinked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(dimensionIsLinked);
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: 'em',
    value: 'em'
  }, {
    label: '%',
    value: '%'
  }];
  const neededProps = {
    label,
    controlName,
    setAttributes,
    resMode,
    dimensionIsLinked,
    forBorderRadius,
    controlName,
    isLinked
  };
  const onButtonClick = () => {
    setIsLinked(!isLinked);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-dimensions-control-wraper"
  }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: dimensionUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Unit`]: dimensionUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Top`]: top,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Right`]: right,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Bottom`]: bottom,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}${controlName}Left`]: left
      });
    }
  })), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: TABdimensionUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Unit`]: TABdimensionUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Top`]: top,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Right`]: right,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Bottom`]: bottom,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}TAB${controlName}Left`]: left
    })
  })), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: MOBdimensionUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Unit`]: MOBdimensionUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: `zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_link_unlink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLinked: isLinked
    }),
    onClick: onButtonClick
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: '',
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: ({
      top,
      right,
      bottom,
      left
    }) => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Top`]: top,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Right`]: right,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Bottom`]: bottom,
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}MOB${controlName}Left`]: left
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResDimensionsControl);

/***/ }),

/***/ "./src/controls/gradient-control/index.js":
/*!************************************************!*\
  !*** ./src/controls/gradient-control/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function GradientControl({
  label,
  value,
  onChange
}) {
  const setSettings = val => {
    onChange(val);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-control-wrap"
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "zb-label"
  }, label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    label: 'helloooooo',
    value: value,
    onChange: val => setSettings(val),
    gradients: [{
      name: 'Green',
      gradient: 'linear-gradient(135deg, #80F1A6 0%, #EFD000 100%)',
      slug: 'green'
    }, {
      name: 'Blue',
      gradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
      slug: 'blue'
    }, {
      name: 'Dark Blue',
      gradient: 'linear-gradient(50deg, #15D2E3 10%, #11D6E2 40%, #10D7E2 80%)',
      slug: 'darkBlue'
    }, {
      name: 'Yellow',
      gradient: 'linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)',
      slug: 'yellow'
    }, {
      name: 'Merun',
      gradient: 'linear-gradient(135deg, #E25544 2.88%, #620C90 98.14%)',
      slug: 'merun'
    }]
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (GradientControl);

/***/ }),

/***/ "./src/controls/header-tabs/index.js":
/*!*******************************************!*\
  !*** ./src/controls/header-tabs/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



const HeaderTabs = ({
  generalTab,
  styleTab,
  advancedTab
}) => {
  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('basic');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-panel-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "zolo-tab-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `zolo-tab ${tab === 'basic' ? 'active__tab' : ''}${tab === 'style' ? 'prev__tab' : ''}`,
    onClick: () => setTab('basic')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M45.07,75.33H25.34a4.1,4.1,0,0,1-4.08-4.08v-46a4.1,4.1,0,0,1,4.08-4.08h46a4.1,4.1,0,0,1,4.08,4.08V45a2.5,2.5,0,0,0,5,0V25.22a9.08,9.08,0,0,0-9.08-9.08h-46a9.08,9.08,0,0,0-9.08,9.08v46a9.08,9.08,0,0,0,9.08,9.08H45.07a2.5,2.5,0,1,0,0-5ZM82.16,59.06,49.28,45.91A2.51,2.51,0,0,0,46,49.16L59.19,82a2.5,2.5,0,0,0,2.32,1.57h0A2.49,2.49,0,0,0,63.83,82L69,68.9l13.13-5.19a2.5,2.5,0,0,0,0-4.65Zm-16,5.59a2.54,2.54,0,0,0-1.41,1.41l-3.28,8.29L52.84,52.72l21.63,8.65Z",
    style: {
      fill: '#39394d'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "100",
    height: "100",
    style: {
      fill: 'none'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "zolo-tab-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `zolo-tab ${tab === 'style' ? 'active__tab' : ''}${tab === 'basic' ? 'next__tab' : ''}${tab === 'extra' ? 'sup_prev__tab' : ''}`,
    onClick: () => setTab('style')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M85,24.38a9.4,9.4,0,0,0-16-6.65L56.52,30.18l-3.41-3.41a9,9,0,0,0-12.7,0L35.23,32a2.52,2.52,0,0,0,0,3.54L37,37.25c-5.62,7.53-11.36,8.84-19.93,10.27a2.49,2.49,0,0,0-1.54,4l26,32.53a2.48,2.48,0,0,0,1.95.94,2.55,2.55,0,0,0,1.11-.26c5.64-2.82,16-12.53,19.64-20.25l.25.26a2.51,2.51,0,0,0,3.54,0l5.18-5.18a9,9,0,0,0,0-12.71l-3.4-3.4L82.27,31A9.37,9.37,0,0,0,85,24.38ZM44.12,79.29,31.79,63.87l23,5.75A55.16,55.16,0,0,1,44.12,79.29Zm14-14L26.63,57.42l-4.58-5.73c7.31-1.49,13.05-3.83,18.51-10.88L60.41,60.67A15.1,15.1,0,0,1,58.12,65.3ZM78.73,27.49,64.51,41.71a2.52,2.52,0,0,0,0,3.54l5.17,5.16a4,4,0,0,1,0,5.65l-3.41,3.4L64.8,58h0L42,35.22h0l-1.49-1.49,3.4-3.4a4,4,0,0,1,5.64,0l5.17,5.18a2.51,2.51,0,0,0,3.54,0L72.51,21.27a4.4,4.4,0,1,1,6.22,6.22Z",
    style: {
      fill: '#39394d'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "100",
    height: "100",
    style: {
      fill: 'none'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "zolo-tab-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `zolo-tab ${tab === 'extra' ? 'active__tab' : ''}${tab === 'style' ? 'next__tab' : ''}`,
    onClick: () => setTab('extra')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M50,36.74A13.26,13.26,0,1,0,63.26,50,13.28,13.28,0,0,0,50,36.74Zm0,21.52A8.26,8.26,0,1,1,58.26,50,8.26,8.26,0,0,1,50,58.26Zm34.47,2.88a9.68,9.68,0,0,0-4.57-5.92L79.44,55A4.72,4.72,0,0,1,77.1,50.9V49.09a4.68,4.68,0,0,1,.62-2.34A4.81,4.81,0,0,1,79.47,45l.51-.3A9.7,9.7,0,0,0,83.5,31.49l-.79-1.37A9.66,9.66,0,0,0,69.6,26.55l-.62.33a4.7,4.7,0,0,1-4.65,0L62.78,26a4.7,4.7,0,0,1-1.7-1.7,4.75,4.75,0,0,1-.63-2.34v-.65a9.57,9.57,0,0,0-2.83-6.83,9.68,9.68,0,0,0-6.83-2.84H49.21a9.68,9.68,0,0,0-9.66,9.67v.64a4.73,4.73,0,0,1-.62,2.34A4.81,4.81,0,0,1,37.21,26l-1.54.89a4.64,4.64,0,0,1-4.72,0l-.47-.25a9.67,9.67,0,0,0-13.19,3.53l-.79,1.37A9.68,9.68,0,0,0,20,44.66l.48.32.13.08a4.62,4.62,0,0,1,1.7,1.7,4.75,4.75,0,0,1,.64,2.31V50.9A4.67,4.67,0,0,1,20.53,55l-.51.3A9.68,9.68,0,0,0,16.5,68.51l.79,1.37a9.66,9.66,0,0,0,13.13,3.56l.6-.32a4.7,4.7,0,0,1,4.65,0l1.55.9a4.67,4.67,0,0,1,2.33,4v.65a9.75,9.75,0,0,0,2.83,6.84,9.6,9.6,0,0,0,6.83,2.83h1.58a9.66,9.66,0,0,0,9.66-9.67v-.65a4.72,4.72,0,0,1,2.34-4l1.53-.89a4.68,4.68,0,0,1,4.74,0l.46.25a9.64,9.64,0,0,0,7.33,1,9.78,9.78,0,0,0,5.88-4.53l.77-1.38A9.64,9.64,0,0,0,84.47,61.14ZM79.16,66l-.77,1.37A4.66,4.66,0,0,1,72,69l-.46-.25a9.85,9.85,0,0,0-9.68,0l-1.53.9a9.71,9.71,0,0,0-4.83,8.37v.65a4.68,4.68,0,0,1-4.66,4.67H49.21A4.59,4.59,0,0,1,45.92,82a4.7,4.7,0,0,1-1.37-3.3v-.66a9.69,9.69,0,0,0-4.82-8.36l-1.55-.9a9.64,9.64,0,0,0-9.6,0l-.6.33a4.66,4.66,0,0,1-6.36-1.71L20.83,66a4.67,4.67,0,0,1,1.74-6.4l.5-.31a9.71,9.71,0,0,0,4.83-8.4V49.05a9.69,9.69,0,0,0-4.75-8.27l-.48-.32-.13-.08A4.68,4.68,0,0,1,20.83,34l.79-1.36a4.69,4.69,0,0,1,2.83-2.18,4.78,4.78,0,0,1,3.6.51l.46.25a9.82,9.82,0,0,0,9.68,0l1.53-.9a9.65,9.65,0,0,0,4.83-8.37v-.65A4.7,4.7,0,0,1,45.92,18a4.59,4.59,0,0,1,3.29-1.37h1.58A4.66,4.66,0,0,1,54.08,18a4.6,4.6,0,0,1,1.37,3.3v.65a9.73,9.73,0,0,0,4.82,8.37l1.55.9a9.88,9.88,0,0,0,9.59,0l.61-.33a4.64,4.64,0,0,1,3.53-.47,4.69,4.69,0,0,1,2.83,2.17L79.17,34a4.69,4.69,0,0,1-1.73,6.4l-.5.3A9.73,9.73,0,0,0,72.1,49.1v1.78A9.7,9.7,0,0,0,77,59.35l.46.24A4.71,4.71,0,0,1,79.16,66Z",
    style: {
      fill: '#39394d'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "100",
    height: "100",
    style: {
      fill: 'none'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "zolo-tab-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Extra', 'zolo-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-tab-controls"
  }, tab === 'basic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, generalTab), tab === 'style' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, styleTab), tab === 'extra' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, advancedTab)));
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderTabs);

/***/ }),

/***/ "./src/controls/icon-picker/index.js":
/*!*******************************************!*\
  !*** ./src/controls/icon-picker/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayIcon: function() { return /* binding */ DisplayIcon; },
/* harmony export */   IconPicker: function() { return /* binding */ IconPicker; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wordpress_icon_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wordpress-icon-picker */ "./node_modules/wordpress-icon-picker/dist/index.min.js");
/* harmony import */ var wordpress_icon_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wordpress-icon-picker/dist/style.css */ "./node_modules/wordpress-icon-picker/dist/style.css");




/**
 * Wrapper Component for IconPicker
 * @param {*} props
 * @returns
 */
const IconPicker = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(wordpress_icon_picker__WEBPACK_IMPORTED_MODULE_1__.IconPicker, {
    ...props
  });
};

/**
 * Wrapper Component for DisplayIcon
 * @param {*} props
 * @returns
 */
const DisplayIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(wordpress_icon_picker__WEBPACK_IMPORTED_MODULE_1__.DisplayIcon, {
    ...props
  });
};

/***/ }),

/***/ "./src/controls/iconic-btn-group/index.js":
/*!************************************************!*\
  !*** ./src/controls/iconic-btn-group/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const IconicBtnGroup = ({
  label = '',
  value,
  onChange,
  options
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-iconic-btn-group"
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "iconic-btn-group",
    className: "iconic-btn-label"
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-iconic-btn-group"
  }, options && options.map((option, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => onChange(option.value),
      className: `iconic-btn ${value == option.value ? 'active' : ''}`,
      key: index,
      title: option.label
    }, option.icon && option.icon !== '' ? option.icon : option.label);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (IconicBtnGroup);

/***/ }),

/***/ "./src/controls/image-avatar/index.js":
/*!********************************************!*\
  !*** ./src/controls/image-avatar/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */




const ImageAvatar = ({
  imageUrl,
  imageId,
  onDeleteImage,
  onEditImage
}) => {
  const [hover, setHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [deleteHover, setDeleteHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-image-avatar-control",
    style: {
      backgroundImage: `url(${imageUrl})`
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "zb-image-avatar-delete",
    onMouseEnter: () => setDeleteHover(true),
    onMouseLeave: () => setDeleteHover(false),
    onClick: () => onDeleteImage()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 9L9 15",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 9L15 15",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => onEditImage(media.url, media.id),
    allowedTypes: ['image'],
    value: imageId && imageId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "zolo-replace-btn",
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z",
      stroke: "black",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 12V12.01",
      stroke: "black",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Replace', 'zolo-blocks'))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./src/controls/link-control/index.js":
/*!********************************************!*\
  !*** ./src/controls/link-control/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



const LinkControl = ({
  label,
  value,
  onChange
}) => {
  const [isExternal, setIsExternal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-link-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-link-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: value && value.url,
    onChange: newUrl => {
      onChange({
        ...value,
        url: newUrl
      });
    },
    placeholder: "https://"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setIsExternal(!isExternal),
    className: `zb-link-extra-btn ${isExternal ? 'zb-extra-active' : ''}`
  }, isExternal ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 9L9 15",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 9L15 15",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.2196 2H11.7804C11.251 2 10.7433 2.21071 10.369 2.58579C9.99463 2.96086 9.78433 3.46957 9.78433 4V4.18C9.78397 4.53073 9.69157 4.87519 9.51639 5.17884C9.34121 5.48248 9.08942 5.73464 8.78628 5.91L8.35712 6.16C8.05367 6.33554 7.70945 6.42795 7.35907 6.42795C7.00868 6.42795 6.66446 6.33554 6.36101 6.16L6.21131 6.08C5.75327 5.81526 5.2091 5.74344 4.69826 5.88031C4.18743 6.01717 3.75166 6.35154 3.48663 6.81L3.26706 7.19C3.00284 7.64893 2.93116 8.19416 3.06776 8.706C3.20435 9.21783 3.53806 9.65445 3.99564 9.92L4.14534 10.02C4.44703 10.1945 4.69788 10.4451 4.87297 10.7468C5.04806 11.0486 5.14129 11.391 5.14339 11.74V12.25C5.14479 12.6024 5.05322 12.949 4.87796 13.2545C4.70269 13.5601 4.44996 13.8138 4.14534 13.99L3.99564 14.08C3.53806 14.3456 3.20435 14.7822 3.06776 15.294C2.93116 15.8058 3.00284 16.3511 3.26706 16.81L3.48663 17.19C3.75166 17.6485 4.18743 17.9828 4.69826 18.1197C5.2091 18.2566 5.75327 18.1847 6.21131 17.92L6.36101 17.84C6.66446 17.6645 7.00868 17.5721 7.35907 17.5721C7.70945 17.5721 8.05367 17.6645 8.35712 17.84L8.78628 18.09C9.08942 18.2654 9.34121 18.5175 9.51639 18.8212C9.69157 19.1248 9.78397 19.4693 9.78433 19.82V20C9.78433 20.5304 9.99463 21.0391 10.369 21.4142C10.7433 21.7893 11.251 22 11.7804 22H12.2196C12.749 22 13.2567 21.7893 13.631 21.4142C14.0054 21.0391 14.2157 20.5304 14.2157 20V19.82C14.216 19.4693 14.3084 19.1248 14.4836 18.8212C14.6588 18.5175 14.9106 18.2654 15.2137 18.09L15.6429 17.84C15.9463 17.6645 16.2905 17.5721 16.6409 17.5721C16.9913 17.5721 17.3355 17.6645 17.639 17.84L17.7887 17.92C18.2467 18.1847 18.7909 18.2566 19.3017 18.1197C19.8126 17.9828 20.2483 17.6485 20.5134 17.19L20.7329 16.8C20.9972 16.3411 21.0688 15.7958 20.9322 15.284C20.7956 14.7722 20.4619 14.3356 20.0044 14.07L19.8547 13.99C19.55 13.8138 19.2973 13.5601 19.122 13.2545C18.9468 12.949 18.8552 12.6024 18.8566 12.25V11.75C18.8552 11.3976 18.9468 11.051 19.122 10.7455C19.2973 10.4399 19.55 10.1862 19.8547 10.01L20.0044 9.92C20.4619 9.65445 20.7956 9.21783 20.9322 8.706C21.0688 8.19416 20.9972 7.64893 20.7329 7.19L20.5134 6.81C20.2483 6.35154 19.8126 6.01717 19.3017 5.88031C18.7909 5.74344 18.2467 5.81526 17.7887 6.08L17.639 6.16C17.3355 6.33554 16.9913 6.42795 16.6409 6.42795C16.2905 6.42795 15.9463 6.33554 15.6429 6.16L15.2137 5.91C14.9106 5.73464 14.6588 5.48248 14.4836 5.17884C14.3084 4.87519 14.216 4.53073 14.2157 4.18V4C14.2157 3.46957 14.0054 2.96086 13.631 2.58579C13.2567 2.21071 12.749 2 12.2196 2Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), isExternal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-link-popover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'zolo-blocks'),
    checked: value && value.openInNewTab,
    onChange: () => {
      onChange({
        ...value,
        openInNewTab: !value.openInNewTab
      });
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (LinkControl);

/***/ }),

/***/ "./src/controls/link-unlink/index.js":
/*!*******************************************!*\
  !*** ./src/controls/link-unlink/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const LinkUnlink = ({
  isLinked
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLinked ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10 13.1404C10.3955 13.6728 10.9001 14.1134 11.4796 14.4322C12.0591 14.7511 12.6999 14.9407 13.3586 14.9882C14.0172 15.0357 14.6783 14.94 15.297 14.7076C15.9157 14.4751 16.4775 14.1115 16.9443 13.6412L19.7073 10.8588C20.5462 9.98423 21.0103 8.81284 20.9998 7.59697C20.9893 6.38109 20.505 5.21801 19.6512 4.35822C18.7974 3.49844 17.6424 3.01074 16.435 3.00018C15.2276 2.98961 14.0644 3.45702 13.1959 4.30173L11.6117 5.88768",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14 10.8596C13.6045 10.3272 13.0999 9.88658 12.5204 9.56776C11.9409 9.24894 11.3001 9.05935 10.6414 9.01185C9.98279 8.96435 9.32171 9.06004 8.70302 9.29245C8.08433 9.52486 7.52251 9.88853 7.05567 10.3588L4.29268 13.1412C3.45384 14.0158 2.98968 15.1872 3.00017 16.403C3.01067 17.6189 3.49497 18.782 4.34877 19.6418C5.20257 20.5016 6.35756 20.9893 7.56498 20.9998C8.77239 21.0104 9.93562 20.543 10.8041 19.6983L12.379 18.1123",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M18.26 12L19.7786 10.4886H19.761C20.5738 9.64543 21.0192 8.51382 20.9994 7.34221C20.9795 6.17061 20.496 5.05478 19.655 4.23971C18.8312 3.44441 17.7313 3 16.5868 3C15.4423 3 14.3425 3.44441 13.5186 4.23971L12 5.75111",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M5.75153 12L4.24023 13.5114C3.42658 14.3546 2.98075 15.4862 3.00064 16.6578C3.02052 17.8294 3.50449 18.9452 4.34629 19.7603C5.17092 20.5556 6.27188 21 7.4175 21C8.56311 21 9.66407 20.5556 10.4887 19.7603L12 18.2489",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8 3V6",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M3 8H6",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16 18V21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M18 16H21",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (LinkUnlink);

/***/ }),

/***/ "./src/controls/normal-bg-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/normal-bg-control/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gradient-control */ "./src/controls/gradient-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-avatar */ "./src/controls/image-avatar/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");










const NormalBGControl = ({
  controlName,
  requiredProps,
  noMainBGImg = false
}) => {
  const {
    setAttributes,
    attributes,
    resMode
  } = requiredProps;
  const {
    //attributes for background type normal start
    [`${controlName}backgroundType`]: backgroundType,
    [`${controlName}backgroundColor`]: backgroundColor,
    [`${controlName}gradientColor`]: gradientColor,
    [`${controlName}bgImageURL`]: bgImageURL,
    [`${controlName}bgImageID`]: bgImageID,
    [`${controlName}bgImgAttachment`]: bgImgAttachment,
    [`${controlName}backgroundSize`]: backgroundSize,
    [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
    [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
    [`${controlName}bgImgPos`]: bgImgPos,
    [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
    [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
    [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
    [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
    [`${controlName}bgImgRepeat`]: bgImgRepeat,
    [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
    [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
    [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
    [`TAB${controlName}bgImgPos`]: TABbgImgPos,
    [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
    [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
    [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
    [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
    [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
    [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
    [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
    [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
    [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
    [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
    [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
    [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
    [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
    [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(({
    value,
    label
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: backgroundType === value ? 'primary' : 'secondary',
    onClick: () => setAttributes({
      [`${controlName}backgroundType`]: value
    })
  }, label)))), backgroundType === 'classic' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'zolo-blocks'),
    color: backgroundColor,
    onChange: backgroundColor => setAttributes({
      [`${controlName}backgroundColor`]: backgroundColor
    })
  }), noMainBGImg === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      [`${controlName}bgImageURL`]: media.url,
      [`${controlName}bgImageID`]: media.id
    }),
    type: "image",
    value: bgImageID,
    render: ({
      open
    }) => !bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "zb-bg-control-img-btn components-button",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
      icon: "format-image",
      onClick: open
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        padding: '10px 0',
        display: 'block'
      }
    }))
  }), bgImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageUrl: bgImageURL,
    imageId: bgImageID,
    onDeleteImage: () => setAttributes({
      [`${controlName}bgImageURL`]: null
    }),
    onEditImage: (url, id) => setAttributes({
      [`${controlName}bgImageURL`]: url,
      [`${controlName}bgImageID`]: id
    })
  }), resMode === 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
      value: 'center center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
      value: 'bottom right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: bgImgPos => setAttributes({
      [`${controlName}bgImgPos`]: bgImgPos
    })
  })), bgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: bgImgcustomPosXUnit => setAttributes({
      [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "X Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgcustomPosX,
    min: -2000,
    max: 2000,
    onChange: bgImgcustomPosX => setAttributes({
      [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: bgImgcustomPosYUnit => setAttributes({
      [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Y Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgcustomPosY,
    min: -2000,
    max: 2000,
    step: bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: bgImgcustomPosY => setAttributes({
      [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
      value: 'scroll'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
      value: 'fixed'
    }],
    onChange: bgImgAttachment => setAttributes({
      [`${controlName}bgImgAttachment`]: bgImgAttachment
    })
  }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Repeat"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
      value: 'repeat-y'
    }],
    onChange: bgImgRepeat => setAttributes({
      [`${controlName}bgImgRepeat`]: bgImgRepeat
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Size"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: backgroundSize => setAttributes({
      [`${controlName}backgroundSize`]: backgroundSize
    })
  })), backgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: bgImgCustomSizeUnit => setAttributes({
      [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Width"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: bgImgCustomSize => setAttributes({
      [`${controlName}bgImgCustomSize`]: bgImgCustomSize
    })
  })))), resMode === 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABbgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
      value: 'center center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
      value: 'bottom right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: TABbgImgPos => setAttributes({
      [`TAB${controlName}bgImgPos`]: TABbgImgPos
    })
  })), TABbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: TABbgImgcustomPosXUnit => setAttributes({
      [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "X Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: TABbgImgcustomPosX => setAttributes({
      [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: TABbgImgcustomPosYUnit => setAttributes({
      [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Y Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: TABbgImgcustomPosY => setAttributes({
      [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
      value: 'scroll'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
      value: 'fixed'
    }],
    onChange: bgImgAttachment => setAttributes({
      [`${controlName}bgImgAttachment`]: bgImgAttachment
    })
  }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Repeat"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABbgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
      value: 'repeat-y'
    }],
    onChange: TABbgImgRepeat => setAttributes({
      [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Size"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABbackgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: TABbackgroundSize => setAttributes({
      [`TAB${controlName}backgroundSize`]: TABbackgroundSize
    })
  })), TABbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: TABbgImgCustomSizeUnit => setAttributes({
      [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Width"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: TABbgImgCustomSize => setAttributes({
      [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize
    })
  })))), resMode === 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBbgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Center', 'zolo-blocks'),
      value: 'center center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Left', 'zolo-blocks'),
      value: 'center left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Center Right', 'zolo-blocks'),
      value: 'center right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Center', 'zolo-blocks'),
      value: 'top center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Left', 'zolo-blocks'),
      value: 'top left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top Right', 'zolo-blocks'),
      value: 'top right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Center', 'zolo-blocks'),
      value: 'bottom center'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Left', 'zolo-blocks'),
      value: 'bottom left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bottom Right', 'zolo-blocks'),
      value: 'bottom right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: MOBbgImgPos => setAttributes({
      [`MOB${controlName}bgImgPos`]: MOBbgImgPos
    })
  })), MOBbgImgPos === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: MOBbgImgcustomPosXUnit => setAttributes({
      [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "X Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: MOBbgImgcustomPosX => setAttributes({
      [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: MOBbgImgcustomPosYUnit => setAttributes({
      [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Y Position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: MOBbgImgcustomPosY => setAttributes({
      [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Scroll', 'zolo-blocks'),
      value: 'scroll'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fixed', 'zolo-blocks'),
      value: 'fixed'
    }],
    onChange: bgImgAttachment => setAttributes({
      [`${controlName}bgImgAttachment`]: bgImgAttachment
    })
  }), bgImgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Repeat"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBbgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No-repeat', 'zolo-blocks'),
      value: 'no-repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat', 'zolo-blocks'),
      value: 'repeat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-x', 'zolo-blocks'),
      value: 'repeat-x'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Repeat-y', 'zolo-blocks'),
      value: 'repeat-y'
    }],
    onChange: MOBbgImgRepeat => setAttributes({
      [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Size"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBbackgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Auto', 'zolo-blocks'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cover', 'zolo-blocks'),
      value: 'cover'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contain', 'zolo-blocks'),
      value: 'contain'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom', 'zolo-blocks'),
      value: 'custom'
    }],
    onChange: MOBbackgroundSize => setAttributes({
      [`MOB${controlName}backgroundSize`]: MOBbackgroundSize
    })
  })), MOBbackgroundSize === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }],
    onClick: MOBbgImgCustomSizeUnit => setAttributes({
      [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    requiredProps: requiredProps,
    label: "Width"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: MOBbgImgCustomSize => setAttributes({
      [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize
    })
  }))))))), backgroundType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Gradient Color', 'zolo-blocks'),
    value: gradientColor,
    onChange: newVal => setAttributes({
      [`${controlName}gradientColor`]: newVal
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (NormalBGControl);

/***/ }),

/***/ "./src/controls/pagination/index.js":
/*!******************************************!*\
  !*** ./src/controls/pagination/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/controls/pagination/page.js");




class Pagination extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      total,
      current,
      prevText,
      nextText,
      baseClassName,
      onClickPage
    } = this.props;
    if (!total) {
      return null;
    }
    let endSize = this.props.endSize < 1 ? 1 : this.props.endSize;
    let midSize = this.props.midSize < 0 ? 2 : this.props.midSize;
    let dots = false;
    let pages = [];
    if (current && current > 1) {
      pages.push({
        isCurrent: false,
        key: "prev",
        onClick: () => onClickPage(current - 1),
        className: "page-numbers prev",
        text: prevText
      });
    }
    for (let n = 1; n <= this.props.total; n++) {
      let isCurrent = n === current;
      if (isCurrent) {
        dots = true;
        pages.push({
          isCurrent: true,
          key: n,
          onClick: () => onClickPage(n),
          className: "page-numbers",
          text: n
        });
      } else {
        if (n <= endSize || current && n >= current - midSize && n <= current + midSize || n > total - endSize) {
          pages.push({
            isLink: true,
            key: n,
            onClick: () => onClickPage(n),
            className: "page-numbers",
            text: n
          });
          dots = true;
        } else if (dots) {
          pages.push({
            isDots: true,
            key: n,
            onClick: () => 'dots',
            className: "page-numbers",
            text: "..."
          });
          dots = false;
        }
      }
    }
    if (current && current < total) {
      pages.push({
        isCurrent: false,
        key: "next",
        onClick: () => onClickPage(current + 1),
        className: "page-numbers next",
        text: nextText
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: baseClassName
    }, pages.map(({
      isCurrent,
      key,
      text,
      className,
      onClick,
      isDots,
      isLink
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isCurrent: isCurrent,
      key: key,
      pageKey: key,
      onClick: () => onClick(),
      className: className,
      isDots: isDots,
      isLink: isLink
    }, text)));
  }
}
;
Pagination.defaultProps = {
  total: 0,
  current: 1,
  prevText: 'Prev',
  nextText: 'Next',
  endSize: 1,
  midSize: 2,
  baseClassName: 'zolo-pagination-nav'
};
Pagination.propTypes = {
  total: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  prevText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  nextText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  endSize: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  midSize: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  baseClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  onClickPage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};

/***/ }),

/***/ "./src/controls/pagination/page.js":
/*!*****************************************!*\
  !*** ./src/controls/pagination/page.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





class Page extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  render() {
    const {
      className,
      isCurrent,
      isDots,
      children,
      pageKey,
      onClick
    } = this.props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'current': isCurrent
    }, {
      'dots': isDots
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: classes,
      onClick: () => onClick()
    }, pageKey === 'prev' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " prev "), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(children), pageKey === 'next' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "next"));
  }
}
Page.defaultProps = {
  isCurrent: false,
  isDots: false,
  className: ''
};
Page.propTypes = {
  isCurrent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  key: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  isDots: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/controls/query-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/query-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");





const QueryControl = ({
  attributes,
  setAttributes
}) => {
  const {
    postQuery
  } = attributes;
  const allTermList = zoloParams.all_term_list;
  const allTaxonomyList = zoloParams.get_taxonomies;
  let tpgAllTaxonomies = new Set();
  for (let tax in allTaxonomyList) {
    let value = allTaxonomyList[tax];
    if (postQuery && postQuery.postType && postQuery.postType === value.object_type[0]) {
      tpgAllTaxonomies.add({
        value: value.name,
        name: value.label
      });
    }
  }
  tpgAllTaxonomies = [...tpgAllTaxonomies];
  const changeTaxonomy = (terms, name) => {
    let postTaxonomies = {
      ...postQuery.postTaxonomies,
      [name]: {
        name: name,
        options: terms
      }
    };
    setAttributes({
      postQuery: {
        ...postQuery,
        postTaxonomies
      }
    });
  };

  //get post types
  const PostType = [];
  let getPostType = zoloParams.post_types;
  for (let p in getPostType) {
    PostType.push({
      value: p,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(getPostType[p], 'zolo-blocks')
    });
  }
  const POSTS_TYPE = PostType;
  //get authors
  const AUTHOR_LISTS = zoloParams.get_users;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Source', 'zolo-blocks'),
    value: postQuery.postType,
    options: POSTS_TYPE,
    onChange: postType => setAttributes({
      postQuery: {
        ...postQuery,
        postType
      }
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('By Author', 'zolo-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    classNamePrefix: "zolo-select",
    options: AUTHOR_LISTS,
    value: postQuery.postAuthors,
    onChange: postAuthors => setAttributes({
      postQuery: {
        ...postQuery,
        postAuthors
      }
    }),
    isMulti: true,
    closeMenuOnSelect: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Include Only', 'zolo-blocks'),
    value: postQuery.postInclude,
    onChange: postInclude => setAttributes({
      postQuery: {
        ...postQuery,
        postInclude
      }
    }),
    autocomplete: "off"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclude', 'zolo-blocks'),
    autocomplete: "off",
    value: postQuery.postExclude,
    onChange: postExclude => {
      setAttributes({
        postQuery: {
          ...postQuery,
          postExclude
        }
      });
    }
  }), tpgAllTaxonomies.map((tax, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('By ', 'zolo-blocks') + tax.name,
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    classNamePrefix: "zolo-select",
    options: (0,_global_constants__WEBPACK_IMPORTED_MODULE_3__.PRINT_TAXONOMY)(allTermList[tax.value]),
    value: Object.keys(postQuery.postTaxonomies).length > 0 ? postQuery.postTaxonomies[tax.value] !== undefined ? postQuery.postTaxonomies[tax.value].options : [] : [],
    onChange: value => changeTaxonomy(value, tax.value),
    isMulti: true,
    closeMenuOnSelect: false
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Per Page', 'zolo-blocks'),
    max: 100,
    min: -1,
    value: postQuery.postPerPage,
    onChange: postPerPage => {
      setAttributes({
        postQuery: {
          ...postQuery,
          postPerPage
        }
      });
    },
    shiftStep: 10,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offset', 'zolo-blocks'),
    max: 100,
    min: 0,
    value: postQuery.postOffset,
    onChange: postOffset => {
      setAttributes({
        postQuery: {
          ...postQuery,
          postOffset
        }
      });
    },
    shiftStep: 10,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order By', 'zolo-blocks'),
    value: postQuery.postOrderby,
    onChange: postOrderby => {
      setAttributes({
        postQuery: {
          ...postQuery,
          postOrderby
        }
      });
    },
    options: _global_constants__WEBPACK_IMPORTED_MODULE_3__.ORDER_BY
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sort Order', 'zolo-blocks'),
    value: postQuery.postOrder,
    onChange: postOrder => {
      setAttributes({
        postQuery: {
          ...postQuery,
          postOrder
        }
      });
    },
    options: _global_constants__WEBPACK_IMPORTED_MODULE_3__.SORT_ORDER
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (QueryControl);

/***/ }),

/***/ "./src/controls/range-reset-control/index.js":
/*!***************************************************!*\
  !*** ./src/controls/range-reset-control/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");




const RangeResetControl = ({
  label,
  controlName,
  min,
  max,
  step,
  help,
  requiredProps
}) => {
  const dataAttributes = {
    min,
    max,
    step,
    help
  };
  const {
    attributes,
    setAttributes,
    objAttributes
  } = requiredProps;
  const {
    [controlName]: controlVal
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-range-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-units-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onReset: () => {
      setAttributes({
        [controlName]: objAttributes[controlName].default
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true,
    noResponsive: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: controlVal,
    onChange: val => setAttributes({
      [controlName]: val
    }),
    ...dataAttributes,
    min: min || 0,
    max: max || 100,
    step: step || 1
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (RangeResetControl);

/***/ }),

/***/ "./src/controls/res-alignment-control/index.js":
/*!*****************************************************!*\
  !*** ./src/controls/res-alignment-control/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _iconic_btn_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iconic-btn-group */ "./src/controls/iconic-btn-group/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");




const ResAlignmentControl = ({
  label,
  controlName,
  requiredProps,
  alignOptions,
  customClass = ''
}) => {
  const {
    attributes,
    setAttributes,
    resMode
  } = requiredProps;
  const {
    [`${controlName}ZRPAlign`]: desktopAlignment,
    [`TAB${controlName}ZRPAlign`]: tabletAlignment,
    [`MOB${controlName}ZRPAlign`]: mobileAlignment
  } = attributes;
  const defaultAlign = alignOptions && Array.isArray(alignOptions) ? alignOptions : _global_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ALIGNS;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zb-res-alignment-control-wrapper ${customClass}`
  }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconic_btn_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: newAlign => {
      setAttributes({
        [`${controlName}ZRPAlign`]: newAlign
      });
    },
    value: desktopAlignment,
    options: defaultAlign
  })), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconic_btn_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: newAlign => {
      setAttributes({
        [`TAB${controlName}ZRPAlign`]: newAlign
      });
    },
    value: tabletAlignment,
    options: defaultAlign
  })), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconic_btn_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: newAlign => {
      setAttributes({
        [`MOB${controlName}ZRPAlign`]: newAlign
      });
    },
    value: mobileAlignment,
    options: defaultAlign
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResAlignmentControl);

/***/ }),

/***/ "./src/controls/res-counter-control/index.js":
/*!***************************************************!*\
  !*** ./src/controls/res-counter-control/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const ResCounterControl = ({
  label,
  controlName,
  requiredProps,
  min,
  max,
  step
}) => {
  const {
    attributes,
    setAttributes,
    resMode
  } = requiredProps;
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}${controlName}Range`]: desktopRange = 1,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}TAB${controlName}Range`]: tabRange = 1,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}MOB${controlName}Range`]: mobRange = 1
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-range-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-units-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}${controlName}Range`]: 1,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}TAB${controlName}Range`]: 1,
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}MOB${controlName}Range`]: 1
      });
    }
  })), resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}${controlName}Range`]: desktopRange - 1
    }),
    disabled: desktopRange <= min
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    type: "number",
    value: desktopRange,
    onChange: val => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}${controlName}Range`]: parseInt(val)
      });
    },
    min: min || 1,
    max: max || 5,
    step: step || 1,
    disabled: desktopRange <= min || desktopRange >= max
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}${controlName}Range`]: desktopRange + 1
    }),
    disabled: desktopRange >= max
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 8V16",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "zb-counter-note"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Note: ', 'zita-blocks')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('maximum ', 'zita-blocks') + max + ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('minimum ') + min)))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}TAB${controlName}Range`]: tabRange - 1
    }),
    disabled: tabRange <= min
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    type: "number",
    value: tabRange,
    onChange: val => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}TAB${controlName}Range`]: parseInt(val)
      });
    },
    min: min || 1,
    max: max || 5,
    step: step || 1,
    disabled: tabRange <= min || tabRange >= max
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}TAB${controlName}Range`]: tabRange + 1
    }),
    disabled: tabRange >= max
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 8V16",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "zb-counter-note"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Note: ', 'zita-blocks')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('maximum ', 'zita-blocks') + max + ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('minimum ') + min))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-counter-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}MOB${controlName}Range`]: mobRange - 1
    }),
    disabled: mobRange <= min
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    type: "number",
    value: mobRange,
    onChange: val => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}MOB${controlName}Range`]: parseInt(val)
      });
    },
    min: min || 1,
    max: max || 5,
    step: step || 1,
    disabled: mobRange <= min || mobRange >= max
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "zb-counter-control-btn",
    onClick: () => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}MOB${controlName}Range`]: mobRange + 1
    }),
    disabled: mobRange >= max
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 8V16",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 12H8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "zb-counter-note"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Note: ', 'zita-blocks')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('maximum ', 'zita-blocks') + max + ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('minimum ') + min))));
};
/* harmony default export */ __webpack_exports__["default"] = (ResCounterControl);

/***/ }),

/***/ "./src/controls/res-range-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/res-range-control/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");



// import WithResDeviceBtn from './res-device-btn';





const ResRangeControl = ({
  label,
  controlName,
  units,
  requiredProps,
  min,
  max,
  step,
  noUnits
}) => {
  const {
    attributes,
    setAttributes,
    resMode
  } = requiredProps;
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Range`]: desktopRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Range`]: tabRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Range`]: mobRange
  } = attributes;
  let sizeUnit;
  let TABsizeUnit;
  let MOBsizeUnit;
  let defaultUnits;
  if (!noUnits) {
    sizeUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Unit`];
    TABsizeUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Unit`];
    MOBsizeUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Unit`];
    defaultUnits = [{
      label: 'px',
      value: 'px'
    }, {
      label: 'em',
      value: 'em'
    }, {
      label: '%',
      value: '%'
    }];
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-range-control-wrapper"
  }, noUnits ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-units-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Range`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: desktopRange,
    onChange: val => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Range`]: val
    }),
    min: min || 0,
    max: sizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: val => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Range`]: val
    }),
    min: min || 0,
    max: TABsizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  })), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: val => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Range`]: val
    }),
    min: min || 0,
    max: MOBsizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: sizeUnit,
    unitTypes: units || defaultUnits,
    onClick: sizeUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Unit`]: sizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Range`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: desktopRange,
    onChange: val => {
      console.log(val);
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}${controlName}Range`]: val
      });
    },
    min: min || 0,
    max: sizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: TABsizeUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Unit`]: TABsizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Range`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: val => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}TAB${controlName}Range`]: val
    }),
    min: min || 0,
    max: TABsizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  }))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: MOBsizeUnit => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Unit`]: MOBsizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: () => {
      setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Range`]: ''
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    requiredProps: requiredProps,
    controlName: controlName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: val => setAttributes({
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}MOB${controlName}Range`]: val
    }),
    min: min || 0,
    max: MOBsizeUnit === '%' ? 100 : max || 100,
    step: step || 1
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ResRangeControl);

/***/ }),

/***/ "./src/controls/reset-btn/index.js":
/*!*****************************************!*\
  !*** ./src/controls/reset-btn/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ResetBtn = ({
  onReset
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-reset-control-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: onReset
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V6.5H7.25C7.66421 6.5 8 6.83579 8 7.25C8 7.66421 7.66421 8 7.25 8H2.75C2.33579 8 2 7.66421 2 7.25V2.75C2 2.33579 2.33579 2 2.75 2Z",
    fill: "#4d4d4d"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.29365 3.75C6.56527 3.75 5.07807 4.79769 4.42654 6.30028C4.26196 6.67984 3.82318 6.8531 3.4465 6.68726C3.06981 6.52143 2.89787 6.07929 3.06245 5.69972C3.94232 3.6705 5.95253 2.25 8.29365 2.25C11.4452 2.25 14 4.82436 14 8C14 11.1756 11.4452 13.75 8.29365 13.75C6.42651 13.75 4.76879 12.8456 3.72895 11.451C3.48203 11.1198 3.54828 10.6497 3.87693 10.4009C4.20558 10.1521 4.67217 10.2188 4.91909 10.55C5.68985 11.5837 6.91443 12.25 8.29365 12.25C10.623 12.25 12.5114 10.3472 12.5114 8C12.5114 5.65279 10.623 3.75 8.29365 3.75Z",
    fill: "#4d4d4d"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ResetBtn);

/***/ }),

/***/ "./src/controls/reset-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/reset-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ResetControl = ({
  onReset,
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-reset-control-container"
  }, children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: onReset
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./src/controls/sortable-control/droppable.js":
/*!****************************************************!*\
  !*** ./src/controls/sortable-control/droppable.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");

/**
 * WordPress dependencies
 */


const Droppable = ({
  id,
  items,
  children
}) => {
  const {
    setNodeRef
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({
    id
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.SortableContext, {
    id: id,
    items: items,
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.rectSortingStrategy
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: setNodeRef,
    className: "dnd-items-wrapper"
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Droppable);

/***/ }),

/***/ "./src/controls/sortable-control/index.js":
/*!************************************************!*\
  !*** ./src/controls/sortable-control/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./droppable */ "./src/controls/sortable-control/droppable.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const SortableControl = ({
  defaultItems,
  attributeName,
  setAttributes,
  children
}) => {
  const handleDragEnd = ({
    active,
    over
  }) => {
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;
      const newItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.arrayMove)(defaultItems, activeIndex, overIndex);
      setAttributes({
        [attributeName]: newItems
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.DndContext, {
    onDragEnd: handleDragEnd
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_droppable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.verticalListSortingStrategy,
    id: "group",
    items: defaultItems,
    key: "group"
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (SortableControl);

/***/ }),

/***/ "./src/controls/sortable-control/sortableitem.js":
/*!*******************************************************!*\
  !*** ./src/controls/sortable-control/sortableitem.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");



const SortableItem = props => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__.useSortable)({
    id: props.id
  });
  const itemStyle = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(transform),
    transition,
    border: isOver ? '2px solid #4747FF' : undefined,
    borderRadius: '6px'
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: itemStyle,
    ref: setNodeRef,
    className: "dnd-fields-wrapper"
  }, props.children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    ...attributes,
    ...listeners,
    className: "float-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 12.5C9.55228 12.5 10 12.0523 10 11.5C10 10.9477 9.55228 10.5 9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 12.5C9.55228 12.5 10 12.0523 10 11.5C10 10.9477 9.55228 10.5 9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5Z",
    fill: "#39394D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z",
    fill: "#39394D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z",
    fill: "#39394D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 12.5C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5C14.4477 10.5 14 10.9477 14 11.5C14 12.0523 14.4477 12.5 15 12.5Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 12.5C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5C14.4477 10.5 14 10.9477 14 11.5C14 12.0523 14.4477 12.5 15 12.5Z",
    fill: "#39394D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z",
    fill: "#39394D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z",
    fill: "#4D4D4D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z",
    fill: "#39394D"
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SortableItem);

/***/ }),

/***/ "./src/controls/star-rating/index.js":
/*!*******************************************!*\
  !*** ./src/controls/star-rating/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Internal dependencies
 */

const StarRating = ({
  total = 5,
  rating
}) => {
  const fraction = Math.round((rating - Math.floor(rating)) * 10) / 10;
  const filled = Math.floor(rating);
  const empty = total - Math.ceil(rating);
  let fillItems = [];
  for (let i = 0; i < filled; i++) {
    fillItems.push(i);
  }
  let emptyItems = [];
  for (let j = 0; j < empty; j++) {
    emptyItems.push(j);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-star-rating"
  }, filled > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "filled-star"
  }, fillItems && fillItems.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 49.23 48.44"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M49.05,21.06a1.9,1.9,0,0,0,.46-2A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2l-2.39-14.2V31.69Z",
      transform: "translate(-0.39 -0.78)"
    }));
  })), fraction > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "fraction-star"
  }, fraction === 0.1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.62,31.78,9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0l-13,7,2.49-15a1.89,1.89,0,0,0-.53-1.67L7,24.33V19.08l10.05-1.51a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.62,31.78,9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L11.5,46.94V44.76l2.09-12.65a1.89,1.89,0,0,0-.53-1.67L11.5,28.86V18.4l5.55-.83a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L16,44.49V17.73l1.05-.16a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.4 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L20.5,42V12.28L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.5 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.89,1.89,0,0,0-.92-.24v-37L31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.6 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15L29.5,42V12.31l2,4.19A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.7 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15L34,44.49V17.73l13.53,2Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.8 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1Zm-11,9.77V18.4l9,1.36Z",
    transform: "translate(-0.39 -0.78)"
  })), fraction === 0.9 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49.23 48.44"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.05,21.06a1.9,1.9,0,0,0,.46-2A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2l-2.39-14.2V31.69Zm-6,3.25V19.08l4.52.68Z",
    transform: "translate(-0.39 -0.78)"
  }))), empty > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "empty-star"
  }, emptyItems && emptyItems.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 49.23 48.44"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M49.62,18.85a1.9,1.9,0,0,0-1.54-1.29L33.4,15.38,26.84,1.63a1.92,1.92,0,0,0-3.47,0L16.86,15.34,2.13,17.56a1.92,1.92,0,0,0-1.08,3.25L11.73,31.53,9.21,46.73A1.93,1.93,0,0,0,11.1,49a2,2,0,0,0,.92-.23L25.07,41.6l13.11,7.14a1.93,1.93,0,0,0,2.82-2L38.46,31.6l10.7-10.79A1.92,1.92,0,0,0,49.62,18.85ZM37,30.19a1.94,1.94,0,0,0-.53,1.67L39,46.9l-13-7a1.88,1.88,0,0,0-1.84,0l-13,7,2.5-15a1.94,1.94,0,0,0-.53-1.67L2.57,19.51l14.59-2.19a2,2,0,0,0,1.45-1.08L25.08,2.58,31.6,16.25a2,2,0,0,0,1.45,1.07l14.58,2.19Z",
      transform: "translate(-0.49 -0.53)"
    }));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (StarRating);

/***/ }),

/***/ "./src/controls/tabpanel-control/index.js":
/*!************************************************!*\
  !*** ./src/controls/tabpanel-control/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const TabPanelControl = ({
  normalComponents,
  hoverComponents,
  options = []
}) => {
  const availableOptions = options.length > 0 ? options : _global_constants__WEBPACK_IMPORTED_MODULE_2__.NORMAL_HOVER;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "zolo-tab-panel",
    activeClass: "active-tab",
    tabs: availableOptions.map(({
      value,
      label
    }) => ({
      name: value,
      title: label,
      className: `zolo-tab ${value}`
    }))
  }, tab => {
    if ('normal' === tab.name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, normalComponents);
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hoverComponents);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanelControl);

/***/ }),

/***/ "./src/controls/textshadow-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/textshadow-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _color_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-btn */ "./src/controls/color-btn/index.js");




/**
 * Internal dependencies
 */




function TextShadowControl({
  label = '',
  controlName,
  requiredProps
}) {
  const {
    setAttributes,
    attributes
  } = requiredProps;
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}shadowUnit`]: shadowUnit,
    [`${controlName}hShadow`]: hShadow,
    [`${controlName}vShadow`]: vShadow,
    [`${controlName}blur`]: blur
  } = attributes;
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: 'em',
    value: 'em'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-label-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: shadowUnit,
    unitTypes: defaultUnits,
    onClick: sizeUnit => setAttributes({
      [`${controlName}shadowUnit`]: sizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onReset: () => {
      setAttributes({
        [`${controlName}shadowUnit`]: 'px',
        [`${controlName}shadowColor`]: '',
        [`${controlName}hShadow`]: '',
        [`${controlName}vShadow`]: '',
        [`${controlName}blur`]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: shadowColor,
    onChange: value => setAttributes({
      [`${controlName}shadowColor`]: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Shadow', 'zolo-blocks'),
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true,
    noResponsive: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow-options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: hShadow => setAttributes({
      [`${controlName}hShadow`]: parseInt(hShadow)
    }),
    value: hShadow,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('X', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: vShadow => setAttributes({
      [`${controlName}vShadow`]: parseInt(vShadow)
    }),
    value: vShadow,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Y', 'zolo-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: blur => setAttributes({
      [`${controlName}blur`]: parseInt(blur)
    }),
    value: blur,
    min: 0,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'zolo-blocks')))))));
}
/* harmony default export */ __webpack_exports__["default"] = (TextShadowControl);

/***/ }),

/***/ "./src/controls/textstroke-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/textstroke-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _color_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-btn */ "./src/controls/color-btn/index.js");




/**
 * Internal dependencies
 */




function TextShadowControl({
  label = '',
  controlName,
  requiredProps
}) {
  const {
    attributes,
    setAttributes,
    resMode,
    objAttributes
  } = requiredProps;
  const strokeWidthAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeWidth`;
  const strokeUnitAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeUnit`;
  const strokeWidthVal = attributes[strokeWidthAttr];
  const strokeUnitVal = attributes[strokeUnitAttr];
  const {
    [`${controlName}strokeColor`]: strokeColor
  } = attributes;
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: 'em',
    value: 'em'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-label-area"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedUnit: strokeUnitVal,
    unitTypes: defaultUnits,
    onClick: sizeUnit => setAttributes({
      [strokeUnitAttr]: sizeUnit
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onReset: () => {
      setAttributes({
        [strokeUnitAttr]: 'px',
        [`${controlName}strokeColor`]: '',
        [strokeWidthAttr]: ''
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: strokeColor,
    onChange: value => setAttributes({
      [`${controlName}strokeColor`]: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Stroke', 'zolo-blocks'),
    requiredProps: requiredProps,
    controlName: controlName,
    noResetBtn: true,
    noResponsive: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-box-shadow-options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-shadow-input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: strokeWidthVal,
    onChange: val => setAttributes({
      [strokeWidthAttr]: val
    }),
    min: 0,
    max: strokeUnitVal === 'em' || strokeUnitVal === 'rem' ? 1 : 10,
    step: strokeUnitVal === 'em' || strokeUnitVal === 'rem' ? 0.1 : 1
  })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (TextShadowControl);

/***/ }),

/***/ "./src/controls/typography-control/constant.js":
/*!*****************************************************!*\
  !*** ./src/controls/typography-control/constant.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LHLS_UNITS: function() { return /* binding */ LHLS_UNITS; },
/* harmony export */   fontStyleOptions: function() { return /* binding */ fontStyleOptions; },
/* harmony export */   fontWeightOptions: function() { return /* binding */ fontWeightOptions; },
/* harmony export */   sizeUnitTypes: function() { return /* binding */ sizeUnitTypes; },
/* harmony export */   textDecorationOptions: function() { return /* binding */ textDecorationOptions; },
/* harmony export */   textTransformOptions: function() { return /* binding */ textTransformOptions; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const sizeUnitTypes = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}, {
  label: 'em',
  value: 'em'
}];
const fontWeightOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zolo-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100', 'zolo-blocks'),
  value: '100'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('200', 'zolo-blocks'),
  value: '200'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('300', 'zolo-blocks'),
  value: '300'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('400', 'zolo-blocks'),
  value: '400'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('500', 'zolo-blocks'),
  value: '500'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('600', 'zolo-blocks'),
  value: '600'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('700', 'zolo-blocks'),
  value: '700'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('800', 'zolo-blocks'),
  value: '800'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('900', 'zolo-blocks'),
  value: '900'
}];
const textTransformOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zolo-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'zolo-blocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lowercase', 'zolo-blocks'),
  value: 'lowercase'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Capitalize', 'zolo-blocks'),
  value: 'capitalize'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Uppercase', 'zolo-blocks'),
  value: 'uppercase'
}];
const textDecorationOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zolo-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'zolo-blocks'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overline', 'zolo-blocks'),
  value: 'overline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line Through', 'zolo-blocks'),
  value: 'line-through'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline', 'zolo-blocks'),
  value: 'underline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline Oveline', 'zolo-blocks'),
  value: 'underline overline'
}];
const fontStyleOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'zolo-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'zolo-blocks'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Italic', 'zolo-blocks'),
  value: 'italic'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Oblique', 'zolo-blocks'),
  value: 'oblique'
}];
const LHLS_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./src/controls/typography-control/fontPicker/googleFonts.js":
/*!*******************************************************************!*\
  !*** ./src/controls/typography-control/fontPicker/googleFonts.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   googleFonts: function() { return /* binding */ googleFonts; }
/* harmony export */ });
const googleFonts = {
  ABeeZee: {
    family: 'ABeeZee',
    category: 'sans-serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Abel: {
    family: 'Abel',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Abhaya-Libre': {
    family: 'Abhaya Libre',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'sinhala']
  },
  'Abril-Fatface': {
    family: 'Abril Fatface',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Aclonica: {
    family: 'Aclonica',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Acme: {
    family: 'Acme',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Actor: {
    family: 'Actor',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Adamina: {
    family: 'Adamina',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Advent-Pro': {
    family: 'Advent Pro',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['greek', 'latin', 'latin-ext']
  },
  'Aguafina-Script': {
    family: 'Aguafina Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Akaya-Kanadaka': {
    family: 'Akaya Kanadaka',
    category: 'display',
    variants: ['regular'],
    subsets: ['kannada', 'latin', 'latin-ext']
  },
  'Akaya-Telivigala': {
    family: 'Akaya Telivigala',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'telugu']
  },
  Akronim: {
    family: 'Akronim',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Aladin: {
    family: 'Aladin',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Alata: {
    family: 'Alata',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Alatsi: {
    family: 'Alatsi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Aldrich: {
    family: 'Aldrich',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Alef: {
    family: 'Alef',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['hebrew', 'latin']
  },
  Alegreya: {
    family: 'Alegreya',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Alegreya-SC': {
    family: 'Alegreya SC',
    category: 'serif',
    variants: ['regular', 'italic', '500', '500italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Alegreya-Sans': {
    family: 'Alegreya Sans',
    category: 'sans-serif',
    variants: ['100', '100italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Alegreya-Sans-SC': {
    family: 'Alegreya Sans SC',
    category: 'sans-serif',
    variants: ['100', '100italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Aleo: {
    family: 'Aleo',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Alex-Brush': {
    family: 'Alex Brush',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Alfa-Slab-One': {
    family: 'Alfa Slab One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Alice: {
    family: 'Alice',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin']
  },
  Alike: {
    family: 'Alike',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Alike-Angular': {
    family: 'Alike Angular',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Allan: {
    family: 'Allan',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Allerta: {
    family: 'Allerta',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Allerta-Stencil': {
    family: 'Allerta Stencil',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Allison: {
    family: 'Allison',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Allura: {
    family: 'Allura',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Almarai: {
    family: 'Almarai',
    category: 'sans-serif',
    variants: ['300', 'regular', '700', '800'],
    subsets: ['arabic']
  },
  Almendra: {
    family: 'Almendra',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Almendra-Display': {
    family: 'Almendra Display',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Almendra-SC': {
    family: 'Almendra SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Alumni-Sans': {
    family: 'Alumni Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Amarante: {
    family: 'Amarante',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Amaranth: {
    family: 'Amaranth',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Amatic-SC': {
    family: 'Amatic SC',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['cyrillic', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  Amethysta: {
    family: 'Amethysta',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Amiko: {
    family: 'Amiko',
    category: 'sans-serif',
    variants: ['regular', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Amiri: {
    family: 'Amiri',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  Amita: {
    family: 'Amita',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Anaheim: {
    family: 'Anaheim',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Andada-Pro': {
    family: 'Andada Pro',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Andika: {
    family: 'Andika',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Andika-New-Basic': {
    family: 'Andika New Basic',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Angkor: {
    family: 'Angkor',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Annie-Use-Your-Telescope': {
    family: 'Annie Use Your Telescope',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Anonymous-Pro': {
    family: 'Anonymous Pro',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'greek', 'latin', 'latin-ext']
  },
  Antic: {
    family: 'Antic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Antic-Didone': {
    family: 'Antic Didone',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Antic-Slab': {
    family: 'Antic Slab',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Anton: {
    family: 'Anton',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Antonio: {
    family: 'Antonio',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Arapey: {
    family: 'Arapey',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Arbutus: {
    family: 'Arbutus',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Arbutus-Slab': {
    family: 'Arbutus Slab',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Architects-Daughter': {
    family: 'Architects Daughter',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Archivo: {
    family: 'Archivo',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Archivo-Black': {
    family: 'Archivo Black',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Archivo-Narrow': {
    family: 'Archivo Narrow',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Are-You-Serious': {
    family: 'Are You Serious',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Aref-Ruqaa': {
    family: 'Aref Ruqaa',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  'Arima-Madurai': {
    family: 'Arima Madurai',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'tamil', 'vietnamese']
  },
  Arimo: {
    family: 'Arimo',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  Arizonia: {
    family: 'Arizonia',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Armata: {
    family: 'Armata',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Arsenal: {
    family: 'Arsenal',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Artifika: {
    family: 'Artifika',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Arvo: {
    family: 'Arvo',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  Arya: {
    family: 'Arya',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Asap: {
    family: 'Asap',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Asap-Condensed': {
    family: 'Asap Condensed',
    category: 'sans-serif',
    variants: ['regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Asar: {
    family: 'Asar',
    category: 'serif',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Asset: {
    family: 'Asset',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Assistant: {
    family: 'Assistant',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  Astloch: {
    family: 'Astloch',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Asul: {
    family: 'Asul',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Athiti: {
    family: 'Athiti',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Atkinson-Hyperlegible': {
    family: 'Atkinson Hyperlegible',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Atma: {
    family: 'Atma',
    category: 'display',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['bengali', 'latin', 'latin-ext']
  },
  'Atomic-Age': {
    family: 'Atomic Age',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Aubrey: {
    family: 'Aubrey',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Audiowide: {
    family: 'Audiowide',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Autour-One': {
    family: 'Autour One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Average: {
    family: 'Average',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Average-Sans': {
    family: 'Average Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Averia-Gruesa-Libre': {
    family: 'Averia Gruesa Libre',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Averia-Libre': {
    family: 'Averia Libre',
    category: 'display',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Averia-Sans-Libre': {
    family: 'Averia Sans Libre',
    category: 'display',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Averia-Serif-Libre': {
    family: 'Averia Serif Libre',
    category: 'display',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Azeret-Mono': {
    family: 'Azeret Mono',
    category: 'monospace',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  B612: {
    family: 'B612',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'B612-Mono': {
    family: 'B612 Mono',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Bad-Script': {
    family: 'Bad Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin']
  },
  Bahiana: {
    family: 'Bahiana',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Bahianita: {
    family: 'Bahianita',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bai-Jamjuree': {
    family: 'Bai Jamjuree',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Ballet: {
    family: 'Ballet',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-2': {
    family: 'Baloo 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-Bhai-2': {
    family: 'Baloo Bhai 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['gujarati', 'latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-Bhaina-2': {
    family: 'Baloo Bhaina 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'oriya', 'vietnamese']
  },
  'Baloo-Chettan-2': {
    family: 'Baloo Chettan 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'malayalam', 'vietnamese']
  },
  'Baloo-Da-2': {
    family: 'Baloo Da 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['bengali', 'latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-Paaji-2': {
    family: 'Baloo Paaji 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['gurmukhi', 'latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-Tamma-2': {
    family: 'Baloo Tamma 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['kannada', 'latin', 'latin-ext', 'vietnamese']
  },
  'Baloo-Tammudu-2': {
    family: 'Baloo Tammudu 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'telugu', 'vietnamese']
  },
  'Baloo-Thambi-2': {
    family: 'Baloo Thambi 2',
    category: 'display',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'tamil', 'vietnamese']
  },
  'Balsamiq-Sans': {
    family: 'Balsamiq Sans',
    category: 'display',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Balthazar: {
    family: 'Balthazar',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Bangers: {
    family: 'Bangers',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Barlow: {
    family: 'Barlow',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Barlow-Condensed': {
    family: 'Barlow Condensed',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Barlow-Semi-Condensed': {
    family: 'Barlow Semi Condensed',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Barriecito: {
    family: 'Barriecito',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Barrio: {
    family: 'Barrio',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Basic: {
    family: 'Basic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Baskervville: {
    family: 'Baskervville',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Battambang: {
    family: 'Battambang',
    category: 'display',
    variants: ['100', '300', 'regular', '700', '900'],
    subsets: ['khmer', 'latin']
  },
  Baumans: {
    family: 'Baumans',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Bayon: {
    family: 'Bayon',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Be-Vietnam': {
    family: 'Be Vietnam',
    category: 'sans-serif',
    variants: ['100', '100italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Be-Vietnam-Pro': {
    family: 'Be Vietnam Pro',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bebas-Neue': {
    family: 'Bebas Neue',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Belgrano: {
    family: 'Belgrano',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Bellefair: {
    family: 'Bellefair',
    category: 'serif',
    variants: ['regular'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  Belleza: {
    family: 'Belleza',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Bellota: {
    family: 'Bellota',
    category: 'display',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Bellota-Text': {
    family: 'Bellota Text',
    category: 'display',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  BenchNine: {
    family: 'BenchNine',
    category: 'sans-serif',
    variants: ['300', 'regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Benne: {
    family: 'Benne',
    category: 'serif',
    variants: ['regular'],
    subsets: ['kannada', 'latin', 'latin-ext']
  },
  Bentham: {
    family: 'Bentham',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Berkshire-Swash': {
    family: 'Berkshire Swash',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Besley: {
    family: 'Besley',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Beth-Ellen': {
    family: 'Beth Ellen',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Bevan: {
    family: 'Bevan',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Display': {
    family: 'Big Shoulders Display',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Inline-Display': {
    family: 'Big Shoulders Inline Display',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Inline-Text': {
    family: 'Big Shoulders Inline Text',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Stencil-Display': {
    family: 'Big Shoulders Stencil Display',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Stencil-Text': {
    family: 'Big Shoulders Stencil Text',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Big-Shoulders-Text': {
    family: 'Big Shoulders Text',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bigelow-Rules': {
    family: 'Bigelow Rules',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Bigshot-One': {
    family: 'Bigshot One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Bilbo: {
    family: 'Bilbo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bilbo-Swash-Caps': {
    family: 'Bilbo Swash Caps',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  BioRhyme: {
    family: 'BioRhyme',
    category: 'serif',
    variants: ['200', '300', 'regular', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'BioRhyme-Expanded': {
    family: 'BioRhyme Expanded',
    category: 'serif',
    variants: ['200', '300', 'regular', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  Birthstone: {
    family: 'Birthstone',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Birthstone-Bounce': {
    family: 'Birthstone Bounce',
    category: 'handwriting',
    variants: ['regular', '500'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Biryani: {
    family: 'Biryani',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '600', '700', '800', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Bitter: {
    family: 'Bitter',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Black-And-White-Picture': {
    family: 'Black And White Picture',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Black-Han-Sans': {
    family: 'Black Han Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Black-Ops-One': {
    family: 'Black Ops One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Blinker: {
    family: 'Blinker',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Bodoni-Moda': {
    family: 'Bodoni Moda',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  Bokor: {
    family: 'Bokor',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Bona-Nova': {
    family: 'Bona Nova',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  Bonbon: {
    family: 'Bonbon',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Bonheur-Royale': {
    family: 'Bonheur Royale',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Boogaloo: {
    family: 'Boogaloo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Bowlby-One': {
    family: 'Bowlby One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Bowlby-One-SC': {
    family: 'Bowlby One SC',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Brawler: {
    family: 'Brawler',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Bree-Serif': {
    family: 'Bree Serif',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Brygada-1918': {
    family: 'Brygada 1918',
    category: 'serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Bubblegum-Sans': {
    family: 'Bubblegum Sans',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Bubbler-One': {
    family: 'Bubbler One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Buda: {
    family: 'Buda',
    category: 'display',
    variants: ['300'],
    subsets: ['latin']
  },
  Buenard: {
    family: 'Buenard',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Bungee: {
    family: 'Bungee',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bungee-Hairline': {
    family: 'Bungee Hairline',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bungee-Inline': {
    family: 'Bungee Inline',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bungee-Outline': {
    family: 'Bungee Outline',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Bungee-Shade': {
    family: 'Bungee Shade',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Butcherman: {
    family: 'Butcherman',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Butterfly-Kids': {
    family: 'Butterfly Kids',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Cabin: {
    family: 'Cabin',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Cabin-Condensed': {
    family: 'Cabin Condensed',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Cabin-Sketch': {
    family: 'Cabin Sketch',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  'Caesar-Dressing': {
    family: 'Caesar Dressing',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Cagliostro: {
    family: 'Cagliostro',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Cairo: {
    family: 'Cairo',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  Caladea: {
    family: 'Caladea',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Calistoga: {
    family: 'Calistoga',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Calligraffitti: {
    family: 'Calligraffitti',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Cambay: {
    family: 'Cambay',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Cambo: {
    family: 'Cambo',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Candal: {
    family: 'Candal',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Cantarell: {
    family: 'Cantarell',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Cantata-One': {
    family: 'Cantata One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Cantora-One': {
    family: 'Cantora One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Capriola: {
    family: 'Capriola',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Caramel: {
    family: 'Caramel',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Carattere: {
    family: 'Carattere',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Cardo: {
    family: 'Cardo',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['greek', 'greek-ext', 'latin', 'latin-ext']
  },
  Carme: {
    family: 'Carme',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Carrois-Gothic': {
    family: 'Carrois Gothic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Carrois-Gothic-SC': {
    family: 'Carrois Gothic SC',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Carter-One': {
    family: 'Carter One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Castoro: {
    family: 'Castoro',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Catamaran: {
    family: 'Catamaran',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'tamil']
  },
  Caudex: {
    family: 'Caudex',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['greek', 'greek-ext', 'latin', 'latin-ext']
  },
  Caveat: {
    family: 'Caveat',
    category: 'handwriting',
    variants: ['regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'Caveat-Brush': {
    family: 'Caveat Brush',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Cedarville-Cursive': {
    family: 'Cedarville Cursive',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Ceviche-One': {
    family: 'Ceviche One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Chakra-Petch': {
    family: 'Chakra Petch',
    category: 'sans-serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Changa: {
    family: 'Changa',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  'Changa-One': {
    family: 'Changa One',
    category: 'display',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Chango: {
    family: 'Chango',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Charm: {
    family: 'Charm',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Charmonman: {
    family: 'Charmonman',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Chathura: {
    family: 'Chathura',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '700', '800'],
    subsets: ['latin', 'telugu']
  },
  'Chau-Philomene-One': {
    family: 'Chau Philomene One',
    category: 'sans-serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Chela-One': {
    family: 'Chela One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Chelsea-Market': {
    family: 'Chelsea Market',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Chenla: {
    family: 'Chenla',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer']
  },
  Cherish: {
    family: 'Cherish',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Cherry-Cream-Soda': {
    family: 'Cherry Cream Soda',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Cherry-Swash': {
    family: 'Cherry Swash',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Chewy: {
    family: 'Chewy',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Chicle: {
    family: 'Chicle',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Chilanka: {
    family: 'Chilanka',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'malayalam']
  },
  Chivo: {
    family: 'Chivo',
    category: 'sans-serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  Chonburi: {
    family: 'Chonburi',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Cinzel: {
    family: 'Cinzel',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Cinzel-Decorative': {
    family: 'Cinzel Decorative',
    category: 'display',
    variants: ['regular', '700', '900'],
    subsets: ['latin']
  },
  'Clicker-Script': {
    family: 'Clicker Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Coda: {
    family: 'Coda',
    category: 'display',
    variants: ['regular', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'Coda-Caption': {
    family: 'Coda Caption',
    category: 'sans-serif',
    variants: ['800'],
    subsets: ['latin', 'latin-ext']
  },
  Codystar: {
    family: 'Codystar',
    category: 'display',
    variants: ['300', 'regular'],
    subsets: ['latin', 'latin-ext']
  },
  Coiny: {
    family: 'Coiny',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'tamil', 'vietnamese']
  },
  Combo: {
    family: 'Combo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Comfortaa: {
    family: 'Comfortaa',
    category: 'display',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  Comforter: {
    family: 'Comforter',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Comforter-Brush': {
    family: 'Comforter Brush',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Comic-Neue': {
    family: 'Comic Neue',
    category: 'handwriting',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Coming-Soon': {
    family: 'Coming Soon',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Commissioner: {
    family: 'Commissioner',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Concert-One': {
    family: 'Concert One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Condiment: {
    family: 'Condiment',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Content: {
    family: 'Content',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['khmer']
  },
  'Contrail-One': {
    family: 'Contrail One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Convergence: {
    family: 'Convergence',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Cookie: {
    family: 'Cookie',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Copse: {
    family: 'Copse',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Corben: {
    family: 'Corben',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Cormorant: {
    family: 'Cormorant',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cormorant-Garamond': {
    family: 'Cormorant Garamond',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cormorant-Infant': {
    family: 'Cormorant Infant',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cormorant-SC': {
    family: 'Cormorant SC',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cormorant-Unicase': {
    family: 'Cormorant Unicase',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cormorant-Upright': {
    family: 'Cormorant Upright',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Courgette: {
    family: 'Courgette',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Courier-Prime': {
    family: 'Courier Prime',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Cousine: {
    family: 'Cousine',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  Coustard: {
    family: 'Coustard',
    category: 'serif',
    variants: ['regular', '900'],
    subsets: ['latin']
  },
  'Covered-By-Your-Grace': {
    family: 'Covered By Your Grace',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Crafty-Girls': {
    family: 'Crafty Girls',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Creepster: {
    family: 'Creepster',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Crete-Round': {
    family: 'Crete Round',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Crimson-Pro': {
    family: 'Crimson Pro',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '900', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Crimson-Text': {
    family: 'Crimson Text',
    category: 'serif',
    variants: ['regular', 'italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Croissant-One': {
    family: 'Croissant One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Crushed: {
    family: 'Crushed',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Cuprum: {
    family: 'Cuprum',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Cute-Font': {
    family: 'Cute Font',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Cutive: {
    family: 'Cutive',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Cutive-Mono': {
    family: 'Cutive Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'DM-Mono': {
    family: 'DM Mono',
    category: 'monospace',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic'],
    subsets: ['latin', 'latin-ext']
  },
  'DM-Sans': {
    family: 'DM Sans',
    category: 'sans-serif',
    variants: ['regular', 'italic', '500', '500italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'DM-Serif-Display': {
    family: 'DM Serif Display',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'DM-Serif-Text': {
    family: 'DM Serif Text',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Damion: {
    family: 'Damion',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Dancing-Script': {
    family: 'Dancing Script',
    category: 'handwriting',
    variants: ['regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Dangrek: {
    family: 'Dangrek',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Darker-Grotesque': {
    family: 'Darker Grotesque',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'David-Libre': {
    family: 'David Libre',
    category: 'serif',
    variants: ['regular', '500', '700'],
    subsets: ['hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  'Dawning-of-a-New-Day': {
    family: 'Dawning of a New Day',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Days-One': {
    family: 'Days One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Dekko: {
    family: 'Dekko',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Dela-Gothic-One': {
    family: 'Dela Gothic One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  Delius: {
    family: 'Delius',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Delius-Swash-Caps': {
    family: 'Delius Swash Caps',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Delius-Unicase': {
    family: 'Delius Unicase',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  'Della-Respira': {
    family: 'Della Respira',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Denk-One': {
    family: 'Denk One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Devonshire: {
    family: 'Devonshire',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Dhurjati: {
    family: 'Dhurjati',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  'Didact-Gothic': {
    family: 'Didact Gothic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  Diplomata: {
    family: 'Diplomata',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Diplomata-SC': {
    family: 'Diplomata SC',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Do-Hyeon': {
    family: 'Do Hyeon',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Dokdo: {
    family: 'Dokdo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Domine: {
    family: 'Domine',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Donegal-One': {
    family: 'Donegal One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Dongle: {
    family: 'Dongle',
    category: 'sans-serif',
    variants: ['300', 'regular', '700'],
    subsets: ['korean', 'latin', 'latin-ext', 'vietnamese']
  },
  'Doppio-One': {
    family: 'Doppio One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Dorsa: {
    family: 'Dorsa',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Dosis: {
    family: 'Dosis',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  DotGothic16: {
    family: 'DotGothic16',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Dr-Sugiyama': {
    family: 'Dr Sugiyama',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Duru-Sans': {
    family: 'Duru Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Dynalight: {
    family: 'Dynalight',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'EB-Garamond': {
    family: 'EB Garamond',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Eagle-Lake': {
    family: 'Eagle Lake',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'East-Sea-Dokdo': {
    family: 'East Sea Dokdo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Eater: {
    family: 'Eater',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Economica: {
    family: 'Economica',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Eczar: {
    family: 'Eczar',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'El-Messiri': {
    family: 'El Messiri',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['arabic', 'cyrillic', 'latin', 'latin-ext']
  },
  Electrolize: {
    family: 'Electrolize',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Elsie: {
    family: 'Elsie',
    category: 'display',
    variants: ['regular', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Elsie-Swash-Caps': {
    family: 'Elsie Swash Caps',
    category: 'display',
    variants: ['regular', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Emblema-One': {
    family: 'Emblema One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Emilys-Candy': {
    family: 'Emilys Candy',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Encode-Sans': {
    family: 'Encode Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Encode-Sans-Condensed': {
    family: 'Encode Sans Condensed',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Encode-Sans-Expanded': {
    family: 'Encode Sans Expanded',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Encode-Sans-SC': {
    family: 'Encode Sans SC',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Encode-Sans-Semi-Condensed': {
    family: 'Encode Sans Semi Condensed',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Encode-Sans-Semi-Expanded': {
    family: 'Encode Sans Semi Expanded',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Engagement: {
    family: 'Engagement',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Englebert: {
    family: 'Englebert',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Enriqueta: {
    family: 'Enriqueta',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Ephesis: {
    family: 'Ephesis',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Epilogue: {
    family: 'Epilogue',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Erica-One': {
    family: 'Erica One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Esteban: {
    family: 'Esteban',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Estonia: {
    family: 'Estonia',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Euphoria-Script': {
    family: 'Euphoria Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Ewert: {
    family: 'Ewert',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Exo: {
    family: 'Exo',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Exo-2': {
    family: 'Exo 2',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Expletus-Sans': {
    family: 'Expletus Sans',
    category: 'display',
    variants: ['regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin']
  },
  Explora: {
    family: 'Explora',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cherokee', 'latin', 'latin-ext', 'vietnamese']
  },
  Fahkwang: {
    family: 'Fahkwang',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Fanwood-Text': {
    family: 'Fanwood Text',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Farro: {
    family: 'Farro',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Farsan: {
    family: 'Farsan',
    category: 'display',
    variants: ['regular'],
    subsets: ['gujarati', 'latin', 'latin-ext', 'vietnamese']
  },
  Fascinate: {
    family: 'Fascinate',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Fascinate-Inline': {
    family: 'Fascinate Inline',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Faster-One': {
    family: 'Faster One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Fasthand: {
    family: 'Fasthand',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Fauna-One': {
    family: 'Fauna One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Faustina: {
    family: 'Faustina',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Federant: {
    family: 'Federant',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Federo: {
    family: 'Federo',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Felipa: {
    family: 'Felipa',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Fenix: {
    family: 'Fenix',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Festive: {
    family: 'Festive',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Finger-Paint': {
    family: 'Finger Paint',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Fira-Code': {
    family: 'Fira Code',
    category: 'monospace',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  'Fira-Mono': {
    family: 'Fira Mono',
    category: 'monospace',
    variants: ['regular', '500', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  'Fira-Sans': {
    family: 'Fira Sans',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Fira-Sans-Condensed': {
    family: 'Fira Sans Condensed',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Fira-Sans-Extra-Condensed': {
    family: 'Fira Sans Extra Condensed',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Fjalla-One': {
    family: 'Fjalla One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Fjord-One': {
    family: 'Fjord One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Flamenco: {
    family: 'Flamenco',
    category: 'display',
    variants: ['300', 'regular'],
    subsets: ['latin']
  },
  Flavors: {
    family: 'Flavors',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Fleur-De-Leah': {
    family: 'Fleur De Leah',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Flow-Block': {
    family: 'Flow Block',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Flow-Circular': {
    family: 'Flow Circular',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Flow-Rounded': {
    family: 'Flow Rounded',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Fondamento: {
    family: 'Fondamento',
    category: 'handwriting',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Fontdiner-Swanky': {
    family: 'Fontdiner Swanky',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Forum: {
    family: 'Forum',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'Francois-One': {
    family: 'Francois One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Frank-Ruhl-Libre': {
    family: 'Frank Ruhl Libre',
    category: 'serif',
    variants: ['300', 'regular', '500', '700', '900'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  Fraunces: {
    family: 'Fraunces',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Freckle-Face': {
    family: 'Freckle Face',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Fredericka-the-Great': {
    family: 'Fredericka the Great',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Fredoka-One': {
    family: 'Fredoka One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Freehand: {
    family: 'Freehand',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  Fresca: {
    family: 'Fresca',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Frijole: {
    family: 'Frijole',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Fruktur: {
    family: 'Fruktur',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Fugaz-One': {
    family: 'Fugaz One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Fuggles: {
    family: 'Fuggles',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'GFS-Didot': {
    family: 'GFS Didot',
    category: 'serif',
    variants: ['regular'],
    subsets: ['greek']
  },
  'GFS-Neohellenic': {
    family: 'GFS Neohellenic',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['greek']
  },
  Gabriela: {
    family: 'Gabriela',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin']
  },
  Gaegu: {
    family: 'Gaegu',
    category: 'handwriting',
    variants: ['300', 'regular', '700'],
    subsets: ['korean', 'latin']
  },
  Gafata: {
    family: 'Gafata',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Galada: {
    family: 'Galada',
    category: 'display',
    variants: ['regular'],
    subsets: ['bengali', 'latin']
  },
  Galdeano: {
    family: 'Galdeano',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Galindo: {
    family: 'Galindo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Gamja-Flower': {
    family: 'Gamja Flower',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Gayathri: {
    family: 'Gayathri',
    category: 'sans-serif',
    variants: ['100', 'regular', '700'],
    subsets: ['latin', 'malayalam']
  },
  Gelasio: {
    family: 'Gelasio',
    category: 'serif',
    variants: ['regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Gemunu-Libre': {
    family: 'Gemunu Libre',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'sinhala']
  },
  Genos: {
    family: 'Genos',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cherokee', 'latin', 'latin-ext', 'vietnamese']
  },
  'Gentium-Basic': {
    family: 'Gentium Basic',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Gentium-Book-Basic': {
    family: 'Gentium Book Basic',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Geo: {
    family: 'Geo',
    category: 'sans-serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Georama: {
    family: 'Georama',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Geostar: {
    family: 'Geostar',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Geostar-Fill': {
    family: 'Geostar Fill',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Germania-One': {
    family: 'Germania One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Gideon-Roman': {
    family: 'Gideon Roman',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Gidugu: {
    family: 'Gidugu',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  'Gilda-Display': {
    family: 'Gilda Display',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Girassol: {
    family: 'Girassol',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Give-You-Glory': {
    family: 'Give You Glory',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Glass-Antiqua': {
    family: 'Glass Antiqua',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Glegoo: {
    family: 'Glegoo',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Gloria-Hallelujah': {
    family: 'Gloria Hallelujah',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Glory: {
    family: 'Glory',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Gluten: {
    family: 'Gluten',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Goblin-One': {
    family: 'Goblin One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Gochi-Hand': {
    family: 'Gochi Hand',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Goldman: {
    family: 'Goldman',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Gorditas: {
    family: 'Gorditas',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  'Gothic-A1': {
    family: 'Gothic A1',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['korean', 'latin']
  },
  Gotu: {
    family: 'Gotu',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext', 'vietnamese']
  },
  'Goudy-Bookletter-1911': {
    family: 'Goudy Bookletter 1911',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Gowun-Batang': {
    family: 'Gowun Batang',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['korean', 'latin', 'latin-ext', 'vietnamese']
  },
  'Gowun-Dodum': {
    family: 'Gowun Dodum',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin', 'latin-ext', 'vietnamese']
  },
  Graduate: {
    family: 'Graduate',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Grand-Hotel': {
    family: 'Grand Hotel',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Grandstander: {
    family: 'Grandstander',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Gravitas-One': {
    family: 'Gravitas One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Great-Vibes': {
    family: 'Great Vibes',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Grechen-Fuemen': {
    family: 'Grechen Fuemen',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Grenze: {
    family: 'Grenze',
    category: 'serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Grenze-Gotisch': {
    family: 'Grenze Gotisch',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Grey-Qo': {
    family: 'Grey Qo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Griffy: {
    family: 'Griffy',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Gruppo: {
    family: 'Gruppo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Gudea: {
    family: 'Gudea',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Gugi: {
    family: 'Gugi',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Gupter: {
    family: 'Gupter',
    category: 'serif',
    variants: ['regular', '500', '700'],
    subsets: ['latin']
  },
  Gurajada: {
    family: 'Gurajada',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Habibi: {
    family: 'Habibi',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Hachi-Maru-Pop': {
    family: 'Hachi Maru Pop',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Hahmlet: {
    family: 'Hahmlet',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['korean', 'latin', 'latin-ext', 'vietnamese']
  },
  Halant: {
    family: 'Halant',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Hammersmith-One': {
    family: 'Hammersmith One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Hanalei: {
    family: 'Hanalei',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Hanalei-Fill': {
    family: 'Hanalei Fill',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Handlee: {
    family: 'Handlee',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Hanuman: {
    family: 'Hanuman',
    category: 'serif',
    variants: ['100', '300', 'regular', '700', '900'],
    subsets: ['khmer', 'latin']
  },
  'Happy-Monkey': {
    family: 'Happy Monkey',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Harmattan: {
    family: 'Harmattan',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  'Headland-One': {
    family: 'Headland One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Heebo: {
    family: 'Heebo',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['hebrew', 'latin']
  },
  'Henny-Penny': {
    family: 'Henny Penny',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Hepta-Slab': {
    family: 'Hepta Slab',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Herr-Von-Muellerhoff': {
    family: 'Herr Von Muellerhoff',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Hi-Melody': {
    family: 'Hi Melody',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Hina-Mincho': {
    family: 'Hina Mincho',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  Hind: {
    family: 'Hind',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Hind-Guntur': {
    family: 'Hind Guntur',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'telugu']
  },
  'Hind-Madurai': {
    family: 'Hind Madurai',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'tamil']
  },
  'Hind-Siliguri': {
    family: 'Hind Siliguri',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['bengali', 'latin', 'latin-ext']
  },
  'Hind-Vadodara': {
    family: 'Hind Vadodara',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  'Holtwood-One-SC': {
    family: 'Holtwood One SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Homemade-Apple': {
    family: 'Homemade Apple',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Homenaje: {
    family: 'Homenaje',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Hurricane: {
    family: 'Hurricane',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'IBM-Plex-Mono': {
    family: 'IBM Plex Mono',
    category: 'monospace',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'IBM-Plex-Sans': {
    family: 'IBM Plex Sans',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'IBM-Plex-Sans-Arabic': {
    family: 'IBM Plex Sans Arabic',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['arabic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'IBM-Plex-Sans-Condensed': {
    family: 'IBM Plex Sans Condensed',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'IBM-Plex-Sans-Devanagari': {
    family: 'IBM Plex Sans Devanagari',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic-ext', 'devanagari', 'latin', 'latin-ext']
  },
  'IBM-Plex-Sans-Hebrew': {
    family: 'IBM Plex Sans Hebrew',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic-ext', 'hebrew', 'latin', 'latin-ext']
  },
  'IBM-Plex-Sans-KR': {
    family: 'IBM Plex Sans KR',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['korean', 'latin', 'latin-ext']
  },
  'IBM-Plex-Sans-Thai': {
    family: 'IBM Plex Sans Thai',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'thai']
  },
  'IBM-Plex-Sans-Thai-Looped': {
    family: 'IBM Plex Sans Thai Looped',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'thai']
  },
  'IBM-Plex-Serif': {
    family: 'IBM Plex Serif',
    category: 'serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'IM-Fell-DW-Pica': {
    family: 'IM Fell DW Pica',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'IM-Fell-DW-Pica-SC': {
    family: 'IM Fell DW Pica SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'IM-Fell-Double-Pica': {
    family: 'IM Fell Double Pica',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'IM-Fell-Double-Pica-SC': {
    family: 'IM Fell Double Pica SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'IM-Fell-English': {
    family: 'IM Fell English',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'IM-Fell-English-SC': {
    family: 'IM Fell English SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'IM-Fell-French-Canon': {
    family: 'IM Fell French Canon',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'IM-Fell-French-Canon-SC': {
    family: 'IM Fell French Canon SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'IM-Fell-Great-Primer': {
    family: 'IM Fell Great Primer',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'IM-Fell-Great-Primer-SC': {
    family: 'IM Fell Great Primer SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Ibarra-Real-Nova': {
    family: 'Ibarra Real Nova',
    category: 'serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Iceberg: {
    family: 'Iceberg',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Iceland: {
    family: 'Iceland',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Imbue: {
    family: 'Imbue',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Imprima: {
    family: 'Imprima',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Inconsolata: {
    family: 'Inconsolata',
    category: 'monospace',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Inder: {
    family: 'Inder',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Indie-Flower': {
    family: 'Indie Flower',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Inika: {
    family: 'Inika',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Inknut-Antiqua': {
    family: 'Inknut Antiqua',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Inria-Sans': {
    family: 'Inria Sans',
    category: 'sans-serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Inria-Serif': {
    family: 'Inria Serif',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Inter: {
    family: 'Inter',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Irish-Grover': {
    family: 'Irish Grover',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Istok-Web': {
    family: 'Istok Web',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Italiana: {
    family: 'Italiana',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Italianno: {
    family: 'Italianno',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Itim: {
    family: 'Itim',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Jacques-Francois': {
    family: 'Jacques Francois',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Jacques-Francois-Shadow': {
    family: 'Jacques Francois Shadow',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Jaldi: {
    family: 'Jaldi',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'JetBrains-Mono': {
    family: 'JetBrains Mono',
    category: 'monospace',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Jim-Nightshade': {
    family: 'Jim Nightshade',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Jockey-One': {
    family: 'Jockey One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Jolly-Lodger': {
    family: 'Jolly Lodger',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Jomhuria: {
    family: 'Jomhuria',
    category: 'display',
    variants: ['regular'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  Jomolhari: {
    family: 'Jomolhari',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'tibetan']
  },
  'Josefin-Sans': {
    family: 'Josefin Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Josefin-Slab': {
    family: 'Josefin Slab',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin']
  },
  Jost: {
    family: 'Jost',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Joti-One': {
    family: 'Joti One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Jua: {
    family: 'Jua',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Judson: {
    family: 'Judson',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Julee: {
    family: 'Julee',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Julius-Sans-One': {
    family: 'Julius Sans One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Junge: {
    family: 'Junge',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Jura: {
    family: 'Jura',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'kayah-li', 'latin', 'latin-ext', 'vietnamese']
  },
  'Just-Another-Hand': {
    family: 'Just Another Hand',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Just-Me-Again-Down-Here': {
    family: 'Just Me Again Down Here',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  K2D: {
    family: 'K2D',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Kadwa: {
    family: 'Kadwa',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin']
  },
  'Kaisei-Decol': {
    family: 'Kaisei Decol',
    category: 'serif',
    variants: ['regular', '500', '700'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Kaisei-HarunoUmi': {
    family: 'Kaisei HarunoUmi',
    category: 'serif',
    variants: ['regular', '500', '700'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Kaisei-Opti': {
    family: 'Kaisei Opti',
    category: 'serif',
    variants: ['regular', '500', '700'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Kaisei-Tokumin': {
    family: 'Kaisei Tokumin',
    category: 'serif',
    variants: ['regular', '500', '700', '800'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Kalam: {
    family: 'Kalam',
    category: 'handwriting',
    variants: ['300', 'regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Kameron: {
    family: 'Kameron',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Kanit: {
    family: 'Kanit',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Kantumruy: {
    family: 'Kantumruy',
    category: 'sans-serif',
    variants: ['300', 'regular', '700'],
    subsets: ['khmer']
  },
  Karantina: {
    family: 'Karantina',
    category: 'display',
    variants: ['300', 'regular', '700'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  Karla: {
    family: 'Karla',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext']
  },
  Karma: {
    family: 'Karma',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Katibeh: {
    family: 'Katibeh',
    category: 'display',
    variants: ['regular'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  'Kaushan-Script': {
    family: 'Kaushan Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Kavivanar: {
    family: 'Kavivanar',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'tamil']
  },
  Kavoon: {
    family: 'Kavoon',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Kdam-Thmor': {
    family: 'Kdam Thmor',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer']
  },
  'Keania-One': {
    family: 'Keania One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Kelly-Slab': {
    family: 'Kelly Slab',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Kenia: {
    family: 'Kenia',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Khand: {
    family: 'Khand',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Khmer: {
    family: 'Khmer',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer']
  },
  Khula: {
    family: 'Khula',
    category: 'sans-serif',
    variants: ['300', 'regular', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Kings: {
    family: 'Kings',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Kirang-Haerang': {
    family: 'Kirang Haerang',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Kite-One': {
    family: 'Kite One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Kiwi-Maru': {
    family: 'Kiwi Maru',
    category: 'serif',
    variants: ['300', 'regular', '500'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Klee-One': {
    family: 'Klee One',
    category: 'handwriting',
    variants: ['regular', '600'],
    subsets: ['cyrillic', 'greek-ext', 'japanese', 'latin', 'latin-ext']
  },
  Knewave: {
    family: 'Knewave',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  KoHo: {
    family: 'KoHo',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Kodchasan: {
    family: 'Kodchasan',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Koh-Santepheap': {
    family: 'Koh Santepheap',
    category: 'display',
    variants: ['100', '300', 'regular', '700', '900'],
    subsets: ['khmer', 'latin']
  },
  Kosugi: {
    family: 'Kosugi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Kosugi-Maru': {
    family: 'Kosugi Maru',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Kotta-One': {
    family: 'Kotta One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Koulen: {
    family: 'Koulen',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  Kranky: {
    family: 'Kranky',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Kreon: {
    family: 'Kreon',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Kristi: {
    family: 'Kristi',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Krona-One': {
    family: 'Krona One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Krub: {
    family: 'Krub',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Kufam: {
    family: 'Kufam',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['arabic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Kulim-Park': {
    family: 'Kulim Park',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Kumar-One': {
    family: 'Kumar One',
    category: 'display',
    variants: ['regular'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  'Kumar-One-Outline': {
    family: 'Kumar One Outline',
    category: 'display',
    variants: ['regular'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  'Kumbh-Sans': {
    family: 'Kumbh Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
  },
  Kurale: {
    family: 'Kurale',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'devanagari', 'latin', 'latin-ext']
  },
  'La-Belle-Aurore': {
    family: 'La Belle Aurore',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Lacquer: {
    family: 'Lacquer',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Laila: {
    family: 'Laila',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Lakki-Reddy': {
    family: 'Lakki Reddy',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Lalezar: {
    family: 'Lalezar',
    category: 'display',
    variants: ['regular'],
    subsets: ['arabic', 'latin', 'latin-ext', 'vietnamese']
  },
  Lancelot: {
    family: 'Lancelot',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Langar: {
    family: 'Langar',
    category: 'display',
    variants: ['regular'],
    subsets: ['gurmukhi', 'latin', 'latin-ext']
  },
  Lateef: {
    family: 'Lateef',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['arabic', 'latin']
  },
  Lato: {
    family: 'Lato',
    category: 'sans-serif',
    variants: ['100', '100italic', '300', '300italic', 'regular', 'italic', '700', '700italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'League-Script': {
    family: 'League Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Leckerli-One': {
    family: 'Leckerli One',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Ledger: {
    family: 'Ledger',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Lekton: {
    family: 'Lekton',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Lemon: {
    family: 'Lemon',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Lemonada: {
    family: 'Lemonada',
    category: 'display',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['arabic', 'latin', 'latin-ext', 'vietnamese']
  },
  Lexend: {
    family: 'Lexend',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Deca': {
    family: 'Lexend Deca',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Exa': {
    family: 'Lexend Exa',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Giga': {
    family: 'Lexend Giga',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Mega': {
    family: 'Lexend Mega',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Peta': {
    family: 'Lexend Peta',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Tera': {
    family: 'Lexend Tera',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Lexend-Zetta': {
    family: 'Lexend Zetta',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Libre-Barcode-128': {
    family: 'Libre Barcode 128',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-128-Text': {
    family: 'Libre Barcode 128 Text',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-39': {
    family: 'Libre Barcode 39',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-39-Extended': {
    family: 'Libre Barcode 39 Extended',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-39-Extended-Text': {
    family: 'Libre Barcode 39 Extended Text',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-39-Text': {
    family: 'Libre Barcode 39 Text',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Barcode-EAN13-Text': {
    family: 'Libre Barcode EAN13 Text',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Libre-Baskerville': {
    family: 'Libre Baskerville',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Libre-Caslon-Display': {
    family: 'Libre Caslon Display',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Libre-Caslon-Text': {
    family: 'Libre Caslon Text',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Libre-Franklin': {
    family: 'Libre Franklin',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Life-Savers': {
    family: 'Life Savers',
    category: 'display',
    variants: ['regular', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'Lilita-One': {
    family: 'Lilita One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Lily-Script-One': {
    family: 'Lily Script One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Limelight: {
    family: 'Limelight',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Linden-Hill': {
    family: 'Linden Hill',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Literata: {
    family: 'Literata',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '900', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Liu-Jian-Mao-Cao': {
    family: 'Liu Jian Mao Cao',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  Livvic: {
    family: 'Livvic',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Lobster: {
    family: 'Lobster',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Lobster-Two': {
    family: 'Lobster Two',
    category: 'display',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Londrina-Outline': {
    family: 'Londrina Outline',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Londrina-Shadow': {
    family: 'Londrina Shadow',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Londrina-Sketch': {
    family: 'Londrina Sketch',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Londrina-Solid': {
    family: 'Londrina Solid',
    category: 'display',
    variants: ['100', '300', 'regular', '900'],
    subsets: ['latin']
  },
  'Long-Cang': {
    family: 'Long Cang',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  Lora: {
    family: 'Lora',
    category: 'serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Love-Ya-Like-A-Sister': {
    family: 'Love Ya Like A Sister',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Loved-by-the-King': {
    family: 'Loved by the King',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Lovers-Quarrel': {
    family: 'Lovers Quarrel',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Luckiest-Guy': {
    family: 'Luckiest Guy',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Lusitana: {
    family: 'Lusitana',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Lustria: {
    family: 'Lustria',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'M-PLUS-1': {
    family: 'M PLUS 1',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'M-PLUS-1-Code': {
    family: 'M PLUS 1 Code',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'M-PLUS-1p': {
    family: 'M PLUS 1p',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'M-PLUS-2': {
    family: 'M PLUS 2',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'M-PLUS-Code-Latin': {
    family: 'M PLUS Code Latin',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'M-PLUS-Rounded-1c': {
    family: 'M PLUS Rounded 1c',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'Ma-Shan-Zheng': {
    family: 'Ma Shan Zheng',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  Macondo: {
    family: 'Macondo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Macondo-Swash-Caps': {
    family: 'Macondo Swash Caps',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Mada: {
    family: 'Mada',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '900'],
    subsets: ['arabic', 'latin']
  },
  Magra: {
    family: 'Magra',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Maiden-Orange': {
    family: 'Maiden Orange',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Maitree: {
    family: 'Maitree',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Major-Mono-Display': {
    family: 'Major Mono Display',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Mako: {
    family: 'Mako',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Mali: {
    family: 'Mali',
    category: 'handwriting',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Mallanna: {
    family: 'Mallanna',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Mandali: {
    family: 'Mandali',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Manjari: {
    family: 'Manjari',
    category: 'sans-serif',
    variants: ['100', 'regular', '700'],
    subsets: ['latin', 'latin-ext', 'malayalam']
  },
  Manrope: {
    family: 'Manrope',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  Mansalva: {
    family: 'Mansalva',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Manuale: {
    family: 'Manuale',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Marcellus: {
    family: 'Marcellus',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Marcellus-SC': {
    family: 'Marcellus SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Marck-Script': {
    family: 'Marck Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Margarine: {
    family: 'Margarine',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Markazi-Text': {
    family: 'Markazi Text',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['arabic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Marko-One': {
    family: 'Marko One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Marmelad: {
    family: 'Marmelad',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Martel: {
    family: 'Martel',
    category: 'serif',
    variants: ['200', '300', 'regular', '600', '700', '800', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Martel-Sans': {
    family: 'Martel Sans',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '600', '700', '800', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Marvel: {
    family: 'Marvel',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  Mate: {
    family: 'Mate',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  'Mate-SC': {
    family: 'Mate SC',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Maven-Pro': {
    family: 'Maven Pro',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  McLaren: {
    family: 'McLaren',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Meddon: {
    family: 'Meddon',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  MedievalSharp: {
    family: 'MedievalSharp',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Medula-One': {
    family: 'Medula One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Meera-Inimai': {
    family: 'Meera Inimai',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'tamil']
  },
  Megrim: {
    family: 'Megrim',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Meie-Script': {
    family: 'Meie Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Merienda: {
    family: 'Merienda',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Merienda-One': {
    family: 'Merienda One',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Merriweather: {
    family: 'Merriweather',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Merriweather-Sans': {
    family: 'Merriweather Sans',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Metal: {
    family: 'Metal',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Metal-Mania': {
    family: 'Metal Mania',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Metamorphous: {
    family: 'Metamorphous',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Metrophobic: {
    family: 'Metrophobic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Michroma: {
    family: 'Michroma',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Milonga: {
    family: 'Milonga',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Miltonian: {
    family: 'Miltonian',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Miltonian-Tattoo': {
    family: 'Miltonian Tattoo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Mina: {
    family: 'Mina',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['bengali', 'latin', 'latin-ext']
  },
  Miniver: {
    family: 'Miniver',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Miriam-Libre': {
    family: 'Miriam Libre',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  Mirza: {
    family: 'Mirza',
    category: 'display',
    variants: ['regular', '500', '600', '700'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  'Miss-Fajardose': {
    family: 'Miss Fajardose',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Mitr: {
    family: 'Mitr',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Mochiy-Pop-One': {
    family: 'Mochiy Pop One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin']
  },
  'Mochiy-Pop-P-One': {
    family: 'Mochiy Pop P One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin']
  },
  Modak: {
    family: 'Modak',
    category: 'display',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Modern-Antiqua': {
    family: 'Modern Antiqua',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Mogra: {
    family: 'Mogra',
    category: 'display',
    variants: ['regular'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  Mohave: {
    family: 'Mohave',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Molengo: {
    family: 'Molengo',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Molle: {
    family: 'Molle',
    category: 'handwriting',
    variants: ['italic'],
    subsets: ['latin', 'latin-ext']
  },
  Monda: {
    family: 'Monda',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Monofett: {
    family: 'Monofett',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Monoton: {
    family: 'Monoton',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Monsieur-La-Doulaise': {
    family: 'Monsieur La Doulaise',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Montaga: {
    family: 'Montaga',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Montagu-Slab': {
    family: 'Montagu Slab',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  MonteCarlo: {
    family: 'MonteCarlo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Montez: {
    family: 'Montez',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Montserrat: {
    family: 'Montserrat',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Montserrat-Alternates': {
    family: 'Montserrat Alternates',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Montserrat-Subrayada': {
    family: 'Montserrat Subrayada',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Moul: {
    family: 'Moul',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  Moulpali: {
    family: 'Moulpali',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Mountains-of-Christmas': {
    family: 'Mountains of Christmas',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  'Mouse-Memoirs': {
    family: 'Mouse Memoirs',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Mr-Bedfort': {
    family: 'Mr Bedfort',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Mr-Dafoe': {
    family: 'Mr Dafoe',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Mr-De-Haviland': {
    family: 'Mr De Haviland',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Mrs-Saint-Delafield': {
    family: 'Mrs Saint Delafield',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Mrs-Sheppards': {
    family: 'Mrs Sheppards',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Mukta: {
    family: 'Mukta',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Mukta-Mahee': {
    family: 'Mukta Mahee',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['gurmukhi', 'latin', 'latin-ext']
  },
  'Mukta-Malar': {
    family: 'Mukta Malar',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'tamil']
  },
  'Mukta-Vaani': {
    family: 'Mukta Vaani',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  Mulish: {
    family: 'Mulish',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '900', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  MuseoModerno: {
    family: 'MuseoModerno',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Mystery-Quest': {
    family: 'Mystery Quest',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  NTR: {
    family: 'NTR',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  'Nanum-Brush-Script': {
    family: 'Nanum Brush Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Nanum-Gothic': {
    family: 'Nanum Gothic',
    category: 'sans-serif',
    variants: ['regular', '700', '800'],
    subsets: ['korean', 'latin']
  },
  'Nanum-Gothic-Coding': {
    family: 'Nanum Gothic Coding',
    category: 'monospace',
    variants: ['regular', '700'],
    subsets: ['korean', 'latin']
  },
  'Nanum-Myeongjo': {
    family: 'Nanum Myeongjo',
    category: 'serif',
    variants: ['regular', '700', '800'],
    subsets: ['korean', 'latin']
  },
  'Nanum-Pen-Script': {
    family: 'Nanum Pen Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Nerko-One': {
    family: 'Nerko One',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Neucha: {
    family: 'Neucha',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin']
  },
  Neuton: {
    family: 'Neuton',
    category: 'serif',
    variants: ['200', '300', 'regular', 'italic', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'New-Rocker': {
    family: 'New Rocker',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'New-Tegomin': {
    family: 'New Tegomin',
    category: 'serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  'News-Cycle': {
    family: 'News Cycle',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Newsreader: {
    family: 'Newsreader',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Niconne: {
    family: 'Niconne',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Niramit: {
    family: 'Niramit',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Nixie-One': {
    family: 'Nixie One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Nobile: {
    family: 'Nobile',
    category: 'sans-serif',
    variants: ['regular', 'italic', '500', '500italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Nokora: {
    family: 'Nokora',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['khmer']
  },
  Norican: {
    family: 'Norican',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Nosifer: {
    family: 'Nosifer',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Notable: {
    family: 'Notable',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nothing-You-Could-Do': {
    family: 'Nothing You Could Do',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Noticia-Text': {
    family: 'Noticia Text',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Kufi-Arabic': {
    family: 'Noto Kufi Arabic',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['arabic']
  },
  'Noto-Music': {
    family: 'Noto Music',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['music']
  },
  'Noto-Naskh-Arabic': {
    family: 'Noto Naskh Arabic',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['arabic']
  },
  'Noto-Nastaliq-Urdu': {
    family: 'Noto Nastaliq Urdu',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['arabic']
  },
  'Noto-Rashi-Hebrew': {
    family: 'Noto Rashi Hebrew',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['hebrew']
  },
  'Noto-Sans': {
    family: 'Noto Sans',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'devanagari', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Sans-Adlam': {
    family: 'Noto Sans Adlam',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['adlam']
  },
  'Noto-Sans-Adlam-Unjoined': {
    family: 'Noto Sans Adlam Unjoined',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['adlam']
  },
  'Noto-Sans-Anatolian-Hieroglyphs': {
    family: 'Noto Sans Anatolian Hieroglyphs',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['anatolian-hieroglyphs']
  },
  'Noto-Sans-Arabic': {
    family: 'Noto Sans Arabic',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['arabic']
  },
  'Noto-Sans-Armenian': {
    family: 'Noto Sans Armenian',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['armenian']
  },
  'Noto-Sans-Avestan': {
    family: 'Noto Sans Avestan',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['avestan']
  },
  'Noto-Sans-Balinese': {
    family: 'Noto Sans Balinese',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['balinese']
  },
  'Noto-Sans-Bamum': {
    family: 'Noto Sans Bamum',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['bamum']
  },
  'Noto-Sans-Bassa-Vah': {
    family: 'Noto Sans Bassa Vah',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['bassa-vah']
  },
  'Noto-Sans-Batak': {
    family: 'Noto Sans Batak',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['batak']
  },
  'Noto-Sans-Bengali': {
    family: 'Noto Sans Bengali',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['bengali']
  },
  'Noto-Sans-Bhaiksuki': {
    family: 'Noto Sans Bhaiksuki',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['bhaiksuki']
  },
  'Noto-Sans-Brahmi': {
    family: 'Noto Sans Brahmi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['brahmi']
  },
  'Noto-Sans-Buginese': {
    family: 'Noto Sans Buginese',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['buginese']
  },
  'Noto-Sans-Buhid': {
    family: 'Noto Sans Buhid',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['buhid']
  },
  'Noto-Sans-Canadian-Aboriginal': {
    family: 'Noto Sans Canadian Aboriginal',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['canadian-aboriginal']
  },
  'Noto-Sans-Carian': {
    family: 'Noto Sans Carian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['carian']
  },
  'Noto-Sans-Caucasian-Albanian': {
    family: 'Noto Sans Caucasian Albanian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['caucasian-albanian']
  },
  'Noto-Sans-Chakma': {
    family: 'Noto Sans Chakma',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['chakma']
  },
  'Noto-Sans-Cham': {
    family: 'Noto Sans Cham',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cham']
  },
  'Noto-Sans-Cherokee': {
    family: 'Noto Sans Cherokee',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cherokee']
  },
  'Noto-Sans-Coptic': {
    family: 'Noto Sans Coptic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['coptic']
  },
  'Noto-Sans-Cuneiform': {
    family: 'Noto Sans Cuneiform',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cuneiform']
  },
  'Noto-Sans-Cypriot': {
    family: 'Noto Sans Cypriot',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cypriot']
  },
  'Noto-Sans-Deseret': {
    family: 'Noto Sans Deseret',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['deseret']
  },
  'Noto-Sans-Devanagari': {
    family: 'Noto Sans Devanagari',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['devanagari']
  },
  'Noto-Sans-Display': {
    family: 'Noto Sans Display',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Sans-Duployan': {
    family: 'Noto Sans Duployan',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['duployan']
  },
  'Noto-Sans-Egyptian-Hieroglyphs': {
    family: 'Noto Sans Egyptian Hieroglyphs',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['egyptian-hieroglyphs']
  },
  'Noto-Sans-Elbasan': {
    family: 'Noto Sans Elbasan',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['elbasan']
  },
  'Noto-Sans-Elymaic': {
    family: 'Noto Sans Elymaic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['elymaic']
  },
  'Noto-Sans-Georgian': {
    family: 'Noto Sans Georgian',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['georgian']
  },
  'Noto-Sans-Glagolitic': {
    family: 'Noto Sans Glagolitic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['glagolitic']
  },
  'Noto-Sans-Gothic': {
    family: 'Noto Sans Gothic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['gothic']
  },
  'Noto-Sans-Grantha': {
    family: 'Noto Sans Grantha',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['grantha']
  },
  'Noto-Sans-Gujarati': {
    family: 'Noto Sans Gujarati',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['gujarati']
  },
  'Noto-Sans-Gunjala-Gondi': {
    family: 'Noto Sans Gunjala Gondi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['gunjala-gondi']
  },
  'Noto-Sans-Gurmukhi': {
    family: 'Noto Sans Gurmukhi',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['gurmukhi']
  },
  'Noto-Sans-HK': {
    family: 'Noto Sans HK',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['chinese-hongkong', 'latin']
  },
  'Noto-Sans-Hanifi-Rohingya': {
    family: 'Noto Sans Hanifi Rohingya',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['hanifi-rohingya']
  },
  'Noto-Sans-Hanunoo': {
    family: 'Noto Sans Hanunoo',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['hanunoo']
  },
  'Noto-Sans-Hatran': {
    family: 'Noto Sans Hatran',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['hatran']
  },
  'Noto-Sans-Hebrew': {
    family: 'Noto Sans Hebrew',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['hebrew']
  },
  'Noto-Sans-Imperial-Aramaic': {
    family: 'Noto Sans Imperial Aramaic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['imperial-aramaic']
  },
  'Noto-Sans-Indic-Siyaq-Numbers': {
    family: 'Noto Sans Indic Siyaq Numbers',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['indic-siyaq-numbers']
  },
  'Noto-Sans-Inscriptional-Pahlavi': {
    family: 'Noto Sans Inscriptional Pahlavi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['inscriptional-pahlavi']
  },
  'Noto-Sans-Inscriptional-Parthian': {
    family: 'Noto Sans Inscriptional Parthian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['inscriptional-parthian']
  },
  'Noto-Sans-JP': {
    family: 'Noto Sans JP',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['japanese', 'latin']
  },
  'Noto-Sans-Javanese': {
    family: 'Noto Sans Javanese',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['javanese']
  },
  'Noto-Sans-KR': {
    family: 'Noto Sans KR',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['korean', 'latin']
  },
  'Noto-Sans-Kaithi': {
    family: 'Noto Sans Kaithi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['kaithi']
  },
  'Noto-Sans-Kannada': {
    family: 'Noto Sans Kannada',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['kannada']
  },
  'Noto-Sans-Kayah-Li': {
    family: 'Noto Sans Kayah Li',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['kayah-li']
  },
  'Noto-Sans-Kharoshthi': {
    family: 'Noto Sans Kharoshthi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['kharoshthi']
  },
  'Noto-Sans-Khmer': {
    family: 'Noto Sans Khmer',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['khmer']
  },
  'Noto-Sans-Khojki': {
    family: 'Noto Sans Khojki',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['khojki']
  },
  'Noto-Sans-Khudawadi': {
    family: 'Noto Sans Khudawadi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['khudawadi']
  },
  'Noto-Sans-Lao': {
    family: 'Noto Sans Lao',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['lao']
  },
  'Noto-Sans-Lepcha': {
    family: 'Noto Sans Lepcha',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['lepcha']
  },
  'Noto-Sans-Limbu': {
    family: 'Noto Sans Limbu',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['limbu']
  },
  'Noto-Sans-Linear-A': {
    family: 'Noto Sans Linear A',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['linear-a']
  },
  'Noto-Sans-Linear-B': {
    family: 'Noto Sans Linear B',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['linear-b']
  },
  'Noto-Sans-Lisu': {
    family: 'Noto Sans Lisu',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['lisu']
  },
  'Noto-Sans-Lycian': {
    family: 'Noto Sans Lycian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['lycian']
  },
  'Noto-Sans-Lydian': {
    family: 'Noto Sans Lydian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['lydian']
  },
  'Noto-Sans-Mahajani': {
    family: 'Noto Sans Mahajani',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['mahajani']
  },
  'Noto-Sans-Malayalam': {
    family: 'Noto Sans Malayalam',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['malayalam']
  },
  'Noto-Sans-Mandaic': {
    family: 'Noto Sans Mandaic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['mandaic']
  },
  'Noto-Sans-Manichaean': {
    family: 'Noto Sans Manichaean',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['manichaean']
  },
  'Noto-Sans-Marchen': {
    family: 'Noto Sans Marchen',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['marchen']
  },
  'Noto-Sans-Masaram-Gondi': {
    family: 'Noto Sans Masaram Gondi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['masaram-gondi']
  },
  'Noto-Sans-Math': {
    family: 'Noto Sans Math',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['math']
  },
  'Noto-Sans-Mayan-Numerals': {
    family: 'Noto Sans Mayan Numerals',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['mayan-numerals']
  },
  'Noto-Sans-Medefaidrin': {
    family: 'Noto Sans Medefaidrin',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['medefaidrin']
  },
  'Noto-Sans-Meetei-Mayek': {
    family: 'Noto Sans Meetei Mayek',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['meetei-mayek']
  },
  'Noto-Sans-Meroitic': {
    family: 'Noto Sans Meroitic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['meroitic']
  },
  'Noto-Sans-Miao': {
    family: 'Noto Sans Miao',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['miao']
  },
  'Noto-Sans-Modi': {
    family: 'Noto Sans Modi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['modi']
  },
  'Noto-Sans-Mongolian': {
    family: 'Noto Sans Mongolian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['mongolian']
  },
  'Noto-Sans-Mono': {
    family: 'Noto Sans Mono',
    category: 'monospace',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Sans-Mro': {
    family: 'Noto Sans Mro',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['mro']
  },
  'Noto-Sans-Multani': {
    family: 'Noto Sans Multani',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['multani']
  },
  'Noto-Sans-Myanmar': {
    family: 'Noto Sans Myanmar',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['myanmar']
  },
  'Noto-Sans-N-Ko': {
    family: 'Noto Sans N Ko',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['nko']
  },
  'Noto-Sans-Nabataean': {
    family: 'Noto Sans Nabataean',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['nabataean']
  },
  'Noto-Sans-New-Tai-Lue': {
    family: 'Noto Sans New Tai Lue',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['new-tai-lue']
  },
  'Noto-Sans-Newa': {
    family: 'Noto Sans Newa',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['newa']
  },
  'Noto-Sans-Nushu': {
    family: 'Noto Sans Nushu',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['nushu']
  },
  'Noto-Sans-Ogham': {
    family: 'Noto Sans Ogham',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['ogham']
  },
  'Noto-Sans-Ol-Chiki': {
    family: 'Noto Sans Ol Chiki',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['ol-chiki']
  },
  'Noto-Sans-Old-Hungarian': {
    family: 'Noto Sans Old Hungarian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-hungarian']
  },
  'Noto-Sans-Old-Italic': {
    family: 'Noto Sans Old Italic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-italic']
  },
  'Noto-Sans-Old-North-Arabian': {
    family: 'Noto Sans Old North Arabian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-north-arabian']
  },
  'Noto-Sans-Old-Permic': {
    family: 'Noto Sans Old Permic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-permic']
  },
  'Noto-Sans-Old-Persian': {
    family: 'Noto Sans Old Persian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-persian']
  },
  'Noto-Sans-Old-Sogdian': {
    family: 'Noto Sans Old Sogdian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-sogdian']
  },
  'Noto-Sans-Old-South-Arabian': {
    family: 'Noto Sans Old South Arabian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-south-arabian']
  },
  'Noto-Sans-Old-Turkic': {
    family: 'Noto Sans Old Turkic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['old-turkic']
  },
  'Noto-Sans-Oriya': {
    family: 'Noto Sans Oriya',
    category: 'sans-serif',
    variants: ['100', 'regular', '700', '900'],
    subsets: ['oriya']
  },
  'Noto-Sans-Osage': {
    family: 'Noto Sans Osage',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['osage']
  },
  'Noto-Sans-Osmanya': {
    family: 'Noto Sans Osmanya',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['osmanya']
  },
  'Noto-Sans-Pahawh-Hmong': {
    family: 'Noto Sans Pahawh Hmong',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['pahawh-hmong']
  },
  'Noto-Sans-Palmyrene': {
    family: 'Noto Sans Palmyrene',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['palmyrene']
  },
  'Noto-Sans-Pau-Cin-Hau': {
    family: 'Noto Sans Pau Cin Hau',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['pau-cin-hau']
  },
  'Noto-Sans-Phags-Pa': {
    family: 'Noto Sans Phags Pa',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['phags-pa']
  },
  'Noto-Sans-Phoenician': {
    family: 'Noto Sans Phoenician',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['phoenician']
  },
  'Noto-Sans-Psalter-Pahlavi': {
    family: 'Noto Sans Psalter Pahlavi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['psalter-pahlavi']
  },
  'Noto-Sans-Rejang': {
    family: 'Noto Sans Rejang',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['rejang']
  },
  'Noto-Sans-Runic': {
    family: 'Noto Sans Runic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['runic']
  },
  'Noto-Sans-SC': {
    family: 'Noto Sans SC',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['chinese-simplified', 'latin']
  },
  'Noto-Sans-Samaritan': {
    family: 'Noto Sans Samaritan',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['samaritan']
  },
  'Noto-Sans-Saurashtra': {
    family: 'Noto Sans Saurashtra',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['saurashtra']
  },
  'Noto-Sans-Sharada': {
    family: 'Noto Sans Sharada',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['sharada']
  },
  'Noto-Sans-Shavian': {
    family: 'Noto Sans Shavian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['shavian']
  },
  'Noto-Sans-Siddham': {
    family: 'Noto Sans Siddham',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['siddham']
  },
  'Noto-Sans-Sinhala': {
    family: 'Noto Sans Sinhala',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['sinhala']
  },
  'Noto-Sans-Sogdian': {
    family: 'Noto Sans Sogdian',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['sogdian']
  },
  'Noto-Sans-Sora-Sompeng': {
    family: 'Noto Sans Sora Sompeng',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['sora-sompeng']
  },
  'Noto-Sans-Soyombo': {
    family: 'Noto Sans Soyombo',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['soyombo']
  },
  'Noto-Sans-Sundanese': {
    family: 'Noto Sans Sundanese',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['sundanese']
  },
  'Noto-Sans-Syloti-Nagri': {
    family: 'Noto Sans Syloti Nagri',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['syloti-nagri']
  },
  'Noto-Sans-Symbols': {
    family: 'Noto Sans Symbols',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['symbols']
  },
  'Noto-Sans-Symbols-2': {
    family: 'Noto Sans Symbols 2',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['symbols']
  },
  'Noto-Sans-Syriac': {
    family: 'Noto Sans Syriac',
    category: 'sans-serif',
    variants: ['100', 'regular', '900'],
    subsets: ['syriac']
  },
  'Noto-Sans-TC': {
    family: 'Noto Sans TC',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['chinese-traditional', 'latin']
  },
  'Noto-Sans-Tagalog': {
    family: 'Noto Sans Tagalog',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tagalog']
  },
  'Noto-Sans-Tagbanwa': {
    family: 'Noto Sans Tagbanwa',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tagbanwa']
  },
  'Noto-Sans-Tai-Le': {
    family: 'Noto Sans Tai Le',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tai-le']
  },
  'Noto-Sans-Tai-Tham': {
    family: 'Noto Sans Tai Tham',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['tai-tham']
  },
  'Noto-Sans-Tai-Viet': {
    family: 'Noto Sans Tai Viet',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tai-viet']
  },
  'Noto-Sans-Takri': {
    family: 'Noto Sans Takri',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['takri']
  },
  'Noto-Sans-Tamil': {
    family: 'Noto Sans Tamil',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['tamil']
  },
  'Noto-Sans-Tamil-Supplement': {
    family: 'Noto Sans Tamil Supplement',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tamil-supplement']
  },
  'Noto-Sans-Telugu': {
    family: 'Noto Sans Telugu',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['telugu']
  },
  'Noto-Sans-Thaana': {
    family: 'Noto Sans Thaana',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['thaana']
  },
  'Noto-Sans-Thai': {
    family: 'Noto Sans Thai',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['thai']
  },
  'Noto-Sans-Thai-Looped': {
    family: 'Noto Sans Thai Looped',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['thai']
  },
  'Noto-Sans-Tifinagh': {
    family: 'Noto Sans Tifinagh',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tifinagh']
  },
  'Noto-Sans-Tirhuta': {
    family: 'Noto Sans Tirhuta',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['tirhuta']
  },
  'Noto-Sans-Ugaritic': {
    family: 'Noto Sans Ugaritic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['ugaritic']
  },
  'Noto-Sans-Vai': {
    family: 'Noto Sans Vai',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['vai']
  },
  'Noto-Sans-Wancho': {
    family: 'Noto Sans Wancho',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['wancho']
  },
  'Noto-Sans-Warang-Citi': {
    family: 'Noto Sans Warang Citi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['warang-citi']
  },
  'Noto-Sans-Yi': {
    family: 'Noto Sans Yi',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['yi']
  },
  'Noto-Sans-Zanabazar-Square': {
    family: 'Noto Sans Zanabazar Square',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['zanabazar-square']
  },
  'Noto-Serif': {
    family: 'Noto Serif',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Serif-Ahom': {
    family: 'Noto Serif Ahom',
    category: 'serif',
    variants: ['regular'],
    subsets: ['ahom']
  },
  'Noto-Serif-Armenian': {
    family: 'Noto Serif Armenian',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['armenian']
  },
  'Noto-Serif-Balinese': {
    family: 'Noto Serif Balinese',
    category: 'serif',
    variants: ['regular'],
    subsets: ['balinese']
  },
  'Noto-Serif-Bengali': {
    family: 'Noto Serif Bengali',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['bengali']
  },
  'Noto-Serif-Devanagari': {
    family: 'Noto Serif Devanagari',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['devanagari']
  },
  'Noto-Serif-Display': {
    family: 'Noto Serif Display',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Noto-Serif-Dogra': {
    family: 'Noto Serif Dogra',
    category: 'serif',
    variants: ['regular'],
    subsets: ['dogra']
  },
  'Noto-Serif-Ethiopic': {
    family: 'Noto Serif Ethiopic',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['ethiopic']
  },
  'Noto-Serif-Georgian': {
    family: 'Noto Serif Georgian',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['georgian']
  },
  'Noto-Serif-Grantha': {
    family: 'Noto Serif Grantha',
    category: 'serif',
    variants: ['regular'],
    subsets: ['grantha']
  },
  'Noto-Serif-Gujarati': {
    family: 'Noto Serif Gujarati',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['gujarati']
  },
  'Noto-Serif-Gurmukhi': {
    family: 'Noto Serif Gurmukhi',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['gurmukhi']
  },
  'Noto-Serif-Hebrew': {
    family: 'Noto Serif Hebrew',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['hebrew']
  },
  'Noto-Serif-JP': {
    family: 'Noto Serif JP',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '900'],
    subsets: ['japanese', 'latin']
  },
  'Noto-Serif-KR': {
    family: 'Noto Serif KR',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '900'],
    subsets: ['korean', 'latin']
  },
  'Noto-Serif-Kannada': {
    family: 'Noto Serif Kannada',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['kannada']
  },
  'Noto-Serif-Khmer': {
    family: 'Noto Serif Khmer',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['khmer']
  },
  'Noto-Serif-Lao': {
    family: 'Noto Serif Lao',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['lao']
  },
  'Noto-Serif-Malayalam': {
    family: 'Noto Serif Malayalam',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['malayalam']
  },
  'Noto-Serif-Myanmar': {
    family: 'Noto Serif Myanmar',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['myanmar']
  },
  'Noto-Serif-Nyiakeng-Puachue-Hmong': {
    family: 'Noto Serif Nyiakeng Puachue Hmong',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['nyiakeng-puachue-hmong']
  },
  'Noto-Serif-SC': {
    family: 'Noto Serif SC',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '900'],
    subsets: ['chinese-simplified', 'latin']
  },
  'Noto-Serif-Sinhala': {
    family: 'Noto Serif Sinhala',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['sinhala']
  },
  'Noto-Serif-TC': {
    family: 'Noto Serif TC',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '900'],
    subsets: ['chinese-traditional', 'latin']
  },
  'Noto-Serif-Tamil': {
    family: 'Noto Serif Tamil',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['tamil']
  },
  'Noto-Serif-Tangut': {
    family: 'Noto Serif Tangut',
    category: 'serif',
    variants: ['regular'],
    subsets: ['tangut']
  },
  'Noto-Serif-Telugu': {
    family: 'Noto Serif Telugu',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['telugu']
  },
  'Noto-Serif-Thai': {
    family: 'Noto Serif Thai',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['thai']
  },
  'Noto-Serif-Tibetan': {
    family: 'Noto Serif Tibetan',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['tibetan']
  },
  'Noto-Serif-Yezidi': {
    family: 'Noto Serif Yezidi',
    category: 'serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['yezidi']
  },
  'Noto-Traditional-Nushu': {
    family: 'Noto Traditional Nushu',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['nushu']
  },
  'Nova-Cut': {
    family: 'Nova Cut',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Flat': {
    family: 'Nova Flat',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Mono': {
    family: 'Nova Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['greek', 'latin']
  },
  'Nova-Oval': {
    family: 'Nova Oval',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Round': {
    family: 'Nova Round',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Script': {
    family: 'Nova Script',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Slim': {
    family: 'Nova Slim',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Nova-Square': {
    family: 'Nova Square',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Numans: {
    family: 'Numans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Nunito: {
    family: 'Nunito',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Nunito-Sans': {
    family: 'Nunito Sans',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Odibee-Sans': {
    family: 'Odibee Sans',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Odor-Mean-Chey': {
    family: 'Odor Mean Chey',
    category: 'serif',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  Offside: {
    family: 'Offside',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Oi: {
    family: 'Oi',
    category: 'display',
    variants: ['regular'],
    subsets: ['greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Old-Standard-TT': {
    family: 'Old Standard TT',
    category: 'serif',
    variants: ['regular', 'italic', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Oldenburg: {
    family: 'Oldenburg',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Oleo-Script': {
    family: 'Oleo Script',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Oleo-Script-Swash-Caps': {
    family: 'Oleo Script Swash Caps',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Open-Sans': {
    family: 'Open Sans',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  'Open-Sans-Condensed': {
    family: 'Open Sans Condensed',
    category: 'sans-serif',
    variants: ['300', '300italic', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Oranienbaum: {
    family: 'Oranienbaum',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Orbitron: {
    family: 'Orbitron',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800', '900'],
    subsets: ['latin']
  },
  Oregano: {
    family: 'Oregano',
    category: 'display',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Orelega-One': {
    family: 'Orelega One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Orienta: {
    family: 'Orienta',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Original-Surfer': {
    family: 'Original Surfer',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Oswald: {
    family: 'Oswald',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Otomanopee-One': {
    family: 'Otomanopee One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  Outfit: {
    family: 'Outfit',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin']
  },
  'Over-the-Rainbow': {
    family: 'Over the Rainbow',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Overlock: {
    family: 'Overlock',
    category: 'display',
    variants: ['regular', 'italic', '700', '700italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Overlock-SC': {
    family: 'Overlock SC',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Overpass: {
    family: 'Overpass',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Overpass-Mono': {
    family: 'Overpass Mono',
    category: 'monospace',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Ovo: {
    family: 'Ovo',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Oxanium: {
    family: 'Oxanium',
    category: 'display',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  Oxygen: {
    family: 'Oxygen',
    category: 'sans-serif',
    variants: ['300', 'regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Oxygen-Mono': {
    family: 'Oxygen Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'PT-Mono': {
    family: 'PT Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'PT-Sans': {
    family: 'PT Sans',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'PT-Sans-Caption': {
    family: 'PT Sans Caption',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'PT-Sans-Narrow': {
    family: 'PT Sans Narrow',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'PT-Serif': {
    family: 'PT Serif',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  'PT-Serif-Caption': {
    family: 'PT Serif Caption',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Pacifico: {
    family: 'Pacifico',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Padauk: {
    family: 'Padauk',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'myanmar']
  },
  Palanquin: {
    family: 'Palanquin',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Palanquin-Dark': {
    family: 'Palanquin Dark',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Palette-Mosaic': {
    family: 'Palette Mosaic',
    category: 'display',
    variants: ['regular'],
    subsets: ['japanese', 'latin']
  },
  Pangolin: {
    family: 'Pangolin',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Paprika: {
    family: 'Paprika',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Parisienne: {
    family: 'Parisienne',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Passero-One': {
    family: 'Passero One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Passion-One': {
    family: 'Passion One',
    category: 'display',
    variants: ['regular', '700', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Passions-Conflict': {
    family: 'Passions Conflict',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Pathway-Gothic-One': {
    family: 'Pathway Gothic One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Patrick-Hand': {
    family: 'Patrick Hand',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Patrick-Hand-SC': {
    family: 'Patrick Hand SC',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Pattaya: {
    family: 'Pattaya',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Patua-One': {
    family: 'Patua One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Pavanam: {
    family: 'Pavanam',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'tamil']
  },
  'Paytone-One': {
    family: 'Paytone One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Peddana: {
    family: 'Peddana',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Peralta: {
    family: 'Peralta',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Permanent-Marker': {
    family: 'Permanent Marker',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Petemoss: {
    family: 'Petemoss',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Petit-Formal-Script': {
    family: 'Petit Formal Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Petrona: {
    family: 'Petrona',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Philosopher: {
    family: 'Philosopher',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'vietnamese']
  },
  Piazzolla: {
    family: 'Piazzolla',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Piedra: {
    family: 'Piedra',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Pinyon-Script': {
    family: 'Pinyon Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Pirata-One': {
    family: 'Pirata One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Plaster: {
    family: 'Plaster',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Play: {
    family: 'Play',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  Playball: {
    family: 'Playball',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Playfair-Display': {
    family: 'Playfair Display',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Playfair-Display-SC': {
    family: 'Playfair Display SC',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  Podkova: {
    family: 'Podkova',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Poiret-One': {
    family: 'Poiret One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Poller-One': {
    family: 'Poller One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Poly: {
    family: 'Poly',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin']
  },
  Pompiere: {
    family: 'Pompiere',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Pontano-Sans': {
    family: 'Pontano Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Poor-Story': {
    family: 'Poor Story',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  Poppins: {
    family: 'Poppins',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Port-Lligat-Sans': {
    family: 'Port Lligat Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Port-Lligat-Slab': {
    family: 'Port Lligat Slab',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Potta-One': {
    family: 'Potta One',
    category: 'display',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'Pragati-Narrow': {
    family: 'Pragati Narrow',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Praise: {
    family: 'Praise',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Prata: {
    family: 'Prata',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'vietnamese']
  },
  Preahvihear: {
    family: 'Preahvihear',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  'Press-Start-2P': {
    family: 'Press Start 2P',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext']
  },
  Pridi: {
    family: 'Pridi',
    category: 'serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Princess-Sofia': {
    family: 'Princess Sofia',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Prociono: {
    family: 'Prociono',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Prompt: {
    family: 'Prompt',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'Prosto-One': {
    family: 'Prosto One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Proza-Libre': {
    family: 'Proza Libre',
    category: 'sans-serif',
    variants: ['regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Public-Sans': {
    family: 'Public Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Puppies-Play': {
    family: 'Puppies Play',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Puritan: {
    family: 'Puritan',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  'Purple-Purse': {
    family: 'Purple Purse',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Qahiri: {
    family: 'Qahiri',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['arabic', 'latin']
  },
  Quando: {
    family: 'Quando',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Quantico: {
    family: 'Quantico',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  Quattrocento: {
    family: 'Quattrocento',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Quattrocento-Sans': {
    family: 'Quattrocento Sans',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Questrial: {
    family: 'Questrial',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Quicksand: {
    family: 'Quicksand',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Quintessential: {
    family: 'Quintessential',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Qwigley: {
    family: 'Qwigley',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Racing-Sans-One': {
    family: 'Racing Sans One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Radley: {
    family: 'Radley',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Rajdhani: {
    family: 'Rajdhani',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Rakkas: {
    family: 'Rakkas',
    category: 'display',
    variants: ['regular'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  Raleway: {
    family: 'Raleway',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Raleway-Dots': {
    family: 'Raleway Dots',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Ramabhadra: {
    family: 'Ramabhadra',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Ramaraja: {
    family: 'Ramaraja',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Rambla: {
    family: 'Rambla',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Rammetto-One': {
    family: 'Rammetto One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Rampart-One': {
    family: 'Rampart One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Ranchers: {
    family: 'Ranchers',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Rancho: {
    family: 'Rancho',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Ranga: {
    family: 'Ranga',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Rasa: {
    family: 'Rasa',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['gujarati', 'latin', 'latin-ext', 'vietnamese']
  },
  Rationale: {
    family: 'Rationale',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Ravi-Prakash': {
    family: 'Ravi Prakash',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Recursive: {
    family: 'Recursive',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Red-Hat-Display': {
    family: 'Red Hat Display',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '900', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Red-Hat-Mono': {
    family: 'Red Hat Mono',
    category: 'monospace',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Red-Hat-Text': {
    family: 'Red Hat Text',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Red-Rose': {
    family: 'Red Rose',
    category: 'display',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Redressed: {
    family: 'Redressed',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Reem-Kufi': {
    family: 'Reem Kufi',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700'],
    subsets: ['arabic', 'latin']
  },
  'Reenie-Beanie': {
    family: 'Reenie Beanie',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Reggae-One': {
    family: 'Reggae One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Revalia: {
    family: 'Revalia',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Rhodium-Libre': {
    family: 'Rhodium Libre',
    category: 'serif',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Ribeye: {
    family: 'Ribeye',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Ribeye-Marrow': {
    family: 'Ribeye Marrow',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Righteous: {
    family: 'Righteous',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Risque: {
    family: 'Risque',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Road-Rage': {
    family: 'Road Rage',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Roboto: {
    family: 'Roboto',
    category: 'sans-serif',
    variants: ['100', '100italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Roboto-Condensed': {
    family: 'Roboto Condensed',
    category: 'sans-serif',
    variants: ['300', '300italic', 'regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Roboto-Mono': {
    family: 'Roboto Mono',
    category: 'monospace',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Roboto-Slab': {
    family: 'Roboto Slab',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Rochester: {
    family: 'Rochester',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Rock-Salt': {
    family: 'Rock Salt',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'RocknRoll-One': {
    family: 'RocknRoll One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Rokkitt: {
    family: 'Rokkitt',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Romanesco: {
    family: 'Romanesco',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Ropa-Sans': {
    family: 'Ropa Sans',
    category: 'sans-serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Rosario: {
    family: 'Rosario',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Rosarivo: {
    family: 'Rosarivo',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Rouge-Script': {
    family: 'Rouge Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Rowdies: {
    family: 'Rowdies',
    category: 'display',
    variants: ['300', 'regular', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Rozha-One': {
    family: 'Rozha One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Rubik: {
    family: 'Rubik',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700', '800', '900', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'hebrew', 'latin', 'latin-ext']
  },
  'Rubik-Beastly': {
    family: 'Rubik Beastly',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'hebrew', 'latin', 'latin-ext']
  },
  'Rubik-Mono-One': {
    family: 'Rubik Mono One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Ruda: {
    family: 'Ruda',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  Rufina: {
    family: 'Rufina',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Ruge-Boogie': {
    family: 'Ruge Boogie',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Ruluko: {
    family: 'Ruluko',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Rum-Raisin': {
    family: 'Rum Raisin',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Ruslan-Display': {
    family: 'Ruslan Display',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Russo-One': {
    family: 'Russo One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  Ruthie: {
    family: 'Ruthie',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Rye: {
    family: 'Rye',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'STIX-Two-Text': {
    family: 'STIX Two Text',
    category: 'serif',
    variants: ['regular', '500', '600', '700', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  Sacramento: {
    family: 'Sacramento',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Sahitya: {
    family: 'Sahitya',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin']
  },
  Sail: {
    family: 'Sail',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Saira: {
    family: 'Saira',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Saira-Condensed': {
    family: 'Saira Condensed',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Saira-Extra-Condensed': {
    family: 'Saira Extra Condensed',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Saira-Semi-Condensed': {
    family: 'Saira Semi Condensed',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Saira-Stencil-One': {
    family: 'Saira Stencil One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Salsa: {
    family: 'Salsa',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Sanchez: {
    family: 'Sanchez',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  Sancreek: {
    family: 'Sancreek',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Sansita: {
    family: 'Sansita',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Sansita-Swashed': {
    family: 'Sansita Swashed',
    category: 'display',
    variants: ['300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Sarabun: {
    family: 'Sarabun',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Sarala: {
    family: 'Sarala',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Sarina: {
    family: 'Sarina',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Sarpanch: {
    family: 'Sarpanch',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Sassy-Frass': {
    family: 'Sassy Frass',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Satisfy: {
    family: 'Satisfy',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Sawarabi-Gothic': {
    family: 'Sawarabi Gothic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  'Sawarabi-Mincho': {
    family: 'Sawarabi Mincho',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  Scada: {
    family: 'Scada',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
  },
  Scheherazade: {
    family: 'Scheherazade',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['arabic', 'latin']
  },
  'Scheherazade-New': {
    family: 'Scheherazade New',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['arabic', 'latin', 'latin-ext']
  },
  Schoolbell: {
    family: 'Schoolbell',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Scope-One': {
    family: 'Scope One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Seaweed-Script': {
    family: 'Seaweed Script',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Secular-One': {
    family: 'Secular One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  'Sedgwick-Ave': {
    family: 'Sedgwick Ave',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Sedgwick-Ave-Display': {
    family: 'Sedgwick Ave Display',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Sen: {
    family: 'Sen',
    category: 'sans-serif',
    variants: ['regular', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  Sevillana: {
    family: 'Sevillana',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Seymour-One': {
    family: 'Seymour One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Shadows-Into-Light': {
    family: 'Shadows Into Light',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Shadows-Into-Light-Two': {
    family: 'Shadows Into Light Two',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Shalimar: {
    family: 'Shalimar',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Shanti: {
    family: 'Shanti',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Share: {
    family: 'Share',
    category: 'display',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Share-Tech': {
    family: 'Share Tech',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Share-Tech-Mono': {
    family: 'Share Tech Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Shippori-Antique': {
    family: 'Shippori Antique',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  'Shippori-Antique-B1': {
    family: 'Shippori Antique B1',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  'Shippori-Mincho': {
    family: 'Shippori Mincho',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  'Shippori-Mincho-B1': {
    family: 'Shippori Mincho B1',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  Shojumaru: {
    family: 'Shojumaru',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Short-Stack': {
    family: 'Short Stack',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Shrikhand: {
    family: 'Shrikhand',
    category: 'display',
    variants: ['regular'],
    subsets: ['gujarati', 'latin', 'latin-ext']
  },
  Siemreap: {
    family: 'Siemreap',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer']
  },
  'Sigmar-One': {
    family: 'Sigmar One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Signika: {
    family: 'Signika',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Signika-Negative': {
    family: 'Signika Negative',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Simonetta: {
    family: 'Simonetta',
    category: 'display',
    variants: ['regular', 'italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Single-Day': {
    family: 'Single Day',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean']
  },
  Sintony: {
    family: 'Sintony',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Sirin-Stencil': {
    family: 'Sirin Stencil',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Six-Caps': {
    family: 'Six Caps',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Skranji: {
    family: 'Skranji',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  'Slabo-13px': {
    family: 'Slabo 13px',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Slabo-27px': {
    family: 'Slabo 27px',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Slackey: {
    family: 'Slackey',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Smokum: {
    family: 'Smokum',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Smythe: {
    family: 'Smythe',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Sniglet: {
    family: 'Sniglet',
    category: 'display',
    variants: ['regular', '800'],
    subsets: ['latin', 'latin-ext']
  },
  Snippet: {
    family: 'Snippet',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Snowburst-One': {
    family: 'Snowburst One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Sofadi-One': {
    family: 'Sofadi One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Sofia: {
    family: 'Sofia',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Solway: {
    family: 'Solway',
    category: 'serif',
    variants: ['300', 'regular', '500', '700', '800'],
    subsets: ['latin']
  },
  'Song-Myung': {
    family: 'Song Myung',
    category: 'serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Sonsie-One': {
    family: 'Sonsie One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Sora: {
    family: 'Sora',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'Sorts-Mill-Goudy': {
    family: 'Sorts Mill Goudy',
    category: 'serif',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Source-Code-Pro': {
    family: 'Source Code Pro',
    category: 'monospace',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Source-Sans-Pro': {
    family: 'Source Sans Pro',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  'Source-Serif-Pro': {
    family: 'Source Serif Pro',
    category: 'serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '900', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Space-Grotesk': {
    family: 'Space Grotesk',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Space-Mono': {
    family: 'Space Mono',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Spartan: {
    family: 'Spartan',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
  },
  'Special-Elite': {
    family: 'Special Elite',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Spectral: {
    family: 'Spectral',
    category: 'serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Spectral-SC': {
    family: 'Spectral SC',
    category: 'serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  'Spicy-Rice': {
    family: 'Spicy Rice',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Spinnaker: {
    family: 'Spinnaker',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Spirax: {
    family: 'Spirax',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Squada-One': {
    family: 'Squada One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Sree-Krushnadevaraya': {
    family: 'Sree Krushnadevaraya',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Sriracha: {
    family: 'Sriracha',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Srisakdi: {
    family: 'Srisakdi',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Staatliches: {
    family: 'Staatliches',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Stalemate: {
    family: 'Stalemate',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Stalinist-One': {
    family: 'Stalinist One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Stardos-Stencil': {
    family: 'Stardos Stencil',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Stick: {
    family: 'Stick',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Stick-No-Bills': {
    family: 'Stick No Bills',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'sinhala']
  },
  'Stint-Ultra-Condensed': {
    family: 'Stint Ultra Condensed',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Stint-Ultra-Expanded': {
    family: 'Stint Ultra Expanded',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Stoke: {
    family: 'Stoke',
    category: 'serif',
    variants: ['300', 'regular'],
    subsets: ['latin', 'latin-ext']
  },
  Strait: {
    family: 'Strait',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Style-Script': {
    family: 'Style Script',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Stylish: {
    family: 'Stylish',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Sue-Ellen-Francisco': {
    family: 'Sue Ellen Francisco',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Suez-One': {
    family: 'Suez One',
    category: 'serif',
    variants: ['regular'],
    subsets: ['hebrew', 'latin', 'latin-ext']
  },
  'Sulphur-Point': {
    family: 'Sulphur Point',
    category: 'sans-serif',
    variants: ['300', 'regular', '700'],
    subsets: ['latin', 'latin-ext']
  },
  Sumana: {
    family: 'Sumana',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Sunflower: {
    family: 'Sunflower',
    category: 'sans-serif',
    variants: ['300', '500', '700'],
    subsets: ['korean', 'latin']
  },
  Sunshiney: {
    family: 'Sunshiney',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Supermercado-One': {
    family: 'Supermercado One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Sura: {
    family: 'Sura',
    category: 'serif',
    variants: ['regular', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Suranna: {
    family: 'Suranna',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Suravaram: {
    family: 'Suravaram',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Suwannaphum: {
    family: 'Suwannaphum',
    category: 'serif',
    variants: ['100', '300', 'regular', '700', '900'],
    subsets: ['khmer', 'latin']
  },
  'Swanky-and-Moo-Moo': {
    family: 'Swanky and Moo Moo',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Syncopate: {
    family: 'Syncopate',
    category: 'sans-serif',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Syne: {
    family: 'Syne',
    category: 'sans-serif',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  'Syne-Mono': {
    family: 'Syne Mono',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Syne-Tactile': {
    family: 'Syne Tactile',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Tajawal: {
    family: 'Tajawal',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '700', '800', '900'],
    subsets: ['arabic', 'latin']
  },
  Tangerine: {
    family: 'Tangerine',
    category: 'handwriting',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Taprom: {
    family: 'Taprom',
    category: 'display',
    variants: ['regular'],
    subsets: ['khmer', 'latin']
  },
  Tauri: {
    family: 'Tauri',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Taviraj: {
    family: 'Taviraj',
    category: 'serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Teko: {
    family: 'Teko',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Telex: {
    family: 'Telex',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Tenali-Ramakrishna': {
    family: 'Tenali Ramakrishna',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  'Tenor-Sans': {
    family: 'Tenor Sans',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Text-Me-One': {
    family: 'Text Me One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Texturina: {
    family: 'Texturina',
    category: 'serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Thasadith: {
    family: 'Thasadith',
    category: 'sans-serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  'The-Girl-Next-Door': {
    family: 'The Girl Next Door',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Tienne: {
    family: 'Tienne',
    category: 'serif',
    variants: ['regular', '700', '900'],
    subsets: ['latin']
  },
  Tillana: {
    family: 'Tillana',
    category: 'handwriting',
    variants: ['regular', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Timmana: {
    family: 'Timmana',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'telugu']
  },
  Tinos: {
    family: 'Tinos',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  'Titan-One': {
    family: 'Titan One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Titillium-Web': {
    family: 'Titillium Web',
    category: 'sans-serif',
    variants: ['200', '200italic', '300', '300italic', 'regular', 'italic', '600', '600italic', '700', '700italic', '900'],
    subsets: ['latin', 'latin-ext']
  },
  Tomorrow: {
    family: 'Tomorrow',
    category: 'sans-serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  Tourney: {
    family: 'Tourney',
    category: 'display',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Trade-Winds': {
    family: 'Trade Winds',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Train-One': {
    family: 'Train One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  Trirong: {
    family: 'Trirong',
    category: 'serif',
    variants: ['100', '100italic', '200', '200italic', '300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic', '800', '800italic', '900', '900italic'],
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese']
  },
  Trispace: {
    family: 'Trispace',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Trocchi: {
    family: 'Trocchi',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Trochut: {
    family: 'Trochut',
    category: 'display',
    variants: ['regular', 'italic', '700'],
    subsets: ['latin']
  },
  Truculenta: {
    family: 'Truculenta',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Trykker: {
    family: 'Trykker',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Tulpen-One': {
    family: 'Tulpen One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Turret-Road': {
    family: 'Turret Road',
    category: 'display',
    variants: ['200', '300', 'regular', '500', '700', '800'],
    subsets: ['latin', 'latin-ext']
  },
  Ubuntu: {
    family: 'Ubuntu',
    category: 'sans-serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  'Ubuntu-Condensed': {
    family: 'Ubuntu Condensed',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  'Ubuntu-Mono': {
    family: 'Ubuntu Mono',
    category: 'monospace',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext']
  },
  Uchen: {
    family: 'Uchen',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin', 'tibetan']
  },
  Ultra: {
    family: 'Ultra',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Uncial-Antiqua': {
    family: 'Uncial Antiqua',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Underdog: {
    family: 'Underdog',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'latin', 'latin-ext']
  },
  'Unica-One': {
    family: 'Unica One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  UnifrakturCook: {
    family: 'UnifrakturCook',
    category: 'display',
    variants: ['700'],
    subsets: ['latin']
  },
  UnifrakturMaguntia: {
    family: 'UnifrakturMaguntia',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Unkempt: {
    family: 'Unkempt',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin']
  },
  Unlock: {
    family: 'Unlock',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  Unna: {
    family: 'Unna',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  Urbanist: {
    family: 'Urbanist',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext']
  },
  VT323: {
    family: 'VT323',
    category: 'monospace',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Vampiro-One': {
    family: 'Vampiro One',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Varela: {
    family: 'Varela',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Varela-Round': {
    family: 'Varela Round',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['hebrew', 'latin', 'latin-ext', 'vietnamese']
  },
  Varta: {
    family: 'Varta',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Vast-Shadow': {
    family: 'Vast Shadow',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Vesper-Libre': {
    family: 'Vesper Libre',
    category: 'serif',
    variants: ['regular', '500', '700', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Viaoda-Libre': {
    family: 'Viaoda Libre',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Vibes: {
    family: 'Vibes',
    category: 'display',
    variants: ['regular'],
    subsets: ['arabic', 'latin']
  },
  Vibur: {
    family: 'Vibur',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Vidaloka: {
    family: 'Vidaloka',
    category: 'serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  Viga: {
    family: 'Viga',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Voces: {
    family: 'Voces',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Volkhov: {
    family: 'Volkhov',
    category: 'serif',
    variants: ['regular', 'italic', '700', '700italic'],
    subsets: ['latin']
  },
  Vollkorn: {
    family: 'Vollkorn',
    category: 'serif',
    variants: ['regular', '500', '600', '700', '800', '900', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese']
  },
  'Vollkorn-SC': {
    family: 'Vollkorn SC',
    category: 'serif',
    variants: ['regular', '600', '700', '900'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Voltaire: {
    family: 'Voltaire',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Waiting-for-the-Sunrise': {
    family: 'Waiting for the Sunrise',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Wallpoet: {
    family: 'Wallpoet',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Walter-Turncoat': {
    family: 'Walter Turncoat',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Warnes: {
    family: 'Warnes',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Wellfleet: {
    family: 'Wellfleet',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Wendy-One': {
    family: 'Wendy One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  WindSong: {
    family: 'WindSong',
    category: 'handwriting',
    variants: ['regular', '500'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Wire-One': {
    family: 'Wire One',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Work-Sans': {
    family: 'Work Sans',
    category: 'sans-serif',
    variants: ['100', '200', '300', 'regular', '500', '600', '700', '800', '900', '100italic', '200italic', '300italic', 'italic', '500italic', '600italic', '700italic', '800italic', '900italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Xanh-Mono': {
    family: 'Xanh Mono',
    category: 'monospace',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  Yaldevi: {
    family: 'Yaldevi',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'sinhala']
  },
  'Yanone-Kaffeesatz': {
    family: 'Yanone Kaffeesatz',
    category: 'sans-serif',
    variants: ['200', '300', 'regular', '500', '600', '700'],
    subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese']
  },
  Yantramanav: {
    family: 'Yantramanav',
    category: 'sans-serif',
    variants: ['100', '300', 'regular', '500', '700', '900'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  'Yatra-One': {
    family: 'Yatra One',
    category: 'display',
    variants: ['regular'],
    subsets: ['devanagari', 'latin', 'latin-ext']
  },
  Yellowtail: {
    family: 'Yellowtail',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Yeon-Sung': {
    family: 'Yeon Sung',
    category: 'display',
    variants: ['regular'],
    subsets: ['korean', 'latin']
  },
  'Yeseva-One': {
    family: 'Yeseva One',
    category: 'display',
    variants: ['regular'],
    subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese']
  },
  Yesteryear: {
    family: 'Yesteryear',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  Yomogi: {
    family: 'Yomogi',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext', 'vietnamese']
  },
  Yrsa: {
    family: 'Yrsa',
    category: 'serif',
    variants: ['300', 'regular', '500', '600', '700', '300italic', 'italic', '500italic', '600italic', '700italic'],
    subsets: ['latin', 'latin-ext', 'vietnamese']
  },
  'Yuji-Boku': {
    family: 'Yuji Boku',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Yuji-Mai': {
    family: 'Yuji Mai',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Yuji-Syuku': {
    family: 'Yuji Syuku',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Yusei-Magic': {
    family: 'Yusei Magic',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['japanese', 'latin', 'latin-ext']
  },
  'ZCOOL-KuaiLe': {
    family: 'ZCOOL KuaiLe',
    category: 'display',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  'ZCOOL-QingKe-HuangYou': {
    family: 'ZCOOL QingKe HuangYou',
    category: 'display',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  'ZCOOL-XiaoWei': {
    family: 'ZCOOL XiaoWei',
    category: 'serif',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  'Zen-Antique': {
    family: 'Zen Antique',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Antique-Soft': {
    family: 'Zen Antique Soft',
    category: 'serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Dots': {
    family: 'Zen Dots',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  'Zen-Kaku-Gothic-Antique': {
    family: 'Zen Kaku Gothic Antique',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '700', '900'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Kaku-Gothic-New': {
    family: 'Zen Kaku Gothic New',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '700', '900'],
    subsets: ['cyrillic', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Kurenaido': {
    family: 'Zen Kurenaido',
    category: 'sans-serif',
    variants: ['regular'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Loop': {
    family: 'Zen Loop',
    category: 'display',
    variants: ['regular', 'italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Zen-Maru-Gothic': {
    family: 'Zen Maru Gothic',
    category: 'sans-serif',
    variants: ['300', 'regular', '500', '700', '900'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Old-Mincho': {
    family: 'Zen Old Mincho',
    category: 'serif',
    variants: ['regular', '700', '900'],
    subsets: ['cyrillic', 'greek', 'japanese', 'latin', 'latin-ext']
  },
  'Zen-Tokyo-Zoo': {
    family: 'Zen Tokyo Zoo',
    category: 'display',
    variants: ['regular'],
    subsets: ['latin', 'latin-ext']
  },
  Zeyada: {
    family: 'Zeyada',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['latin']
  },
  'Zhi-Mang-Xing': {
    family: 'Zhi Mang Xing',
    category: 'handwriting',
    variants: ['regular'],
    subsets: ['chinese-simplified', 'latin']
  },
  'Zilla-Slab': {
    family: 'Zilla Slab',
    category: 'serif',
    variants: ['300', '300italic', 'regular', 'italic', '500', '500italic', '600', '600italic', '700', '700italic'],
    subsets: ['latin', 'latin-ext']
  },
  'Zilla-Slab-Highlight': {
    family: 'Zilla Slab Highlight',
    category: 'display',
    variants: ['regular', '700'],
    subsets: ['latin', 'latin-ext']
  }
};

/***/ }),

/***/ "./src/controls/typography-control/fontPicker/index.js":
/*!*************************************************************!*\
  !*** ./src/controls/typography-control/fontPicker/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _googleFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googleFonts */ "./src/controls/typography-control/fontPicker/googleFonts.js");

/**
 * WordPress dependencies
 */




/**
 * External Dependencies
 */


/**
 * Internal dependencies
 */

const FontFamilyPicker = ({
  label,
  value,
  help,
  instanceId,
  onChange,
  className,
  ...props
}) => {
  const id = `inspector-zb-font-family-${instanceId}`;
  const fonts = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'zolo-blocks')
  }, {
    value: 'Arial',
    label: 'Arial'
  }, {
    value: 'Helvetica',
    label: 'Helvetica'
  }, {
    value: 'Times-New-Roman',
    label: 'Times New Roman'
  }, {
    value: 'Georgia',
    label: 'Georgia'
  }];

  //Add Google Fonts
  Object.keys(_googleFonts__WEBPACK_IMPORTED_MODULE_4__.googleFonts).map(font => {
    fonts.push({
      value: font,
      label: _googleFonts__WEBPACK_IMPORTED_MODULE_4__.googleFonts[font].family
    });
  });
  const onChangeValue = select => {
    console.log('on font change: ', select);
    let selectedFont = select.label;
    const googleFontsAttr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    if (selectedFont) {
      link.href = 'https://fonts.googleapis.com/css?family=' + selectedFont.replace(/ /g, '+') + googleFontsAttr;
      document.head.appendChild(link);
    }
    onChange(selectedFont);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("fontsseControl", {
    label: label,
    id: id,
    help: help,
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "zb-select-font",
    classNamePrefix: "zolo",
    value: {
      value: (value || '').replace(/\s+/g, '-'),
      label: value
    },
    onChange: onChangeValue,
    options: fonts
  }));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withInstanceId)(FontFamilyPicker));

/***/ }),

/***/ "./src/controls/typography-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/typography-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-control */ "./src/controls/reset-control/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _units_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units-btn */ "./src/controls/units-btn/index.js");
/* harmony import */ var _reset_btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reset-btn */ "./src/controls/reset-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _fontPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fontPicker */ "./src/controls/typography-control/fontPicker/index.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global/constants */ "./src/global/constants.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constant */ "./src/controls/typography-control/constant.js");
/* harmony import */ var _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fontPicker/googleFonts */ "./src/controls/typography-control/fontPicker/googleFonts.js");

//wordpress dependencies




//internal dependencies control








//block constant


//googlefonts

const TypographyDropdown = ({
  label,
  typoPrefixConstant,
  requiredProps,
  defaultFontSize
}) => {
  const {
    attributes,
    setAttributes,
    resMode,
    objAttributes
  } = requiredProps;
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontFamily`]: fontFamily,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontWeight`]: fontWeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontStyle`]: fontStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}TextTransform`]: textTransform,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}TextDecoration`]: textDecoration,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontSize`]: fontSize = defaultFontSize || undefined,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}SizeUnit`]: sizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LetterSpacing`]: letterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LineHeight`]: lineHeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LineHeightUnit`]: lineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}SizeUnit`]: TABsizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LineHeightUnit`]: TABlineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}FontSize`]: TABfontSize,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LetterSpacing`]: TABletterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LineHeight`]: TABlineHeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}SizeUnit`]: MOBsizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}FontSize`]: MOBfontSize,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LetterSpacing`]: MOBletterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LineHeight`]: MOBlineHeight
  } = attributes;

  //Update Font Weight and Font Varient
  const [zbFontWeight, setZbFontWeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constant__WEBPACK_IMPORTED_MODULE_11__.fontWeightOptions);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fontFamilyKey = (fontFamily || '').replace(/\s+/g, '-');
    let googleFontWeight = _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_12__.googleFonts[fontFamilyKey] ? _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_12__.googleFonts[fontFamilyKey].variants : [];
    let fontWeightVal = googleFontWeight.map(item => ({
      label: item,
      value: item
    }));
    const fontWeightwithDefault = [{
      label: 'Default',
      value: ''
    }, ...fontWeightVal];
    setZbFontWeight(fontWeightwithDefault);
  }, [fontFamily]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label,
    className: "zb-typography-control-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "zb-typography-dropdown",
    position: "bottom right",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: onToggle,
      "aria-expanded": isOpen,
      className: "zb-typography-dropdown-btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M5 20L19 20",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14.6158 4.57792C14.9876 4.20789 15.4918 4 16.0176 4C16.2779 4 16.5357 4.05104 16.7762 4.1502C17.0168 4.24936 17.2353 4.3947 17.4194 4.57792C17.6035 4.76115 18.7495 5.97401 18.8491 6.21341C18.9487 6.4528 19 6.70938 19 6.9685C19 7.22762 18.9487 7.4842 18.8491 7.7236C18.7495 7.96299 18.6035 8.18051 18.4194 8.36374L9.73803 17H5L6.5 12.5L14.6158 4.57792Z",
      stroke: "#4D4D4D",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zolo-panel-control zb-typography-component-panel"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fontPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "zb-fontpicker-fontfamily",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Family', 'zolo-blocks'),
      value: fontFamily,
      onChange: FontFamily => {
        setAttributes({
          [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontFamily`]: FontFamily
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-res-range-control-wrapper"
    }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: sizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.sizeUnitTypes,
      onClick: sizeUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}SizeUnit`]: sizeUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => {
        setAttributes({
          [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontSize`]: defaultFontSize || (objAttributes[`${typoPrefixConstant}ZRPFontSize`] || {}).default
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: fontSize,
      onChange: FontSize => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontSize`]: FontSize
      }),
      step: sizeUnit === 'em' ? 0.1 : 1,
      min: 0,
      max: sizeUnit === 'em' ? 10 : 200
    }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: TABsizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.sizeUnitTypes,
      onClick: TABsizeUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}SizeUnit`]: TABsizeUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}FontSize`]: (objAttributes[`TAB${typoPrefixConstant}ZRPFontSize`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: TABfontSize,
      onChange: FontSize => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}FontSize`]: FontSize
      }),
      step: TABsizeUnit === 'em' ? 0.1 : 1,
      min: 0,
      max: TABsizeUnit === 'em' ? 10 : 200
    }))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: MOBsizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.sizeUnitTypes,
      onClick: MOBsizeUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}SizeUnit`]: MOBsizeUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}FontSize`]: (objAttributes[`MOB${typoPrefixConstant}ZRPFontSize`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Size', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: MOBfontSize,
      onChange: FontSize => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}FontSize`]: FontSize
      }),
      step: MOBsizeUnit === 'em' ? 0.1 : 1,
      min: 0,
      max: MOBsizeUnit === 'em' ? 10 : 200
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Weight', 'zolo-blocks'),
      value: fontWeight,
      options: zbFontWeight,
      onChange: FontWeight => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontWeight`]: FontWeight
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Font Style', 'zolo-blocks'),
      value: fontStyle,
      options: _constant__WEBPACK_IMPORTED_MODULE_11__.fontStyleOptions,
      onChange: fontStyle => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}FontStyle`]: fontStyle
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Transform', 'zolo-blocks'),
      value: textTransform,
      options: _constant__WEBPACK_IMPORTED_MODULE_11__.textTransformOptions,
      onChange: TextTransform => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}TextTransform`]: TextTransform
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Decoration', 'zolo-blocks'),
      value: textDecoration,
      options: _constant__WEBPACK_IMPORTED_MODULE_11__.textDecorationOptions,
      onChange: TextDecoration => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}TextDecoration`]: TextDecoration
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-res-range-control-wrapper"
    }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: letterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: LetterSpacingUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LetterSpacing`]: (objAttributes[`${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Letter Spacing', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: letterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: letterSpacingUnit === 'em' ? 10 : 100,
      step: letterSpacingUnit === 'em' ? 0.1 : 1
    }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: TABletterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: TABletterSpacingUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LetterSpacing`]: (objAttributes[`TAB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Letter Spacing', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: TABletterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: TABletterSpacingUnit === 'em' ? 10 : 100,
      step: TABletterSpacingUnit === 'em' ? 0.1 : 1
    }))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: MOBletterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: MOBletterSpacingUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LetterSpacing`]: (objAttributes[`MOB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Letter Spacing', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: MOBletterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: MOBletterSpacingUnit === 'em' ? 10 : 100,
      step: MOBletterSpacingUnit === 'em' ? 0.1 : 1
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-res-range-control-wrapper"
    }, resMode == 'Desktop' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: lineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: LineHeightUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LineHeightUnit`]: LineHeightUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LineHeight`]: (objAttributes[`${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Line Height', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: lineHeight,
      onChange: LineHeight => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}${typoPrefixConstant}LineHeight`]: LineHeight
      }),
      min: 0,
      max: lineHeightUnit === 'em' ? 10 : 600,
      step: lineHeightUnit === 'em' ? 0.1 : 1
    }))), resMode == 'Tablet' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: TABlineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: TABlineHeightUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LineHeightUnit`]: TABlineHeightUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LineHeight`]: (objAttributes[`TAB${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Line Height', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: TABlineHeight,
      onChange: LineHeight => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}TAB${typoPrefixConstant}LineHeight`]: LineHeight
      }),
      min: 0,
      max: TABlineHeightUnit === 'em' ? 10 : 600,
      step: TABlineHeightUnit === 'em' ? 0.1 : 1
    }))), resMode == 'Mobile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_units_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedUnit: MOBlineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_11__.LHLS_UNITS,
      onClick: MOBlineHeightUnit => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_btn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onReset: () => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LineHeight`]: (objAttributes[`MOB${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Line Height', 'zolo-blocks'),
      requiredProps: requiredProps,
      noResetBtn: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      value: MOBlineHeight,
      onChange: LineHeight => setAttributes({
        [`${_global_constants__WEBPACK_IMPORTED_MODULE_10__.prefix}MOB${typoPrefixConstant}LineHeight`]: LineHeight
      }),
      min: 0,
      max: MOBlineHeightUnit === 'em' ? 10 : 600,
      step: MOBlineHeightUnit === 'em' ? 0.1 : 1
    })))))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./src/controls/unit-btn/index.js":
/*!****************************************!*\
  !*** ./src/controls/unit-btn/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const UnitBtn = ({
  selectedUnit,
  unitTypes,
  onClick
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-unit-control-btn-group"
  }, unitTypes.map(unit => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: `zb-unit-control-btn ${unit.value === selectedUnit && 'zb-unit-active'}`,
    isSmall: true,
    variant: unit.value === selectedUnit ? 'primary' : 'secondary',
    onClick: () => onClick(unit.value)
  }, unit.label)));
};
/* harmony default export */ __webpack_exports__["default"] = (UnitBtn);

/***/ }),

/***/ "./src/controls/units-btn/index.js":
/*!*****************************************!*\
  !*** ./src/controls/units-btn/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-click-outside */ "./src/controls/units-btn/use-click-outside.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const UnitsBtn = ({
  selectedUnit = 'px',
  unitTypes,
  onClick,
  children
}) => {
  const [switcherIsOpen, setSwitcherIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const unitsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const closeUnits = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setSwitcherIsOpen(false), []);
  (0,_use_click_outside__WEBPACK_IMPORTED_MODULE_4__["default"])(unitsRef, closeUnits);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zb-units-wrapper`
  }, children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: unitsRef,
    className: `zb-units-switchers ${switcherIsOpen ? 'zb-unit-switchers-open' : ''} `,
    onClick: () => setSwitcherIsOpen(() => !switcherIsOpen)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-units-switchers-wrap"
  }, unitTypes.map(unit => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `zb-unit-switcher ${unit.value === selectedUnit && 'active'}`,
    onClick: () => {
      onClick(unit.value);
      setSwitcherIsOpen(false);
    }
  }, unit.label)))));
};
/* harmony default export */ __webpack_exports__["default"] = (UnitsBtn);

/***/ }),

/***/ "./src/controls/units-btn/use-click-outside.js":
/*!*****************************************************!*\
  !*** ./src/controls/units-btn/use-click-outside.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, handler) => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let startedInside = false;
    let startedWhenMounted = false;
    const listener = event => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    const validateEventStart = event => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };
    document.addEventListener('mousedown', validateEventStart);
    document.addEventListener('touchstart', validateEventStart);
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('mousedown', validateEventStart);
      document.removeEventListener('touchstart', validateEventStart);
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickOutside);

/***/ }),

/***/ "./src/controls/with-res-device-btn/index.js":
/*!***************************************************!*\
  !*** ./src/controls/with-res-device-btn/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-click-outside */ "./src/controls/with-res-device-btn/use-click-outside.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





const WithResDeviceBtn = ({
  label,
  requiredProps,
  children,
  controlName,
  noResetBtn = false,
  noResponsive = false
}) => {
  const {
    resMode,
    objAttributes,
    setAttributes
  } = requiredProps;
  const [switcherIsOpen, setSwitcherIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(() => resMode || 'Desktop');
  const devicesRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const closeDevices = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => setSwitcherIsOpen(false), []);
  const onClickHandler = _device => {
    const editor_type = `core/${zoloParams?.editor_type || 'edit-post'}`;
    setAttributes({
      resMode: _device
    });
    setDevice(_device);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(editor_type).__experimentalSetPreviewDeviceType(_device);
    setSwitcherIsOpen(() => !switcherIsOpen);
  };
  (0,_use_click_outside__WEBPACK_IMPORTED_MODULE_1__["default"])(devicesRef, closeDevices);

  // const onReset =

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zb-deive-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-label-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-device-label-area"
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), !noResponsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: devicesRef,
    className: `zb-device-switchers active-${device} ${switcherIsOpen ? 'zb-device-switchers-open' : ''} `,
    onClick: () => setSwitcherIsOpen(() => !switcherIsOpen)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-device-switchers-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `zb-device-switcher zb-device-switcher-desktop ${device === 'Desktop' ? 'active' : ''}`,
    onClick: () => onClickHandler('Desktop'),
    "data-tooltip": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Desktop')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.64645 7.35355C4.84171 7.15829 5.15829 7.15829 5.35355 7.35355L7.14645 9.14645C7.46143 9.46143 7.23835 10 6.79289 10H3.20711C2.76165 10 2.53857 9.46143 2.85355 9.14645L4.64645 7.35355Z",
    fill: "#1E1E1E"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "0.5",
    y: "1.5",
    width: 9,
    height: 6,
    rx: 1,
    stroke: "#1E1E1E"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `zb-device-switcher zb-device-switcher-laptop ${device === 'Tablet' ? 'active' : ''}`,
    onClick: () => onClickHandler('Tablet'),
    "data-tooltip": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Tablet')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "1.5",
    y: "0.5",
    width: 7,
    height: 9,
    rx: 1,
    stroke: "#1E1E1E"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 5,
    cy: 8,
    r: 1,
    fill: "#1E1E1E"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `zb-device-switcher zb-device-switcher-tablet ${device === 'Mobile' ? 'active' : ' '}`,
    onClick: () => onClickHandler('Mobile'),
    "data-tooltip": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Mobile')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "2.5",
    y: "0.5",
    width: 5,
    height: 9,
    rx: 1,
    stroke: "#1E1E1E"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 1.08412C6.9572 1.59704 6.52662 2 6.00175 2H3.99825C3.47338 2 3.0428 1.59704 3 1.08412C3.15567 1.02963 3.32306 1 3.49738 1H6.50262C6.67694 1 6.84433 1.02963 7 1.08412Z",
    fill: "#1E1E1E"
  })))))), !noResetBtn && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-reset-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: () => {
      resMode == 'Desktop' ? setAttributes({
        [`${controlName}ZRPAlign`]: objAttributes[`${controlName}ZRPAlign`].default
      }) : '';
      resMode == 'Tablet' ? setAttributes({
        [`TAB${controlName}ZRPAlign`]: objAttributes[`TAB${controlName}ZRPAlign`].default
      }) : '';
      resMode == 'Mobile' ? setAttributes({
        [`MOB${controlName}ZRPAlign`]: objAttributes[`MOB${controlName}ZRPAlign`].default
      }) : '';
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V6.5H7.25C7.66421 6.5 8 6.83579 8 7.25C8 7.66421 7.66421 8 7.25 8H2.75C2.33579 8 2 7.66421 2 7.25V2.75C2 2.33579 2.33579 2 2.75 2Z",
    fill: "#4d4d4d"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.29365 3.75C6.56527 3.75 5.07807 4.79769 4.42654 6.30028C4.26196 6.67984 3.82318 6.8531 3.4465 6.68726C3.06981 6.52143 2.89787 6.07929 3.06245 5.69972C3.94232 3.6705 5.95253 2.25 8.29365 2.25C11.4452 2.25 14 4.82436 14 8C14 11.1756 11.4452 13.75 8.29365 13.75C6.42651 13.75 4.76879 12.8456 3.72895 11.451C3.48203 11.1198 3.54828 10.6497 3.87693 10.4009C4.20558 10.1521 4.67217 10.2188 4.91909 10.55C5.68985 11.5837 6.91443 12.25 8.29365 12.25C10.623 12.25 12.5114 10.3472 12.5114 8C12.5114 5.65279 10.623 3.75 8.29365 3.75Z",
    fill: "#4d4d4d"
  }))))), children);
};
/* harmony default export */ __webpack_exports__["default"] = (WithResDeviceBtn);

/***/ }),

/***/ "./src/controls/with-res-device-btn/use-click-outside.js":
/*!***************************************************************!*\
  !*** ./src/controls/with-res-device-btn/use-click-outside.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, handler) => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let startedInside = false;
    let startedWhenMounted = false;
    const listener = event => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    const validateEventStart = event => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };
    document.addEventListener('mousedown', validateEventStart);
    document.addEventListener('touchstart', validateEventStart);
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('mousedown', validateEventStart);
      document.removeEventListener('touchstart', validateEventStart);
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickOutside);

/***/ }),

/***/ "./src/global/components/advancedOptions.js":
/*!**************************************************!*\
  !*** ./src/global/components/advancedOptions.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedOptions: function() { return /* binding */ AdvancedOptions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls_background_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/background-control */ "./src/controls/background-control/index.js");
/* harmony import */ var _controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls/dimensions-control */ "./src/controls/dimensions-control/index.js");
/* harmony import */ var _controls_border_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../controls/border-control */ "./src/controls/border-control/index.js");
/* harmony import */ var _controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controls/boxshadow-control */ "./src/controls/boxshadow-control/index.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const AdvancedOptions = props => {
  const {
    attributes,
    setAttributes,
    requiredProps
  } = props;
  const {
    uniqueId,
    customCss,
    responsiveness,
    parentClasses,
    customClass,
    zoloStyles,
    globalConfig
  } = attributes;
  const handleResponsiveness = (key, value, classname) => {
    let updatedClasses = [...parentClasses, classname];
    //remove class is value is false
    if (value === false) {
      updatedClasses = updatedClasses.filter(function (e) {
        return e !== classname;
      });
    }
    const uniqueClasses = [...new Set(updatedClasses)];
    setAttributes({
      responsiveness: {
        ...responsiveness,
        [key]: value
      },
      parentClasses: [...uniqueClasses]
    });
  };
  const handleCustomClass = classname => {
    const updatedClasses = parentClasses.filter(function (e) {
      return e !== customClass;
    });
    setAttributes({
      customClass: classname,
      parentClasses: [...updatedClasses, classname]
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'zolo-blocks'),
    initialOpen: false
  }, globalConfig?.margin && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'zolo-blocks'),
    controlName: globalConfig.margin.prefix || 'mainMargin',
    requiredProps: requiredProps,
    forBorderRadius: false
  }), globalConfig?.padding && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'zolo-blocks'),
    controlName: globalConfig.padding.prefix || 'mainPadding',
    requiredProps: requiredProps,
    forBorderRadius: false
  })), globalConfig?.background && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'zolo-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_background_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    controlName: globalConfig.background.prefix || 'mainBg',
    requiredProps: requiredProps
  })), (globalConfig?.border || globalConfig?.borderRadius || globalConfig?.boxShadow) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'zolo-blocks'),
    initialOpen: false
  }, globalConfig?.border && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'zolo-blocks'),
    controlName: globalConfig.border.prefix || 'mainBorder',
    requiredProps: requiredProps,
    forBorderRadius: false
  }), globalConfig?.borderRadius && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'zolo-blocks'),
    controlName: globalConfig.borderRadius.prefix || 'mainBorderRadius',
    requiredProps: requiredProps,
    forBorderRadius: true
  }), globalConfig?.boxShadow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    controlName: globalConfig.boxShadow.prefix || 'mainBoxShadow',
    requiredProps: requiredProps,
    forBorderRadius: false
  })), globalConfig?.responsiveControls && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Control', 'zolo-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Desktop', 'zolo-blocks'),
    checked: responsiveness?.hideDesktop || false,
    onChange: () => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Tab', 'zolo-blocks'),
    checked: responsiveness?.hideTab || false,
    onChange: () => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile', 'zolo-blocks'),
    checked: responsiveness?.hideMobile || false,
    onChange: () => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Class', 'zolo-blocks'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Custom Class', 'zolo-blocks'),
    onChange: value => handleCustomClass(value),
    value: customClass,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add custom class(es) to the block. Separate multiple classes with a space.', 'zolo-blocks')
  })));
};

/***/ }),

/***/ "./src/global/components/globalStyleHandler.js":
/*!*****************************************************!*\
  !*** ./src/global/components/globalStyleHandler.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyleHanlder: function() { return /* binding */ GlobalStyleHanlder; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _helpers_normal_bg_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/normal-bg-helpers */ "./src/helpers/normal-bg-helpers.js");
/* harmony import */ var _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/backgroundHelpers */ "./src/helpers/backgroundHelpers.js");
/* harmony import */ var _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/dimension-helper */ "./src/helpers/dimension-helper.js");
/* harmony import */ var _helpers_border_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/border-helper */ "./src/helpers/border-helper.js");
/* harmony import */ var _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/boxshadow-helper */ "./src/helpers/boxshadow-helper.js");

/**
 * WordPress dependencies
 */







const GlobalStyleHanlder = props => {
  const {
    attributes,
    setAttributes,
    desktopAllStyle,
    tabAllStyle,
    mobileAllStyle
  } = props;
  const {
    uniqueId,
    zoloStyles,
    globalConfig
  } = attributes;
  const {
    desktopBorderStyle: desktopBorderStyles,
    tabBorderStyle: tabBorderStyles,
    mobBorderStyle: mobileBorderStyles
  } = (0,_helpers_border_helper__WEBPACK_IMPORTED_MODULE_6__.generateBorderStyle)({
    controlName: globalConfig?.border?.prefix || 'mainBorder',
    attributes
  });

  // border-radius
  const {
    dimensionStylesDesktop: borderRadiusStylesDesktop,
    dimensionStylesTab: borderRadiusStylesTab,
    dimensionStylesMobile: borderRadiusStylesMobile
  } = (0,_helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_5__.generateDimensionStyle)({
    controlName: globalConfig?.borderRadius?.prefix || 'mainBorderRadius',
    styleFor: 'border-radius',
    attributes
  });

  // box shadow
  const {
    boxShadowStyle: normalBoxShadowStyle
  } = (0,_helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_7__.generateBoxShadowStyles)({
    controlName: globalConfig?.boxShadow?.prefix || 'mainBoxShadow',
    attributes
  });

  // generate Background
  // const {
  //     backgroundStylesDesktop: desktopBgStyles,
  //     backgroundStylesTab: tabBgStyles,
  //     backgroundStylesMobile: mobileBgStyles,
  // } = generateNormalBGControlStyles({
  //     controlName: globalConfig?.background?.prefix || 'mainBg',
  //     attributes,
  //     noMainBGImg: false,
  // });

  const {
    // main background
    backgroundStylesDesktop: bgDeskStyle,
    hoverBackgroundStylesDesktop: hoverBgDeskStyle,
    backgroundStylesTab: bgTabStyle,
    hoverBackgroundStylesTab: hoverBgTabStyle,
    backgroundStylesMobile: bgMobStyle,
    hoverBackgroundStylesMobile: hoverBgMobStyle,
    // overlay
    overlayStylesDesktop: overlayDeskStyle,
    hoverOverlayStylesDesktop: hoverOverlayDeskStyle,
    overlayStylesTab: overlayTabStyle,
    hoverOverlayStylesTab: hoverOverlayTabStyle,
    overlayStylesMobile: overlayMobStyle,
    hoverOverlayStylesMobile: hoverOverlayMobStyle
  } = (0,_helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_4__.generateBackgroundControlStyles)({
    attributes,
    controlName: globalConfig?.background?.prefix || 'mainBg'
  });

  // margin
  const {
    dimensionStylesDesktop: marginStylesDesktop,
    dimensionStylesTab: marginStylesTab,
    dimensionStylesMobile: marginStylesMobile
  } = (0,_helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_5__.generateDimensionStyle)({
    controlName: globalConfig?.margin?.prefix || 'mainMargin',
    styleFor: 'margin',
    attributes
  });

  // padding
  const {
    dimensionStylesDesktop: paddingStylesDesktop,
    dimensionStylesTab: paddingStylesTab,
    dimensionStylesMobile: paddingStylesMobile
  } = (0,_helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_5__.generateDimensionStyle)({
    controlName: globalConfig?.padding?.prefix || 'mainPadding',
    styleFor: 'padding',
    attributes
  });
  const desktopGlobalStyles = `
        .parent-${uniqueId} {
            ${normalBoxShadowStyle ? normalBoxShadowStyle : ''}
            ${borderRadiusStylesDesktop ? borderRadiusStylesDesktop : ''}
            ${desktopBorderStyles ? desktopBorderStyles : ''}
            ${marginStylesDesktop ? marginStylesDesktop : ''}
            ${paddingStylesDesktop ? paddingStylesDesktop : ''}
            ${bgDeskStyle ? bgDeskStyle : ''}
            transition: all 0.3s ease-in-out;
        }

        .parent-${uniqueId}:hover {
            ${hoverBgDeskStyle ? hoverBgDeskStyle : ''}
        }

        .parent-${uniqueId}:after {
            ${overlayDeskStyle ? overlayDeskStyle : ''} 
            transition: all 0.3s ease-in-out;
        }

        .parent-${uniqueId}:hover:after {
            ${hoverOverlayDeskStyle ? hoverOverlayDeskStyle : ''}
        }
    `;
  const tabGlobalStyles = `
        .parent-${uniqueId} {
            ${borderRadiusStylesTab ? borderRadiusStylesTab : ''}
            ${tabBorderStyles ? tabBorderStyles : ''}
            ${marginStylesTab ? marginStylesTab : ''}
            ${paddingStylesTab ? paddingStylesTab : ''}
            ${bgTabStyle ? bgTabStyle : ''}
        }

        .parent-${uniqueId}:hover {
            ${hoverBgTabStyle ? hoverBgTabStyle : ''}
        }

        .parent-${uniqueId}:after {
            ${overlayTabStyle ? overlayTabStyle : ''}
        }

        .parent-${uniqueId}:hover:after {
            ${hoverOverlayTabStyle ? hoverOverlayTabStyle : ''}
        }
    `;
  const mobileGlobalStyles = `
        .parent-${uniqueId} {
            ${borderRadiusStylesMobile ? borderRadiusStylesMobile : ''}
            ${mobileBorderStyles ? mobileBorderStyles : ''}
            ${marginStylesMobile ? marginStylesMobile : ''}
            ${paddingStylesMobile ? paddingStylesMobile : ''}
            ${bgMobStyle ? bgMobStyle : ''}

        }

        .parent-${uniqueId}:hover {
            ${hoverBgMobStyle ? hoverBgMobStyle : ''}
        }

        .parent-${uniqueId}:after {
            ${overlayMobStyle ? overlayMobStyle : ''}
        }

        .parent-${uniqueId}:hover:after {
            ${hoverOverlayMobStyle ? hoverOverlayMobStyle : ''}
        }
    `;
  const allStyle = `
		${desktopAllStyle + desktopGlobalStyles}
		@media all and (max-width: 1024px) {
			${tabAllStyle + tabGlobalStyles}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle + mobileGlobalStyles}
		}
	`;

  // Set All Style in "zoloStyles" Attribute
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const styles = {
      desktop: (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.softMinifyCssStrings)(desktopAllStyle + desktopGlobalStyles),
      tab: (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.softMinifyCssStrings)(tabAllStyle + tabGlobalStyles),
      mobile: (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.softMinifyCssStrings)(mobileAllStyle + mobileGlobalStyles)
    };
    if (JSON.stringify(zoloStyles) !== JSON.stringify(styles)) {
      setAttributes({
        zoloStyles: {
          ...styles
        }
      });
    }
  }, [attributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, allStyle));
};

/***/ }),

/***/ "./src/global/constants.js":
/*!*********************************!*\
  !*** ./src/global/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACKGROUND_TYPES: function() { return /* binding */ BACKGROUND_TYPES; },
/* harmony export */   BORDER_TYPES: function() { return /* binding */ BORDER_TYPES; },
/* harmony export */   BOX_SHADOW_TYPES: function() { return /* binding */ BOX_SHADOW_TYPES; },
/* harmony export */   CONTENT_WIDTH_TYPES: function() { return /* binding */ CONTENT_WIDTH_TYPES; },
/* harmony export */   DEFAULT_ALIGNS: function() { return /* binding */ DEFAULT_ALIGNS; },
/* harmony export */   FLEX_ALIGNS: function() { return /* binding */ FLEX_ALIGNS; },
/* harmony export */   FLEX_ALIGNS_ROW: function() { return /* binding */ FLEX_ALIGNS_ROW; },
/* harmony export */   FLEX_ALIGN_OPTIONS: function() { return /* binding */ FLEX_ALIGN_OPTIONS; },
/* harmony export */   FLEX_DIRECTIONS: function() { return /* binding */ FLEX_DIRECTIONS; },
/* harmony export */   FLEX_HORIZONTAL_OPTIONS: function() { return /* binding */ FLEX_HORIZONTAL_OPTIONS; },
/* harmony export */   FLEX_JUSTIFIES: function() { return /* binding */ FLEX_JUSTIFIES; },
/* harmony export */   FLEX_JUSTIFIES_ROW: function() { return /* binding */ FLEX_JUSTIFIES_ROW; },
/* harmony export */   FLEX_WRAPS: function() { return /* binding */ FLEX_WRAPS; },
/* harmony export */   HEADING: function() { return /* binding */ HEADING; },
/* harmony export */   ICON_BOX_OPTIONS: function() { return /* binding */ ICON_BOX_OPTIONS; },
/* harmony export */   ICON_POSITIONS: function() { return /* binding */ ICON_POSITIONS; },
/* harmony export */   ICON_STATUS: function() { return /* binding */ ICON_STATUS; },
/* harmony export */   NORMAL_HOVER: function() { return /* binding */ NORMAL_HOVER; },
/* harmony export */   ORDER_BY: function() { return /* binding */ ORDER_BY; },
/* harmony export */   POSITIONS: function() { return /* binding */ POSITIONS; },
/* harmony export */   PRINT_TAXONOMY: function() { return /* binding */ PRINT_TAXONOMY; },
/* harmony export */   SEPERATOR_STYLES: function() { return /* binding */ SEPERATOR_STYLES; },
/* harmony export */   SORT_ORDER: function() { return /* binding */ SORT_ORDER; },
/* harmony export */   TEXT_ALIGN_OPTIONS: function() { return /* binding */ TEXT_ALIGN_OPTIONS; },
/* harmony export */   THUMBNAIL_SIZE: function() { return /* binding */ THUMBNAIL_SIZE; },
/* harmony export */   UNIT_TYPES: function() { return /* binding */ UNIT_TYPES; },
/* harmony export */   WIDTH_TYPES: function() { return /* binding */ WIDTH_TYPES; },
/* harmony export */   prefix: function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




//Attribute Prefix
const prefix = 'zolo_';
const UNIT_TYPES = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}, {
  label: 'em',
  value: 'em'
}];
const NORMAL_HOVER = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Hover',
  value: 'hover'
}];
const TEXT_ALIGN_OPTIONS = [{
  label: 'Left',
  value: 'left',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 8,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 2L12 8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 16L12 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 16,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Right',
  value: 'right',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Justify',
  value: 'justify',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 6,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];
const DEFAULT_ALIGNS = [{
  label: 'Left',
  value: 'left',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 8,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 2L12 8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 16L12 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 16,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Right',
  value: 'right',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];
const FLEX_ALIGN_OPTIONS = [{
  label: 'Top',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 4L2 4",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 12L16 12",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 12L2 12",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 16,
    y: 4,
    width: 16,
    height: 8,
    rx: 1,
    transform: "rotate(90 16 4)",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Bottom',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 20L2 20",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];
const FLEX_HORIZONTAL_OPTIONS = [{
  label: 'Left',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 8,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 2L12 8",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 16L12 22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 16,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Right',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];

// Flex Properties
const FLEX_DIRECTIONS = [{
  label: 'Row',
  value: 'row',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.64246 7.53723H17.2781",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2781 7.53729L15.3485 5.28601",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2781 7.53723L15.3485 9.78851",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.64246 16.4172H17.2781",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2781 16.4173L15.3485 14.1774",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2781 16.4172L15.3485 18.6685",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2.85132 21.1473V2.85278",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.1487 21.1473V2.85278",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Column',
  value: 'column',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.391 6.72949L16.391 17.1923",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.3909 17.1923L18.606 15.2941",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.391 17.1923L14.176 15.2941",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.65393 6.72949L7.65393 17.1923",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.65381 17.1923L9.85767 15.2941",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.65393 17.1923L5.43889 15.2941",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Row Reverse',
  value: 'row-reverse',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2705 16.391L6.80771 16.391",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.80767 16.3909L8.70593 18.606",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.80767 16.391L8.70593 14.176",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.2705 7.65393L6.80771 7.65393",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.80767 7.65381L8.70593 9.85767",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.80767 7.65393L8.70593 5.43889",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Column Reverse',
  value: 'column-reverse',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.60901 17.2705L7.60901 6.80771",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.60908 6.80767L5.39404 8.70593",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.60901 6.80767L9.82405 8.70593",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.3461 17.2705L16.3461 6.80771",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.3462 6.80767L14.1423 8.70593",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.3461 6.80767L18.5611 8.70593",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L3 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const FLEX_ALIGNS = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.142 16.6062V7.48108",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.15051 16.6062V7.48108",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.46875 7.44006V16.5707",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.4974 7.44006V16.5707",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.858 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8495 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Stretch',
  value: 'stretch',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.86999 15.69L7.87 8.88",
    stroke: "#4D4D4D",
    "stroke-width": "7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.03003 3.96997L4.03003 20.51",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.51 3.96997L20.51 20.51",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.67 15.69L16.67 8.88",
    stroke: "#4D4D4D",
    "stroke-width": "7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const FLEX_ALIGNS_ROW = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.39385 12.142L16.5189 12.142",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.39385 7.15051L16.5189 7.15051",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L3 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5599 9.46875L7.42934 9.46875",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5599 14.4974L7.42934 14.4974",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L3 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 11.858L7.48088 11.858",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 16.8495L7.48088 16.8495",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Stretch',
  value: 'stretch',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.72 16.64H8.91003",
    stroke: "#4D4D4D",
    "stroke-width": "7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 20.48H20.54",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 4H20.54",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.72 7.83997H8.91003",
    stroke: "#4D4D4D",
    "stroke-width": "7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const FLEX_JUSTIFIES = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.39385 12.142L16.5189 12.142",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.39385 7.15051L16.5189 7.15051",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L3 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5599 9.46875L7.42934 9.46875",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5599 14.4974L7.42934 14.4974",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3L3 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21L3 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 11.858L7.48088 11.858",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 16.8495L7.48088 16.8495",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Between',
  value: 'space-between',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 7.1615L7.48088 7.1615",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 16.8386L7.48088 16.8386",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Around',
  value: 'space-around',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.6713 8.21777L7.54619 8.21777",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 15.8041L7.48088 15.8041",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Evenly',
  value: 'space-evenly',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 8.73425L7.48088 8.73425",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.606 15.2767L7.48088 15.2767",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21L21 21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3L21 3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const FLEX_JUSTIFIES_ROW = [{
  label: 'Flex Start',
  value: 'flex-start',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.142 16.6062V7.48108",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.15051 16.6062V7.48108",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Center',
  value: 'center',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.46875 7.44006V16.5707",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.4974 7.44006V16.5707",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Flex End',
  value: 'flex-end',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.858 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8495 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Between',
  value: 'space-between',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.1615 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8386 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Around',
  value: 'space-around',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.21777 7.32874V16.4538",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.8041 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Space Evenly',
  value: 'space-evenly',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.73425 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.2767 7.39404V16.5191",
    stroke: "#4D4D4D",
    "stroke-width": "3",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 21V3",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const FLEX_WRAPS = [{
  label: 'Wrap',
  value: 'wrap',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.07 11.8368L6.77002 15.2757L10.07 18.7255",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'No Wrap',
  value: 'nowrap',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.51 12.0109H6.18005",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}, {
  label: 'Wrap Reverse',
  value: 'wrap-reverse',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 3V21",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))
}];
const HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H1', 'zolo-blocks'),
  value: 'h1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H2', 'zolo-blocks'),
  value: 'h2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H3', 'zolo-blocks'),
  value: 'h3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H4', 'zolo-blocks'),
  value: 'h4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H5', 'zolo-blocks'),
  value: 'h5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('H6', 'zolo-blocks'),
  value: 'h6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('P', 'zolo-blocks'),
  value: 'p'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Span', 'zolo-blocks'),
  value: 'span'
}];
const BORDER_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'zolo-blocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'zolo-blocks'),
  value: 'solid'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom', 'zolo-blocks'),
  value: 'custom'
}];
const SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dashed', 'zolo-blocks'),
  value: 'dashed'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dotted', 'zolo-blocks'),
  value: 'dotted'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double', 'zolo-blocks'),
  value: 'double'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Groove', 'zolo-blocks'),
  value: 'groove'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outset', 'zolo-blocks'),
  value: 'outset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ridge', 'zolo-blocks'),
  value: 'ridge'
}];
const BACKGROUND_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Classic', 'zolo-blocks'),
  value: 'classic',
  icon: 'color-picker'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Gradient', 'zolo-blocks'),
  value: 'gradient',
  icon: 'art'
}];
const BOX_SHADOW_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'zolo-blocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inner', 'zolo-blocks'),
  value: 'inset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Outer', 'zolo-blocks'),
  value: 'outset'
}];

// position
const POSITIONS = [{
  label: 'Left',
  value: 'row-reverse',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2 2V22",
    stroke: "#4D4D4D",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "8",
    width: "12",
    height: "8",
    rx: "1",
    fill: "none",
    stroke: "#4D4D4D",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1"
  }))
}, {
  label: 'Right',
  value: 'row',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 2V22",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 4,
    y: 8,
    width: 12,
    height: 8,
    rx: 1,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Top',
  value: 'column-reverse',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 4L2 4",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Bottom',
  value: 'column',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 20L2 20",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];
// position
const ICON_POSITIONS = [{
  label: 'Left',
  value: 'left',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 11,
    y: 12,
    width: 11,
    height: "0.01",
    rx: "0.005",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 3,
    y: 10,
    width: 4,
    height: 4,
    rx: 2,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Right',
  value: 'right',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 3,
    y: 12,
    width: 11,
    height: "0.01",
    rx: "0.005",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 18,
    y: 10,
    width: 4,
    height: 4,
    rx: 2,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Top',
  value: 'top',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 6,
    y: 16,
    width: 12,
    height: "0.01",
    rx: "0.005",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 10,
    y: 8,
    width: 4,
    height: 4,
    rx: 2,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: 'Bottom',
  value: 'bottom',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 6,
    y: 8,
    width: 12,
    height: "0.01",
    rx: "0.005",
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: 10,
    y: 12,
    width: 4,
    height: 4,
    rx: 2,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}];

// social icon text
const ICON_STATUS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No Icon', 'zolo-blocks'),
  value: 'none',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.17157 9.17157L14.8284 14.8284",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.8284 9.17157L9.17157 14.8284",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }))
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon & Text', 'zolo-blocks'),
  value: 'iconText',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 20V4M10 4H4M10 20H4",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 10H20M12 14H16.7059",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Only Icon', 'zolo-blocks'),
  value: 'iconOnly',
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    stroke: "#4D4D4D",
    strokeWidth: "1.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 15V9M14 9H10M14 15H10",
    stroke: "#4D4D4D",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
}];
const ORDER_BY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date', 'zolo-blocks'),
  value: 'date'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author', 'zolo-blocks'),
  value: 'author'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'zolo-blocks'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Last modified date', 'zolo-blocks'),
  value: 'modified'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post parent ID', 'zolo-blocks'),
  value: 'parent'
}];
const SORT_ORDER = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ASC', 'zolo-blocks'),
  value: 'asc'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('DESC', 'zolo-blocks'),
  value: 'desc'
}];
const PRINT_TAXONOMY = taxonomy => {
  let allTax = [];
  for (let tax in taxonomy) {
    allTax.push({
      value: tax,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(taxonomy[tax], 'zolo-blocks')
    });
  }
  return allTax;
};
const THUMBNAIL_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'zolo-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnail', 'zolo-blocks'),
  value: 'thumbnail'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium', 'zolo-blocks'),
  value: 'medium'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large', 'zolo-blocks'),
  value: 'large'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full', 'zolo-blocks'),
  value: 'full'
}];

// social icon text
const ICON_BOX_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'zolo-blocks'),
  value: 'image'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'zolo-blocks'),
  value: 'icon'
}];

// Width Types
const WIDTH_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full', 'zolo-blocks'),
  value: 'alignfull'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Boxed', 'zolo-blocks'),
  value: 'alignwide'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom', 'zolo-blocks'),
  value: 'custom_width'
}];
const CONTENT_WIDTH_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Boxed', 'zolo-blocks'),
  value: 'alignwide'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full Width', 'zolo-blocks'),
  value: 'alignfull'
}];

/***/ }),

/***/ "./src/helpers/backgroundHelpers.js":
/*!******************************************!*\
  !*** ./src/helpers/backgroundHelpers.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBackgroundAttributes: function() { return /* binding */ generateBackgroundAttributes; },
/* harmony export */   generateBackgroundControlStyles: function() { return /* binding */ generateBackgroundControlStyles; }
/* harmony export */ });
const generateBackgroundAttributes = (controlName, defaults = {}) => {
  const {
    isBgDefaultGradient,
    defaultFillColor,
    defaultBgGradient = 'linear-gradient(45deg,#00000000,#00000000)',
    defaultHovBgGradient,
    noOverlay = false,
    noMainBGImg = false,
    noOverlayBGImg = false,
    noTransition = false,
    forButton = false
  } = defaults;
  const bgColorAttr = defaultFillColor ? {
    [`${controlName}backgroundColor`]: {
      type: 'string',
      default: defaultFillColor
    }
  } : {
    [`${controlName}backgroundColor`]: {
      type: 'string'
    }
  };
  const hovBgGradientAttr = defaultHovBgGradient ? {
    [`hov_${controlName}gradientColor`]: {
      type: 'string',
      default: defaultHovBgGradient
    }
  } : {
    [`hov_${controlName}gradientColor`]: {
      type: 'string'
    }
  };
  const mainWithoutBgiAttrs = {
    [`${controlName}bg_hoverType`]: {
      type: 'string',
      default: 'normal'
    },
    //  attributes for main background (not overlay) -> hover type 'normal' start  ⬇
    [`${controlName}backgroundType`]: {
      type: 'string',
      default: isBgDefaultGradient === true ? 'gradient' : 'classic'
    },
    ...bgColorAttr,
    [`${controlName}gradientColor`]: {
      type: 'string',
      default: defaultBgGradient
    },
    //  attributes for main background (not overlay) -> hover type 'normal' end

    //  attributes for main background (not overlay) -> hover type 'hover' start  ⬇
    [`hov_${controlName}backgroundType`]: {
      type: 'string',
      default: 'classic'
    },
    [`hov_${controlName}backgroundColor`]: {
      type: 'string'
    },
    ...hovBgGradientAttr
    //  attributes for main background (not overlay) -> hover type 'hover' end
  };

  const mainBgiAttrs = {
    //  attributes for main background (not overlay) -> hover type 'normal' start  ⬇
    // desktop attributes start ⬇
    [`${controlName}bgImageURL`]: {
      type: 'string'
    },
    [`${controlName}bgImageID`]: {
      type: 'number'
    },
    [`${controlName}bgImgAttachment`]: {
      type: 'string'
    },
    [`${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // desktop attributes end

    // Tab attributes start ⬇
    [`TAB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`TAB${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`TAB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`TAB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`TAB${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // Tab attributes end

    // Mobile attributes start ⬇
    [`MOB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`MOB${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`MOB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`MOB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`MOB${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // Mobile attributes end
    //  attributes for main background (not overlay) -> hover type 'normal' end

    //  attributes for main background (not overlay) -> hover type 'hover' start  ⬇
    // desktop attributes start
    [`hov_${controlName}bgImageURL`]: {
      type: 'string'
    },
    [`hov_${controlName}bgImageID`]: {
      type: 'number'
    },
    [`hov_${controlName}bgImgAttachment`]: {
      type: 'string'
    },
    [`hov_${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`hov_${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`hov_${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`hov_${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`hov_${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`hov_${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // desktop attributes end

    // Tab attributes start
    [`hov_TAB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`hov_TAB${controlName}bgImgCustomSize`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_TAB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`hov_TAB${controlName}bgImgcustomPosX`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_TAB${controlName}bgImgcustomPosY`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_TAB${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // Tab attributes end

    // Mobile attributes start
    [`hov_MOB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`hov_MOB${controlName}bgImgCustomSize`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_MOB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`hov_MOB${controlName}bgImgcustomPosX`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_MOB${controlName}bgImgcustomPosY`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_MOB${controlName}bgImgRepeat`]: {
      type: 'string'
    }
    // Mobile attributes end
    //  attributes for main background (not overlay) -> hover type 'hover' start  ⬇
  };

  const ovlWithoutBgiAttrs = {
    //  attributes for background overlay -> hover type 'normal' start  ⬇
    [`${controlName}isBgOverlay`]: {
      type: 'boolean',
      default: false
    },
    [`${controlName}ovl_hoverType`]: {
      type: 'string',
      default: 'normal'
    },
    [`${controlName}overlayType`]: {
      type: 'string',
      default: 'classic'
    },
    [`${controlName}overlayColor`]: {
      type: 'string'
    },
    [`${controlName}overlayGradient`]: {
      type: 'string',
      default: 'linear-gradient(45deg,#000000cc,#00000099)'
    },
    [`${controlName}ovl_opacity`]: {
      type: 'number',
      default: 1
    },
    [`${controlName}ovl_blendMode`]: {
      type: 'string'
    },
    [`${controlName}ovl_allowFilters`]: {
      type: 'boolean',
      default: false
    },
    [`${controlName}ovl_fltrBrightness`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}ovl_fltrContrast`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}ovl_fltrSaturation`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}ovl_fltrBlur`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}ovl_fltrHue`]: {
      type: 'number',
      default: 0
    },
    //  attributes for background overlay -> hover type 'normal' end

    //  attributes for background overlay -> hover type 'hover' start  ⬇
    [`hov_${controlName}overlayType`]: {
      type: 'string',
      default: 'classic'
    },
    [`hov_${controlName}overlayColor`]: {
      type: 'string'
    },
    [`hov_${controlName}overlayGradient`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_bgImageURL`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_bgImageID`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_bgImgAttachment`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_opacity`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_blendMode`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_allowFilters`]: {
      type: 'boolean',
      default: false
    },
    [`hov_${controlName}ovl_fltrBrightness`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_fltrContrast`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_fltrSaturation`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_fltrBlur`]: {
      type: 'number'
    },
    [`hov_${controlName}ovl_fltrHue`]: {
      type: 'number'
    }
    //  attributes for background overlay -> hover type 'hover' end
  };

  const ovlBgiAttrs = {
    //  attributes for background overlay -> hover type 'normal' start  ⬇
    // desktop attributes start ⬇
    [`${controlName}ovl_bgImageURL`]: {
      type: 'string'
    },
    [`${controlName}ovl_bgImageID`]: {
      type: 'number'
    },
    [`${controlName}ovl_bgImgAttachment`]: {
      type: 'string'
    },
    [`${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`${controlName}ovl_bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    },
    // desktop attributes end

    // Tab attributes start ⬇
    [`TAB${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`TAB${controlName}ovl_bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`TAB${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`TAB${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`TAB${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    },
    // Tab attributes end

    // Mob attributes start ⬇
    [`MOB${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`MOB${controlName}ovl_bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`MOB${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`MOB${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`MOB${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    },
    // Mob attributes end
    //  attributes for background overlay -> hover type 'normal' end

    //  attributes for background overlay -> hover type 'hover' start  ⬇
    // desktop attributes start ⬇
    [`hov_${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`hov_${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`hov_${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`hov_${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`hov_${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    },
    // desktop attributes end

    // Tab attributes start ⬇
    [`hov_TAB${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`hov_TAB${controlName}ovl_bgImgCustomSize`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_TAB${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`hov_TAB${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_TAB${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number'
    },
    [`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_TAB${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    },
    // Tab attributes end

    // Mob attributes start ⬇
    [`hov_MOB${controlName}ovl_backgroundSize`]: {
      type: 'string'
    },
    [`hov_MOB${controlName}ovl_bgImgCustomSize`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`hov_MOB${controlName}ovl_bgImgPos`]: {
      type: 'string'
    },
    [`hov_MOB${controlName}ovl_bgImgcustomPosX`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_MOB${controlName}ovl_bgImgcustomPosY`]: {
      type: 'number'
    },
    [`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`hov_MOB${controlName}ovl_bgImgRepeat`]: {
      type: 'string'
    }
    // Mob attributes end
  };

  let result = {};
  if (forButton === true) {
    result = {
      ...mainWithoutBgiAttrs
    };
  } else {
    result = noOverlay === true ? noMainBGImg === true ? {
      ...mainWithoutBgiAttrs
    } : {
      ...mainWithoutBgiAttrs,
      ...mainBgiAttrs
    } : noOverlayBGImg === true && noMainBGImg === true ? {
      ...mainWithoutBgiAttrs,
      ...ovlWithoutBgiAttrs
    } : noOverlayBGImg === true && noMainBGImg === false ? {
      ...mainWithoutBgiAttrs,
      ...mainBgiAttrs,
      ...ovlWithoutBgiAttrs
    } : noOverlayBGImg === false && noMainBGImg === true ? {
      ...mainWithoutBgiAttrs,
      ...ovlWithoutBgiAttrs,
      ...ovlBgiAttrs
    } : {
      ...mainWithoutBgiAttrs,
      ...mainBgiAttrs,
      ...ovlWithoutBgiAttrs,
      ...ovlBgiAttrs
    };
  }
  return result;
};

// function to generate Background control styles
const generateBackgroundControlStyles = ({
  controlName,
  attributes,
  noOverlay = false,
  noMainBGImg = false,
  noOverlayBGImg = false,
  noTransition = false,
  forButton = false
}) => {
  let BGnoOverlay = noOverlay;
  let BGnoMainBgi = noMainBGImg;
  let BGnoOverlayBgi = noOverlayBGImg;
  if (forButton === true) {
    BGnoOverlay = true;
    BGnoMainBgi = true;
    BGnoOverlayBgi = true;
  }
  const {
    // background attributes starts ⬇
    // [`${controlName}bg_hoverType`]: bg_hoverType,
    [`${controlName}bg_transition`]: bg_transition,
    //  attributes for bg_hoverType normal start  ⬇
    [`${controlName}backgroundType`]: backgroundType,
    [`${controlName}backgroundColor`]: backgroundColor,
    [`${controlName}gradientColor`]: gradientColor,
    [`${controlName}bgImageURL`]: bgImageURL,
    // [`${controlName}bgImageID`]: bgImageID,
    [`${controlName}backgroundSize`]: backgroundSize,
    [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
    [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
    [`${controlName}bgImgPos`]: bgImgPos,
    [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
    [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
    [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
    [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
    [`${controlName}bgImgAttachment`]: bgImgAttachment,
    [`${controlName}bgImgRepeat`]: bgImgRepeat,
    [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
    [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
    [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
    [`TAB${controlName}bgImgPos`]: TABbgImgPos,
    [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
    [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
    [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
    [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
    [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
    [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
    [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
    [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
    [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
    [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
    [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
    [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
    [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
    [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
    //  attributes for bg_hoverType normal end

    //  attributes for bg_hoverType hover start  ⬇
    [`hov_${controlName}backgroundType`]: hov_backgroundType,
    [`hov_${controlName}backgroundColor`]: hov_backgroundColor,
    [`hov_${controlName}gradientColor`]: hov_gradientColor,
    [`hov_${controlName}bgImageURL`]: hov_bgImageURL,
    // [`hov_${controlName}bgImageID`]: hov_bgImageID,
    [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,
    [`hov_${controlName}backgroundSize`]: hov_backgroundSize,
    [`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize,
    [`hov_${controlName}bgImgCustomSizeUnit`]: hov_bgImgCustomSizeUnit,
    [`hov_${controlName}bgImgPos`]: hov_bgImgPos,
    [`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX,
    [`hov_${controlName}bgImgcustomPosXUnit`]: hov_bgImgcustomPosXUnit,
    [`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY,
    [`hov_${controlName}bgImgcustomPosYUnit`]: hov_bgImgcustomPosYUnit,
    [`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat,
    [`hov_TAB${controlName}backgroundSize`]: hov_TABbackgroundSize,
    [`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize,
    [`hov_TAB${controlName}bgImgCustomSizeUnit`]: hov_TABbgImgCustomSizeUnit,
    [`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos,
    [`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX,
    [`hov_TAB${controlName}bgImgcustomPosXUnit`]: hov_TABbgImgcustomPosXUnit,
    [`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY,
    [`hov_TAB${controlName}bgImgcustomPosYUnit`]: hov_TABbgImgcustomPosYUnit,
    [`hov_TAB${controlName}bgImgRepeat`]: hov_TABbgImgRepeat,
    [`hov_MOB${controlName}backgroundSize`]: hov_MOBbackgroundSize,
    [`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize,
    [`hov_MOB${controlName}bgImgCustomSizeUnit`]: hov_MOBbgImgCustomSizeUnit,
    [`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos,
    [`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX,
    [`hov_MOB${controlName}bgImgcustomPosXUnit`]: hov_MOBbgImgcustomPosXUnit,
    [`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY,
    [`hov_MOB${controlName}bgImgcustomPosYUnit`]: hov_MOBbgImgcustomPosYUnit,
    [`hov_MOB${controlName}bgImgRepeat`]: hov_MOBbgImgRepeat,
    //  attributes for bg_hoverType hover end
    // background attributes end

    // background overlay attributes start
    [`${controlName}isBgOverlay`]: isBgOverlay,
    // [`${controlName}ovl_hoverType`]: ovl_hoverType,
    [`${controlName}ovl_bg_transition`]: ovl_bg_transition,
    [`${controlName}ovl_filtersTransition`]: ovl_filtersTransition,
    [`${controlName}ovl_opacityTransition`]: ovl_opacityTransition,
    //  attributes for ovl_hoverType normal start  ⬇
    [`${controlName}overlayType`]: overlayType,
    [`${controlName}overlayColor`]: overlayColor,
    [`${controlName}overlayGradient`]: overlayGradient,
    [`${controlName}ovl_bgImageURL`]: ovl_bgImageURL,
    // [`${controlName}ovl_bgImageID`]: ovl_bgImageID,
    [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment,
    [`${controlName}ovl_opacity`]: ovl_opacity,
    [`${controlName}ovl_blendMode`]: ovl_blendMode,
    [`${controlName}ovl_allowFilters`]: ovl_allowFilters,
    [`${controlName}ovl_fltrBrightness`]: ovl_fltrBrightness,
    [`${controlName}ovl_fltrContrast`]: ovl_fltrContrast,
    [`${controlName}ovl_fltrSaturation`]: ovl_fltrSaturation,
    [`${controlName}ovl_fltrBlur`]: ovl_fltrBlur,
    [`${controlName}ovl_fltrHue`]: ovl_fltrHue,
    [`${controlName}ovl_backgroundSize`]: ovl_backgroundSize,
    [`${controlName}ovl_bgImgCustomSize`]: ovl_bgImgCustomSize,
    [`${controlName}ovl_bgImgCustomSizeUnit`]: ovl_bgImgCustomSizeUnit,
    [`${controlName}ovl_bgImgPos`]: ovl_bgImgPos,
    [`${controlName}ovl_bgImgcustomPosX`]: ovl_bgImgcustomPosX,
    [`${controlName}ovl_bgImgcustomPosXUnit`]: ovl_bgImgcustomPosXUnit,
    [`${controlName}ovl_bgImgcustomPosY`]: ovl_bgImgcustomPosY,
    [`${controlName}ovl_bgImgcustomPosYUnit`]: ovl_bgImgcustomPosYUnit,
    [`${controlName}ovl_bgImgRepeat`]: ovl_bgImgRepeat,
    [`TAB${controlName}ovl_backgroundSize`]: TABovl_backgroundSize,
    [`TAB${controlName}ovl_bgImgCustomSize`]: TABovl_bgImgCustomSize,
    [`TAB${controlName}ovl_bgImgCustomSizeUnit`]: TABovl_bgImgCustomSizeUnit,
    [`TAB${controlName}ovl_bgImgPos`]: TABovl_bgImgPos,
    [`TAB${controlName}ovl_bgImgcustomPosX`]: TABovl_bgImgcustomPosX,
    [`TAB${controlName}ovl_bgImgcustomPosXUnit`]: TABovl_bgImgcustomPosXUnit,
    [`TAB${controlName}ovl_bgImgcustomPosY`]: TABovl_bgImgcustomPosY,
    [`TAB${controlName}ovl_bgImgcustomPosYUnit`]: TABovl_bgImgcustomPosYUnit,
    [`TAB${controlName}ovl_bgImgRepeat`]: TABovl_bgImgRepeat,
    [`MOB${controlName}ovl_backgroundSize`]: MOBovl_backgroundSize,
    [`MOB${controlName}ovl_bgImgCustomSize`]: MOBovl_bgImgCustomSize,
    [`MOB${controlName}ovl_bgImgCustomSizeUnit`]: MOBovl_bgImgCustomSizeUnit,
    [`MOB${controlName}ovl_bgImgPos`]: MOBovl_bgImgPos,
    [`MOB${controlName}ovl_bgImgcustomPosX`]: MOBovl_bgImgcustomPosX,
    [`MOB${controlName}ovl_bgImgcustomPosXUnit`]: MOBovl_bgImgcustomPosXUnit,
    [`MOB${controlName}ovl_bgImgcustomPosY`]: MOBovl_bgImgcustomPosY,
    [`MOB${controlName}ovl_bgImgcustomPosYUnit`]: MOBovl_bgImgcustomPosYUnit,
    [`MOB${controlName}ovl_bgImgRepeat`]: MOBovl_bgImgRepeat,
    //  attributes for ovl_hoverType normal end

    //  attributes for ovl_hoverType hover start ⬇
    [`hov_${controlName}overlayType`]: hov_overlayType,
    [`hov_${controlName}overlayColor`]: hov_overlayColor,
    [`hov_${controlName}overlayGradient`]: hov_overlayGradient,
    [`hov_${controlName}ovl_bgImageURL`]: hov_ovl_bgImageURL,
    // [`hov_${controlName}ovl_bgImageID`]: hov_ovl_bgImageID,
    [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment,
    [`hov_${controlName}ovl_opacity`]: hov_ovl_opacity,
    [`hov_${controlName}ovl_blendMode`]: hov_ovl_blendMode,
    [`hov_${controlName}ovl_allowFilters`]: hov_ovl_allowFilters,
    [`hov_${controlName}ovl_fltrBrightness`]: hov_ovl_fltrBrightness,
    [`hov_${controlName}ovl_fltrContrast`]: hov_ovl_fltrContrast,
    [`hov_${controlName}ovl_fltrSaturation`]: hov_ovl_fltrSaturation,
    [`hov_${controlName}ovl_fltrBlur`]: hov_ovl_fltrBlur,
    [`hov_${controlName}ovl_fltrHue`]: hov_ovl_fltrHue,
    [`hov_${controlName}ovl_backgroundSize`]: hov_ovl_backgroundSize,
    [`hov_${controlName}ovl_bgImgCustomSize`]: hov_ovl_bgImgCustomSize,
    [`hov_${controlName}ovl_bgImgCustomSizeUnit`]: hov_ovl_bgImgCustomSizeUnit,
    [`hov_${controlName}ovl_bgImgPos`]: hov_ovl_bgImgPos,
    [`hov_${controlName}ovl_bgImgcustomPosX`]: hov_ovl_bgImgcustomPosX,
    [`hov_${controlName}ovl_bgImgcustomPosXUnit`]: hov_ovl_bgImgcustomPosXUnit,
    [`hov_${controlName}ovl_bgImgcustomPosY`]: hov_ovl_bgImgcustomPosY,
    [`hov_${controlName}ovl_bgImgcustomPosYUnit`]: hov_ovl_bgImgcustomPosYUnit,
    [`hov_${controlName}ovl_bgImgRepeat`]: hov_ovl_bgImgRepeat,
    [`hov_TAB${controlName}ovl_backgroundSize`]: hov_TABovl_backgroundSize,
    [`hov_TAB${controlName}ovl_bgImgCustomSize`]: hov_TABovl_bgImgCustomSize,
    [`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]: hov_TABovl_bgImgCustomSizeUnit,
    [`hov_TAB${controlName}ovl_bgImgPos`]: hov_TABovl_bgImgPos,
    [`hov_TAB${controlName}ovl_bgImgcustomPosX`]: hov_TABovl_bgImgcustomPosX,
    [`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]: hov_TABovl_bgImgcustomPosXUnit,
    [`hov_TAB${controlName}ovl_bgImgcustomPosY`]: hov_TABovl_bgImgcustomPosY,
    [`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]: hov_TABovl_bgImgcustomPosYUnit,
    [`hov_TAB${controlName}ovl_bgImgRepeat`]: hov_TABovl_bgImgRepeat,
    [`hov_MOB${controlName}ovl_backgroundSize`]: hov_MOBovl_backgroundSize,
    [`hov_MOB${controlName}ovl_bgImgCustomSize`]: hov_MOBovl_bgImgCustomSize,
    [`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]: hov_MOBovl_bgImgCustomSizeUnit,
    [`hov_MOB${controlName}ovl_bgImgPos`]: hov_MOBovl_bgImgPos,
    [`hov_MOB${controlName}ovl_bgImgcustomPosX`]: hov_MOBovl_bgImgcustomPosX,
    [`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]: hov_MOBovl_bgImgcustomPosXUnit,
    [`hov_MOB${controlName}ovl_bgImgcustomPosY`]: hov_MOBovl_bgImgcustomPosY,
    [`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]: hov_MOBovl_bgImgcustomPosYUnit,
    [`hov_MOB${controlName}ovl_bgImgRepeat`]: hov_MOBovl_bgImgRepeat
    //  attributes for ovl_hoverType hover end ⬇

    // background overlay attributes end
  } = attributes;
  const backgroundStylesDesktop = `
  ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL || backgroundType === 'gradient' && gradientColor ? `
    background-image: ${backgroundType === 'classic' ? `url("${bgImageURL}")` : backgroundType === 'gradient' ? gradientColor : 'none'};
    ` : ' '}
  
  ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
      ${backgroundSize && backgroundSize !== 'custom' ? `background-size: ${backgroundSize};` : backgroundSize === 'custom' ? `background-size: ${bgImgCustomSize}${bgImgCustomSizeUnit} auto;` : ' '}

      ${bgImgPos && bgImgPos !== 'custom' ? `background-position: ${bgImgPos};` : bgImgPos === 'custom' ? `background-position: ${bgImgcustomPosX}${bgImgcustomPosXUnit} ${bgImgcustomPosY}${bgImgcustomPosYUnit};` : ' '}

      ${bgImgAttachment ? `background-attachment: ${bgImgAttachment};` : ' '}

      ${bgImgRepeat ? `background-repeat: ${bgImgRepeat};` : ' '}
      
      
      ` : ' '}

  ${isBgOverlay ? `
        z-index: 2;
        position: relative;
      ` : ' '}	

  ${backgroundColor ? `background-color: ${backgroundColor};` : ' '}
  
  ${forButton === true ? `
    position: relative;
    overflow: hidden;
    z-index:1;
    
    ` : ''}
    `;
  const hoverBackgroundStylesDesktop = `

    ${forButton === true ? `
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0;
        transition: all ${bg_transition || 0.3}s;

        ` : ''}

    ${BGnoMainBgi === false && hov_backgroundType === 'classic' && hov_bgImageURL || hov_backgroundType === 'gradient' && hov_gradientColor ? `
        background-image: ${hov_backgroundType === 'classic' ? `url("${hov_bgImageURL}")` : hov_backgroundType === 'gradient' ? hov_gradientColor : 'none'};    
        ` : ' '}
  
    ${BGnoMainBgi === false && hov_backgroundType === 'classic' && hov_bgImageURL ? `
        ${hov_backgroundSize && hov_backgroundSize !== 'custom' ? `background-size: ${hov_backgroundSize};` : hov_backgroundSize === 'custom' ? `background-size: ${hov_bgImgCustomSize}${hov_bgImgCustomSizeUnit} auto;` : ' '}
  
        ${hov_bgImgPos && hov_bgImgPos !== 'custom' ? `background-position: ${hov_bgImgPos};` : hov_bgImgPos === 'custom' ? `background-position: ${hov_bgImgcustomPosX}${hov_bgImgcustomPosXUnit} ${hov_bgImgcustomPosY}${hov_bgImgcustomPosYUnit};` : ' '}
  
        ${hov_bgImgAttachment ? `background-attachment: ${hov_bgImgAttachment};` : ' '}
  
        ${hov_bgImgRepeat ? `background-repeat: ${hov_bgImgRepeat};` : ' '}
        
        ` : ' '}
  
    ${hov_backgroundColor ? `background-color: ${hov_backgroundColor};` : ' '}
  
  `;
  const backgroundStylesTab = `
      ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
          ${TABbackgroundSize && TABbackgroundSize !== 'custom' ? `background-size: ${TABbackgroundSize};` : TABbackgroundSize === 'custom' ? `background-size: ${TABbgImgCustomSize}${TABbgImgCustomSizeUnit} auto;` : ' '}
  
          ${TABbgImgPos && TABbgImgPos !== 'custom' ? `background-position: ${TABbgImgPos};` : TABbgImgPos === 'custom' ? `background-position: ${TABbgImgcustomPosX}${TABbgImgcustomPosXUnit} ${TABbgImgcustomPosY}${TABbgImgcustomPosYUnit};` : ' '}
  
          ${TABbgImgRepeat ? `background-repeat: ${TABbgImgRepeat};` : ' '}
          background-attachment: scroll;
          ` : ' '}
  
    `;
  const hoverBackgroundStylesTab = `
    ${BGnoMainBgi === false && hov_backgroundType === 'classic' && hov_bgImageURL ? `
        ${hov_TABbackgroundSize && hov_TABbackgroundSize !== 'custom' ? `background-size: ${hov_TABbackgroundSize};` : hov_TABbackgroundSize === 'custom' ? `background-size: ${hov_TABbgImgCustomSize}${hov_TABbgImgCustomSizeUnit} auto;` : ' '}
  
        ${hov_TABbgImgPos && hov_TABbgImgPos !== 'custom' ? `background-position: ${hov_TABbgImgPos};` : hov_TABbgImgPos === 'custom' ? `background-position: ${hov_TABbgImgcustomPosX}${hov_TABbgImgcustomPosXUnit} ${hov_TABbgImgcustomPosY}${hov_TABbgImgcustomPosYUnit};` : ' '}
  
        ${hov_TABbgImgRepeat ? `background-repeat: ${hov_TABbgImgRepeat};` : ' '}
        background-attachment: scroll;
        ` : ' '}
  
  `;
  const backgroundStylesMobile = `
      ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
          ${MOBbackgroundSize && MOBbackgroundSize !== 'custom' ? `background-size: ${MOBbackgroundSize};` : MOBbackgroundSize === 'custom' ? `background-size: ${MOBbgImgCustomSize}${MOBbgImgCustomSizeUnit} auto;` : ' '}
  
          ${MOBbgImgPos && MOBbgImgPos !== 'custom' ? `background-position: ${MOBbgImgPos};` : MOBbgImgPos === 'custom' ? `background-position: ${MOBbgImgcustomPosX}${MOBbgImgcustomPosXUnit} ${MOBbgImgcustomPosY}${MOBbgImgcustomPosYUnit};` : ' '}
  
          ${MOBbgImgRepeat ? `background-repeat: ${MOBbgImgRepeat};` : ' '}
  
          ` : ' '}
  
    `;
  const hoverBackgroundStylesMobile = `
    ${BGnoMainBgi === false && hov_backgroundType === 'classic' && hov_bgImageURL ? `
        ${hov_MOBbackgroundSize && hov_MOBbackgroundSize !== 'custom' ? `background-size: ${hov_MOBbackgroundSize};` : hov_MOBbackgroundSize === 'custom' ? `background-size: ${hov_MOBbgImgCustomSize}${hov_MOBbgImgCustomSizeUnit} auto;` : ' '}
    
        ${hov_MOBbgImgPos && hov_MOBbgImgPos !== 'custom' ? `background-position: ${hov_MOBbgImgPos};` : hov_MOBbgImgPos === 'custom' ? `background-position: ${hov_MOBbgImgcustomPosX}${hov_MOBbgImgcustomPosXUnit} ${hov_MOBbgImgcustomPosY}${hov_MOBbgImgcustomPosYUnit};` : ' '}
    
        ${hov_MOBbgImgRepeat ? `background-repeat: ${hov_MOBbgImgRepeat};` : ' '}
    
        ` : ' '}
    
    `;
  const overlayStylesDesktop = `
    
      ${BGnoOverlay === false && isBgOverlay ? `
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: -1 !important;
            ${BGnoOverlayBgi === false && overlayType === 'classic' && ovl_bgImageURL || overlayType === 'gradient' && overlayGradient ? `
                background-image: ${overlayType === 'classic' ? `url("${ovl_bgImageURL}")` : overlayType === 'gradient' ? overlayGradient : 'none'};              
              ` : ' '}
           
            ${overlayColor ? `background-color: ${overlayColor};` : ' '}
            ${ovl_opacity || ovl_opacity === 0 ? `opacity: ${ovl_opacity};` : ' '}
            ${ovl_blendMode ? `mix-blend-mode: ${ovl_blendMode};` : ' '}
            ${ovl_allowFilters ? `filter: brightness( ${ovl_fltrBrightness}% ) contrast( ${ovl_fltrContrast}% ) saturate( ${ovl_fltrSaturation}% ) blur( ${ovl_fltrBlur}px ) hue-rotate( 
              ${ovl_fltrHue}deg );` : ' '}
  
        ${BGnoOverlayBgi === false && overlayType === 'classic' && ovl_bgImageURL ? `
            ${ovl_backgroundSize && ovl_backgroundSize !== 'custom' ? `background-size: ${ovl_backgroundSize};` : ovl_backgroundSize === 'custom' ? `background-size: ${ovl_bgImgCustomSize}${ovl_bgImgCustomSizeUnit} auto;` : ' '}
  
            ${ovl_bgImgPos && ovl_bgImgPos !== 'custom' ? `background-position: ${ovl_bgImgPos};` : ovl_bgImgPos === 'custom' ? `background-position: ${ovl_bgImgcustomPosX}${ovl_bgImgcustomPosXUnit} ${ovl_bgImgcustomPosY}${ovl_bgImgcustomPosYUnit};` : ' '}
  
            ${ovl_bgImgAttachment ? `background-attachment: ${ovl_bgImgAttachment};` : ' '}
  
            ${ovl_bgImgRepeat ? `background-repeat: ${ovl_bgImgRepeat};` : ' '}
            
            ` : ' '}
        ` : ' '}
    `;
  const hoverOverlayStylesDesktop = `
    
    ${BGnoOverlay === false && isBgOverlay ? `
        ${BGnoOverlayBgi === false && hov_overlayType === 'classic' && hov_ovl_bgImageURL || hov_overlayType === 'gradient' && hov_overlayGradient ? `
          background-image: ${hov_overlayType === 'classic' ? `url("${hov_ovl_bgImageURL}")` : hov_overlayType === 'gradient' ? hov_overlayGradient : 'none'};
          ` : ' '}
  
        ${hov_overlayColor ? `background-color: ${hov_overlayColor};` : ' '}
        ${hov_ovl_opacity || hov_ovl_opacity === 0 ? `opacity: ${hov_ovl_opacity};` : ' '}
        ${hov_ovl_blendMode ? `mix-blend-mode: ${hov_ovl_blendMode};` : ' '}
        ${hov_ovl_allowFilters ? `filter: brightness( ${hov_ovl_fltrBrightness}% ) contrast( ${hov_ovl_fltrContrast}% ) saturate( ${hov_ovl_fltrSaturation}% ) blur( ${hov_ovl_fltrBlur}px ) hue-rotate( 
          ${hov_ovl_fltrHue}deg );` : ' '}
    
      ${BGnoOverlayBgi === false && hov_overlayType === 'classic' && hov_ovl_bgImageURL ? `
          ${hov_ovl_backgroundSize && hov_ovl_backgroundSize !== 'custom' ? `background-size: ${hov_ovl_backgroundSize};` : hov_ovl_backgroundSize === 'custom' ? `background-size: ${hov_ovl_bgImgCustomSize}${hov_ovl_bgImgCustomSizeUnit} auto;` : ' '}
    
          ${hov_ovl_bgImgPos && hov_ovl_bgImgPos !== 'custom' ? `background-position: ${hov_ovl_bgImgPos};` : hov_ovl_bgImgPos === 'custom' ? `background-position: ${hov_ovl_bgImgcustomPosX}${hov_ovl_bgImgcustomPosXUnit} ${hov_ovl_bgImgcustomPosY}${hov_ovl_bgImgcustomPosYUnit};` : ' '}
    
          ${hov_ovl_bgImgAttachment ? `background-attachment: ${hov_ovl_bgImgAttachment};` : ' '}
    
          ${hov_ovl_bgImgRepeat ? `background-repeat: ${hov_ovl_bgImgRepeat};` : ' '}
          
          ` : ' '}
    
      ` : ' '}
    
    
    `;
  const overlayStylesTab = `
    ${BGnoOverlay === false && BGnoOverlayBgi === false && isBgOverlay && overlayType === 'classic' && ovl_bgImageURL ? `
        ${TABovl_backgroundSize && TABovl_backgroundSize !== 'custom' ? `background-size: ${TABovl_backgroundSize};` : TABovl_backgroundSize === 'custom' ? `background-size: ${TABovl_bgImgCustomSize}${TABovl_bgImgCustomSizeUnit} auto;` : ' '}
  
          ${TABovl_bgImgPos && TABovl_bgImgPos !== 'custom' ? `background-position: ${TABovl_bgImgPos};` : TABovl_bgImgPos === 'custom' ? `background-position: ${TABovl_bgImgcustomPosX}${TABovl_bgImgcustomPosXUnit} ${TABovl_bgImgcustomPosY}${TABovl_bgImgcustomPosYUnit};` : ' '}
  
          ${TABovl_bgImgRepeat ? `background-repeat: ${TABovl_bgImgRepeat};` : ' '}
          background-attachment: scroll;
        ` : ' '}
    
    `;
  const hoverOverlayStylesTab = `
  ${BGnoOverlay === false && BGnoOverlayBgi === false && isBgOverlay && hov_overlayType === 'classic' && hov_ovl_bgImageURL ? `
      ${hov_TABovl_backgroundSize && hov_TABovl_backgroundSize !== 'custom' ? `background-size: ${hov_TABovl_backgroundSize};` : hov_TABovl_backgroundSize === 'custom' ? `background-size: ${hov_TABovl_bgImgCustomSize}${hov_TABovl_bgImgCustomSizeUnit} auto;` : ' '}
  
        ${hov_TABovl_bgImgPos && hov_TABovl_bgImgPos !== 'custom' ? `background-position: ${hov_TABovl_bgImgPos};` : hov_TABovl_bgImgPos === 'custom' ? `background-position: ${hov_TABovl_bgImgcustomPosX}${hov_TABovl_bgImgcustomPosXUnit} ${hov_TABovl_bgImgcustomPosY}${hov_TABovl_bgImgcustomPosYUnit};` : ' '}
  
        ${hov_TABovl_bgImgRepeat ? `background-repeat: ${hov_TABovl_bgImgRepeat};` : ' '}
        background-attachment: scroll;
      ` : ' '}
  
  `;
  const overlayStylesMobile = `
    ${BGnoOverlay === false && BGnoOverlayBgi === false && isBgOverlay && overlayType === 'classic' && ovl_bgImageURL ? `
        ${MOBovl_backgroundSize && MOBovl_backgroundSize !== 'custom' ? `background-size: ${MOBovl_backgroundSize};` : MOBovl_backgroundSize === 'custom' ? `background-size: ${MOBovl_bgImgCustomSize}${MOBovl_bgImgCustomSizeUnit} auto;` : ' '}
  
        ${MOBovl_bgImgPos && MOBovl_bgImgPos !== 'custom' ? `background-position: ${MOBovl_bgImgPos};` : MOBovl_bgImgPos === 'custom' ? `background-position: ${MOBovl_bgImgcustomPosX}${MOBovl_bgImgcustomPosXUnit} ${MOBovl_bgImgcustomPosY}${MOBovl_bgImgcustomPosYUnit};` : ' '}
  
        ${MOBovl_bgImgRepeat ? `background-repeat: ${MOBovl_bgImgRepeat};` : ' '}
        ` : ' '}
    
    `;
  const hoverOverlayStylesMobile = `
    ${BGnoOverlay === false && BGnoOverlayBgi === false && isBgOverlay && hov_overlayType === 'classic' && hov_ovl_bgImageURL ? `
        ${hov_MOBovl_backgroundSize && hov_MOBovl_backgroundSize !== 'custom' ? `background-size: ${hov_MOBovl_backgroundSize};` : hov_MOBovl_backgroundSize === 'custom' ? `background-size: ${hov_MOBovl_bgImgCustomSize}${hov_MOBovl_bgImgCustomSizeUnit} auto;` : ' '}
  
        ${hov_MOBovl_bgImgPos && hov_MOBovl_bgImgPos !== 'custom' ? `background-position: ${hov_MOBovl_bgImgPos};` : hov_MOBovl_bgImgPos === 'custom' ? `background-position: ${hov_MOBovl_bgImgcustomPosX}${hov_MOBovl_bgImgcustomPosXUnit} ${hov_MOBovl_bgImgcustomPosY}${hov_MOBovl_bgImgcustomPosYUnit};` : ' '}
  
        ${hov_MOBovl_bgImgRepeat ? `background-repeat: ${hov_MOBovl_bgImgRepeat};` : ' '}
        ` : ' '}
    
    `;

  // const bgTransitionStyle = noTransition
  // 	? " "
  // 	: `background ${bg_transition || 0}s`;

  // const ovlTransitionStyle = noTransition
  // 	? " "
  // 	: `background ${ovl_bg_transition || 0}s, opacity ${ovl_opacityTransition || 0
  // 	}s, filter ${ovl_filtersTransition || 0}s`;

  return {
    backgroundStylesDesktop,
    hoverBackgroundStylesDesktop,
    backgroundStylesTab,
    hoverBackgroundStylesTab,
    backgroundStylesMobile,
    hoverBackgroundStylesMobile,
    overlayStylesDesktop,
    hoverOverlayStylesDesktop,
    overlayStylesTab,
    hoverOverlayStylesTab,
    overlayStylesMobile,
    hoverOverlayStylesMobile
    // bgTransitionStyle,
    // ovlTransitionStyle,
  };
};

/***/ }),

/***/ "./src/helpers/border-helper.js":
/*!**************************************!*\
  !*** ./src/helpers/border-helper.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBorderAttributies: function() { return /* binding */ generateBorderAttributies; },
/* harmony export */   generateBorderStyle: function() { return /* binding */ generateBorderStyle; }
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helpers/helper.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/constants */ "./src/global/constants.js");


const generateBorderAttributies = (controlName, defaults = {}) => {
  const {
    top,
    right,
    bottom,
    left,
    color
  } = defaults;
  const desktopTop = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(top) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: {
      type: 'string',
      default: `${top}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: {
      type: 'string'
    }
  };
  const desktopRight = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(right) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: {
      type: 'string',
      default: `${right}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: {
      type: 'string'
    }
  };
  const desktopBottom = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(bottom) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: {
      type: 'string',
      default: `${bottom}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: {
      type: 'string'
    }
  };
  const desktopLeft = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(left) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: {
      type: 'string',
      default: `${left}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: {
      type: 'string'
    }
  };
  const desktopType = {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderType`]: {
      type: 'string',
      default: 'none'
    }
  };
  const desktopColor = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(color) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderColor`]: {
      type: 'string',
      default: `${color}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderColor`]: {
      type: 'string'
    }
  };
  const desktopStyle = {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderStyle`]: {
      type: 'string',
      default: 'dashed'
    }
  };
  const desktopUnit = {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    }
  };
  return {
    ...desktopTop,
    ...desktopRight,
    ...desktopBottom,
    ...desktopLeft,
    ...desktopType,
    ...desktopColor,
    ...desktopStyle,
    ...desktopUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderType`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Unit`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Top`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Right`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Bottom`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Left`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderColor`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderStyle`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderType`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Unit`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Top`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Right`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Bottom`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Left`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderColor`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderStyle`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}IsLinked`]: {
      type: 'boolean',
      default: true
    }
  };
};

//generate border style
const generateBorderStyle = ({
  controlName,
  attributes
}) => {
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderType`]: type,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Unit`]: unit = 'px',
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: top,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: right,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: bottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: left,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderColor`]: color,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}BorderStyle`]: style,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderType`]: tabType,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Unit`]: tabUnit = 'px',
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Top`]: tabTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Right`]: tabRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Bottom`]: tabBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Left`]: tabLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderColor`]: tabColor,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}BorderStyle`]: tabStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderType`]: mobType,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Unit`]: mobUnit = 'px',
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Top`]: mobTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Right`]: mobRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Bottom`]: mobBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Left`]: mobLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderColor`]: mobColor,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}BorderStyle`]: mobStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}IsLinked`]: isLinked
  } = attributes;
  let desktopBorderStyle = '';
  let tabBorderStyle = '';
  let mobBorderStyle = '';

  // Desktop border style
  const deskBorderType = type;
  const deskBorderUnit = unit;
  const deskBorderStyle = style;
  const deskBorderColor = color;
  let deskBorderWidth = '';
  if (isLinked) {
    deskBorderWidth = `
			${top && top != undefined ? `border-width:${top}${deskBorderUnit};` : ''}
		`;
  } else {
    deskBorderWidth = `
			${top && top != undefined ? `border-top-width:${top}${deskBorderUnit};` : ''}
			${right && right != undefined ? `border-right-width:${right}${deskBorderUnit};` : ''}
			${bottom && bottom != undefined ? `border-bottom-width:${bottom}${deskBorderUnit};` : ''}
			${left && left != undefined ? `border-left-width:${left}${deskBorderUnit};` : ''}
		`;
  }
  if (deskBorderType !== 'none') {
    desktopBorderStyle = `
			border-style:${type === 'solid' ? 'solid' : deskBorderStyle};
			border-color:${deskBorderColor};
			${deskBorderWidth}
		`;
  }

  // Tab border style
  const tabBorderType = tabType;
  const tabBorderUnit = tabUnit;
  const tabletBorderStyle = tabStyle;
  const tabBorderColor = tabColor;
  let tabBorderWidth = '';
  if (isLinked) {
    tabBorderWidth = `
			${tabTop && tabTop != undefined ? `border-width:${tabTop}${tabBorderUnit};` : ''}	
		`;
  } else {
    tabBorderWidth = `
			${tabTop && tabTop != undefined ? `border-top-width:${tabTop}${tabBorderUnit};` : ''}
			${tabRight && tabRight != undefined ? `border-right-width:${tabRight}${tabBorderUnit};` : ''}
			${tabBottom && tabBottom != undefined ? `border-bottom-width:${tabBottom}${tabBorderUnit};` : ''}
			${tabLeft && tabLeft != undefined ? `border-left-width:${tabLeft}${tabBorderUnit};` : ''}
		`;
  }
  if (tabBorderType !== 'none') {
    tabBorderStyle = `
			border-style:${tabBorderType === 'solid' ? 'solid' : tabletBorderStyle};
			border-color:${tabBorderColor};
			${tabBorderWidth}
		`;
  }

  // Mobile border style
  const mobBorderType = mobType;
  const mobBorderUnit = mobUnit;
  const mobileBorderStyle = mobStyle;
  const mobBorderColor = mobColor;
  let mobBorderWidth = '';
  if (isLinked) {
    mobBorderWidth = `
			${mobTop && mobTop != undefined ? `border-width:${mobTop}${mobBorderUnit};` : ''}
		`;
  } else {
    mobBorderWidth = `
			${mobTop && mobTop != undefined ? `border-top-width:${mobTop}${mobBorderUnit};` : ''}
			${mobRight && mobRight != undefined ? `border-right-width:${mobRight}${mobBorderUnit};` : ''}
			${mobBottom && mobBottom != undefined ? `border-bottom-width:${mobBottom}${mobBorderUnit};` : ''}
			${mobLeft && mobLeft != undefined ? `border-left-width:${mobLeft}${mobBorderUnit};` : ''}
		`;
  }
  if (mobBorderType !== 'none') {
    mobBorderStyle = `
			border-style:${mobBorderType === 'solid' ? 'solid' : mobileBorderStyle};
			border-color:${mobBorderColor};
			${mobBorderWidth}
		`;
  }
  return {
    desktopBorderStyle,
    tabBorderStyle,
    mobBorderStyle
  };
};

/***/ }),

/***/ "./src/helpers/boxshadow-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/boxshadow-helper.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBoxShadowAttributies: function() { return /* binding */ generateBoxShadowAttributies; },
/* harmony export */   generateBoxShadowStyles: function() { return /* binding */ generateBoxShadowStyles; }
/* harmony export */ });
const generateBoxShadowAttributies = controlName => {
  const shdAttrs = {
    // shadow attributes
    [`${controlName}hOffset`]: {
      type: 'number'
    },
    [`${controlName}vOffset`]: {
      type: 'number'
    },
    [`${controlName}blur`]: {
      type: 'number'
    },
    [`${controlName}spread`]: {
      type: 'number'
    },
    [`${controlName}shadowColor`]: {
      type: 'string'
    },
    [`${controlName}shadowType`]: {
      type: 'string',
      default: 'none'
    },
    [`${controlName}shadowUnit`]: {
      type: 'string',
      default: 'px'
    }
  };
  return {
    ...shdAttrs
  };
};
const generateBoxShadowStyles = ({
  controlName,
  attributes
}) => {
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hOffset`]: hOffset = 0,
    [`${controlName}vOffset`]: vOffset = 0,
    [`${controlName}blur`]: blur = 0,
    [`${controlName}spread`]: spread = 0,
    [`${controlName}shadowType`]: type = 'none',
    [`${controlName}shadowUnit`]: unit = 'px'
  } = attributes;
  const boxShadowStyle = `${shadowColor ? `box-shadow: ${shadowColor} ${hOffset}${unit} ${vOffset}${unit} ${blur}${unit} ${spread}${unit} ${type === 'inset' ? 'inset' : ''};` : ' '}
	`;
  return {
    boxShadowStyle
  };
};

/***/ }),

/***/ "./src/helpers/dimension-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/dimension-helper.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDimensionAttributes: function() { return /* binding */ generateDimensionAttributes; },
/* harmony export */   generateDimensionStyle: function() { return /* binding */ generateDimensionStyle; }
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helpers/helper.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/constants */ "./src/global/constants.js");


const generateDimensionAttributes = (controlName, defaults = {}) => {
  const {
    top,
    bottom,
    left,
    right,
    isLinked = true
  } = defaults;
  const desktopTop = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(top) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: {
      type: 'string',
      default: `${top}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: {
      type: 'string'
    }
  };
  const desktopRight = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(right) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: {
      type: 'string',
      default: `${right}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: {
      type: 'string'
    }
  };
  const desktopBottom = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(bottom) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: {
      type: 'string',
      default: `${bottom}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: {
      type: 'string'
    }
  };
  const desktopLeft = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(left) ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: {
      type: 'string',
      default: `${left}`
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: {
      type: 'string'
    }
  };
  return {
    ...desktopTop,
    ...desktopRight,
    ...desktopBottom,
    ...desktopLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Top`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Right`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Bottom`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Left`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Top`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Right`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Bottom`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Left`]: {
      type: 'string'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}IsLinked`]: {
      type: 'boolean',
      default: isLinked
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    }
  };
};

/**
 * Function Name: generateDimensionStyle
 * @param {*} param
 * @returns string
 */
const generateDimensionStyle = ({
  controlName,
  styleFor,
  attributes
}) => {
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Unit`]: dimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Top`]: dimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Right`]: dimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Bottom`]: dimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}Left`]: dimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Unit`]: TABdimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Top`]: TABdimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Right`]: TABdimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Bottom`]: TABdimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${controlName}Left`]: TABdimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Unit`]: MOBdimensionUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Top`]: MOBdimensionTop,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Right`]: MOBdimensionRight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Bottom`]: MOBdimensionBottom,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${controlName}Left`]: MOBdimensionLeft,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${controlName}IsLinked`]: isLinked
  } = attributes;
  // console.log("here", `${prefix}${controlName}Top`)

  let dimensionStylesDesktop = ' ';
  let dimensionStylesTab = ' ';
  let dimensionStylesMobile = ' ';
  if (isLinked === true) {
    if (styleFor === 'border-radius') {
      dimensionStylesDesktop = `
                ${dimensionTop ? `border-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ''}
    	    `;
      dimensionStylesTab = `
                ${TABdimensionTop ? `border-radius: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ''}
   		    `;
      dimensionStylesMobile = `
                ${MOBdimensionTop ? `border-radius: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ''}
            `;
    } else {
      dimensionStylesDesktop = `
                ${dimensionTop ? `${styleFor}: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
            `;
      dimensionStylesTab = `
                ${TABdimensionTop ? `${styleFor}: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ''}
            `;
      dimensionStylesMobile = `
                ${MOBdimensionTop ? `${styleFor}: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
             `;
    }
  } else {
    if (styleFor === 'border-radius') {
      dimensionStylesDesktop = `
                ${dimensionTop ? `border-top-left-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ''}
                ${dimensionRight ? `border-top-right-radius: ${parseFloat(dimensionRight)}${dimensionUnit};` : ' '}
                ${dimensionLeft ? `border-bottom-left-radius: ${parseFloat(dimensionLeft)}${dimensionUnit};` : ' '}
                ${dimensionBottom ? `border-bottom-right-radius: ${parseFloat(dimensionBottom)}${dimensionUnit};` : ' '}

            `;
      dimensionStylesTab = `
                ${TABdimensionTop ? `border-top-left-radius: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}
                ${TABdimensionRight ? `border-top-right-radius: ${parseFloat(TABdimensionRight)}${TABdimensionUnit};` : ' '}
                ${TABdimensionLeft ? `border-bottom-left-radius: ${parseFloat(TABdimensionLeft)}${TABdimensionUnit};` : ' '}
                ${TABdimensionBottom ? `border-bottom-right-radius: ${parseFloat(TABdimensionBottom)}${TABdimensionUnit};` : ' '}

            `;
      dimensionStylesMobile = `
                ${MOBdimensionTop ? `border-top-left-radius: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionRight ? `border-top-right-radius: ${parseFloat(MOBdimensionRight)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionLeft ? `border-bottom-left-radius: ${parseFloat(MOBdimensionLeft)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionBottom ? `border-bottom-right-radius: ${parseFloat(MOBdimensionBottom)}${MOBdimensionUnit};` : ' '}

            `;
    } else {
      dimensionStylesDesktop = `
            ${dimensionTop ? `${styleFor}-top: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
            ${dimensionRight ? `${styleFor}-right: ${parseFloat(dimensionRight)}${dimensionUnit};` : ' '}
            ${dimensionLeft ? `${styleFor}-left: ${parseFloat(dimensionLeft)}${dimensionUnit};` : ' '}
            ${dimensionBottom ? `${styleFor}-bottom: ${parseFloat(dimensionBottom)}${dimensionUnit};` : ' '}

        `;
      dimensionStylesTab = `
            ${TABdimensionTop ? `${styleFor}-top: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}
            ${TABdimensionRight ? `${styleFor}-right: ${parseFloat(TABdimensionRight)}${TABdimensionUnit};` : ' '}
            ${TABdimensionLeft ? `${styleFor}-left: ${parseFloat(TABdimensionLeft)}${TABdimensionUnit};` : ' '}
            ${TABdimensionBottom ? `${styleFor}-bottom: ${parseFloat(TABdimensionBottom)}${TABdimensionUnit};` : ' '}

        `;
      dimensionStylesMobile = `
        ${MOBdimensionTop ? `${styleFor}-top: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionRight ? `${styleFor}-right: ${parseFloat(MOBdimensionRight)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionLeft ? `${styleFor}-left: ${parseFloat(MOBdimensionLeft)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionBottom ? `${styleFor}-bottom: ${parseFloat(MOBdimensionBottom)}${MOBdimensionUnit};` : ' '}
        `;
    }
  }
  if (controlName === 'advBtnMargin') {
    // console.log("ControlName: ", controlName, styleFor, dimensionStylesDesktop)
  }
  return {
    dimensionStylesDesktop,
    dimensionStylesTab,
    dimensionStylesMobile
  };
};

/***/ }),

/***/ "./src/helpers/helper.js":
/*!*******************************!*\
  !*** ./src/helpers/helper.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicTag: function() { return /* binding */ DynamicTag; },
/* harmony export */   classArrayToStr: function() { return /* binding */ classArrayToStr; },
/* harmony export */   handleUniqueId: function() { return /* binding */ handleUniqueId; },
/* harmony export */   hasVal: function() { return /* binding */ hasVal; },
/* harmony export */   removeEmptyCSSProperties: function() { return /* binding */ removeEmptyCSSProperties; },
/* harmony export */   softMinifyCssStrings: function() { return /* binding */ softMinifyCssStrings; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);



/**
 * this function is for creating a unique uniqueId for each block's unique className
 * @param {prefix: type "string", uniqueId: "current uniqueId", setAttributes: type function, clientId}
 */
const handleUniqueId = ({
  prefix,
  uniqueId,
  setAttributes,
  clientId
}) => {
  const unique_id = prefix + '-' + Math.random().toString(36).substr(2, 8);

  /**
   * Define and Generate Unique Block ID
   */
  if (!uniqueId) {
    setAttributes({
      uniqueId: unique_id
    });
    return;
  }

  /**
   * Assign New Unique ID when duplicate uniqueId found
   * Mostly happens when User Duplicate a Block
   */

  const all_blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/block-editor').getBlocks();
  let duplicateFound = false;
  const fixDuplicateUniqueId = blocks => {
    if (duplicateFound) return;
    for (const item of blocks) {
      const {
        innerBlocks
      } = item;
      if (item.attributes.uniqueId === uniqueId) {
        if (item.clientId !== clientId) {
          setAttributes({
            uniqueId: unique_id
          });
          duplicateFound = true;
          return;
        } else if (innerBlocks.length > 0) {
          fixDuplicateUniqueId(innerBlocks);
        }
      } else if (innerBlocks.length > 0) {
        fixDuplicateUniqueId(innerBlocks);
      }
    }
  };
  fixDuplicateUniqueId(all_blocks);
};

//check if input number has value
const hasVal = val => val || val === 0;

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
const softMinifyCssStrings = (cssString = ' ') => {
  cssString = cssString.replace(/[^{}]+{\s*}/g, '') //Remove empty curly braces selectors
  .replace(/\n\s+/g, '') // Remove newlines and preceding spaces
  .replace(/\s+{/g, '{') // Remove spaces before opening curly braces
  .replace(/\s+}/g, '}') // Remove spaces before closing curly braces
  .replace(/:\s+/g, ':') // Remove spaces after colons
  .replace(/;\s+/g, ';'); // Remove spaces after semicolons;

  // return cssString
  return removeEmptyCSSProperties(cssString);
};
const removeEmptyCSSProperties = cssString => {
  // Split the CSS string into individual rules
  const cssRules = cssString.split('}');

  // Iterate through each rule and process it
  const filteredRules = cssRules.map(rule => {
    // Split the rule into selector and properties
    const [selector, properties] = rule.split('{');
    if (properties) {
      // Split the properties into individual property declarations
      const propertyDeclarations = properties.split(';').filter(declaration => {
        // Remove any property with an empty value or "undefined" value
        const [property, value] = declaration.split(':');
        return value && value.trim() !== '' && value.trim() !== 'undefined';
      });
      // Rejoin the selector and filtered properties
      return propertyDeclarations.length > 0 ? `${selector} { ${propertyDeclarations.join('; ')} }` : null;
    }
    return null;
  }).filter(Boolean);

  // Rejoin the filtered rules into a CSS string
  return filteredRules.join('');
};

//Dynamic Tag
const DynamicTag = props => {
  const {
    tagName,
    children,
    ...attr
  } = props;
  const Tag = tagName || 'h2';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...attr
  }, children);
};
const classArrayToStr = classes => {
  if (typeof classes !== 'object') {
    return '';
  }
  const uniqueClasses = [...new Set(classes)];
  return uniqueClasses.join(' ');
};

/***/ }),

/***/ "./src/helpers/normal-bg-helpers.js":
/*!******************************************!*\
  !*** ./src/helpers/normal-bg-helpers.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNormalBGAttributes: function() { return /* binding */ generateNormalBGAttributes; },
/* harmony export */   generateNormalBGControlStyles: function() { return /* binding */ generateNormalBGControlStyles; }
/* harmony export */ });
const generateNormalBGAttributes = (controlName, defaults = {}) => {
  const {
    isBgDefaultGradient,
    defaultFillColor,
    defaultBgGradient = 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
    noMainBGImg = false
  } = defaults;
  const bgColorAttr = defaultFillColor ? {
    [`${controlName}backgroundColor`]: {
      type: 'string',
      default: defaultFillColor
    }
  } : {
    [`${controlName}backgroundColor`]: {
      type: 'string'
    }
  };
  const mainWithoutBgiAttrs = {
    [`${controlName}backgroundType`]: {
      type: 'string',
      default: isBgDefaultGradient === true ? 'gradient' : 'classic'
    },
    ...bgColorAttr,
    [`${controlName}gradientColor`]: {
      type: 'string',
      default: defaultBgGradient
    }
  };
  const mainBgiAttrs = {
    // desktop attributes start ⬇
    [`${controlName}bgImageURL`]: {
      type: 'string'
    },
    [`${controlName}bgImageID`]: {
      type: 'number'
    },
    [`${controlName}bgImgAttachment`]: {
      type: 'string'
    },
    [`${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // Tab attributes start ⬇
    [`TAB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`TAB${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`TAB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`TAB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`TAB${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`TAB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}bgImgRepeat`]: {
      type: 'string'
    },
    // Mobile attributes start ⬇
    [`MOB${controlName}backgroundSize`]: {
      type: 'string'
    },
    [`MOB${controlName}bgImgCustomSize`]: {
      type: 'number',
      default: 100
    },
    [`MOB${controlName}bgImgCustomSizeUnit`]: {
      type: 'string',
      default: '%'
    },
    [`MOB${controlName}bgImgPos`]: {
      type: 'string'
    },
    [`MOB${controlName}bgImgcustomPosX`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}bgImgcustomPosXUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}bgImgcustomPosY`]: {
      type: 'number',
      default: 0
    },
    [`MOB${controlName}bgImgcustomPosYUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}bgImgRepeat`]: {
      type: 'string'
    }
  };
  let result = {};
  result = noMainBGImg === true ? {
    ...mainWithoutBgiAttrs
  } : {
    ...mainWithoutBgiAttrs,
    ...mainBgiAttrs
  };
  return result;
};

// function to generate Background control styles
const generateNormalBGControlStyles = ({
  controlName,
  attributes,
  noMainBGImg = false
}) => {
  let BGnoMainBgi = noMainBGImg;
  const {
    // background attributes starts ⬇

    //  attributes for bg_hoverType normal start  ⬇
    [`${controlName}backgroundType`]: backgroundType,
    [`${controlName}backgroundColor`]: backgroundColor,
    [`${controlName}gradientColor`]: gradientColor,
    [`${controlName}bgImageURL`]: bgImageURL,
    // [`${controlName}bgImageID`]: bgImageID,
    [`${controlName}backgroundSize`]: backgroundSize,
    [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
    [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
    [`${controlName}bgImgPos`]: bgImgPos,
    [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
    [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
    [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
    [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
    [`${controlName}bgImgAttachment`]: bgImgAttachment,
    [`${controlName}bgImgRepeat`]: bgImgRepeat,
    [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
    [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
    [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
    [`TAB${controlName}bgImgPos`]: TABbgImgPos,
    [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
    [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
    [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
    [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
    [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
    [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
    [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
    [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
    [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
    [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
    [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
    [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
    [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
    [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat
  } = attributes;
  const backgroundStylesDesktop = `
    ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL || backgroundType === 'gradient' && gradientColor ? `
        background-image: ${backgroundType === 'classic' ? `url("${bgImageURL}")` : backgroundType === 'gradient' ? gradientColor : 'none'}; ` : ' '}

  ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
      ${backgroundSize && backgroundSize !== 'custom' ? `background-size: ${backgroundSize};` : backgroundSize === 'custom' ? `background-size: ${bgImgCustomSize}${bgImgCustomSizeUnit} auto;` : ' '}

      ${bgImgPos && bgImgPos !== 'custom' ? `background-position: ${bgImgPos};` : bgImgPos === 'custom' ? `background-position: ${bgImgcustomPosX}${bgImgcustomPosXUnit} ${bgImgcustomPosY}${bgImgcustomPosYUnit};` : ' '}

      ${bgImgAttachment ? `background-attachment: ${bgImgAttachment};` : ' '}

      ${bgImgRepeat ? `background-repeat: ${bgImgRepeat};` : ' '}
      ` : ' '}

    ${backgroundColor ? `background-color: ${backgroundColor};` : ' '}

    `;
  const backgroundStylesTab = `
    ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
        ${TABbackgroundSize && TABbackgroundSize !== 'custom' ? `background-size: ${TABbackgroundSize};` : TABbackgroundSize === 'custom' ? `background-size: ${TABbgImgCustomSize}${TABbgImgCustomSizeUnit} auto;` : ' '}

    ${TABbgImgPos && TABbgImgPos !== 'custom' ? `background-position: ${TABbgImgPos};` : TABbgImgPos === 'custom' ? `background-position: ${TABbgImgcustomPosX}${TABbgImgcustomPosXUnit} ${TABbgImgcustomPosY}${TABbgImgcustomPosYUnit};` : ' '}

    ${TABbgImgRepeat ? `background-repeat: ${TABbgImgRepeat};` : ' '}
      background-attachment: scroll;
    ` : ' '}
  `;
  const backgroundStylesMobile = `
    ${BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL ? `
        ${MOBbackgroundSize && MOBbackgroundSize !== 'custom' ? `background-size: ${MOBbackgroundSize};` : MOBbackgroundSize === 'custom' ? `background-size: ${MOBbgImgCustomSize}${MOBbgImgCustomSizeUnit} auto;` : ' '}

    ${MOBbgImgPos && MOBbgImgPos !== 'custom' ? `background-position: ${MOBbgImgPos};` : MOBbgImgPos === 'custom' ? `background-position: ${MOBbgImgcustomPosX}${MOBbgImgcustomPosXUnit} ${MOBbgImgcustomPosY}${MOBbgImgcustomPosYUnit};` : ' '}

    ${MOBbgImgRepeat ? `background-repeat: ${MOBbgImgRepeat};` : ' '} ` : ' '}
  `;
  return {
    backgroundStylesDesktop,
    backgroundStylesTab,
    backgroundStylesMobile
  };
};

/***/ }),

/***/ "./src/helpers/preview-btns-helper.js":
/*!********************************************!*\
  !*** ./src/helpers/preview-btns-helper.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDesktopBtnClick: function() { return /* binding */ onDesktopBtnClick; },
/* harmony export */   onMobileBtnClick: function() { return /* binding */ onMobileBtnClick; },
/* harmony export */   onTabletBtnClick: function() { return /* binding */ onTabletBtnClick; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const onDesktopBtnClick = ({
  setAttributes
}) => {
  setAttributes({
    resMode: 'Desktop'
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
};
const onTabletBtnClick = ({
  setAttributes
}) => {
  setAttributes({
    resMode: 'Tablet'
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
};
const onMobileBtnClick = ({
  setAttributes
}) => {
  setAttributes({
    resMode: 'Mobile'
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
};

/***/ }),

/***/ "./src/helpers/res-alignment-helper.js":
/*!*********************************************!*\
  !*** ./src/helpers/res-alignment-helper.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateResAlignmentAttributies: function() { return /* binding */ generateResAlignmentAttributies; },
/* harmony export */   generateResAlignmentStyle: function() { return /* binding */ generateResAlignmentStyle; }
/* harmony export */ });
const generateResAlignmentAttributies = (controlName, defaults = {}) => {
  const {
    defaultAlign
  } = defaults;
  const desktopAlign = defaultAlign ? {
    [`${controlName}ZRPAlign`]: {
      type: 'string',
      default: defaultAlign
    }
  } : {
    [`${controlName}ZRPAlign`]: {
      type: 'string'
    }
  };
  return {
    ...desktopAlign,
    [`TAB${controlName}ZRPAlign`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPAlign`]: {
      type: 'string'
    }
  };
};
const generateResAlignmentStyle = ({
  controlName,
  property,
  attributes
}) => {
  const {
    [`${controlName}ZRPAlign`]: desktopAlign,
    [`TAB${controlName}ZRPAlign`]: tabAlign,
    [`MOB${controlName}ZRPAlign`]: mobAlign
  } = attributes;
  const desktopAlignStyle = desktopAlign || desktopAlign == '' ? property + ':' + desktopAlign + ';' : '';
  const tabAlignStyle = tabAlign || tabAlign == '' ? property + ':' + tabAlign + ';' : '';
  const mobAlignStyle = mobAlign || mobAlign == '' ? property + ':' + mobAlign + ';' : '';
  return {
    desktopAlignStyle,
    tabAlignStyle,
    mobAlignStyle
  };
};

/***/ }),

/***/ "./src/helpers/res-counter-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/res-counter-helper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateResCounterAttributies: function() { return /* binding */ generateResCounterAttributies; },
/* harmony export */   generateResCounterStyle: function() { return /* binding */ generateResCounterStyle; }
/* harmony export */ });
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/constants */ "./src/global/constants.js");

const generateResCounterAttributies = (controlName, defaults = {}) => {
  const {
    defaultRange
  } = defaults;
  const desktopRange = defaultRange ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: {
      type: 'number',
      default: defaultRange
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: {
      type: 'number'
    }
  };
  return {
    ...desktopRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Range`]: {
      type: 'number'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Range`]: {
      type: 'number'
    }
  };
};
const generateResCounterStyle = ({
  controlName,
  property = '',
  attributes,
  noProperty = false
}) => {
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: desktopRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Range`]: tabRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Range`]: mobRange
  } = attributes;
  const desktopRangeStyle = desktopRange || desktopRange == 0 ? (noProperty ? '' : property + ':') + desktopRange + (noProperty ? '' : ';') : '';
  const tabRangeStyle = tabRange || tabRange == 0 ? (noProperty ? '' : property + ':') + tabRange + (noProperty ? '' : ';') : '';
  const mobRangeStyle = mobRange || mobRange == 0 ? (noProperty ? '' : property + ':') + mobRange + (noProperty ? '' : ';') : '';
  return {
    desktopRangeStyle,
    tabRangeStyle,
    mobRangeStyle
  };
};

/***/ }),

/***/ "./src/helpers/res-range-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/res-range-helper.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateResRangeAttributies: function() { return /* binding */ generateResRangeAttributies; },
/* harmony export */   generateResRangeStyle: function() { return /* binding */ generateResRangeStyle; }
/* harmony export */ });
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/constants */ "./src/global/constants.js");

const generateResRangeAttributies = (controlName, defaults = {}) => {
  const {
    defaultRange,
    noUnits,
    defaultUnit = 'px'
  } = defaults;
  const desktopRange = defaultRange ? {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: {
      type: 'number',
      default: defaultRange
    }
  } : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: {
      type: 'number'
    }
  };
  const units = noUnits == true ? {} : {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Unit`]: {
      type: 'string',
      default: defaultUnit
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Unit`]: {
      type: 'string',
      default: 'px'
    }
  };
  return {
    ...desktopRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Range`]: {
      type: 'number'
    },
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Range`]: {
      type: 'number'
    },
    ...units
  };
};
const generateResRangeStyle = ({
  controlName,
  property,
  attributes,
  noUnits,
  unitCustomTxt,
  noProperty = false
}) => {
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Range`]: desktopRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Range`]: tabRange,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Range`]: mobRange
  } = attributes;
  let desktopUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}${controlName}Unit`];
  let tabUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}TAB${controlName}Unit`];
  let mobUnit = attributes[`${_global_constants__WEBPACK_IMPORTED_MODULE_0__.prefix}MOB${controlName}Unit`];
  if (noUnits) {
    desktopUnit = tabUnit = mobUnit = '';
  } else if (unitCustomTxt) {
    desktopUnit = tabUnit = mobUnit = unitCustomTxt;
  }
  const desktopRangeStyle = desktopRange || desktopRange == 0 ? (noProperty ? '' : property + ':') + desktopRange + (desktopUnit !== undefined ? desktopUnit : '') + (desktopUnit !== undefined ? ';' : '') : '';
  const tabRangeStyle = tabRange || tabRange == 0 ? (noProperty ? '' : property + ':') + tabRange + (tabUnit !== undefined ? tabUnit : '') + (tabUnit !== undefined ? ';' : '') : '';
  const mobRangeStyle = mobRange || mobRange == 0 ? (noProperty ? '' : property + ':') + mobRange + (mobUnit !== undefined ? mobUnit : '') + (mobUnit !== undefined ? ';' : '') : '';
  return {
    desktopRangeStyle,
    tabRangeStyle,
    mobRangeStyle
  };
};

/***/ }),

/***/ "./src/helpers/textshadow-helper.js":
/*!******************************************!*\
  !*** ./src/helpers/textshadow-helper.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTextShadowAttributies: function() { return /* binding */ generateTextShadowAttributies; },
/* harmony export */   generateTextShadowStyles: function() { return /* binding */ generateTextShadowStyles; }
/* harmony export */ });
const generateTextShadowAttributies = controlName => {
  const shdAttrs = {
    // shadow attributes
    [`${controlName}shadowColor`]: {
      type: 'string'
    },
    [`${controlName}shadowUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`${controlName}hShadow`]: {
      type: 'number'
    },
    [`${controlName}vShadow`]: {
      type: 'number'
    },
    [`${controlName}blur`]: {
      type: 'number'
    }
  };
  return {
    ...shdAttrs
  };
};
const generateTextShadowStyles = ({
  controlName,
  attributes
}) => {
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}shadowUnit`]: shadowUnit,
    [`${controlName}hShadow`]: hShadow = 0,
    [`${controlName}vShadow`]: vShadow = 0,
    [`${controlName}blur`]: blur = 0
  } = attributes;
  const textShadowStyle = `${shadowColor ? `text-shadow: ${hShadow}${shadowUnit} ${vShadow}${shadowUnit} ${blur}${shadowUnit} ${shadowColor};` : ' '}
	`;
  return {
    textShadowStyle
  };
};

/***/ }),

/***/ "./src/helpers/textstroke-helper.js":
/*!******************************************!*\
  !*** ./src/helpers/textstroke-helper.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTextStrokeAttributies: function() { return /* binding */ generateTextStrokeAttributies; },
/* harmony export */   generateTextStrokeStyles: function() { return /* binding */ generateTextStrokeStyles; }
/* harmony export */ });
const generateTextStrokeAttributies = (controlName, defaults = {}) => {
  const {
    defaultStroke,
    defaultUnit = 'px',
    defaultColor = '#000'
  } = defaults;
  const desktopStrokeWidth = defaultStroke ? {
    [`${controlName}strokeWidth`]: {
      type: 'number',
      default: defaultStroke
    }
  } : {
    [`${controlName}strokeWidth`]: {
      type: 'number'
    }
  };
  const desktopStrokeUnit = defaultUnit ? {
    [`${controlName}strokeUnit`]: {
      type: "string",
      default: defaultUnit
    }
  } : {
    [`${controlName}strokeUnit`]: {
      type: "string",
      default: 'px'
    }
  };
  const strokeColor = defaultColor ? {
    [`${controlName}strokeColor`]: {
      type: 'string',
      default: defaultColor
    }
  } : {
    [`${controlName}strokeColor`]: {
      type: 'string'
    }
  };
  const strokeAttrs = {
    // stroke attributes  ⬇
    ...strokeColor,
    ...desktopStrokeUnit,
    [`TAB${controlName}strokeUnit`]: {
      type: "string",
      default: "px"
    },
    [`MOB${controlName}strokeUnit`]: {
      type: "string",
      default: "px"
    },
    ...desktopStrokeWidth,
    [`TAB${controlName}strokeWidth`]: {
      type: 'number'
    },
    [`MOB${controlName}strokeWidth`]: {
      type: 'number'
    }
  };
  return {
    ...strokeAttrs
  };
};
const generateTextStrokeStyles = ({
  controlName,
  attributes
}) => {
  const {
    [`${controlName}strokeColor`]: strokeColor,
    [`${controlName}strokeWidth`]: desktopstrokeWidth,
    [`TAB${controlName}strokeWidth`]: tabstrokeWidth,
    [`MOB${controlName}strokeWidth`]: mobstrokeWidth,
    [`${controlName}strokeUnit`]: desktopstrokeUnit,
    [`TAB${controlName}strokeUnit`]: tabstrokeUnit,
    [`MOB${controlName}strokeUnit`]: mobstrokeUnit
  } = attributes;
  const desktopTextStrokeStyle = `${desktopstrokeWidth || desktopstrokeWidth == 0 ? `
    -webkit-text-stroke-width: ${desktopstrokeWidth}${desktopstrokeUnit};
    stroke-width: ${desktopstrokeWidth}${desktopstrokeUnit};
    -webkit-text-stroke-color: ${strokeColor};
    stroke:  ${strokeColor};
    ` : ' '}
	`;
  const tabTextStrokeStyle = `${tabstrokeWidth || tabstrokeWidth == 0 ? `
  -webkit-text-stroke-width: ${tabstrokeWidth}${tabstrokeUnit};
  stroke-width: ${tabstrokeWidth}${tabstrokeUnit};
  -webkit-text-stroke-color: ${strokeColor};
  stroke:  ${strokeColor};
  ` : ' '}
`;
  const mobTextStrokeStyle = `${mobstrokeWidth || mobstrokeWidth == 0 ? `
  -webkit-text-stroke-width: ${mobstrokeWidth}${mobstrokeUnit};
  stroke-width: ${mobstrokeWidth}${mobstrokeUnit};
  -webkit-text-stroke-color: ${strokeColor};
  stroke:  ${strokeColor};
  ` : ' '}
`;
  return {
    desktopTextStrokeStyle,
    tabTextStrokeStyle,
    mobTextStrokeStyle
  };
};

/***/ }),

/***/ "./src/helpers/typoHelpers.js":
/*!************************************!*\
  !*** ./src/helpers/typoHelpers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTypographyAttributes: function() { return /* binding */ generateTypographyAttributes; },
/* harmony export */   generateTypographyStyles: function() { return /* binding */ generateTypographyStyles; }
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helpers/helper.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/constants */ "./src/global/constants.js");



// function to generate typography attributes for multiple typography control based on the array of prefix
const generateTypographyAttributes = prefixArray => {
  const typoAttrs = prefixArray.reduce((total, current) => {
    const result = {
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}FontFamily`]: {
        type: "string"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}SizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}FontSize`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}FontWeight`]: {
        type: "string"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}FontStyle`]: {
        type: "string"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}TextTransform`]: {
        type: "string"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}TextDecoration`]: {
        type: "string"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}LetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}LetterSpacing`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}LineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${current}LineHeight`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}SizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}FontSize`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}LetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}LetterSpacing`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}LineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${current}LineHeight`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}SizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}FontSize`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}LetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}LetterSpacing`]: {
        type: "number"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}LineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${current}LineHeight`]: {
        type: "number"
      }
    };
    return {
      ...total,
      ...result
    };
  }, {});
  return typoAttrs;
};

// function to generate typography styles for an element based on it's prefix
const generateTypographyStyles = ({
  prefixConstant,
  defaultFontSize,
  attributes
}) => {
  const {
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}FontFamily`]: fontFamily,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}FontWeight`]: fontWeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}FontStyle`]: fontStyle,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}TextTransform`]: textTransform,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}TextDecoration`]: textDecoration,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}FontSize`]: fontSize = defaultFontSize,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}SizeUnit`]: sizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}LetterSpacing`]: letterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}LineHeight`]: lineHeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}${prefixConstant}LineHeightUnit`]: lineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}FontSize`]: TABfontSize,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}TAB${prefixConstant}LineHeight`]: TABlineHeight,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}FontSize`]: MOBfontSize,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
    [`${_global_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}MOB${prefixConstant}LineHeight`]: MOBlineHeight
  } = attributes;
  const typoStylesDesktop = `
		${fontFamily ? `font-family: ${fontFamily};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : " "}
		${fontWeight ? `font-weight: ${fontWeight};` : " "}
		${fontStyle ? `font-style: ${fontStyle};` : " "}
		${textDecoration ? `text-decoration: ${textDecoration};` : " "}
		${textTransform ? `text-transform: ${textTransform};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(letterSpacing) ? `letter-spacing: ${letterSpacing}${letterSpacingUnit};` : " "}
	`;
  const typoStylesTab = `
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(TABlineHeight) ? `line-height: ${TABlineHeight}${TABlineHeightUnit};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(TABletterSpacing) ? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};` : " "}
	`;
  const typoStylesMobile = `
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(MOBlineHeight) ? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};` : " "}
		${(0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(MOBletterSpacing) ? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};` : " "}
	`;
  return {
    typoStylesDesktop,
    typoStylesTab,
    typoStylesMobile
  };
};

/***/ }),

/***/ "./src/module-export.js":
/*!******************************!*\
  !*** ./src/module-export.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedOptions: function() { return /* reexport safe */ _global_components_advancedOptions__WEBPACK_IMPORTED_MODULE_27__.AdvancedOptions; },
/* harmony export */   BackgroundControl: function() { return /* reexport safe */ _controls_background_control__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   BorderControl: function() { return /* reexport safe */ _controls_border_control__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   BoxShadowControl: function() { return /* reexport safe */ _controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   ColorControl: function() { return /* reexport safe */ _controls_color_control__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   DisplayIcon: function() { return /* reexport safe */ _controls_icon_picker__WEBPACK_IMPORTED_MODULE_8__.DisplayIcon; },
/* harmony export */   DynamicTag: function() { return /* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_33__.DynamicTag; },
/* harmony export */   GlobalStyleHanlder: function() { return /* reexport safe */ _global_components_globalStyleHandler__WEBPACK_IMPORTED_MODULE_28__.GlobalStyleHanlder; },
/* harmony export */   GradientControl: function() { return /* reexport safe */ _controls_gradient_control__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   HeaderTabs: function() { return /* reexport safe */ _controls_header_tabs__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   IconPicker: function() { return /* reexport safe */ _controls_icon_picker__WEBPACK_IMPORTED_MODULE_8__.IconPicker; },
/* harmony export */   IconicBtnGroup: function() { return /* reexport safe */ _controls_iconic_btn_group__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   ImageAvatar: function() { return /* reexport safe */ _controls_image_avatar__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   LinkControl: function() { return /* reexport safe */ _controls_link_control__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   NormalBGControl: function() { return /* reexport safe */ _controls_normal_bg_control__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   Pagination: function() { return /* reexport safe */ _controls_pagination__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   QueryControl: function() { return /* reexport safe */ _controls_query_control__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   RangeResetControl: function() { return /* reexport safe */ _controls_range_reset_control__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   ResAlignmentControl: function() { return /* reexport safe */ _controls_res_alignment_control__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   ResCounterControl: function() { return /* reexport safe */ _controls_res_counter_control__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   ResDimensionsControl: function() { return /* reexport safe */ _controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   ResRangeControl: function() { return /* reexport safe */ _controls_res_range_control__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   ResetControl: function() { return /* reexport safe */ _controls_reset_control__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   SortableControl: function() { return /* reexport safe */ _controls_sortable_control__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   SortableItem: function() { return /* reexport safe */ _controls_sortable_control_sortableitem__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   StarRating: function() { return /* reexport safe */ _controls_star_rating__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   TabPanelControl: function() { return /* reexport safe */ _controls_tabpanel_control__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   TextShadowControl: function() { return /* reexport safe */ _controls_textshadow_control__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   TextStrokeControl: function() { return /* reexport safe */ _controls_textstroke_control__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   TypographyDropdown: function() { return /* reexport safe */ _controls_typography_control__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   classArrayToStr: function() { return /* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_33__.classArrayToStr; },
/* harmony export */   generateBackgroundAttributes: function() { return /* reexport safe */ _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_29__.generateBackgroundAttributes; },
/* harmony export */   generateBackgroundControlStyles: function() { return /* reexport safe */ _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_29__.generateBackgroundControlStyles; },
/* harmony export */   generateBorderAttributies: function() { return /* reexport safe */ _helpers_border_helper__WEBPACK_IMPORTED_MODULE_30__.generateBorderAttributies; },
/* harmony export */   generateBorderStyle: function() { return /* reexport safe */ _helpers_border_helper__WEBPACK_IMPORTED_MODULE_30__.generateBorderStyle; },
/* harmony export */   generateBoxShadowAttributies: function() { return /* reexport safe */ _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_31__.generateBoxShadowAttributies; },
/* harmony export */   generateBoxShadowStyles: function() { return /* reexport safe */ _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_31__.generateBoxShadowStyles; },
/* harmony export */   generateDimensionAttributes: function() { return /* reexport safe */ _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_32__.generateDimensionAttributes; },
/* harmony export */   generateDimensionStyle: function() { return /* reexport safe */ _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_32__.generateDimensionStyle; },
/* harmony export */   generateNormalBGAttributes: function() { return /* reexport safe */ _helpers_normal_bg_helpers__WEBPACK_IMPORTED_MODULE_34__.generateNormalBGAttributes; },
/* harmony export */   generateNormalBGControlStyles: function() { return /* reexport safe */ _helpers_normal_bg_helpers__WEBPACK_IMPORTED_MODULE_34__.generateNormalBGControlStyles; },
/* harmony export */   generateResAlignmentAttributies: function() { return /* reexport safe */ _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_36__.generateResAlignmentAttributies; },
/* harmony export */   generateResAlignmentStyle: function() { return /* reexport safe */ _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_36__.generateResAlignmentStyle; },
/* harmony export */   generateResCounterAttributies: function() { return /* reexport safe */ _helpers_res_counter_helper__WEBPACK_IMPORTED_MODULE_41__.generateResCounterAttributies; },
/* harmony export */   generateResCounterStyle: function() { return /* reexport safe */ _helpers_res_counter_helper__WEBPACK_IMPORTED_MODULE_41__.generateResCounterStyle; },
/* harmony export */   generateResRangeAttributies: function() { return /* reexport safe */ _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_37__.generateResRangeAttributies; },
/* harmony export */   generateResRangeStyle: function() { return /* reexport safe */ _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_37__.generateResRangeStyle; },
/* harmony export */   generateTextShadowAttributies: function() { return /* reexport safe */ _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_38__.generateTextShadowAttributies; },
/* harmony export */   generateTextShadowStyles: function() { return /* reexport safe */ _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_38__.generateTextShadowStyles; },
/* harmony export */   generateTextStrokeAttributies: function() { return /* reexport safe */ _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_39__.generateTextStrokeAttributies; },
/* harmony export */   generateTextStrokeStyles: function() { return /* reexport safe */ _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_39__.generateTextStrokeStyles; },
/* harmony export */   generateTypographyAttributes: function() { return /* reexport safe */ _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_40__.generateTypographyAttributes; },
/* harmony export */   generateTypographyStyles: function() { return /* reexport safe */ _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_40__.generateTypographyStyles; },
/* harmony export */   handleUniqueId: function() { return /* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_33__.handleUniqueId; },
/* harmony export */   hasVal: function() { return /* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_33__.hasVal; },
/* harmony export */   onDesktopBtnClick: function() { return /* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_35__.onDesktopBtnClick; },
/* harmony export */   onMobileBtnClick: function() { return /* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_35__.onMobileBtnClick; },
/* harmony export */   onTabletBtnClick: function() { return /* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_35__.onTabletBtnClick; },
/* harmony export */   softMinifyCssStrings: function() { return /* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_33__.softMinifyCssStrings; }
/* harmony export */ });
/* harmony import */ var _controls_scss_controls_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/scss/controls.scss */ "./src/controls/scss/controls.scss");
/* harmony import */ var _controls_header_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/header-tabs */ "./src/controls/header-tabs/index.js");
/* harmony import */ var _controls_background_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/background-control */ "./src/controls/background-control/index.js");
/* harmony import */ var _controls_border_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/border-control */ "./src/controls/border-control/index.js");
/* harmony import */ var _controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/boxshadow-control */ "./src/controls/boxshadow-control/index.js");
/* harmony import */ var _controls_color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _controls_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/dimensions-control */ "./src/controls/dimensions-control/index.js");
/* harmony import */ var _controls_gradient_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/gradient-control */ "./src/controls/gradient-control/index.js");
/* harmony import */ var _controls_icon_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/icon-picker */ "./src/controls/icon-picker/index.js");
/* harmony import */ var _controls_image_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/image-avatar */ "./src/controls/image-avatar/index.js");
/* harmony import */ var _controls_normal_bg_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/normal-bg-control */ "./src/controls/normal-bg-control/index.js");
/* harmony import */ var _controls_range_reset_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/range-reset-control */ "./src/controls/range-reset-control/index.js");
/* harmony import */ var _controls_res_alignment_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/res-alignment-control */ "./src/controls/res-alignment-control/index.js");
/* harmony import */ var _controls_res_range_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/res-range-control */ "./src/controls/res-range-control/index.js");
/* harmony import */ var _controls_reset_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/reset-control */ "./src/controls/reset-control/index.js");
/* harmony import */ var _controls_textshadow_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/textshadow-control */ "./src/controls/textshadow-control/index.js");
/* harmony import */ var _controls_textstroke_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/textstroke-control */ "./src/controls/textstroke-control/index.js");
/* harmony import */ var _controls_typography_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controls/typography-control */ "./src/controls/typography-control/index.js");
/* harmony import */ var _controls_tabpanel_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controls/tabpanel-control */ "./src/controls/tabpanel-control/index.js");
/* harmony import */ var _controls_star_rating__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./controls/star-rating */ "./src/controls/star-rating/index.js");
/* harmony import */ var _controls_link_control__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./controls/link-control */ "./src/controls/link-control/index.js");
/* harmony import */ var _controls_iconic_btn_group__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./controls/iconic-btn-group */ "./src/controls/iconic-btn-group/index.js");
/* harmony import */ var _controls_sortable_control__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./controls/sortable-control */ "./src/controls/sortable-control/index.js");
/* harmony import */ var _controls_sortable_control_sortableitem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./controls/sortable-control/sortableitem */ "./src/controls/sortable-control/sortableitem.js");
/* harmony import */ var _controls_res_counter_control__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./controls/res-counter-control */ "./src/controls/res-counter-control/index.js");
/* harmony import */ var _controls_query_control__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./controls/query-control */ "./src/controls/query-control/index.js");
/* harmony import */ var _controls_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./controls/pagination */ "./src/controls/pagination/index.js");
/* harmony import */ var _global_components_advancedOptions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./global/components/advancedOptions */ "./src/global/components/advancedOptions.js");
/* harmony import */ var _global_components_globalStyleHandler__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./global/components/globalStyleHandler */ "./src/global/components/globalStyleHandler.js");
/* harmony import */ var _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/backgroundHelpers */ "./src/helpers/backgroundHelpers.js");
/* harmony import */ var _helpers_border_helper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/border-helper */ "./src/helpers/border-helper.js");
/* harmony import */ var _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/boxshadow-helper */ "./src/helpers/boxshadow-helper.js");
/* harmony import */ var _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/dimension-helper */ "./src/helpers/dimension-helper.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _helpers_normal_bg_helpers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helpers/normal-bg-helpers */ "./src/helpers/normal-bg-helpers.js");
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");
/* harmony import */ var _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./helpers/res-alignment-helper */ "./src/helpers/res-alignment-helper.js");
/* harmony import */ var _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./helpers/res-range-helper */ "./src/helpers/res-range-helper.js");
/* harmony import */ var _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./helpers/textshadow-helper */ "./src/helpers/textshadow-helper.js");
/* harmony import */ var _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./helpers/textstroke-helper */ "./src/helpers/textstroke-helper.js");
/* harmony import */ var _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./helpers/typoHelpers */ "./src/helpers/typoHelpers.js");
/* harmony import */ var _helpers_res_counter_helper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./helpers/res-counter-helper */ "./src/helpers/res-counter-helper.js");
//Import controls css


//Export Controls





























//Export Helpers














/***/ }),

/***/ "./src/controls/scss/controls.scss":
/*!*****************************************!*\
  !*** ./src/controls/scss/controls.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"build/module": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkzolo_blocks"] = self["webpackChunkzolo_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-bundle"], function() { return __webpack_require__("./src/module-export.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	window.zoloModule = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map