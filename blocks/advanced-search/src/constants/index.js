/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

// Block Prefix
export const BLOCK_PREFIX = "advanced-search";
// Presets
export const PRESETS = [
  { label: __("Preset 1", "zoloblocks"), value: "zolo-search-1" },
  { label: __("Preset 2", "zoloblocks"), value: "zolo-search-2" },
];
export const BUTTON_TYPES = [
  { label: __("Text", "zoloblocks"), value: "text" },
  { label: __("Icon", "zoloblocks"), value: "icon" },
];
export const BUTTON_LAYOUT_TYPES = [
  {
    label: __("Style 1", "zoloblocks"),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28.9079 10.6666H21.6279C21.0248 10.6666 20.5359 11.1322 20.5359 11.7066V21.2133C20.5359 21.7877 21.0248 22.2533 21.6279 22.2533H28.9079C29.511 22.2533 29.9999 21.7877 29.9999 21.2133V11.7066C29.9999 11.1322 29.511 10.6666 28.9079 10.6666Z"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.608 10.6666H3.106C2.49517 10.6666 2 11.1382 2 11.72V21.2C2 21.7817 2.49517 22.2533 3.106 22.2533H15.608C16.2188 22.2533 16.714 21.7817 16.714 21.2V11.72C16.714 11.1382 16.2188 10.6666 15.608 10.6666Z"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.2041 16.4666H26.3321"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    value: "zolo-search-button-style-1",
  },
  {
    label: __("Style 2", "zoloblocks"),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28.558 10H3.442C2.64561 10 2 10.6149 2 11.3733V20.2133C2 20.9718 2.64561 21.5867 3.442 21.5867H28.558C29.3544 21.5867 30 20.9718 30 20.2133V11.3733C30 10.6149 29.3544 10 28.558 10Z"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.262 20.9334V10.6667"
          stroke="#4D4D4D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.9599 16.5867C24.8533 16.5867 25.5866 15.8667 25.5866 14.96C25.5866 14.0534 24.8666 13.3334 23.9599 13.3334C23.0533 13.3334 22.3333 14.0534 22.3333 14.96C22.3333 15.8667 23.0533 16.5867 23.9599 16.5867Z"
          stroke="#4D4D4D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.5735 17.5733L25.1201 16.12"
          stroke="#4D4D4D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    value: "zolo-search-button-style-2",
  },
];

export const BUTTON_BG = "buttonBg";
export const BUTTON_HOVER_BG_COLOR = "buttonHover";
export const BUTTON_PADDING = "buttonPadding";
export const BUTTON_SPACING = "buttonSpacing";
export const BUTTON_ALIGNMENT = "buttonAlignment";
export const BUTTON_BORDER = "buttonBorder";
export const BUTTON_BORDER_RADIUS = "buttonBorderRadius";
export const BUTTON_BOX_SHADOW = "buttonBoxShadow";
export const BUTTON_HOVER_BOX_SHADOW = "buttonHoverBoxShadow";

export const FIELD_BOX_SHADOW = "fieldBoxShadow";
export const FIELD_FOCUS_BOX_SHADOW = "fieldHoverBoxShadow";

/**
 * Button Icon
 */

export const ICON_SIZE = "iconSize";
export const BUTTON_SIZE = "buttonSize";
export const FOCUS_BORDER_WIDTH = "focusBorderWidth";

// search label

export const LABEL_BORDER = 'labelBorder'
export const LABEL_BORDER_RADIUS = 'labelBorderRadius'
export const LABEL_PADDING = 'labelPadding'
export const LABEL_BG = 'labelBg'
export const LABEL_SPACING = 'labelSpacing'
export const LABEL_HOVER_BG_COLOR = 'labelHoverBgColor'

/**
 * Presets Styles
 */


export const INPUT_BORDER = 'inputBorder'
export const INPUT_BORDER_RADIUS = 'inputBorderRadius'
export const INPUT_PADDING = 'inputPadding'
export const INPUT_BG = 'inputBg'





