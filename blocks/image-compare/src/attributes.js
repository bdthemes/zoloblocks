const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateResCounterAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateGapAttributes,
    generateResAlignmentAttributies,
    generateNormalBGAttributes,
} = window.zoloModule;

import {
    BEFORE_LABEL_BG,
    BEFORE_BORDER,
    BEFORE_RADIUS,
    BEFORE_MARGIN,
    BEFORE_PADDING,
    AFTER_LABEL_BG,
    AFTER_BORDER,
    AFTER_RADIUS,
    AFTER_MARGIN,
    AFTER_PADDING,
    CAPTION_ITEM_ALIGNMENT,
    CAPTION_MARGIN,
    LINE_THICKNESS,
    THICKNESS_BG,
    ARROW_BTN_WIDTH,
    ARROW_BTN_HEIGHT,
    ARROW_BTN_BORDER,
    ARROW_BTN_RADIUS,
    ARROW_BTN_BG,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = {
    //Global Attributes
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
    //before label
    ...generateNormalBGAttributes(BEFORE_LABEL_BG),
    ...generateBorderAttributies(BEFORE_BORDER),
    ...generateDimensionAttributes(BEFORE_RADIUS),
    ...generateDimensionAttributes(BEFORE_MARGIN),
    ...generateDimensionAttributes(BEFORE_PADDING),
    //before label
    ...generateNormalBGAttributes(AFTER_LABEL_BG),
    ...generateBorderAttributies(AFTER_BORDER),
    ...generateDimensionAttributes(AFTER_RADIUS),
    ...generateDimensionAttributes(AFTER_MARGIN),
    ...generateDimensionAttributes(AFTER_PADDING),

    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //control line
    ...generateResRangeAttributies(LINE_THICKNESS),
    ...generateNormalBGAttributes(THICKNESS_BG),
    //arrow btn
    ...generateResRangeAttributies(ARROW_BTN_WIDTH),
    ...generateResRangeAttributies(ARROW_BTN_HEIGHT),
    ...generateBorderAttributies(ARROW_BTN_BORDER),
    ...generateDimensionAttributes(ARROW_BTN_RADIUS),
    ...generateNormalBGAttributes(ARROW_BTN_BG),

    beforeImage: {
        type: 'object',
    },

    afterImage: {
        type: 'object',
    },
    showLabels: {
        type: 'boolean',
        default: false,
    },

    disableslide: {
        type: 'boolean',
        default: false,
    },
    handleDraggable: {
        type: 'boolean',
        default: false,
    },
    initialPosition: {
        type: 'number',
        default: 50,
    },
    slidePositon: {
        type: 'boolean',
        default: false,
    },
    swipeMode: {
        type: 'boolean',
        default: false,
    },
    beforeLabel: {
        type: 'string',
        default: 'before',
    },
    beforeColor: {
        type: 'string',
    },
    afterLabel: {
        type: 'string',
        default: 'after',
    },
    afterColor: {
        type: 'string',
    },
    labelPositons: {
        type: 'string',
        default: 'center',
    },
    arrowbtnColor: {
        type: 'string',
    },
    arrowbtnBlure: {
        type: 'number',
    },
};

export default attributes;
