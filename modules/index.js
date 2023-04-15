/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controls/background-control/bg-control.js":
/*!*******************************************************!*\
  !*** ./src/controls/background-control/bg-control.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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










const BGControl = _ref => {
  let {
    controlName,
    resRequiredProps,
    noMainBGImg
  } = _ref;
  const {
    setAttributes,
    attributes,
    resMode
  } = resRequiredProps;
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_HOVER.map(_ref2 => {
    let {
      value,
      label
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: bg_hoverType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`${controlName}bg_hoverType`]: value
      })
    }, label);
  }))), bg_hoverType === 'normal' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(_ref3 => {
    let {
      value,
      label
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: backgroundType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`${controlName}backgroundType`]: value
      })
    }, label);
  }))), backgroundType === 'classic' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'zolo-blocks'),
    color: backgroundColor,
    onChange: backgroundColor => setAttributes({
      [`${controlName}backgroundColor`]: backgroundColor
    })
  }), noMainBGImg === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: _ref4 => {
      let {
        url,
        id
      } = _ref4;
      return setAttributes({
        [`${controlName}bgImageURL`]: url,
        [`${controlName}bgImageID`]: id
      });
    },
    type: "image",
    value: bgImageID,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return !bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "zb-bg-control-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
        icon: "format-image",
        onClick: open
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        style: {
          padding: '10px 0',
          display: 'block'
        }
      }));
    }
  }), bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageUrl: bgImageURL,
    onDeleteImage: () => setAttributes({
      [`${controlName}bgImageURL`]: null
    })
  }), resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), bgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgcustomPosX,
    min: -2000,
    max: 2000,
    onChange: bgImgcustomPosX => setAttributes({
      [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgcustomPosY,
    min: -2000,
    max: 2000,
    step: bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: bgImgcustomPosY => setAttributes({
      [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), backgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: bgImgCustomSize => setAttributes({
      [`${controlName}bgImgCustomSize`]: bgImgCustomSize
    })
  })))), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), TABbgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: TABbgImgcustomPosX => setAttributes({
      [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: TABbgImgcustomPosY => setAttributes({
      [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), TABbackgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: TABbgImgCustomSize => setAttributes({
      [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize
    })
  })))), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), MOBbgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: MOBbgImgcustomPosX => setAttributes({
      [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: MOBbgImgcustomPosY => setAttributes({
      [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), MOBbackgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: MOBbgImgCustomSize => setAttributes({
      [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize
    })
  }))))))), backgroundType === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: 'Gradient Color',
    value: gradientColor,
    onChange: newVal => setAttributes({
      [`${controlName}gradientColor`]: newVal
    })
  })), bg_hoverType === 'hover' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Type', 'zolo-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(_ref6 => {
    let {
      value,
      label
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: hov_backgroundType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`hov_${controlName}backgroundType`]: value
      })
    }, label);
  }))), hov_backgroundType === 'classic' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'zolo-blocks'),
    color: hov_backgroundColor,
    onChange: newVal => setAttributes({
      [`hov_${controlName}backgroundColor`]: newVal
    })
  }), noMainBGImg === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: _ref7 => {
      let {
        url,
        id
      } = _ref7;
      return setAttributes({
        [`hov_${controlName}bgImageURL`]: url,
        [`hov_${controlName}bgImageID`]: id
      });
    },
    type: "image",
    value: hov_bgImageID,
    render: _ref8 => {
      let {
        open
      } = _ref8;
      return !hov_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "zb-bg-control-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'zolo-blocks'),
        icon: "format-image",
        onClick: open
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        style: {
          padding: '10px 0',
          display: 'block'
        }
      }));
    }
  }), hov_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageUrl: hov_bgImageURL,
    onDeleteImage: () => setAttributes({
      [`hov_${controlName}bgImageURL`]: null
    })
  }), resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_bgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_bgImgcustomPosX,
    min: -2000,
    max: 2000,
    onChange: hov_bgImgcustomPosX => setAttributes({
      [`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_bgImgcustomPosY,
    min: -2000,
    max: 2000,
    step: hov_bgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: hov_bgImgcustomPosY => setAttributes({
      [`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), hov_bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_backgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_bgImgCustomSize,
    min: 0,
    max: hov_bgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: hov_bgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: hov_bgImgCustomSize => setAttributes({
      [`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize
    })
  })))), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_TABbgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABbgImgcustomPosX,
    min: 0,
    max: hov_TABbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: hov_TABbgImgcustomPosX => setAttributes({
      [`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABbgImgcustomPosY,
    min: 0,
    max: hov_TABbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: hov_TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: hov_TABbgImgcustomPosY => setAttributes({
      [`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), hov_bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_TABbackgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABbgImgCustomSize,
    min: 0,
    max: hov_TABbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: hov_TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: hov_TABbgImgCustomSize => setAttributes({
      [`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize
    })
  })))), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_MOBbgImgPos === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBbgImgcustomPosX,
    min: 0,
    max: hov_MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100,
    onChange: hov_MOBbgImgcustomPosX => setAttributes({
      [`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBbgImgcustomPosY,
    min: 0,
    max: hov_MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100,
    step: hov_MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1,
    onChange: hov_MOBbgImgcustomPosY => setAttributes({
      [`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  }), hov_bgImgAttachment === 'fixed' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: '-10px',
      paddingBottom: '10px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
  })), hov_MOBbackgroundSize === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBbgImgCustomSize,
    min: 0,
    max: hov_MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100,
    step: hov_MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1,
    onChange: hov_MOBbgImgCustomSize => setAttributes({
      [`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize
    })
  }))))))), hov_backgroundType === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: 'Gradient Color',
    value: hov_gradientColor,
    onChange: newVal => setAttributes({
      [`hov_${controlName}gradientColor`]: newVal
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BGControl);

/***/ }),

/***/ "./src/controls/background-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/background-control/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bg_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bg-control */ "./src/controls/background-control/bg-control.js");
/* harmony import */ var _overlay_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay-control */ "./src/controls/background-control/overlay-control.js");





const BackgroundControl = _ref => {
  let {
    resRequiredProps,
    controlName,
    noOverlay = false,
    noMainBGImg = false,
    noOverlayBGImg = false,
    noTransition = false
  } = _ref;
  const {
    setAttributes,
    attributes
  } = resRequiredProps;
  const {
    [`${controlName}isBgOverlay`]: isBgOverlay
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bg_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    controlName: controlName,
    resRequiredProps: resRequiredProps,
    noMainBGImg: noMainBGImg,
    noTransition: noTransition
  }), noOverlay === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Overlay", "zolo-blocks"),
    checked: isBgOverlay,
    onChange: () => setAttributes({
      [`${controlName}isBgOverlay`]: !isBgOverlay
    })
  }), isBgOverlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_overlay_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    controlName: controlName,
    resRequiredProps: resRequiredProps,
    noOverlayBGImg: noOverlayBGImg,
    noTransition: noTransition
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundControl);

/***/ }),

/***/ "./src/controls/background-control/overlay-control.js":
/*!************************************************************!*\
  !*** ./src/controls/background-control/overlay-control.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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










const OverlayControl = _ref => {
  let {
    controlName,
    resRequiredProps,
    noOverlayBGImg
  } = _ref;
  const {
    setAttributes,
    attributes,
    resMode
  } = resRequiredProps;
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.NORMAL_HOVER.map(_ref2 => {
    let {
      value,
      label
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: ovl_hoverType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`${controlName}ovl_hoverType`]: value
      })
    }, label);
  }))), ovl_hoverType === "normal" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Background Type", "zolo-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(_ref3 => {
    let {
      value,
      label
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: overlayType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`${controlName}overlayType`]: value
      })
    }, label);
  }))), overlayType === 'classic' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay Color", "zolo-blocks"),
    color: overlayColor,
    onChange: overlayColor => setAttributes({
      [`${controlName}overlayColor`]: overlayColor
    })
  }), noOverlayBGImg === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay Image", "zolo-blocks")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: _ref4 => {
      let {
        url,
        id
      } = _ref4;
      return setAttributes({
        [`${controlName}ovl_bgImageURL`]: url,
        [`${controlName}ovl_bgImageID`]: id
      });
    },
    type: "image",
    value: ovl_bgImageID,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return !ovl_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "zb-bg-control-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upload Image", "zolo-blocks"),
        icon: "format-image",
        onClick: open
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), ovl_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageUrl: ovl_bgImageURL,
    onDeleteImage: () => setAttributes({
      [`${controlName}ovl_bgImageURL`]: null
    })
  }), resMode === "Desktop" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: ovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: ovl_bgImgPos => setAttributes({
      [`${controlName}ovl_bgImgPos`]: ovl_bgImgPos
    })
  })), ovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: ovl_bgImgcustomPosXUnit => setAttributes({
      [`${controlName}ovl_bgImgcustomPosXUnit`]: ovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: ovl_bgImgcustomPosX,
    min: 0,
    max: ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: ovl_bgImgcustomPosX => setAttributes({
      [`${controlName}ovl_bgImgcustomPosX`]: ovl_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: ovl_bgImgcustomPosYUnit => setAttributes({
      [`${controlName}ovl_bgImgcustomPosYUnit`]: ovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: ovl_bgImgcustomPosY,
    min: 0,
    max: ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: ovl_bgImgcustomPosY => setAttributes({
      [`${controlName}ovl_bgImgcustomPosY`]: ovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: ovl_bgImgAttachment => setAttributes({
      [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
    })
  }), ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: ovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: ovl_bgImgRepeat => setAttributes({
      [`${controlName}ovl_bgImgRepeat`]: ovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: ovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: ovl_backgroundSize => setAttributes({
      [`${controlName}ovl_backgroundSize`]: ovl_backgroundSize
    })
  })), ovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: ovl_bgImgCustomSizeUnit => setAttributes({
      [`${controlName}ovl_bgImgCustomSizeUnit`]: ovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: ovl_bgImgCustomSize,
    min: 0,
    max: ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: ovl_bgImgCustomSize => setAttributes({
      [`${controlName}ovl_bgImgCustomSize`]: ovl_bgImgCustomSize
    })
  })))), resMode === "Tablet" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: TABovl_bgImgPos => setAttributes({
      [`TAB${controlName}ovl_bgImgPos`]: TABovl_bgImgPos
    })
  })), TABovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: TABovl_bgImgcustomPosXUnit => setAttributes({
      [`TAB${controlName}ovl_bgImgcustomPosXUnit`]: TABovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: TABovl_bgImgcustomPosYUnit => setAttributes({
      [`TAB${controlName}ovl_bgImgcustomPosYUnit`]: TABovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABovl_bgImgcustomPosY,
    min: -2000,
    max:
    // TABovl_bgImgcustomPosYUnit === "px"
    //   ?
    2000
    // : 100
    ,

    step: TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: TABovl_bgImgcustomPosY => setAttributes({
      [`TAB${controlName}ovl_bgImgcustomPosY`]: TABovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: ovl_bgImgAttachment => setAttributes({
      [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
    })
  }), ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: TABovl_bgImgRepeat => setAttributes({
      [`TAB${controlName}ovl_bgImgRepeat`]: TABovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: TABovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: TABovl_backgroundSize => setAttributes({
      [`TAB${controlName}ovl_backgroundSize`]: TABovl_backgroundSize
    })
  })), TABovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: TABovl_bgImgCustomSizeUnit => setAttributes({
      [`TAB${controlName}ovl_bgImgCustomSizeUnit`]: TABovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: TABovl_bgImgCustomSize,
    min: 0,
    max: TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: TABovl_bgImgCustomSize => setAttributes({
      [`TAB${controlName}ovl_bgImgCustomSize`]: TABovl_bgImgCustomSize
    })
  })))), resMode === "Mobile" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: MOBovl_bgImgPos => setAttributes({
      [`MOB${controlName}ovl_bgImgPos`]: MOBovl_bgImgPos
    })
  })), MOBovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: MOBovl_bgImgcustomPosXUnit => setAttributes({
      [`MOB${controlName}ovl_bgImgcustomPosXUnit`]: MOBovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBovl_bgImgcustomPosX,
    min: 0,
    max: MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: MOBovl_bgImgcustomPosX => setAttributes({
      [`MOB${controlName}ovl_bgImgcustomPosX`]: MOBovl_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: MOBovl_bgImgcustomPosYUnit => setAttributes({
      [`MOB${controlName}ovl_bgImgcustomPosYUnit`]: MOBovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBovl_bgImgcustomPosY,
    min: 0,
    max: MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: MOBovl_bgImgcustomPosY => setAttributes({
      [`MOB${controlName}ovl_bgImgcustomPosY`]: MOBovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: ovl_bgImgAttachment => setAttributes({
      [`${controlName}ovl_bgImgAttachment`]: ovl_bgImgAttachment
    })
  }), ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: MOBovl_bgImgRepeat => setAttributes({
      [`MOB${controlName}ovl_bgImgRepeat`]: MOBovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: MOBovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: MOBovl_backgroundSize => setAttributes({
      [`MOB${controlName}ovl_backgroundSize`]: MOBovl_backgroundSize
    })
  })), MOBovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: MOBovl_bgImgCustomSizeUnit => setAttributes({
      [`MOB${controlName}ovl_bgImgCustomSizeUnit`]: MOBovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: MOBovl_bgImgCustomSize,
    min: 0,
    max: MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: MOBovl_bgImgCustomSize => setAttributes({
      [`MOB${controlName}ovl_bgImgCustomSize`]: MOBovl_bgImgCustomSize
    })
  }))))))), overlayType === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Gradient Color",
    value: overlayGradient,
    onChange: newVal => setAttributes({
      [`${controlName}overlayGradient`]: newVal
    })
  })), ovl_hoverType === "hover" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Background Type", "zolo-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _global_constants__WEBPACK_IMPORTED_MODULE_4__.BACKGROUND_TYPES.map(_ref6 => {
    let {
      value,
      label
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: hov_overlayType === value ? 'primary' : 'secondary',
      onClick: () => setAttributes({
        [`hov_${controlName}overlayType`]: value
      })
    }, label);
  }))), hov_overlayType === 'classic' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay Color", "zolo-blocks"),
    color: hov_overlayColor,
    onChange: hov_overlayColor => setAttributes({
      [`hov_${controlName}overlayColor`]: hov_overlayColor
    })
  }), noOverlayBGImg === false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay Image", "zolo-blocks")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: _ref7 => {
      let {
        url,
        id
      } = _ref7;
      return setAttributes({
        [`hov_${controlName}ovl_bgImageURL`]: url,
        [`hov_${controlName}ovl_bgImageID`]: id
      });
    },
    type: "image",
    value: hov_ovl_bgImageID,
    render: _ref8 => {
      let {
        open
      } = _ref8;
      return !hov_ovl_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "zb-bg-control-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upload Image", "zolo-blocks"),
        icon: "format-image",
        onClick: open
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_ovl_bgImageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageUrl: hov_ovl_bgImageURL,
    onDeleteImage: () => setAttributes({
      [`hov_${controlName}ovl_bgImageURL`]: null
    })
  }), resMode === "Desktop" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_ovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_ovl_bgImgPos => setAttributes({
      [`hov_${controlName}ovl_bgImgPos`]: hov_ovl_bgImgPos
    })
  })), hov_ovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_ovl_bgImgcustomPosXUnit => setAttributes({
      [`hov_${controlName}ovl_bgImgcustomPosXUnit`]: hov_ovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_ovl_bgImgcustomPosX,
    min: 0,
    max: hov_ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: hov_ovl_bgImgcustomPosX => setAttributes({
      [`hov_${controlName}ovl_bgImgcustomPosX`]: hov_ovl_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_ovl_bgImgcustomPosYUnit => setAttributes({
      [`hov_${controlName}ovl_bgImgcustomPosYUnit`]: hov_ovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_ovl_bgImgcustomPosY,
    min: 0,
    max: hov_ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: hov_ovl_bgImgcustomPosY => setAttributes({
      [`hov_${controlName}ovl_bgImgcustomPosY`]: hov_ovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: hov_ovl_bgImgAttachment => setAttributes({
      [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
    })
  }), hov_ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_ovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: hov_ovl_bgImgRepeat => setAttributes({
      [`hov_${controlName}ovl_bgImgRepeat`]: hov_ovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_ovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_ovl_backgroundSize => setAttributes({
      [`hov_${controlName}ovl_backgroundSize`]: hov_ovl_backgroundSize
    })
  })), hov_ovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_ovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_ovl_bgImgCustomSizeUnit => setAttributes({
      [`hov_${controlName}ovl_bgImgCustomSizeUnit`]: hov_ovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_ovl_bgImgCustomSize,
    min: 0,
    max: hov_ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: hov_ovl_bgImgCustomSize => setAttributes({
      [`hov_${controlName}ovl_bgImgCustomSize`]: hov_ovl_bgImgCustomSize
    })
  })))), resMode === "Tablet" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_TABovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_TABovl_bgImgPos => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgPos`]: hov_TABovl_bgImgPos
    })
  })), hov_TABovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_TABovl_bgImgcustomPosXUnit => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgcustomPosXUnit`]: hov_TABovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABovl_bgImgcustomPosX,
    min: 0,
    max: hov_TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: hov_TABovl_bgImgcustomPosX => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgcustomPosX`]: hov_TABovl_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_TABovl_bgImgcustomPosYUnit => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgcustomPosYUnit`]: hov_TABovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABovl_bgImgcustomPosY,
    min: 0,
    max: hov_TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: hov_TABovl_bgImgcustomPosY => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgcustomPosY`]: hov_TABovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: hov_ovl_bgImgAttachment => setAttributes({
      [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
    })
  }), hov_ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_TABovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: hov_TABovl_bgImgRepeat => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgRepeat`]: hov_TABovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_TABovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_TABovl_backgroundSize => setAttributes({
      [`hov_TAB${controlName}ovl_backgroundSize`]: hov_TABovl_backgroundSize
    })
  })), hov_TABovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_TABovl_bgImgCustomSizeUnit => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgCustomSizeUnit`]: hov_TABovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_TABovl_bgImgCustomSize,
    min: 0,
    max: hov_TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: hov_TABovl_bgImgCustomSize => setAttributes({
      [`hov_TAB${controlName}ovl_bgImgCustomSize`]: hov_TABovl_bgImgCustomSize
    })
  })))), resMode === "Mobile" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_MOBovl_bgImgPos,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Center", "zolo-blocks"),
      value: "center center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Left", "zolo-blocks"),
      value: "center left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Center Right", "zolo-blocks"),
      value: "center right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Center", "zolo-blocks"),
      value: "top center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Left", "zolo-blocks"),
      value: "top left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Top Right", "zolo-blocks"),
      value: "top right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Center", "zolo-blocks"),
      value: "bottom center"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Left", "zolo-blocks"),
      value: "bottom left"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Bottom Right", "zolo-blocks"),
      value: "bottom right"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_MOBovl_bgImgPos => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgPos`]: hov_MOBovl_bgImgPos
    })
  })), hov_MOBovl_bgImgPos === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_MOBovl_bgImgcustomPosXUnit => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgcustomPosXUnit`]: hov_MOBovl_bgImgcustomPosXUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBovl_bgImgcustomPosX,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: hov_MOBovl_bgImgcustomPosX => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgcustomPosX`]: hov_MOBovl_bgImgcustomPosX
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_MOBovl_bgImgcustomPosYUnit => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgcustomPosYUnit`]: hov_MOBovl_bgImgcustomPosYUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBovl_bgImgcustomPosY,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: hov_MOBovl_bgImgcustomPosY => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgcustomPosY`]: hov_MOBovl_bgImgcustomPosY
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Scroll", "zolo-blocks"),
      value: "scroll"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fixed", "zolo-blocks"),
      value: "fixed"
    }],
    onChange: hov_ovl_bgImgAttachment => setAttributes({
      [`hov_${controlName}ovl_bgImgAttachment`]: hov_ovl_bgImgAttachment
    })
  }), hov_ovl_bgImgAttachment === "fixed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, "Note: Attachment Fixed works only on desktop.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_MOBovl_bgImgRepeat,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No-repeat", "zolo-blocks"),
      value: "no-repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat", "zolo-blocks"),
      value: "repeat"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-x", "zolo-blocks"),
      value: "repeat-x"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Repeat-y", "zolo-blocks"),
      value: "repeat-y"
    }],
    onChange: hov_MOBovl_bgImgRepeat => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgRepeat`]: hov_MOBovl_bgImgRepeat
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: hov_MOBovl_backgroundSize,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks"),
      value: ""
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto", "zolo-blocks"),
      value: "auto"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Cover", "zolo-blocks"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Contain", "zolo-blocks"),
      value: "contain"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom", "zolo-blocks"),
      value: "custom"
    }],
    onChange: hov_MOBovl_backgroundSize => setAttributes({
      [`hov_MOB${controlName}ovl_backgroundSize`]: hov_MOBovl_backgroundSize
    })
  })), hov_MOBovl_backgroundSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: hov_MOBovl_bgImgCustomSizeUnit => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgCustomSizeUnit`]: hov_MOBovl_bgImgCustomSizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: hov_MOBovl_bgImgCustomSize,
    min: 0,
    max: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: hov_MOBovl_bgImgCustomSize => setAttributes({
      [`hov_MOB${controlName}ovl_bgImgCustomSize`]: hov_MOBovl_bgImgCustomSize
    })
  }))))))), hov_overlayType === 'gradient' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Gradient Color",
    value: hov_overlayGradient,
    onChange: newVal => setAttributes({
      [`hov_${controlName}overlayGradient`]: newVal
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverlayControl);

/***/ }),

