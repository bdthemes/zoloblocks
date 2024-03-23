/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { SUB_TITLE_ALIGNMENT } from './constants';
import PieChartAttributes from './attributes/piechart'

import * as typographyObjs from './constants/typoPrefixConstant';

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
    chartTypes: {
    type: "string",
    default: "bar",
  },
  sourceType: {
    type: "string",
    default: "input",
  },
  uploadStatus: {
    type: "boolean",
    default: false,
  },
  apexChartOptions: {
    type: "object",
    default: {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 200, 210, 100, 49, 60, 70, 91, 125],
        },
        {
          name: "series-2",
          data: [35, 45, 50, 60, 220, 235, 120, 55, 65, 75, 96, 130],
        },
        {
          name: "series-3",
          data: [45, 55, 60, 70, 240, 255, 130, 65, 75, 85, 106, 140],
        },
      ],
    },
  },
  apexChartData: {
    type: "string",
    default: "",
  },
  pieChartData:{
  type: "object",
  default: PieChartAttributes
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
    },
  },
  showTooltip: {
    type: "boolean",
    default: true,
  },
  tooltipObject: {
    type: "object",
    default: {
      shared: true,
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
      position: "front",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
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
  showGridX: {
    type: "boolean",
    default: false,
  },
  showGridY: {
    type: "boolean",
    default: false,
  },
  showDropshadow: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
