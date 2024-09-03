import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'pricing-table';

export const PRESETS = [
    { label: __('Preset 1', 'zoloblocks'), value: '' },
    { label: __('Preset 2 (Pro)', 'zoloblocks'), value: 'style-2', disabled: true },
];

export const NORMAL_HOVER = [
    { label: __('Normal', 'zoloblocks'), value: 'normal' },
    { label: __('Hover', 'zoloblocks'), value: 'hover' },
];

export const RIBBON_ALIGN = [
    { label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
    { label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
    { label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
    { label: __(<Dashicon icon={'editor-justify'} />), value: 'justify' },
];

export const BTNS_POSITIONS = [
    { label: __('Middle', 'zoloblocks'), value: 'middle' },
    { label: __('Bottom', 'zoloblocks'), value: 'bottom' },
];

export const BTNS_DIRECTIONS = [
    { label: __('Column', 'zoloblocks'), value: 'column' },
    { label: __('Row', 'zoloblocks'), value: 'row' },
];

export const ALIGNENT = 'alignment';

//header style
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const TITLE_TEXT_PADDING = 'titleTextPadding';
export const TITLE_BG = 'titleBg';

export const DESC_MARGIN = 'descMargin';

//price style
export const PRICE_MARGIN = 'priceMargin';
export const ORGINAL_PRICE_MARGIN = 'orginalPriceMargin';
export const PERIOD_MARGIN = 'periodMargin';

// pro preset (2)
export const PRICE_PADDING = 'pricePadding';
export const PRICE_BG = 'priceBg';
export const PRICE_BORDER = 'priceBorder';
export const PRICE_BRADIUS = 'priceBradius';

//features style
export const FEATURE_DESC_MARGIN = 'featureDescMargin';
export const FEATURE_ICON_GAP = 'featureIconGap';
export const FEATURE_ICON_SIZE = 'featureIconSize';
export const FEATURE_MARGIN = 'featureMargin';
export const FEATURE_PADDING = 'featurePadding';
export const FEATURE_ITEM_GAP = 'featureItemGap';
export const FEATURE_ICON_PADDING = 'featureIconPadding';

// primary button style
export const BTN_MARGIN = 'btnMargin';
export const BTN_PADDING = 'btnPadding';
export const BTN_NORMAL_BG = 'btnBg';
export const BTN_HOVER_BG = 'btnHoverBg';
export const BTN_BORDER = 'btnBorder';
export const BTN_RADIUS = 'btnRadius';
export const BTN_SHADOW = 'btnShadow';
export const BTN_HOVER_SHADOW = 'btnHoverShadow';

// chat button style
export const CBTN_MARGIN = 'cbtnMargin';
export const CBTN_PADDING = 'cbtnPadding';
export const CBTN_NORMAL_BG = 'cbtnBg';
export const CBTN_HOVER_BG = 'cbtnHoverBg';
export const CBTN_BORDER = 'cbtnBorder';
export const CBTN_RADIUS = 'cbtnRadius';
export const CBTN_SHADOW = 'cbtnShadow';
export const CBTN_HOVER_SHADOW = 'cbtnHoverShadow';

//advance tab
export const WRAPPER_MARGIN = 'wrapMargin';
export const WRAPPER_PADDING = 'wrapPadding';
export const WRAPPER_BG = 'wrapBg';
export const WRAPPER_BORDER = 'wrapBorder';
export const WRAPPER_BORDER_RADIUS = 'wrapBorderRadius';
export const WRAPPER_SHADOW = 'wrapShadow';

// ribbon style
export const RIBBON_MARGIN = 'ribbonMargin';
export const RIBBON_PADDING = 'ribbonPadding';
export const RIBBON_BORDER = 'ribbonBorder';
export const RIBBON_RADIUS = 'ribbonRadius';
export const RIBBON_BG = 'ribbonBg';

// separator
export const SEPARATOR_WIDTH = 'separatorWidth';

// ribbon position options
export const RIBBON_POSITIONS = [
    { label: __('Left', 'zoloblocks'), value: 'top__left' },
    { label: __('Right', 'zoloblocks'), value: 'top__right' },
];

// buttons
export const BTNS_MARGIN = 'btnsMargin';
