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
    generateTextStrokeAttributies,
} = window.zoloModule;

import {} from './constants';

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
    beforeImage: {
        type: 'object',
    },
    afterImage: {
        type: 'object',
    },
    showLabels: {
        type: false,
    },
    showCaption: {
        type: false,
    },
    disableSliding: {
        type: false,
    },
    handaleDraggable: {
        type: false,
    },
    initialPosition: {
        type: 'number',
        default: 50,
    },
    slidePositon: {
        type: 'string',
        default: false,
    },
    swipeMode: {
        type: 'string',
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
    labelPositons: {
        type: 'string',
        default: 'center',
    },
    captionText: {
        type: 'string',
        default: 'Caption',
    },
    captionTag: {
        type: 'string',
    },
};

export default attributes;
