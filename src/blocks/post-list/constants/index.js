/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-post-grid';
export const PRESETS = [
    // { label: __('Default', 'zoloblocks'), value: 'default' },
    { label: __('Preset 1', 'zoloblocks'), value: 'style-1' },
    // { label: __('Preset 2', 'zoloblocks'), value: 'style-2' },
    { label: __('Preset 2', 'zoloblocks'), value: 'style-3' },
    // { label: __('Preset 4', 'zoloblocks'), value: 'style-4' },
    { label: __('Preset 3', 'zoloblocks'), value: 'style-5' },
];
// Content directions
export const CONTENT_DIRECTIONS = [
    {
        value: 'row',
        label: __('Left', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={8} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        value: 'row-reverse',
        label: __('Right', 'zoloblocks'),
        icon: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x={4} y={8} width={12} height={8} rx={1} stroke="#4D4D4D" strokeWidth="1.5" />
            </svg>
        ),
    },
];

export const COLUMNS_GAP = 'columnsGap';
export const THUMBNAIL_HEIGHT = 'thumbHeight';

//desing
export const COLUMN_PADDING = 'columnPadding';
export const COLUMN_BG = 'columnBg';
export const COLUMN_BORDER = 'columnBorder';
export const COLUMN_BORDER_RADIUS = 'columnBRadius';
export const COLUMN_SHADOW = 'columnShadow';

export const THUMBNAIL_BORDER = 'thumbBorder';
export const THUMBNAIL_BORDER_RADIUS = 'thumbBRadius';
export const THUMBNAIL_BG = 'thumbBg';
export const THUMBNAIL_BOX_SHADOW = 'thumbShadow';
export const THUMBNAIL_PADDING = 'thumbPadding';
export const THUMBNAIL_MARGIN = 'thumbMargin';

export const TITLE_MARGIN = 'titleMargin';
export const EXCERPT_MARGIN = 'excerptMargin';
export const META_MARGIN = 'metaMargin';

export const CAT_GAP = 'catGap';
export const CAT_BORDER = 'catBorder';
export const CAT_BORDER_RADIUS = 'catBRadius';
export const CAT_MARGIN = 'catMargin';
export const CAT_PADDING = 'catPading';

export const COUNT_SIZE = 'countSize';
export const COUNT_BORDER = 'countBorder';
export const COUNT_BORDER_RADIUS = 'countBRadius';

// featured post
export const FTHUMB_HEIGHT = 'fthumbHeight';
export const FTITLE_MARGIN = 'ftitleMargin';
export const FEXCERPT_MARGIN = 'fexcerptMargin';
export const FMETA_MARGIN = 'fmetaMargin';
export const FCAT_GAP = 'fcatGap';
export const FCAT_MARGIN = 'fcatMargin';
export const FCONTENT_PADDING = 'fcontentPadding';

export const FCONTAINER_PADDING = 'fcontainerPadding';
export const FCONTAINER_BG = 'fcontainerBg';
export const FCONTAINER_OVERLAY = 'fcontainerOverlay';
export const FCONTAINER_BORDER = 'fcontainerBorder';
export const FCONTAINER_BORDER_RADIUS = 'fcontainerBRadius';
export const FCONTAINER_SHADOW = 'fcontainerShadow';

export const CONTENT_ALIGN = 'contentAlign';

// pagination
export const PAG_BORDER = 'pagBorder';
export const PAG_BORDER_RADIUS = 'pagBRadius';
export const PAG_MARGIN = 'pagMargin';
export const PAG_PADDING = 'pagPadding';
export const PAG_ALIGN = 'pagAlign';

// meta space
export const META_SPACE = 'metaSpace';

// Grid
export const GRID_COLUMNS = 'gridColumns';
