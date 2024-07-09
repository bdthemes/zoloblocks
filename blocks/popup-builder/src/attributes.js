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
    CB_TOP_OFFSET,
    CB_LEFT_OFFSET,
    CB_RIGHT_OFFSET,
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
        default: 'info_bar',
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
    ...generateResRangeAttributies(CB_TOP_OFFSET),
    ...generateResRangeAttributies(CB_LEFT_OFFSET),
    ...generateResRangeAttributies(CB_RIGHT_OFFSET),
    ...generateResRangeAttributies(PB_WIDTH),
    ...generateNormalBGAttributes(PB_OVERLAY_BG),
    ...generateNormalBGAttributes(PB_BG),
    ...generateBorderAttributies(PB_BORDER),
    ...generateDimensionAttributes(PB_BRADIUS),
    ...generateDimensionAttributes(PB_PADDING),
};

export default attributes;
