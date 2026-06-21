import { __ } from '@wordpress/i18n';
export const BLOCK_PREFIX = 'zolo-shape-block';
import ICONS from '../icons';
// Settings tab
export const TB_POSITION = [
    {
        value: 'normal',
        label: __('Top', 'zoloblocks'),
    },
    {
        value: 'hover',
        label: __('Bottom', 'zoloblocks'),
    },
];

// Common shape divider options
const SHAPE_OPTIONS = [
    { label: 'None', value: 'none', icon: '' },
    { label: 'Arrow', value: 'arrow', icon: 'arrow' },
    { label: 'Book', value: 'book', icon: 'book' },
    { label: 'Clouds', value: 'clouds', icon: 'clouds' },
    { label: 'Curve', value: 'curve', icon: 'curve' },
    { label: 'Curve Asymmetrical', value: 'curveasym', icon: 'curveasym' },
    { label: 'Drops', value: 'drops', icon: 'drops' },
    { label: 'Mountains', value: 'mountains', icon: 'mountains' },
    { label: 'Opacity', value: 'opacityFan', icon: 'opacityFan' },
    { label: 'Opacity Tilt', value: 'opacityTilt', icon: 'opacityTilt' },
    { label: 'Pyramids', value: 'pyramids', icon: 'pyramids' },
    { label: 'Semi Circle', value: 'split', icon: 'split' },
    { label: 'Semi Circle Asymmetrical', value: 'stilt', icon: 'stilt' },
    { label: 'Triangle', value: 'triangle', icon: 'triangle' },
    { label: 'Triangle Asymmetrical', value: 'triangleAsy', icon: 'triangleAsy' },
    { label: 'Waves', value: 'waves', icon: 'waves' },
];

// Helper function to map shape options with icon sources
const mapShapeOptions = (iconSource) =>
    SHAPE_OPTIONS.map(({ label, value, icon, pro }) => ({
        label: __(label, 'zoloblocks'),
        value,
        image: iconSource[icon] || '',
       //define pro badge
        pro,
    }));

// Shape divider arrays with appropriate icons
export const SHAPE_DIVIDER = mapShapeOptions(ICONS);

// Style tab constants
export const TOP_WIDTH_SHAPE = 'topWidthShape';
export const TOP_HEIGHT_SHAPE = 'topHeightShape';
export const BOTTOM_WIDTH_SHAPE = 'bottomWidthShape';
export const BOTTOM_HEIGHT_SHAPE = 'bottomHeightShape';
