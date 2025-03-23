const { generateGapAttributes, generateResRangeAttributies, generateTypographyAttributes, generateResAlignmentAttributies } =
    window.zoloModule;

import { META_GAP, META_ALIGN, SEPARATOR_SIZE, SEPARATOR_WIDTH, SEPARATOR_HEIGHT, ICON_SIZE, TEXT_INDENT } from './constants';

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
    // block attributes

    metaData: {
        type: 'array',
    },
    separatorStyle: {
        type: 'string',
        default: 'separator-dot',
    },
    customSeparator: {
        type: 'string',
        default: '/',
    },
    separatorColor: {
        type: 'string',
    },
    hoverColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateGapAttributes(META_GAP, {
        defaultUnit: 'px',
    }),
    ...generateResAlignmentAttributies(META_ALIGN),
    ...generateResRangeAttributies(ICON_SIZE),
    ...generateResRangeAttributies(SEPARATOR_SIZE),
    ...generateResRangeAttributies(SEPARATOR_WIDTH),
    ...generateResRangeAttributies(SEPARATOR_HEIGHT),
    ...generateResRangeAttributies(TEXT_INDENT),
};

export default attributes;
