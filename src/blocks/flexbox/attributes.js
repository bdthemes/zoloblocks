/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateResAlignmentAttributies, generateGapAttributes } = window.zoloModule;

import { FLEXBOX_WIDTH, MIN_HEIGHT, FLEX_DIRECTION, FLEX_WRAP, FLEXBOX_GAP, FLEX_ALIGN_ITEMS, FLEX_JUSTIFY_CONTENT } from './constants';

const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'advBtnMargin',
            },
            padding: {
                prefix: 'advBtnPadding',
            },
            background: {
                prefix: 'advBtnBg',
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
    isVariationSelected: {
        type: 'boolean',
        default: false,
    },
    flexWidthType: {
        type: 'string',
        default: 'alignfull',
    },
    tagName: {
        type: 'string',
        default: 'div',
    },
    link: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    flexDirection: {
        type: 'object',
    },
    ...generateResRangeAttributies(FLEXBOX_WIDTH, {
        defaultRange: 100,
        defaultUnit: '%',
    }),
    ...generateResRangeAttributies(MIN_HEIGHT, {}),
    ...generateResAlignmentAttributies(FLEX_DIRECTION, {}),
    ...generateResAlignmentAttributies(FLEX_ALIGN_ITEMS, {}),
    ...generateResAlignmentAttributies(FLEX_JUSTIFY_CONTENT, {}),
    ...generateResAlignmentAttributies(FLEX_WRAP, {}),
    ...generateGapAttributes(FLEXBOX_GAP, {}),
};

export default attributes;
