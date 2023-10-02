/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes, generateTypographyAttributes, generateResAlignmentAttributies } =
    window.zoloModule;

import { STAR_SIZE, STAR_SPACING, TITLE_GAP, ITEMS_ALIGN } from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Common Attributes
    uniqueId: {
        type: 'string',
    },
    resDevice: {
        type: 'string',
        default: 'Desktop',
    },
    blockStyle: {
        type: 'object',
    },
    // Generators
    ...generateResAlignmentAttributies(ITEMS_ALIGN, {
        defaultAlign: 'flex-start',
    }),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(STAR_SPACING),
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
