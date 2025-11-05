const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    // Switcher specific attributes
    primaryText: {
        type: 'string',
        default: 'Primary',
    },
    secondaryText: {
        type: 'string',
        default: 'Secondary',
    },
    isOn: {
        type: 'boolean',
        default: true, // true = primary active, false = secondary active
    },
    
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
};

export default attributes;
