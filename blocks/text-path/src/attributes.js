/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
} = window.zoloModule;

import {
  
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


    // Generators
    // ...generateResAlignmentAttributies(ITEMS_ALIGN),
    // ...generateDimensionAttributes(LABEL_MARGIN),
    // ...generateNormalBGAttributes(LABEL_BG),
    // ...generateDimensionAttributes(LABEL_PADDING),
    // ...generateDimensionAttributes(LABEL_BRADIUS),
    // ...generateBorderAttributies(LABEL_BORDER),
    // ...generateDimensionAttributes(FIELD_PADDING),
    // ...generateNormalBGAttributes(FIELD_BG),
    // ...generateBorderAttributies(FIELD_BORDER),
    // ...generateDimensionAttributes(FIELD_BRADIUS),
    // ...generateResRangeAttributies(ICON_SIZE),
    // ...generateTypographyAttributes(Object.values(typographyObjs)),

    textpathContent:{
        type:'string',
        default:'Add your curve text here'
    },
    textPathType:{
        type:'string',
        default:'M45.9414 1.12402V45.3768'
    }
 
};

export default attributes;