/***/ "./src/controls/border-control/index.js":
/*!**********************************************!*\
  !*** ./src/controls/border-control/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");



const BorderControl = _ref => {
  let {
    label,
    controlName,
    resRequiredProps
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode
  } = resRequiredProps;
  const borderAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}Border`;
  const borderVal = attributes[borderAttr];
  const setSettings = val => {
    setAttributes({
      [borderAttr]: val
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "border-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    value: borderVal,
    onChange: newBorder => {
      setSettings(newBorder);
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ }),

/***/ "./src/controls/boxshadow-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/boxshadow-control/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-control */ "./src/controls/reset-control/index.js");





function BoxShadowControl(_ref) {
  let {
    controlName,
    resRequiredProps,
    enableTransition
  } = _ref;
  const {
    setAttributes,
    attributes,
    objAttributes
  } = resRequiredProps;
  const {
    [`${controlName}inset`]: inset,
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hOffset`]: hOffset,
    [`${controlName}vOffset`]: vOffset,
    [`${controlName}blur`]: blur,
    [`${controlName}spread`]: spread,
    [`${controlName}shadowTransition`]: shadowTransition
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Box Shadow', 'radius-blocks'),
    className: "zb-boxshadow-control-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "zb-boxshadow-control-dropdown",
    contentClassName: "zb-popover-content-area",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-boxshadow-content-wrap",
      style: {
        minWidth: '230px',
        padding: '10px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inset', 'radius-blocks'),
      checked: inset,
      onChange: () => setAttributes({
        [`${controlName}inset`]: !inset
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultColor: (objAttributes[`${controlName}shadowColor`] || {}).default,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Color', 'radius-blocks'),
      color: shadowColor,
      onChange: shadowColor => setAttributes({
        [`${controlName}shadowColor`]: shadowColor
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}hOffset`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal Offset', 'radius-blocks'),
      value: hOffset,
      onChange: hOffset => setAttributes({
        [`${controlName}hOffset`]: hOffset
      }),
      min: 0,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}vOffset`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical Offset', 'radius-blocks'),
      value: vOffset,
      onChange: vOffset => setAttributes({
        [`${controlName}vOffset`]: vOffset
      }),
      min: 0,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}blur`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Blur', 'radius-blocks'),
      value: blur,
      onChange: blur => setAttributes({
        [`${controlName}blur`]: blur
      }),
      min: 0,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}spread`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Spread', 'radius-blocks'),
      value: spread,
      onChange: spread => setAttributes({
        [`${controlName}spread`]: spread
      }),
      min: 0,
      max: 200
    })), enableTransition && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Transition', 'radius-blocks'),
      value: shadowTransition,
      onChange: shadowTransition => setAttributes({
        [`${controlName}shadowTransition`]: shadowTransition
      }),
      step: 0.01,
      min: 0,
      max: 5
    })))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxShadowControl);

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



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
const ColorControl = _ref => {
  let {
    label,
    defaultColor,
    color,
    onChange
  } = _ref;
  const [bgColor, setBgColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange(bgColor);
  }, [bgColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setBgColor(color || defaultColor);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-color-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label || '',
    className: "color-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        text: bgColor || 'default'
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "color-ball",
        style: bgColor && colorBallStyles
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          ...colorStyles,
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || 'default'
      })));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      color: bgColor,
      onChangeComplete: _ref3 => {
        let {
          rgb
        } = _ref3;
        setBgColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSmall: true,
    className: "zb-reset-button",
    icon: "image-rotate",
    style: {
      transform: 'scaleX(-1) rotate(90deg)'
    },
    onClick: () => {
      setBgColor(defaultColor);
    },
    disabled: !bgColor
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorControl);

/***/ }),

/***/ "./src/controls/dimensions-control/dimension.js":
/*!******************************************************!*\
  !*** ./src/controls/dimensions-control/dimension.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");



const DimensionControl = _ref => {
  let {
    top,
    right,
    bottom,
    left,
    onChange,
    neededProps
  } = _ref;
  const {
    label,
    resMode,
    setAttributes,
    dimensionIsLinked,
    forBorderRadius,
    controlName
  } = neededProps;
  const [dimensions, setDimensions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    top,
    right,
    bottom,
    left
  });
  const [isLinked, setIsLinked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(dimensionIsLinked);
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    if (isLinked) {
      setDimensions({
        top: value,
        bottom: value,
        left: value,
        right: value
      });
    } else {
      setDimensions({
        [name]: value
      });
    }
  };
  const onButtonClick = () => {
    setIsLinked(!isLinked);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange(dimensions);
  }, [dimensions]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      [`${controlName}ZRPIsLinked`]: isLinked
    });
  }, [isLinked]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-dimension-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onDesktopBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onTabletBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onMobileBtnClick)({
      setAttributes
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? ' ' : 'Top')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? ' ' : 'Right')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? ' ' : 'Bottom')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "input-label"
  }, forBorderRadius ? ' ' : 'Left')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `zb-linked-btn components-button is-button dashicons dashicons-${isLinked ? 'admin-links is-primary' : 'editor-unlink is-default'}`,
    onClick: onButtonClick
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControl);

/***/ }),

/***/ "./src/controls/dimensions-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/dimensions-control/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimension */ "./src/controls/dimensions-control/dimension.js");



const ResDimensionsControl = _ref => {
  let {
    label,
    controlName,
    resRequiredProps,
    forBorderRadius,
    units
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode
  } = resRequiredProps;
  const {
    [`${controlName}ZRPUnit`]: dimensionUnit,
    [`${controlName}ZRPTop`]: dimensionTop,
    [`${controlName}ZRPRight`]: dimensionRight,
    [`${controlName}ZRPBottom`]: dimensionBottom,
    [`${controlName}ZRPLeft`]: dimensionLeft,
    [`TAB${controlName}ZRPUnit`]: TABdimensionUnit,
    [`TAB${controlName}ZRPTop`]: TABdimensionTop,
    [`TAB${controlName}ZRPRight`]: TABdimensionRight,
    [`TAB${controlName}ZRPBottom`]: TABdimensionBottom,
    [`TAB${controlName}ZRPLeft`]: TABdimensionLeft,
    [`MOB${controlName}ZRPUnit`]: MOBdimensionUnit,
    [`MOB${controlName}ZRPTop`]: MOBdimensionTop,
    [`MOB${controlName}ZRPRight`]: MOBdimensionRight,
    [`MOB${controlName}ZRPBottom`]: MOBdimensionBottom,
    [`MOB${controlName}ZRPLeft`]: MOBdimensionLeft,
    [`${controlName}ZRPIsLinked`]: dimensionIsLinked
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
  const neededProps = {
    label,
    controlName,
    setAttributes,
    resMode,
    dimensionIsLinked,
    forBorderRadius,
    controlName
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dimensions-control-wraper"
  }, resMode == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: dimensionUnit => setAttributes({
      [`${controlName}ZRPUnit`]: dimensionUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: _ref2 => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref2;
      setAttributes({
        [`${controlName}ZRPTop`]: top,
        [`${controlName}ZRPRight`]: right,
        [`${controlName}ZRPBottom`]: bottom,
        [`${controlName}ZRPLeft`]: left
      });
    }
  })), resMode == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: TABdimensionUnit => setAttributes({
      [`TAB${controlName}ZRPUnit`]: TABdimensionUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: _ref3 => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref3;
      return setAttributes({
        [`TAB${controlName}ZRPTop`]: top,
        [`TAB${controlName}ZRPRight`]: right,
        [`TAB${controlName}ZRPBottom`]: bottom,
        [`TAB${controlName}ZRPLeft`]: left
      });
    }
  })), resMode == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: units || defaultUnits,
    onClick: MOBdimensionUnit => setAttributes({
      [`MOB${controlName}ZRPUnit`]: MOBdimensionUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dimension__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: _ref4 => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref4;
      return setAttributes({
        [`MOB${controlName}ZRPTop`]: top,
        [`MOB${controlName}ZRPRight`]: right,
        [`MOB${controlName}ZRPBottom`]: bottom,
        [`MOB${controlName}ZRPLeft`]: left
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResDimensionsControl);

/***/ }),

/***/ "./src/controls/gradient-control/index.js":
/*!************************************************!*\
  !*** ./src/controls/gradient-control/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function GradientControl(_ref) {
  let {
    label,
    value,
    onChange
  } = _ref;
  const setSettings = val => {
    onChange(val);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-control-wrap"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-head"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "zb-label"
  }, label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-gradient-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientControl);

/***/ }),

/***/ "./src/controls/icon-picker/DisplayIcon.js":
/*!*************************************************!*\
  !*** ./src/controls/icon-picker/DisplayIcon.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const DisplayIcon = _ref => {
  let {
    icon
  } = _ref;
  if (typeof icon != 'object') {
    return;
  }
  const iconName = Object.keys(icon)[0];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, icon[iconName].source && icon[iconName].source === 'dashicon' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: iconName
  }), icon[iconName].source && icon[iconName].source === 'fontawesome' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: `${icon[iconName].type} ${iconName}`
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayIcon);

/***/ }),

/***/ "./src/controls/icon-picker/icons/dashicon.js":
/*!****************************************************!*\
  !*** ./src/controls/icon-picker/icons/dashicon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashIcon": () => (/* binding */ dashIcon)
/* harmony export */ });
const dashIcon = {
  "menu": {
    "name": "menu",
    "source": "dashicon",
    "type": ""
  },
  "admin-site": {
    "name": "admin site",
    "source": "dashicon",
    "type": ""
  },
  "dashboard": {
    "name": "dashboard",
    "source": "dashicon",
    "type": ""
  },
  "admin-media": {
    "name": "admin media",
    "source": "dashicon",
    "type": ""
  },
  "admin-page": {
    "name": "admin page",
    "source": "dashicon",
    "type": ""
  },
  "admin-comments": {
    "name": "admin comments",
    "source": "dashicon",
    "type": ""
  },
  "admin-appearance": {
    "name": "admin appearance",
    "source": "dashicon",
    "type": ""
  },
  "admin-plugins": {
    "name": "admin plugins",
    "source": "dashicon",
    "type": ""
  },
  "admin-users": {
    "name": "admin users",
    "source": "dashicon",
    "type": ""
  },
  "admin-tools": {
    "name": "admin tools",
    "source": "dashicon",
    "type": ""
  },
  "admin-settings": {
    "name": "admin settings",
    "source": "dashicon",
    "type": ""
  },
  "admin-network": {
    "name": "admin network",
    "source": "dashicon",
    "type": ""
  },
  "admin-generic": {
    "name": "admin generic",
    "source": "dashicon",
    "type": ""
  },
  "admin-home": {
    "name": "admin home",
    "source": "dashicon",
    "type": ""
  },
  "admin-collapse": {
    "name": "admin collapse",
    "source": "dashicon",
    "type": ""
  },
  "filter": {
    "name": "filter",
    "source": "dashicon",
    "type": ""
  },
  "admin-customizer": {
    "name": "admin customizer",
    "source": "dashicon",
    "type": ""
  },
  "admin-multisite": {
    "name": "admin multisite",
    "source": "dashicon",
    "type": ""
  },
  "admin-links": {
    "name": "admin links",
    "source": "dashicon",
    "type": ""
  },
  "admin-post": {
    "name": "admin post",
    "source": "dashicon",
    "type": ""
  },
  "format-image": {
    "name": "format image",
    "source": "dashicon",
    "type": ""
  },
  "format-gallery": {
    "name": "format gallery",
    "source": "dashicon",
    "type": ""
  },
  "format-audio": {
    "name": "format audio",
    "source": "dashicon",
    "type": ""
  },
  "format-video": {
    "name": "format video",
    "source": "dashicon",
    "type": ""
  },
  "format-chat": {
    "name": "format chat",
    "source": "dashicon",
    "type": ""
  },
  "format-status": {
    "name": "format status",
    "source": "dashicon",
    "type": ""
  },
  "format-aside": {
    "name": "format aside",
    "source": "dashicon",
    "type": ""
  },
  "format-quote": {
    "name": "format quote",
    "source": "dashicon",
    "type": ""
  },
  "welcome-write-blog": {
    "name": "welcome write blog",
    "source": "dashicon",
    "type": ""
  },
  "welcome-add-page": {
    "name": "welcome add page",
    "source": "dashicon",
    "type": ""
  },
  "welcome-view-site": {
    "name": "welcome view site",
    "source": "dashicon",
    "type": ""
  },
  "welcome-widgets-menus": {
    "name": "welcome widgets menus",
    "source": "dashicon",
    "type": ""
  },
  "welcome-comments": {
    "name": "welcome comments",
    "source": "dashicon",
    "type": ""
  },
  "welcome-learn-more": {
    "name": "welcome learn more",
    "source": "dashicon",
    "type": ""
  },
  "image-crop": {
    "name": "image crop",
    "source": "dashicon",
    "type": ""
  },
  "image-rotate": {
    "name": "image rotate",
    "source": "dashicon",
    "type": ""
  },
  "image-rotate-left": {
    "name": "image rotate left",
    "source": "dashicon",
    "type": ""
  },
  "image-rotate-right": {
    "name": "image rotate right",
    "source": "dashicon",
    "type": ""
  },
  "image-flip-vertical": {
    "name": "image flip vertical",
    "source": "dashicon",
    "type": ""
  },
  "image-flip-horizontal": {
    "name": "image flip horizontal",
    "source": "dashicon",
    "type": ""
  },
  "image-filter": {
    "name": "image filter",
    "source": "dashicon",
    "type": ""
  },
  "undo": {
    "name": "undo",
    "source": "dashicon",
    "type": ""
  },
  "redo": {
    "name": "redo",
    "source": "dashicon",
    "type": ""
  },
  "editor-bold": {
    "name": "editor bold",
    "source": "dashicon",
    "type": ""
  },
  "editor-italic": {
    "name": "editor italic",
    "source": "dashicon",
    "type": ""
  },
  "editor-ul": {
    "name": "editor ul",
    "source": "dashicon",
    "type": ""
  },
  "editor-ol": {
    "name": "editor ol",
    "source": "dashicon",
    "type": ""
  },
  "editor-quote": {
    "name": "editor quote",
    "source": "dashicon",
    "type": ""
  },
  "editor-alignleft": {
    "name": "editor alignleft",
    "source": "dashicon",
    "type": ""
  },
  "editor-aligncenter": {
    "name": "editor aligncenter",
    "source": "dashicon",
    "type": ""
  },
  "editor-alignright": {
    "name": "editor alignright",
    "source": "dashicon",
    "type": ""
  },
  "editor-insertmore": {
    "name": "editor insertmore",
    "source": "dashicon",
    "type": ""
  },
  "editor-spellcheck": {
    "name": "editor spellcheck",
    "source": "dashicon",
    "type": ""
  },
  "editor-expand": {
    "name": "editor expand",
    "source": "dashicon",
    "type": ""
  },
  "editor-contract": {
    "name": "editor contract",
    "source": "dashicon",
    "type": ""
  },
  "editor-kitchensink": {
    "name": "editor kitchensink",
    "source": "dashicon",
    "type": ""
  },
  "editor-underline": {
    "name": "editor underline",
    "source": "dashicon",
    "type": ""
  },
  "editor-justify": {
    "name": "editor justify",
    "source": "dashicon",
    "type": ""
  },
  "editor-textcolor": {
    "name": "editor textcolor",
    "source": "dashicon",
    "type": ""
  },
  "editor-paste-word": {
    "name": "editor paste word",
    "source": "dashicon",
    "type": ""
  },
  "editor-paste-text": {
    "name": "editor paste text",
    "source": "dashicon",
    "type": ""
  },
  "editor-removeformatting": {
    "name": "editor removeformatting",
    "source": "dashicon",
    "type": ""
  },
  "editor-video": {
    "name": "editor video",
    "source": "dashicon",
    "type": ""
  },
  "editor-customchar": {
    "name": "editor customchar",
    "source": "dashicon",
    "type": ""
  },
  "editor-outdent": {
    "name": "editor outdent",
    "source": "dashicon",
    "type": ""
  },
  "editor-indent": {
    "name": "editor indent",
    "source": "dashicon",
    "type": ""
  },
  "editor-help": {
    "name": "editor help",
    "source": "dashicon",
    "type": ""
  },
  "editor-strikethrough": {
    "name": "editor strikethrough",
    "source": "dashicon",
    "type": ""
  },
  "editor-unlink": {
    "name": "editor unlink",
    "source": "dashicon",
    "type": ""
  },
  "editor-rtl": {
    "name": "editor rtl",
    "source": "dashicon",
    "type": ""
  },
  "editor-break": {
    "name": "editor break",
    "source": "dashicon",
    "type": ""
  },
  "editor-code": {
    "name": "editor code",
    "source": "dashicon",
    "type": ""
  },
  "editor-code-duplicate": {
    "name": "editor code duplicate",
    "source": "dashicon",
    "type": ""
  },
  "editor-paragraph": {
    "name": "editor paragraph",
    "source": "dashicon",
    "type": ""
  },
  "editor-table": {
    "name": "editor table",
    "source": "dashicon",
    "type": ""
  },
  "align-left": {
    "name": "align left",
    "source": "dashicon",
    "type": ""
  },
  "align-right": {
    "name": "align right",
    "source": "dashicon",
    "type": ""
  },
  "align-center": {
    "name": "align center",
    "source": "dashicon",
    "type": ""
  },
  "align-none": {
    "name": "align none",
    "source": "dashicon",
    "type": ""
  },
  "lock": {
    "name": "lock",
    "source": "dashicon",
    "type": ""
  },
  "lock-duplicate": {
    "name": "lock duplicate",
    "source": "dashicon",
    "type": ""
  },
  "unlock": {
    "name": "unlock",
    "source": "dashicon",
    "type": ""
  },
  "calendar": {
    "name": "calendar",
    "source": "dashicon",
    "type": ""
  },
  "calendar-alt": {
    "name": "calendar alt",
    "source": "dashicon",
    "type": ""
  },
  "visibility": {
    "name": "visibility",
    "source": "dashicon",
    "type": ""
  },
  "hidden": {
    "name": "hidden",
    "source": "dashicon",
    "type": ""
  },
  "post-status": {
    "name": "post status",
    "source": "dashicon",
    "type": ""
  },
  "edit": {
    "name": "edit",
    "source": "dashicon",
    "type": ""
  },
  "edit-large": {
    "name": "edit large",
    "source": "dashicon",
    "type": ""
  },
  "sticky": {
    "name": "sticky",
    "source": "dashicon",
    "type": ""
  },
  "external": {
    "name": "external",
    "source": "dashicon",
    "type": ""
  },
  "arrow-up": {
    "name": "arrow up",
    "source": "dashicon",
    "type": ""
  },
  "arrow-up-duplicate": {
    "name": "arrow up duplicate",
    "source": "dashicon",
    "type": ""
  },
  "arrow-down": {
    "name": "arrow down",
    "source": "dashicon",
    "type": ""
  },
  "arrow-left": {
    "name": "arrow left",
    "source": "dashicon",
    "type": ""
  },
  "arrow-right": {
    "name": "arrow right",
    "source": "dashicon",
    "type": ""
  },
  "arrow-up-alt": {
    "name": "arrow up alt",
    "source": "dashicon",
    "type": ""
  },
  "arrow-down-alt": {
    "name": "arrow down alt",
    "source": "dashicon",
    "type": ""
  },
  "arrow-left-alt": {
    "name": "arrow left alt",
    "source": "dashicon",
    "type": ""
  },
  "arrow-right-alt": {
    "name": "arrow right alt",
    "source": "dashicon",
    "type": ""
  },
  "arrow-up-alt2": {
    "name": "arrow up alt2",
    "source": "dashicon",
    "type": ""
  },
  "arrow-down-alt2": {
    "name": "arrow down alt2",
    "source": "dashicon",
    "type": ""
  },
  "arrow-left-alt2": {
    "name": "arrow left alt2",
    "source": "dashicon",
    "type": ""
  },
  "arrow-right-alt2": {
    "name": "arrow right alt2",
    "source": "dashicon",
    "type": ""
  },
  "leftright": {
    "name": "leftright",
    "source": "dashicon",
    "type": ""
  },
  "sort": {
    "name": "sort",
    "source": "dashicon",
    "type": ""
  },
  "randomize": {
    "name": "randomize",
    "source": "dashicon",
    "type": ""
  },
  "list-view": {
    "name": "list view",
    "source": "dashicon",
    "type": ""
  },
  "excerpt-view": {
    "name": "excerpt view",
    "source": "dashicon",
    "type": ""
  },
  "grid-view": {
    "name": "grid view",
    "source": "dashicon",
    "type": ""
  },
  "move": {
    "name": "move",
    "source": "dashicon",
    "type": ""
  },
  "hammer": {
    "name": "hammer",
    "source": "dashicon",
    "type": ""
  },
  "art": {
    "name": "art",
    "source": "dashicon",
    "type": ""
  },
  "migrate": {
    "name": "migrate",
    "source": "dashicon",
    "type": ""
  },
  "performance": {
    "name": "performance",
    "source": "dashicon",
    "type": ""
  },
  "universal-access": {
    "name": "universal access",
    "source": "dashicon",
    "type": ""
  },
  "universal-access-alt": {
    "name": "universal access alt",
    "source": "dashicon",
    "type": ""
  },
  "tickets": {
    "name": "tickets",
    "source": "dashicon",
    "type": ""
  },
  "nametag": {
    "name": "nametag",
    "source": "dashicon",
    "type": ""
  },
  "clipboard": {
    "name": "clipboard",
    "source": "dashicon",
    "type": ""
  },
  "heart": {
    "name": "heart",
    "source": "dashicon",
    "type": ""
  },
  "megaphone": {
    "name": "megaphone",
    "source": "dashicon",
    "type": ""
  },
  "schedule": {
    "name": "schedule",
    "source": "dashicon",
    "type": ""
  },
  "wordpress": {
    "name": "wordpress",
    "source": "dashicon",
    "type": ""
  },
  "wordpress-alt": {
    "name": "wordpress alt",
    "source": "dashicon",
    "type": ""
  },
  "pressthis": {
    "name": "pressthis",
    "source": "dashicon",
    "type": ""
  },
  "update": {
    "name": "update",
    "source": "dashicon",
    "type": ""
  },
  "screenoptions": {
    "name": "screenoptions",
    "source": "dashicon",
    "type": ""
  },
  "cart": {
    "name": "cart",
    "source": "dashicon",
    "type": ""
  },
  "feedback": {
    "name": "feedback",
    "source": "dashicon",
    "type": ""
  },
  "translation": {
    "name": "translation",
    "source": "dashicon",
    "type": ""
  },
  "tag": {
    "name": "tag",
    "source": "dashicon",
    "type": ""
  },
  "category": {
    "name": "category",
    "source": "dashicon",
    "type": ""
  },
  "archive": {
    "name": "archive",
    "source": "dashicon",
    "type": ""
  },
  "tagcloud": {
    "name": "tagcloud",
    "source": "dashicon",
    "type": ""
  },
  "text": {
    "name": "text",
    "source": "dashicon",
    "type": ""
  },
  "media-archive": {
    "name": "media archive",
    "source": "dashicon",
    "type": ""
  },
  "media-audio": {
    "name": "media audio",
    "source": "dashicon",
    "type": ""
  },
  "media-code": {
    "name": "media code",
    "source": "dashicon",
    "type": ""
  },
  "media-default": {
    "name": "media default",
    "source": "dashicon",
    "type": ""
  },
  "media-document": {
    "name": "media document",
    "source": "dashicon",
    "type": ""
  },
  "media-interactive": {
    "name": "media interactive",
    "source": "dashicon",
    "type": ""
  },
  "media-spreadsheet": {
    "name": "media spreadsheet",
    "source": "dashicon",
    "type": ""
  },
  "media-text": {
    "name": "media text",
    "source": "dashicon",
    "type": ""
  },
  "media-video": {
    "name": "media video",
    "source": "dashicon",
    "type": ""
  },
  "playlist-audio": {
    "name": "playlist audio",
    "source": "dashicon",
    "type": ""
  },
  "playlist-video": {
    "name": "playlist video",
    "source": "dashicon",
    "type": ""
  },
  "controls-play": {
    "name": "controls play",
    "source": "dashicon",
    "type": ""
  },
  "controls-pause": {
    "name": "controls pause",
    "source": "dashicon",
    "type": ""
  },
  "controls-forward": {
    "name": "controls forward",
    "source": "dashicon",
    "type": ""
  },
  "controls-skipforward": {
    "name": "controls skipforward",
    "source": "dashicon",
    "type": ""
  },
  "controls-back": {
    "name": "controls back",
    "source": "dashicon",
    "type": ""
  },
  "controls-skipback": {
    "name": "controls skipback",
    "source": "dashicon",
    "type": ""
  },
  "controls-repeat": {
    "name": "controls repeat",
    "source": "dashicon",
    "type": ""
  },
  "controls-volumeon": {
    "name": "controls volumeon",
    "source": "dashicon",
    "type": ""
  },
  "controls-volumeoff": {
    "name": "controls volumeoff",
    "source": "dashicon",
    "type": ""
  },
  "yes": {
    "name": "yes",
    "source": "dashicon",
    "type": ""
  },
  "no": {
    "name": "no",
    "source": "dashicon",
    "type": ""
  },
  "no-alt": {
    "name": "no alt",
    "source": "dashicon",
    "type": ""
  },
  "plus": {
    "name": "plus",
    "source": "dashicon",
    "type": ""
  },
  "plus-alt": {
    "name": "plus alt",
    "source": "dashicon",
    "type": ""
  },
  "plus-alt2": {
    "name": "plus alt2",
    "source": "dashicon",
    "type": ""
  },
  "minus": {
    "name": "minus",
    "source": "dashicon",
    "type": ""
  },
  "dismiss": {
    "name": "dismiss",
    "source": "dashicon",
    "type": ""
  },
  "marker": {
    "name": "marker",
    "source": "dashicon",
    "type": ""
  },
  "star-filled": {
    "name": "star filled",
    "source": "dashicon",
    "type": ""
  },
  "star-half": {
    "name": "star half",
    "source": "dashicon",
    "type": ""
  },
  "star-empty": {
    "name": "star empty",
    "source": "dashicon",
    "type": ""
  },
  "flag": {
    "name": "flag",
    "source": "dashicon",
    "type": ""
  },
  "info": {
    "name": "info",
    "source": "dashicon",
    "type": ""
  },
  "warning": {
    "name": "warning",
    "source": "dashicon",
    "type": ""
  },
  "share": {
    "name": "share",
    "source": "dashicon",
    "type": ""
  },
  "share1": {
    "name": "share1",
    "source": "dashicon",
    "type": ""
  },
  "share-alt": {
    "name": "share alt",
    "source": "dashicon",
    "type": ""
  },
  "share-alt2": {
    "name": "share alt2",
    "source": "dashicon",
    "type": ""
  },
  "twitter": {
    "name": "twitter",
    "source": "dashicon",
    "type": ""
  },
  "rss": {
    "name": "rss",
    "source": "dashicon",
    "type": ""
  },
  "email": {
    "name": "email",
    "source": "dashicon",
    "type": ""
  },
  "email-alt": {
    "name": "email alt",
    "source": "dashicon",
    "type": ""
  },
  "facebook": {
    "name": "facebook",
    "source": "dashicon",
    "type": ""
  },
  "facebook-alt": {
    "name": "facebook alt",
    "source": "dashicon",
    "type": ""
  },
  "networking": {
    "name": "networking",
    "source": "dashicon",
    "type": ""
  },
  "googleplus": {
    "name": "googleplus",
    "source": "dashicon",
    "type": ""
  },
  "location": {
    "name": "location",
    "source": "dashicon",
    "type": ""
  },
  "location-alt": {
    "name": "location alt",
    "source": "dashicon",
    "type": ""
  },
  "camera": {
    "name": "camera",
    "source": "dashicon",
    "type": ""
  },
  "images-alt": {
    "name": "images alt",
    "source": "dashicon",
    "type": ""
  },
  "images-alt2": {
    "name": "images alt2",
    "source": "dashicon",
    "type": ""
  },
  "video-alt": {
    "name": "video alt",
    "source": "dashicon",
    "type": ""
  },
  "video-alt2": {
    "name": "video alt2",
    "source": "dashicon",
    "type": ""
  },
  "video-alt3": {
    "name": "video alt3",
    "source": "dashicon",
    "type": ""
  },
  "vault": {
    "name": "vault",
    "source": "dashicon",
    "type": ""
  },
  "shield": {
    "name": "shield",
    "source": "dashicon",
    "type": ""
  },
  "shield-alt": {
    "name": "shield alt",
    "source": "dashicon",
    "type": ""
  },
  "sos": {
    "name": "sos",
    "source": "dashicon",
    "type": ""
  },
  "search": {
    "name": "search",
    "source": "dashicon",
    "type": ""
  },
  "slides": {
    "name": "slides",
    "source": "dashicon",
    "type": ""
  },
  "analytics": {
    "name": "analytics",
    "source": "dashicon",
    "type": ""
  },
  "chart-pie": {
    "name": "chart pie",
    "source": "dashicon",
    "type": ""
  },
  "chart-bar": {
    "name": "chart bar",
    "source": "dashicon",
    "type": ""
  },
  "chart-line": {
    "name": "chart line",
    "source": "dashicon",
    "type": ""
  },
  "chart-area": {
    "name": "chart area",
    "source": "dashicon",
    "type": ""
  },
  "groups": {
    "name": "groups",
    "source": "dashicon",
    "type": ""
  },
  "businessman": {
    "name": "businessman",
    "source": "dashicon",
    "type": ""
  },
  "id": {
    "name": "id",
    "source": "dashicon",
    "type": ""
  },
  "id-alt": {
    "name": "id alt",
    "source": "dashicon",
    "type": ""
  },
  "products": {
    "name": "products",
    "source": "dashicon",
    "type": ""
  },
  "awards": {
    "name": "awards",
    "source": "dashicon",
    "type": ""
  },
  "forms": {
    "name": "forms",
    "source": "dashicon",
    "type": ""
  },
  "testimonial": {
    "name": "testimonial",
    "source": "dashicon",
    "type": ""
  },
  "portfolio": {
    "name": "portfolio",
    "source": "dashicon",
    "type": ""
  },
  "book": {
    "name": "book",
    "source": "dashicon",
    "type": ""
  },
  "book-alt": {
    "name": "book alt",
    "source": "dashicon",
    "type": ""
  },
  "download": {
    "name": "download",
    "source": "dashicon",
    "type": ""
  },
  "upload": {
    "name": "upload",
    "source": "dashicon",
    "type": ""
  },
  "backup": {
    "name": "backup",
    "source": "dashicon",
    "type": ""
  },
  "clock": {
    "name": "clock",
    "source": "dashicon",
    "type": ""
  },
  "lightbulb": {
    "name": "lightbulb",
    "source": "dashicon",
    "type": ""
  },
  "microphone": {
    "name": "microphone",
    "source": "dashicon",
    "type": ""
  },
  "desktop": {
    "name": "desktop",
    "source": "dashicon",
    "type": ""
  },
  "laptop": {
    "name": "laptop",
    "source": "dashicon",
    "type": ""
  },
  "tablet": {
    "name": "tablet",
    "source": "dashicon",
    "type": ""
  },
  "smartphone": {
    "name": "smartphone",
    "source": "dashicon",
    "type": ""
  },
  "phone": {
    "name": "phone",
    "source": "dashicon",
    "type": ""
  },
  "smiley": {
    "name": "smiley",
    "source": "dashicon",
    "type": ""
  },
  "index-card": {
    "name": "index card",
    "source": "dashicon",
    "type": ""
  },
  "carrot": {
    "name": "carrot",
    "source": "dashicon",
    "type": ""
  },
  "building": {
    "name": "building",
    "source": "dashicon",
    "type": ""
  },
  "store": {
    "name": "store",
    "source": "dashicon",
    "type": ""
  },
  "album": {
    "name": "album",
    "source": "dashicon",
    "type": ""
  },
  "palmtree": {
    "name": "palmtree",
    "source": "dashicon",
    "type": ""
  },
  "tickets-alt": {
    "name": "tickets alt",
    "source": "dashicon",
    "type": ""
  },
  "money": {
    "name": "money",
    "source": "dashicon",
    "type": ""
  },
  "thumbs-up": {
    "name": "thumbs up",
    "source": "dashicon",
    "type": ""
  },
  "thumbs-down": {
    "name": "thumbs down",
    "source": "dashicon",
    "type": ""
  },
  "layout": {
    "name": "layout",
    "source": "dashicon",
    "type": ""
  },
  "paperclip": {
    "name": "paperclip",
    "source": "dashicon",
    "type": ""
  },
  "email-alt2": {
    "name": "email alt2",
    "source": "dashicon",
    "type": ""
  },
  "menu-alt": {
    "name": "menu alt",
    "source": "dashicon",
    "type": ""
  },
  "trash": {
    "name": "trash",
    "source": "dashicon",
    "type": ""
  },
  "heading": {
    "name": "heading",
    "source": "dashicon",
    "type": ""
  },
  "insert": {
    "name": "insert",
    "source": "dashicon",
    "type": ""
  },
  "align-full-width": {
    "name": "align full width",
    "source": "dashicon",
    "type": ""
  },
  "button": {
    "name": "button",
    "source": "dashicon",
    "type": ""
  },
  "align-wide": {
    "name": "align wide",
    "source": "dashicon",
    "type": ""
  },
  "ellipsis": {
    "name": "ellipsis",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-activity": {
    "name": "buddicons activity",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-buddypress-logo": {
    "name": "buddicons buddypress logo",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-community": {
    "name": "buddicons community",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-forums": {
    "name": "buddicons forums",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-friends": {
    "name": "buddicons friends",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-groups": {
    "name": "buddicons groups",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-pm": {
    "name": "buddicons pm",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-replies": {
    "name": "buddicons replies",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-topics": {
    "name": "buddicons topics",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-tracking": {
    "name": "buddicons tracking",
    "source": "dashicon",
    "type": ""
  },
  "admin-site-alt": {
    "name": "admin site alt",
    "source": "dashicon",
    "type": ""
  },
  "admin-site-alt2": {
    "name": "admin site alt2",
    "source": "dashicon",
    "type": ""
  },
  "admin-site-alt3": {
    "name": "admin site alt3",
    "source": "dashicon",
    "type": ""
  },
  "rest-api": {
    "name": "rest api",
    "source": "dashicon",
    "type": ""
  },
  "yes-alt": {
    "name": "yes alt",
    "source": "dashicon",
    "type": ""
  },
  "buddicons-bbpress-logo": {
    "name": "buddicons bbpress logo",
    "source": "dashicon",
    "type": ""
  },
  "tide": {
    "name": "tide",
    "source": "dashicon",
    "type": ""
  },
  "editor-ol-rtl": {
    "name": "editor ol rtl",
    "source": "dashicon",
    "type": ""
  },
  "instagram": {
    "name": "instagram",
    "source": "dashicon",
    "type": ""
  },
  "businessperson": {
    "name": "businessperson",
    "source": "dashicon",
    "type": ""
  },
  "businesswoman": {
    "name": "businesswoman",
    "source": "dashicon",
    "type": ""
  },
  "color-picker": {
    "name": "color picker",
    "source": "dashicon",
    "type": ""
  },
  "camera-alt": {
    "name": "camera alt",
    "source": "dashicon",
    "type": ""
  },
  "editor-ltr": {
    "name": "editor ltr",
    "source": "dashicon",
    "type": ""
  },
  "cloud": {
    "name": "cloud",
    "source": "dashicon",
    "type": ""
  },
  "twitter-alt": {
    "name": "twitter alt",
    "source": "dashicon",
    "type": ""
  },
  "menu-alt2": {
    "name": "menu alt2",
    "source": "dashicon",
    "type": ""
  },
  "menu-alt3": {
    "name": "menu alt3",
    "source": "dashicon",
    "type": ""
  },
  "plugins-checked": {
    "name": "plugins checked",
    "source": "dashicon",
    "type": ""
  },
  "text-page": {
    "name": "text page",
    "source": "dashicon",
    "type": ""
  },
  "update-alt": {
    "name": "update alt",
    "source": "dashicon",
    "type": ""
  },
  "code-standards": {
    "name": "code standards",
    "source": "dashicon",
    "type": ""
  },
  "align-pull-left": {
    "name": "align pull left",
    "source": "dashicon",
    "type": ""
  },
  "align-pull-right": {
    "name": "align pull right",
    "source": "dashicon",
    "type": ""
  },
  "block-default": {
    "name": "block default",
    "source": "dashicon",
    "type": ""
  },
  "cloud-saved": {
    "name": "cloud saved",
    "source": "dashicon",
    "type": ""
  },
  "cloud-upload": {
    "name": "cloud upload",
    "source": "dashicon",
    "type": ""
  },
  "columns": {
    "name": "columns",
    "source": "dashicon",
    "type": ""
  },
  "cover-image": {
    "name": "cover image",
    "source": "dashicon",
    "type": ""
  },
  "embed-audio": {
    "name": "embed audio",
    "source": "dashicon",
    "type": ""
  },
  "embed-generic": {
    "name": "embed generic",
    "source": "dashicon",
    "type": ""
  },
  "embed-photo": {
    "name": "embed photo",
    "source": "dashicon",
    "type": ""
  },
  "embed-post": {
    "name": "embed post",
    "source": "dashicon",
    "type": ""
  },
  "embed-video": {
    "name": "embed video",
    "source": "dashicon",
    "type": ""
  },
  "exit": {
    "name": "exit",
    "source": "dashicon",
    "type": ""
  },
  "html": {
    "name": "html",
    "source": "dashicon",
    "type": ""
  },
  "info-outline": {
    "name": "info outline",
    "source": "dashicon",
    "type": ""
  },
  "insert-after": {
    "name": "insert after",
    "source": "dashicon",
    "type": ""
  },
  "insert-before": {
    "name": "insert before",
    "source": "dashicon",
    "type": ""
  },
  "remove": {
    "name": "remove",
    "source": "dashicon",
    "type": ""
  },
  "shortcode": {
    "name": "shortcode",
    "source": "dashicon",
    "type": ""
  },
  "table-col-after": {
    "name": "table col after",
    "source": "dashicon",
    "type": ""
  },
  "table-col-before": {
    "name": "table col before",
    "source": "dashicon",
    "type": ""
  },
  "table-col-delete": {
    "name": "table col delete",
    "source": "dashicon",
    "type": ""
  },
  "table-row-after": {
    "name": "table row after",
    "source": "dashicon",
    "type": ""
  },
  "table-row-before": {
    "name": "table row before",
    "source": "dashicon",
    "type": ""
  },
  "table-row-delete": {
    "name": "table row delete",
    "source": "dashicon",
    "type": ""
  },
  "saved": {
    "name": "saved",
    "source": "dashicon",
    "type": ""
  },
  "airplane": {
    "name": "airplane",
    "source": "dashicon",
    "type": ""
  },
  "amazon": {
    "name": "amazon",
    "source": "dashicon",
    "type": ""
  },
  "bank": {
    "name": "bank",
    "source": "dashicon",
    "type": ""
  },
  "beer": {
    "name": "beer",
    "source": "dashicon",
    "type": ""
  },
  "bell": {
    "name": "bell",
    "source": "dashicon",
    "type": ""
  },
  "calculator": {
    "name": "calculator",
    "source": "dashicon",
    "type": ""
  },
  "coffee": {
    "name": "coffee",
    "source": "dashicon",
    "type": ""
  },
  "database-add": {
    "name": "database add",
    "source": "dashicon",
    "type": ""
  },
  "database-export": {
    "name": "database export",
    "source": "dashicon",
    "type": ""
  },
  "database-import": {
    "name": "database import",
    "source": "dashicon",
    "type": ""
  },
  "database-remove": {
    "name": "database remove",
    "source": "dashicon",
    "type": ""
  },
  "database-view": {
    "name": "database view",
    "source": "dashicon",
    "type": ""
  },
  "database": {
    "name": "database",
    "source": "dashicon",
    "type": ""
  },
  "drumstick": {
    "name": "drumstick",
    "source": "dashicon",
    "type": ""
  },
  "edit-page": {
    "name": "edit page",
    "source": "dashicon",
    "type": ""
  },
  "food": {
    "name": "food",
    "source": "dashicon",
    "type": ""
  },
  "fullscreen-alt": {
    "name": "fullscreen alt",
    "source": "dashicon",
    "type": ""
  },
  "fullscreen-exit-alt": {
    "name": "fullscreen exit alt",
    "source": "dashicon",
    "type": ""
  },
  "games": {
    "name": "games",
    "source": "dashicon",
    "type": ""
  },
  "google": {
    "name": "google",
    "source": "dashicon",
    "type": ""
  },
  "hourglass": {
    "name": "hourglass",
    "source": "dashicon",
    "type": ""
  },
  "linkedin": {
    "name": "linkedin",
    "source": "dashicon",
    "type": ""
  },
  "money-alt": {
    "name": "money alt",
    "source": "dashicon",
    "type": ""
  },
  "open-folder": {
    "name": "open folder",
    "source": "dashicon",
    "type": ""
  },
  "pdf": {
    "name": "pdf",
    "source": "dashicon",
    "type": ""
  },
  "pets": {
    "name": "pets",
    "source": "dashicon",
    "type": ""
  },
  "pinterest": {
    "name": "pinterest",
    "source": "dashicon",
    "type": ""
  },
  "printer": {
    "name": "printer",
    "source": "dashicon",
    "type": ""
  },
  "privacy": {
    "name": "privacy",
    "source": "dashicon",
    "type": ""
  },
  "reddit": {
    "name": "reddit",
    "source": "dashicon",
    "type": ""
  },
  "spotify": {
    "name": "spotify",
    "source": "dashicon",
    "type": ""
  },
  "superhero-alt": {
    "name": "superhero alt",
    "source": "dashicon",
    "type": ""
  },
  "superhero": {
    "name": "superhero",
    "source": "dashicon",
    "type": ""
  },
  "twitch": {
    "name": "twitch",
    "source": "dashicon",
    "type": ""
  },
  "whatsapp": {
    "name": "whatsapp",
    "source": "dashicon",
    "type": ""
  },
  "youtube": {
    "name": "youtube",
    "source": "dashicon",
    "type": ""
  },
  "car": {
    "name": "car",
    "source": "dashicon",
    "type": ""
  },
  "podio": {
    "name": "podio",
    "source": "dashicon",
    "type": ""
  },
  "xing": {
    "name": "xing",
    "source": "dashicon",
    "type": ""
  }
};

/***/ }),

/***/ "./src/controls/icon-picker/icons/fontawesome.js":
/*!*******************************************************!*\
  !*** ./src/controls/icon-picker/icons/fontawesome.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontAwesome": () => (/* binding */ fontAwesome)
/* harmony export */ });
const fontAwesome = {
  "fa-500px": {
    "name": "500px",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-accessible-icon": {
    "name": "accessible icon",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-accusoft": {
    "name": "accusoft",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-address-book": {
    "name": "address book",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-address-card": {
    "name": "address card",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-adjust": {
    "name": "adjust",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-adn": {
    "name": "adn",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-adversal": {
    "name": "adversal",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-affiliatetheme": {
    "name": "affiliatetheme",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-algolia": {
    "name": "algolia",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-align-center": {
    "name": "align center",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-align-justify": {
    "name": "align justify",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-align-left": {
    "name": "align left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-align-right": {
    "name": "align right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-amazon": {
    "name": "amazon",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-ambulance": {
    "name": "ambulance",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-american-sign-language-interpreting": {
    "name": "american sign language interpreting",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-amilia": {
    "name": "amilia",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-anchor": {
    "name": "anchor",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-android": {
    "name": "android",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-angellist": {
    "name": "angellist",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-angle-double-down": {
    "name": "angle double down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-double-left": {
    "name": "angle double left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-double-right": {
    "name": "angle double right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-double-up": {
    "name": "angle double up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-down": {
    "name": "angle down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-left": {
    "name": "angle left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-right": {
    "name": "angle right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angle-up": {
    "name": "angle up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-angrycreative": {
    "name": "angrycreative",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-angular": {
    "name": "angular",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-app-store": {
    "name": "app store",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-app-store-ios": {
    "name": "app store ios",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-apper": {
    "name": "apper",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-apple": {
    "name": "apple",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-apple-pay": {
    "name": "apple pay",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-archive": {
    "name": "archive",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-alt-circle-down": {
    "name": "arrow alt circle down",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-arrow-alt-circle-left": {
    "name": "arrow alt circle left",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-arrow-alt-circle-right": {
    "name": "arrow alt circle right",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-arrow-alt-circle-up": {
    "name": "arrow alt circle up",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-arrow-circle-down": {
    "name": "arrow circle down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-circle-left": {
    "name": "arrow circle left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-circle-right": {
    "name": "arrow circle right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-circle-up": {
    "name": "arrow circle up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-down": {
    "name": "arrow down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-left": {
    "name": "arrow left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-right": {
    "name": "arrow right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrow-up": {
    "name": "arrow up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrows-alt": {
    "name": "arrows alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrows-alt-h": {
    "name": "arrows alt h",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-arrows-alt-v": {
    "name": "arrows alt v",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-assistive-listening-systems": {
    "name": "assistive listening systems",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-asterisk": {
    "name": "asterisk",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-asymmetrik": {
    "name": "asymmetrik",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-at": {
    "name": "at",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-audible": {
    "name": "audible",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-audio-description": {
    "name": "audio description",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-autoprefixer": {
    "name": "autoprefixer",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-avianex": {
    "name": "avianex",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-aviato": {
    "name": "aviato",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-aws": {
    "name": "aws",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-backward": {
    "name": "backward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-balance-scale": {
    "name": "balance scale",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ban": {
    "name": "ban",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bandcamp": {
    "name": "bandcamp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-barcode": {
    "name": "barcode",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bars": {
    "name": "bars",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bath": {
    "name": "bath",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-battery-empty": {
    "name": "battery empty",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-battery-full": {
    "name": "battery full",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-battery-half": {
    "name": "battery half",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-battery-quarter": {
    "name": "battery quarter",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-battery-three-quarters": {
    "name": "battery three quarters",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bed": {
    "name": "bed",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-beer": {
    "name": "beer",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-behance": {
    "name": "behance",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-behance-square": {
    "name": "behance square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bell": {
    "name": "bell",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-bell-slash": {
    "name": "bell slash",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-bicycle": {
    "name": "bicycle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bimobject": {
    "name": "bimobject",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-binoculars": {
    "name": "binoculars",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-birthday-cake": {
    "name": "birthday cake",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bitbucket": {
    "name": "bitbucket",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bitcoin": {
    "name": "bitcoin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bity": {
    "name": "bity",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-black-tie": {
    "name": "black tie",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-blackberry": {
    "name": "blackberry",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-blind": {
    "name": "blind",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-blogger": {
    "name": "blogger",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-blogger-b": {
    "name": "blogger b",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bluetooth": {
    "name": "bluetooth",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bluetooth-b": {
    "name": "bluetooth b",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bold": {
    "name": "bold",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bolt": {
    "name": "bolt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bomb": {
    "name": "bomb",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-book": {
    "name": "book",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bookmark": {
    "name": "bookmark",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-braille": {
    "name": "braille",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-briefcase": {
    "name": "briefcase",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-btc": {
    "name": "btc",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bug": {
    "name": "bug",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-building": {
    "name": "building",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-bullhorn": {
    "name": "bullhorn",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-bullseye": {
    "name": "bullseye",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-buromobelexperte": {
    "name": "buromobelexperte",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-bus": {
    "name": "bus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-buysellads": {
    "name": "buysellads",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-calculator": {
    "name": "calculator",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-calendar": {
    "name": "calendar",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-calendar-alt": {
    "name": "calendar alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-calendar-check": {
    "name": "calendar check",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-calendar-minus": {
    "name": "calendar minus",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-calendar-plus": {
    "name": "calendar plus",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-calendar-times": {
    "name": "calendar times",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-camera": {
    "name": "camera",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-camera-retro": {
    "name": "camera retro",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-car": {
    "name": "car",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-caret-down": {
    "name": "caret down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-caret-left": {
    "name": "caret left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-caret-right": {
    "name": "caret right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-caret-square-down": {
    "name": "caret square down",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-caret-square-left": {
    "name": "caret square left",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-caret-square-right": {
    "name": "caret square right",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-caret-square-up": {
    "name": "caret square up",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-caret-up": {
    "name": "caret up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cart-arrow-down": {
    "name": "cart arrow down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cart-plus": {
    "name": "cart plus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cc-amex": {
    "name": "cc amex",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-apple-pay": {
    "name": "cc apple pay",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-diners-club": {
    "name": "cc diners club",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-discover": {
    "name": "cc discover",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-jcb": {
    "name": "cc jcb",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-mastercard": {
    "name": "cc mastercard",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-paypal": {
    "name": "cc paypal",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-stripe": {
    "name": "cc stripe",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cc-visa": {
    "name": "cc visa",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-centercode": {
    "name": "centercode",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-certificate": {
    "name": "certificate",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chart-area": {
    "name": "chart area",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chart-bar": {
    "name": "chart bar",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-chart-line": {
    "name": "chart line",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chart-pie": {
    "name": "chart pie",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-check": {
    "name": "check",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-check-circle": {
    "name": "check circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-check-square": {
    "name": "check square",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-chevron-circle-down": {
    "name": "chevron circle down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-circle-left": {
    "name": "chevron circle left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-circle-right": {
    "name": "chevron circle right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-circle-up": {
    "name": "chevron circle up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-down": {
    "name": "chevron down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-left": {
    "name": "chevron left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-right": {
    "name": "chevron right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chevron-up": {
    "name": "chevron up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-child": {
    "name": "child",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-chrome": {
    "name": "chrome",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-circle": {
    "name": "circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-circle-notch": {
    "name": "circle notch",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-clipboard": {
    "name": "clipboard",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-clock": {
    "name": "clock",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-clone": {
    "name": "clone",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-closed-captioning": {
    "name": "closed captioning",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-cloud": {
    "name": "cloud",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cloud-download-alt": {
    "name": "cloud download alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cloud-upload-alt": {
    "name": "cloud upload alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cloudscale": {
    "name": "cloudscale",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cloudsmith": {
    "name": "cloudsmith",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cloudversify": {
    "name": "cloudversify",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-code": {
    "name": "code",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-code-branch": {
    "name": "code branch",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-codepen": {
    "name": "codepen",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-codiepie": {
    "name": "codiepie",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-coffee": {
    "name": "coffee",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cog": {
    "name": "cog",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cogs": {
    "name": "cogs",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-columns": {
    "name": "columns",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-comment": {
    "name": "comment",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-comment-alt": {
    "name": "comment alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-comments": {
    "name": "comments",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-compass": {
    "name": "compass",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-compress": {
    "name": "compress",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-connectdevelop": {
    "name": "connectdevelop",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-contao": {
    "name": "contao",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-copy": {
    "name": "copy",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-copyright": {
    "name": "copyright",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-cpanel": {
    "name": "cpanel",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-creative-commons": {
    "name": "creative commons",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-credit-card": {
    "name": "credit card",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-crop": {
    "name": "crop",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-crosshairs": {
    "name": "crosshairs",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-css3": {
    "name": "css3",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-css3-alt": {
    "name": "css3 alt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-cube": {
    "name": "cube",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cubes": {
    "name": "cubes",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cut": {
    "name": "cut",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-cuttlefish": {
    "name": "cuttlefish",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-d-and-d": {
    "name": "d and d",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dashcube": {
    "name": "dashcube",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-database": {
    "name": "database",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-deaf": {
    "name": "deaf",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-delicious": {
    "name": "delicious",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-deploydog": {
    "name": "deploydog",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-deskpro": {
    "name": "deskpro",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-desktop": {
    "name": "desktop",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-deviantart": {
    "name": "deviantart",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-digg": {
    "name": "digg",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-digital-ocean": {
    "name": "digital ocean",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-discord": {
    "name": "discord",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-discourse": {
    "name": "discourse",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dochub": {
    "name": "dochub",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-docker": {
    "name": "docker",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dollar-sign": {
    "name": "dollar sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-dot-circle": {
    "name": "dot circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-download": {
    "name": "download",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-draft2digital": {
    "name": "draft2digital",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dribbble": {
    "name": "dribbble",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dribbble-square": {
    "name": "dribbble square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dropbox": {
    "name": "dropbox",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-drupal": {
    "name": "drupal",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-dyalog": {
    "name": "dyalog",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-earlybirds": {
    "name": "earlybirds",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-edge": {
    "name": "edge",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-edit": {
    "name": "edit",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-eject": {
    "name": "eject",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ellipsis-h": {
    "name": "ellipsis h",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ellipsis-v": {
    "name": "ellipsis v",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ember": {
    "name": "ember",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-empire": {
    "name": "empire",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-envelope": {
    "name": "envelope",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-envelope-open": {
    "name": "envelope open",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-envelope-square": {
    "name": "envelope square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-envira": {
    "name": "envira",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-eraser": {
    "name": "eraser",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-erlang": {
    "name": "erlang",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-etsy": {
    "name": "etsy",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-euro-sign": {
    "name": "euro sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-exchange-alt": {
    "name": "exchange alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-exclamation": {
    "name": "exclamation",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-exclamation-circle": {
    "name": "exclamation circle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-exclamation-triangle": {
    "name": "exclamation triangle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-expand": {
    "name": "expand",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-expand-arrows-alt": {
    "name": "expand arrows alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-expeditedssl": {
    "name": "expeditedssl",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-external-link-alt": {
    "name": "external link alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-external-link-square-alt": {
    "name": "external link square alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-eye": {
    "name": "eye",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-eye-dropper": {
    "name": "eye dropper",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-eye-slash": {
    "name": "eye slash",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-facebook": {
    "name": "facebook",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-facebook-f": {
    "name": "facebook f",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-facebook-messenger": {
    "name": "facebook messenger",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-facebook-square": {
    "name": "facebook square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fast-backward": {
    "name": "fast backward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-fast-forward": {
    "name": "fast forward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-fax": {
    "name": "fax",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-female": {
    "name": "female",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-fighter-jet": {
    "name": "fighter jet",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-file": {
    "name": "file",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-alt": {
    "name": "file alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-archive": {
    "name": "file archive",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-audio": {
    "name": "file audio",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-code": {
    "name": "file code",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-excel": {
    "name": "file excel",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-image": {
    "name": "file image",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-pdf": {
    "name": "file pdf",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-powerpoint": {
    "name": "file powerpoint",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-video": {
    "name": "file video",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-file-word": {
    "name": "file word",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-film": {
    "name": "film",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-filter": {
    "name": "filter",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-fire": {
    "name": "fire",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-fire-extinguisher": {
    "name": "fire extinguisher",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-firefox": {
    "name": "firefox",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-first-order": {
    "name": "first order",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-firstdraft": {
    "name": "firstdraft",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-flag": {
    "name": "flag",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-flag-checkered": {
    "name": "flag checkered",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-flask": {
    "name": "flask",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-flickr": {
    "name": "flickr",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fly": {
    "name": "fly",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-folder": {
    "name": "folder",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-folder-open": {
    "name": "folder open",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-font": {
    "name": "font",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-font-awesome": {
    "name": "font awesome",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-font-awesome-alt": {
    "name": "font awesome alt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-font-awesome-flag": {
    "name": "font awesome flag",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fonticons": {
    "name": "fonticons",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fonticons-fi": {
    "name": "fonticons fi",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fort-awesome": {
    "name": "fort awesome",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-fort-awesome-alt": {
    "name": "fort awesome alt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-forumbee": {
    "name": "forumbee",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-forward": {
    "name": "forward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-foursquare": {
    "name": "foursquare",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-free-code-camp": {
    "name": "free code camp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-freebsd": {
    "name": "freebsd",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-frown": {
    "name": "frown",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-futbol": {
    "name": "futbol",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-gamepad": {
    "name": "gamepad",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-gavel": {
    "name": "gavel",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-gem": {
    "name": "gem",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-genderless": {
    "name": "genderless",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-get-pocket": {
    "name": "get pocket",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gg": {
    "name": "gg",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gg-circle": {
    "name": "gg circle",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gift": {
    "name": "gift",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-git": {
    "name": "git",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-git-square": {
    "name": "git square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-github": {
    "name": "github",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-github-alt": {
    "name": "github alt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-github-square": {
    "name": "github square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gitkraken": {
    "name": "gitkraken",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gitlab": {
    "name": "gitlab",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gitter": {
    "name": "gitter",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-glass-martini": {
    "name": "glass martini",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-glide": {
    "name": "glide",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-glide-g": {
    "name": "glide g",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-globe": {
    "name": "globe",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-gofore": {
    "name": "gofore",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-goodreads": {
    "name": "goodreads",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-goodreads-g": {
    "name": "goodreads g",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google": {
    "name": "google",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-drive": {
    "name": "google drive",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-play": {
    "name": "google play",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-plus": {
    "name": "google plus",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-plus-g": {
    "name": "google plus g",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-plus-square": {
    "name": "google plus square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-google-wallet": {
    "name": "google wallet",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-graduation-cap": {
    "name": "graduation cap",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-gratipay": {
    "name": "gratipay",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-grav": {
    "name": "grav",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gripfire": {
    "name": "gripfire",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-grunt": {
    "name": "grunt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-gulp": {
    "name": "gulp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-h-square": {
    "name": "h square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hacker-news": {
    "name": "hacker news",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-hacker-news-square": {
    "name": "hacker news square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-hand-lizard": {
    "name": "hand lizard",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-paper": {
    "name": "hand paper",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-peace": {
    "name": "hand peace",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-point-down": {
    "name": "hand point down",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-point-left": {
    "name": "hand point left",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-point-right": {
    "name": "hand point right",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-point-up": {
    "name": "hand point up",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-pointer": {
    "name": "hand pointer",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-rock": {
    "name": "hand rock",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-scissors": {
    "name": "hand scissors",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hand-spock": {
    "name": "hand spock",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-handshake": {
    "name": "handshake",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hashtag": {
    "name": "hashtag",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hdd": {
    "name": "hdd",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-heading": {
    "name": "heading",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-headphones": {
    "name": "headphones",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-heart": {
    "name": "heart",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-heartbeat": {
    "name": "heartbeat",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hire-a-helper": {
    "name": "hire a helper",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-history": {
    "name": "history",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-home": {
    "name": "home",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hooli": {
    "name": "hooli",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-hospital": {
    "name": "hospital",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hotjar": {
    "name": "hotjar",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-hourglass": {
    "name": "hourglass",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-hourglass-end": {
    "name": "hourglass end",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hourglass-half": {
    "name": "hourglass half",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-hourglass-start": {
    "name": "hourglass start",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-houzz": {
    "name": "houzz",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-html5": {
    "name": "html5",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-hubspot": {
    "name": "hubspot",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-i-cursor": {
    "name": "i cursor",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-id-badge": {
    "name": "id badge",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-id-card": {
    "name": "id card",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-image": {
    "name": "image",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-images": {
    "name": "images",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-imdb": {
    "name": "imdb",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-inbox": {
    "name": "inbox",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-indent": {
    "name": "indent",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-industry": {
    "name": "industry",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-info": {
    "name": "info",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-info-circle": {
    "name": "info circle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-instagram": {
    "name": "instagram",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-internet-explorer": {
    "name": "internet explorer",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-ioxhost": {
    "name": "ioxhost",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-italic": {
    "name": "italic",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-itunes": {
    "name": "itunes",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-itunes-note": {
    "name": "itunes note",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-jenkins": {
    "name": "jenkins",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-joget": {
    "name": "joget",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-joomla": {
    "name": "joomla",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-js": {
    "name": "js",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-js-square": {
    "name": "js square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-jsfiddle": {
    "name": "jsfiddle",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-key": {
    "name": "key",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-keyboard": {
    "name": "keyboard",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-keycdn": {
    "name": "keycdn",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-kickstarter": {
    "name": "kickstarter",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-kickstarter-k": {
    "name": "kickstarter k",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-language": {
    "name": "language",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-laptop": {
    "name": "laptop",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-laravel": {
    "name": "laravel",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-lastfm": {
    "name": "lastfm",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-lastfm-square": {
    "name": "lastfm square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-leaf": {
    "name": "leaf",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-leanpub": {
    "name": "leanpub",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-lemon": {
    "name": "lemon",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-less": {
    "name": "less",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-level-down-alt": {
    "name": "level down alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-level-up-alt": {
    "name": "level up alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-life-ring": {
    "name": "life ring",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-lightbulb": {
    "name": "lightbulb",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-line": {
    "name": "line",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-link": {
    "name": "link",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-linkedin": {
    "name": "linkedin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-linkedin-in": {
    "name": "linkedin in",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-linode": {
    "name": "linode",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-linux": {
    "name": "linux",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-lira-sign": {
    "name": "lira sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-list": {
    "name": "list",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-list-alt": {
    "name": "list alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-list-ol": {
    "name": "list ol",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-list-ul": {
    "name": "list ul",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-location-arrow": {
    "name": "location arrow",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-lock": {
    "name": "lock",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-lock-open": {
    "name": "lock open",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-long-arrow-alt-down": {
    "name": "long arrow alt down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-long-arrow-alt-left": {
    "name": "long arrow alt left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-long-arrow-alt-right": {
    "name": "long arrow alt right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-long-arrow-alt-up": {
    "name": "long arrow alt up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-low-vision": {
    "name": "low vision",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-lyft": {
    "name": "lyft",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-magento": {
    "name": "magento",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-magic": {
    "name": "magic",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-magnet": {
    "name": "magnet",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-male": {
    "name": "male",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-map": {
    "name": "map",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-map-marker": {
    "name": "map marker",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-map-marker-alt": {
    "name": "map marker alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-map-pin": {
    "name": "map pin",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-map-signs": {
    "name": "map signs",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mars": {
    "name": "mars",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mars-double": {
    "name": "mars double",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mars-stroke": {
    "name": "mars stroke",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mars-stroke-h": {
    "name": "mars stroke h",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mars-stroke-v": {
    "name": "mars stroke v",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-maxcdn": {
    "name": "maxcdn",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-medapps": {
    "name": "medapps",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-medium": {
    "name": "medium",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-medium-m": {
    "name": "medium m",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-medkit": {
    "name": "medkit",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-medrt": {
    "name": "medrt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-meetup": {
    "name": "meetup",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-meh": {
    "name": "meh",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-mercury": {
    "name": "mercury",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-microchip": {
    "name": "microchip",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-microphone": {
    "name": "microphone",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-microphone-slash": {
    "name": "microphone slash",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-microsoft": {
    "name": "microsoft",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-minus": {
    "name": "minus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-minus-circle": {
    "name": "minus circle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-minus-square": {
    "name": "minus square",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-mix": {
    "name": "mix",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-mixcloud": {
    "name": "mixcloud",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-mizuni": {
    "name": "mizuni",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-mobile": {
    "name": "mobile",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mobile-alt": {
    "name": "mobile alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-modx": {
    "name": "modx",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-monero": {
    "name": "monero",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-money-bill-alt": {
    "name": "money bill alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-moon": {
    "name": "moon",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-motorcycle": {
    "name": "motorcycle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-mouse-pointer": {
    "name": "mouse pointer",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-music": {
    "name": "music",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-napster": {
    "name": "napster",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-neuter": {
    "name": "neuter",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-newspaper": {
    "name": "newspaper",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-nintendo-switch": {
    "name": "nintendo switch",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-node": {
    "name": "node",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-node-js": {
    "name": "node js",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-npm": {
    "name": "npm",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-ns8": {
    "name": "ns8",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-nutritionix": {
    "name": "nutritionix",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-object-group": {
    "name": "object group",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-object-ungroup": {
    "name": "object ungroup",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-odnoklassniki": {
    "name": "odnoklassniki",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-odnoklassniki-square": {
    "name": "odnoklassniki square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-opencart": {
    "name": "opencart",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-openid": {
    "name": "openid",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-opera": {
    "name": "opera",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-optin-monster": {
    "name": "optin monster",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-osi": {
    "name": "osi",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-outdent": {
    "name": "outdent",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-page4": {
    "name": "page4",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pagelines": {
    "name": "pagelines",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-paint-brush": {
    "name": "paint brush",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-palfed": {
    "name": "palfed",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-paper-plane": {
    "name": "paper plane",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-paperclip": {
    "name": "paperclip",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-paragraph": {
    "name": "paragraph",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-paste": {
    "name": "paste",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-patreon": {
    "name": "patreon",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pause": {
    "name": "pause",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-pause-circle": {
    "name": "pause circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-paw": {
    "name": "paw",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-paypal": {
    "name": "paypal",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pen-square": {
    "name": "pen square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-pencil-alt": {
    "name": "pencil alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-percent": {
    "name": "percent",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-periscope": {
    "name": "periscope",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-phabricator": {
    "name": "phabricator",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-phoenix-framework": {
    "name": "phoenix framework",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-phone": {
    "name": "phone",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-phone-square": {
    "name": "phone square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-phone-volume": {
    "name": "phone volume",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-pied-piper": {
    "name": "pied piper",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pied-piper-alt": {
    "name": "pied piper alt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pied-piper-pp": {
    "name": "pied piper pp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pinterest": {
    "name": "pinterest",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pinterest-p": {
    "name": "pinterest p",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pinterest-square": {
    "name": "pinterest square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-plane": {
    "name": "plane",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-play": {
    "name": "play",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-play-circle": {
    "name": "play circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-playstation": {
    "name": "playstation",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-plug": {
    "name": "plug",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-plus": {
    "name": "plus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-plus-circle": {
    "name": "plus circle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-plus-square": {
    "name": "plus square",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-podcast": {
    "name": "podcast",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-pound-sign": {
    "name": "pound sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-power-off": {
    "name": "power off",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-print": {
    "name": "print",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-product-hunt": {
    "name": "product hunt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-pushed": {
    "name": "pushed",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-puzzle-piece": {
    "name": "puzzle piece",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-python": {
    "name": "python",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-qq": {
    "name": "qq",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-qrcode": {
    "name": "qrcode",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-question": {
    "name": "question",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-question-circle": {
    "name": "question circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-quora": {
    "name": "quora",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-quote-left": {
    "name": "quote left",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-quote-right": {
    "name": "quote right",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-random": {
    "name": "random",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ravelry": {
    "name": "ravelry",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-react": {
    "name": "react",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-rebel": {
    "name": "rebel",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-recycle": {
    "name": "recycle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-red-river": {
    "name": "red river",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-reddit": {
    "name": "reddit",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-reddit-alien": {
    "name": "reddit alien",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-reddit-square": {
    "name": "reddit square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-redo": {
    "name": "redo",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-redo-alt": {
    "name": "redo alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-registered": {
    "name": "registered",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-rendact": {
    "name": "rendact",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-renren": {
    "name": "renren",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-reply": {
    "name": "reply",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-reply-all": {
    "name": "reply all",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-replyd": {
    "name": "replyd",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-resolving": {
    "name": "resolving",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-retweet": {
    "name": "retweet",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-road": {
    "name": "road",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-rocket": {
    "name": "rocket",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-rocketchat": {
    "name": "rocketchat",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-rockrms": {
    "name": "rockrms",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-rss": {
    "name": "rss",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-rss-square": {
    "name": "rss square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ruble-sign": {
    "name": "ruble sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-rupee-sign": {
    "name": "rupee sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-safari": {
    "name": "safari",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sass": {
    "name": "sass",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-save": {
    "name": "save",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-schlix": {
    "name": "schlix",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-scribd": {
    "name": "scribd",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-search": {
    "name": "search",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-search-minus": {
    "name": "search minus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-search-plus": {
    "name": "search plus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-searchengin": {
    "name": "searchengin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sellcast": {
    "name": "sellcast",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sellsy": {
    "name": "sellsy",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-server": {
    "name": "server",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-servicestack": {
    "name": "servicestack",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-share": {
    "name": "share",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-share-alt": {
    "name": "share alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-share-alt-square": {
    "name": "share alt square",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-share-square": {
    "name": "share square",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-shekel-sign": {
    "name": "shekel sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-shield-alt": {
    "name": "shield alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ship": {
    "name": "ship",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-shirtsinbulk": {
    "name": "shirtsinbulk",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-shopping-bag": {
    "name": "shopping bag",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-shopping-basket": {
    "name": "shopping basket",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-shopping-cart": {
    "name": "shopping cart",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-shower": {
    "name": "shower",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sign-in-alt": {
    "name": "sign in alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sign-language": {
    "name": "sign language",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sign-out-alt": {
    "name": "sign out alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-signal": {
    "name": "signal",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-simplybuilt": {
    "name": "simplybuilt",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sistrix": {
    "name": "sistrix",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sitemap": {
    "name": "sitemap",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-skyatlas": {
    "name": "skyatlas",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-skype": {
    "name": "skype",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-slack": {
    "name": "slack",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-slack-hash": {
    "name": "slack hash",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sliders-h": {
    "name": "sliders h",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-slideshare": {
    "name": "slideshare",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-smile": {
    "name": "smile",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-snapchat": {
    "name": "snapchat",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-snapchat-ghost": {
    "name": "snapchat ghost",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-snapchat-square": {
    "name": "snapchat square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-snowflake": {
    "name": "snowflake",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-sort": {
    "name": "sort",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-alpha-down": {
    "name": "sort alpha down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-alpha-up": {
    "name": "sort alpha up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-amount-down": {
    "name": "sort amount down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-amount-up": {
    "name": "sort amount up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-down": {
    "name": "sort down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-numeric-down": {
    "name": "sort numeric down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-numeric-up": {
    "name": "sort numeric up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sort-up": {
    "name": "sort up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-soundcloud": {
    "name": "soundcloud",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-space-shuttle": {
    "name": "space shuttle",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-speakap": {
    "name": "speakap",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-spinner": {
    "name": "spinner",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-spotify": {
    "name": "spotify",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-square": {
    "name": "square",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-stack-exchange": {
    "name": "stack exchange",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-stack-overflow": {
    "name": "stack overflow",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-star": {
    "name": "star",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-star-half": {
    "name": "star half",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-staylinked": {
    "name": "staylinked",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-steam": {
    "name": "steam",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-steam-square": {
    "name": "steam square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-steam-symbol": {
    "name": "steam symbol",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-step-backward": {
    "name": "step backward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-step-forward": {
    "name": "step forward",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-stethoscope": {
    "name": "stethoscope",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sticker-mule": {
    "name": "sticker mule",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sticky-note": {
    "name": "sticky note",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-stop": {
    "name": "stop",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-stop-circle": {
    "name": "stop circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-strava": {
    "name": "strava",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-street-view": {
    "name": "street view",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-strikethrough": {
    "name": "strikethrough",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-stripe": {
    "name": "stripe",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-stripe-s": {
    "name": "stripe s",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-studiovinari": {
    "name": "studiovinari",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-stumbleupon": {
    "name": "stumbleupon",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-stumbleupon-circle": {
    "name": "stumbleupon circle",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-subscript": {
    "name": "subscript",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-subway": {
    "name": "subway",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-suitcase": {
    "name": "suitcase",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sun": {
    "name": "sun",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-superpowers": {
    "name": "superpowers",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-superscript": {
    "name": "superscript",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-supple": {
    "name": "supple",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-sync": {
    "name": "sync",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-sync-alt": {
    "name": "sync alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-table": {
    "name": "table",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tablet": {
    "name": "tablet",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tablet-alt": {
    "name": "tablet alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tachometer-alt": {
    "name": "tachometer alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tag": {
    "name": "tag",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tags": {
    "name": "tags",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tasks": {
    "name": "tasks",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-taxi": {
    "name": "taxi",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-telegram": {
    "name": "telegram",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-telegram-plane": {
    "name": "telegram plane",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-tencent-weibo": {
    "name": "tencent weibo",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-terminal": {
    "name": "terminal",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-text-height": {
    "name": "text height",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-text-width": {
    "name": "text width",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-th": {
    "name": "th",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-th-large": {
    "name": "th large",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-th-list": {
    "name": "th list",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-themeisle": {
    "name": "themeisle",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-thermometer-empty": {
    "name": "thermometer empty",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-thermometer-full": {
    "name": "thermometer full",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-thermometer-half": {
    "name": "thermometer half",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-thermometer-quarter": {
    "name": "thermometer quarter",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-thermometer-three-quarters": {
    "name": "thermometer three quarters",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-thumbs-down": {
    "name": "thumbs down",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-thumbs-up": {
    "name": "thumbs up",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-thumbtack": {
    "name": "thumbtack",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ticket-alt": {
    "name": "ticket alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-times": {
    "name": "times",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-times-circle": {
    "name": "times circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-tint": {
    "name": "tint",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-toggle-off": {
    "name": "toggle off",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-toggle-on": {
    "name": "toggle on",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-trademark": {
    "name": "trademark",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-train": {
    "name": "train",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-transgender": {
    "name": "transgender",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-transgender-alt": {
    "name": "transgender alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-trash": {
    "name": "trash",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-trash-alt": {
    "name": "trash alt",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-tree": {
    "name": "tree",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-trello": {
    "name": "trello",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-tripadvisor": {
    "name": "tripadvisor",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-trophy": {
    "name": "trophy",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-truck": {
    "name": "truck",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tty": {
    "name": "tty",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-tumblr": {
    "name": "tumblr",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-tumblr-square": {
    "name": "tumblr square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-tv": {
    "name": "tv",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-twitch": {
    "name": "twitch",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-twitter": {
    "name": "twitter",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-twitter-square": {
    "name": "twitter square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-typo3": {
    "name": "typo3",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-uber": {
    "name": "uber",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-uikit": {
    "name": "uikit",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-umbrella": {
    "name": "umbrella",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-underline": {
    "name": "underline",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-undo": {
    "name": "undo",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-undo-alt": {
    "name": "undo alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-uniregistry": {
    "name": "uniregistry",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-universal-access": {
    "name": "universal access",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-university": {
    "name": "university",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-unlink": {
    "name": "unlink",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-unlock": {
    "name": "unlock",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-unlock-alt": {
    "name": "unlock alt",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-untappd": {
    "name": "untappd",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-upload": {
    "name": "upload",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-usb": {
    "name": "usb",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-user": {
    "name": "user",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-user-circle": {
    "name": "user circle",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-user-md": {
    "name": "user md",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-user-plus": {
    "name": "user plus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-user-secret": {
    "name": "user secret",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-user-times": {
    "name": "user times",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-users": {
    "name": "users",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-ussunnah": {
    "name": "ussunnah",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-utensil-spoon": {
    "name": "utensil spoon",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-utensils": {
    "name": "utensils",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-vaadin": {
    "name": "vaadin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-venus": {
    "name": "venus",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-venus-double": {
    "name": "venus double",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-venus-mars": {
    "name": "venus mars",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-viacoin": {
    "name": "viacoin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-viadeo": {
    "name": "viadeo",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-viadeo-square": {
    "name": "viadeo square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-viber": {
    "name": "viber",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-video": {
    "name": "video",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-vimeo": {
    "name": "vimeo",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-vimeo-square": {
    "name": "vimeo square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-vimeo-v": {
    "name": "vimeo v",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-vine": {
    "name": "vine",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-vk": {
    "name": "vk",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-vnv": {
    "name": "vnv",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-volume-down": {
    "name": "volume down",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-volume-off": {
    "name": "volume off",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-volume-up": {
    "name": "volume up",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-vuejs": {
    "name": "vuejs",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-weibo": {
    "name": "weibo",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-weixin": {
    "name": "weixin",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-whatsapp": {
    "name": "whatsapp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-whatsapp-square": {
    "name": "whatsapp square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wheelchair": {
    "name": "wheelchair",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-whmcs": {
    "name": "whmcs",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wifi": {
    "name": "wifi",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-wikipedia-w": {
    "name": "wikipedia w",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-window-close": {
    "name": "window close",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-window-maximize": {
    "name": "window maximize",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-window-minimize": {
    "name": "window minimize",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-window-restore": {
    "name": "window restore",
    "source": "fontawesome",
    "type": "far"
  },
  "fa-windows": {
    "name": "windows",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-won-sign": {
    "name": "won sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-wordpress": {
    "name": "wordpress",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wordpress-simple": {
    "name": "wordpress simple",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wpbeginner": {
    "name": "wpbeginner",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wpexplorer": {
    "name": "wpexplorer",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wpforms": {
    "name": "wpforms",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-wrench": {
    "name": "wrench",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-xbox": {
    "name": "xbox",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-xing": {
    "name": "xing",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-xing-square": {
    "name": "xing square",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-y-combinator": {
    "name": "y combinator",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-yahoo": {
    "name": "yahoo",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-yandex": {
    "name": "yandex",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-yandex-international": {
    "name": "yandex international",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-yelp": {
    "name": "yelp",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-yen-sign": {
    "name": "yen sign",
    "source": "fontawesome",
    "type": "fas"
  },
  "fa-yoast": {
    "name": "yoast",
    "source": "fontawesome",
    "type": "fab"
  },
  "fa-youtube": {
    "name": "youtube",
    "source": "fontawesome",
    "type": "fab"
  }
};

/***/ }),

/***/ "./src/controls/icon-picker/index.js":
/*!*******************************************!*\
  !*** ./src/controls/icon-picker/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DisplayIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayIcon */ "./src/controls/icon-picker/DisplayIcon.js");
/* harmony import */ var _scss_componets_icon_picker_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/componets/_icon-picker.scss */ "./src/controls/scss/componets/_icon-picker.scss");
/* harmony import */ var _icons_dashicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/dashicon */ "./src/controls/icon-picker/icons/dashicon.js");
/* harmony import */ var _icons_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/fontawesome */ "./src/controls/icon-picker/icons/fontawesome.js");







//Import Dashicon list


function useOutsideAlerter(ref, setVal) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
const IconPicker = props => {
  const {
    attrName,
    attrValue,
    setValue
  } = props;
  const [selectedIcon, setSelectedIcon] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [searchInput, setSearchInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [iconType, setIconType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("dashicon");
  const [icons, setIcons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [showPopover, setShowPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const popoverWrapperRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useOutsideAlerter(popoverWrapperRef, setShowPopover);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof _icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon === 'object' && Object.keys(_icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon).length > 0) {
      setIcons(_icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon);
    }

    //set popover anchor
    const selector = document.querySelector("#zoloIcon");
    setPopoverAnchor(selector);

    // let icons = {}
    // Object.keys(fontawesome).map((item, index) => {
    //     const splitText = fontawesome[item].split(" ");
    //     icons = {
    //         ...icons,
    //         [splitText[1]]: {
    //             name: splitText[1].replace(/-/g, " "),
    //             source: 'fontawesome',
    //             type: splitText[0]
    //         }
    //     }
    // })
    // console.log("Icons:", icons)
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //Set search text to empty
    setSearchInput("");
    switch (iconType) {
      case "fontawesome":
        if (typeof _icons_fontawesome__WEBPACK_IMPORTED_MODULE_6__.fontAwesome === 'object' && Object.keys(_icons_fontawesome__WEBPACK_IMPORTED_MODULE_6__.fontAwesome).length > 0) {
          setIcons(_icons_fontawesome__WEBPACK_IMPORTED_MODULE_6__.fontAwesome);
        }
        break;
      default:
        if (typeof _icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon === 'object' && Object.keys(_icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon).length > 0) {
          setIcons(_icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon);
        }
    }
  }, [iconType]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attrValue || typeof attrValue != 'object') {
      return;
    }
    const key = Object.keys(attrValue)[0];
    setSelectedIcon(key);
    if (attrValue[key].source) {
      console.log("save", attrValue[key].source);
      setIconType(attrValue[key].source);
    }
  }, [attrValue]);
  const searchIcon = text => {
    setSearchInput(text);

    //Filter search result
    const iconList = iconType === 'fontawesome' ? _icons_fontawesome__WEBPACK_IMPORTED_MODULE_6__.fontAwesome : _icons_dashicon__WEBPACK_IMPORTED_MODULE_5__.dashIcon;
    const filteredIcons = Object.keys(iconList).filter(item => item.includes(text)).reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: iconList[key]
      });
    }, {});

    //set Icons list from search result
    setIcons(filteredIcons);
  };
  const saveIcon = value => {
    //Save attribute value
    setValue({
      [attrName]: value
    });

    //Hide popover
    setShowPopover(false);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Select Icon"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "zoloIcon",
    onClick: () => setShowPopover(true)
  }, attrValue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DisplayIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Click to choose Icon",
    icon: attrValue
  }), !attrValue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    className: "zolo-iconpicker-placeholder",
    icon: 'insert'
  })), showPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    ref: popoverWrapperRef,
    anchor: popoverAnchor,
    className: "zolo-iconpicker-popup"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
    value: searchInput,
    onChange: text => searchIcon(text)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "zolo-parent-tab-panel",
    activeClass: "active-tab",
    onSelect: selected => setIconType(selected),
    initialTabName: iconType,
    tabs: [{
      name: 'dashicon',
      title: 'Dashicon',
      className: 'zolo-tab dashicon'
    }, {
      name: 'fontawesome',
      title: 'FontAwesome',
      className: 'zolo-tab fontawesome'
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-icon-area"
  }, Object.keys(icons).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zolo-icon-box${selectedIcon === item ? ' active' : ''}`,
    onClick: () => saveIcon({
      [item]: icons[item]
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zolo-icon-content"
  }, iconType === 'dashicon' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: item
  }), iconType === 'fontawesome' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: `${icons[item].type} ${item}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, icons[item].name))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPicker);

/***/ }),

/***/ "./src/controls/image-avatar/index.js":
/*!********************************************!*\
  !*** ./src/controls/image-avatar/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const ImageAvatar = _ref => {
  let {
    imageUrl,
    onDeleteImage
  } = _ref;
  const [hover, setHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [deleteHover, setDeleteHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const deleteButtonStyle = {
    visibility: hover ? 'visible' : 'hidden',
    backgroundColor: deleteHover ? 'white' : '#64666a',
    color: '#b4b5b7',
    position: 'absolute',
    right: 34,
    fontSize: 16,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    cursor: 'pointer'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-image-avatar-control",
    style: {
      backgroundImage: `url(${imageUrl})`
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: () => setDeleteHover(true),
    onMouseLeave: () => setDeleteHover(false),
    style: deleteButtonStyle,
    onClick: () => onDeleteImage()
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageAvatar);

/***/ }),

/***/ "./src/controls/res-alignment-control/index.js":
/*!*****************************************************!*\
  !*** ./src/controls/res-alignment-control/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_device_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./res-device-btn */ "./src/controls/res-alignment-control/res-device-btn.js");



const ResAlignmentControl = _ref => {
  let {
    label,
    controlName,
    resRequiredProps,
    alignOptions,
    alignText
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode
  } = resRequiredProps;
  const {
    [`${controlName}ZRPAlign`]: desktopAlignment,
    [`TAB${controlName}ZRPAlign`]: tabletAlignment,
    [`MOB${controlName}ZRPAlign`]: mobileAlignment
  } = attributes;
  const defaultAlign = alignOptions && Array.isArray(alignOptions) ? alignOptions : [{
    label: 'Left',
    value: 'left'
  }, {
    label: 'Center',
    value: 'center'
  }, {
    label: 'Right',
    value: 'right'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-alignment-control-wrapper"
  }, resMode == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-align-control-btn-group"
  }, defaultAlign.map((alignItem, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => setAttributes({
        [`${controlName}ZRPAlign`]: alignItem.value
      }),
      className: `rb-button ${desktopAlignment == alignItem.value ? 'active' : ''}`,
      variant: desktopAlignment === alignItem.value ? 'primary' : 'secondary'
    }, alignText ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, alignItem.label) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicon dashicons dashicons-editor-${alignItem.value == 'justify' ? alignItem.value : 'align' + alignItem.value}`
    }));
  }))), resMode == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-align-control-btn-group"
  }, defaultAlign.map((alignItem, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => setAttributes({
        [`TAB${controlName}ZRPAlign`]: alignItem.value
      }),
      className: `rb-button ${tabletAlignment == alignItem.value ? 'active' : ''}`,
      variant: tabletAlignment === alignItem.value ? 'primary' : 'secondary'
    }, alignText ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, alignItem.label) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicon dashicons dashicons-editor-${alignItem.value == 'justify' ? alignItem.value : 'align' + alignItem.value}`
    }));
  }))), resMode == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-align-control-btn-group"
  }, defaultAlign.map((alignItem, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => setAttributes({
        [`MOB${controlName}ZRPAlign`]: alignItem.value
      }),
      className: `rb-button ${mobileAlignment == alignItem.value ? 'active' : ''}`,
      variant: mobileAlignment === alignItem.value ? 'primary' : 'secondary'
    }, alignText ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "align-text"
    }, alignItem.label) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `align-icon dashicon dashicons dashicons-editor-${alignItem.value == 'justify' ? alignItem.value : 'align' + alignItem.value}`
    }));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResAlignmentControl);

/***/ }),

/***/ "./src/controls/res-alignment-control/res-device-btn.js":
/*!**************************************************************!*\
  !*** ./src/controls/res-alignment-control/res-device-btn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");


const WithResDeviceBtn = _ref => {
  let {
    label,
    resRequiredProps,
    children,
    controlName
  } = _ref;
  const {
    resMode,
    objAttributes,
    setAttributes
  } = resRequiredProps;
  const onReset = () => {
    resMode == 'Desktop' ? setAttributes({
      [`${controlName}ZRPAlign`]: objAttributes[`${controlName}ZRPAlign`].default
    }) : '';
    resMode == 'Tablet' ? setAttributes({
      [`TAB${controlName}ZRPAlign`]: objAttributes[`TAB${controlName}ZRPAlign`].default
    }) : '';
    resMode == 'Mobile' ? setAttributes({
      [`MOB${controlName}ZRPAlign`]: objAttributes[`MOB${controlName}ZRPAlign`].default
    }) : '';
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onDesktopBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onTabletBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onMobileBtnClick)({
      setAttributes
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-component-wrapper"
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: onReset
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithResDeviceBtn);

/***/ }),

/***/ "./src/controls/res-range-control/index.js":
/*!*************************************************!*\
  !*** ./src/controls/res-range-control/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _res_device_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res-device-btn */ "./src/controls/res-range-control/res-device-btn.js");




const ResRangeControl = _ref => {
  let {
    label,
    controlName,
    units,
    resRequiredProps,
    min,
    max,
    step,
    noUnits
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode
  } = resRequiredProps;
  const {
    [`${controlName}ZRPRange`]: desktopRange,
    [`TAB${controlName}ZRPRange`]: tabRange,
    [`MOB${controlName}ZRPRange`]: mobRange
  } = attributes;
  let sizeUnit;
  let TABsizeUnit;
  let MOBsizeUnit;
  let defaultUnits;
  if (!noUnits) {
    sizeUnit = attributes[`${controlName}ZRPUnit`];
    TABsizeUnit = attributes[`TAB${controlName}ZRPUnit`];
    MOBsizeUnit = attributes[`MOB${controlName}ZRPUnit`];
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-range-control-wrapper"
  }, noUnits ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, resMode == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: desktopRange,
    onChange: val => setAttributes({
      [`${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  })), resMode == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: val => setAttributes({
      [`TAB${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  })), resMode == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: val => setAttributes({
      [`MOB${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, resMode == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: sizeUnit,
    unitTypes: units || defaultUnits,
    onClick: sizeUnit => setAttributes({
      [`${controlName}ZRPUnit`]: sizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: desktopRange,
    onChange: val => setAttributes({
      [`${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  }))), resMode == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: TABsizeUnit => setAttributes({
      [`TAB${controlName}ZRPUnit`]: TABsizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: val => setAttributes({
      [`TAB${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  }))), resMode == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: MOBsizeUnit => setAttributes({
      [`MOB${controlName}ZRPUnit`]: MOBsizeUnit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_device_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: val => setAttributes({
      [`MOB${controlName}ZRPRange`]: val
    }),
    min: min || 0,
    max: max || 100,
    step: step || 1
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResRangeControl);

/***/ }),

/***/ "./src/controls/res-range-control/res-device-btn.js":
/*!**********************************************************!*\
  !*** ./src/controls/res-range-control/res-device-btn.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");


const WithResDeviceBtn = _ref => {
  let {
    label,
    resRequiredProps,
    children,
    noUnits,
    controlName
  } = _ref;
  const {
    resMode,
    objAttributes,
    setAttributes
  } = resRequiredProps;
  const onReset = () => {
    if (noUnits) {
      resMode == 'Desktop' ? setAttributes({
        [`${controlName}ZRPRange`]: objAttributes[`${controlName}ZRPRange`].default
      }) : '';
      resMode == 'Tablet' ? setAttributes({
        [`TAB${controlName}ZRPRange`]: objAttributes[`TAB${controlName}ZRPRange`].default
      }) : '';
      resMode == 'Mobile' ? setAttributes({
        [`MOB${controlName}ZRPRange`]: objAttributes[`MOB${controlName}ZRPRange`].default
      }) : '';
    } else {
      resMode == 'Desktop' ? setAttributes({
        [`${controlName}ZRPRange`]: objAttributes[`${controlName}ZRPRange`].default,
        [`${controlName}ZRPUnit`]: objAttributes[`${controlName}ZRPUnit`].default || 'px'
      }) : '';
      resMode == 'Tablet' ? setAttributes({
        [`TAB${controlName}ZRPRange`]: objAttributes[`TAB${controlName}ZRPRange`].default,
        [`TAB${controlName}ZRPUnit`]: objAttributes[`TAB${controlName}ZRPUnit`].default || 'px'
      }) : '';
      resMode == 'Mobile' ? setAttributes({
        [`MOB${controlName}ZRPRange`]: objAttributes[`MOB${controlName}ZRPRange`].default,
        [`MOB${controlName}ZRPUnit`]: objAttributes[`MOB${controlName}ZRPUnit`].default || 'px'
      }) : '';
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btns"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onDesktopBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onTabletBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onMobileBtnClick)({
      setAttributes
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-component-wrapper"
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: onReset
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithResDeviceBtn);

/***/ }),

/***/ "./src/controls/reset-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/reset-control/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const ResetControl = _ref => {
  let {
    onReset,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-control-container"
  }, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "zb-reset-button",
    onClick: onReset
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetControl);

/***/ }),

