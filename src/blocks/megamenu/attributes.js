/**
 * Internal dependencies
 */
const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    DROPDOWN_WRAP_BG,
    DROPDOWN_WRAP_BORDER,
    DROPDOWN_WRAP_BORDER_RADIUS,
    DROPDOWN_WRAP_PADDING,
    DROPDOWN_WRAP_MARGIN,
    DROPDOWN_WRAP_BOX_SHADOW,
    DROPDOWN_WIDTH,
    DROPDOWN_WIDTH_OFFSET,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Common Attributes

    globalConfig: {
        type: 'object',
        default: {
            background: {
                prefix: 'mainBg',
            },
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
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

    ...generateNormalBGAttributes(DROPDOWN_WRAP_BG),
    ...generateBorderAttributies(DROPDOWN_WRAP_BORDER),
    ...generateDimensionAttributes(DROPDOWN_WRAP_BORDER_RADIUS),
    ...generateDimensionAttributes(DROPDOWN_WRAP_PADDING),
    ...generateDimensionAttributes(DROPDOWN_WRAP_MARGIN),
    ...generateBoxShadowAttributies(DROPDOWN_WRAP_BOX_SHADOW),
    ...generateResRangeAttributies(DROPDOWN_WIDTH),
    ...generateResRangeAttributies(DROPDOWN_WIDTH_OFFSET),

    // Typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    megamenuLayoutType: {
        type: 'string',
        default: 'fullwidth',
    }
};
export default attributes;
