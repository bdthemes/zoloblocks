/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { animate, timeline } from 'motion';
import { SelectControl, ToggleControl, TextControl, Button, FormTokenField } from '@wordpress/components';
import { useState } from 'react';

/**
 * Internal dependencies
 */
import BackgroundControl from '../../controls/background-control';
import ResDimensionsControl from '../../controls/dimensions-control';
import BorderControl from '../../controls/border-control';
import BoxShadowControl from '../../controls/boxshadow-control';
import RangeResetControl from '../../controls/range-reset-control';
import CustomCSSControl from '../../controls/customcss-control';
import OverlayControl from '../../controls/overflow-control';
import PopoverControl from '../../controls/popover-control';
import SimpleRangeControl from '../../controls/simple-range-control';
import ZoloPanelBody from '../../controls/zolo-panelbody';
import MultiRangeControl from '../../controls/multi-range-control';
import TabPanelControl from '../../controls/tabpanel-control';
import ResRangeControl from '../../controls/res-range-control';
import ResAlignmentControl from '../../controls/res-alignment-control';

import { DEFAULT_ALIGNS, DEFAULT_ALIGNS_VERTICAL } from '../constants';
export const AdvancedOptions = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { attributes, setAttributes, requiredProps } = props;

    const {
        uniqueId,
        responsiveness,
        entranceAnimationActive,
        floatingAnimationActive,
        entranceAnimation,
        floatingAnimation,
        transformRotate3DActive,
        scaleProportionally,
        transformFlipHorizontal,
        transformFlipVertical,
        parentClasses,
        customClass,
        customClasses,
        globalConfig,
        zoloId,
        overflow,
    } = attributes;


    const handleEntranceAnimation = () => {
        const targetElement = document.querySelectorAll(`.${uniqueId}.zolo-entrance-animation`);

        let transformOptions = [];
        if (entranceAnimation.translateX.value !== 0) {
            transformOptions.push(`translateX(${entranceAnimation.translateX.value}${entranceAnimation.translateX.unit})`);
        }
        if (entranceAnimation.translateY.value !== 0) {
            transformOptions.push(`translateY(${entranceAnimation.translateY.value}${entranceAnimation.translateY.unit})`);
        }
        if (entranceAnimation.translateZ.value !== 0) {
            transformOptions.push(`translateZ(${entranceAnimation.translateZ.value}${entranceAnimation.translateZ.unit})`);
        }
        if (entranceAnimation.rotateX.value !== 0) {
            transformOptions.push(`rotateX(${entranceAnimation.rotateX.value}deg)`);
        }
        if (entranceAnimation.rotateY.value !== 0) {
            transformOptions.push(`rotateY(${entranceAnimation.rotateY.value}deg)`);
        }
        if (entranceAnimation.rotateZ.value !== 0) {
            transformOptions.push(`rotateZ(${entranceAnimation.rotateZ.value}deg)`);
        }
        if (entranceAnimation.scaleX.value !== 0) {
            transformOptions.push(`scaleX(${entranceAnimation.scaleX.value})`);
        }
        if (entranceAnimation.scaleY.value !== 0) {
            transformOptions.push(`scaleY(${entranceAnimation.scaleY.value})`);
        }
        if (entranceAnimation.scaleZ.value !== 0) {
            transformOptions.push(`scaleZ(${entranceAnimation.scaleZ.value})`);
        }
        if (entranceAnimation.skewX.value !== 0) {
            transformOptions.push(`skewX(${entranceAnimation.skewX.value}deg)`);
        }
        if (entranceAnimation.skewY.value !== 0) {
            transformOptions.push(`skewY(${entranceAnimation.skewY.value}deg)`);
        }

        const otherOptions = {};
        if (entranceAnimation.duration) {
            otherOptions.duration = entranceAnimation.duration / 1000;
        }
        if (entranceAnimation.delay) {
            otherOptions.delay = entranceAnimation.delay / 1000;
        }
        if (entranceAnimation.direction) {
            otherOptions.direction = entranceAnimation.direction;
        }
        if (entranceAnimation.repeat === true) {
            otherOptions.repeat = Infinity;
        }
        if (entranceAnimation.perspective !== 0) {
            otherOptions.perspective = entranceAnimation.perspective;
        }
        if (entranceAnimation.easing !== 'custom') {
            otherOptions.easing = entranceAnimation.easing;
        } else {
            otherOptions.easing = [entranceAnimation.easingCustom.split(';')[0]];
        }
        // array to string
        const transformOptionsion = transformOptions.join('');

        const options = {
            transform: [transformOptionsion, 'none'],
            opacity: [entranceAnimation.opacity ? entranceAnimation.opacity : 0, 1],
            transformOrigin: entranceAnimation.transformOrigin,
        };

        if (entranceAnimation.perspective !== 0) {
            options.perspective = [`${entranceAnimation.perspective}px`, 'none'];
            options.transformStyle = 'preserve-3d';
        }

        if (entranceAnimation.presetAnimation === 'custom') {
            animate(targetElement, options, otherOptions);
        } else {
            const presetAnimations = {
                fade: {
                    transform: ['none', 'none'],
                    opacity: [0, 1],
                },
                slide: {
                    transform: ['translateX(100%)', 'none'],
                    opacity: [0, 1],
                },
                scale: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                rotate: {
                    transform: ['rotate(180deg)', 'none'],
                    opacity: [0, 1],
                },
                flip: {
                    transform: ['rotateY(180deg)', 'none'],
                    opacity: [0, 1],
                },
                zoom: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                scaleUp: {
                    transform: ['scale(0)', 'none'],
                    opacity: [0, 1],
                },
                scaleDown: {
                    transform: ['scale(1.5)', 'none'],
                    opacity: [0, 1],
                },
                top: {
                    transform: ['translateY(-100px)', 'none'],
                    opacity: [0, 1],
                },
                right: {
                    transform: ['translateX(100px)', 'none'],
                    opacity: [0, 1],
                },
                bottom: {
                    transform: ['translateY(100px)', 'none'],
                    opacity: [0, 1],
                },
                left: {
                    transform: ['translateX(-100px)', 'none'],
                    opacity: [0, 1],
                },
                topSmall: {
                    transform: ['translateY(-20px)', 'none'],
                    opacity: [0, 1],
                },
                rightSmall: {
                    transform: ['translateX(20px)', 'none'],
                    opacity: [0, 1],
                },

                bottomSmall: {
                    transform: ['translateY(20px)', 'none'],
                    opacity: [0, 1],
                },
                leftSmall: {
                    transform: ['translateX(-20px)', 'none'],
                    opacity: [0, 1],
                },
                topMedium: {
                    transform: ['translateY(-50px)', 'none'],
                    opacity: [0, 1],
                },
                rightMedium: {
                    transform: ['translateX(50px)', 'none'],
                    opacity: [0, 1],
                },
                bottomMedium: {
                    transform: ['translateY(50px)', 'none'],
                    opacity: [0, 1],
                },
                leftMedium: {
                    transform: ['translateX(-50px)', 'none'],
                    opacity: [0, 1],
                },
            };
            const presetAnimation = presetAnimations[entranceAnimation.presetAnimation];
            animate(targetElement, presetAnimation, otherOptions);
        }
    };

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
                <OverlayControl
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
                            options={[
                                { label: 'Fade', value: 'fade' },
                                // { label: 'Slide', value: 'slide' },
                                // { label: 'Scale', value: 'scale' },
                                // { label: 'Rotate', value: 'rotate' },
                                // { label: 'Flip', value: 'flip' },
                                // { label: 'Zoom', value: 'zoom' },
                                { label: 'Scale Up', value: 'scaleUp' },
                                { label: 'Scale Down', value: 'scaleDown' },
                                { label: 'Top', value: 'top' },
                                { label: 'Right', value: 'right' },
                                { label: 'Bottom', value: 'bottom' },
                                { label: 'Left', value: 'left' },
                                { label: 'Top Small', value: 'topSmall' },
                                { label: 'Right Small', value: 'rightSmall' },
                                { label: 'Bottom Small', value: 'bottomSmall' },
                                { label: 'Left Small', value: 'leftSmall' },
                                { label: 'Top Medium', value: 'topMedium' },
                                { label: 'Right Medium', value: 'rightMedium' },
                                { label: 'Bottom Medium', value: 'bottomMedium' },
                                { label: 'Left Medium', value: 'leftMedium' },
                                { label: 'Custom', value: 'custom' },
                            ]}
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

                                <PopoverControl
                                    label={__('Translate', 'zolo-blocks')}
                                    icon={
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.35461 11.9548H21.6455"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 2.35278V21.2396"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                >
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
                                <PopoverControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    icon={
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M22.0001 2.21997V8.66997H15.5601"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2 21.7801V15.3301H8.44"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                >
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
                                        options={[
                                            { label: __('Top'), value: 'top' },
                                            { label: __('Right'), value: 'right' },
                                            { label: __('Bottom'), value: 'bottom' },
                                            { label: __('Left'), value: 'left' },
                                            { label: __('Center'), value: 'center' },
                                            { label: __('Initial'), value: 'initial' },
                                            { label: __('Inherit'), value: 'inherit' },
                                            { label: __('Revert'), value: 'revert' },
                                            { label: __('Unset'), value: 'unset' },
                                            { label: __('Revert Layer'), value: 'revert-layer' },
                                            { label: 'Custom', value: 'custom' },
                                        ]}
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
                                <PopoverControl
                                    label={__('Scale', 'zolo-blocks')}
                                    icon={
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.9999 8.16V2L15.8799 2.07"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.2598 13.8798H10.0798L10.1398 7.78979"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.4299 13.5898L21.7299 2.30981"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                >
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
                                <PopoverControl
                                    label={__('Skew', 'zolo-blocks')}
                                    icon={
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                                stroke="#4D4D4D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                >
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
                                    options={[
                                        { label: __('Ease Out', 'zolo-blocks'), value: 'ease-out' },
                                        { label: __('Ease In Out', 'zolo-blocks'), value: 'ease-in-out' },
                                        { label: __('Linear', 'zolo-blocks'), value: 'linear' },
                                        { label: __('Custom', 'zolo-blocks'), value: 'custom' },
                                    ]}
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
                            label={__('Preview', 'zolo-blocks')}
                            isPrimary
                            onClick={() => {
                                handleEntranceAnimation();
                            }}
                        >
                            {__('Preview', 'zolo-blocks')}
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
                        <PopoverControl
                            label={__('Translate', 'zolo-blocks')}
                            icon={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.35461 11.9548H21.6455"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 2.35278V21.2396"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
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
                        <PopoverControl
                            label={__('Rotate', 'zolo-blocks')}
                            icon={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.0001 2.21997V8.66997H15.5601"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 21.7801V15.3301H8.44"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
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
                        <PopoverControl
                            label={__('Scale', 'zolo-blocks')}
                            icon={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.9999 8.16V2L15.8799 2.07"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16.2598 13.8798H10.0798L10.1398 7.78979"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.4299 13.5898L21.7299 2.30981"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
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
                        <PopoverControl
                            label={__('Skew', 'zolo-blocks')}
                            icon={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
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
                        <PopoverControl
                            label={__('Opacity', 'zolo-blocks')}
                            icon={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.0001 2.21997V8.66997H15.5601"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 21.7801V15.3301H8.44"
                                        stroke="#4D4D4D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
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
                            options={[
                                { label: __('Ease Out', 'zolo-blocks'), value: 'ease-out' },
                                { label: __('Ease In Out', 'zolo-blocks'), value: 'ease-in-out' },
                                { label: __('Linear', 'zolo-blocks'), value: 'linear' },
                                { label: __('Custom', 'zolo-blocks'), value: 'custom' },
                            ]}
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
                            isPrimary
                            onClick={handleFloatingToggle}
                        >
                            {isPlaying ? __('Stop', 'zolo-blocks') : __('Play', 'zolo-blocks')}
                        </Button>
                    </>
                )}
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Transform', 'zolo-blocks')} panelProps={props} extraPanel={true} isPro={false} isNew={true}>
                <TabPanelControl
                    normalComponents={
                        <>
                            <PopoverControl
                                label={__('Translate', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2.35461 11.9548H21.6455"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 2.35278V21.2396"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
                                <ResRangeControl
                                    label={__('translateX', 'zolo-blocks')}
                                    controlName={'translateX'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    noUnits={true}
                                />
                                <ResRangeControl
                                    label={__('translateY', 'zolo-blocks')}
                                    controlName={'translateY'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    noUnits={true}
                                />
                            </PopoverControl>
                            <PopoverControl
                                label={__('Rotate', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22.0001 2.21997V8.66997H15.5601"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 21.7801V15.3301H8.44"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Scale', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.9999 8.16V2L15.8799 2.07"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2598 13.8798H10.0798L10.1398 7.78979"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.4299 13.5898L21.7299 2.30981"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Skew', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Flip', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Translate', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.5818 15.3211L22 11.9184L18.5818 8.58813"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.41818 15.3211L2 11.9184L5.41818 8.58813"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2.35461 11.9548H21.6455"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.3818 5.4027L11.9636 2L8.61816 5.4027"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.61816 18.5974L12.0363 22.0001L15.3818 18.5974"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 2.35278V21.2396"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
                                <ResRangeControl
                                    label={__('translateX', 'zolo-blocks')}
                                    controlName={'translateX'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    noUnits={true}
                                />
                                <ResRangeControl
                                    label={__('translateY', 'zolo-blocks')}
                                    controlName={'translateY'}
                                    requiredProps={requiredProps}
                                    min={-1000}
                                    max={1000}
                                    noUnits={true}
                                />
                            </PopoverControl>
                            <PopoverControl
                                label={__('Rotate', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.4401 8.67C19.7801 4.22 15.9301 2 12.0001 2C6.85006 2 2.61006 5.89 2.06006 10.89"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21.9401 13.1201C21.3901 18.1201 17.1501 22.0001 12.0001 22.0001C8.08006 22.0001 4.22006 19.7801 2.56006 15.3301"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22.0001 2.21997V8.66997H15.5601"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 21.7801V15.3301H8.44"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Scale', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.9999 8.16V2L15.8799 2.07"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.2598 13.8798H10.0798L10.1398 7.78979"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10.4299 13.5898L21.7299 2.30981"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M20.62 13.88V19.97C20.62 21.09 19.71 22 18.58 22H4.04C2.91 22 2 21.09 2 19.97V5.47995C2 4.35995 2.91 3.44995 4.04 3.44995H9.64"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Skew', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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
                            <PopoverControl
                                label={__('Flip', 'zolo-blocks')}
                                icon={
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 4H7.74545L2 20H16.2545L22 4Z"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                            >
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

                />
            </ZoloPanelBody>
        </>
    );
};