/***/ "./src/controls/textshadow-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/textshadow-control/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-control */ "./src/controls/reset-control/index.js");





function TextShadowControl(_ref) {
  let {
    controlName,
    resRequiredProps,
    enableTransition
  } = _ref;
  const {
    setAttributes,
    attributes,
    objAttributes
  } = resRequiredProps;
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hShadow`]: hShadow,
    [`${controlName}vShadow`]: vShadow,
    [`${controlName}blur`]: blur,
    [`${controlName}shadowTransition`]: shadowTransition
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Shadow', 'zolo-blocks'),
    className: "zb-textshadow-control-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "zb-textshadow-control-dropdown",
    contentClassName: "zb-popover-content-area",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-textshadow-content-wrap",
      style: {
        minWidth: '230px',
        padding: '10px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultColor: (objAttributes[`${controlName}shadowColor`] || {}).default,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zolo-blocks'),
      color: shadowColor,
      onChange: shadowColor => setAttributes({
        [`${controlName}shadowColor`]: shadowColor
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}blur`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Blur', 'zolo-blocks'),
      value: blur,
      onChange: blur => setAttributes({
        [`${controlName}blur`]: blur
      }),
      min: 0,
      max: 100
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}hShadow`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'zolo-blocks'),
      value: hShadow,
      onChange: hShadow => setAttributes({
        [`${controlName}hShadow`]: hShadow
      }),
      min: 0,
      max: 100
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [`${controlName}vShadow`]: undefined
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'zolo-blocks'),
      value: vShadow,
      onChange: vShadow => setAttributes({
        [`${controlName}vShadow`]: vShadow
      }),
      min: 0,
      max: 100
    })), enableTransition && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shadow Transition', 'zolo-blocks'),
      value: shadowTransition,
      onChange: shadowTransition => setAttributes({
        [`${controlName}shadowTransition`]: shadowTransition
      }),
      step: 0.01,
      min: 0,
      max: 5
    })))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextShadowControl);

/***/ }),

/***/ "./src/controls/textstroke-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/textstroke-control/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset-control */ "./src/controls/reset-control/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");







function TextShadowControl(_ref) {
  let {
    controlName,
    resRequiredProps
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode,
    objAttributes
  } = resRequiredProps;
  const strokeWidthAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeWidth`;
  const strokeUnitAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}strokeUnit`;
  const strokeWidthVal = attributes[strokeWidthAttr];
  const strokeUnitVal = attributes[strokeUnitAttr];
  const {
    [`${controlName}strokeColor`]: strokeColor
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Stroke', 'zolo-blocks'),
    className: "zb-textstroke-control-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "zb-textstroke-control-dropdown",
    contentClassName: "zb-popover-content-area",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-textstroke-content-wrap",
      style: {
        minWidth: '230px',
        padding: '10px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "zb-text-stroke",
      resRequiredProps: resRequiredProps
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selectedUnit: strokeUnitVal,
      unitTypes: [{
        label: 'px',
        value: 'px'
      }, {
        label: 'em',
        value: 'em'
      }, {
        label: 'rem',
        value: 'rem'
      }],
      onClick: val => setAttributes({
        [strokeUnitAttr]: val
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onReset: () => setAttributes({
        [strokeWidthAttr]: (objAttributes[strokeWidthAttr] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text Stroke", "zolo-blocks"),
      value: strokeWidthVal,
      onChange: val => setAttributes({
        [strokeWidthAttr]: val
      }),
      min: 0,
      max: strokeUnitVal === "em" || strokeUnitVal === "rem" ? 1 : 10,
      step: strokeUnitVal === "em" || strokeUnitVal === "rem" ? 0.1 : 1
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      defaultColor: (objAttributes[`${controlName}strokeColor`] || {}).default,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'zolo-blocks'),
      color: strokeColor,
      onChange: strokeColor => setAttributes({
        [`${controlName}strokeColor`]: strokeColor
      })
    })))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextShadowControl);

/***/ }),

/***/ "./src/controls/typography-control/constant.js":
/*!*****************************************************!*\
  !*** ./src/controls/typography-control/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LHLS_UNITS": () => (/* binding */ LHLS_UNITS),
/* harmony export */   "fontStyleOptions": () => (/* binding */ fontStyleOptions),
/* harmony export */   "fontWeightOptions": () => (/* binding */ fontWeightOptions),
/* harmony export */   "sizeUnitTypes": () => (/* binding */ sizeUnitTypes),
/* harmony export */   "textDecorationOptions": () => (/* binding */ textDecorationOptions),
/* harmony export */   "textTransformOptions": () => (/* binding */ textTransformOptions)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleFonts": () => (/* binding */ googleFonts)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
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

const FontFamilyPicker = _ref => {
  let {
    label,
    value,
    help,
    instanceId,
    onChange,
    className,
    ...props
  } = _ref;
  const id = `inspector-zb-font-family-${instanceId}`;
  const fonts = [{
    value: "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Default", "zolo-blocks")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times-New-Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }];

  //Add Google Fonts
  Object.keys(_googleFonts__WEBPACK_IMPORTED_MODULE_4__.googleFonts).map(font => {
    fonts.push({
      value: font,
      label: _googleFonts__WEBPACK_IMPORTED_MODULE_4__.googleFonts[font].family
    });
  });
  const onChangeValue = select => {
    console.log("🚀 ~ file: index.js:44 ~ onChangeValue ~ select", select);
    let selectedFont = select.label;
    const meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    let ba = "";
    const googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    if (typeof meta !== "undefined" && typeof meta._zb_attr !== "undefined") {
      ba = meta._zb_attr;
    }
    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(selectedFont)) {
        link.href = "https://fonts.googleapis.com/css?family=" + selectedFont.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }
      ba = ba.replace("," + selectedFont, "");
      ba = ba + "," + selectedFont;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + selectedFont.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = selectedFont;
    }

    //Save values to metadata
    wp.data.dispatch("core/editor").editPost({
      meta: {
        _zb_attr: ba
      }
    });
    onChange(selectedFont);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "zb-select-font",
    value: {
      value: (value || "").replace(/\s+/g, "-"),
      label: value
    },
    onChange: onChangeValue,
    options: fonts
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withInstanceId)(FontFamilyPicker));

/***/ }),

/***/ "./src/controls/typography-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/typography-control/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-control */ "./src/controls/reset-control/index.js");
/* harmony import */ var _unit_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-btn */ "./src/controls/unit-btn/index.js");
/* harmony import */ var _with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../with-res-device-btn */ "./src/controls/with-res-device-btn/index.js");
/* harmony import */ var _fontPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fontPicker */ "./src/controls/typography-control/fontPicker/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./src/controls/typography-control/constant.js");
/* harmony import */ var _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fontPicker/googleFonts */ "./src/controls/typography-control/fontPicker/googleFonts.js");

//wordpress dependencies




//internal dependencies control





//block constant


//googlefonts

const TypographyDropdown = _ref => {
  let {
    label,
    typoPrefixConstant,
    resRequiredProps,
    defaultFontSize
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode,
    objAttributes
  } = resRequiredProps;
  const {
    [`${typoPrefixConstant}ZRPFontFamily`]: fontFamily,
    [`${typoPrefixConstant}ZRPFontWeight`]: fontWeight,
    [`${typoPrefixConstant}ZRPFontStyle`]: fontStyle,
    [`${typoPrefixConstant}ZRPTextTransform`]: textTransform,
    [`${typoPrefixConstant}ZRPTextDecoration`]: textDecoration,
    [`${typoPrefixConstant}ZRPFontSize`]: fontSize = defaultFontSize || undefined,
    [`${typoPrefixConstant}ZRPSizeUnit`]: sizeUnit,
    [`${typoPrefixConstant}ZRPLetterSpacing`]: letterSpacing,
    [`${typoPrefixConstant}ZRPLetterSpacingUnit`]: letterSpacingUnit,
    [`${typoPrefixConstant}ZRPLineHeight`]: lineHeight,
    [`${typoPrefixConstant}ZRPLineHeightUnit`]: lineHeightUnit,
    [`TAB${typoPrefixConstant}ZRPSizeUnit`]: TABsizeUnit,
    [`TAB${typoPrefixConstant}ZRPLetterSpacingUnit`]: TABletterSpacingUnit,
    [`TAB${typoPrefixConstant}ZRPLineHeightUnit`]: TABlineHeightUnit,
    [`TAB${typoPrefixConstant}ZRPFontSize`]: TABfontSize,
    [`TAB${typoPrefixConstant}ZRPLetterSpacing`]: TABletterSpacing,
    [`TAB${typoPrefixConstant}ZRPLineHeight`]: TABlineHeight,
    [`MOB${typoPrefixConstant}ZRPSizeUnit`]: MOBsizeUnit,
    [`MOB${typoPrefixConstant}ZRPLetterSpacingUnit`]: MOBletterSpacingUnit,
    [`MOB${typoPrefixConstant}ZRPLineHeightUnit`]: MOBlineHeightUnit,
    [`MOB${typoPrefixConstant}ZRPFontSize`]: MOBfontSize,
    [`MOB${typoPrefixConstant}ZRPLetterSpacing`]: MOBletterSpacing,
    [`MOB${typoPrefixConstant}ZRPLineHeight`]: MOBlineHeight
  } = attributes;

  //Update Font Weight and Font Varient
  const [zbFontWeight, setZbFontWeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(_constant__WEBPACK_IMPORTED_MODULE_7__.fontWeightOptions);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fontFamilyKey = (fontFamily || "").replace(/\s+/g, "-");
    let googleFontWeight = _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_8__.googleFonts[fontFamilyKey] ? _fontPicker_googleFonts__WEBPACK_IMPORTED_MODULE_8__.googleFonts[fontFamilyKey].variants : [];
    let fontWeightVal = googleFontWeight.map(item => ({
      label: item,
      value: item
    }));
    const fontWeightwithDefault = [{
      label: "Default",
      value: ""
    }, ...fontWeightVal];
    setZbFontWeight(fontWeightwithDefault);
  }, [fontFamily]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(label),
    className: "zb-typography-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "zb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "zb-panel-control zb-typography-component-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fontPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "zb-fontpicker-fontfamily",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Family", "zolo-blocks"),
      value: fontFamily,
      onChange: FontFamily => {
        setAttributes({
          [`${typoPrefixConstant}ZRPFontFamily`]: FontFamily
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "zb-font-size",
      resRequiredProps: resRequiredProps
    }, resMode === "Desktop" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: sizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.sizeUnitTypes,
      onClick: sizeUnit => setAttributes({
        [`${typoPrefixConstant}ZRPSizeUnit`]: sizeUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`${typoPrefixConstant}ZRPFontSize`]: defaultFontSize || (objAttributes[`${typoPrefixConstant}ZRPFontSize`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Size", "zolo-blocks"),
      value: fontSize,
      onChange: FontSize => setAttributes({
        [`${typoPrefixConstant}ZRPFontSize`]: FontSize
      }),
      step: sizeUnit === "em" ? 0.1 : 1,
      min: 0,
      max: sizeUnit === "em" ? 10 : 200
    }))), resMode === "Tablet" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: TABsizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.sizeUnitTypes,
      onClick: TABsizeUnit => setAttributes({
        [`TAB${typoPrefixConstant}ZRPSizeUnit`]: TABsizeUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`TAB${typoPrefixConstant}ZRPFontSize`]: (objAttributes[`TAB${typoPrefixConstant}ZRPFontSize`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Size", "zolo-blocks"),
      value: TABfontSize,
      onChange: FontSize => setAttributes({
        [`TAB${typoPrefixConstant}ZRPFontSize`]: FontSize
      }),
      step: TABsizeUnit === "em" ? 0.1 : 1,
      min: 0,
      max: TABsizeUnit === "em" ? 10 : 200
    }))), resMode === "Mobile" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: MOBsizeUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.sizeUnitTypes,
      onClick: MOBsizeUnit => setAttributes({
        [`MOB${typoPrefixConstant}ZRPSizeUnit`]: MOBsizeUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`MOB${typoPrefixConstant}ZRPFontSize`]: (objAttributes[`MOB${typoPrefixConstant}ZRPFontSize`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Size", "zolo-blocks"),
      value: MOBfontSize,
      onChange: FontSize => setAttributes({
        [`MOB${typoPrefixConstant}ZRPFontSize`]: FontSize
      }),
      step: MOBsizeUnit === "em" ? 0.1 : 1,
      min: 0,
      max: MOBsizeUnit === "em" ? 10 : 200
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Weight", "zolo-blocks"),
      value: fontWeight,
      options: zbFontWeight,
      onChange: FontWeight => setAttributes({
        [`${typoPrefixConstant}ZRPFontWeight`]: FontWeight
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Style", "zolo-blocks"),
      value: fontStyle,
      options: _constant__WEBPACK_IMPORTED_MODULE_7__.fontStyleOptions,
      onChange: fontStyle => setAttributes({
        [`${typoPrefixConstant}ZRPFontStyle`]: fontStyle
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text Transform", "zolo-blocks"),
      value: textTransform,
      options: _constant__WEBPACK_IMPORTED_MODULE_7__.textTransformOptions,
      onChange: TextTransform => setAttributes({
        [`${typoPrefixConstant}ZRPTextTransform`]: TextTransform
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text Decoration", "zolo-blocks"),
      value: textDecoration,
      options: _constant__WEBPACK_IMPORTED_MODULE_7__.textDecorationOptions,
      onChange: TextDecoration => setAttributes({
        [`${typoPrefixConstant}ZRPTextDecoration`]: TextDecoration
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "zb-letter-spacing",
      resRequiredProps: resRequiredProps
    }, resMode === "Desktop" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: letterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: LetterSpacingUnit => setAttributes({
        [`${typoPrefixConstant}ZRPLetterSpacingUnit`]: LetterSpacingUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`${typoPrefixConstant}ZRPLetterSpacing`]: (objAttributes[`${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Letter Spacing", "zolo-blocks"),
      value: letterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`${typoPrefixConstant}ZRPLetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: letterSpacingUnit === "em" ? 10 : 100,
      step: letterSpacingUnit === "em" ? 0.1 : 1
    }))), resMode === "Tablet" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: TABletterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: TABletterSpacingUnit => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLetterSpacingUnit`]: TABletterSpacingUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLetterSpacing`]: (objAttributes[`TAB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Letter Spacing", "zolo-blocks"),
      value: TABletterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: TABletterSpacingUnit === "em" ? 10 : 100,
      step: TABletterSpacingUnit === "em" ? 0.1 : 1
    }))), resMode === "Mobile" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: MOBletterSpacingUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: MOBletterSpacingUnit => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLetterSpacingUnit`]: MOBletterSpacingUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLetterSpacing`]: (objAttributes[`MOB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Letter Spacing", "zolo-blocks"),
      value: MOBletterSpacing,
      onChange: LetterSpacing => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLetterSpacing`]: LetterSpacing
      }),
      min: 0,
      max: MOBletterSpacingUnit === "em" ? 10 : 100,
      step: MOBletterSpacingUnit === "em" ? 0.1 : 1
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_device_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "zb-line-height",
      resRequiredProps: resRequiredProps
    }, resMode === "Desktop" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: lineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: LineHeightUnit => setAttributes({
        [`${typoPrefixConstant}ZRPLineHeightUnit`]: LineHeightUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`${typoPrefixConstant}ZRPLineHeight`]: (objAttributes[`${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Line Height", "zolo-blocks"),
      value: lineHeight,
      onChange: LineHeight => setAttributes({
        [`${typoPrefixConstant}ZRPLineHeight`]: LineHeight
      }),
      min: 0,
      max: lineHeightUnit === "em" ? 10 : 600,
      step: lineHeightUnit === "em" ? 0.1 : 1
    }))), resMode === "Tablet" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: TABlineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: TABlineHeightUnit => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLineHeightUnit`]: TABlineHeightUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLineHeight`]: (objAttributes[`TAB${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Line Height", "zolo-blocks"),
      value: TABlineHeight,
      onChange: LineHeight => setAttributes({
        [`TAB${typoPrefixConstant}ZRPLineHeight`]: LineHeight
      }),
      min: 0,
      max: TABlineHeightUnit === "em" ? 10 : 600,
      step: TABlineHeightUnit === "em" ? 0.1 : 1
    }))), resMode === "Mobile" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unit_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedUnit: MOBlineHeightUnit,
      unitTypes: _constant__WEBPACK_IMPORTED_MODULE_7__.LHLS_UNITS,
      onClick: MOBlineHeightUnit => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLineHeightUnit`]: MOBlineHeightUnit
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onReset: () => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLineHeight`]: (objAttributes[`MOB${typoPrefixConstant}ZRPLineHeight`] || {}).default
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Line Height", "zolo-blocks"),
      value: MOBlineHeight,
      onChange: LineHeight => setAttributes({
        [`MOB${typoPrefixConstant}ZRPLineHeight`]: LineHeight
      }),
      min: 0,
      max: MOBlineHeightUnit === "em" ? 10 : 600,
      step: MOBlineHeightUnit === "em" ? 0.1 : 1
    })))))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyDropdown);

