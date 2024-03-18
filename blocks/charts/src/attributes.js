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
  apexChartOptions: {
    type: "object",
    default: {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
    },
  },
};

export default attributes;
