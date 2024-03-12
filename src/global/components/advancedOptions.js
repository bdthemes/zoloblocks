/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { animate, timeline } from 'motion';
import { SelectControl, ToggleControl, TextControl, Button, FormTokenField } from '@wordpress/components';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * Internal dependencies
 */
import BackgroundControl from '../../controls/background-control';
import ResDimensionsControl from '../../controls/dimensions-control';
import BorderControl from '../../controls/border-control';
import BoxShadowControl from '../../controls/boxshadow-control';
import RangeResetControl from '../../controls/range-reset-control';
import CustomCSSControl from '../../controls/customcss-control';
import OverflowControl from '../../controls/overflow-control';
import PopoverControl from '../../controls/popover-control';
import SimpleRangeControl from '../../controls/simple-range-control';
import ZoloPanelBody from '../../controls/zolo-panelbody';
import MultiRangeControl from '../../controls/multi-range-control';
import TabPanelControl from '../../controls/tabpanel-control';
import ResRangeControl from '../../controls/res-range-control';
import ResAlignmentControl from '../../controls/res-alignment-control';

import {
    DEFAULT_ALIGNS,
    DEFAULT_ALIGNS_VERTICAL,
    ANIMATION_TYPES,
    TRANSFORM_ORIGINS,
    EASING_TYPES,
    TRANSLATE_ICON,
    ROTATE_ICON,
    SCALE_ICON,
    SKEW_ICON,
    OPACITY_ICON,
    FLIP_ICON,
} from '../constants';
export const AdvancedOptions = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEntrancePlaying, setIsEntrancePlaying] = useState(false);
    const { attributes, setAttributes, requiredProps } = props;

    const {
        uniqueId,
        responsiveness,
        entranceAnimationActive,
        floatingAnimationActive,
        entranceAnimation,
        floatingAnimation,
        transformRotate3DActive,
        transformRotate3DActiveHover,
        scaleProportionally,
        scaleProportionallyHover,
        transformFlipHorizontal,
        transformFlipVertical,
        transformFlipHorizontalHover,
        transformFlipVerticalHover,
        parentClasses,
        customClass,
        customClasses,
        globalConfig,
        zoloId,
        overflow,
    } = attributes;

    // handle entrance animation start
    const handleEntranceAnimationTween = () => {
        // define the animation tween
        let tween;
        const targetElement = document.querySelectorAll(`.${uniqueId}.zolo-entrance-animation`);
        // Define the initial position and properties of the box
        gsap.set(targetElement, {opacity: 0 });

        const transformOptions = {};
        const transformOptionsGlobal = {
            duration: entranceAnimation.duration ? entranceAnimation.duration / 1000 : 2,
            delay: entranceAnimation.delay ? entranceAnimation.delay / 1000 : 0,
            ease: entranceAnimation.easing !== 'custom' ? entranceAnimation.easing : entranceAnimation.easingCustom.split(';')[0],
        };

        if (entranceAnimation.translateX.value !== 0) {
            const xKey = entranceAnimation.translateX.unit === 'px' ? 'x' : 'xPercent';
            transformOptions[xKey] = entranceAnimation.translateX.value;
        }
        if (entranceAnimation.translateY.value !== 0) {
            const yKey = entranceAnimation.translateY.unit === 'px' ? 'y' : 'yPercent';
            transformOptions[yKey] = entranceAnimation.translateY.value;
        }
        if (entranceAnimation.translateZ.value !== 0) {
            const zKey = entranceAnimation.translateZ.unit === 'px' ? 'z' : 'zPercent';
            transformOptions[zKey] = entranceAnimation.translateZ.value;
        }

        // ROTATION
        if (entranceAnimation.rotateX.value !== 0) {
            transformOptions.rotationX = entranceAnimation.rotateX.value;
        }
        if (entranceAnimation.rotateY.value !== 0) {
            transformOptions.rotationY = entranceAnimation.rotateY.value;
        }
        if (entranceAnimation.rotateZ.value !== 0) {
            transformOptions.rotationZ = entranceAnimation.rotateZ.value;
        }
        // SCALE
        if (entranceAnimation.scaleX.value !== 0) {
            transformOptions.scaleX = entranceAnimation.scaleX.value;
        }
        if (entranceAnimation.scaleY.value !== 0) {
            transformOptions.scaleY = entranceAnimation.scaleY.value;
        }
        if (entranceAnimation.scaleZ.value !== 0) {
            transformOptions.scale = entranceAnimation.scaleZ.value;
        }
        // SKEW
        if (entranceAnimation.skewX.value !== 0) {
            transformOptions.skewX = entranceAnimation.skewX.value;
        }
        if (entranceAnimation.skewY.value !== 0) {
            transformOptions.skewY = entranceAnimation.skewY.value;
        }
        // ADDITIONAL
        if (entranceAnimation.perspective !== 0) {
            transformOptions.transformPerspective = entranceAnimation.perspective;
        }
        if (entranceAnimation.opacity !== 0) {
            transformOptions.opacity = entranceAnimation.opacity;
        }
        // Create the animation tween
        if (entranceAnimation.presetAnimation === 'custom') {
            // merge the global options and the custom options
            tween = gsap.to(targetElement, {
                ...transformOptions,
                ...transformOptionsGlobal,
            });
        } else {
            const presetAnimations = {
                fade: {
                    opacity: 1,
                },
                slide: {
                    xPercent: 100,
                    opacity: 1,
                },
                scale: {
                    scale: 0,
                    opacity: 1,
                },
                rotate: {
                    rotation: 180,
                    opacity: 1,
                },
                flip: {
                    rotationY: 180,
                    opacity: 1,
                },
                zoom: {
                    scale: 0,
                    opacity: 1,
                },
                scaleUp: {
                    scale: 1.5,
                    opacity: 1,
                },
                scaleDown: {
                    scale: 0.5,
                    opacity: 1,
                },
                top: {
                    yPercent: -100,
                    opacity: 1,
                },
                right: {
                    xPercent: 100,
                    opacity: 1,
                },
                bottom: {
                    yPercent: 100,
                    opacity: 1,
                },
                left: {
                    xPercent: -100,
                    opacity: 1,
                },
                topSmall: {
                    yPercent: -20,
                    opacity: 1,
                },
                rightSmall: {
                    xPercent: 20,
                    opacity: 1,
                },
                bottomSmall: {
                    yPercent: 20,
                    opacity: 1,
                },
                leftSmall: {
                    xPercent: -20,
                    opacity: 1,
                },
                topMedium: {
                    yPercent: -50,
                    opacity: 1,
                },
                rightMedium: {
                    xPercent: 50,
                    opacity: 1,
                },
                bottomMedium: {
                    yPercent: 50,
                    opacity: 1,
                },
                leftMedium: {
                    xPercent: -50,
                    opacity: 1,
                },
            };
            const presetAnimation = presetAnimations[entranceAnimation.presetAnimation];
            tween = gsap.to(targetElement, {
                ...presetAnimation,
                ...transformOptionsGlobal,
            });
        }

        // Function to start or reset the animation
        if (isEntrancePlaying) {
            tween.restart(); // Restart the animation
        } else {
            tween.pause(); // Pause the animation
            gsap.set(targetElement, { clearProps: 'all' }); // Reset the position and properties
        }
        return tween;
    };

    useEffect(() => {
        const tween = handleEntranceAnimationTween();
        return () => {
            tween.kill(); // Kill the tween on unmount
        };
    }, [isEntrancePlaying]);

    // Handler for toggling animation
    const handleEntranceToggle = () => {
        setIsEntrancePlaying(!isEntrancePlaying);
    };

    // handle entrance animation end

    const handleFloatingAnimation = () => {
        const targetElement = document.querySelectorAll(`.${uniqueId}.zolo-floating-animation`);

        let startValue = [];
        let endValue = [];
        const otherOptions = {
            repeat: Infinity,
            direction: 'alternate',
        };

        if (floatingAnimation.translateX.minValue !== 0) {
            startValue.push(`translateX(${floatingAnimation.translateX.minValue}${floatingAnimation.translateX.unit})`);
        }
        if (floatingAnimation.translateY.minValue !== 0) {
            startValue.push(`translateY(${floatingAnimation.translateY.minValue}${floatingAnimation.translateY.unit})`);
        }
        if (floatingAnimation.translateZ.minValue !== 0) {
            startValue.push(`translateZ(${floatingAnimation.translateZ.minValue}${floatingAnimation.translateZ.unit})`);
        }

        if (floatingAnimation.scaleX.minValue !== 0) {
            startValue.push(`scaleX(${floatingAnimation.scaleX.minValue}${floatingAnimation.scaleX.unit})`);
        }
        if (floatingAnimation.scaleY.minValue !== 0) {
            startValue.push(`scaleY(${floatingAnimation.scaleY.minValue}${floatingAnimation.scaleY.unit})`);
        }
        if (floatingAnimation.scaleZ.minValue !== 0) {
            startValue.push(`scaleZ(${floatingAnimation.scaleZ.minValue}${floatingAnimation.scaleZ.unit})`);
        }

        if (floatingAnimation.skewX.minValue !== 0) {
            startValue.push(`skewX(${floatingAnimation.skewX.minValue}${floatingAnimation.skewX.unit})`);
        }
        if (floatingAnimation.skewY.minValue !== 0) {
            startValue.push(`skewY(${floatingAnimation.skewY.minValue}${floatingAnimation.skewY.unit})`);
        }

        if (floatingAnimation.rotateX.minValue !== 0) {
            startValue.push(`rotateX(${floatingAnimation.rotateX.minValue}deg)`);
        }
        if (floatingAnimation.rotateY.minValue !== 0) {
            startValue.push(`rotateY(${floatingAnimation.rotateY.minValue}deg)`);
        }
        if (floatingAnimation.rotateZ.minValue !== 0) {
            startValue.push(`rotateZ(${floatingAnimation.rotateZ.minValue}deg)`);
        }

        // end value
        if (floatingAnimation.translateX.maxValue !== 0) {
            endValue.push(`translateX(${floatingAnimation.translateX.maxValue}${floatingAnimation.translateX.unit})`);
        }
        if (floatingAnimation.translateY.maxValue !== 0) {
            endValue.push(`translateY(${floatingAnimation.translateY.maxValue}${floatingAnimation.translateY.unit})`);
        }
        if (floatingAnimation.translateZ.maxValue !== 0) {
            endValue.push(`translateZ(${floatingAnimation.translateZ.maxValue}${floatingAnimation.translateZ.unit})`);
        }
        if (floatingAnimation.skewX.maxValue !== 0) {
            endValue.push(`skewX(${floatingAnimation.skewX.maxValue}${floatingAnimation.skewX.unit})`);
        }
        if (floatingAnimation.skewY.maxValue !== 0) {
            endValue.push(`skewY(${floatingAnimation.skewY.maxValue}${floatingAnimation.skewY.unit})`);
        }
        if (floatingAnimation.rotateX.maxValue !== 0) {
            endValue.push(`rotateX(${floatingAnimation.rotateX.maxValue}deg)`);
        }
        if (floatingAnimation.rotateY.maxValue !== 0) {
            endValue.push(`rotateY(${floatingAnimation.rotateY.maxValue}deg)`);
        }
        if (floatingAnimation.rotateZ.maxValue !== 0) {
            endValue.push(`rotateZ(${floatingAnimation.rotateZ.maxValue}deg)`);
        }

        if (floatingAnimation.duration !== 0) {
            otherOptions.duration = floatingAnimation.duration / 1000;
        }
        if (floatingAnimation.delay !== 0) {
            otherOptions.delay = floatingAnimation.delay / 1000;
        }
        if (floatingAnimation.easing !== 'custom') {
            otherOptions.easing = floatingAnimation.easing;
        } else {
            otherOptions.easing = [floatingAnimation.easingCustom.split(';')[0]];
        }

        const transformValueStart = startValue.join('');
        const transformValueEnd = endValue.join('');
        const animation = animate(
            targetElement,
            {
                transform: [transformValueStart, transformValueEnd],
                opacity: [floatingAnimation.opacity.minValue, floatingAnimation.opacity.maxValue],
            },
            otherOptions
        );

        return animation;
    };

    const handleFloatingToggle = () => {
        let animation = handleFloatingAnimation();
        if (isPlaying) {
            animation.pause();
        } else {
            animation.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleResponsiveness = (key, value, classname) => {
        let updatedClasses = [...parentClasses, classname];
        //remove class is value is false
        if (value === false) {
            updatedClasses = updatedClasses.filter(function (e) {
                return e !== classname;
            });
        }
        const uniqueClasses = [...new Set(updatedClasses)];
        setAttributes({
            responsiveness: {
                ...responsiveness,
                [key]: value,
            },
            parentClasses: [...uniqueClasses],
        });
    };

    // handle custom classes
    const handleCustomClasses = (classname) => {
        const updatedClassesString = classname.join(' ');
        const updatedClasses = parentClasses.filter(function (e) {
            return e !== customClass;
        });
        setAttributes({
            customClass: updatedClassesString,
            parentClasses: [...updatedClasses, updatedClassesString],
        });
    };

    return (
        <>
            <ZoloPanelBody title={__('Spacing', 'zolo-blocks')} panelProps={props} firstOpen={true} extraPanel={true}>
                {globalConfig?.margin && (
                    <ResDimensionsControl
                        label={__('Margin', 'zolo-blocks')}
                        controlName={globalConfig.margin.prefix || 'mainMargin'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                        max={200}
                    />
                )}
                {globalConfig?.padding && (
                    <ResDimensionsControl
                        label={__('Padding', 'zolo-blocks')}
                        controlName={globalConfig.padding.prefix || 'mainPadding'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                        max={200}
                    />
                )}
            </ZoloPanelBody>
            {globalConfig?.background && (
                <ZoloPanelBody title={__('Background', 'zolo-blocks')} panelProps={props} extraPanel={true}>
                    <BackgroundControl controlName={globalConfig.background.prefix || 'mainBg'} requiredProps={requiredProps} />
                </ZoloPanelBody>
            )}
            {(globalConfig?.border || globalConfig?.borderRadius || globalConfig?.boxShadow) && (
                <ZoloPanelBody title={__('Border', 'zolo-blocks')} panelProps={props} extraPanel={true}>
                    {globalConfig?.border && (
                        <BorderControl
                            label={__('Border', 'zolo-blocks')}
                            controlName={globalConfig.border.prefix || 'mainBorder'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}

                    {globalConfig?.borderRadius && (
                        <ResDimensionsControl
                            label={__('Border Radius', 'zolo-blocks')}
                            controlName={globalConfig.borderRadius.prefix || 'mainBorderRadius'}
                            requiredProps={requiredProps}
                            forBorderRadius={true}
                        />
                    )}
                    {globalConfig?.boxShadow && (
                        <BoxShadowControl
                            controlName={globalConfig.boxShadow.prefix || 'mainBoxShadow'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}
                </ZoloPanelBody>
            )}

            {globalConfig?.responsiveControls && (
                <>
                    <ZoloPanelBody title={__('Responsive Control', 'zolo-blocks')} panelProps={props} extraPanel={true}>
                        <ToggleControl
                            label={__('Hide on Desktop', 'zolo-blocks')}
                            checked={responsiveness?.hideDesktop || false}
                            onChange={() => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')}
                        />
                        <ToggleControl
                            label={__('Hide on Tablet', 'zolo-blocks')}
                            checked={responsiveness?.hideTab || false}
                            onChange={() => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')}
                        />
                        <ToggleControl
                            label={__('Hide on Mobile', 'zolo-blocks')}
                            checked={responsiveness?.hideMobile || false}
                            onChange={() => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')}
                        />
                    </ZoloPanelBody>
                </>
            )}
            <ZoloPanelBody title={__('Overflow', 'zolo-blocks')} panelProps={props} extraPanel={true} isNew={true}>
                <OverflowControl
                    value={overflow}
                    onChange={(v) => {
                        setAttributes({ overflow: v });
                    }}
                />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Z Index', 'zolo-blocks')} panelProps={props} extraPanel={true}>
                <RangeResetControl
                    label={__('Set Z Index ', 'zolo-blocks')}
                    controlName={'zIndex'}
                    requiredProps={requiredProps}
                    min={0}
                    max={100}
                    step={1}
                    help={__('Set the z-index for the section', 'zolo-blocks')}
                />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Custom Attributes', 'zolo-blocks')} panelProps={props} extraPanel={true}>
                <TextControl
                    label={__('Add Wrapper ID', 'zolo-blocks')}
                    onChange={(value) => {
                        const id = value.replace(/\s/g, '_');
                        setAttributes({ zoloId: id });
                    }}
                    value={zoloId}
                    help={__('Add an ID to the block wrapper.', 'zolo-blocks')}
                />
                <FormTokenField
                    label={__('Add Custom Class', 'zolo-blocks')}
                    value={customClasses}
                    onChange={(tokens) => {
                        // replace spaces with dashes
                        const updatedTokens = tokens.map((token) => token.replace(/\s/g, '-'));
                        setAttributes({ customClasses: updatedTokens });
                        handleCustomClasses(updatedTokens);
                    }}
                    help={__('Add custom class(es) to the block. Separate multiple classes with a space.', 'zolo-blocks')}
                />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Custom CSS', 'zolo-blocks')} panelProps={props} extraPanel={true} isNew={true}>
                <CustomCSSControl attributes={attributes} setAttributes={setAttributes} />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Entrance Animation', 'zolo-blocks')} panelProps={props} extraPanel={true} isPro={true} isNew={true}>
                <ToggleControl
                    label={__('Entrance Animation', 'zolo-blocks')}
                    checked={entranceAnimationActive}
                    onChange={() => {
                        setAttributes({
                            entranceAnimationActive: !entranceAnimationActive,
                        });
                        if (!entranceAnimationActive) {
                            setAttributes({
                                parentClasses: [...parentClasses, 'zolo-entrance-animation'],
                            });
                        } else {
                            setAttributes({
                                parentClasses: parentClasses.filter(function (e) {
                                    return e !== 'zolo-entrance-animation';
                                }),
                            });
                        }
                    }}
                />

                {entranceAnimationActive && (
                    <>
                        <SelectControl
                            label={__('Animation Type', 'zolo-blocks')}
                            value={entranceAnimation.presetAnimation}
                            options={ANIMATION_TYPES}
                            onChange={(value) => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        presetAnimation: value,
                                    },
                                });
                            }}
                        />
                        {entranceAnimation.presetAnimation === 'custom' && (
                            <>
                                {entranceAnimation.transformOrigin === 'custom' && (
                                    <TextControl
                                        label={__('Transform Origin Custom', 'zolo-blocks')}
                                        help={__(
                                            'Enter a custom transform origin, for example see here: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin',
                                            'zolo-blocks'
                                        )}
                                        value={entranceAnimation.transformOriginCustom}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    transformOriginCustom: value,
                                                },
                                            });
                                        }}
                                    />
                                )}

                                <PopoverControl label={__('Translate', 'zolo-blocks')} icon={TRANSLATE_ICON}>
                                    <SimpleRangeControl
                                        label={__('Translate X', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateX: {
                                                        ...entranceAnimation.translateX,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.translateX?.value}
                                        onUnitChange={(unit) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateX: {
                                                        ...entranceAnimation.translateX,
                                                        unit,
                                                    },
                                                },
                                            });
                                        }}
                                        unit={entranceAnimation?.translateX?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateX: {
                                                        ...entranceAnimation.translateX,
                                                        value: 0,
                                                        unit: 'px',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-100}
                                        max={100}
                                        noUnits={false}
                                    />
                                    <SimpleRangeControl
                                        label={__('Translate Y', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateY: {
                                                        ...entranceAnimation.translateY,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.translateY?.value}
                                        onUnitChange={(unit) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateY: {
                                                        ...entranceAnimation.translateY,
                                                        unit,
                                                    },
                                                },
                                            });
                                        }}
                                        unit={entranceAnimation?.translateY?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateY: {
                                                        ...entranceAnimation.translateY,
                                                        value: 0,
                                                        unit: 'px',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-100}
                                        max={100}
                                        noUnits={false}
                                    />
                                    <SimpleRangeControl
                                        label={__('Translate Z', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateZ: {
                                                        ...entranceAnimation.translateZ,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.translateZ?.value}
                                        onUnitChange={(unit) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateZ: {
                                                        ...entranceAnimation.translateZ,
                                                        unit,
                                                    },
                                                },
                                            });
                                        }}
                                        unit={entranceAnimation?.translateZ?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    translateZ: {
                                                        ...entranceAnimation.translateZ,
                                                        value: 0,
                                                        unit: 'px',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-100}
                                        max={100}
                                        noUnits={false}
                                    />
                                </PopoverControl>
                                <PopoverControl label={__('Rotate', 'zolo-blocks')} icon={ROTATE_ICON}>
                                    <SimpleRangeControl
                                        label={__('Rotate X', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateX: {
                                                        ...entranceAnimation.rotateX,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.rotateX?.value}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateX: {
                                                        ...entranceAnimation.rotateX,
                                                        value: 0,
                                                        unit: 'deg',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                        noUnits={true}
                                    />
                                    <SimpleRangeControl
                                        label={__('Rotate Y', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateY: {
                                                        ...entranceAnimation.rotateY,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.rotateY?.value}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateY: {
                                                        ...entranceAnimation.rotateY,
                                                        value: 0,
                                                        unit: 'deg',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                        noUnits={true}
                                    />
                                    <SimpleRangeControl
                                        label={__('Rotate Z', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateZ: {
                                                        ...entranceAnimation.rotateZ,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.rotateZ?.value}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    rotateZ: {
                                                        ...entranceAnimation.rotateZ,
                                                        value: 0,
                                                        unit: 'deg',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                        noUnits={true}
                                    />
                                    <SelectControl
                                        label={__('Transform Origin', 'zolo-blocks')}
                                        value={entranceAnimation.transformOrigin}
                                        options={TRANSFORM_ORIGINS}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    transformOrigin: value,
                                                },
                                            });
                                        }}
                                    />
                                </PopoverControl>
                                <PopoverControl label={__('Scale', 'zolo-blocks')} icon={SCALE_ICON}>
                                    <SimpleRangeControl
                                        label={__('Scale X', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleX: {
                                                        ...entranceAnimation.scaleX,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.scaleX?.value}
                                        onUnitChange={(unit) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleX: {
                                                        ...entranceAnimation.scaleX,
                                                        unit,
                                                    },
                                                },
                                            });
                                        }}
                                        unit={entranceAnimation?.scaleX?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleX: {
                                                        ...entranceAnimation.scaleX,
                                                        value: 0,
                                                        unit: 'deg',
                                                    },
                                                },
                                            });
                                        }}
                                        min={0}
                                        step={0.1}
                                        max={5}
                                        noUnits={true}
                                    />
                                    <SimpleRangeControl
                                        label={__('Scale Y', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleY: {
                                                        ...entranceAnimation.scaleY,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.scaleY?.value}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleY: {
                                                        ...entranceAnimation.scaleY,
                                                        value: 0,
                                                    },
                                                },
                                            });
                                        }}
                                        min={0}
                                        step={0.1}
                                        max={5}
                                        noUnits={true}
                                    />
                                    <SimpleRangeControl
                                        label={__('Scale Z', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleZ: {
                                                        ...entranceAnimation.scaleZ,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.scaleZ?.value}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    scaleZ: {
                                                        ...entranceAnimation.scaleZ,
                                                        value: 0,
                                                    },
                                                },
                                            });
                                        }}
                                        min={0}
                                        step={0.1}
                                        max={5}
                                        noUnits={true}
                                    />
                                </PopoverControl>
                                <PopoverControl label={__('Skew', 'zolo-blocks')} icon={SKEW_ICON}>
                                    <SimpleRangeControl
                                        label={__('Skew X', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    skewX: {
                                                        ...entranceAnimation.skewX,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.skewX?.value}
                                        unit={entranceAnimation?.skewX?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    skewX: {
                                                        ...entranceAnimation.skewX,
                                                        value: 0,
                                                    },
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                        noUnits={true}
                                    />

                                    <SimpleRangeControl
                                        label={__('Skew Y', 'zolo-blocks')}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    skewY: {
                                                        ...entranceAnimation.skewY,
                                                        value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={entranceAnimation?.skewY?.value}
                                        onUnitChange={(unit) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    skewY: {
                                                        ...entranceAnimation.skewY,
                                                        unit,
                                                    },
                                                },
                                            });
                                        }}
                                        unit={entranceAnimation?.skewY?.unit}
                                        onReset={() => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    skewY: {
                                                        ...entranceAnimation.skewY,
                                                        value: 0,
                                                        unit: 'deg',
                                                    },
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                        noUnits={true}
                                    />
                                </PopoverControl>

                                <SimpleRangeControl
                                    label={__('Perspective', 'zolo-blocks')}
                                    value={entranceAnimation.perspective}
                                    onChange={(value) => {
                                        setAttributes({
                                            entranceAnimation: {
                                                ...entranceAnimation,
                                                perspective: value,
                                            },
                                        });
                                    }}
                                    onReset={() => {
                                        setAttributes({
                                            entranceAnimation: {
                                                ...entranceAnimation,
                                                perspective: 0,
                                            },
                                        });
                                    }}
                                    min={0}
                                    max={10000}
                                    noUnits={true}
                                />
                                <SimpleRangeControl
                                    label={__('Opacity', 'zolo-blocks')}
                                    value={entranceAnimation.opacity}
                                    onChange={(value) => {
                                        setAttributes({
                                            entranceAnimation: {
                                                ...entranceAnimation,
                                                opacity: value,
                                            },
                                        });
                                    }}
                                    onReset={() => {
                                        setAttributes({
                                            entranceAnimation: {
                                                ...entranceAnimation,
                                                opacity: 0,
                                            },
                                        });
                                    }}
                                    min={0}
                                    step={0.1}
                                    max={1}
                                    noUnits={true}
                                />
                                <SelectControl
                                    label={__('Easing Type', 'zolo-blocks')}
                                    value={entranceAnimation.easing}
                                    options={EASING_TYPES}
                                    onChange={(value) => {
                                        setAttributes({
                                            entranceAnimation: {
                                                ...entranceAnimation,
                                                easing: value,
                                            },
                                        });
                                    }}
                                />

                                {entranceAnimation.easing === 'custom' && (
                                    <TextControl
                                        label={__('Custom Easing', 'zolo-blocks')}
                                        help={__('Example: cubic-bezier(0.42, 0, 0.58, 1)', 'zolo-blocks')}
                                        value={entranceAnimation.easingCustom}
                                        onChange={(value) => {
                                            setAttributes({
                                                entranceAnimation: {
                                                    ...entranceAnimation,
                                                    easingCustom: value,
                                                },
                                            });
                                        }}
                                    />
                                )}
                            </>
                        )}
                        <SimpleRangeControl
                            label={__('Delay(ms)', 'zolo-blocks')}
                            value={entranceAnimation.delay}
                            onChange={(value) => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        delay: value,
                                    },
                                });
                            }}
                            onReset={() => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        delay: 0,
                                    },
                                });
                            }}
                            min={0}
                            max={10000}
                            noUnits={true}
                        />
                        <SimpleRangeControl
                            label={__('Transition Duration(ms)', 'zolo-blocks')}
                            value={entranceAnimation.duration}
                            onChange={(value) => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        duration: value,
                                    },
                                });
                            }}
                            onReset={() => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        duration: 0,
                                    },
                                });
                            }}
                            min={0}
                            max={10000}
                            noUnits={true}
                        />
                        <Button
                            label={isEntrancePlaying ? __('Reset', 'zolo-blocks') : __('Preview', 'zolo-blocks')}
                            className="zolo-action-button"
                            isPrimary
                            onClick={handleEntranceToggle}
                        >
                            {isEntrancePlaying ? __('Reset', 'zolo-blocks') : __('Preview', 'zolo-blocks')}
                        </Button>
                    </>
                )}
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Floating Animation', 'zolo-blocks')} panelProps={props} extraPanel={true} isPro={true} isNew={true}>
                <ToggleControl
                    label={__('Floating Animation', 'zolo-blocks')}
                    checked={floatingAnimationActive}
                    onChange={() => {
                        setAttributes({
                            floatingAnimationActive: !floatingAnimationActive,
                        });
                        if (!floatingAnimationActive) {
                            setAttributes({
                                parentClasses: [...parentClasses, 'zolo-floating-animation'],
                            });
                        } else {
                            setAttributes({
                                parentClasses: parentClasses.filter(function (e) {
                                    return e !== 'zolo-floating-animation';
                                }),
                            });
                        }
                    }}
                />

                {floatingAnimationActive && (
                    <>
                        <PopoverControl label={__('Translate', 'zolo-blocks')} icon={TRANSLATE_ICON}>
                            <MultiRangeControl
                                label={__('Translate X', 'zolo-blocks')}
                                min={-100}
                                max={100}
                                step={1}
                                minValue={floatingAnimation?.translateX?.minValue}
                                maxValue={floatingAnimation?.translateX?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            translateX: {
                                                ...floatingAnimation.translateX,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Translate Y', 'zolo-blocks')}
                                min={-100}
                                max={100}
                                step={1}
                                minValue={floatingAnimation?.translateY?.minValue}
                                maxValue={floatingAnimation?.translateY?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            translateY: {
                                                ...floatingAnimation.translateY,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                        </PopoverControl>
                        <PopoverControl label={__('Rotate', 'zolo-blocks')} icon={ROTATE_ICON}>
                            <MultiRangeControl
                                label={__('Rotate X', 'zolo-blocks')}
                                min={-180}
                                max={180}
                                step={1}
                                minValue={floatingAnimation?.rotateX?.minValue}
                                maxValue={floatingAnimation?.rotateX?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            rotateX: {
                                                ...floatingAnimation.rotateX,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Rotate Y', 'zolo-blocks')}
                                min={-180}
                                max={180}
                                step={1}
                                minValue={floatingAnimation?.rotateY?.minValue}
                                maxValue={floatingAnimation?.rotateY?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            rotateY: {
                                                ...floatingAnimation.rotateY,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Rotate Z', 'zolo-blocks')}
                                min={-180}
                                max={180}
                                step={1}
                                minValue={floatingAnimation?.rotateZ?.minValue}
                                maxValue={floatingAnimation?.rotateZ?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            rotateZ: {
                                                ...floatingAnimation.rotateZ,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                        </PopoverControl>
                        <PopoverControl label={__('Scale', 'zolo-blocks')} icon={SCALE_ICON}>
                            <MultiRangeControl
                                label={__('Scale X', 'zolo-blocks')}
                                min={0}
                                max={5}
                                step={0.1}
                                minValue={floatingAnimation?.scaleX?.minValue}
                                maxValue={floatingAnimation?.scaleX?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            scaleX: {
                                                ...floatingAnimation.scaleX,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Scale Y', 'zolo-blocks')}
                                min={0}
                                max={5}
                                step={0.1}
                                minValue={floatingAnimation?.scaleY?.minValue}
                                maxValue={floatingAnimation?.scaleY?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            scaleY: {
                                                ...floatingAnimation.scaleY,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Scale Z', 'zolo-blocks')}
                                min={0}
                                max={5}
                                step={0.1}
                                minValue={floatingAnimation?.scaleZ?.minValue}
                                maxValue={floatingAnimation?.scaleZ?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            scaleZ: {
                                                ...floatingAnimation.scaleZ,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                        </PopoverControl>
                        <PopoverControl label={__('Skew', 'zolo-blocks')} icon={SKEW_ICON}>
                            <MultiRangeControl
                                label={__('Skew X', 'zolo-blocks')}
                                min={-180}
                                max={180}
                                step={1}
                                minValue={floatingAnimation?.skewX?.minValue}
                                maxValue={floatingAnimation?.skewX?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            skewX: {
                                                ...floatingAnimation.skewX,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                            <MultiRangeControl
                                label={__('Skew Y', 'zolo-blocks')}
                                min={-180}
                                max={180}
                                step={1}
                                minValue={floatingAnimation?.skewY?.minValue}
                                maxValue={floatingAnimation?.skewY?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            skewY: {
                                                ...floatingAnimation.skewY,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                        </PopoverControl>
                        <PopoverControl label={__('Opacity', 'zolo-blocks')} icon={OPACITY_ICON}>
                            <MultiRangeControl
                                label={__('Opacity', 'zolo-blocks')}
                                min={0}
                                max={1}
                                step={0.1}
                                minValue={floatingAnimation?.opacity?.minValue}
                                maxValue={floatingAnimation?.opacity?.maxValue}
                                onChange={(value) => {
                                    // set attributes min and max
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            opacity: {
                                                ...floatingAnimation.opacity,
                                                minValue: value.minValue,
                                                maxValue: value.maxValue,
                                            },
                                        },
                                    });
                                }}
                            />
                        </PopoverControl>
                        <SelectControl
                            label={__('Easing Type', 'zolo-blocks')}
                            value={floatingAnimation.easing}
                            options={EASING_TYPES}
                            onChange={(value) => {
                                setAttributes({
                                    floatingAnimation: {
                                        ...floatingAnimation,
                                        easing: value,
                                    },
                                });
                            }}
                        />

                        {floatingAnimation.easing === 'custom' && (
                            <TextControl
                                label={__('Custom Easing', 'zolo-blocks')}
                                help={__('Example: cubic-bezier(0.42, 0, 0.58, 1)', 'zolo-blocks')}
                                value={floatingAnimation.easingCustom}
                                onChange={(value) => {
                                    setAttributes({
                                        floatingAnimation: {
                                            ...floatingAnimation,
                                            easingCustom: value,
                                        },
                                    });
                                }}
                            />
                        )}
                        <SimpleRangeControl
                            label={__('Delay(ms)', 'zolo-blocks')}
                            value={floatingAnimation.delay}
                            onChange={(value) => {
                                setAttributes({
                                    floatingAnimation: {
                                        ...floatingAnimation,
                                        delay: value,
                                    },
                                });
                            }}
                            onReset={() => {
                                setAttributes({
                                    floatingAnimation: {
                                        ...floatingAnimation,
                                        delay: 0,
                                    },
                                });
                            }}
                            min={0}
                            max={10000}
                            noUnits={true}
                        />
                        <SimpleRangeControl
                            label={__('Transition Duration(ms)', 'zolo-blocks')}
                            value={floatingAnimation.duration}
                            onChange={(value) => {
                                setAttributes({
                                    floatingAnimation: {
                                        ...floatingAnimation,
                                        duration: value,
                                    },
                                });
                            }}
                            onReset={() => {
                                setAttributes({
                                    floatingAnimation: {
                                        ...floatingAnimation,
                                        duration: 0,
                                    },
                                });
                            }}
                            min={0}
                            max={10000}
                            noUnits={true}
                        />
                        <Button
                            label={isPlaying ? __('Stop', 'zolo-blocks') : __('Play', 'zolo-blocks')}
                            className="zolo-action-button"
                            isPrimary
                            onClick={handleFloatingToggle}
                        >
                            {isPlaying ? __('Stop', 'zolo-blocks') : __('Play', 'zolo-blocks')}
                        </Button>
                    </>
                )}
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Transform', 'zolo-blocks')} panelProps={props} extraPanel={true} isPro={true} isNew={true}>
                <TabPanelControl
                    normalComponents={
                        <>
                            <PopoverControl label={__('Translate', 'zolo-blocks')} icon={TRANSLATE_ICON}>
                                <ResRangeControl
                                    label={__('translateX', 'zolo-blocks')}
                                    controlName={'translateX'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    units={[
                                        { label: __('px', 'zolo-blocks'), value: 'px' },
                                        { label: __('%', 'zolo-blocks'), value: '%' },
                                    ]}
                                />
                                <ResRangeControl
                                    label={__('translateY', 'zolo-blocks')}
                                    controlName={'translateY'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    units={[
                                        { label: __('px', 'zolo-blocks'), value: 'px' },
                                        { label: __('%', 'zolo-blocks'), value: '%' },
                                    ]}
                                />
                            </PopoverControl>
                            <PopoverControl label={__('Rotate', 'zolo-blocks')} icon={ROTATE_ICON} isPro={true}>
                                <ResRangeControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    controlName={'transformRotate'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                                <ToggleControl
                                    label={__('Rotate 3D', 'zolo-blocks')}
                                    checked={transformRotate3DActive}
                                    onChange={() => {
                                        setAttributes({
                                            transformRotate3DActive: !transformRotate3DActive,
                                        });
                                    }}
                                />
                                {transformRotate3DActive && (
                                    <>
                                        <ResRangeControl
                                            label={__('RotateX(deg)', 'zolo-blocks')}
                                            controlName={'transformRotateX'}
                                            requiredProps={requiredProps}
                                            min={-360}
                                            max={360}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('RotateY(deg)', 'zolo-blocks')}
                                            controlName={'transformRotateY'}
                                            requiredProps={requiredProps}
                                            min={-360}
                                            max={360}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('Perspective(deg)', 'zolo-blocks')}
                                            controlName={'transformPerspective'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                            <PopoverControl label={__('Scale', 'zolo-blocks')} icon={SCALE_ICON} isPro={true}>
                                <ToggleControl
                                    label={__('Keep Proportions', 'zolo-blocks')}
                                    checked={scaleProportionally}
                                    onChange={() => {
                                        setAttributes({
                                            scaleProportionally: !scaleProportionally,
                                        });
                                    }}
                                />
                                {!scaleProportionally && (
                                    <>
                                        <ResRangeControl
                                            label={__('ScaleX', 'zolo-blocks')}
                                            controlName={'transformScaleX'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('ScaleY', 'zolo-blocks')}
                                            controlName={'transformScaleY'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                                {scaleProportionally && (
                                    <>
                                        <ResRangeControl
                                            label={__('Scale', 'zolo-blocks')}
                                            controlName={'transformScale'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                            <PopoverControl label={__('Skew', 'zolo-blocks')} icon={SKEW_ICON} isPro={true}>
                                <ResRangeControl
                                    label={__('SkewX (deg)', 'zolo-blocks')}
                                    controlName={'transformSkewX'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                                <ResRangeControl
                                    label={__('SkewY (deg)', 'zolo-blocks')}
                                    controlName={'transformSkewY'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                            </PopoverControl>
                            <PopoverControl label={__('Flip', 'zolo-blocks')} icon={FLIP_ICON} isPro={true}>
                                <ToggleControl
                                    label={__('Flip Horizontal', 'zolo-blocks')}
                                    checked={transformFlipHorizontal}
                                    onChange={() => {
                                        setAttributes({
                                            transformFlipHorizontal: !transformFlipHorizontal,
                                        });
                                    }}
                                />
                                <ToggleControl
                                    label={__('Flip Vertical', 'zolo-blocks')}
                                    checked={transformFlipVertical}
                                    onChange={() => {
                                        setAttributes({
                                            transformFlipVertical: !transformFlipVertical,
                                        });
                                    }}
                                />
                                {(transformFlipHorizontal || transformFlipVertical) && (
                                    <>
                                        <ResAlignmentControl
                                            label={__('X Anchor Point', 'zolo-blocks')}
                                            controlName={'transformOriginX'}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS}
                                        />
                                        <ResAlignmentControl
                                            label={__('Y Anchor Point', 'zolo-blocks')}
                                            controlName={'transformOriginY'}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                        </>
                    }
                    hoverComponents={
                        <>
                            <PopoverControl label={__('Translate', 'zolo-blocks')} icon={TRANSLATE_ICON}>
                                <ResRangeControl
                                    label={__('translateX', 'zolo-blocks')}
                                    controlName={'translateXHover'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    units={[
                                        { label: __('px', 'zolo-blocks'), value: 'px' },
                                        { label: __('%', 'zolo-blocks'), value: '%' },
                                    ]}
                                />
                                <ResRangeControl
                                    label={__('translateY', 'zolo-blocks')}
                                    controlName={'translateYHover'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    units={[
                                        { label: __('px', 'zolo-blocks'), value: 'px' },
                                        { label: __('%', 'zolo-blocks'), value: '%' },
                                    ]}
                                />
                            </PopoverControl>
                            <PopoverControl label={__('Rotate', 'zolo-blocks')} icon={ROTATE_ICON}>
                                <ResRangeControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    controlName={'transformRotateHover'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                                <ToggleControl
                                    label={__('Rotate 3D', 'zolo-blocks')}
                                    checked={transformRotate3DActiveHover}
                                    onChange={() => {
                                        setAttributes({
                                            transformRotate3DActiveHover: !transformRotate3DActiveHover,
                                        });
                                    }}
                                />
                                {transformRotate3DActiveHover && (
                                    <>
                                        <ResRangeControl
                                            label={__('RotateX(deg)', 'zolo-blocks')}
                                            controlName={'transformRotateXHover'}
                                            requiredProps={requiredProps}
                                            min={-360}
                                            max={360}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('RotateY(deg)', 'zolo-blocks')}
                                            controlName={'transformRotateYHover'}
                                            requiredProps={requiredProps}
                                            min={-360}
                                            max={360}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('Perspective(deg)', 'zolo-blocks')}
                                            controlName={'transformPerspectiveHover'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                            <PopoverControl label={__('Scale', 'zolo-blocks')} icon={SCALE_ICON}>
                                <ToggleControl
                                    label={__('Keep Proportions', 'zolo-blocks')}
                                    checked={scaleProportionallyHover}
                                    onChange={() => {
                                        setAttributes({
                                            scaleProportionallyHover: !scaleProportionallyHover,
                                        });
                                    }}
                                />
                                {!scaleProportionallyHover && (
                                    <>
                                        <ResRangeControl
                                            label={__('ScaleX', 'zolo-blocks')}
                                            controlName={'transformScaleXHover'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('ScaleY', 'zolo-blocks')}
                                            controlName={'transformScaleYHover'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                                {scaleProportionallyHover && (
                                    <>
                                        <ResRangeControl
                                            label={__('Scale', 'zolo-blocks')}
                                            controlName={'transformScaleHover'}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={2}
                                            step={0.1}
                                            noUnits={true}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                            <PopoverControl label={__('Skew', 'zolo-blocks')} icon={SKEW_ICON}>
                                <ResRangeControl
                                    label={__('SkewX (deg)', 'zolo-blocks')}
                                    controlName={'transformSkewXHover'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                                <ResRangeControl
                                    label={__('SkewY (deg)', 'zolo-blocks')}
                                    controlName={'transformSkewYHover'}
                                    requiredProps={requiredProps}
                                    min={-360}
                                    max={360}
                                    noUnits={true}
                                />
                            </PopoverControl>
                            <PopoverControl label={__('Flip', 'zolo-blocks')} icon={FLIP_ICON}>
                                <ToggleControl
                                    label={__('Flip Horizontal', 'zolo-blocks')}
                                    checked={transformFlipHorizontalHover}
                                    onChange={() => {
                                        setAttributes({
                                            transformFlipHorizontalHover: !transformFlipHorizontalHover,
                                        });
                                    }}
                                />
                                <ToggleControl
                                    label={__('Flip Vertical', 'zolo-blocks')}
                                    checked={transformFlipVerticalHover}
                                    onChange={() => {
                                        setAttributes({
                                            transformFlipVerticalHover: !transformFlipVerticalHover,
                                        });
                                    }}
                                />
                                {(transformFlipHorizontalHover || transformFlipVerticalHover) && (
                                    <>
                                        <ResAlignmentControl
                                            label={__('X Anchor Point', 'zolo-blocks')}
                                            controlName={'transformOriginXHover'}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS}
                                        />
                                        <ResAlignmentControl
                                            label={__('Y Anchor Point', 'zolo-blocks')}
                                            controlName={'transformOriginYHover'}
                                            requiredProps={requiredProps}
                                            alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                        />
                                    </>
                                )}
                            </PopoverControl>
                            <ResRangeControl
                                label={__('Transition Duration (ms)', 'zolo-blocks')}
                                controlName={'transitionDuration'}
                                requiredProps={requiredProps}
                                min={0}
                                max={10000}
                                noUnits={true}
                            />
                        </>
                    }
                />
            </ZoloPanelBody>
        </>
    );
};
