/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBorderAttributies,
    generateResAlignmentAttributies
} = window.zoloModule;

import {TEXTPATH_ALIGN} from './constants';

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

    ...generateResAlignmentAttributies(TEXTPATH_ALIGN),

    textpathContent:{
        type:'string',
        default:'Add your curve text here'
    },
    textPathType:{
        type:'string',
        default:'M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50'
    },
    pathlink:{
        type: 'object',
        default: {
            url: '#',
            openInNewTab: false,
        },
    },
    textPathShow:{
        type:'boolean',
        default:false
    }

 
};

export default attributes;
