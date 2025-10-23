const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import {
    CIRCLE_SIZE,
    MAIN_CIRCLE_SIZE,
    MAIN_CIRCLE_BORDER,
    MAIN_CIRCLE_SHADOW,
    MAIN_CIRCLE_RADIUS,
    IMAGE_SIZE,
    IMAGE_BORDER,
    IMAGE_SHADOW,
    IMAGE_RADIUS,
    HOVER_IMAGE_SHADOW,
    ICON_SIZE,
    ICON_BG,
    ICON_PADDING,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_RADIUS,
    HOVER_ICON_BG,
    HOVER_ICON_SHADOW,
} from './constants';

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
                id: 0,
                layer: 'layer1',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
            },
            {
                id: 1,
                layer: 'layer2',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
            },
            {
                id: 2,
                layer: 'layer3',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
            },
        ],
    },
    photo: {
        type: 'object',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    iconColor: {
        type: 'string',
        default: '#000000',
    },
    hoverIconColor: {
        type: 'string',
        default: '#000000',
    },
    animation: {
        type: 'boolean',
        default: true,
    },
    animationDuration: {
        type: 'number',
        default: 100000, // 100 seconds in milliseconds
    },
    hoverAnimation: {
        type: 'boolean',
        default: true,
    },

    ...generateResRangeAttributies(CIRCLE_SIZE),
    ...generateResRangeAttributies(MAIN_CIRCLE_SIZE),
    ...generateBorderAttributies(MAIN_CIRCLE_BORDER),
    ...generateBoxShadowAttributies(MAIN_CIRCLE_SHADOW),
    ...generateDimensionAttributes(MAIN_CIRCLE_RADIUS),
    ...generateResRangeAttributies(IMAGE_SIZE),
    ...generateBorderAttributies(IMAGE_BORDER),
    ...generateBoxShadowAttributies(IMAGE_SHADOW),
    ...generateDimensionAttributes(IMAGE_RADIUS),
    ...generateBoxShadowAttributies(HOVER_IMAGE_SHADOW),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateBoxShadowAttributies(ICON_SHADOW),
    ...generateDimensionAttributes(ICON_RADIUS),
    ...generateNormalBGAttributes(HOVER_ICON_BG),
    ...generateBoxShadowAttributies(HOVER_ICON_SHADOW),
};

export default attributes;
