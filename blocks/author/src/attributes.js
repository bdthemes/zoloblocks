import {
    GRID_COLUMNS,
    COLUMNS_GAP,
    COUNT_BG,
    COUNT_SPACING,
    COUNT_PADDING,
    COUNT_MARGIN,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    //item
    CONTENT_PADDING,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //avatar
    AVATAR_MASK,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_SHADOW,
    AVATAR_PADDING,
    AVATAR_MARGIN,
    AVATAR_IMG_SIZE,
    AVATAR_IMG_H_SIZE,
    //role
    ROLE_SPACING,
    //description
    DESC_SPACING,
    //link
    Link_ICON_SIZE,
    LINK_SPACING,
    LINK_SPACE,
    LINK_PADDING,
    LINK_BG,
    LINK_BORDER,
    LINK_BORDER_RADIUS,
    LINK_SHADOW,
    LINK_HOVER_BG,
    LINK_HOVER_BORDER_RADIUS,
    NAME_TEXT_SHADOW,
    TEXT_ALIGNMENT,
    META_ALIGNMENT,
} from './constants';

/**
 * Internal dependencies
 */
const {
    generateResAlignmentAttributies,
    generateResRangeAttributies,
    generateResCounterAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateGapAttributes,
    generateTextShadowAttributies,
    generateMaskAttributes,
} = window.zoloModule;

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
    // block attributes
    preset: {
        type: 'string',
        default: 'grid',
    },
    showAvatar: {
        type: 'boolean',
        default: true,
    },
    showName: {
        type: 'boolean',
        default: true,
    },
    showRole: {
        type: 'boolean',
        default: true,
    },
    showDescription: {
        type: 'boolean',
        default: false,
    },
    showPostCount: {
        type: 'boolean',
        default: true,
    },
    showSocialLink: {
        type: 'boolean',
        default: false,
    },
    itemHoverOpacity: {
        type: 'number',
    },
    ...generateResAlignmentAttributies(TEXT_ALIGNMENT),
    ...generateResAlignmentAttributies(META_ALIGNMENT),
    ...generateResCounterAttributies(GRID_COLUMNS, {
        deskRange: 4,
        tabRange: 2,
        mobRange: 1,
    }),
    ...generateGapAttributes(COLUMNS_GAP, {
        defaultUnit: 'px',
    }),
    authorQuery: {
        type: 'object',
    },
    socialLinks: {
        type: 'array',
        default: [],
    },
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    //name
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    ...generateTextShadowAttributies(NAME_TEXT_SHADOW),
    //role
    roleColor: {
        type: 'string',
    },
    ...generateResRangeAttributies(ROLE_SPACING),
    //description
    descColor: {
        type: 'string',
    },
    ...generateResRangeAttributies(DESC_SPACING),
    //item
    ...generateDimensionAttributes(CONTENT_PADDING),
    ...generateDimensionAttributes(ITEM_PADDING),
    ...generateNormalBGAttributes(ITEM_BG),
    ...generateBorderAttributies(ITEM_BORDER),
    ...generateDimensionAttributes(ITEM_BORDER_RADIUS),
    ...generateBoxShadowAttributies(ITEM_SHADOW),
    ...generateNormalBGAttributes(ITEM_HOVER_BG),
    ...generateBoxShadowAttributies(ITEM_HOVER_SHADOW),
    //avatar
    ...generateMaskAttributes(AVATAR_MASK),
    ...generateBorderAttributies(AVATAR_BORDER),
    ...generateDimensionAttributes(AVATAR_BORDER_RADIUS),
    ...generateBoxShadowAttributies(AVATAR_SHADOW),
    ...generateDimensionAttributes(AVATAR_PADDING),
    ...generateDimensionAttributes(AVATAR_MARGIN),
    ...generateResRangeAttributies(AVATAR_IMG_SIZE),
    ...generateResRangeAttributies(AVATAR_IMG_H_SIZE),
    //count
    countColor: {
        type: 'string',
    },
    ...generateNormalBGAttributes(COUNT_BG),
    ...generateResRangeAttributies(COUNT_SPACING),
    ...generateDimensionAttributes(COUNT_PADDING),
    ...generateDimensionAttributes(COUNT_MARGIN),
    ...generateBorderAttributies(COUNT_BORDER),
    ...generateDimensionAttributes(COUNT_BORDER_RADIUS),
    ...generateBoxShadowAttributies(COUNT_SHADOW),
    //link
    linkColor: {
        type: 'string',
    },
    linkHoverColor: {
        type: 'string',
    },
    ...generateResRangeAttributies(Link_ICON_SIZE),
    ...generateGapAttributes(LINK_SPACE, {
        defaultUnit: 'px',
    }),
    ...generateResRangeAttributies(LINK_SPACING),
    ...generateDimensionAttributes(LINK_PADDING),
    ...generateNormalBGAttributes(LINK_BG),
    ...generateBorderAttributies(LINK_BORDER),
    ...generateDimensionAttributes(LINK_BORDER_RADIUS),
    ...generateBoxShadowAttributies(LINK_SHADOW),
    ...generateNormalBGAttributes(LINK_HOVER_BG),
    ...generateDimensionAttributes(LINK_HOVER_BORDER_RADIUS),
};
export default attributes;
