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
        default: 'Email',
    },
    labelColor: {
        type: 'string',
    },
    placeholder: {
        type: 'string',
        default: 'Enter your email',
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path></svg>',
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
    emailValidationMsg: {
        type: 'string',
        default: 'Please enter a valid email address',
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
