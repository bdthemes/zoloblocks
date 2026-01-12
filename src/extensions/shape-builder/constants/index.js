// Shape Data
export { default as SHAPES_DATA } from './shapes.json';

// Shape Builder Extension Constants
export const BLOCK_PREFIX = 'zolo-shape-builder';

// Animation Effects
export const ANIMATION_EFFECTS = [
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Fade In Up', value: 'fade-in-up' },
    { label: 'Fade In Down', value: 'fade-in-down' },
    { label: 'Fade In Left', value: 'fade-in-left' },
    { label: 'Fade In Right', value: 'fade-in-right' },
    { label: 'Zoom In', value: 'zoom-in' },
    { label: 'Zoom Out', value: 'zoom-out' },
    { label: 'Rotate In', value: 'rotate-in' },
    { label: 'Flip X', value: 'flip-x' },
    { label: 'Flip Y', value: 'flip-y' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Swing', value: 'swing' },
    { label: 'Shake', value: 'shake' },
    { label: 'Slide In Left', value: 'slide-in-left' },
    { label: 'Slide In Right', value: 'slide-in-right' },
    { label: 'Slide In Up', value: 'slide-in-up' },
    { label: 'Slide In Down', value: 'slide-in-down' },
];

// Animation Trigger Types
export const ANIMATION_TRIGGER = [
    { label: 'On Load', value: 'on-load' },
    { label: 'On Hover', value: 'on-hover' },
];

// Animation Easing Options
export const ANIMATION_EASING = [
    { label: 'None', value: 'none' },
    { label: 'Power1 Out', value: 'power1.out' },
    { label: 'Power2 Out', value: 'power2.out' },
    { label: 'Power3 Out', value: 'power3.out' },
    { label: 'Power4 Out', value: 'power4.out' },
    { label: 'Back Out', value: 'back.out' },
    { label: 'Elastic Out', value: 'elastic.out' },
    { label: 'Bounce Out', value: 'bounce.out' },
    { label: 'Circ Out', value: 'circ.out' },
    { label: 'Expo Out', value: 'expo.out' },
];

// Animation Repeat Options
export const ANIMATION_REPEAT = [
    { label: 'No Repeat', value: 0 },
    { label: 'Once', value: 1 },
    { label: 'Twice', value: 2 },
    { label: '3 Times', value: 3 },
    { label: 'Infinite', value: -1 },
];

// Gradient Type Options
export const GRADIENT_TYPE = [
    { label: 'Linear', value: 'linear' },
    { label: 'Radial', value: 'radial' },
];

// Horizontal Orientation Options
export const HORIZONTAL_ORIENTATION = [
    { label: 'Left', value: 'start' },
    { label: 'Right', value: 'end' },
];

// Vertical Orientation Options
export const VERTICAL_ORIENTATION = [
    { label: 'Top', value: 'start' },
    { label: 'Bottom', value: 'end' },
];
