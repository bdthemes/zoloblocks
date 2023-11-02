const {
    generateResRangeAttributies,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    ROWS_GAP,
    CONTAINER_BACKGROUND,
    CONTAINER_HOVER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_HOVER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_BOX_SHADOW,
    CONTAINER_HOVER_BOX_SHADOW,
} from './constants';
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
    // container
    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateNormalBGAttributes(CONTAINER_HOVER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateBorderAttributies(CONTAINER_BORDER_HOVER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateDimensionAttributes(CONTAINER_PADDING),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
    ...generateBoxShadowAttributies(CONTAINER_HOVER_BOX_SHADOW),
    //grid system
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

    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'zb-brand-style-1',
    },
    heading: {
        type: 'string',
        default: 'h1',
    },
    containerBackgroundColor: {
        type: 'string',
    },
    containerBackgroundHoverColor: {
        type: 'string',
    },
    showBrandName: {
        type: 'boolean',
        default: true,
    },
    showBrandLink: {
        type: 'boolean',
        default: true,
    },
    presetOneStyles: {
        type: 'object',
        default: {
            iconPosition: 'left',
            buttonPosition: 'left',
            buttonIconPosition: 'row-reverse',
        },
    },
    presetTwoStyles: {
        type: 'object',
        default: {
            iconPosition: 'top',
            buttonPosition: 'left',
            buttonIconPosition: 'row-reverse',
        },
    },
    presetThreeStyles: {
        type: 'object',
        default: {
            iconPosition: 'right',
        },
    },
};

export default attributes;
