/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
    generateNormalBGAttributes,
    generateResCounterAttributies,
    generateGapAttributes,
} = window.zoloModule;

import {
    GRID_COLUMNS,
    GRID_GAP,
    REVIEW_GRID_BG,
    REVIEW_GRID_PADDING,
    REVIEW_GRID_MARGIN, // child global styles
    CONTAINER_BACKGROUND,
    CONTAINER_BORDER,
    CONTAINER_BORDER_RADIUS,
    CONTAINER_PADDING,
    CONTAINER_BOX_SHADOW,
    CONTENT_ALIGNMENT,
    REVIEWER_PHOTO_WIDTH,
    REVIEWER_PHOTO_HEIGHT,
    REVIEWER_PHOTO_BG,
    REVIEWER_PHOTO_BORDER,
    REVIEWER_PHOTO_BORDER_RADIUS,
    REVIEWER_PHOTO_BOX_SHADOW,
    REVIEWER_PHOTO_MARGIN,
    REVIEWER_PHOTO_PADDING,
    REVIEWER_NAME_MARGIN,
    REVIEWER_DESIGNATION_MARGIN,
    REVIEWER_TESTIMONIAL_MARGIN,
    ICONS_SIZE,
    BTN_ALIGNMENT,
    LABEL_MARGIN,
    ICON_SIZE,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

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
    preset: {
        type: 'string',
        default: 'style-1',
    },
    showBtnIcon: {
        type: 'boolean',
        default: false,
    },
    icon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M285.6 444.1C279.8 458.3 264.8 466.3 249.8 463.4C234.8 460.4 223.1 447.3 223.1 432V256H47.1C32.71 256 19.55 245.2 16.6 230.2C13.65 215.2 21.73 200.2 35.88 194.4L387.9 50.38C399.8 45.5 413.5 48.26 422.6 57.37C431.7 66.49 434.5 80.19 429.6 92.12L285.6 444.1z"></path></svg>',
    },
    iconPosition: {
        type: 'string',
        default: 'right',
    },
    // label
    labelColor: {
        type: 'string',
    },
    requiredColor: {
        type: 'string',
    },
    iconColor: {
        type: 'string',
    },
    ...generateResAlignmentAttributies(BTN_ALIGNMENT),

    // Label
    ...generateDimensionAttributes(LABEL_MARGIN),

    // Field icon
    ...generateResRangeAttributies(ICON_SIZE, {}),

    ...generateNormalBGAttributes(REVIEW_GRID_BG),
    ...generateResCounterAttributies(GRID_COLUMNS, {
        noUnits: true,
        defaults: {
            deskRange: 3,
            tabRange: 2,
            mobRange: 1,
        },
    }),
    ...generateGapAttributes(GRID_GAP, {
        defaultUnit: 'px',
    }),
    ...generateDimensionAttributes(REVIEW_GRID_MARGIN),
    ...generateDimensionAttributes(REVIEW_GRID_PADDING),

    // child global styles
    // Generators
    ...generateResAlignmentAttributies(CONTENT_ALIGNMENT),

    ...generateNormalBGAttributes(CONTAINER_BACKGROUND),
    ...generateBorderAttributies(CONTAINER_BORDER),
    ...generateDimensionAttributes(CONTAINER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(CONTAINER_BOX_SHADOW),
    ...generateDimensionAttributes(CONTAINER_PADDING),

    ...generateResRangeAttributies(REVIEWER_PHOTO_WIDTH, {}),
    ...generateResRangeAttributies(REVIEWER_PHOTO_HEIGHT, {}),
    ...generateNormalBGAttributes(REVIEWER_PHOTO_BG),
    ...generateBorderAttributies(REVIEWER_PHOTO_BORDER),
    ...generateDimensionAttributes(REVIEWER_PHOTO_BORDER_RADIUS),
    ...generateBoxShadowAttributies(REVIEWER_PHOTO_BOX_SHADOW),
    ...generateDimensionAttributes(REVIEWER_PHOTO_MARGIN),
    ...generateDimensionAttributes(REVIEWER_PHOTO_PADDING),

    ...generateDimensionAttributes(REVIEWER_NAME_MARGIN),

    ...generateDimensionAttributes(REVIEWER_DESIGNATION_MARGIN),

    ...generateDimensionAttributes(REVIEWER_TESTIMONIAL_MARGIN),

    ...generateResRangeAttributies(ICONS_SIZE, {}),

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    containerBg: {
        type: 'string',
    },
    photoBgColor: {
        type: 'string',
    },
    nameColor: {
        type: 'string',
    },
    nameHoverColor: {
        type: 'string',
    },
    designationColor: {
        type: 'string',
    },
    testimonialMessageColor: {
        type: 'string',
    },
    // rating icon
    activeRatingColor: {
        type: 'string',
    },
    inactiveRatingColor: {
        type: 'string',
    },
    btnLabel: {
        type: 'string',
        default: 'Submit Now',
    },
};

export default attributes;
