/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'text-path';

export const TEXTPATH_ALIGN = 'textPathAlign';

export const TEXTPATH_SIZE = 'textPathSize';

export const TEXT_PATH_STROKE = 'textPathStroke';
export const TEXT_WORD_SPACING = 'textWordSpacing';
export const PATH_TEXT_SPACING = 'textPathSpacing';
export const CIRCLE_DURATION = 'circleDuration';
export const CIRCLE_IMG_HEIGHT = 'circleImgHeight';
export const CIRCLE_IMG_WIDTH = 'circleImgWidth';
export const CIRCLE_IMAGE_BACKGROUND = 'circleImageBackground';
export const CIRCLE_IMAGE_PADDING = 'circleImagePadding';
export const CIRCLE_IMAGE_MARGIN = 'circleImageMargin';
export const CIRCLE_IMAGE_BORDER = 'circleImageBorder';
export const CIRCLE_IMAGE_BOX_SHADOW = 'circleImageBoxShadow';
export const CIRCLE_IMAGE_BORDER_RADIUS = 'circleImageBorderRadius';

export const PATH_OPTION = [
    {
        label: __('wave', 'zoloblocks'),
        value: 'wave',
    },
    {
        label: __('Arc', 'zoloblocks'),
        value: 'arc',
    },
    {
        label: __('Circle', 'zoloblocks'),
        value: 'circle',
    },
    { label: __('Line', 'zoloblocks'), value: 'line' },
    { label: __('Oval', 'zoloblocks'), value: 'oval' },
    { label: __('Spiral', 'zoloblocks'), value: 'spiral' },
    { label: __('Triangle (Pro)', 'zoloblocks'), value: 'triangle', disabled: true },
    { label: __('Rectangle (Pro)', 'zoloblocks'), value: 'rectangle', disabled: true },
    { label: __('Polygon (Pro)', 'zoloblocks'), value: 'polygon', disabled: true },
    { label: __('Curve (Pro)', 'zoloblocks'), value: 'curve', disabled: true },
];