/***/ }),

/***/ "./src/controls/unit-btn/index.js":
/*!****************************************!*\
  !*** ./src/controls/unit-btn/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const UnitBtn = _ref => {
  let {
    selectedUnit,
    unitTypes,
    onClick
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: "zb-unit-control-btn-group"
  }, unitTypes.map(unit => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: `zb-unit-control-btn ${unit.value === selectedUnit && 'zb-unit-active'}`,
    isSmall: true,
    variant: unit.value === selectedUnit ? 'primary' : 'secondary',
    onClick: () => onClick(unit.value)
  }, unit.label)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitBtn);

/***/ }),

/***/ "./src/controls/with-res-device-btn/index.js":
/*!***************************************************!*\
  !*** ./src/controls/with-res-device-btn/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");


const WithResDeviceBtn = _ref => {
  let {
    label,
    resRequiredProps,
    children,
    className
  } = _ref;
  const {
    resMode,
    setAttributes
  } = resRequiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zb-res-device-btn-wrapper ${className || ' '}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btns"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onDesktopBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onTabletBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_1__.onMobileBtnClick)({
      setAttributes
    })
  })), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithResDeviceBtn);

/***/ }),

/***/ "./src/global/constants.js":
/*!*********************************!*\
  !*** ./src/global/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKGROUND_TYPES": () => (/* binding */ BACKGROUND_TYPES),
