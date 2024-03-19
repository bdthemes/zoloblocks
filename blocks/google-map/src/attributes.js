/**
 * Internal dependencies
 */
const { generateResRangeAttributies, generateTypographyAttributes, generateDimensionAttributes } = window.zoloModule;

import { MAP_HEIGHT, MAP_BRADIUS } from './constants';
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
    mapStyleType: {
        type: 'string',
        default: 'default',
    },
    mapId: {
        type: 'string',
    },
    mapStyleCodes: {
        type: 'string',
    },
    zoom: {
        type: 'number',
        default: 12,
    },
    latitude: {
        type: 'number',
        default: 24.8233495,
    },
    longitude: {
        type: 'number',
        default: 89.3841374,
    },
    mapType: {
        type: 'string',
        default: 'roadmap',
    },
    language: {
        type: 'string',
        default: 'en',
    },
    showUIControls: {
        type: 'boolean',
        default: true,
    },
    uiControls: {
        type: 'object',
        default: {
            fullscreenControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            zoomControl: true,
        },
    },
    draggable: {
        type: 'boolean',
        default: true,
    },
    mapTypeId: {
        type: 'string',
        default: 'roadmap',
    },
    location: {
        type: 'string',
        default: 'BdThemes',
    },
    infoWindow: {
        type: 'string',
        default:
            '<a href="https://bdthemes.com"><b>BdThemes</b></a> is the sole owner of market-leading addons for #1 Elementor such as Element Pack Pro, Prime Slider, Ultimate Post Kit, Ultimate Store Kit, Pixel Gallery, and more useful plugins.',
    },
    height: {
        type: 'number',
        default: 600,
    },
    markers: {
        type: 'array',
        default: [],
    },
    markerInfoColor: {
        type: 'string',
    },
    // Generators
    ...generateResRangeAttributies(MAP_HEIGHT),
    ...generateDimensionAttributes(MAP_BRADIUS),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
