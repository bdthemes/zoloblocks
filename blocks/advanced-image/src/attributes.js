/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { PHOTO_ALIGN, CAPTION_ALIGN, STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

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
    ...generateResAlignmentAttributies(PHOTO_ALIGN),
    ...generateResAlignmentAttributies(CAPTION_ALIGN),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(TITLE_GAP),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    // block specific
    photo: {
        type: 'object',
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    imgAlt: {
        type: 'string',
    },
    hoverEffect: {
        type: 'string',
        default: '',
    },
    showCaption: {
        type: 'boolean',
        default: false,
    },
    caption: {
        type: 'string',
    },
    maskShape: {
        type: 'string',
        default: 'none',
    },
    maskSize: {
        type: 'string',
        default: 'auto',
    },
    maskPosition: {
        type: 'string',
        default: 'center center',
    },
    maskRepeat: {
        type: 'string',
        default: 'no-repeat',
    },
    layout: {
        type: 'string',
        default: 'normal',
    },
    ocPosition: {
        type: 'string',
        default: 'center',
    },
    ocTitle: {
        type: 'string',
    },
    ocTitleTag: {
        type: 'string',
        default: 'h2',
    },
    separatorStyle: {
        type: 'string',
        default: '',
    },
    separatorPosition: {
        type: 'string',
        default: 'after_title',
    },
    separatorVisibileOn: {
        type: 'string',
        default: 'svo_always',
    },
    rating: {
        type: 'number',
        default: 5,
    },
    showTitle: {
        type: 'boolean',
        default: true,
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
