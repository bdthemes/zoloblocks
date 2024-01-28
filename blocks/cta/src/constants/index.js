/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-button';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zolo-blocks'), value: '' },
    { label: __('Preset 2', 'zolo-blocks'), value: 'style-1' },
];

// icons position
export const ICON_POSITIONS = [
    {
        label: 'Left',
        value: 'left',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={11} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={3} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'right',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={3} y={12} width={11} height="0.01" rx="0.005" stroke="#4D4D4D" strokeWidth="1.5" />
                <rect x={18} y={10} width={4} height={4} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

/**
 * Button
 */

export const BUTTON_BG = 'buttonBg';
export const BUTTON_HOVER_BG_COLOR = 'buttonHover';
export const BUTTON_PADDING = 'buttonPadding';
export const BUTTON_ALIGNMENT = 'buttonAlignment';
export const BUTTON_BORDER = 'buttonBorder';
export const BUTTON_BORDER_RADIUS = 'buttonBorderRadius';
export const BUTTON_BOX_SHADOW = 'buttonBoxShadow';
export const BUTTON_HOVER_BOX_SHADOW = 'buttonHoverBoxShadow';

/**
 * Button Icon
 */

export const ICON_SIZE = 'iconSize';

// secondary button
export const ICON_S_SIZE = 'iconSizeSecondary';
export const ICON_TEXT_S_SPACING = 'iconTextSecondary';
export const BUTTON_S_BORDER = 'borderSecondary';
export const BUTTON_S_BORDER_RADIUS = 'borderRadiusSecondary';
export const BUTTON_S_PADDING = 'paddingSecondary';
export const BUTTON_S_BG = 'bgSecondary';
export const BUTTON_S_BOX_SHADOW = 'boxShadowSecondary';
export const BUTTON_HOVER_S_BG_COLOR = 'hBgColorSecondary';
export const BUTTON_HOVER_S_BOX_SHADOW = 'hBoxShadowSecondary';

/**
 * Presets Styles
 */

export const PO_SWIDTH = 'presetOSWidth';

export const PT_BORDER = 'presetTBorder';
export const PT_BORDER_RADIUS = 'presetTRadius';

export const PTH_BORDER = 'presetTHBorder';
export const PTH_BORDER_RADIUS = 'presetTHRadius';

export const PF_SWIDTH = 'presetFSWidth';

export const PFV_BORDER = 'presetFVBorder';
export const PFV_BORDER_RADIUS = 'presetFVRadius';

export const PS_BORDER = 'presetSBorder';
export const PS_BORDER_RADIUS = 'presetSRadius';

// CTA title
export const TITLE_MARGIN = 'titleMargin';

// CTA description
export const DESC_MARGIN = 'descMargin';

// flex gap
export const FLEX_GAP = 'flexGap';

export const ICON_TEXT_SPACING = 'iconTextSpacing';
