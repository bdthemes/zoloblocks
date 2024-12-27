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
    FIELD_BG,
    ICON_SIZE,
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
    ...generateDimensionAttributes(FIELD_SIZE),
    ...generateDimensionAttributes(FIELD_PADDING),
    ...generateNormalBGAttributes(FIELD_BG),
    ...generateBorderAttributies(FIELD_BORDER),
    ...generateDimensionAttributes(FIELD_BRADIUS),
    ...generateGapAttributes(FIELD_GAP),
    ...generateResRangeAttributies(FIELD_SPACE),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    showLabel: {
        type: 'boolean',
        default: true,
    },
    label: {
        type: 'string',
        default: 'Number',
    },
    labelColor: {
        type: 'string',
    },
    placeholder: {
        type: 'string',
        default: 'Enter your number',
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>',
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
