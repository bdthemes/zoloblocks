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
export const SUB_TITLE_ALIGNMENT = 'subTitleAlignment';

export const CHART_TYPES = [
    { label: __('Bar', 'zoloblocks'), value: 'bar' },
    { label: __('Area', 'zoloblocks'), value: 'area' },
    { label: __('Line', 'zoloblocks'), value: 'line' },
    { label: __('Pie', 'zoloblocks'), value: 'pie' },
    { label: __('Donut', 'zoloblocks'), value: 'donut' },
    // { label: __("Radial Bar", "zoloblocks"), value: "radialBar" },
    // { label: __("Scatter", "zoloblocks"), value: "scatter" },
    // { label: __("Bubble", "zoloblocks"), value: "bubble" },
    // { label: __("Heatmap", "zoloblocks"), value: "heatmap" },
    // { label: __("Candlestick", "zoloblocks"), value: "candlestick" },
    // { label: __("Box Plot", "zoloblocks"), value: "boxPlot" },
    // { label: __("Radar", "zoloblocks"), value: "radar" },
    // { label: __("Polar Area", "zoloblocks"), value: "polarArea" },
    // { label: __("Range Bar", "zoloblocks"), value: "rangeBar" },
    // { label: __("Range Area", "zoloblocks"), value: "rangeArea" },
    // { label: __("Treemap", "zoloblocks"), value: "treemap" },
];

export const CHART_HEIGHT = 'chartHeight';
export const CHART_BORDER = 'chartBorder';
export const CHART_BORDER_RADIUS = 'chartBorderRadius';
export const CHART_BOX_SHADOW = 'chartBoxShadow';
export const CHART_MARGIN = 'chartMargin';
export const CHART_PADDING = 'chartPadding';
export const CHART_BG_COLOR = 'chartBgColor';

export const SOURCE_TYPES = [
    { label: __('Upload CSV', 'zoloblocks'), value: 'upload' },
    { label: __('Input CSV', 'zoloblocks'), value: 'input' },
    { label: __('Google Spreadsheet (Pro)', 'zoloblocks'), value: 'google-spreadsheet', disabled: true },
];
export const THEME_TYPES = [
    { label: __('Light', 'zoloblocks'), value: 'light' },
    { label: __('Dark', 'zoloblocks'), value: 'dark' },
];
export const GRID_POSITION = [
    { label: __('Back', 'zoloblocks'), value: 'back' },
    { label: __('Front', 'zoloblocks'), value: 'front' },
];

// position
export const POSITIONS = [
    {
        label: 'Top',
        value: 'top',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4L2 4" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 8C15.5523 8 16 8.44772 16 9V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19L8 9C8 8.44771 8.44772 8 9 8L15 8Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Bottom',
        value: 'bottom',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 20L2 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15 4C15.5523 4 16 4.44772 16 5V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15L8 5C8 4.44771 8.44772 4 9 4L15 4Z"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <rect
                    x="7"
                    y="8"
                    width="12"
                    height="8"
                    rx="1"
                    fill="none"
                    stroke="#4D4D4D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                ></rect>
            </svg>
        ),
    },
];
