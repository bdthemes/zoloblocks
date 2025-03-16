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

import { bool } from 'prop-types';
import { VIDEO_ALIGN } from './constants';

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

    videoSource: {
        type: 'string',
        default: 'custom',
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
        default: true,
    },
    playerControl: {
        type: 'boolean',
        default: false,
    },
    smallButton: {
        type: 'boolean',
        default: false,
    },
    hoverPlayPause: {
        type: 'boolean',
        default: false,
    },
    videoLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    posterImage: {
        type: 'string',
        default: '',
    },
    ImageSizes: {
        type: 'string',
        default: 'full',
    },
    startEnd: {
        type: 'boolean',
        default: false,
    },
    startTime: {
        type: 'number',
        default: 0,
    },
    endTime: {
        type: 'number',
        default: 0,
    },
    isPlaying: {
        type: 'boolean',
        default: false,
    },

    youtubeUrl: {
        type: 'object',
        default: {
            url: 'https://www.youtube.com/embed/XR8ARbgBDg0?si=DZBX-iB2vsLtEBty',
            openInNewTab: false,
        },
    },

    ...generateResAlignmentAttributies(VIDEO_ALIGN),
};

export default attributes;
