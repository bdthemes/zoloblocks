/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'advanced-button';

// Presets
export const PRESETS = [
    { label: __('Style 1', 'zoloblocks'), value: '' },
    { label: __('Style 2', 'zoloblocks'), value: 'button-1' },
    { label: __('Style 3', 'zoloblocks'), value: 'button-2' },
    { label: __('Style 4', 'zoloblocks'), value: 'button-3' },
    { label: __('Style 5', 'zoloblocks'), value: 'button-4' },
    { label: __('Style 6', 'zoloblocks'), value: 'button-5' },
    { label: __('Style 7', 'zoloblocks'), value: 'button-6' },
    { label: __('Style 8', 'zoloblocks'), value: 'button-7' },
    { label: __('Style 9', 'zoloblocks'), value: 'button-8' },
    { label: __('Style 10 (Pro)', 'zoloblocks'), value: 'button-9', disabled: true },
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
export const ICON_TEXT_SPACING = 'iconTextSpacing';
export const ICON_BORDER = 'btnIconBorder';
export const ICON_BORDER_RADIUS = 'btnIconBorderRadius';
export const ICON_BOX_SHADOW = 'btnIconBoxShadow';
export const ICON_HOVER_BOX_SHADOW = 'btnIconHoverBoxShadow';
export const ICON_PADDING = 'btnIconPadding';

/**
 * Presets Styles
 */

export const PO_SWIDTH = 'presetOSWidth';

export const PT_BG = 'ptBG';
export const PTH_BG = 'pthBG';
export const PFTH_BG = 'pfthBG';

export const PT_BORDER = 'presetTBorder';
export const PT_BORDER_RADIUS = 'presetTRadius';

export const PTH_BORDER = 'presetTHBorder';
export const PTH_BORDER_RADIUS = 'presetTHRadius';

export const PF_SWIDTH = 'presetFSWidth';

export const PFV_BORDER = 'presetFVBorder';
export const PFV_BORDER_RADIUS = 'presetFVRadius';

export const PS_BORDER = 'presetSBorder';
export const PS_BORDER_RADIUS = 'presetSRadius';

export const PSE_BORDER = 'pseBorder';
export const PSE_BRADIUS = 'pseBradius';
export const PSE_BG = 'pseBG';

// Icon Animations
export const ICON_ANIMATIONS = [
    {
        label: __('Select Animation', 'zoloblocks'),
        value: '',
    },
    {
        label: __('Animation 1', 'zoloblocks'),
        value: 'icon-animation-1',
    },
    {
        label: __('Animation 2', 'zoloblocks'),
        value: 'icon-animation-2',
    },
    {
        label: __('Animation 3', 'zoloblocks'),
        value: 'icon-animation-3',
    },
    {
        label: __('Animation 4', 'zoloblocks'),
        value: 'icon-animation-4',
    },
    {
        label: __('Animation 5', 'zoloblocks'),
        value: 'icon-animation-5',
    },
];
