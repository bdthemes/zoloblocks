/**
 * Internal dependencies
 */
const {
  generateResRangeAttributies,
  generateTypographyAttributes,
  generateResAlignmentAttributies,
  generateNormalBGAttributes,
  generateBorderAttributies,
  generateDimensionAttributes,
  generateBoxShadowAttributies,
} = window.zoloModule;
import {
  CHART_HEIGHT,
  CHART_BG_COLOR,
  CHART_BORDER,
  CHART_BORDER_RADIUS,
  CHART_MARGIN,
  CHART_PADDING,
  CHART_BOX_SHADOW,
  SUB_TITLE_ALIGNMENT,
} from "./constants";

import PieChartAttributes from "./data/piechart";
import barChartAttributes from "./data/barchart";

import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {
  // global Attributes
  globalConfig: {
    type: "object",
    default: {
      margin: {
        prefix: "mainMargin",
      },
      padding: {
        prefix: "mainPadding",
      },
      background: {
        prefix: "mainBg",
      },
      border: {
        prefix: "mainBorder",
      },
      borderRadius: {
        prefix: "mainBorderRadius",
      },
      boxShadow: {
        prefix: "mainBoxShadow",
      },
      responsiveControls: true,
    },
  },
  // Generators
  ...generateTypographyAttributes(Object.values(typographyObjs)),
  ...generateResAlignmentAttributies({ SUB_TITLE_ALIGNMENT }),
  ...generateResRangeAttributies(CHART_HEIGHT),
  ...generateNormalBGAttributes(CHART_BG_COLOR),
  // Generators
  ...generateBorderAttributies(CHART_BORDER),
  ...generateDimensionAttributes(CHART_BORDER_RADIUS),
  ...generateDimensionAttributes(CHART_PADDING),
  ...generateDimensionAttributes(CHART_MARGIN),
  ...generateBoxShadowAttributies(CHART_BOX_SHADOW),
  chartType: {
    type: "string",
    default: "bar",
  },
  sourceType: {
    type: "string",
    default: "upload",
  },
  uploadStatus: {
    type: "boolean",
    default: false,
  },
  barChartData: {
    type: "object",
    default: barChartAttributes,
  },
  pieChartData: {
    type: "object",
    default: PieChartAttributes,
  },
  chartInputData: {
    type: "string",
    default: "",
  },

  showTitle: {
    type: "boolean",
    default: false,
  },
  titleObject: {
    type: "object",
    default: {
      text: "Zolo Block Advanced Chart",
      align: "left",
      style: {
        color: "#000000",
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: 0,
        textAlign: "left",
        textTransform: "none",
      },
    },
  },
  showSubTitle: {
    type: "boolean",
    default: false,
  },
  subTitleObject: {
    type: "object",
    default: {
      text: "Category Names as DataLabels inside bars",
      align: "center",
      style: {
        color: "#000000",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: 0,
        textAlign: "left",
        textTransform: "none",
      },
    },
  },
  showLegend: {
    type: "boolean",
    default: true,
  },
  legendObject: {
    type: "object",
    default: {
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      offsetY: 8,
      offsetX: 0,
      lebels: {
        colors: undefined,
        useSeriesColors: true,
      },
    },
  },
  showTooltip: {
    type: "boolean",
    default: true,
  },
  tooltipObject: {
    type: "object",
    default: {
      shared: false,
      intersect: false,
      enabled: true,
      followCursor: false,
      inverseOrder: false,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: "light",
    },
  },
  showGrid: {
    type: "boolean",
    default: true,
  },
  gridObject: {
    type: "object",
    default: {
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
  showGridY: {
    type: "boolean",
    default: false,
  },
  showGridX: {
    type: "boolean",
    default: true,
  },
  showDropshadow: {
    type: "boolean",
    default: false,
  },
  showToolbar: {
    type: "boolean",
    default: false,
  },
  showDownload: {
    type: "boolean",
    default: true,
  },
  showPrint: {
    type: "boolean",
    default: true,
  },
  showSelection: {
    type: "boolean",
    default: true,
  },
  showZoom: {
    type: "boolean",
    default: true,
  },
  showZoomIn: {
    type: "boolean",
    default: true,
  },
  showZoomOut: {
    type: "boolean",
    default: true,
  },
  showPanel: {
    type: "boolean",
    default: true,
  },
  showReset: {
    type: "boolean",
    default: true,
  },

  chartBackground: {
    type: "string",
    default: "#ffffff",
  },
  barChartLength: {
    type: "number",
    default: 3,
  },
  pieChartLength: {
    type: "number",
    default: 5,
  },
  pieChartColor: {
    type: "array",
    default: [],
  },
  xAxisColor: {
    type: "string",
    default: "#000000",
  },
  xAxisFontSize: {
    type: "number",
    default: 12,
  },
  yAxisColor: {
    type: "string",
    default: "#000000",
  },
  yAxisFontSize: {
    type: "number",
    default: 12,
  },
};

export default attributes;
