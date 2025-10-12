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
    CONTENT_BORDER_RADIUS,
    ICON_BG,
    ICON_BG_HOVER,
    ICON_BORDER,
    ICON_SHADOW,
    ICON_SHADOW_HOVER,
    ICON_BORDER_RADIUS,
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
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
                link: {
                    type: 'object',
                    default: {
                        url: '#',
                        openInNewTab: false,
                    },
                },
            },
            {
                id: 2,
                title: 'Cricle Item 2',
                desc: 'Description',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
                link: {
                    type: 'object',
                    default: {
                        url: '#',
                        openInNewTab: false,
                    },
                },
            },
            {
                id: 3,
                title: 'Cricle Item 3',
                desc: 'Description',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
                link: {
                    type: 'object',
                    default: {
                        url: '#',
                        openInNewTab: false,
                    },
                },
            },
            {
                id: 4,
                title: 'Cricle Item 4',
                desc: 'Description',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
                link: {
                    type: 'object',
                    default: {
                        url: '#',
                        openInNewTab: false,
                    },
                },
            },
        ],
    },
    rotationMode: {
        type: 'boolean',
        default: false,
    },
    rotationSpeed: {
        type: 'number',
        default: 10,
    },
    circleSize: {
        type: 'number',
        default: 50,
    },
    circleIconSize: {
        type: 'number',
        default: 20,
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
    titleColor: {
        type: 'string',
        default: '',
    },
    titleColorHover: {
        type: 'string',
        default: '',
    },
    textColor: {
        type: 'string',
        default: '',
    },
    textColorHover: {
        type: 'string',
        default: '',
    },

    ...generateNormalBGAttributes(CONTENT_BG),
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateBorderAttributies(CONTENT_BORDER),
    ...generateDimensionAttributes(CONTENT_BORDER_RADIUS),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateNormalBGAttributes(ICON_BG_HOVER),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateBoxShadowAttributies(ICON_SHADOW),
    ...generateBoxShadowAttributies(ICON_SHADOW_HOVER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
