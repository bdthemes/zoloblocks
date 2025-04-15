/**
 * External Dependencies
 */
import classNames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select, useSelect, withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { prefix } from '../constants';
import WebFont from 'webfontloader';

/**
 * Internal depencencies
 */
const {
    handleUniqueId,
    generateResAlignmentAttributies,
    generateResSelectAttributies,
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateBoxShadowAttributies,
    generateBackgroundAttributes,
} = window.zoloModule;

/**
 * Internal Dependencies
 */

/**
 * Add custom attribute for Essential Block
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
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

/**
 * Add controls and generate styles on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes, name, clientId } = props;

         if (!name.includes('zolo/')) {
             return <BlockEdit {...props} />;
         }

        const { uniqueId, parentClasses } = attributes;
        const localStoreKey = uniqueId + 'loaded';

        window.onbeforeunload = function () {
            localStorage.clear();
        };
        //Handle Tab and Panel initial Open state
        useEffect(() => {
            // Prevent anchor link default behavior
            const anchorLinks = document.querySelectorAll('.zolo-block a');
            if (anchorLinks.length > 0) {
                anchorLinks.forEach((link) => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                    });
                });
            }

            const isPageLoadedStore = localStorage.getItem(localStoreKey);

            if (!isPageLoadedStore) {
                setAttributes({
                    selectedPanel: 'first',
                    selectedStylePanel: 'first',
                    selectedExtraPanel: 'first',
                    selectedTab: 'basic',
                });
                localStorage.setItem(localStoreKey, true);
            }
        }, []);

        const prefix = name.split('/')[1];
        // UseEffect for initial setting
        useEffect(() => {
            handleUniqueId({
                prefix,
                uniqueId,
                setAttributes,
                clientId,
            });

            //Load google fonts in editor
            let googleFontFamily = [];
            for (var key in attributes) {
                if (/^(\w+)FontFamily/.test(key) && attributes[key]) {
                    googleFontFamily.push(
                        attributes[key] +
                            ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic'
                    );
                }
            }
            if (googleFontFamily.length > 0) {
                let webFontConfig = {
                    google: {
                        families: googleFontFamily,
                    },
                    context: frames['editor-canvas'],
                };
                WebFont.load(webFontConfig);
            }
        }, []);

        //set Unique Id globally
        useEffect(() => {
            if (uniqueId) {
                const filteredParentClasses = parentClasses.filter((item) => !item.includes(`parent-${prefix}`));
                setAttributes({
                    parentClasses: [...filteredParentClasses, `zolo-block parent-${uniqueId}`],
                });
            }
        }, [uniqueId]);

        //Get Device type
        const deviceType = useSelect((select) => {
            return select('core/editor').getDeviceType();
        });

        // this useEffect is for setting the resMode attribute to desktop/tab/mobile depending on the added 'zolo-res-option-' class
        useEffect(() => {
            setAttributes({
                resMode: deviceType,
            });
        }, [deviceType]);

        return (
            <>
                <BlockEdit {...props} />
            </>
        );
    };
}, 'withAdvancedControls');

/**
 * Add Attributes Filter
 */
addFilter('blocks.registerBlockType', 'zoloblocks/hoc-global', addAttributes);

/**
 * Filter for modification of Edit Function
 */
addFilter('editor.BlockEdit', 'zoloblocks/hoc-global', withAdvancedControls);
