/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } = window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';
import {v4 as uuidv4} from 'uuid';
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
    ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(TITLE_GAP),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    tabs: {
        type: 'array',
        default: [
            {
                title: 'Tab1',
                id: uuidv4(),
            },
            {
                title: 'Tab2',
                id: uuidv4(),
            },
        ],
    },
    initialTabSelected: {
        type: 'number',
        default: 0,
    },
    blockInitialized: {
        type: 'boolean',
        default: false,
    },
    rating: {
        type: 'number',
        default: 5,
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    title: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'p',
    },
    titleColor: {
        type: 'string',
    },
    titlePosition: {
        type: 'string',
        default: 'top',
    },
    activeStarColor: {
        type: 'string',
    },
    inactiveStarColor: {
        type: 'string',
    },
};

export default attributes;
