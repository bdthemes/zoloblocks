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
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_MARGIN,
    LIST_BOX_SHADOW,
    LIST_BG,
    //list title
    TEXT_LIST_MARGIN,
    TEXT_LIST_STROKE,
    //des
    DSC_MARGIN,
    //icon
    LIST_ICON_SIZE,
    ICON_LIST_BG,
    ICON_LIST_HOVER_BG,
    ICON_LIST_PADDING,
    ICON_LIST_MARGIN,
    ICON_LIST_BORDER,
    ICON_RADIUS,
    //hover icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
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

    //List title
    ...generateDimensionAttributes(TEXT_LIST_MARGIN),
    ...generateTextStrokeAttributies(TEXT_LIST_STROKE),

    //dsc
    ...generateDimensionAttributes(DSC_MARGIN),

    //icon
    ...generateResRangeAttributies(LIST_ICON_SIZE),
    ...generateNormalBGAttributes(ICON_LIST_BG),
    ...generateNormalBGAttributes(ICON_LIST_HOVER_BG),
    ...generateDimensionAttributes(ICON_LIST_PADDING),
    ...generateDimensionAttributes(ICON_LIST_MARGIN),
    ...generateBorderAttributies(ICON_LIST_BORDER),
    ...generateDimensionAttributes(ICON_RADIUS),
    //Hover Icon
    ...generateResRangeAttributies(LIST_HOVER_ICON_SIZE),
    ...generateDimensionAttributes(ICON_HOVER_LIST_MARGIN),

    //item
    ...generateResAlignmentAttributies(ITEM_ALIGNMENT),
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
    iconToggle: {
        type: 'boolean',
        default: false,
    },
    titleToggle: {
        type: 'boolean',
        default: false,
    },
    DscToggle: {
        type: 'boolean',
        default: false,
    },
    layout: {
        type: 'string',
        default: 'grid',
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
                text: 'List Item 1',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 2,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 2',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 3,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 3',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 4,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 4',
                desc: 'Customize widget dimension beyond normal scale',
            },
        ],
    },

    //dsc
    dscColor: {
        type: 'string',
    },
    //TEXT LIST title
    textListColor: {
        type: 'string',
    },

    listIconHover: {
        type: 'string',
    },

    //hover Icon
    linkHoverIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>',
    },
    HoverIconColor: {
        type: 'string',
    },
};

export default attributes;
