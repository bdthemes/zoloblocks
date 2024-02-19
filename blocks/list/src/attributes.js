const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateGapAttributes,
} = window.zoloModule;

import {
    BUTTON_PADDING,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    ICON_TEXT_SPACING,
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

    //button
    ...generateDimensionAttributes(BUTTON_PADDING),
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
        default: 'zolo-list-style-1',
    },
    layout: {
        type: 'string',
        default: 'flex',
    },
    socialText: {
        type: 'string',
        default: 'iconText',
    },
    headingText: {
        type: 'string',
        default: 'text here',
    },
    description: {
        type: 'string',
        default: 'descriptin',
    },
    listIcon: {
        type: 'object',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
    },
    listProfiles: {
        type: 'array',
        default: [
            {
                id: 1,
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Here',
            },
        ],
    },
};

export default attributes;