/* harmony export */   "HEADING": () => (/* binding */ HEADING),
/* harmony export */   "NORMAL_HOVER": () => (/* binding */ NORMAL_HOVER),
/* harmony export */   "SEPERATOR_STYLES": () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   "TEXT_ALIGN": () => (/* binding */ TEXT_ALIGN),
/* harmony export */   "UNIT_TYPES": () => (/* binding */ UNIT_TYPES)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



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
const TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: 'editor-alignleft'
  })),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: 'editor-aligncenter'
  })),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: 'editor-alignright'
  })),
  value: 'right'
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
}];
const SEPERATOR_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'zolo-blocks'),
  value: 'solid'
}, {
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

/***/ }),

/***/ "./src/helpers/backgroundHelpers.js":
/*!******************************************!*\
  !*** ./src/helpers/backgroundHelpers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBackgroundAttributes": () => (/* binding */ generateBackgroundAttributes),
/* harmony export */   "generateBackgroundControlStyles": () => (/* binding */ generateBackgroundControlStyles)
/* harmony export */ });
const generateBackgroundAttributes = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
      type: 'string'
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
      type: 'string'
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
      default: 0.5
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
      type: 'string'
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
      type: 'string'
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
const generateBackgroundControlStyles = _ref => {
  let {
    controlName,
    attributes,
    noOverlay = false,
    noMainBGImg = false,
    noOverlayBGImg = false,
    noTransition = false,
    forButton = false
  } = _ref;
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
        transition: all ${bg_transition || 0}s;

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
            z-index: 0;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBorderAttributies": () => (/* binding */ generateBorderAttributies),
/* harmony export */   "generateBorderStyle": () => (/* binding */ generateBorderStyle)
/* harmony export */ });
const generateBorderAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    defaultBorder
  } = defaults;
  const desktopBorder = defaultBorder ? {
    [`${controlName}Border`]: {
      type: 'object',
      default: defaultBorder
    }
  } : {
    [`${controlName}Border`]: {
      type: 'object'
    }
  };
  return {
    ...desktopBorder,
    [`TAB${controlName}Border`]: {
      type: 'object'
    },
    [`MOB${controlName}Border`]: {
      type: 'object'
    }
  };
};

