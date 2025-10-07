const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_BORDER,
    CONTENT_BRADIUS,
    ICON_BG,
    ICON_BG_HOVER,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_SHADOW_HOVER,
    ICON_BORDER_BRADIUS,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

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
    circleItems: {
        type: 'array',
        default: [
            {
                id: 1,
                title: 'Cricle Item 1',
                desc: 'Description',
                icon: '',
            },
            {
                id: 2,
                title: 'Cricle Item 2',
                desc: 'Description',
                icon: '',
            },
            {
                id: 3,
                title: 'Cricle Item 3',
                desc: 'Description',
                icon: '',
            },
        ],
    },
    circleSize: {
        type: 'number',
        default: 50,
    },
    circleIconSize: {
        type: 'number',
        default: 50,
    },
    circleIconAreaSize: {
        type: 'number',
        default: 50,
    },
    contentColor: {
        type: 'string',
        default: '',
    },
    photo: {
        type: 'object',
    },
    iconColor: {
        type: 'string',
        default: '',
    },
    iconColorHover: {
        type: 'string',
        default: '',
    },

    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BRADIUS),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateNormalBGAttributes(ICON_BG_HOVER),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateBoxShadowAttributies(ICON_SHADOW),
    ...generateBoxShadowAttributies(ICON_SHADOW_HOVER),
    ...generateDimensionAttributes(ICON_BORDER_BRADIUS),
};

export default attributes;
