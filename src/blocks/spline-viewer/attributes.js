/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateBorderAttributies,
} = window.zoloModule;

import {
    STAR_SIZE,
    TITLE_GAP,
    ITEMS_ALIGN,
    ICON_OPTIONS,
    ICON_SIZE,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_BG,
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
    // Generators
    ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(TITLE_GAP),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    // Icon
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateNormalBGAttributes(ICON_BG),

    source: {
        type: 'string',
        default: 'https://prod.spline.design/UwLAGbIVFWtK7opf/scene.splinecode',
    },
    styles:{
        type: 'object',
        default: {
            width: '200px',
            height: '200px',
            margin: '0 auto',
        },
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>',
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
    iconColor: {
        type: 'string',
        default: '',
    },
};

export default attributes;