//generate border style
const generateBorderStyle = _ref => {
  let {
    controlName,
    attributes
  } = _ref;
  const {
    [`${controlName}Border`]: desktopBorder,
    [`TAB${controlName}Border`]: tabBorder,
    [`MOB${controlName}Border`]: mobBorder
  } = attributes;
  const desktopBorderStyle = desktopBorder ? `
		${desktopBorder?.width && desktopBorder?.width != undefined ? 'border-width:' + desktopBorder?.width + ';' : ''}
		${desktopBorder?.color && desktopBorder?.color != undefined ? 'border-color:' + desktopBorder?.color + ';' : ''}
		${desktopBorder?.style && desktopBorder?.style != undefined ? 'border-style:' + desktopBorder?.style + ';' : ''}
		${desktopBorder?.top?.width && desktopBorder?.top?.width != undefined ? 'border-top-width:' + desktopBorder?.top?.width + ';' : ''}
		${desktopBorder?.top?.color && desktopBorder?.top?.color != undefined ? 'border-top-color:' + desktopBorder?.top?.color + ';' : ''}
		${desktopBorder?.top?.style && desktopBorder?.top?.style != undefined ? 'border-top-style:' + desktopBorder?.top?.style + ';' : ''}
		${desktopBorder?.bottom?.width && desktopBorder?.bottom?.width != undefined ? 'border-bottom-width:' + desktopBorder?.bottom?.width + ';' : ''}
		${desktopBorder?.bottom?.color && desktopBorder?.bottom?.color != undefined ? 'border-bottom-color:' + desktopBorder?.bottom?.color + ';' : ''}
		${desktopBorder?.bottom?.style && desktopBorder?.bottom?.style != undefined ? 'border-bottom-style:' + desktopBorder?.bottom?.style + ';' : ''}
		${desktopBorder?.left?.width && desktopBorder?.left?.width != undefined ? 'border-left-width:' + desktopBorder?.left?.width + ';' : ''}
		${desktopBorder?.left?.color && desktopBorder?.left?.color != undefined ? 'border-left-color:' + desktopBorder?.left?.color + ';' : ''}
		${desktopBorder?.left?.style && desktopBorder?.left?.style != undefined ? 'border-left-style:' + desktopBorder?.left?.style + ';' : ''}
		${desktopBorder?.right?.width && desktopBorder?.right?.width != undefined ? 'border-right-width:' + desktopBorder?.right?.width + ';' : ''}
		${desktopBorder?.right?.color && desktopBorder?.right?.color != undefined ? 'border-right-color:' + desktopBorder?.right?.color + ';' : ''}
		${desktopBorder?.right?.style && desktopBorder?.right?.style != undefined ? 'border-right-style:' + desktopBorder?.right?.style + ';' : ''}
	` : '';
  const tabBorderStyle = tabBorder ? `
		${tabBorder?.width && tabBorder?.width != undefined ? 'border-width:' + tabBorder?.width + ';' : ''}
		${tabBorder?.color && tabBorder?.color != undefined ? 'border-color:' + tabBorder?.color + ';' : ''}
		${tabBorder?.style && tabBorder?.style != undefined ? 'border-style:' + tabBorder?.style + ';' : ''}
		${tabBorder?.top?.width && tabBorder?.top?.width != undefined ? 'border-top-width:' + tabBorder?.top?.width + ';' : ''}
		${tabBorder?.top?.color && tabBorder?.top?.color != undefined ? 'border-top-color:' + tabBorder?.top?.color + ';' : ''}
		${tabBorder?.top?.style && tabBorder?.top?.style != undefined ? 'border-top-style:' + tabBorder?.top?.style + ';' : ''}
		${tabBorder?.bottom?.width && tabBorder?.bottom?.width != undefined ? 'border-bottom-width:' + tabBorder?.bottom?.width + ';' : ''}
		${tabBorder?.bottom?.color && tabBorder?.bottom?.color != undefined ? 'border-bottom-color:' + tabBorder?.bottom?.color + ';' : ''}
		${tabBorder?.bottom?.style && tabBorder?.bottom?.style != undefined ? 'border-bottom-style:' + tabBorder?.bottom?.style + ';' : ''}
		${tabBorder?.left?.width && tabBorder?.left?.width != undefined ? 'border-left-width:' + tabBorder?.left?.width + ';' : ''}
		${tabBorder?.left?.color && tabBorder?.left?.color != undefined ? 'border-left-color:' + tabBorder?.left?.color + ';' : ''}
		${tabBorder?.left?.style && tabBorder?.left?.style != undefined ? 'border-left-style:' + tabBorder?.left?.style + ';' : ''}
		${tabBorder?.right?.width && tabBorder?.right?.width != undefined ? 'border-right-width:' + tabBorder?.right?.width + ';' : ''}
		${tabBorder?.right?.color && tabBorder?.right?.color != undefined ? 'border-right-color:' + tabBorder?.right?.color + ';' : ''}
		${tabBorder?.right?.style && tabBorder?.right?.style != undefined ? 'border-right-style:' + tabBorder?.right?.style + ';' : ''}
	` : '';
  const mobBorderStyle = mobBorder ? `
	${mobBorder?.width && mobBorder?.width != undefined ? 'border-width:' + mobBorder?.width + ';' : ''}
	${mobBorder?.color && mobBorder?.color != undefined ? 'border-color:' + mobBorder?.color + ';' : ''}
	${mobBorder?.style && mobBorder?.style != undefined ? 'border-style:' + mobBorder?.style + ';' : ''}
	${mobBorder?.top?.width && mobBorder?.top?.width != undefined ? 'border-top-width:' + mobBorder?.top?.width + ';' : ''}
	${mobBorder?.top?.color && mobBorder?.top?.color != undefined ? 'border-top-color:' + mobBorder?.top?.color + ';' : ''}
	${mobBorder?.top?.style && mobBorder?.top?.style != undefined ? 'border-top-style:' + mobBorder?.top?.style + ';' : ''}
	${mobBorder?.bottom?.width && mobBorder?.bottom?.width != undefined ? 'border-bottom-width:' + mobBorder?.bottom?.width + ';' : ''}
	${mobBorder?.bottom?.color && mobBorder?.bottom?.color != undefined ? 'border-bottom-color:' + mobBorder?.bottom?.color + ';' : ''}
	${mobBorder?.bottom?.style && mobBorder?.bottom?.style != undefined ? 'border-bottom-style:' + mobBorder?.bottom?.style + ';' : ''}
	${mobBorder?.left?.width && mobBorder?.left?.width != undefined ? 'border-left-width:' + mobBorder?.left?.width + ';' : ''}
	${mobBorder?.left?.color && mobBorder?.left?.color != undefined ? 'border-left-color:' + mobBorder?.left?.color + ';' : ''}
	${mobBorder?.left?.style && mobBorder?.left?.style != undefined ? 'border-left-style:' + mobBorder?.left?.style + ';' : ''}
	${mobBorder?.right?.width && mobBorder?.right?.width != undefined ? 'border-right-width:' + mobBorder?.right?.width + ';' : ''}
	${mobBorder?.right?.color && mobBorder?.right?.color != undefined ? 'border-right-color:' + mobBorder?.right?.color + ';' : ''}
	${mobBorder?.right?.style && mobBorder?.right?.style != undefined ? 'border-right-style:' + mobBorder?.right?.style + ';' : ''}
` : '';
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBoxShadowAttributies": () => (/* binding */ generateBoxShadowAttributies),
/* harmony export */   "generateBoxShadowStyles": () => (/* binding */ generateBoxShadowStyles)
/* harmony export */ });
const generateBoxShadowAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    enableTransition = false
  } = defaults;
  const shdAttrs = {
    // shadow attributes  ⬇
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
    [`${controlName}inset`]: {
      type: 'boolean',
      default: false
    }
  };
  if (enableTransition) {
    return {
      ...shdAttrs
    };
  } else {
    return {
      ...shdAttrs,
      [`${controlName}shadowTransition`]: {
        type: 'number',
        default: 0.5
      }
    };
  }
};
const generateBoxShadowStyles = _ref => {
  let {
    controlName,
    attributes
  } = _ref;
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hOffset`]: hOffset = 0,
    [`${controlName}vOffset`]: vOffset = 0,
    [`${controlName}blur`]: blur = 0,
    [`${controlName}spread`]: spread = 0,
    [`${controlName}inset`]: inset,
    [`${controlName}shadowTransition`]: shadowTransition
  } = attributes;
  const boxShadowStyle = `${shadowColor ? `box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${inset ? 'inset' : ''};` : ' '}
	`;
  const transitionStyle = `box-shadow ${shadowTransition || 0}s `;
  return {
    boxShadowStyle,
    transitionStyle
  };
};

/***/ }),

/***/ "./src/helpers/dimension-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/dimension-helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateDimensionAttributes": () => (/* binding */ generateDimensionAttributes),
/* harmony export */   "generateDimensionStyle": () => (/* binding */ generateDimensionStyle)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helpers/helper.js");

const generateDimensionAttributes = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    top,
    bottom,
    left,
    right,
    isLinked = true
  } = defaults;
  const desktopTop = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(top) ? {
    [`${controlName}ZRPTop`]: {
      type: 'string',
      default: `${top}`
    }
  } : {
    [`${controlName}ZRPTop`]: {
      type: 'string'
    }
  };
  const desktopRight = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(right) ? {
    [`${controlName}ZRPRight`]: {
      type: 'string',
      default: `${right}`
    }
  } : {
    [`${controlName}ZRPRight`]: {
      type: 'string'
    }
  };
  const desktopBottom = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(bottom) ? {
    [`${controlName}ZRPBottom`]: {
      type: 'string',
      default: `${bottom}`
    }
  } : {
    [`${controlName}ZRPBottom`]: {
      type: 'string'
    }
  };
  const desktopLeft = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.hasVal)(left) ? {
    [`${controlName}ZRPLeft`]: {
      type: 'string',
      default: `${left}`
    }
  } : {
    [`${controlName}ZRPLeft`]: {
      type: 'string'
    }
  };
  return {
    ...desktopTop,
    ...desktopRight,
    ...desktopBottom,
    ...desktopLeft,
    [`TAB${controlName}ZRPTop`]: {
      type: 'string'
    },
    [`TAB${controlName}ZRPRight`]: {
      type: 'string'
    },
    [`TAB${controlName}ZRPBottom`]: {
      type: 'string'
    },
    [`TAB${controlName}ZRPLeft`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPTop`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPRight`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPBottom`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPLeft`]: {
      type: 'string'
    },
    [`${controlName}ZRPIsLinked`]: {
      type: 'string',
      default: isLinked
    },
    [`${controlName}ZRPUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`TAB${controlName}ZRPUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}ZRPUnit`]: {
      type: 'string',
      default: 'px'
    }
  };
};
const generateDimensionStyle = _ref => {
  let {
    controlName,
    styleFor,
    attributes
  } = _ref;
  const {
    [`${controlName}ZRPUnit`]: dimensionUnit,
    [`${controlName}ZRPTop`]: dimensionTop,
    [`${controlName}ZRPRight`]: dimensionRight,
    [`${controlName}ZRPBottom`]: dimensionBottom,
    [`${controlName}ZRPLeft`]: dimensionLeft,
    [`TAB${controlName}ZRPUnit`]: TABdimensionUnit,
    [`TAB${controlName}ZRPTop`]: TABdimensionTop,
    [`TAB${controlName}ZRPRight`]: TABdimensionRight,
    [`TAB${controlName}ZRPBottom`]: TABdimensionBottom,
    [`TAB${controlName}ZRPLeft`]: TABdimensionLeft,
    [`MOB${controlName}ZRPUnit`]: MOBdimensionUnit,
    [`MOB${controlName}ZRPTop`]: MOBdimensionTop,
    [`MOB${controlName}ZRPRight`]: MOBdimensionRight,
    [`MOB${controlName}ZRPBottom`]: MOBdimensionBottom,
    [`MOB${controlName}ZRPLeft`]: MOBdimensionLeft,
    [`${controlName}ZRPIsLinked`]: isLinked
  } = attributes;
  let dimensionStylesDesktop = ' ';
  let dimensionStylesTab = ' ';
  let dimensionStylesMobile = ' ';
  if (isLinked === true) {
    if (styleFor === 'border-radius') {
      dimensionStylesDesktop = `${dimensionTop ? `border-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
    	`;
      dimensionStylesTab = ` ${TABdimensionTop ? `border-radius: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}
   		 `;
      dimensionStylesMobile = `
        ${MOBdimensionTop ? `border-radius: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
    `;
    } else {
      dimensionStylesDesktop = `
        ${dimensionTop ? `${styleFor}: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
        `;
      dimensionStylesTab = `
            ${TABdimensionTop ? `${styleFor}: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}

        `;
      dimensionStylesMobile = `
            ${MOBdimensionTop ? `${styleFor}: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}

        `;
    }
  } else {
    if (styleFor === 'border-radius') {
      dimensionStylesDesktop = `
                ${dimensionTop ? `border-top-left-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTag": () => (/* binding */ DynamicTag),
/* harmony export */   "handleUniqueId": () => (/* binding */ handleUniqueId),
/* harmony export */   "hasVal": () => (/* binding */ hasVal),
/* harmony export */   "softMinifyCssStrings": () => (/* binding */ softMinifyCssStrings)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);



/**
 * this function is for creating a unique uniqueId for each block's unique className
 * @param {BLOCK_PREFIX: type "string", uniqueId: "current uniqueId", setAttributes: type function, clientId}
 */
const handleUniqueId = _ref => {
  let {
    BLOCK_PREFIX,
    uniqueId,
    setAttributes,
    clientId
  } = _ref;
  const unique_id = BLOCK_PREFIX + '-' + Math.random().toString(36).substr(2, 8);

  /**
   * Define and Generate Unique Block ID
   */
  if (!uniqueId) {
    setAttributes({
      uniqueId: unique_id
    });
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
const softMinifyCssStrings = function () {
  let cssString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
  return cssString.replace(/\s+/g, " ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, "");
};

//Dynamic Tag
const DynamicTag = props => {
  const {
    tagName,
    children,
    ...attr
  } = props;
  const Tag = tagName || 'h2';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, attr, children);
};

/***/ }),

/***/ "./src/helpers/preview-btns-helper.js":
/*!********************************************!*\
  !*** ./src/helpers/preview-btns-helper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onDesktopBtnClick": () => (/* binding */ onDesktopBtnClick),
/* harmony export */   "onMobileBtnClick": () => (/* binding */ onMobileBtnClick),
/* harmony export */   "onTabletBtnClick": () => (/* binding */ onTabletBtnClick)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const onDesktopBtnClick = _ref => {
  let {
    setAttributes
  } = _ref;
  setAttributes({
    resMode: 'Desktop'
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
};
const onTabletBtnClick = _ref2 => {
  let {
    setAttributes
  } = _ref2;
  setAttributes({
    resMode: 'Tablet'
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
};
const onMobileBtnClick = _ref3 => {
  let {
    setAttributes
  } = _ref3;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResAlignmentAttributies": () => (/* binding */ generateResAlignmentAttributies),
/* harmony export */   "generateResAlignmentStyle": () => (/* binding */ generateResAlignmentStyle)
/* harmony export */ });
const generateResAlignmentAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
const generateResAlignmentStyle = _ref => {
  let {
    controlName,
    property,
    attributes
  } = _ref;
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

/***/ "./src/helpers/res-range-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/res-range-helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResRangeAttributies": () => (/* binding */ generateResRangeAttributies),
/* harmony export */   "generateResRangeStyle": () => (/* binding */ generateResRangeStyle)
/* harmony export */ });
const generateResRangeAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    defaultRange,
    noUnits,
    defaultUnit = 'px'
  } = defaults;
  const desktopRange = defaultRange ? {
    [`${controlName}ZRPRange`]: {
      type: 'number',
      default: defaultRange
    }
  } : {
    [`${controlName}ZRPRange`]: {
      type: 'number'
    }
  };
  const units = noUnits == true ? {} : {
    [`${controlName}ZRPUnit`]: {
      type: 'string',
      default: defaultUnit
    },
    [`TAB${controlName}ZRPUnit`]: {
      type: 'string',
      default: 'px'
    },
    [`MOB${controlName}ZRPUnit`]: {
      type: 'string',
      default: 'px'
    }
  };
  return {
    ...desktopRange,
    [`TAB${controlName}ZRPRange`]: {
      type: 'string'
    },
    [`MOB${controlName}ZRPRange`]: {
      type: 'string'
    },
    ...units
  };
};
const generateResRangeStyle = _ref => {
  let {
    controlName,
    property,
    attributes
  } = _ref;
  const {
    [`${controlName}ZRPRange`]: desktopRange,
    [`TAB${controlName}ZRPRange`]: tabRange,
    [`MOB${controlName}ZRPRange`]: mobRange,
    [`${controlName}ZRPUnit`]: desktopUnit,
    [`TAB${controlName}ZRPUnit`]: tabUnit,
    [`MOB${controlName}ZRPUnit`]: mobUnit
  } = attributes;
  const desktopRangeStyle = desktopRange || desktopRange == 0 ? property + ':' + desktopRange + desktopUnit + ';' : '';
  const tabRangeStyle = tabRange || tabRange == 0 ? property + ':' + tabRange + tabUnit + ';' : '';
  const mobRangeStyle = mobRange || mobRange == 0 ? property + ':' + mobRange + mobUnit + ';' : '';
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTextShadowAttributies": () => (/* binding */ generateTextShadowAttributies),
/* harmony export */   "generateTextShadowStyles": () => (/* binding */ generateTextShadowStyles)
/* harmony export */ });
const generateTextShadowAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    enableTransition = false
  } = defaults;
  const shdAttrs = {
    // shadow attributes  ⬇
    [`${controlName}shadowColor`]: {
      type: 'string'
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
  if (enableTransition) {
    return {
      ...shdAttrs
    };
  } else {
    return {
      ...shdAttrs,
      [`${controlName}shadowTransition`]: {
        type: 'number',
        default: 0.5
      }
    };
  }
};
const generateTextShadowStyles = _ref => {
  let {
    controlName,
    attributes
  } = _ref;
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hShadow`]: hShadow = 0,
    [`${controlName}vShadow`]: vShadow = 0,
    [`${controlName}blur`]: blur = 0,
    [`${controlName}shadowTransition`]: shadowTransition
  } = attributes;
  const textShadowStyle = `${shadowColor ? `text-shadow: ${hShadow}px ${vShadow}px ${blur}px ${shadowColor};` : ' '}
	`;
  const transitionStyle = `text-shadow ${shadowTransition || 0}s `;
  return {
    textShadowStyle,
    transitionStyle
  };
};

/***/ }),

/***/ "./src/helpers/textstroke-helper.js":
/*!******************************************!*\
  !*** ./src/helpers/textstroke-helper.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTextStrokeAttributies": () => (/* binding */ generateTextStrokeAttributies),
/* harmony export */   "generateTextStrokeStyles": () => (/* binding */ generateTextStrokeStyles)
/* harmony export */ });
const generateTextStrokeAttributies = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
const generateTextStrokeStyles = _ref => {
  let {
    controlName,
    attributes
  } = _ref;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTypographyAttributes": () => (/* binding */ generateTypographyAttributes),
/* harmony export */   "generateTypographyStyles": () => (/* binding */ generateTypographyStyles)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helpers/helper.js");


// function to generate typography attributes for multiple typography control based on the array of prefix
const generateTypographyAttributes = prefixArray => {
  const typoAttrs = prefixArray.reduce((total, current) => {
    const result = {
      [`${current}ZRPFontFamily`]: {
        type: "string"
      },
      [`${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`${current}ZRPFontSize`]: {
        type: "number"
      },
      [`${current}ZRPFontWeight`]: {
        type: "string"
      },
      [`${current}ZRPFontStyle`]: {
        type: "string"
      },
      [`${current}ZRPTextTransform`]: {
        type: "string"
      },
      [`${current}ZRPTextDecoration`]: {
        type: "string"
      },
      [`${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`${current}ZRPLetterSpacing`]: {
        type: "number"
      },
      [`${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`${current}ZRPLineHeight`]: {
        type: "number"
      },
      [`TAB${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`TAB${current}ZRPFontSize`]: {
        type: "number"
      },
      [`TAB${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`TAB${current}ZRPLetterSpacing`]: {
        type: "number"
      },
      [`TAB${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`TAB${current}ZRPLineHeight`]: {
        type: "number"
      },
      [`MOB${current}ZRPSizeUnit`]: {
        type: "string",
        default: "px"
      },
      [`MOB${current}ZRPFontSize`]: {
        type: "number"
      },
      [`MOB${current}ZRPLetterSpacingUnit`]: {
        type: "string",
        default: "px"
      },
      [`MOB${current}ZRPLetterSpacing`]: {
        type: "number"
      },
      [`MOB${current}ZRPLineHeightUnit`]: {
        type: "string",
        default: "em"
      },
      [`MOB${current}ZRPLineHeight`]: {
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
const generateTypographyStyles = _ref => {
  let {
    prefixConstant,
    defaultFontSize,
    attributes
  } = _ref;
  const {
    [`${prefixConstant}ZRPFontFamily`]: fontFamily,
    [`${prefixConstant}ZRPFontWeight`]: fontWeight,
    [`${prefixConstant}ZRPFontStyle`]: fontStyle,
    [`${prefixConstant}ZRPTextTransform`]: textTransform,
    [`${prefixConstant}ZRPTextDecoration`]: textDecoration,
    [`${prefixConstant}ZRPFontSize`]: fontSize = defaultFontSize,
    [`${prefixConstant}ZRPSizeUnit`]: sizeUnit,
    [`${prefixConstant}ZRPLetterSpacing`]: letterSpacing,
    [`${prefixConstant}ZRPLetterSpacingUnit`]: letterSpacingUnit,
    [`${prefixConstant}ZRPLineHeight`]: lineHeight,
    [`${prefixConstant}ZRPLineHeightUnit`]: lineHeightUnit,
    [`TAB${prefixConstant}ZRPSizeUnit`]: TABsizeUnit,
    [`TAB${prefixConstant}ZRPLetterSpacingUnit`]: TABletterSpacingUnit,
    [`TAB${prefixConstant}ZRPLineHeightUnit`]: TABlineHeightUnit,
    [`TAB${prefixConstant}ZRPFontSize`]: TABfontSize,
    [`TAB${prefixConstant}ZRPLetterSpacing`]: TABletterSpacing,
    [`TAB${prefixConstant}ZRPLineHeight`]: TABlineHeight,
    [`MOB${prefixConstant}ZRPSizeUnit`]: MOBsizeUnit,
    [`MOB${prefixConstant}ZRPLetterSpacingUnit`]: MOBletterSpacingUnit,
    [`MOB${prefixConstant}ZRPLineHeightUnit`]: MOBlineHeightUnit,
    [`MOB${prefixConstant}ZRPFontSize`]: MOBfontSize,
    [`MOB${prefixConstant}ZRPLetterSpacing`]: MOBletterSpacing,
    [`MOB${prefixConstant}ZRPLineHeight`]: MOBlineHeight
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundControl": () => (/* reexport safe */ _controls_background_control__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "BorderControl": () => (/* reexport safe */ _controls_border_control__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "BoxShadowControl": () => (/* reexport safe */ _controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ColorControl": () => (/* reexport safe */ _controls_color_control__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "DisplayIcon": () => (/* reexport safe */ _controls_icon_picker_DisplayIcon__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "DynamicTag": () => (/* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_20__.DynamicTag),
/* harmony export */   "GradientControl": () => (/* reexport safe */ _controls_gradient_control__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "IconPicker": () => (/* reexport safe */ _controls_icon_picker__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "ImageAvatar": () => (/* reexport safe */ _controls_image_avatar__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "ResAlignmentControl": () => (/* reexport safe */ _controls_res_alignment_control__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "ResDimensionsControl": () => (/* reexport safe */ _controls_dimensions_control__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "ResRangeControl": () => (/* reexport safe */ _controls_res_range_control__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "ResetControl": () => (/* reexport safe */ _controls_reset_control__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "TextShadowControl": () => (/* reexport safe */ _controls_textshadow_control__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "TextStrokeControl": () => (/* reexport safe */ _controls_textstroke_control__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "TypographyDropdown": () => (/* reexport safe */ _controls_typography_control__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "generateBackgroundAttributes": () => (/* reexport safe */ _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_16__.generateBackgroundAttributes),
/* harmony export */   "generateBackgroundControlStyles": () => (/* reexport safe */ _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_16__.generateBackgroundControlStyles),
/* harmony export */   "generateBorderAttributies": () => (/* reexport safe */ _helpers_border_helper__WEBPACK_IMPORTED_MODULE_17__.generateBorderAttributies),
/* harmony export */   "generateBorderStyle": () => (/* reexport safe */ _helpers_border_helper__WEBPACK_IMPORTED_MODULE_17__.generateBorderStyle),
/* harmony export */   "generateBoxShadowAttributies": () => (/* reexport safe */ _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_18__.generateBoxShadowAttributies),
/* harmony export */   "generateBoxShadowStyles": () => (/* reexport safe */ _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_18__.generateBoxShadowStyles),
/* harmony export */   "generateDimensionAttributes": () => (/* reexport safe */ _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_19__.generateDimensionAttributes),
/* harmony export */   "generateDimensionStyle": () => (/* reexport safe */ _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_19__.generateDimensionStyle),
/* harmony export */   "generateResAlignmentAttributies": () => (/* reexport safe */ _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_22__.generateResAlignmentAttributies),
/* harmony export */   "generateResAlignmentStyle": () => (/* reexport safe */ _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_22__.generateResAlignmentStyle),
/* harmony export */   "generateResRangeAttributies": () => (/* reexport safe */ _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_23__.generateResRangeAttributies),
/* harmony export */   "generateResRangeStyle": () => (/* reexport safe */ _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_23__.generateResRangeStyle),
/* harmony export */   "generateTextShadowAttributies": () => (/* reexport safe */ _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_24__.generateTextShadowAttributies),
/* harmony export */   "generateTextShadowStyles": () => (/* reexport safe */ _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_24__.generateTextShadowStyles),
/* harmony export */   "generateTextStrokeAttributies": () => (/* reexport safe */ _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_25__.generateTextStrokeAttributies),
/* harmony export */   "generateTextStrokeStyles": () => (/* reexport safe */ _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_25__.generateTextStrokeStyles),
/* harmony export */   "generateTypographyAttributes": () => (/* reexport safe */ _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_26__.generateTypographyAttributes),
/* harmony export */   "generateTypographyStyles": () => (/* reexport safe */ _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_26__.generateTypographyStyles),
/* harmony export */   "handleUniqueId": () => (/* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_20__.handleUniqueId),
/* harmony export */   "hasVal": () => (/* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_20__.hasVal),
/* harmony export */   "onDesktopBtnClick": () => (/* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_21__.onDesktopBtnClick),
/* harmony export */   "onMobileBtnClick": () => (/* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_21__.onMobileBtnClick),
/* harmony export */   "onTabletBtnClick": () => (/* reexport safe */ _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_21__.onTabletBtnClick),
/* harmony export */   "softMinifyCssStrings": () => (/* reexport safe */ _helpers_helper__WEBPACK_IMPORTED_MODULE_20__.softMinifyCssStrings)
/* harmony export */ });
/* harmony import */ var _controls_scss_controls_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/scss/controls.scss */ "./src/controls/scss/controls.scss");
/* harmony import */ var _controls_background_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/background-control */ "./src/controls/background-control/index.js");
/* harmony import */ var _controls_border_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/border-control */ "./src/controls/border-control/index.js");
/* harmony import */ var _controls_boxshadow_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/boxshadow-control */ "./src/controls/boxshadow-control/index.js");
/* harmony import */ var _controls_color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _controls_dimensions_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/dimensions-control */ "./src/controls/dimensions-control/index.js");
/* harmony import */ var _controls_gradient_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/gradient-control */ "./src/controls/gradient-control/index.js");
/* harmony import */ var _controls_image_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/image-avatar */ "./src/controls/image-avatar/index.js");
/* harmony import */ var _controls_res_alignment_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/res-alignment-control */ "./src/controls/res-alignment-control/index.js");
/* harmony import */ var _controls_res_range_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/res-range-control */ "./src/controls/res-range-control/index.js");
/* harmony import */ var _controls_reset_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/reset-control */ "./src/controls/reset-control/index.js");
/* harmony import */ var _controls_textshadow_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/textshadow-control */ "./src/controls/textshadow-control/index.js");
/* harmony import */ var _controls_textstroke_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/textstroke-control */ "./src/controls/textstroke-control/index.js");
/* harmony import */ var _controls_typography_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/typography-control */ "./src/controls/typography-control/index.js");
/* harmony import */ var _controls_icon_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/icon-picker */ "./src/controls/icon-picker/index.js");
/* harmony import */ var _controls_icon_picker_DisplayIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/icon-picker/DisplayIcon */ "./src/controls/icon-picker/DisplayIcon.js");
/* harmony import */ var _helpers_backgroundHelpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/backgroundHelpers */ "./src/helpers/backgroundHelpers.js");
/* harmony import */ var _helpers_border_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/border-helper */ "./src/helpers/border-helper.js");
/* harmony import */ var _helpers_boxshadow_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/boxshadow-helper */ "./src/helpers/boxshadow-helper.js");
/* harmony import */ var _helpers_dimension_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/dimension-helper */ "./src/helpers/dimension-helper.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _helpers_preview_btns_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/preview-btns-helper */ "./src/helpers/preview-btns-helper.js");
/* harmony import */ var _helpers_res_alignment_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/res-alignment-helper */ "./src/helpers/res-alignment-helper.js");
/* harmony import */ var _helpers_res_range_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/res-range-helper */ "./src/helpers/res-range-helper.js");
/* harmony import */ var _helpers_textshadow_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/textshadow-helper */ "./src/helpers/textshadow-helper.js");
/* harmony import */ var _helpers_textstroke_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/textstroke-helper */ "./src/helpers/textstroke-helper.js");
/* harmony import */ var _helpers_typoHelpers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/typoHelpers */ "./src/helpers/typoHelpers.js");
//Import controls css


//Export Controls
















//Export Helpers












/***/ }),

/***/ "./src/controls/scss/componets/_icon-picker.scss":
/*!*******************************************************!*\
  !*** ./src/controls/scss/componets/_icon-picker.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/scss/controls.scss":
/*!*****************************************!*\
  !*** ./src/controls/scss/controls.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
/******/ 			"modules": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-bundle"], () => (__webpack_require__("./src/module-export.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	window.zoloModule = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map