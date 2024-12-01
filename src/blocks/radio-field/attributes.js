/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateGapAttributes,
} = window.zoloModule;

import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_SIZE,
    FIELD_PADDING,
    FIELD_MARGIN,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    FIELD_GAP,
    FIELD_SPACE,
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
    preset: {
        type: 'string',
        default: 'style-1',
    },
    optionData: {
        type: 'string',
        default: `Option 1
Option 2
Option 3`,
    },
    defaultValue: {
        type: 'string',
    },
    customNameAttribute: {
        type: 'string',
    },
    // Generators
    // ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateDimensionAttributes(LABEL_MARGIN),
    ...generateNormalBGAttributes(LABEL_BG),
    ...generateDimensionAttributes(LABEL_PADDING),
    ...generateDimensionAttributes(LABEL_BRADIUS),
    ...generateBorderAttributies(LABEL_BORDER),
    ...generateResRangeAttributies(FIELD_SIZE),
    ...generateDimensionAttributes(FIELD_PADDING),
    ...generateDimensionAttributes(FIELD_MARGIN),
    ...generateNormalBGAttributes(FIELD_BG),
    ...generateBorderAttributies(FIELD_BORDER),
    ...generateDimensionAttributes(FIELD_BRADIUS),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateGapAttributes(FIELD_GAP),
    ...generateResRangeAttributies(FIELD_SPACE),
    showLabel: {
        type: 'boolean',
        default: true,
    },
    label: {
        type: 'string',
        default: 'Field Label',
    },
    labelColor: {
        type: 'string',
    },
    placeholder: {
        type: 'string',
        default: 'Enter your text',
    },
    placeholderColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
    },
    showIcon: {
        type: 'boolean',
        default: false,
    },
    icon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path></svg>',
    },
    iconColor: {
        type: 'string',
    },
    isRequired: {
        type: 'boolean',
        default: false,
    },
    requiredMsg: {
        type: 'string',
        default: 'This field is required',
    },
    showRequiredSymbol: {
        type: 'boolean',
        default: true,
    },
    requiredColor: {
        type: 'string',
    },
};
export default attributes;
