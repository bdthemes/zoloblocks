/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
} = window.zoloModule;

import {} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

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

    styles: {
        type: 'string',
        default: 'style-0',
    },
    video: {
        type: 'string',
        default: '',
    },
    autoPlay: {
        type: 'boolean',
        default: false,
    },
    loop: {
        type: 'boolean',
        default: false,
    },
    mute: {
        type: 'boolean',
        default: false,
    },
    playerControl: {
        type: 'boolean',
        default: true,
    },
    videoLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    imagePoster: {
        type: 'object',
        default: {
            id: '',
            url: '#',
        },
    },
    startTime: {
        type: 'number',
        default: 0,
    },
    endTime: {
        type: 'number',
        default: 0,
    },
};

export default attributes;
