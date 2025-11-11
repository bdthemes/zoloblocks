const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    SPACE_BETWEEN,
    SWITCHER_BORDER_RADIUS,
    SWITCHER_HEIGHT,
    SWITCHER_WIDTH,
    SWITCHER_KNOB_SIZE,
    SWITCHER_MARGIN,
    SWITCHER_BG,
    SWITCHER_BOX_SHADOW,
    SWITCHER_BORDER,
    ACTIVE_SWITCHER_BG,
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
    // Switcher specific attributes

    preset: {
        type: 'string',
        default: 'style1',
    },

    showSwitcherLabels: {
        type: 'boolean',
        default: true,
    },

    primaryText: {
        type: 'string',
        default: 'Yearly',
    },
    secondaryText: {
        type: 'string',
        default: 'Lifetime',
    },
    isOn: {
        type: 'boolean',
        default: true, // true = primary active, false = secondary active
    },
    // Text colors
    switchColor: {
        type: 'string',
        default: '',
    },
    activeSwitchColor: {
        type: 'string',
        default: '',
    },
    // Switcher (toggle) colors
    switcherColor: {
        type: 'string',
        default: '',
    },
    activeSwitcherColor: {
        type: 'string',
        default: '',
    },
    ...generateResRangeAttributies(SPACE_BETWEEN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResRangeAttributies(SWITCHER_HEIGHT),
    ...generateResRangeAttributies(SWITCHER_WIDTH),
    ...generateResRangeAttributies(SWITCHER_KNOB_SIZE),
    ...generateDimensionAttributes(SWITCHER_MARGIN),
    ...generateDimensionAttributes(SWITCHER_BORDER_RADIUS),
    ...generateNormalBGAttributes(SWITCHER_BG),
    ...generateNormalBGAttributes(ACTIVE_SWITCHER_BG),
    ...generateBoxShadowAttributies(SWITCHER_BOX_SHADOW),
    ...generateBorderAttributies(SWITCHER_BORDER),
};

export default attributes;
