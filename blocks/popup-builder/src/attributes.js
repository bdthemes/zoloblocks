/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateNormalBGAttributes, generateBorderAttributies, generateDimensionAttributes } =
    window.zoloModule;

import {
    PB_WIDTH,
    PB_OVERLAY_BG,
    PB_BORDER,
    PB_BRADIUS,
    PB_BG,
    PB_PADDING,
    PB_MARGIN,

    CLOSE_ICON_BORDER,
    CLOSE_ICON_BRADIUS,
    CLOSE_ICON_BG,
    CLOSE_ICON_HOVER_BG,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,

} from './constants';

const attributes = {
    // global config
    globalConfig: {
        type: 'object',
        default: {
            responsiveControls: true,
        },
    },
    popupType: {
        type: 'string',
        default: 'popup_box',
    },
    pushContent: {
        type: 'boolean',
        default: true,
    },
    infoBoxPosition: {
        type: 'string',
        default: 'inp_top',
    },
    infiniteRepeat: {
        type: 'boolean',
        default: true,
    },
    repetitionNumber: {
        type: 'number',
        default: 1,
    },
    popupBoxPosition: {
        type: 'string',
        default: 'pbp_center_center',
    },
    enableOverlay: {
        type: 'boolean',
        default: true,
    },
    fixedBackground: {
        type: 'boolean',
        default: true,
    },
    isDismissable: {
        type: 'boolean',
        default: true,
    },
    closeBtnPosition: {
        type: 'string',
        default: 'cbp_top_right',
    },
    closeBtnSize: {
        type: 'number',
    },
    closeBtnColors: {
        type: 'object',
        default: {
            normal: '',
            hover: '',
        },
    },
    closeBtnId: {
        type: 'string',
    },

    hideOnDesktop: {
        type: 'boolean',
        default: false,
    },
    hideOnTablet: {
        type: 'boolean',
        default: false,
    },
    hideOnMobile: {
        type: 'boolean',
        default: false,
    },
    // New Generators
    ...generateResRangeAttributies(PB_WIDTH),
    ...generateNormalBGAttributes(PB_OVERLAY_BG),
    ...generateNormalBGAttributes(PB_BG),
    ...generateBorderAttributies(PB_BORDER),
    ...generateDimensionAttributes(PB_BRADIUS),
    ...generateDimensionAttributes(PB_PADDING),
    ...generateDimensionAttributes(PB_MARGIN),

    ...generateBorderAttributies(CLOSE_ICON_BORDER),
    ...generateDimensionAttributes(CLOSE_ICON_BRADIUS),
    ...generateNormalBGAttributes(CLOSE_ICON_BG),
    ...generateNormalBGAttributes(CLOSE_ICON_HOVER_BG),
    ...generateDimensionAttributes(CLOSE_ICON_PADDING),
    ...generateDimensionAttributes(CLOSE_ICON_MARGIN),
};

export default attributes;
