/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
    generateBorderAttributies,
} = window.zoloModule;

import {
    PROGRESS_BAR_SIZE,PROGRESS_ALIGN
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
    // // Generators
    // ...generateResAlignmentAttributies(ITEMS_ALIGN),
    // ...generateResRangeAttributies(STAR_SIZE),
    // ...generateResRangeAttributies(TITLE_GAP),
    // 
    // // Icon
    // ...generateResRangeAttributies(ICON_SIZE),
    // ...generateBorderAttributies(ICON_BORDER),
    // ...generateDimensionAttributes(ICON_BORDER_RADIUS),
    // ...generateDimensionAttributes(ICON_PADDING),
    // ...generateNormalBGAttributes(ICON_BG),
    //progress bar 

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //progress bar size
    ...generateResRangeAttributies(PROGRESS_BAR_SIZE,{
        defaultRange:500
    }),
    ...generateResAlignmentAttributies(PROGRESS_ALIGN),

    //attr
    progressValue:{
        type:'number',
        default:50
    },
    progressDuration:{
        type:'number',
        default:3

    },
    progressTitle:{
        type:'string',
        default:'Total'
    },
    toggleLabel:{
        type:'boolean',
        default:true
    },

    progressSize:{
        type:'number',
        default:3
    },
    progressBarColor:{
        type:'string'
    },

    //progress fill
    progressFillColor:{
        type:'string',
        default:'#e5e5e5'
    },
    progressFillSize:{
        type:'string',
        default:3
    },
    //number title
    numberColor:{
        type:'string'
    },
    titleColor:{
        type:'string'
    },
    circleColor:{
        type:'string'
    }
   

};

export default attributes;
