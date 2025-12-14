/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { justifyBottom, justifyCenter, justifyCenterVertical, justifyLeft, justifyRight, justifySpaceBetween, justifyStretch, justifyStretchVertical, justifyTop } from '@wordpress/icons';

// Block Prefix
export const BLOCK_PREFIX = 'flexbox';
export const FLEXBOX_WIDTH = 'flexboxWidth';
export const MIN_HEIGHT = 'minHeight';

export const FLEX_DIRECTION = 'flexDirection';
export const FLEX_JUSTIFY_CONTENT = 'flexJustifyContent';
export const FLEX_ALIGN_ITEMS = 'flexAlignItems';
export const FLEX_WRAP = 'flexWrap';

export const FLEXBOX_GAP = 'flexGap';

export const TAG_LIST = [
    { label: 'div', value: 'div' },
    { label: 'header', value: 'header' },
    { label: 'footer', value: 'footer' },
    { label: 'main', value: 'main' },
    { label: 'article', value: 'article' },
    { label: 'section', value: 'section' },
    { label: 'aside', value: 'aside' },
    { label: 'nav', value: 'nav' },
    { label: 'a (link)', value: 'a' },
];

export const WIDTH_TYPES = [
    {
        label: __('Full', 'zoloblocks'),
        value: 'alignfull',
    },
    {
        label: __('Wide', 'zoloblocks'),
        value: 'alignwide',
    },
    {
        label: __('Custom', 'zoloblocks'),
        value: 'zolo-flexbox-custom-width',
    },
];

export const INNER_WIDTH_TYPES = [
    {
        label: __('Full', 'zoloblocks'),
        value: 'alignfull',
    },
    {
        label: __('Custom', 'zoloblocks'),
        value: 'zolo-flexbox-custom-width',
    },
];

export const JUSTIFY_CONTENT_OPTIONS = [
    {
        label: __('Start', 'zoloblocks'),
        value: 'flex-start',
        icon: justifyLeft,
    },
    {
        label: __('Center', 'zoloblocks'),
        value: 'center',
        icon: justifyCenter,
    },
    {
        label: __('End', 'zoloblocks'),
        value: 'flex-end',
        icon: justifyRight
    },
    {
        label: __('Space Between', 'zoloblocks'),
        value: 'space-between',
        icon: justifySpaceBetween
    },
    {
        label: __('Space Around', 'zoloblocks'),
        value: 'space-around',
        icon: justifyStretch
    },
    {
        label: __('Space Evenly', 'zoloblocks'),
        value: 'space-evenly',
        icon: justifyStretch
    }
];

export const ALIGN_ITEMS_OPTIONS = [
    {
        label: __('Start', 'zoloblocks'),
        value: 'flex-start',
        icon: justifyTop,
    },
    {
        label: __('Center', 'zoloblocks'),
        value: 'center',
        icon: justifyCenterVertical
    },
    {
        label: __('End', 'zoloblocks'),
        value: 'flex-end',
        icon: justifyBottom
    },
    {
        label: __('Stretch', 'zoloblocks'),
        value: 'stretch',
        icon: justifyStretchVertical
    },
];
