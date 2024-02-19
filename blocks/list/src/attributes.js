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

import {
    //new const
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    //item
    ITEM_ALIGNMENT,
    LIST_BOX_SIZE,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //title
    LIST_TITTLE_BORDER,
    LIST_TITLE_RADIUS,
    LIST_TITLE_BG,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_STROKE,
    //des
    LIST_DSC_BORDER,
    LIST_DSC_RADIUS,
    LIST_DSC_BG,
    DSC_MARGIN,
    DSC_PADDING,
    DSC_STROKE,
    //list
    TEXT_LIST_BG,
    TEXT_LIST_BORDER,
    TEXT_LIST_RADIUS,
    TEXT_LIST_MARGIN,
    TEXT_LIST_PADDING,
    TEXT_LIST_STROKE,
    //icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
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
    //title
    ...generateBorderAttributies(LIST_TITTLE_BORDER),
    ...generateDimensionAttributes(LIST_TITLE_RADIUS),
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateDimensionAttributes(TITLE_PADDING),
    ...generateNormalBGAttributes(LIST_TITLE_BG),
    ...generateTextStrokeAttributies(TITLE_STROKE),

    //dsc
    ...generateBorderAttributies(LIST_DSC_BORDER),
    ...generateDimensionAttributes(LIST_DSC_RADIUS),
    ...generateDimensionAttributes(DSC_MARGIN),
    ...generateDimensionAttributes(DSC_PADDING),
    ...generateNormalBGAttributes(LIST_DSC_BG),
    ...generateTextStrokeAttributies(DSC_STROKE),
    //List
    ...generateBorderAttributies(TEXT_LIST_BORDER),
    ...generateDimensionAttributes(TEXT_LIST_RADIUS),
    ...generateDimensionAttributes(TEXT_LIST_MARGIN),
    ...generateDimensionAttributes(TEXT_LIST_PADDING),
    ...generateNormalBGAttributes(TEXT_LIST_BG),
    ...generateTextStrokeAttributies(TEXT_LIST_STROKE),

    //icon
    ...generateResRangeAttributies(LIST_ICON_SIZE),
    ...generateNormalBGAttributes(ICON_LIST_BG),
    ...generateNormalBGAttributes(ICON_LIST_HOVER_BG),
    ...generateDimensionAttributes(ICON_LIST_PADDING),
    ...generateDimensionAttributes(ICON_LIST_MARGIN),

    //item
    ...generateResAlignmentAttributies(ITEM_ALIGNMENT),
    ...generateDimensionAttributes(LIST_BOX_SIZE),
    ...generateDimensionAttributes(LIST_BOX_RADIUS),
    ...generateBorderAttributies(LIST_BORDER),
    ...generateDimensionAttributes(LIST_ALLBOX_PADDING),
    ...generateDimensionAttributes(LIST_BOX_MARGIN),
    ...generateBoxShadowAttributies(LIST_BOX_SHADOW),
    ...generateNormalBGAttributes(LIST_BG),
    // column count
    ...generateResCounterAttributies(LIST_COLUMN_COUNT, {
        defaultRange: 1,
    }),
    //gaps
    ...generateGapAttributes(LIST_COLUMNS_GAP, {
        defaultUnit: 'px',
    }),
    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //Block specific Attributes
    preset: {
        type: 'string',
        default: 'zolo-list-style-1',
    },
    titleToggle: {
        type: 'boolean',
        default: true,
    },
    DscToggle: {
        type: 'boolean',
        default: true,
    },
    headingText: {
        type: 'string',
        default: 'text here',
    },
    description: {
        type: 'string',
        default: 'description',
    },

    listProfiles: {
        type: 'array',
        default: [
            {
                id: 1,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List',
            },
        ],
    },

    //title
    titleColor: {
        type: 'string',
    },

    //dsc
    dscColor: {
        type: 'string',
    },
    //TEXT LIST
    textListColor: {
        type: 'string',
    },
    // icon
    listIcon: {
        type: 'string',
    },
    listIconHover: {
        type: 'string',
    },
    headingTag: {
        type: 'string',
        default: 'p',
    },
    descriptionTag: {
        type: 'string',
        default: 'p',
    },
};

export default attributes;
