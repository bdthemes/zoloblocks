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
    TEXT_BG_COLOR,
    TEXT_BORDER,
    TEXT_BORDER_RADIUS,
    TEXT_PADDING,
    IMAGE_BORDER,
    IMAGE_BORDER_RADIUS,
 } from './constants';

//  import * as typographyObjs from './constants/typoPrefixConstants';

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

                    textLabel: '',
                    imageSource: 'object',
                    icon: 'string',
                    primaryColor: 'string',
                    primarySize: 'string',
                    secondaryColor: 'string',
                    secondarySize: 'string',
                    textColor: 'string',
                    imageSize: 'string',
                    iconColor: 'string',
                    iconSize: 'string',
                },
            },
                ...generateNormalBGAttributes(TEXT_BG_COLOR),
                ...generateBorderAttributies(TEXT_BORDER),
                ...generateDimensionAttributes(TEXT_BORDER_RADIUS),
                ...generateDimensionAttributes(TEXT_PADDING),
                // ...generateTypographyAttributes(Object.values(typographyObjs)),

                ...generateBorderAttributies(IMAGE_BORDER),
                ...generateDimensionAttributes(IMAGE_BORDER_RADIUS),
            };

    };

    return settings;
});

export default attributes;
