/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

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
    // Generators
    ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(TITLE_GAP),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    rating: {
        type: 'number',
        default: 5,
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showIcon: {
        type: 'boolean',
        default: false,
    },
    iconType: {
        type: 'string',
        default: 'icon',
    },
    iconTypeImage: {
        type: 'object',
        default: {
            id: '',
            url: zoloPlaceholders.placeholder,
            alt: '',
        },
    },
    icon: {
        type: 'attribute',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"></path></svg>',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    objectFit: {
        type: 'string',
        default: 'cover',
    },
    title: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'p',
    },
    titleColor: {
        type: 'string',
    },
    titlePosition: {
        type: 'string',
        default: 'top',
    },
    activeStarColor: {
        type: 'string',
    },
    inactiveStarColor: {
        type: 'string',
    },
};

export default attributes;
