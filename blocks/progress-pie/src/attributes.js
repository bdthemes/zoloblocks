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
    },
    progressDuration: {
        type: 'number',
    },
    progressTitle: {
        type: 'string',
    },
    toggleLabel: {
        type: 'boolean',
    },

    progressSize: {
        type: 'number',
    },

    progressRound: {
        type: 'boolean',
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
    },
    progressFillSize: {
        type: 'number',
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
