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
        default: 'fab fa-apple',
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
            url: 'https://via.placeholder.com/150',
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
