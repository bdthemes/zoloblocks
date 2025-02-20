import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const v1 = {
    attributes: {
        "globalConfig": {
            "type": "object",
            "default": {
                "margin": {
                    "prefix": "advBtnMargin"
                },
                "padding": {
                    "prefix": "advBtnPadding"
                },
                "background": {
                    "prefix": "advBtnBg"
                },
                "border": {
                    "prefix": "mainBorder"
                },
                "borderRadius": {
                    "prefix": "mainBorderRadius"
                },
                "boxShadow": {
                    "prefix": "mainBoxShadow"
                },
                "responsiveControls": true
            }
        },
        "containerWidth": {
            "type": "string",
            "default": "cw_none"
        },
        "variationStatus": {
            "type": "boolean",
            "default": false
        },
        "isBlockRootParent": {
            "type": "boolean",
            "default": false
        },
        "templates": {
            "type": "array",
            "default": []
        },
        "containerWidthType": {
            "type": "string",
            "default": "alignfull"
        },
        "contentWidthType": {
            "type": "string",
            "default": "alignwide" // "alignfull"
        },
        "tagName": {
            "type": "string",
            "default": "div"
        },
        "link": {
            "type": "object",
            "default": {
                "url": "#",
                "openInNewTab": false
            }
        },
        "zolo_ContainerGapGap": {
            "type": "number",
            "default": 20
        },
        "zolo_ContainerGapRowGap": {
            "type": "number"
        },
        "zolo_ContainerGapColGap": {
            "type": "number"
        },
        "zolo_TABContainerGapGap": {
            "type": "number"
        },
        "zolo_TABContainerGapRowGap": {
            "type": "number"
        },
        "zolo_TABContainerGapColGap": {
            "type": "number"
        },
        "zolo_MOBContainerGapGap": {
            "type": "number"
        },
        "zolo_MOBContainerGapRowGap": {
            "type": "number"
        },
        "zolo_MOBContainerGapColGap": {
            "type": "number"
        },
        "zolo_ContainerGapIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_ContainerGapUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABContainerGapUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBContainerGapUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_ContainerWidthRange": {
            "type": "number",
            "default": 100
        },
        "zolo_TABContainerWidthRange": {
            "type": "number"
        },
        "zolo_MOBContainerWidthRange": {
            "type": "number"
        },
        "zolo_ContainerWidthUnit": {
            "type": "string",
            "default": "%"
        },
        "zolo_TABContainerWidthUnit": {
            "type": "string"
        },
        "zolo_MOBContainerWidthUnit": {
            "type": "string"
        },
        "zolo_ContentWidthRange": {
            "type": "number",
            "default": 1200
        },
        "zolo_TABContentWidthRange": {
            "type": "number"
        },
        "zolo_MOBContentWidthRange": {
            "type": "number"
        },
        "zolo_ContentWidthUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABContentWidthUnit": {
            "type": "string"
        },
        "zolo_MOBContentWidthUnit": {
            "type": "string"
        },
        "zolo_MinHeightRange": {
            "type": "number"
        },
        "zolo_TABMinHeightRange": {
            "type": "number"
        },
        "zolo_MOBMinHeightRange": {
            "type": "number"
        },
        "zolo_MinHeightUnit": {
            "type": "string"
        },
        "zolo_TABMinHeightUnit": {
            "type": "string"
        },
        "zolo_MOBMinHeightUnit": {
            "type": "string"
        },
        "FlexDirectionZRPAlign": {
            "type": "string",
            "default": "row"
        },
        "TABFlexDirectionZRPAlign": {
            "type": "string"
        },
        "MOBFlexDirectionZRPAlign": {
            "type": "string"
        },
        "FlexAlignZRPAlign": {
            "type": "string",
            "default": "center"
        },
        "TABFlexAlignZRPAlign": {
            "type": "string"
        },
        "MOBFlexAlignZRPAlign": {
            "type": "string"
        },
        "FlexJustifyZRPAlign": {
            "type": "string",
            "default": "center"
        },
        "TABFlexJustifyZRPAlign": {
            "type": "string"
        },
        "MOBFlexJustifyZRPAlign": {
            "type": "string"
        },
        "FlexWrapZRPAlign": {
            "type": "string",
            "default": "nowrap"
        },
        "TABFlexWrapZRPAlign": {
            "type": "string"
        },
        "MOBFlexWrapZRPAlign": {
            "type": "string"
        },
        "lock": {
            "type": "object"
        },
        "metadata": {
            "type": "object"
        },
        "uniqueId": {
            "type": "string"
        },
        "preview": {
            "type": "boolean",
            "default": false
        },
        "resMode": {
            "type": "string",
            "default": "Desktop"
        },
        "parentClasses": {
            "type": "array",
            "default": []
        },
        "zoloStyles": {
            "type": "object"
        },
        "selectedPanel": {
            "type": "string",
            "default": "first"
        },
        "selectedStylePanel": {
            "type": "string",
            "default": "first"
        },
        "selectedExtraPanel": {
            "type": "string",
            "default": "first"
        },
        "selectedTab": {
            "type": "string",
            "default": "basic"
        },
        "responsiveness": {
            "type": "object",
            "default": {
                "hideDesktop": false,
                "hideTab": false,
                "hideMobile": false
            }
        },
        "customCss": {
            "type": "string",
            "default": ""
        },
        "zIndex": {
            "type": "number"
        },
        "customClass": {
            "type": "string"
        },
        "customClasses": {
            "type": "array",
            "default": []
        },
        "zoloId": {
            "type": "string"
        },
        "overflow": {
            "type": "string"
        },
        "contentWidth": {
            "type": "string"
        },
        "position": {
            "type": "object",
            "default": {
                "value": "",
                "horizontalOrientation": {
                    "direction": "left",
                    "unit": "px"
                },
                "verticalOrientation": {
                    "direction": "top",
                    "unit": "px"
                }
            }
        },
        "transformAnimationActive": {
            "type": "boolean",
            "default": false
        },
        "transformRotate3DActive": {
            "type": "boolean",
            "default": false
        },
        "transformRotate3DActiveHover": {
            "type": "boolean",
            "default": false
        },
        "scaleProportionally": {
            "type": "boolean",
            "default": false
        },
        "scaleProportionallyHover": {
            "type": "boolean",
            "default": false
        },
        "transformFlipHorizontal": {
            "type": "boolean",
            "default": false
        },
        "transformFlipVertical": {
            "type": "boolean",
            "default": false
        },
        "transformFlipHorizontalHover": {
            "type": "boolean",
            "default": false
        },
        "transformFlipVerticalHover": {
            "type": "boolean",
            "default": false
        },
        "zolo_translateXRange": {
            "type": "number"
        },
        "zolo_TABtranslateXRange": {
            "type": "number"
        },
        "zolo_MOBtranslateXRange": {
            "type": "number"
        },
        "zolo_translateXUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtranslateXUnit": {
            "type": "string"
        },
        "zolo_MOBtranslateXUnit": {
            "type": "string"
        },
        "zolo_translateYRange": {
            "type": "number"
        },
        "zolo_TABtranslateYRange": {
            "type": "number"
        },
        "zolo_MOBtranslateYRange": {
            "type": "number"
        },
        "zolo_translateYUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtranslateYUnit": {
            "type": "string"
        },
        "zolo_MOBtranslateYUnit": {
            "type": "string"
        },
        "zolo_transformRotateRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateRange": {
            "type": "number"
        },
        "zolo_transformRotateUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateUnit": {
            "type": "string"
        },
        "zolo_transformRotateXRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateXRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateXRange": {
            "type": "number"
        },
        "zolo_transformRotateXUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateXUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateXUnit": {
            "type": "string"
        },
        "zolo_transformRotateYRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateYRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateYRange": {
            "type": "number"
        },
        "zolo_transformRotateYUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateYUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateYUnit": {
            "type": "string"
        },
        "zolo_transformPerspectiveRange": {
            "type": "number",
            "default": 1000
        },
        "zolo_TABtransformPerspectiveRange": {
            "type": "number"
        },
        "zolo_MOBtransformPerspectiveRange": {
            "type": "number"
        },
        "zolo_transformPerspectiveUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtransformPerspectiveUnit": {
            "type": "string"
        },
        "zolo_MOBtransformPerspectiveUnit": {
            "type": "string"
        },
        "zolo_transformScaleRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleRange": {
            "type": "number"
        },
        "zolo_transformScaleUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleUnit": {
            "type": "string"
        },
        "zolo_transformScaleXRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleXRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleXRange": {
            "type": "number"
        },
        "zolo_transformScaleXUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleXUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleXUnit": {
            "type": "string"
        },
        "zolo_transformScaleYRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleYRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleYRange": {
            "type": "number"
        },
        "zolo_transformScaleYUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleYUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleYUnit": {
            "type": "string"
        },
        "zolo_transformSkewXRange": {
            "type": "number"
        },
        "zolo_TABtransformSkewXRange": {
            "type": "number"
        },
        "zolo_MOBtransformSkewXRange": {
            "type": "number"
        },
        "zolo_transformSkewXUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformSkewXUnit": {
            "type": "string"
        },
        "zolo_MOBtransformSkewXUnit": {
            "type": "string"
        },
        "zolo_transformSkewYRange": {
            "type": "number"
        },
        "zolo_TABtransformSkewYRange": {
            "type": "number"
        },
        "zolo_MOBtransformSkewYRange": {
            "type": "number"
        },
        "zolo_transformSkewYUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformSkewYUnit": {
            "type": "string"
        },
        "zolo_MOBtransformSkewYUnit": {
            "type": "string"
        },
        "zolo_translateXHoverRange": {
            "type": "number"
        },
        "zolo_TABtranslateXHoverRange": {
            "type": "number"
        },
        "zolo_MOBtranslateXHoverRange": {
            "type": "number"
        },
        "zolo_translateXHoverUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtranslateXHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtranslateXHoverUnit": {
            "type": "string"
        },
        "zolo_translateYHoverRange": {
            "type": "number"
        },
        "zolo_TABtranslateYHoverRange": {
            "type": "number"
        },
        "zolo_MOBtranslateYHoverRange": {
            "type": "number"
        },
        "zolo_translateYHoverUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtranslateYHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtranslateYHoverUnit": {
            "type": "string"
        },
        "zolo_transformRotateHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateHoverRange": {
            "type": "number"
        },
        "zolo_transformRotateHoverUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateHoverUnit": {
            "type": "string"
        },
        "zolo_transformRotateXHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateXHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateXHoverRange": {
            "type": "number"
        },
        "zolo_transformRotateXHoverUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateXHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateXHoverUnit": {
            "type": "string"
        },
        "zolo_transformRotateYHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformRotateYHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformRotateYHoverRange": {
            "type": "number"
        },
        "zolo_transformRotateYHoverUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformRotateYHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformRotateYHoverUnit": {
            "type": "string"
        },
        "zolo_transformPerspectiveHoverRange": {
            "type": "number",
            "default": 1000
        },
        "zolo_TABtransformPerspectiveHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformPerspectiveHoverRange": {
            "type": "number"
        },
        "zolo_transformPerspectiveHoverUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtransformPerspectiveHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformPerspectiveHoverUnit": {
            "type": "string"
        },
        "zolo_transformScaleHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleHoverRange": {
            "type": "number"
        },
        "zolo_transformScaleHoverUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleHoverUnit": {
            "type": "string"
        },
        "zolo_transformScaleXHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleXHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleXHoverRange": {
            "type": "number"
        },
        "zolo_transformScaleXHoverUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleXHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleXHoverUnit": {
            "type": "string"
        },
        "zolo_transformScaleYHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformScaleYHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformScaleYHoverRange": {
            "type": "number"
        },
        "zolo_transformScaleYHoverUnit": {
            "type": "string"
        },
        "zolo_TABtransformScaleYHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformScaleYHoverUnit": {
            "type": "string"
        },
        "zolo_transformSkewXHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformSkewXHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformSkewXHoverRange": {
            "type": "number"
        },
        "zolo_transformSkewXHoverUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformSkewXHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformSkewXHoverUnit": {
            "type": "string"
        },
        "zolo_transformSkewYHoverRange": {
            "type": "number"
        },
        "zolo_TABtransformSkewYHoverRange": {
            "type": "number"
        },
        "zolo_MOBtransformSkewYHoverRange": {
            "type": "number"
        },
        "zolo_transformSkewYHoverUnit": {
            "type": "string",
            "default": "deg"
        },
        "zolo_TABtransformSkewYHoverUnit": {
            "type": "string"
        },
        "zolo_MOBtransformSkewYHoverUnit": {
            "type": "string"
        },
        "zolo_transitionDurationRange": {
            "type": "number"
        },
        "zolo_TABtransitionDurationRange": {
            "type": "number"
        },
        "zolo_MOBtransitionDurationRange": {
            "type": "number"
        },
        "zolo_transitionDurationUnit": {
            "type": "string"
        },
        "zolo_TABtransitionDurationUnit": {
            "type": "string"
        },
        "zolo_MOBtransitionDurationUnit": {
            "type": "string"
        },
        "zolo_positionLeftRange": {
            "type": "number"
        },
        "zolo_TABpositionLeftRange": {
            "type": "number"
        },
        "zolo_MOBpositionLeftRange": {
            "type": "number"
        },
        "zolo_positionLeftUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABpositionLeftUnit": {
            "type": "string"
        },
        "zolo_MOBpositionLeftUnit": {
            "type": "string"
        },
        "zolo_positionRightRange": {
            "type": "number"
        },
        "zolo_TABpositionRightRange": {
            "type": "number"
        },
        "zolo_MOBpositionRightRange": {
            "type": "number"
        },
        "zolo_positionRightUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABpositionRightUnit": {
            "type": "string"
        },
        "zolo_MOBpositionRightUnit": {
            "type": "string"
        },
        "zolo_positionTopRange": {
            "type": "number"
        },
        "zolo_TABpositionTopRange": {
            "type": "number"
        },
        "zolo_MOBpositionTopRange": {
            "type": "number"
        },
        "zolo_positionTopUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABpositionTopUnit": {
            "type": "string"
        },
        "zolo_MOBpositionTopUnit": {
            "type": "string"
        },
        "zolo_positionBottomRange": {
            "type": "number"
        },
        "zolo_TABpositionBottomRange": {
            "type": "number"
        },
        "zolo_MOBpositionBottomRange": {
            "type": "number"
        },
        "zolo_positionBottomUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABpositionBottomUnit": {
            "type": "string"
        },
        "zolo_MOBpositionBottomUnit": {
            "type": "string"
        },
        "zolo_customWidthRange": {
            "type": "number"
        },
        "zolo_TABcustomWidthRange": {
            "type": "number"
        },
        "zolo_MOBcustomWidthRange": {
            "type": "number"
        },
        "zolo_customWidthUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABcustomWidthUnit": {
            "type": "string"
        },
        "zolo_MOBcustomWidthUnit": {
            "type": "string"
        },
        "widthTypeZRPSelect": {
            "type": "string",
            "default": "default"
        },
        "TABwidthTypeZRPSelect": {
            "type": "string"
        },
        "MOBwidthTypeZRPSelect": {
            "type": "string"
        },
        "transformOriginXHoverZRPAlign": {
            "type": "string"
        },
        "TABtransformOriginXHoverZRPAlign": {
            "type": "string"
        },
        "MOBtransformOriginXHoverZRPAlign": {
            "type": "string"
        },
        "transformOriginYHoverZRPAlign": {
            "type": "string"
        },
        "TABtransformOriginYHoverZRPAlign": {
            "type": "string"
        },
        "MOBtransformOriginYHoverZRPAlign": {
            "type": "string"
        },
        "zolo_advBtnMarginTop": {
            "type": "string"
        },
        "zolo_advBtnMarginRight": {
            "type": "string"
        },
        "zolo_advBtnMarginBottom": {
            "type": "string"
        },
        "zolo_advBtnMarginLeft": {
            "type": "string"
        },
        "zolo_TABadvBtnMarginTop": {
            "type": "string"
        },
        "zolo_TABadvBtnMarginRight": {
            "type": "string"
        },
        "zolo_TABadvBtnMarginBottom": {
            "type": "string"
        },
        "zolo_TABadvBtnMarginLeft": {
            "type": "string"
        },
        "zolo_MOBadvBtnMarginTop": {
            "type": "string"
        },
        "zolo_MOBadvBtnMarginRight": {
            "type": "string"
        },
        "zolo_MOBadvBtnMarginBottom": {
            "type": "string"
        },
        "zolo_MOBadvBtnMarginLeft": {
            "type": "string"
        },
        "zolo_advBtnMarginIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_advBtnMarginUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABadvBtnMarginUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBadvBtnMarginUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_advBtnPaddingTop": {
            "type": "string"
        },
        "zolo_advBtnPaddingRight": {
            "type": "string"
        },
        "zolo_advBtnPaddingBottom": {
            "type": "string"
        },
        "zolo_advBtnPaddingLeft": {
            "type": "string"
        },
        "zolo_TABadvBtnPaddingTop": {
            "type": "string"
        },
        "zolo_TABadvBtnPaddingRight": {
            "type": "string"
        },
        "zolo_TABadvBtnPaddingBottom": {
            "type": "string"
        },
        "zolo_TABadvBtnPaddingLeft": {
            "type": "string"
        },
        "zolo_MOBadvBtnPaddingTop": {
            "type": "string"
        },
        "zolo_MOBadvBtnPaddingRight": {
            "type": "string"
        },
        "zolo_MOBadvBtnPaddingBottom": {
            "type": "string"
        },
        "zolo_MOBadvBtnPaddingLeft": {
            "type": "string"
        },
        "zolo_advBtnPaddingIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_advBtnPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABadvBtnPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBadvBtnPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "advBtnBgbg_hoverType": {
            "type": "string",
            "default": "normal"
        },
        "advBtnBgbackgroundType": {
            "type": "string",
            "default": "classic"
        },
        "advBtnBgbackgroundColor": {
            "type": "string"
        },
        "advBtnBgcustomGradient": {
            "type": "boolean",
            "default": false
        },
        "advBtnBggradientColor": {
            "type": "string"
        },
        "hov_advBtnBgbackgroundType": {
            "type": "string",
            "default": "classic"
        },
        "hov_advBtnBgbackgroundColor": {
            "type": "string"
        },
        "hov_advBtnBggradientColor": {
            "type": "string"
        },
        "advBtnBgbgImageURL": {
            "type": "string"
        },
        "advBtnBgbgImageID": {
            "type": "number"
        },
        "advBtnBgbgVideoURL": {
            "type": "string"
        },
        "advBtnBgbgVideoID": {
            "type": "number"
        },
        "advBtnBgbgImgAttachment": {
            "type": "string"
        },
        "advBtnBgbackgroundSize": {
            "type": "string"
        },
        "advBtnBgbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "advBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "advBtnBgbgImgPos": {
            "type": "string"
        },
        "advBtnBgbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "advBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "advBtnBgbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "advBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "advBtnBgbgImgRepeat": {
            "type": "string"
        },
        "TABadvBtnBgbackgroundSize": {
            "type": "string"
        },
        "TABadvBtnBgbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "TABadvBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "TABadvBtnBgbgImgPos": {
            "type": "string"
        },
        "TABadvBtnBgbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "TABadvBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "TABadvBtnBgbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "TABadvBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "TABadvBtnBgbgImgRepeat": {
            "type": "string"
        },
        "MOBadvBtnBgbackgroundSize": {
            "type": "string"
        },
        "MOBadvBtnBgbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "MOBadvBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "MOBadvBtnBgbgImgPos": {
            "type": "string"
        },
        "MOBadvBtnBgbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "MOBadvBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBadvBtnBgbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "MOBadvBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBadvBtnBgbgImgRepeat": {
            "type": "string"
        },
        "hov_advBtnBgbgImageURL": {
            "type": "string"
        },
        "hov_advBtnBgbgImageID": {
            "type": "number"
        },
        "hov_advBtnBgbgImgAttachment": {
            "type": "string"
        },
        "hov_advBtnBgbackgroundSize": {
            "type": "string"
        },
        "hov_advBtnBgbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "hov_advBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_advBtnBgbgImgPos": {
            "type": "string"
        },
        "hov_advBtnBgbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "hov_advBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_advBtnBgbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "hov_advBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_advBtnBgbgImgRepeat": {
            "type": "string"
        },
        "hov_TABadvBtnBgbackgroundSize": {
            "type": "string"
        },
        "hov_TABadvBtnBgbgImgCustomSize": {
            "type": "number"
        },
        "hov_TABadvBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_TABadvBtnBgbgImgPos": {
            "type": "string"
        },
        "hov_TABadvBtnBgbgImgcustomPosX": {
            "type": "number"
        },
        "hov_TABadvBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_TABadvBtnBgbgImgcustomPosY": {
            "type": "number"
        },
        "hov_TABadvBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_TABadvBtnBgbgImgRepeat": {
            "type": "string"
        },
        "hov_MOBadvBtnBgbackgroundSize": {
            "type": "string"
        },
        "hov_MOBadvBtnBgbgImgCustomSize": {
            "type": "number"
        },
        "hov_MOBadvBtnBgbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_MOBadvBtnBgbgImgPos": {
            "type": "string"
        },
        "hov_MOBadvBtnBgbgImgcustomPosX": {
            "type": "number"
        },
        "hov_MOBadvBtnBgbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_MOBadvBtnBgbgImgcustomPosY": {
            "type": "number"
        },
        "hov_MOBadvBtnBgbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_MOBadvBtnBgbgImgRepeat": {
            "type": "string"
        },
        "advBtnBgisBgOverlay": {
            "type": "boolean",
            "default": false
        },
        "advBtnBgovl_hoverType": {
            "type": "string",
            "default": "normal"
        },
        "advBtnBgoverlayType": {
            "type": "string",
            "default": "classic"
        },
        "advBtnBgoverlayColor": {
            "type": "string"
        },
        "advBtnBgoverlayGradient": {
            "type": "string",
            "default": "linear-gradient(45deg,#000000cc,#00000099)"
        },
        "advBtnBgovl_opacity": {
            "type": "number",
            "default": 1
        },
        "advBtnBgovl_blendMode": {
            "type": "string"
        },
        "advBtnBgovl_allowFilters": {
            "type": "boolean",
            "default": false
        },
        "advBtnBgovl_fltrBrightness": {
            "type": "number",
            "default": 100
        },
        "advBtnBgovl_fltrContrast": {
            "type": "number",
            "default": 100
        },
        "advBtnBgovl_fltrSaturation": {
            "type": "number",
            "default": 100
        },
        "advBtnBgovl_fltrBlur": {
            "type": "number",
            "default": 0
        },
        "advBtnBgovl_fltrHue": {
            "type": "number",
            "default": 0
        },
        "hov_advBtnBgoverlayType": {
            "type": "string",
            "default": "classic"
        },
        "hov_advBtnBgoverlayColor": {
            "type": "string"
        },
        "hov_advBtnBgoverlayGradient": {
            "type": "string"
        },
        "hov_advBtnBgovl_bgImageURL": {
            "type": "string"
        },
        "hov_advBtnBgovl_bgImageID": {
            "type": "number"
        },
        "hov_advBtnBgovl_bgImgAttachment": {
            "type": "string"
        },
        "hov_advBtnBgovl_opacity": {
            "type": "number"
        },
        "hov_advBtnBgovl_blendMode": {
            "type": "string"
        },
        "hov_advBtnBgovl_allowFilters": {
            "type": "boolean",
            "default": false
        },
        "hov_advBtnBgovl_fltrBrightness": {
            "type": "number"
        },
        "hov_advBtnBgovl_fltrContrast": {
            "type": "number"
        },
        "hov_advBtnBgovl_fltrSaturation": {
            "type": "number"
        },
        "hov_advBtnBgovl_fltrBlur": {
            "type": "number"
        },
        "hov_advBtnBgovl_fltrHue": {
            "type": "number"
        },
        "advBtnBgovl_bgImageURL": {
            "type": "string"
        },
        "advBtnBgovl_bgImageID": {
            "type": "number"
        },
        "advBtnBgovl_bgImgAttachment": {
            "type": "string"
        },
        "advBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "advBtnBgovl_bgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "advBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "advBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "advBtnBgovl_bgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "advBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "advBtnBgovl_bgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "advBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "advBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "TABadvBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "TABadvBtnBgovl_bgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "TABadvBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "TABadvBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "TABadvBtnBgovl_bgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "TABadvBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "TABadvBtnBgovl_bgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "TABadvBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "TABadvBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "MOBadvBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "MOBadvBtnBgovl_bgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "MOBadvBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "MOBadvBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "MOBadvBtnBgovl_bgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "MOBadvBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBadvBtnBgovl_bgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "MOBadvBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBadvBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "hov_advBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "hov_advBtnBgovl_bgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "hov_advBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_advBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "hov_advBtnBgovl_bgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "hov_advBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_advBtnBgovl_bgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "hov_advBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_advBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "hov_TABadvBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "hov_TABadvBtnBgovl_bgImgCustomSize": {
            "type": "number"
        },
        "hov_TABadvBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_TABadvBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "hov_TABadvBtnBgovl_bgImgcustomPosX": {
            "type": "number"
        },
        "hov_TABadvBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_TABadvBtnBgovl_bgImgcustomPosY": {
            "type": "number"
        },
        "hov_TABadvBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_TABadvBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "hov_MOBadvBtnBgovl_backgroundSize": {
            "type": "string"
        },
        "hov_MOBadvBtnBgovl_bgImgCustomSize": {
            "type": "number"
        },
        "hov_MOBadvBtnBgovl_bgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "hov_MOBadvBtnBgovl_bgImgPos": {
            "type": "string"
        },
        "hov_MOBadvBtnBgovl_bgImgcustomPosX": {
            "type": "number"
        },
        "hov_MOBadvBtnBgovl_bgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_MOBadvBtnBgovl_bgImgcustomPosY": {
            "type": "number"
        },
        "hov_MOBadvBtnBgovl_bgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "hov_MOBadvBtnBgovl_bgImgRepeat": {
            "type": "string"
        },
        "zolo_mainBorderTop": {
            "type": "string"
        },
        "zolo_mainBorderRight": {
            "type": "string"
        },
        "zolo_mainBorderBottom": {
            "type": "string"
        },
        "zolo_mainBorderLeft": {
            "type": "string"
        },
        "zolo_mainBorderBorderType": {
            "type": "string",
            "default": ""
        },
        "zolo_mainBorderBorderColor": {
            "type": "string"
        },
        "zolo_mainBorderBorderStyle": {
            "type": "string",
            "default": "dashed"
        },
        "zolo_mainBorderUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABmainBorderBorderType": {
            "type": "string"
        },
        "zolo_TABmainBorderUnit": {
            "type": "string"
        },
        "zolo_TABmainBorderTop": {
            "type": "string"
        },
        "zolo_TABmainBorderRight": {
            "type": "string"
        },
        "zolo_TABmainBorderBottom": {
            "type": "string"
        },
        "zolo_TABmainBorderLeft": {
            "type": "string"
        },
        "zolo_TABmainBorderBorderColor": {
            "type": "string"
        },
        "zolo_TABmainBorderBorderStyle": {
            "type": "string"
        },
        "zolo_MOBmainBorderBorderType": {
            "type": "string"
        },
        "zolo_MOBmainBorderUnit": {
            "type": "string"
        },
        "zolo_MOBmainBorderTop": {
            "type": "string"
        },
        "zolo_MOBmainBorderRight": {
            "type": "string"
        },
        "zolo_MOBmainBorderBottom": {
            "type": "string"
        },
        "zolo_MOBmainBorderLeft": {
            "type": "string"
        },
        "zolo_MOBmainBorderBorderColor": {
            "type": "string"
        },
        "zolo_MOBmainBorderBorderStyle": {
            "type": "string"
        },
        "zolo_mainBorderIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_mainBorderRadiusTop": {
            "type": "string"
        },
        "zolo_mainBorderRadiusRight": {
            "type": "string"
        },
        "zolo_mainBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_mainBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_TABmainBorderRadiusTop": {
            "type": "string"
        },
        "zolo_TABmainBorderRadiusRight": {
            "type": "string"
        },
        "zolo_TABmainBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_TABmainBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_MOBmainBorderRadiusTop": {
            "type": "string"
        },
        "zolo_MOBmainBorderRadiusRight": {
            "type": "string"
        },
        "zolo_MOBmainBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_MOBmainBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_mainBorderRadiusIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_mainBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABmainBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBmainBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "mainBoxShadowhOffset": {
            "type": "number",
            "default": 0
        },
        "mainBoxShadowvOffset": {
            "type": "number",
            "default": 0
        },
        "mainBoxShadowblur": {
            "type": "number",
            "default": 0
        },
        "mainBoxShadowspread": {
            "type": "number",
            "default": 0
        },
        "mainBoxShadowshadowColor": {
            "type": "string",
            "default": "#7c7c7c"
        },
        "mainBoxShadowshadowType": {
            "type": "string",
            "default": "outset"
        },
        "mainBoxShadowshadowUnit": {
            "type": "string",
            "default": "px"
        },
        "enableAdvancedVisibility": {
            "type": "boolean",
            "default": false
        },
        "visibilityType": {
            "type": "string",
            "default": "cd_show"
        },
        "displayConditions": {
            "type": "array",
            "default": []
        },
        "operator": {
            "type": "string",
            "default": "and"
        },
        "interactions": {
            "type": "array",
            "default": []
        },
        "isSticky": {
            "type": "boolean",
            "default": false
        },
        "stickyAnimation": {
            "type": "object",
            "default": {
                "position": "top",
                "offset": 0,
                "effect": "fade",
                "zIndex": 1000,
                "devices": null
            }
        },
        "parallaxAnimationActive": {
            "type": "boolean",
            "default": false
        },
        "parallaxAnimation": {
            "type": "object",
            "default": {
                "vertical": {
                    "triggerPosition": "top",
                    "viewportPosition": "center",
                    "endTriggerPosition": "bottom",
                    "endViewportPosition": "top",
                    "isStartAdvanced": false,
                    "isEndAdvanced": false,
                    "speed": -100,
                    "scrub": 2
                },
                "horizontal": {
                    "triggerPosition": "top",
                    "viewportPosition": "center",
                    "endTriggerPosition": "bottom",
                    "endViewportPosition": "top",
                    "isStartAdvanced": false,
                    "isEndAdvanced": false,
                    "speed": 0,
                    "scrub": 2
                },
                "rotate": {
                    "triggerPosition": "top",
                    "viewportPosition": "center",
                    "endTriggerPosition": "bottom",
                    "endViewportPosition": "top",
                    "isStartAdvanced": false,
                    "isEndAdvanced": false,
                    "speed": 0,
                    "scrub": 2
                },
                "scale": {
                    "triggerPosition": "top",
                    "viewportPosition": "center",
                    "endTriggerPosition": "bottom",
                    "endViewportPosition": "top",
                    "isStartAdvanced": false,
                    "isEndAdvanced": false,
                    "speed": 1,
                    "scrub": 2
                }
            }
        },
        "floatingAnimationActive": {
            "type": "boolean",
            "default": false
        },
        "floatingAnimation": {
            "type": "object",
            "default": {
                "translateX": {
                    "minValue": -100,
                    "maxValue": 100,
                    "unit": "px"
                },
                "translateY": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "px"
                },
                "translateZ": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "px"
                },
                "rotateX": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "deg"
                },
                "rotateY": {
                    "minValue": 0,
                    "maxValue": 0
                },
                "rotateZ": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "deg"
                },
                "scaleX": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": ""
                },
                "scaleY": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": ""
                },
                "scaleZ": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": ""
                },
                "skewX": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "deg"
                },
                "skewY": {
                    "minValue": 0,
                    "maxValue": 0,
                    "unit": "deg"
                },
                "opacity": {
                    "minValue": 1,
                    "maxValue": 1,
                    "unit": ""
                },
                "easing": "ease-out",
                "easingCustom": "",
                "repeat": false,
                "perspective": 1000,
                "duration": 3000,
                "delay": 0,
                "transformOrigin": "center"
            }
        },
        "entranceAnimationActive": {
            "type": "boolean",
            "default": false
        },
        "entranceAnimation": {
            "type": "object",
            "default": {
                "active3D": false,
                "repeatable": false,
                "translateX": {
                    "value": 0,
                    "unit": "px"
                },
                "translateY": {
                    "value": 50,
                    "unit": "px"
                },
                "translateZ": {
                    "value": 0,
                    "unit": "px"
                },
                "rotateX": {
                    "value": 0,
                    "unit": "deg"
                },
                "rotateY": {
                    "value": 0,
                    "unit": "deg"
                },
                "rotateZ": {
                    "value": 0,
                    "unit": "deg"
                },
                "scaleX": {
                    "value": 0,
                    "unit": ""
                },
                "scaleY": {
                    "value": 0,
                    "unit": ""
                },
                "scaleZ": {
                    "value": 0,
                    "unit": ""
                },
                "skewX": {
                    "value": 0,
                    "unit": "deg"
                },
                "skewY": {
                    "value": 0,
                    "unit": "deg"
                },
                "easing": "power4.out",
                "easingCustom": [
                    0.165,
                    0.84,
                    0.44,
                    1
                ],
                "repeat": false,
                "perspective": 1000,
                "duration": 1800,
                "delay": 180,
                "transformOrigin": "center",
                "presetAnimation": "bottomMedium",
                "transformOriginCustom": ""
            }
        },
        "zoloTilt": {
            "type": "object",
            "default": {
                "active": false
            }
        },
        "backdropFilters": {
            "type": "object",
            "default": {
                "active": false,
                "blur": 0,
                "brightness": 100,
                "contrast": 100,
                "saturate": 100,
                "hueRotate": 0,
                "grayscale": 0,
                "invert": 0,
                "sepia": 0,
                "opacity": 100
            }
        },
        "zoloBackgroundParallax": {
            "type": "object",
            "default": {
                "active": false
            }
        },
        "cssFilters": {
            "type": "object",
            "default": {
                "active": false,
                "blur": 0,
                "brightness": 100,
                "contrast": 100,
                "saturate": 100,
                "hueRotate": 0
            }
        },
        "cssFiltersHover": {
            "type": "object",
            "default": {
                "active": false,
                "blur": 0,
                "brightness": 100,
                "contrast": 100,
                "saturate": 100,
                "hueRotate": 0
            }
        },
        "zoloCursors": {
            "type": "object",
            "default": {
                "active": false,
                "source": "default",
                "imageSource": {
                    "url": "https://zoloblocks.local/wp-content/plugins/zoloblocks/assets/images/placeholder.svg",
                    "id": ""
                },
                "disabledDefault": false,
                "speed": 2,
                "textLabel": "ZoloBlocks"
            }
        },
        "zolo_dotSizeRange": {
            "type": "number"
        },
        "zolo_TABdotSizeRange": {
            "type": "number"
        },
        "zolo_MOBdotSizeRange": {
            "type": "number"
        },
        "zolo_dotSizeUnit": {
            "type": "string"
        },
        "zolo_TABdotSizeUnit": {
            "type": "string"
        },
        "zolo_MOBdotSizeUnit": {
            "type": "string"
        },
        "zolo_cursorImageSizeRange": {
            "type": "number"
        },
        "zolo_TABcursorImageSizeRange": {
            "type": "number"
        },
        "zolo_MOBcursorImageSizeRange": {
            "type": "number"
        },
        "zolo_cursorImageSizeUnit": {
            "type": "string"
        },
        "zolo_TABcursorImageSizeUnit": {
            "type": "string"
        },
        "zolo_MOBcursorImageSizeUnit": {
            "type": "string"
        },
        "zolo_iconSizeRange": {
            "type": "number"
        },
        "zolo_TABiconSizeRange": {
            "type": "number"
        },
        "zolo_MOBiconSizeRange": {
            "type": "number"
        },
        "zolo_iconSizeUnit": {
            "type": "string"
        },
        "zolo_TABiconSizeUnit": {
            "type": "string"
        },
        "zolo_MOBiconSizeUnit": {
            "type": "string"
        },
        "zolo_textBorderTop": {
            "type": "string"
        },
        "zolo_textBorderRight": {
            "type": "string"
        },
        "zolo_textBorderBottom": {
            "type": "string"
        },
        "zolo_textBorderLeft": {
            "type": "string"
        },
        "zolo_textBorderBorderType": {
            "type": "string",
            "default": ""
        },
        "zolo_textBorderBorderColor": {
            "type": "string"
        },
        "zolo_textBorderBorderStyle": {
            "type": "string",
            "default": "dashed"
        },
        "zolo_textBorderUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtextBorderBorderType": {
            "type": "string"
        },
        "zolo_TABtextBorderUnit": {
            "type": "string"
        },
        "zolo_TABtextBorderTop": {
            "type": "string"
        },
        "zolo_TABtextBorderRight": {
            "type": "string"
        },
        "zolo_TABtextBorderBottom": {
            "type": "string"
        },
        "zolo_TABtextBorderLeft": {
            "type": "string"
        },
        "zolo_TABtextBorderBorderColor": {
            "type": "string"
        },
        "zolo_TABtextBorderBorderStyle": {
            "type": "string"
        },
        "zolo_MOBtextBorderBorderType": {
            "type": "string"
        },
        "zolo_MOBtextBorderUnit": {
            "type": "string"
        },
        "zolo_MOBtextBorderTop": {
            "type": "string"
        },
        "zolo_MOBtextBorderRight": {
            "type": "string"
        },
        "zolo_MOBtextBorderBottom": {
            "type": "string"
        },
        "zolo_MOBtextBorderLeft": {
            "type": "string"
        },
        "zolo_MOBtextBorderBorderColor": {
            "type": "string"
        },
        "zolo_MOBtextBorderBorderStyle": {
            "type": "string"
        },
        "zolo_textBorderIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_textBorderRadiusTop": {
            "type": "string"
        },
        "zolo_textBorderRadiusRight": {
            "type": "string"
        },
        "zolo_textBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_textBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_TABtextBorderRadiusTop": {
            "type": "string"
        },
        "zolo_TABtextBorderRadiusRight": {
            "type": "string"
        },
        "zolo_TABtextBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_TABtextBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_MOBtextBorderRadiusTop": {
            "type": "string"
        },
        "zolo_MOBtextBorderRadiusRight": {
            "type": "string"
        },
        "zolo_MOBtextBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_MOBtextBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_textBorderRadiusIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_textBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtextBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBtextBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_textPaddingTop": {
            "type": "string"
        },
        "zolo_textPaddingRight": {
            "type": "string"
        },
        "zolo_textPaddingBottom": {
            "type": "string"
        },
        "zolo_textPaddingLeft": {
            "type": "string"
        },
        "zolo_TABtextPaddingTop": {
            "type": "string"
        },
        "zolo_TABtextPaddingRight": {
            "type": "string"
        },
        "zolo_TABtextPaddingBottom": {
            "type": "string"
        },
        "zolo_TABtextPaddingLeft": {
            "type": "string"
        },
        "zolo_MOBtextPaddingTop": {
            "type": "string"
        },
        "zolo_MOBtextPaddingRight": {
            "type": "string"
        },
        "zolo_MOBtextPaddingBottom": {
            "type": "string"
        },
        "zolo_MOBtextPaddingLeft": {
            "type": "string"
        },
        "zolo_textPaddingIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_textPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABtextPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBtextPaddingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_corsorTextTypograpyFontFamily": {
            "type": "string"
        },
        "zolo_corsorTextTypograpySizeUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_corsorTextTypograpyFontSize": {
            "type": "number"
        },
        "zolo_corsorTextTypograpyFontWeight": {
            "type": "string"
        },
        "zolo_corsorTextTypograpyFontStyle": {
            "type": "string"
        },
        "zolo_corsorTextTypograpyTextTransform": {
            "type": "string"
        },
        "zolo_corsorTextTypograpyTextDecoration": {
            "type": "string"
        },
        "zolo_corsorTextTypograpyLetterSpacingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_corsorTextTypograpyLetterSpacing": {
            "type": "number"
        },
        "zolo_corsorTextTypograpyLineHeightUnit": {
            "type": "string",
            "default": "em"
        },
        "zolo_corsorTextTypograpyLineHeight": {
            "type": "number"
        },
        "zolo_TABcorsorTextTypograpySizeUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABcorsorTextTypograpyFontSize": {
            "type": "number"
        },
        "zolo_TABcorsorTextTypograpyLetterSpacingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABcorsorTextTypograpyLetterSpacing": {
            "type": "number"
        },
        "zolo_TABcorsorTextTypograpyLineHeightUnit": {
            "type": "string",
            "default": "em"
        },
        "zolo_TABcorsorTextTypograpyLineHeight": {
            "type": "number"
        },
        "zolo_MOBcorsorTextTypograpySizeUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBcorsorTextTypograpyFontSize": {
            "type": "number"
        },
        "zolo_MOBcorsorTextTypograpyLetterSpacingUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBcorsorTextTypograpyLetterSpacing": {
            "type": "number"
        },
        "zolo_MOBcorsorTextTypograpyLineHeightUnit": {
            "type": "string",
            "default": "em"
        },
        "zolo_MOBcorsorTextTypograpyLineHeight": {
            "type": "number"
        },
        "zolo_imageBorderTop": {
            "type": "string"
        },
        "zolo_imageBorderRight": {
            "type": "string"
        },
        "zolo_imageBorderBottom": {
            "type": "string"
        },
        "zolo_imageBorderLeft": {
            "type": "string"
        },
        "zolo_imageBorderBorderType": {
            "type": "string",
            "default": ""
        },
        "zolo_imageBorderBorderColor": {
            "type": "string"
        },
        "zolo_imageBorderBorderStyle": {
            "type": "string",
            "default": "dashed"
        },
        "zolo_imageBorderUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABimageBorderBorderType": {
            "type": "string"
        },
        "zolo_TABimageBorderUnit": {
            "type": "string"
        },
        "zolo_TABimageBorderTop": {
            "type": "string"
        },
        "zolo_TABimageBorderRight": {
            "type": "string"
        },
        "zolo_TABimageBorderBottom": {
            "type": "string"
        },
        "zolo_TABimageBorderLeft": {
            "type": "string"
        },
        "zolo_TABimageBorderBorderColor": {
            "type": "string"
        },
        "zolo_TABimageBorderBorderStyle": {
            "type": "string"
        },
        "zolo_MOBimageBorderBorderType": {
            "type": "string"
        },
        "zolo_MOBimageBorderUnit": {
            "type": "string"
        },
        "zolo_MOBimageBorderTop": {
            "type": "string"
        },
        "zolo_MOBimageBorderRight": {
            "type": "string"
        },
        "zolo_MOBimageBorderBottom": {
            "type": "string"
        },
        "zolo_MOBimageBorderLeft": {
            "type": "string"
        },
        "zolo_MOBimageBorderBorderColor": {
            "type": "string"
        },
        "zolo_MOBimageBorderBorderStyle": {
            "type": "string"
        },
        "zolo_imageBorderIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_cursorImageBorderRadiusTop": {
            "type": "string"
        },
        "zolo_cursorImageBorderRadiusRight": {
            "type": "string"
        },
        "zolo_cursorImageBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_cursorImageBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_TABcursorImageBorderRadiusTop": {
            "type": "string"
        },
        "zolo_TABcursorImageBorderRadiusRight": {
            "type": "string"
        },
        "zolo_TABcursorImageBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_TABcursorImageBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_MOBcursorImageBorderRadiusTop": {
            "type": "string"
        },
        "zolo_MOBcursorImageBorderRadiusRight": {
            "type": "string"
        },
        "zolo_MOBcursorImageBorderRadiusBottom": {
            "type": "string"
        },
        "zolo_MOBcursorImageBorderRadiusLeft": {
            "type": "string"
        },
        "zolo_cursorImageBorderRadiusIsLinked": {
            "type": "boolean",
            "default": true
        },
        "zolo_cursorImageBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_TABcursorImageBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "zolo_MOBcursorImageBorderRadiusUnit": {
            "type": "string",
            "default": "px"
        },
        "textBgColorbackgroundType": {
            "type": "string",
            "default": "classic"
        },
        "textBgColorbackgroundColor": {
            "type": "string"
        },
        "textBgColorcustomGradient": {
            "type": "boolean",
            "default": false
        },
        "textBgColorcustomGradientColor": {
            "type": "string"
        },
        "textBgColorgradientColor": {
            "type": "string"
        },
        "textBgColorbgImageURL": {
            "type": "string"
        },
        "textBgColorbgImageID": {
            "type": "number"
        },
        "textBgColorbgImgAttachment": {
            "type": "string"
        },
        "textBgColorbackgroundSize": {
            "type": "string"
        },
        "textBgColorbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "textBgColorbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "textBgColorbgImgPos": {
            "type": "string"
        },
        "textBgColorbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "textBgColorbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "textBgColorbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "textBgColorbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "textBgColorbgImgRepeat": {
            "type": "string"
        },
        "TABtextBgColorbackgroundSize": {
            "type": "string"
        },
        "TABtextBgColorbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "TABtextBgColorbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "TABtextBgColorbgImgPos": {
            "type": "string"
        },
        "TABtextBgColorbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "TABtextBgColorbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "TABtextBgColorbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "TABtextBgColorbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "TABtextBgColorbgImgRepeat": {
            "type": "string"
        },
        "MOBtextBgColorbackgroundSize": {
            "type": "string"
        },
        "MOBtextBgColorbgImgCustomSize": {
            "type": "number",
            "default": 100
        },
        "MOBtextBgColorbgImgCustomSizeUnit": {
            "type": "string",
            "default": "%"
        },
        "MOBtextBgColorbgImgPos": {
            "type": "string"
        },
        "MOBtextBgColorbgImgcustomPosX": {
            "type": "number",
            "default": 0
        },
        "MOBtextBgColorbgImgcustomPosXUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBtextBgColorbgImgcustomPosY": {
            "type": "number",
            "default": 0
        },
        "MOBtextBgColorbgImgcustomPosYUnit": {
            "type": "string",
            "default": "px"
        },
        "MOBtextBgColorbgImgRepeat": {
            "type": "string"
        },
        "zoloParticles": {
            "type": "object",
            "default": {
                "particlesId": "zolo-particles",
                "active": false,
                "preset": "dust_wind",
                "particleOptions": {
                    "customOptions": {}
                },
                "zIndex": 0,
                "colors": [],
                "toggleCustomOption": false
            }
        },
        "backgroundVideo": {
            "type": "object"
        },
        "shapeDivider": {
            "type": "object",
            "default": {
                "top": {
                    "type": "none",
                    "color": "#2667ff",
                    "invert": false,
                    "flip": false,
                    "bringToFront": false,
                    "image": ""
                },
                "bottom": {
                    "type": "none",
                    "color": "#2667ff",
                    "invert": false,
                    "flip": false,
                    "bringToFront": false,
                    "image": ""
                }
            }
        },
        "zolo_topHeightShapeRange": {
            "type": "number"
        },
        "zolo_TABtopHeightShapeRange": {
            "type": "number"
        },
        "zolo_MOBtopHeightShapeRange": {
            "type": "number"
        },
        "zolo_topHeightShapeUnit": {
            "type": "string"
        },
        "zolo_TABtopHeightShapeUnit": {
            "type": "string"
        },
        "zolo_MOBtopHeightShapeUnit": {
            "type": "string"
        },
        "zolo_bottomHeightShapeRange": {
            "type": "number"
        },
        "zolo_TABbottomHeightShapeRange": {
            "type": "number"
        },
        "zolo_MOBbottomHeightShapeRange": {
            "type": "number"
        },
        "zolo_bottomHeightShapeUnit": {
            "type": "string"
        },
        "zolo_TABbottomHeightShapeUnit": {
            "type": "string"
        },
        "zolo_MOBbottomHeightShapeUnit": {
            "type": "string"
        },
        "zolo_topWidthShapeRange": {
            "type": "number"
        },
        "zolo_TABtopWidthShapeRange": {
            "type": "number"
        },
        "zolo_MOBtopWidthShapeRange": {
            "type": "number"
        },
        "zolo_topWidthShapeUnit": {
            "type": "string",
            "default": "%"
        },
        "zolo_TABtopWidthShapeUnit": {
            "type": "string"
        },
        "zolo_MOBtopWidthShapeUnit": {
            "type": "string"
        },
        "zolo_bottomWidthShapeRange": {
            "type": "number"
        },
        "zolo_TABbottomWidthShapeRange": {
            "type": "number"
        },
        "zolo_MOBbottomWidthShapeRange": {
            "type": "number"
        },
        "zolo_bottomWidthShapeUnit": {
            "type": "string",
            "default": "%"
        },
        "zolo_TABbottomWidthShapeUnit": {
            "type": "string"
        },
        "zolo_MOBbottomWidthShapeUnit": {
            "type": "string"
        },
        "postCategoryPro": {
            "type": "object",
            "default": {
                "enableMultipleBG": false,
                "multipleBG": ""
            }
        },
        "tagCloudPro": {
            "type": "object",
            "default": {
                "enableMultipleBG": false,
                "multipleBG": ""
            }
        }
    },
    migrate: (attributes) => {
        return {
            ...attributes,
            contentWidthType: 'alignwide',
        };
    },
    save: ({ attributes }) => {
        const panelProps = { attributes };

        // filter hooks for render
        const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], panelProps);
        const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], panelProps);

        const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId, containerWidth, tagName, link } = attributes;

        return (
            <DynamicTag
                tagName={tagName}
                {...useBlockProps.save({
                    className: classnames(
                        uniqueId,
                        isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                        'frontend',
                        `${containerWidth !== 'cw_none' ? containerWidth : ''}`,
                        classArrayToStr(parentClasses)
                    ),
                })}
                {...(zoloId && { id: zoloId })}
                {...(tagName === 'a' && link?.url && {
                    href: link.url,
                    ...(link.openInNewTab ? { rel: 'noreferrer noopener', target: '_blank' } : {})
                })}
            >
                {renderHookBefore && renderHookBefore}

                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">
                        <InnerBlocks.Content />
                    </div>
                ) : (
                    <>
                        <InnerBlocks.Content />
                    </>
                )}

                {renderHookAfter && renderHookAfter}
            </DynamicTag>
        );
    },
};

export default v1;