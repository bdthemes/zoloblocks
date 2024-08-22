/**
 * Internal dependencies
 */
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
    POSTER_HEIGHT,
    BUTTON_ALIGN,
    ICON_ALIGN,
    POSTER_BG_COLOR,
    POSTER_BORDER,
    POSTER_BORDER_RADIUS,
    POSTER_PADDING,
    POSTER_BOX_SHADOW,
    HOVER_POSTER_BG_COLOR,
    HOVER_POSTER_BORDER_RADIUS,
    HOVER_POSTER_BOX_SHADOW,
    BUTTON_BG_COLOR,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    BUTTON_PADDING,
    BUTTON_BOX_SHADOW,
    HOVER_BUTTON_BG_COLOR,
    HOVER_BUTTON_BORDER_RADIUS,
    HOVER_BUTTON_BOX_SHADOW,
    CONTENT_HEIGHT,
    CONTENT_WIDTH,
} from './constants';

import * as typographyObjs from './constants/typoPrefixConstants';

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
    lightboxType: {
        type: 'string',
        default: 'poster',
    },
    imagePoster: {
        type: 'object',
        default: {
            url: zoloPlaceholders.placeholder,
            id: '',
        },
    },
    posterIcon: {
        type: 'string',
        default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>',
    },
    showPosterIcon: {
        type: 'boolean',
        default: true,
    },
    imageRes: {
        type: 'string',
        default: 'full',
    },
    buttonText: {
        type: 'string',
        default: 'See how it works',
    },
    enableHeading: {
        type: 'boolean',
        default: true,
    },
    enableSubHeading: {
        type: 'boolean',
        default: false,
    },
    buttonHeadingText: {
        type: 'string',
        default: 'Watch Video',
    },
    buttonIcon: {
        type: 'string',
        default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>',
    },
    iconText: {
        type: 'string',
        default: '',
    },
    iconIcon: {
        type: 'string',
        default:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
    },
    lightBoxContent: {
        type: 'string',
        default: 'image',
    },
    contentCaption: {
        type: 'string',
        default: 'zoloblocks lightbox',
    },
    contentType: {
        type: 'string',
        default: 'image',
    },
    contentImage: {
        type: 'object',
        default: {
            url: zoloPlaceholders.placeholder,
            id: '',
        },
    },
    youtubeUrl: {
        type: 'string',
        default: 'https://www.youtube.com/watch?v=jX4sIXG-9fo',
    },
    vimeoUrl: {
        type: 'string',
        default: 'https://vimeo.com/76979871',
    },
    googleMapUrl: {
        type: 'string',
        default:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938',
    },

    titleColor: {
        type: 'string',
        default: '#2667ff',
    },

    hoverTitleColor: {
        type: 'string',
        default: '#2667ff',
    },
    titleSubColor: {
        type: 'string',
        default: '#2667ff',
    },
    hoverTitleSubColor: {
        type: 'string',
        default: '#2667ff',
    },

    // style attributes

    ...generateResRangeAttributies(POSTER_HEIGHT, { default: 300 }),
    ...generateResAlignmentAttributies(BUTTON_ALIGN, { default: 'center' }),
    ...generateResAlignmentAttributies(ICON_ALIGN),
    ...generateNormalBGAttributes(POSTER_BG_COLOR),
    ...generateBorderAttributies(POSTER_BORDER),
    ...generateDimensionAttributes(POSTER_BORDER_RADIUS),
    ...generateDimensionAttributes(POSTER_PADDING),
    ...generateBoxShadowAttributies(POSTER_BOX_SHADOW),
    ...generateResRangeAttributies(CONTENT_WIDTH),
    ...generateResRangeAttributies(CONTENT_HEIGHT),


    ...generateNormalBGAttributes(HOVER_POSTER_BG_COLOR),
    ...generateDimensionAttributes(HOVER_POSTER_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HOVER_POSTER_BOX_SHADOW),

    ...generateNormalBGAttributes(BUTTON_BG_COLOR),
    ...generateBorderAttributies(BUTTON_BORDER),
    ...generateDimensionAttributes(BUTTON_BORDER_RADIUS),
    ...generateDimensionAttributes(BUTTON_PADDING),
    ...generateBoxShadowAttributies(BUTTON_BOX_SHADOW),
    ...generateNormalBGAttributes(HOVER_BUTTON_BG_COLOR),
    ...generateDimensionAttributes(HOVER_BUTTON_BORDER_RADIUS),
    ...generateBoxShadowAttributies(HOVER_BUTTON_BOX_SHADOW),
    ...generateTypographyAttributes(Object.values(typographyObjs)),
};

export default attributes;
