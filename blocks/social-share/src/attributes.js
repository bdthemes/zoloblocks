const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    BUTTON_PADDING,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    ICON_TEXT_SPACING,
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    BUTTON_SIZE,
    BLOCK_MARGIN,
    PT_ICON_WIDTH,
    PT_ICON_HEIGHT,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Global Attributes
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
    // border attributes
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateDimensionAttributes(BTN_BORDER_RADIUS),
    ...generateBoxShadowAttributies(BTN_SHADOW),
    ...generateBoxShadowAttributies(BTN_HOVER_SHADOW),
    // column count
    ...generateResCounterAttributies(COLUMN_COUNT, {
        defaultRange: 5,
    }),
    //columns gaps
    ...generateResRangeAttributies(COLUMNS_GAP),
    //row gaps
    ...generateResRangeAttributies(ROW_GAP),

    //button
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateResRangeAttributies(BUTTON_SIZE),
    //icon spacing
    ...generateResRangeAttributies(ICON_TEXT_SPACING),

    // block margin
    ...generateDimensionAttributes(BLOCK_MARGIN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // preset 3 icon
    ...generateResRangeAttributies(PT_ICON_WIDTH),
    ...generateResRangeAttributies(PT_ICON_HEIGHT),
    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'preset-1',
    },
    layout: {
        type: 'string',
        default: 'flex',
    },
    socialText: {
        type: 'string',
        default: 'iconText',
    },
    socialProfiles: {
        type: 'array',
        default: [
            {
                id: 1,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                text: 'Facebook',
                tags: ['facebook', 'fb'],
            },
            {
                id: 2,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                text: 'Twitter',
                tags: ['twitter', 'tw'],
            },
            {
                id: 3,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                text: 'Linkedin',
                tags: ['linkedin', 'in'],
            },
            {
                id: 4,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                text: 'Pinterest',
                tags: ['pinterest', 'pin'],
            },
        ],
    },
    socialProfilesLinkTarget: {
        type: 'boolean',
        default: true,
    },
    socialStyle: {
        type: 'string',
        default: 'default',
    },
    targetPage: {
        type: 'string',
    },
    customLink: {
        type: 'string',
    },
    socialColor: {
        type: 'string',
        default: 'original',
    },
    socialTextColor: {
        type: 'string',
    },
    socialTextHoverColor: {
        type: 'string',
    },
    socialBgColor: {
        type: 'string',
    },
    socialBgHoverColor: {
        type: 'string',
    },
    icon: {
        type: 'string',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    textColor: {
        type: 'string',
    },
    textHoverColor: {
        type: 'string',
    },
    borderHoverColor: {
        type: 'string',
    },
    // preset 3 icon
    iconColor: {
        type: 'string',
    },
    iconBgColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    iconBgHoverColor: {
        type: 'string',
    },
};

export default attributes;
