import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'pricing-table';
export const NORMAL_HOVER = [
    { label: __('Normal', 'zolo-blocks'), value: 'normal' },
    { label: __('Hover', 'zolo-blocks'), value: 'hover' },
];

//settings tab
export const STYLES = [
    { label: __('Default', 'zolo-blocks'), value: 'style-1' },
    { label: __('Style 2', 'zolo-blocks'), value: 'style-2' },
];

export const TITLE_TAG = [
    { label: __('H1', 'zolo-blocks'), value: 'h1' },
    { label: __('H2', 'zolo-blocks'), value: 'h2' },
    { label: __('H3', 'zolo-blocks'), value: 'h3' },
    { label: __('H4', 'zolo-blocks'), value: 'h4' },
    { label: __('H5', 'zolo-blocks'), value: 'h5' },
    { label: __('H6', 'zolo-blocks'), value: 'h6' },
    { label: __('Div', 'zolo-blocks'), value: 'div' },
    { label: __('P', 'zolo-blocks'), value: 'p' },
    { label: __('Span', 'zolo-blocks'), value: 'span' },
];

export const RIBBON_ALIGN = [
    { label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
    { label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
    { label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
    { label: __(<Dashicon icon={'editor-justify'} />), value: 'justify' },
];

export const FEATURE_ALIGN = 'featureAlign';

//header style
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_BORDER = 'titleBorder';
export const TITLE_BORDER_RADIUS = 'titleBorderRadius';
export const TITLE_PADDING = 'titlePadding';
export const TITLE_TEXT_SHADOW = 'titleTextShadow';
export const DESC_MARGIN = 'descMargin';

//price style
export const PRICE_MARGIN = 'priceMargin';
export const ORGINAL_PRICE_MARGIN = 'orginalPriceMargin';
export const PERIOD_MARGIN = 'periodMargin';

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
export const WRAPPER_SHADOW = 'wrapShadow';

// ribbon style
export const RIBBON_MARGIN = 'ribbonMargin';
export const RIBBON_PADDING = 'ribbonPadding';
export const RIBBON_BORDER = 'ribbonBorder';
export const RIBBON_RADIUS = 'ribbonRadius';
export const RIBBON_BG = 'ribbonBg';
