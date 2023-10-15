/**
 * Internal dependencies
 */
const { generateBorderAttributies, generateDimensionAttributes, generateNormalBGAttributes, generateResRangeAttributies } =
    window.zoloModule;

import {
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
} from './constants';

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
    // block attributes
    ...generateBorderAttributies(AC_HEADER_BORDER),
    ...generateDimensionAttributes(AC_HEADER_BORDER_RADIUS),
    ...generateNormalBGAttributes(AC_HEADER_BG),
    ...generateNormalBGAttributes(AC_HEADER_HBG),
    ...generateDimensionAttributes(AC_HEADER_PADDING),
    ...generateDimensionAttributes(AC_HEADER_MARGIN),

    // accordion body
    ...generateBorderAttributies(AC_BODY_BORDER),
    ...generateDimensionAttributes(AC_BODY_BORDER_RADIUS),
    ...generateNormalBGAttributes(AC_BODY_BG),
    ...generateDimensionAttributes(AC_BODY_PADDING),
    ...generateDimensionAttributes(AC_BODY_MARGIN),
    // icon container
    ...generateResRangeAttributies(ICONCONTAINER_WIDTH),
    ...generateResRangeAttributies(ICONCONTAINER_HEIGHT),
    ...generateNormalBGAttributes(ICONTAINER_BG),
    ...generateNormalBGAttributes(ICONTAINER_HBG),
    ...generateDimensionAttributes(ICONTAINER_PADDING),
    ...generateBorderAttributies(ICONTAINER_BORDER),
    ...generateDimensionAttributes(ICONTAINER_BRADIUS),

    // icon
    ...generateResRangeAttributies(ICON_SIZE),
    // Tab Icons
    collapseIcon: {
        type: 'string',
        default: 'fas fa-angle-down',
    },
    expandIcon: {
        type: 'string',
        default: 'fas fa-angle-up',
    },
    iconColor: {
        type: 'string',
    },
    iconHoverColor: {
        type: 'string',
    },
    // accordion attributes
    title: {
        type: 'string',
    },
    titleTag: {
        type: 'string',
        default: 'h4',
    },
};

export default attributes;
