const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateTypographyAttributes,
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
    LINE_THICKNESS,
    THICKNESS_BG,
    ARROW_BTN_WIDTH,
    ARROW_BTN_HEIGHT,
    ARROW_BTN_BORDER,
    ARROW_BTN_RADIUS,
    ARROW_BTN_BG,
    ARROW_SIZE,
    COMPARISON_HEIGHT,
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
    ...generateResRangeAttributies(ARROW_SIZE),
    // comparison height
    ...generateResRangeAttributies(COMPARISON_HEIGHT),
    beforeImage: {
        type: 'object',
    },
    afterImage: {
        type: 'object',
    },
    comparisonOptions: {
        type: 'object',
        default: {
            showLabels: false,
            disableslide: false,
            handleDraggable: false,
            initialPosition: 50,
            slidePositon: 'horizontal_direction',
            slideOnHover: false,
            beforeLabel: 'before',
            afterLabel: 'after',
            labelPositons: 'v_center',
            HorizontalPosition: 'h_center',
        },
    },
    beforeColor: {
        type: 'string',
    },
    afterColor: {
        type: 'string',
    },
    arrowbtnColor: {
        type: 'string',
    },
};

export default attributes;
