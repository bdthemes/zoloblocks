/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes, generateNormalBGAttributes } = window.zoloModule;

import { TEAM_GRID_BG, GRID_COLUMNS, COLUMNS_GAP, ROWS_GAP, CONTAINER_MARGIN, CONTAINER_PADDING } from './constants';

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
    // block attributes
    preset: {
        type: 'string',
        default: 'default',
    },
    addDetailPageLink: {
        type: 'boolean',
        default: true,
    },
    showDetailPageIcon: {
        type: 'boolean',
        default: true,
    },
    showDesignation: {
        type: 'boolean',
        default: true,
    },
    showShortBio: {
        type: 'boolean',
        default: true,
    },
    showSocialProfiles: {
        type: 'boolean',
        default: true,
    },
    ...generateNormalBGAttributes(TEAM_GRID_BG),
    ...generateResRangeAttributies(GRID_COLUMNS, {
        defaultRange: 1,
        noUnits: true,
    }),
    ...generateResRangeAttributies(COLUMNS_GAP, {
        defaultRange: 30,
    }),
    ...generateResRangeAttributies(ROWS_GAP, {
        defaultRange: 30,
    }),
    ...generateDimensionAttributes(CONTAINER_MARGIN),
    ...generateDimensionAttributes(CONTAINER_PADDING),
};

export default attributes;
