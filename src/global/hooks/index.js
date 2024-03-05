/**
 * External Dependencies
 */
import classNames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState, Fragment, useRef } from '@wordpress/element';
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
    generateResRangeAttributies,
    generateBorderAttributies,
    generateDimensionAttributes,
    generateNormalBGAttributes,
    generateBoxShadowAttributies,
    generateTypographyAttributes,
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
    if (typeof settings.attributes === 'undefined') {
        return settings;
    }
    if (settings.category && settings.category == 'zolo-blocks') {
        if (settings.name === 'zolo/advanced-button') {
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
            floatingAnimationActive:{
                type: 'boolean',
                default: false,
            },
            floatingAnimation:{
                type: 'object',
                default: {
                    translateX: {
                        minValue: -100,
                        maxValue: 100,
                        unit: 'px',

                    },
                    translateY: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'px',
                    },
                    translateZ: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'px',
                    },
                    rotateX: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    rotateY: {
                        minValue: 0,
                        maxValue: 0,
                    },
                    rotateZ: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    scaleX: {
                        minValue: 0,
                        maxValue: 5,
                        unit: '',
                    },
                    scaleY: {
                        minValue: 0,
                        maxValue: 5,
                        unit: '',
                    },
                    scaleZ: {
                        minValue: 0,
                        maxValue: 5,
                        unit: '',
                    },
                    skewX: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    skewY: {
                        minValue: 0,
                        maxValue: 0,
                        unit: 'deg',
                    },
                    opacity: {
                        minValue: 1,
                        maxValue: 1,
                        unit: '',
                    },
                    easing: 'ease-out',
                    easingCustom: '',
                    repeat: false,
                    perspective: 0,
                    duration: 3000,
                    delay: 0,
                    transformOrigin: 'center',
                },
            },
            entranceAnimationActive: {
                type: 'boolean',
                default: false,
            },
            entranceAnimation: {
                type: 'object',
                default: {
                    translateX: {
                        value: 0,
                        unit: 'px',
                    },
                    translateY: {
                        value: 50,
                        unit: 'px',
                    },
                    translateZ: {
                        value: 0,
                        unit: 'px',
                    },
                    rotateX: {
                        value: 0,
                        unit: 'deg',
                    },
                    rotateY: {
                        value: 0,
                        unit: 'deg',
                    },
                    rotateZ: {
                        value: 0,
                        unit: 'deg',
                    },
                    scaleX: {
                        value: 1,
                        unit: '',
                    },
                    scaleY: {
                        value: 1,
                        unit: '',
                    },
                    scaleZ: {
                        value: 1,
                        unit: '',
                    },
                    skewX: {
                        value: 0,
                        unit: 'deg',
                    },
                    skewY: {
                        value: 0,
                        unit: 'deg',
                    },
                    opacity: 0,
                    easing: 'ease-out',
                    easingCustom: '',
                    repeat: false,
                    perspective: 0,
                    duration: 600,
                    delay: 0,
                    transformOrigin: 'center',
                    presetAnimation: 'bottomMedium',
                    transformOriginCustom: '',
                },
            },
            ...(settings.attributes.globalConfig?.default?.margin &&
                generateDimensionAttributes(settings.attributes.globalConfig.default.margin?.prefix || 'mainMargin')),

            ...(settings.attributes.globalConfig?.default?.padding &&
                generateDimensionAttributes(settings.attributes.globalConfig.default.padding?.prefix || 'mainPadding')),

            ...(settings.attributes.globalConfig?.default?.background &&
                generateBackgroundAttributes(settings.attributes.globalConfig.default.background?.prefix || 'mainBg')),

            ...(settings.attributes.globalConfig?.default?.border &&
                generateBorderAttributies(settings.attributes.globalConfig.default.border?.prefix || 'mainBorder')),

            ...(settings.attributes.globalConfig?.default?.borderRadius &&
                generateDimensionAttributes(settings.attributes.globalConfig.default.borderRadius?.prefix || 'mainBorderRadius')),

            ...(settings.attributes.globalConfig?.default?.boxShadow &&
                generateBoxShadowAttributies(settings.attributes.globalConfig.default.boxShadow?.prefix || 'mainBoxShadow')),
        };
    }
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
        const { attributes, setAttributes, isSelected, name, clientId } = props;

        const blockType = select('core/blocks').getBlockType(name);

        if (blockType.category != 'zolo-blocks') {
            return <BlockEdit {...props} />;
        }

        const {
            uniqueId,
            resMode,
            parentClasses,
            zoloStyles,
            customCss,
            selectedPanel,
            selectedStylePanel,
            selectedExtraPanel,
            selectedTab,
        } = attributes;

        const isBlockJustInserted = select('core/block-editor').wasBlockJustInserted(clientId);
        const [editorType, setEditorType] = useState();

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

        //
        useEffect(() => {
            if (!zoloParams) {
                setEditorType(false);
                return;
            }

            if (zoloParams.editor_type === 'edit-site') {
                setEditorType('core/edit-site');
            } else if (zoloParams.editor_type === 'edit-post') {
                setEditorType('core/edit-post');
            } else {
                setEditorType(false);
            }
        }, []);

        //Get Device type from "__experimentalGetPreviewDeviceType" Function
        const deviceType = useSelect((select) => {
            if (editorType && typeof editorType === 'string') {
                return select(editorType).__experimentalGetPreviewDeviceType();
            }
            return 'Desktop';
        });

        // this useEffect is for setting the resMode attribute to desktop/tab/mobile depending on the added 'zolo-res-option-' class
        useEffect(() => {
            setAttributes({
                resMode: deviceType,
            });
        }, [deviceType]);

        return (
            <Fragment>
                <BlockEdit {...props} />
            </Fragment>
        );
    };
}, 'withAdvancedControls');

/**
 * Add Attributes Filter
 */
addFilter('blocks.registerBlockType', 'zolo-blocks/hoc-global', addAttributes);

/**
 * Filter for modification of Edit Function
 */
addFilter('editor.BlockEdit', 'zolo-blocks/hoc-global', withAdvancedControls);
