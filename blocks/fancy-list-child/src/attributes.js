/**
 * Internal dependencies
 */
import * as typographyObjs from './constants/typoPrefixConstants';
import {
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER,
    IMAGE_BORDERRADIUS,
    IMAGE_PADDING,
    TITLE_SPACING,
    DESC_SPACING,
    ICON_WIDTH,
    ICON_BORDER,
    ICON_RADIUS,
    ICON_PADDING,
    ICON_BG,
    ICON_HBG,
    GAP,
} from './constants';
const {
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
} = window.zoloModule;

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
        type: 'string',
    },
    fancyTitle: {
        type: 'string',
        default: 'Fancy Title',
    },
    titleToggle: {
        type: 'boolean',
        default: true,
    },
    fancyListText: {
        type: 'string',
        default: 'Fancy list description goes here.',
    },
    textToggle: {
        type: 'boolean',
        default: false,
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
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>',
    },
    imageToggle: {
        type: 'boolean',
        default: false,
    },
    mediaType: {
        type: 'string',
        default: 'text',
    },
    mediaText: {
        type: 'string',
        default: '1',
    },
    mediaTextColor: {
        type: 'string',
    },
    mediaTextBgColor: {
        type: 'string',
    },
    image: {
        type: 'object',
        default: {
            url: zoloPlaceholders.placeholder,
            id: '',
            alt: '',
        },
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
    iconHColor: {
        type: 'string',
    },
    iconHBColor: {
        type: 'string',
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateNormalBGAttributes(ICON_HBG),
    ...generateResRangeAttributies(ICON_WIDTH),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateResRangeAttributies(IMAGE_WIDTH),
    ...generateResRangeAttributies(IMAGE_HEIGHT),
    ...generateBorderAttributies(IMAGE_BORDER),
    ...generateDimensionAttributes(IMAGE_BORDERRADIUS),
    ...generateDimensionAttributes(ICON_RADIUS),
    ...generateDimensionAttributes(IMAGE_PADDING),

    // gap
    ...generateResRangeAttributies(GAP),

    // title
    ...generateDimensionAttributes(TITLE_SPACING),
    // description
    ...generateDimensionAttributes(DESC_SPACING),
};

export default attributes;
