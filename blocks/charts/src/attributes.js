/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

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
  ...generateResAlignmentAttributies(ITEMS_ALIGN),
  ...generateResRangeAttributies(STAR_SIZE),
  ...generateResRangeAttributies(TITLE_GAP),
  ...generateTypographyAttributes(Object.values(typographyObjs)),
  rating: {
    type: "number",
    default: 5,
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  title: {
    type: "string",
  },
  titleTag: {
    type: "string",
    default: "p",
  },
  titleColor: {
    type: "string",
  },
  titlePosition: {
    type: "string",
    default: "top",
  },
  activeStarColor: {
    type: "string",
  },
  inactiveStarColor: {
    type: "string",
  },
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
  apexChartData:{
    type: "string",
    default: ''
  }
};

export default attributes;
