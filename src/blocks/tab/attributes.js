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
    tabId: {
        type: 'string',
    },
    tabParentId: {
        type: 'string',
    },
};

export default attributes;
