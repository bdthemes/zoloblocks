/**
 * Internal dependencies
 */
const {
    generateResRangeAttributies,
    generateTypographyAttributes,
    generateResAlignmentAttributies,
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

    //progress bar 

    ...generateTypographyAttributes(Object.values(typographyObjs)),

    //progress bar size
    ...generateResRangeAttributies(PROGRESS_BAR_SIZE),
    ...generateResAlignmentAttributies(PROGRESS_ALIGN,{defaultAlign:'center'}),

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

    //progress test
    toggleProgressColor:{
        type:'boolean',
        default:false
    },
    progressRound:{
        type:'boolean',
        default:false
    },
    progressTopColor:{
        type:'string',
        default:'#00bc9b'
    },
    progressBottomColor:{
        type:'string'
    },

    //progress fill
    progressFillColor:{
        type:'string',
        default:'#e5e5e5'
    },
    progressFillSize:{
        type:'number',
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
