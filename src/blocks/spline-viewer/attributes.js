/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateResAlignmentAttributies } = window.zoloModule;

import { WIDTH, HEIGHT, ALIGNMENT } from './constants';


const attributes = {
    // global Attributes
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: true,
        },
    },
    // Generators
    ...generateResRangeAttributies(WIDTH),
    ...generateResRangeAttributies(HEIGHT),
    ...generateResAlignmentAttributies(ALIGNMENT),

    source: {
        type: 'string',
        default: 'https://prod.spline.design/UwLAGbIVFWtK7opf/scene.splinecode',
    },
    hint: {
        type: 'boolean',
        default: false,
    },
    options: {
        type: 'object',
    },
};

export default attributes;
