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
        default: 'youtube',
    },
    youtubeUrl: {
        type: 'object',
        default: {
            url: 'https://www.youtube.com/watch?v=D8IzMT-sLH0',
            openInNewTab: false,
        },
    },
    vimeoUrl: {
        type: 'object',
        default: {
            url: 'https://vimeo.com/235215203',
            openInNewTab: false,
        },
    },
    isExternalCustomUrl: {
        type: 'boolean',
        default: true,
    },
    externalCustomVideoUrl: {
        type: 'object',
        default: {
            url: 'https://zoloblocks.com/demo/wp-content/uploads/2025/03/Get-Zoloblocks-Now-For-Gutenberg-Page-Builder.mp4',
            openInNewTab: false,
        },
    },
    customVideo: {
        type: 'string',
        default: '',
    },
    customPlayerSkin: {
        type: 'string',
        default: 'default',
    },
    videoLayoutType: {
        type: 'string',
        default: 'inline',
    },
    popupType: {
        type: 'string',
        default: 'button',
    },
    popupButtonLabel: {
        type: 'string',
        default: 'Play Video',
    },
    popupButtonIcon: {
        type: 'string',
        default: '',
    },
    popoupImage: {
        type: 'string',
        default: '',
    },
    popupImageSizes: {
        type: 'string',
        default: 'full',
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
    isPrivacyMode: {
        type: 'boolean',
        default: false,
    },
    isLazyLoad: {
        type: 'boolean',
        default: false,
    },
    showCaption: {
        type: 'boolean',
        default: false,
    },
    showDownloadButton: {
        type: 'boolean',
        default: false,
    },
    preload: {
        type: 'string',
        default: 'metadata',
    },
    posterImage: {
        type: 'object',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    youtubeModestBranding: {
        type: 'boolean',
        default: false,
    },
    youtubeSuggestedvideoType: {
        type: 'string',
        default: '0',
    },
    startTime: {
        type: 'number'
    },
    endTime: {
        type: 'number'
    },
    introTitle: {
        type: 'boolean',
        default: false,
    },
    introPotrait: {
        type: 'boolean',
        default: false,
    },
    introByline: {
        type: 'boolean',
        default: false,
    },
    vimeoControlsColor: {
        type: 'string',
    },
    ...generateResAlignmentAttributies(VIDEO_ALIGN),
};

export default attributes;
