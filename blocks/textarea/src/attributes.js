/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateDimensionAttributes, generateNormalBGAttributes, generateBorderAttributies } = window.zoloModule;

import { LABEL_MARGIN, FIELD_PADDING, FIELD_BG, ICON_SIZE, FIELD_BORDER, FIELD_BRADIUS } from './constants';

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
    // Generators
    // ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateDimensionAttributes(LABEL_MARGIN),
    ...generateDimensionAttributes(FIELD_PADDING),
    ...generateNormalBGAttributes(FIELD_BG),
    ...generateBorderAttributies(FIELD_BORDER),
    ...generateDimensionAttributes(FIELD_BRADIUS),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    showLabel: {
        type: 'boolean',
        default: true,
    },
    label: {
        type: 'string',
        default: 'Message',
    },
    labelColor: {
        type: 'string',
    },
    placeholder: {
        type: 'string',
        default: 'Write your thoughts here...',
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"></path></svg>',
    },
    iconColor: {
        type: 'string',
    },
    isRequired: {
        type: 'boolean',
        default: true,
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
