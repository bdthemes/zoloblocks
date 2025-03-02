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

import {
    PLAYER_ALIGNMENT,
    PLAYER_WIDTH,
    DEFAULT_VOLUME,
    CONTROL_PADDING,
    CONTROL_BG_COLOR,
    NORMAL_PLAY_BUTTON_BG,
    NORMAL_PLAY_BORDER,
    NORMAL_PLAY_BORDER_RADIUS,
    NORMAL_PLAY_BOX_SHADOW,
    NORMAL_PLAY_ICON_SIZE,
    HOVER_PLAY_BUTTON_BG,
    HOVER_PLAY_BOX_SHADOW,
    SEEK_BAR_HEIGHT,
    SEEK_BAR_BORDER_RADIUS,
    NORMAL_VOLUME_BG,
    NORMAL_VOLUME_BORDER,
    NORMAL_VOLUME_BORDER_RADIUS,
    NORMAL_VOLUME_BOX_SHADOW,
    NORMAL_VOLUME_ICON_SIZE,
    HOVER_VOLUME_BG,
    HOVER_VOLUME_BOX_SHADOW,
    BAR_HEIGHT,
    VOLUME_BAR_HEIGHT,
    VOLUME_BAR_BORDER_RADIUS,
    NORMAL_FULL_BUTTON_BG,
    NORMAL_FULL_BORDER,
    NORMAL_FULL_BORDER_RADIUS,
    NORMAL_FULL_BOX_SHADOW,
    NORMAL_FULL_ICON_SIZE,
    HOVER_FULL_BUTTON_BG,
    HOVER_FULL_BOX_SHADOW,
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
    introTitle: {
        type: 'string',
        default: 'Title',
    },
    externalUrl: {
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
    videoUrl: {
        type: 'string',
        default: '',
    },
    imagePoster: {
        type: 'object',
        default: {
            id: '',
            url: '#',
        },
    },
    titleHide: {
        type: 'boolean',
        default: false,
    },
    seekBar: {
        type: 'boolean',
        default: true,
    },
    timeDuration: {
        type: 'string',
        default: 'both',
    },
    playerControl: {
        type: 'boolean',
        default: true,
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
    volumeBar: {
        type: 'boolean',
        default: false,
    },
    fullScreen: {
        type: 'boolean',
        default: false,
    },
    smoothEnter: {
        type: 'boolean',
        default: true,
    },
    keyboardEnable: {
        type: 'boolean',
        default: true,
    },
    stickyMode: {
        type: 'boolean',
        default: false,
    },
    iconColor: {
        type: 'string',
        default: '#ffffff',
    },
    hoverColor: {
        type: 'string',
        default: '#ffffff',
    },
    timeColor: {
        type: 'string',
        default: '#ffffff',
    },
    seekBarColor: {
        type: 'string',
        default: '#ffffff',
    },
    seekBarActiveColor: {
        type: 'string',
        default: '#ffffff',
    },
    volumeColor: {
        type: 'string',
        default: '#ffffff',
    },
    volumeHoverColor: {
        type: 'string',
        default: '#ffffff',
    },
    volumeBarColor: {
        type: 'string',
        default: '#ffffff',
    },
    volumeBarActiveColor: {
        type: 'string',
        default: '#ffffff',
    },
    fullColor: {
        type: 'string',
        default: '#ffffff',
    },
    fullHoverColor: {
        type: 'string',
        default: '#ffffff',
    },

    ...generateResRangeAttributies(PLAYER_WIDTH),
    ...generateResAlignmentAttributies(PLAYER_ALIGNMENT),
    ...generateResRangeAttributies(DEFAULT_VOLUME),
    ...generateDimensionAttributes(CONTROL_PADDING),
    ...generateNormalBGAttributes(CONTROL_BG_COLOR),

    ...generateNormalBGAttributes(NORMAL_PLAY_BUTTON_BG),
    ...generateBorderAttributies(NORMAL_PLAY_BORDER),
    ...generateDimensionAttributes(NORMAL_PLAY_BORDER_RADIUS),
    ...generateBoxShadowAttributies(NORMAL_PLAY_BOX_SHADOW),
    ...generateResRangeAttributies(NORMAL_PLAY_ICON_SIZE),
    ...generateNormalBGAttributes(HOVER_PLAY_BUTTON_BG),
    ...generateBoxShadowAttributies(HOVER_PLAY_BOX_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResRangeAttributies(SEEK_BAR_HEIGHT),
    ...generateDimensionAttributes(SEEK_BAR_BORDER_RADIUS),
    ...generateNormalBGAttributes(NORMAL_VOLUME_BG),
    ...generateBorderAttributies(NORMAL_VOLUME_BORDER),
    ...generateDimensionAttributes(NORMAL_VOLUME_BORDER_RADIUS),
    ...generateBoxShadowAttributies(NORMAL_VOLUME_BOX_SHADOW),
    ...generateResRangeAttributies(NORMAL_VOLUME_ICON_SIZE),
    ...generateNormalBGAttributes(HOVER_VOLUME_BG),
    ...generateBoxShadowAttributies(HOVER_VOLUME_BOX_SHADOW),
    ...generateResRangeAttributies(VOLUME_BAR_HEIGHT),
    ...generateDimensionAttributes(VOLUME_BAR_BORDER_RADIUS),
    ...generateNormalBGAttributes(NORMAL_FULL_BUTTON_BG),
    ...generateBorderAttributies(NORMAL_FULL_BORDER),
    ...generateDimensionAttributes(NORMAL_FULL_BORDER_RADIUS),
    ...generateBoxShadowAttributies(NORMAL_FULL_BOX_SHADOW),
    ...generateResRangeAttributies(NORMAL_FULL_ICON_SIZE),
    ...generateNormalBGAttributes(HOVER_FULL_BUTTON_BG),
    ...generateBoxShadowAttributies(HOVER_FULL_BOX_SHADOW),

};

export default attributes;
