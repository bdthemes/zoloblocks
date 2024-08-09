import { addFilter } from '@wordpress/hooks';

const {
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
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

const attributes = addFilter('blocks.registerBlockType', 'zolo/attributes/particles', (settings) => {
    if (settings.category && settings.category == 'zoloblocks') {
        // Add new attribute
        settings.attributes = {
            ...settings.attributes,
            zoloParticles: {
                type: 'object',
                default: {
                    active: true,
                    backgroundColor: '#000000',
                    dotNumber: 100,
                    dotColor: '#ffffff',
                    dotShape: 'circle',
                    dotSize: 4,
                    speed: 2,
                    dotOpacity: 0.5,

                },
            },
            ...generateResRangeAttributies(DOT_SIZE),
            ...generateResRangeAttributies(IMAGE_SIZE),
            ...generateResRangeAttributies(ICON_SIZE),
            ...generateBorderAttributies(TEXT_BORDER),
            ...generateDimensionAttributes(TEXT_BORDER_RADIUS),
            ...generateDimensionAttributes(TEXT_PADDING),
            // ...generateTypographyAttributes(Object.values(typographyObjs)),
            ...generateBorderAttributies(IMAGE_BORDER),
            ...generateDimensionAttributes(IMAGE_BORDER_RADIUS),
        };
    }

    return settings;
});

export default attributes;
