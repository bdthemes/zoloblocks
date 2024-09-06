/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateBoxShadowAttributies,
} = window.zoloModule;

import {
    NAV_ITEMS_ALIGN,
    NAV_CONTENT_ALIGN,
    NAV_ICON_ALIGN,
    NAV_SPACING,
    CONTENT_SPACING,
    TAB_NORMAL_BGCOLOR,
    TAB_HOVER_BGCOLOR,
    TAB_ACTIVE_BGCOLOR,
    TAB_ITEM_MARGIN,
    TAB_ITEM_PADDING,
    TAB_ITEM_RADIUS,
    TITLE_MARGIN,
    ACTIVE_HINT_HEIGHT,
    ICON_SIZE,
    ICON_BG,
    ICON_HBG,
    ICON_ABG,
    ICON_BORDER,
    ICON_BORDER_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    TAB_ITEM_BORDER,
    TABS_CWIDTH,
    TAB_ITEM_BSHADOW,
    TAB_ITEM_HBSHADOW,
    TAB_ITEM_ABSHADOW,
    DESC_MARGIN,
    TAB_WRAP_BGCOLOR,
    TAB_WRAP_PADDING,
    TAB_WRAP_RADIUS,
    TAB_WRAP_BORDER,
    TAB_WRAP_BSHADOW,
    VERTICAL_PRESETS,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';
const attributes = {
    // global Attributes
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
    // tabs
    tabTitles: {
        type: 'array',
        default: [
            {
                id: '1',
                hasTitle: true,
                title: 'Tab One',
                hasDescription: false,
                description: 'Tab 1 Content: This tab provides general information about our company',
                hasMedia: false,
                hasNumber: false,
                isDefault: true,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
            },
            {
                id: '2',
                hasTitle: true,
                title: 'Tab Two',
                hasDescription: false,
                description: 'Tab 2 Content: This tab provides general information about our company',
                hasMedia: false,
                hasNumber: false,
                isDefault: true,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
            },
            {
                id: '3',
                hasTitle: true,
                title: 'Tab Three',
                hasDescription: false,
                description: 'Tab 3 Content: This tab provides general information about our company',
                hasMedia: false,
                hasNumber: false,
                isDefault: true,
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>',
            },
        ],
    },
    addNewTabStatus: {
        type: 'boolean',
        default: true,
    },
    tabsLayout: {
        type: 'string',
        default: 'horizontal',
    },

    verticalPreset: {
        type: 'string',
        default: 'vpreset-1',
    },

    verticalLayoutDirection: {
        type: 'string',
        default: 'vertical-left',
    },
    tabIndicatorStyle: {
        type: 'string',
        default: 'animation-style-1',
    },
    tabContentStyle: {
        type: 'string',
        default: 'content-style-1',
    },
    contentDirection: {
        type: 'string',
        default: 'content-style-1',
    },
    showTitle: {
        type: 'boolean',
        default: true,
    },
    showDesc: {
        type: 'boolean',
        default: false,
    },
    showIcon: {
        type: 'boolean',
        default: false,
    },
    showIndicator: {
        type: 'boolean',
        default: false,
    },
    tabChildCount: {
        type: 'number',
        default: 3,
    },
    tabActiveItemNo: {
        type: 'string',
        // default: '1',
    },
    // tab item width
    tabItemWidth: {
        type: 'string',
        default: 'tiw_auto',
    },
    //tabs style title color
    tabTitleColors: {
        type: 'object',
        default: {
            normal: '',
            hover: '',
            active: '',
        },
    },
    activeHintTabColor: {
        type: 'string',
        default: '',
    },
    //tabs style description color
    descColors: {
        type: 'object',
        default: {
            normal: '',
            hover: '',
            active: '',
        },
    },
    descButtomSpacing: {
        type: 'number',
        default: 10,
    },

    //tabs style icon color
    iconColors: {
        type: 'object',
        default: {
            normal: '',
            hover: '',
            active: '',
        },
    },

    // item borders
    itemBorderColors: {
        type: 'object',
        default: {
            hover: '',
            active: '',
        },
    },
    // tabs container
    ...generateResRangeAttributies(TABS_CWIDTH, {
        defaultUnit: '%',
    }),
    // Generators
    ...generateResAlignmentAttributies(NAV_ITEMS_ALIGN),
    ...generateResAlignmentAttributies(NAV_CONTENT_ALIGN),
    ...generateResAlignmentAttributies(NAV_ICON_ALIGN),
    ...generateResRangeAttributies(NAV_SPACING),
    ...generateResRangeAttributies(CONTENT_SPACING),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    ...generateNormalBGAttributes(TAB_NORMAL_BGCOLOR),
    ...generateNormalBGAttributes(TAB_HOVER_BGCOLOR),
    ...generateNormalBGAttributes(TAB_ACTIVE_BGCOLOR),
    // item
    ...generateDimensionAttributes(TAB_ITEM_PADDING),
    ...generateDimensionAttributes(TAB_ITEM_MARGIN),
    ...generateDimensionAttributes(TAB_ITEM_RADIUS),
    ...generateBorderAttributies(TAB_ITEM_BORDER),
    ...generateBoxShadowAttributies(TAB_ITEM_BSHADOW),
    ...generateBoxShadowAttributies(TAB_ITEM_HBSHADOW),
    ...generateBoxShadowAttributies(TAB_ITEM_ABSHADOW),
    //tabs wrap
    ...generateNormalBGAttributes(TAB_WRAP_BGCOLOR),
    ...generateBorderAttributies(TAB_WRAP_BORDER),
    ...generateBorderAttributies(TAB_WRAP_RADIUS),
    ...generateDimensionAttributes(TAB_WRAP_PADDING),
    ...generateBoxShadowAttributies(TAB_WRAP_BSHADOW),
    //tabs wrap

    // title
    ...generateDimensionAttributes(TITLE_MARGIN),
    ...generateResRangeAttributies(ACTIVE_HINT_HEIGHT),
    // desc
    ...generateDimensionAttributes(DESC_MARGIN),
    // ICON
    ...generateDimensionAttributes(ICON_SIZE),
    ...generateNormalBGAttributes(ICON_BG),
    ...generateNormalBGAttributes(ICON_HBG),
    ...generateNormalBGAttributes(ICON_ABG),
    ...generateBorderAttributies(ICON_BORDER),
    ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    ...generateDimensionAttributes(ICON_PADDING),
    ...generateDimensionAttributes(ICON_MARGIN),
};

export default attributes;
