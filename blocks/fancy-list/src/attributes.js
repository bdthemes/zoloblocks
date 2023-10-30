/**
 * Internal dependencies
 */
import * as typographyObjs from './constants/typoPrefixConstants';
import { ICON_WIDTH, ICON_BORDER, ICON_RADIUS, IMAGE_SIZE, IMAGE_BORDER, IMAGE_BORDERRADIUS, IMAGE_PADDING } from './constants';
const { generateTypographyAttributes, generateResRangeAttributies, generateBorderAttributies, generateDimensionAttributes } =
    window.zoloModule;

const attributes = {
    //Common Attributes
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
    preset: {
        type: 'number',
    },
    fancyTitle: {
        type: 'string',
    },
    titleToggle: {
        type: 'boolean',
        default: true,
    },
    fancyListText: {
        type: 'string',
    },
    textToggle: {
        type: 'boolean',
        default: true,
    },
    image: {
        type: 'string',
    },
    imageToggle: {
        type: 'boolean',
        default: true,
    },

    headingTag: {
        type: 'string',
        default: 'h2',
    },
    dscTag: {
        type: 'string',
        default: 'div',
    },
    titleColor: {
        type: 'string',
    },
    titleHColor: {
        type: 'string',
    },
    dscColor: {
        type: 'string',
    },
    desHcolor: {
        type: 'string',
    },
    fancyIcon: {
        type: 'string',
    },
    iconToggle: {
        type: 'boolean',
        default: true,
    },
    iconbgColor: {
        type: 'string',
    },
    iconColor: {
        type: 'string',
    },

    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateResRangeAttributies(ICON_WIDTH, { defaultUnit: 15, defaultUnit: 'px' }),
    ...generateBorderAttributies(ICON_BORDER, { top: 0, right: 0, bottom: 0, left: 0, color: '#ccc ' }),
    ...generateResRangeAttributies(IMAGE_SIZE, { defaultUnit: 15, defaultUnit: 'px' }),
    ...generateBorderAttributies(IMAGE_BORDER, { top: 0, right: 0, bottom: 0, left: 0, color: '#ccc ' }),
    ...generateDimensionAttributes(IMAGE_BORDERRADIUS, { top: 0, bottom: 0, left: 0, right: 0, isLinked: true }),
    ...generateDimensionAttributes(ICON_RADIUS, { top: 0, bottom: 0, left: 0, right: 0, isLinked: true }),
    ...generateResRangeAttributies(IMAGE_PADDING, { defaultUnit: 15, defaultUnit: 'px' }),
};

export default attributes;
