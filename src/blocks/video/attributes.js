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
import {
    VIDEO_ALIGN,
    POPUP_BUTTON_ALIGNMENT,
    POPUP_BTN_ICON_SIZE,
    POPUP_BTN_BG_COLOR,
    POPUP_BTN_PADDING,
    POPUP_BTN_MARGIN,
    POPUP_BTN_BORDER_RADIUS,
    POPUP_BTN_BORDER,
    POPUP_BTN_BOX_SHADOW,
    POPUP_BTN_H_BG_COLOR,
    POPUP_BTN_H_BOX_SHADOW,
    POPUP_IMAGE_BORDER,
    POPUP_IMAGE_BORDER_RADIUS,
    POPUP_IMAGE_PADDING,
    POPUP_IMAGE_BG_COLOR,
    INLINE_VIDEO_CONTANER_WIDTH,
    INLINE_VIDEO_CONTANER_HEIGHT,
} from './constants';

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

    customVideoType: {
        type: 'string',
        default: 'url',
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

    popupButtonLebelWrap: {
        type: 'boolean',
        default: true,
    },

    popupButtonSubLabel: {
        type: 'string',
        default: 'Watch video',
    },
    popupButtonLabel: {
        type: 'string',
        default: 'See how it works',
    },
    popupButtonIcon: {
        type: 'string',
        default: (
            <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
            </svg>
        ),
    },
    popoupImage: {
        type: 'object',
        default: {
            url: zoloPlaceholders.placeholder,
            id: 0,
            sizes: {},
        },
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
        type: 'number',
    },
    endTime: {
        type: 'number',
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

    popupIconColor: {
        type: 'string',
    },
    popupIconHColor: {
        type: 'string',
    },
    popupBtnBorderHColor: {
        type: 'string',
    },

    popupLabelColor: {
        type: 'string',
    },
    popupLabelHColor: {
        type: 'string',
    },
    popupSubLabelColor: {
        type: 'string',
    },
    popupSubLabelHColor: {
        type: 'string',
    },

    popupImageOpacity: {
        type: 'number',
    },

    ...generateResAlignmentAttributies(VIDEO_ALIGN),
    ...generateResAlignmentAttributies(POPUP_BUTTON_ALIGNMENT),

    ...generateResRangeAttributies(POPUP_BTN_ICON_SIZE),
    ...generateNormalBGAttributes(POPUP_BTN_BG_COLOR),
    ...generateDimensionAttributes(POPUP_BTN_PADDING),
    ...generateDimensionAttributes(POPUP_BTN_MARGIN),
    ...generateDimensionAttributes(POPUP_BTN_BORDER_RADIUS),
    ...generateBorderAttributies(POPUP_BTN_BORDER),
    ...generateBoxShadowAttributies(POPUP_BTN_BOX_SHADOW),
    ...generateNormalBGAttributes(POPUP_BTN_H_BG_COLOR),
    ...generateBoxShadowAttributies(POPUP_BTN_H_BOX_SHADOW),

    ...generateBorderAttributies(POPUP_IMAGE_BORDER),
    ...generateDimensionAttributes(POPUP_IMAGE_BORDER_RADIUS),
    ...generateDimensionAttributes(POPUP_IMAGE_PADDING),
    ...generateNormalBGAttributes(POPUP_IMAGE_BG_COLOR),

    ...generateResRangeAttributies(INLINE_VIDEO_CONTANER_WIDTH),
    ...generateResRangeAttributies(INLINE_VIDEO_CONTANER_HEIGHT),

    ...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
