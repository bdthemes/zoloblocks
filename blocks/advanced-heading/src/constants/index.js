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
  { label: __('Style 9', 'zolo-blocks'), value: 'style-9' },
  { label: __('Style 10', 'zolo-blocks'), value: 'style-10' },
  { label: __('Style 11', 'zolo-blocks'), value: 'style-11' },
  { label: __('Style 12', 'zolo-blocks'), value: 'style-12' },
  { label: __('Style 13', 'zolo-blocks'), value: 'style-13' },
  { label: __('Style 14', 'zolo-blocks'), value: 'style-14' },
];

export const SEPARATOR_ALIGN = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' }
];

export const ST_POSITION = [
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' }
];

export const HEADING_ALIGNMENT = 'headingAlignment';

export const HEADING_TAG = [
  { label: __("H1", "zolo-blocks"), value: "h1" },
  { label: __("H2", "zolo-blocks"), value: "h2" },
  { label: __("H3", "zolo-blocks"), value: "h3" },
  { label: __("H4", "zolo-blocks"), value: "h4" },
  { label: __("H5", "zolo-blocks"), value: "h5" },
  { label: __("H6", "zolo-blocks"), value: "h6" },
  { label: __("P", "zolo-blocks"), value: "p" },
];
export const TEXT_ALIGN = [
  { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
  { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
  { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
  { label: __(<Dashicon icon={"editor-justify"} />), value: "justify" }
];
//style tab
export const TITLE_MARGIN = 'titleMargin';
export const SUBTITLE_MARGIN = 'subTitleMargin';
export const SEPARATOR_WIDTH = 'separatorWidth';
export const SEPARATOR_HEIGHT = 'separatorHeight';

//advance tab
export const WRAPPER_MARGIN = 'wrapMargin';
export const WRAPPER_PADDING = 'wrapPadding';
export const WRAPPER_BG = 'wrapBg';
export const WRAPPER_BORDER = 'wrapBorder';
export const WRAPPER_SHADOW = 'wrapShadow';

