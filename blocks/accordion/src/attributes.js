/**
 * Internal dependencies
 */
const {
    generateBoxShadowAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    AC_CONTAINER_BORDER,
    AC_CONTAINER_BORDER_RADIUS,
    AC_CONTAINER_BG,
    AC_CONTAINER_BOX_SHADOW,
    AC_CONTAINER_PADDING,
    AC_CONTAINER_MARGIN,
    AC_HEADER_BORDER,
    AC_HEADER_BORDER_RADIUS,
    AC_HEADER_BG,
    AC_HEADER_HBG,
    AC_HEADER_PADDING,
    AC_HEADER_MARGIN,
    AC_BODY_BORDER,
    AC_BODY_BORDER_RADIUS,
    AC_BODY_BG,
    AC_BODY_PADDING,
    AC_BODY_MARGIN,
    ICONCONTAINER_WIDTH,
    ICONCONTAINER_HEIGHT,
    ICONTAINER_BG,
    ICONTAINER_HBG,
    ICONTAINER_PADDING,
    ICONTAINER_BORDER,
    ICONTAINER_BRADIUS,
    ICON_SIZE,

    // active accordion
    AAC_HEADER_BG,
    AAC_BODY_BG,
    AICONTAINER_BG,
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
    //Block  Attributes
    addAccordion: {
        type: 'boolean',
        default: false,
    },
    totalItems: {
        type: 'number',
        default: 1,
    },
    // first item
    keepFirstOpen: {
        type: 'boolean',
        default: false,
    },
    allowMultiple: {
        type: 'boolean',
        default: false,
    },
    // Tab Icons
    collapseIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>',
    },
    expandIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"></path></svg>',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    aiconColor: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'h4',
    },
    titleColor: {
        type: 'string',
    },
    titleHoverColor: {
        type: 'string',
    },
    atitleColor: {
        type: 'string',
    },
    // Generators
    ...generateBorderAttributies(AC_CONTAINER_BORDER),
    ...generateDimensionAttributes(AC_CONTAINER_BORDER_RADIUS),
    ...generateNormalBGAttributes(AC_CONTAINER_BG),
    ...generateDimensionAttributes(AC_CONTAINER_PADDING),
    ...generateDimensionAttributes(AC_CONTAINER_MARGIN),
    ...generateBoxShadowAttributies(AC_CONTAINER_BOX_SHADOW),
    // accordion header
    ...generateBorderAttributies(AC_HEADER_BORDER),
    ...generateDimensionAttributes(AC_HEADER_BORDER_RADIUS),
    ...generateNormalBGAttributes(AC_HEADER_BG),
    ...generateNormalBGAttributes(AAC_HEADER_BG),
    ...generateNormalBGAttributes(AC_HEADER_HBG),
    ...generateDimensionAttributes(AC_HEADER_PADDING),
    ...generateDimensionAttributes(AC_HEADER_MARGIN),
    ...generateTypographyAttributes(Object.values(typographyObjs)),

    // accordion body
    ...generateBorderAttributies(AC_BODY_BORDER),
    ...generateDimensionAttributes(AC_BODY_BORDER_RADIUS),
    ...generateNormalBGAttributes(AC_BODY_BG),
    ...generateNormalBGAttributes(AAC_BODY_BG),
    ...generateDimensionAttributes(AC_BODY_PADDING),
    ...generateDimensionAttributes(AC_BODY_MARGIN),
    // icon container
    ...generateResRangeAttributies(ICONCONTAINER_WIDTH),
    ...generateResRangeAttributies(ICONCONTAINER_HEIGHT),
    ...generateNormalBGAttributes(ICONTAINER_BG),
    ...generateNormalBGAttributes(AICONTAINER_BG),
    ...generateNormalBGAttributes(ICONTAINER_HBG),
    ...generateDimensionAttributes(ICONTAINER_PADDING),
    ...generateBorderAttributies(ICONTAINER_BORDER),
    ...generateDimensionAttributes(ICONTAINER_BRADIUS),

    // icon
    ...generateResRangeAttributies(ICON_SIZE),
};

export default attributes;
