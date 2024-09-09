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
    ITEM_BG,
    ITEM_BG_HOVER,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
} from './constants';
const {
    generateTypographyAttributes,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBoxShadowAttributies,
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
            responsiveControls: false,
        },
    },
    preset: {
        type: 'string',
    },
    fancyTitle: {
        type: 'string',
        default: 'Fancy Title',
    },
    fancyLinkToggle: {
        type: 'boolean',
        default: false,
    },
    fancyLink: {
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
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
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
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
    imageRes: {
        type: 'string',
        default: 'full',
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
    fancyDirection: {
        type: 'string',
        default: 'fancy-list-align-left',
    },

    itemBorderHoverColor: {
        type: 'string',
    },

    // item
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateNormalBGAttributes(ITEM_BG_HOVER),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateDimensionAttributes(ITEM_MARGIN),
    ...generateBoxShadowAttributies(ITEM_BOX_SHADOW),

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
