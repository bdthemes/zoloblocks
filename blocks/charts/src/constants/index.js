/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

// Block Prefix
export const BLOCK_PREFIX = "slide";

// Block Settings
export const ITEMS_ALIGN = "itemsAlign";
export const STAR_SIZE = "starSize";
export const STAR_MARGIN = "starMargin";

// title
export const SUB_TITLE_ALIGNMENT = "subTitleAlignment";

export const CHART_TYPES = [
  { label: __("Line", "zolo-blocks"), value: "line" },
  { label: __("Area", "zolo-blocks"), value: "area" },
  { label: __("Bar", "zolo-blocks"), value: "bar" },
  // { label: __("Pie", "zolo-blocks"), value: "pie" },
  // { label: __("Donut", "zolo-blocks"), value: "donut" },
  // { label: __("Radial Bar", "zolo-blocks"), value: "radialBar" },
  { label: __("Scatter", "zolo-blocks"), value: "scatter" },
  { label: __("Bubble", "zolo-blocks"), value: "bubble" },
  { label: __("Heatmap", "zolo-blocks"), value: "heatmap" },
  // { label: __("Candlestick", "zolo-blocks"), value: "candlestick" },
  // { label: __("Box Plot", "zolo-blocks"), value: "boxPlot" },
  { label: __("Radar", "zolo-blocks"), value: "radar" },
  // { label: __("Polar Area", "zolo-blocks"), value: "polarArea" },
  // { label: __("Range Bar", "zolo-blocks"), value: "rangeBar" },
  // { label: __("Range Area", "zolo-blocks"), value: "rangeArea" },
  // { label: __("Treemap", "zolo-blocks"), value: "treemap" },
];

export const SOURCE_TYPES = [
  { label: __("Upload CSV", "zolo-blocks"), value: "upload" },
  { label: __("Input CSV", "zolo-blocks"), value: "input" },
];
export const THEME_TYPES = [
  { label: __("Light", "zolo-blocks"), value: "light" },
  { label: __("Dark", "zolo-blocks"), value: "dark" },
];
export const GRID_POSITION = [
  { label: __("Back", "zolo-blocks"), value: "back" },
  { label: __("Front", "zolo-blocks"), value: "front" },
];

// position
export const POSITIONS = [
  {
    label: "Top",
    value: "top",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 4L2 4"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Right",
    value: "right",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2V22"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={4}
          y={8}
          width={12}
          height={8}
          rx={1}
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Bottom",
    value: "bottom",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 20L2 20"
          stroke="#4D4D4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
          stroke="#4D4D4D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Left",
    value: "left",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2V22"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <rect
          x="7"
          y="8"
          width="12"
          height="8"
          rx="1"
          fill="none"
          stroke="#4D4D4D"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        ></rect>
      </svg>
    ),
  },
];
