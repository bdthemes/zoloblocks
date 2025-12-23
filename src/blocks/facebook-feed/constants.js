/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-facebook-feed';

export const LAYOUT_OPTIONS = [
    { label: __('Timeline', 'zoloblocks'), value: 'timeline' },
    { label: __('Grid', 'zoloblocks'), value: 'grid' },
    { label: __('Masonry', 'zoloblocks'), value: 'masonry' },
    { label: __('Carousel', 'zoloblocks'), value: 'carousel' },
];

export const FB_COLUMNS = 'fbColumns';
export const FB_GAP = 'fbGap';
