import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    generateResAlignmentAttributies,
    generateResSelectAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateBackgroundAttributes,
} = window.zoloModule;

function addAttributes(settings) {
    if (typeof settings.attributes === 'undefined' || !settings?.name?.includes('zolo/')) {
        return settings;
    }

    settings.attributes = {
        ...settings.attributes,
        uniqueId: {
            type: 'string',
        },
        preview: {
            type: 'boolean',
            default: false,
        },
        resMode: {
            type: 'string',
            default: 'Desktop',
        },
        parentClasses: {
            type: 'array',
            default: [],
        },
        zoloStyles: {
            type: 'object',
        },
        selectedPanel: {
            type: 'string',
            default: 'first',
        },
        selectedStylePanel: {
            type: 'string',
            default: 'first',
        },
        selectedExtraPanel: {
            type: 'string',
            default: 'first',
        },
        selectedTab: {
            type: 'string',
            default: 'basic',
        },
        responsiveness: {
            type: 'object',
            default: {
                hideDesktop: false,
                hideTab: false,
                hideMobile: false,
            },
        },
        customCss: {
            type: 'string',
            default: '',
        },
        zIndex: {
            type: 'number',
        },
        customClass: {
            type: 'string',
        },
        customClasses: {
            type: 'array',
            default: [],
        },
        zoloId: {
            type: 'string',
        },
        overflow: {
            type: 'string',
        },
        contentWidth: {
            type: 'string'
        },
        position: {
            type: 'object',
            default: {
                value: '',
                horizontalOrientation: {
                    direction: 'left',
                    offset: undefined,
                    unit: 'px',
                },
                verticalOrientation: {
                    direction: 'top',
                    offset: undefined,
                    unit: 'px',
                },
            },
        },
        transformAnimationActive: {
            type: 'boolean',
            default: false,
        },
        transformRotate3DActive: {
            type: 'boolean',
            default: false,
        },
        transformRotate3DActiveHover: {
            type: 'boolean',
            default: false,
        },
        scaleProportionally: {
            type: 'boolean',
            default: false,
        },
        scaleProportionallyHover: {
            type: 'boolean',
            default: false,
        },
        transformFlipHorizontal: {
            type: 'boolean',
            default: false,
        },
        transformFlipVertical: {
            type: 'boolean',
            default: false,
        },
        transformFlipHorizontalHover: {
            type: 'boolean',
            default: false,
        },
        transformFlipVerticalHover: {
            type: 'boolean',
            default: false,
        },
        zoloParticles: {
            type: 'object',
            default: {
                particlesId: 'zolo-particles',
                active: false,
                preset: 'dust_wind',
                particleOptions: {
                    customOptions: {},
                },
                zIndex: 0,
                colors: [],
                toggleCustomOption: false,
            },
        },
        ...generateResRangeAttributies('translateX', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('translateY', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('transformRotate', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformRotateX', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformRotateY', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformPerspective', {
            defaultUnit: 'px',
            defaultRange: 1000,
        }),
        ...generateResRangeAttributies('transformScale', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformScaleX', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformScaleY', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformSkewX', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformSkewY', {
            defaultUnit: 'deg',
        }),
        //hover
        ...generateResRangeAttributies('translateXHover', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('translateYHover', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('transformRotateHover', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformRotateXHover', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformRotateYHover', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformPerspectiveHover', {
            defaultUnit: 'px',
            defaultRange: 1000,
        }),
        ...generateResRangeAttributies('transformScaleHover', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformScaleXHover', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformScaleYHover', {
            defaultUnit: '',
        }),
        ...generateResRangeAttributies('transformSkewXHover', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transformSkewYHover', {
            defaultUnit: 'deg',
        }),
        ...generateResRangeAttributies('transitionDuration'),

        //Position

        ...generateResRangeAttributies('positionLeft', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('positionRight', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('positionTop', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('positionBottom', {
            defaultUnit: 'px',
        }),
        ...generateResRangeAttributies('customWidth', {
            defaultUnit: 'px',
        }),
        ...generateResSelectAttributies('widthType', {
            defaultSelect: 'default',
        }),
        ...generateResAlignmentAttributies('transformOriginXHover'),
        ...generateResAlignmentAttributies('transformOriginYHover'),

        ...(settings.attributes.globalConfig?.default?.margin &&
            generateDimensionAttributes(settings.attributes.globalConfig.default.margin?.prefix || 'mainMargin')),

        ...(settings.attributes.globalConfig?.default?.padding &&
            generateDimensionAttributes(settings.attributes.globalConfig.default.padding?.prefix || 'mainPadding')),

        ...(settings.attributes.globalConfig?.default?.background &&
            generateBackgroundAttributes(settings.attributes.globalConfig.default.background?.prefix || 'mainBg', settings?.attributes?.backgroundParallax)),

        ...(settings.attributes.globalConfig?.default?.border &&
            generateBorderAttributies(settings.attributes.globalConfig.default.border?.prefix || 'mainBorder')),

        ...(settings.attributes.globalConfig?.default?.borderRadius &&
            generateDimensionAttributes(settings.attributes.globalConfig.default.borderRadius?.prefix || 'mainBorderRadius')),

        ...(settings.attributes.globalConfig?.default?.boxShadow &&
            generateBoxShadowAttributies(settings.attributes.globalConfig.default.boxShadow?.prefix || 'mainBoxShadow')),
    };
    return settings;
}

addFilter('blocks.registerBlockType', 'zoloblocks/hoc-global', addAttributes);
