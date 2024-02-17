/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'list';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: 'zolo-list-style-1' },
    { label: __('Preset 2', 'zolo-blocks'), value: 'zolo-list-style-2' },
    { label: __('Preset 3', 'zolo-blocks'), value: 'zolo-list-style-3' },
    { label: __('Preset 4', 'zolo-blocks'), value: 'zolo-list-style-4' },
    { label: __('Preset 5', 'zolo-blocks'), value: 'zolo-list-style-5' },
    { label: __('Preset 6', 'zolo-blocks'), value: 'zolo-list-style-6' },
];

// button icon positions
export const ICON_POSITIONS = [
    {
        label: 'Left',
        value: 'left',
    },
    {
        label: 'Right',
        value: 'right',
    },
    {
        label: 'Top',
        value: 'top',
    },
    {
        label: 'Bottom',
        value: 'bottom',
    },
];

// social icon color
export const SOCIAL_ICON_COLOR = [
    {
        label: __('Original', 'zolo-blocks'),
        value: 'original',
    },
    {
        label: __('Custom', 'zolo-blocks'),
        value: 'custom',
    },
];

//columns Number
export const COLUMNS_NUMBER = 'columns';

//button
export const BUTTON_PADDING = 'btnPadding';
export const BUTTON_BORDER = 'btnBorder';
export const BTN_BORDER_RADIUS = 'btnBorderRadius';
export const BTN_SHADOW = 'btnShadow';
export const BTN_HOVER_SHADOW = 'btnHoverShadow';

// Icon
export const ICON_TEXT_SPACING = 'iconTextSpacing';

// Block Margin
export const BLOCK_MARGIN = 'blockMargin';

// preset 3 icon
export const PT_ICON_WIDTH = 'ptIconWidth';
export const PT_ICON_HEIGHT = 'ptIconHeight';
