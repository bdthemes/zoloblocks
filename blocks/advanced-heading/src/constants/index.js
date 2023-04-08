import { Dashicon } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-advanced-heading';

//settings tab
export const STYLES = [
  { label: __('Default', 'zolo-blocks'), value: 'style-0' },
  { label: __('Style 1', 'zolo-blocks'), value: 'style-1' },
  { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
  { label: __('Style 3', 'zolo-blocks'), value: 'style-3' },
  { label: __('Style 4', 'zolo-blocks'), value: 'style-4' },
  { label: __('Style 5', 'zolo-blocks'), value: 'style-5' },
  { label: __('Style 6', 'zolo-blocks'), value: 'style-6' },
  { label: __('Style 7', 'zolo-blocks'), value: 'style-7' },
  { label: __('Style 8', 'zolo-blocks'), value: 'style-8' },
];

export const ST_POSITION = [
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' }
];

export const HEADING_TAG = [
  { label: __("H1", "zolo-blocks"), value: "h1" },
  { label: __("H2", "zolo-blocks"), value: "h2" },
  { label: __("H3", "zolo-blocks"), value: "h3" },
  { label: __("H4", "zolo-blocks"), value: "h4" },
  { label: __("H5", "zolo-blocks"), value: "h5" },
  { label: __("H6", "zolo-blocks"), value: "h6" },
  { label: __("Div", "zolo-blocks"), value: "div" },
  { label: __("P", "zolo-blocks"), value: "p" },
  { label: __("Span", "zolo-blocks"), value: "span" },
];

export const TEXT_ALIGN = [
  { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
  { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
  { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
  { label: __(<Dashicon icon={"editor-justify"} />), value: "justify" }
];

export const TPT_HIDE = [
  { label: 'Nothing', value: 'nothing' },
  { label: 'Tablet and Mobile', value: 'tab-mob' },
  { label: 'Mobile', value: 'mob' }
];

export const TPT_ROTATE_ORIGIN = [
  { label: 'Default', value: '' },
  { label: 'Top Left', value: 'top-left' },
  { label: 'Top Center', value: 'top-center' },
  { label: 'Top Right', value: 'top-right' },
  { label: 'Center', value: 'center' },
  { label: 'Center Left', value: 'center-left' },
  { label: 'Center Right', value: 'center-right' },
  { label: 'Bottom Left', value: 'bottom-left' },
  { label: 'Bottom Center', value: 'bottom-center' },
  { label: 'Bottom Right', value: 'bottom-right' }
];

export const TPT_ALIGNMENT = 'tpAlign'
//style tab
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_SHADOW = 'titleShadow';

export const SUBTITLE_MARGIN = 'subTitleMargin';
export const SEPARATOR_WIDTH = 'separatorWidth';
export const SEPARATOR_SPACING = 'separatorSpacing';
export const SEPARATOR_HEIGHT = 'separatorHeight';
export const TPT_MARGIN = 'TPTMargin';
export const TPT_BORDER = 'TPTBorder';
export const TPT_BORDER_RADIUS = 'TPTBorderRadius';
export const TPT_PADDING = 'TPTPadding';
export const TPT_SHADOW = 'TPTShadow';

//advance tab
export const WRAPPER_MARGIN = 'wrapMargin';
export const WRAPPER_PADDING = 'wrapPadding';
export const WRAPPER_BG = 'wrapBg';
export const WRAPPER_BORDER = 'wrapBorder';
export const WRAPPER_SHADOW = 'wrapShadow';

