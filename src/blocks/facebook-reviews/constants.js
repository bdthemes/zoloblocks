/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const BLOCK_PREFIX = 'zolo-facebook-reviews';

export const LAYOUT_OPTIONS = [
    { label: __('Grid', 'zoloblocks'), value: 'grid' },
    { label: __('Masonry', 'zoloblocks'), value: 'masonry' },
    { label: __('Carousel', 'zoloblocks'), value: 'carousel' },
    { label: __('Badge', 'zoloblocks'), value: 'badge' },
];
