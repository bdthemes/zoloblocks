/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { PROGRESS_BAR_SIZE, PROGRESS_ALIGN } from './constants';

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

    //progress bar
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //progress bar size
    ...generateResRangeAttributies(PROGRESS_BAR_SIZE),
    ...generateResAlignmentAttributies(PROGRESS_ALIGN, { defaultAlign: 'center' }),

    //attr
    progressValue: {
        type: 'number',
        // default: 50,
    },
    progressDuration: {
        type: 'number',
        // default: 3,
    },
    progressTitle: {
        type: 'string',
        // default: 'Total',
    },
    toggleLabel: {
        type: 'boolean',
        // default: true,
    },

    progressSize: {
        type: 'number',
        // default: 10,
    },

    progressRound: {
        type: 'boolean',
        // default: false,
    },
    progPiePrefixPostfix: {
        type: 'object',
        default: {
            Prefix: '',
            Postfix: '',
        },
    },
    proPieperpostToggle: {
        type: 'boolean',
        // default: true,
    },
    //progress multi color
    progPieMultiColor: {
        type: 'array',
        default: [
            {
                id: 1,
                color: '#2667ff',
            },
        ],
    },

    //progress fill
    progressFillColor: {
        type: 'string',
        // default: '#e5e5e5',
    },
    progressFillSize: {
        type: 'number',
        // default: 10,
    },

    numberColor: {
        type: 'string',
    },
    titleColor: {
        type: 'string',
    },
    circleColor: {
        type: 'string',
    },
};

export default attributes;
