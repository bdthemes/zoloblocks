/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'list';
// Presets
export const PRESETS = [
    { label: __('Preset 1', 'zoloblocks'), value: 'zolo-list-style-1' },
    { label: __('Preset 2', 'zoloblocks'), value: 'zolo-list-style-2' },
    { label: __('Preset 3', 'zoloblocks'), value: 'zolo-list-style-3' },
    { label: __('Preset 4', 'zoloblocks'), value: 'zolo-list-style-4' },
];

// layouts
export const CONTENT_LAYOUT = [
    {
        value: '',
        label: __('Vertical', 'zoloblocks'),
    },
    {
        value: 'horizontal',
        label: __('Horizontal', 'zoloblocks'),
    },
];

//Grid LIST
export const LIST_COLUMN_COUNT = 'listColumnCount';
export const LIST_COLUMNS_GAP = 'listColumnsGap';
export const SINGLE_ITEM_ALIGNMENT = 'singleItemAlignment';
//ITEM
export const ITEM_ALIGNMENT = 'itemAlignment';
export const LIST_BOX_RADIUS = 'listBoxRadius';
export const LIST_BORDER = 'listBorder';
export const LIST_ALLBOX_PADDING = 'listAllBoxPadding';
export const LIST_BOX_SHADOW = 'listBoxShadow';
export const LIST_BG = 'listBg';
export const LIST_HOVER_BG = 'listHoverBg';
export const LIST_HOVER_BOX_SHADOW = 'listHoverBoxShadow';

//List title
export const TEXT_LIST_RADIUS = 'textListradius';
export const TEXT_LIST_PADDING = 'textListPadding';

//DSC
export const DSC_MARGIN = 'dscMargin';

// icon
export const LIST_ICON_SIZE = 'listIconSize';
export const ICON_LIST_BG = 'iconListBg';
export const ICON_LIST_HOVER_BG = 'iconListHoverBg';
export const ICON_LIST_PADDING = 'iconListPadding';
export const ICON_LIST_MARGIN = 'iconListMargin';
export const ICON_LIST_BORDER = 'iconListBorder';
export const ICON_RADIUS = 'iconBorderRadius';
export const ICON_VERTICAL_ALIGN = 'iconVerticalAlign';

//Hover icon
export const LIST_HOVER_ICON_SIZE = 'listHoverIconSize';
export const ICON_HOVER_LIST_MARGIN = 'iconHoverListMargin';
export const ICON_LINKVERTICAL_ALIGN = 'iconLinkVerticalAlign';

//Title
export const H_TTITLE_WIDTH = 'hTitleWidth';

//Icon
export const ICON_LIST_SHADOW = 'iconListShadow';
export const ICON_LIST_HOVER_SHADOW = 'iconHoverListShadow';

export const ITEM_ALIGNS_OPTION = [
    {
        label: 'Left',
        value: 'flex-start',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Center',
        value: 'center',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16L12 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={16} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        label: 'Right',
        value: 'flex-end',
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const BADGE_BG = 'badgeBg';
export const BADGE_GAP = 'badgeGap';
export const BADGE_BORDER = 'badgeBorder';
export const BADGE_PADDING = 'badgePadding';
export const BADGE_BORDER_RADIUS = 'badgeBorderRadius';
