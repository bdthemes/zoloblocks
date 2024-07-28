/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { PROGRESS_BAR_SIZE, PROGRESS_ALIGN, NUMBER_BOTTOM_SPACE } from './constants';

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
    ...generateResRangeAttributies(NUMBER_BOTTOM_SPACE),
    ...generateResAlignmentAttributies(PROGRESS_ALIGN, { defaultAlign: 'center' }),

    //attr
    progressPie: {
        type: 'object',
        default: {
            value: 50,
            duration: 3,
            title: 'Progress Title',
            toggleLabel: true,
            size: undefined,
            round: false,
            prefix: '',
            suffix: '',
            toggleSuffixPrefix: true,
            multiColor: [
                {
                    id: 1,
                    color: '#2667ff',
                },
            ],
            fillColor: '#2667ff',
            fillSize: 1,
            numberColor: '',
            titleColor: '',
            circleColor: '',
        },
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
};

export default attributes;
