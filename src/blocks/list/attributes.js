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
} = window.zoloModule;

import {
    //Layout
    LIST_COLUMN_COUNT,
    LIST_COLUMNS_GAP,
    SINGLE_ITEM_ALIGNMENT,
    //item
    ITEM_ALIGNMENT,
    LIST_BOX_RADIUS,
    LIST_BORDER,
    LIST_ALLBOX_PADDING,
    LIST_BOX_SHADOW,
    LIST_BG,
    LIST_HOVER_BG,
    LIST_HOVER_BOX_SHADOW,
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
    ICON_VERTICAL_ALIGN,
    //hover icon
    LIST_HOVER_ICON_SIZE,
    ICON_HOVER_LIST_MARGIN,
    ICON_LINKVERTICAL_ALIGN,
    //title
    H_TTITLE_WIDTH,
    //icon
    ICON_LIST_SHADOW,
    ICON_LIST_HOVER_SHADOW,
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
    ...generateResAlignmentAttributies(ICON_VERTICAL_ALIGN),
    //Hover Icon
    ...generateResRangeAttributies(LIST_HOVER_ICON_SIZE),
    ...generateDimensionAttributes(ICON_HOVER_LIST_MARGIN),
    ...generateResAlignmentAttributies(ICON_LINKVERTICAL_ALIGN),

    //title
    ...generateResRangeAttributies(H_TTITLE_WIDTH),

    //item
    ...generateResAlignmentAttributies(ITEM_ALIGNMENT),
    ...generateDimensionAttributes(LIST_BOX_RADIUS),
    ...generateBorderAttributies(LIST_BORDER),
    ...generateDimensionAttributes(LIST_ALLBOX_PADDING),
    ...generateBoxShadowAttributies(LIST_BOX_SHADOW),
    ...generateNormalBGAttributes(LIST_BG),
    ...generateBoxShadowAttributies(LIST_HOVER_BOX_SHADOW),
    ...generateNormalBGAttributes(LIST_HOVER_BG),
    // column count layout
    ...generateResCounterAttributies(LIST_COLUMN_COUNT, {
        defaultRange: 1,
    }),
    ...generateResAlignmentAttributies(SINGLE_ITEM_ALIGNMENT),
    //gaps
    ...generateGapAttributes(LIST_COLUMNS_GAP, {
        defaultUnit: 'px',
        defaultRange: 20,
    }),
    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //Block specific Attributes
    ...generateBoxShadowAttributies(ICON_LIST_SHADOW),
    ...generateBoxShadowAttributies(ICON_LIST_HOVER_SHADOW),

    preset: {
        type: 'string',
        default: 'zolo-list-style-1',
    },
    contentLayout: {
        type: 'string',
        default: '',
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
    BorderHovColor: {
        type: 'string',
    },
    isLinkable: {
        type: 'boolean',
        default: false,
    },
    showBadge: {
        type: 'boolean',
        default: false,
    },
    listProfiles: {
        type: 'array',
        default: [
            {
                id: 1,
                icon: '',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 1',
                badge: 'New',
                badgeColor: '',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 2,
                icon: '',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 2',
                badge: 'New',
                badgeColor: '',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 3,
                icon: '',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 3',
                badge: 'New',
                badgeColor: '',
                desc: 'Customize widget dimension beyond normal scale',
            },
            {
                id: 4,
                icon: '',
                link: {
                    url: '#',
                    openInNewTab: false,
                },
                text: 'List Item 4',
                badge: 'New',
                badgeColor: '',
                desc: 'Customize widget dimension beyond normal scale',
            },
        ],
    },

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>
    // list icon
    listIconColor: {
        type: 'string',
    },
    //dsc
    dscColor: {
        type: 'string',
    },
    dscHcolor: {
        type: 'string',
    },

    //TEXT LIST title
    textListColor: {
        type: 'string',
    },
    txtHListColor: {
        type: 'string',
    },

    listIconHover: {
        type: 'string',
    },

    //hover Icon
    linkHoverIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>',
    },
    globalIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>',
    },
    HoverIconColor: {
        type: 'string',
    },
    listIconBorderHover: {
        type: 'string',
    },
    
};

export default attributes;
