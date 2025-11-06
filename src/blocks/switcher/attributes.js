const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import { SPACE_BETWEEN, SWITCHER_BG, SWITCHER_BORDER_RADIUS, SWITCHER_HEIGHT, SWITCHER_WIDTH, SWITCHER_KNOB_SIZE } from './constants';

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
    switchColor: {
        type: 'string',
        default: '',
    },
    activeSwitchColor: {
        type: 'string',
        default: '',
    },
    ...generateResRangeAttributies(SPACE_BETWEEN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(SWITCHER_BG),
    ...generateResRangeAttributies(SWITCHER_HEIGHT),
    ...generateResRangeAttributies(SWITCHER_WIDTH),
    ...generateResRangeAttributies(SWITCHER_KNOB_SIZE),
    ...generateBorderAttributies(SWITCHER_BORDER_RADIUS),
};

export default attributes;
