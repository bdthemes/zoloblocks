/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'slide';

// Block Settings
export const ITEMS_ALIGN = 'itemsAlign';
export const STAR_SIZE = 'starSize';
export const STAR_MARGIN = 'starMargin';

// title
export const TITLE_GAP = 'titleGap';

export const CHART_TYPES = [
    { label: __("Line", "zolo-blocks"), value: "line" },
    { label: __("Area", "zolo-blocks"), value: "area" },
    { label: __("Bar", "zolo-blocks"), value: "bar" },
    { label: __("Pie", "zolo-blocks"), value: "pie" },
    { label: __("Donut", "zolo-blocks"), value: "donut" },
    { label: __("Radial Bar", "zolo-blocks"), value: "radialBar" },
    { label: __("Scatter", "zolo-blocks"), value: "scatter" },
    { label: __("Bubble", "zolo-blocks"), value: "bubble" },
    { label: __("Heatmap", "zolo-blocks"), value: "heatmap" },
    { label: __("Candlestick", "zolo-blocks"), value: "candlestick" },
    { label: __("Box Plot", "zolo-blocks"), value: "boxPlot" },
    { label: __("Radar", "zolo-blocks"), value: "radar" },
    { label: __("Polar Area", "zolo-blocks"), value: "polarArea" },
    { label: __("Range Bar", "zolo-blocks"), value: "rangeBar" },
    { label: __("Range Area", "zolo-blocks"), value: "rangeArea" },
    { label: __("Treemap", "zolo-blocks"), value: "treemap" },
];

export const SOURCE_TYPES = [
  { label: __("Upload CSV", "zolo-blocks"), value: "upload" },
  { label: __("Input CSV", "zolo-blocks"), value: "input" },
];