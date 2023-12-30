/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateDimensionAttributes, generateTypographyAttributes, generateResAlignmentAttributies } =
    window.zoloModule;

import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

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
    ...generateResAlignmentAttributies(ITEMS_ALIGN),
    ...generateResRangeAttributies(STAR_SIZE),
    ...generateResRangeAttributies(TITLE_GAP),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    apiKey: {
        type: 'string',
        default: 'AIzaSyC6Gn52n-ELgBL2Dh2A0g1Ub9mraSsN97U',
    },
    mapId: {
        type: 'string',
        default: '31bf003fdd5e1eb2',
    },
    zoom: {
        type: 'number',
        default: 12,
    },
    latitude: {
        type: 'number',
        default: -33.9249,
    },
    longitude: {
        type: 'number',
        default: 18.4241,
    },
    mapType: {
        type: 'string',
        default: 'roadmap',
    },
    language: {
        type: 'string',
        default: 'en',
    },
    disableDefaultUI: {
        type: 'boolean',
        default: false,
    },
    draggable: {
        type: 'boolean',
        default: true,
    },

    fullscreenControl: {
        type: 'boolean',
        default: false,
    },

    mapTypeControl: {
        type: 'boolean',
        default: false,
    },
    scaleControl: {
        type: 'boolean',
        default: false,
    },
    scrollwheel: {
        type: 'boolean',
        default: false,
    },
    scaleControl: {
        type: 'boolean',
        default: false,
    },
    rotateControl: {
        type: 'boolean',
        default: false,
    },
    streetViewControl: {
        type: 'boolean',
        default: false,
    },

    zoomControl: {
        type: 'boolean',
        default: false,
    },

    mapTypeId: {
        type: 'string',
        default: 'roadmap',
    },
    location: {
        type: 'string',
        default: 'Cape Town, South Africa',
    },
    preview: {
        type: 'boolean',
        default: false,
    },
    uniqueId: {
        type: 'string',
        default: '',
    },
    height: {
        type: 'number',
        default: 400,
    },
};

export default attributes;
