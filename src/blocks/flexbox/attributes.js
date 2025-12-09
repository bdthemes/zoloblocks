/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateResAlignmentAttributies, generateGapAttributes } = window.zoloModule;

import { CONTENT_WIDTH, FLEXBOX_WIDTH, MIN_HEIGHT, FLEX_DIRECTION, FLEX_ALIGN, FLEX_JUSTIFY, FLEX_WRAP } from './constants';

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
    flexWidth: {
        type: 'string',
        default: 'width_none',
    },
    isVariationSelected: {
        type: 'boolean',
        default: false,
    },
    isRootFlexbox: {
        type: 'boolean',
        default: false,
    },
    flexWidthType: {
        type: 'string',
        default: 'alignfull',
    },
    contentWidthType: {
        type: 'string',
        default: 'alignfull',
    },
    ...generateResRangeAttributies(CONTENT_WIDTH, {
        defaultRange: 1200,
        defaultUnit: 'px',
    }),
    ...generateResRangeAttributies(FLEXBOX_WIDTH, {
        defaultRange: 100,
        defaultUnit: '%',
    }),
    ...generateResRangeAttributies(MIN_HEIGHT, {}),

    ...generateResAlignmentAttributies(FLEX_DIRECTION, {
        defaultAlign: 'row',
    }),
    ...generateResAlignmentAttributies(FLEX_ALIGN, {
        defaultAlign: 'center',
    }),
    ...generateResAlignmentAttributies(FLEX_JUSTIFY, {
        defaultAlign: 'center',
    }),
    ...generateResAlignmentAttributies(FLEX_WRAP, {
        defaultAlign: 'nowrap',
    }),
};

export default attributes;
