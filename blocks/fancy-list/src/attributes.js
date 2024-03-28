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
    COLUMNS,
    GRID_GAP,
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
    generateResCounterAttributies,
    generateBoxShadowAttributies,
    generateGapAttributes,
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
    fancyDirection: {
        type: 'string',
        default: 'fancy-list-align-left',
    },
    titleToggle: {
        type: 'boolean',
        default: true,
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
    imageToggle: {
        type: 'boolean',
        default: false,
    },
    mediaType: {
        type: 'string',
        default: 'text',
    },
    mediaTextColor: {
        type: 'string',
    },
    mediaTextBgColor: {
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
    iconHColor: {
        type: 'string',
    },
    iconHBColor: {
        type: 'string',
    },
    ...generateResCounterAttributies(COLUMNS, {
        deskRange: 2,
        tabRange: 1,
        mobRange: 1,
    }),
    ...generateGapAttributes(GRID_GAP, {
        defaultRange: 15,
        defaultUnit: 'px',
    }),

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
