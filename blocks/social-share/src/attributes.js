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
    socialMedia: {
        type: 'array',
        default: [
            {
                id: 1,
                value: 'facebook',
                customLabel: '',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                tags: [],
            },
            {
                id: 2,
                value: 'twitter',
                customLabel: '',
                link: {
                    url: 'https://bdthemes.com',
                    openInNewTab: false,
                },
                tags: [],
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
