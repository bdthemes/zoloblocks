import { addFilter } from '@wordpress/hooks';

const {
    generateResRangeAttributies,
    generateResAlignmentAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateNormalBGAttributes,
    generateTypographyAttributes,
} = window.zoloModule;

import {
    DOT_SIZE,
    IMAGE_SIZE,
    ICON_SIZE,
    CURSOR_TEXT_TYPOGRAPHY,
    TEXT_BORDER,
    TEXT_BORDER_RADIUS,
    TEXT_PADDING,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstant';

const attributes = addFilter('blocks.registerBlockType', 'zolo/attributes/cursors', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            zoloCursors: {
                type: 'object',
                default: {
                    active: false,
                    source: 'default',
                    preset: 'style-1',
                    disabledDefault: false,
                    speed: 1,
                    disabledDefault: false,
                    textLabel: 'ZoloBlocks',
                },
            },
            ...generateResRangeAttributies(DOT_SIZE),
            ...generateResRangeAttributies(IMAGE_SIZE),
            ...generateResRangeAttributies(ICON_SIZE),
            ...generateBorderAttributies(TEXT_BORDER),
            ...generateDimensionAttributes(TEXT_BORDER_RADIUS),
            ...generateDimensionAttributes(TEXT_PADDING),
            ...generateTypographyAttributes(Object.values(typographyObjs)),
            ...generateBorderAttributies(IMAGE_BORDER),
            ...generateDimensionAttributes(IMAGE_BORDER_RADIUS),
        };
    }

    return settings;
});

export default attributes;
