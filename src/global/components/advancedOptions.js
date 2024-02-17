/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { animate, inView } from 'motion';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    RangeControl,
    FormTokenField,
} from '@wordpress/components';

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

export const AdvancedOptions = (props) => {
    const { attributes, setAttributes, requiredProps } = props;

    const {
        uniqueId,
        customCss,
        responsiveness,
        entranceAnimation,
        entranceAnimationActive,
        parentClasses,
        zIndex,
        customClass,
        customClasses,
        zoloStyles,
        globalConfig,
        selectedExtraPanel,
        zoloId,
        overflow,
        animations,
    } = attributes;

    const handleMotionAnimation = () => {
        const elements = document.querySelectorAll(`.${uniqueId}.zolo-entrance-animation`);
        const transformOptions = [
            entranceAnimation.translateX ? `translateX(${entranceAnimation.translateX}px)` : '',
            entranceAnimation.translateY ? `translateY(${entranceAnimation.translateY}px)` : '',
            entranceAnimation.rotateX ? `rotateX(${entranceAnimation.rotateX}deg)` : '',
            entranceAnimation.rotateY ? `rotateY(${entranceAnimation.rotateY}deg)` : '',
            entranceAnimation.rotateZ ? `rotateZ(${entranceAnimation.rotateZ}deg)` : '',
            entranceAnimation.scaleX ? `scaleX(${entranceAnimation.scaleX})` : '',
            entranceAnimation.scaleY ? `scaleY(${entranceAnimation.scaleY})` : '',
            entranceAnimation.skewX ? `skewX(${entranceAnimation.skewX}deg)` : '',
            entranceAnimation.skewY ? `skewY(${entranceAnimation.skewY}deg)` : '',

            entranceAnimation.perspective ? `perspective(${entranceAnimation.perspective}px)` : '',
        ];
        const otherOptions = [];

        // array to string
        const transformOption = transformOptions.join('');

        const options = {
            // opacity: [0.5, 1],
            transform: [transformOption, 'none'],
            transformOrigin:
                entranceAnimation.transformOrigin === 'custom'
                    ? entranceAnimation.transformOriginCustom
                    : entranceAnimation.transformOrigin,
            // delay: entranceAnimation.delay,
        };
        animate(elements, options, { duration: 1, easing: 'ease-out' });
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
            <ZoloPanelBody title={__('Entrance Animation', 'zolo-blocks')} panelProps={props} extraPanel={true} isPro={true}>
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
                        {/* label, onChange (range control func), onUnitChange (unit func), value ( range val), unit (unit val), onReset (func), units = [
                            {label: '', value: ''},
                        ], min = '', max = '', step = '', noUnits = false */}
                        <SimpleRangeControl
                            label={__('Translate X', 'zolo-blocks')}
                            onChange={(value) => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        translateX: {
                                            ...entranceAnimation.translateX,
                                            transformTranslateX: value,
                                        },
                                    },
                                });
                            }}
                            value={entranceAnimation?.translateX?.transformTranslateX}
                            onUnitChange={(value) => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        translateX: {
                                            ...entranceAnimation.translateX,
                                            transformTranslateXUnit: value,
                                        },
                                    },
                                });
                            }}
                            unit={entranceAnimation?.translateX?.transformTranslateXUnit}
                            onReset={() => {
                                setAttributes({
                                    entranceAnimation: {
                                        ...entranceAnimation,
                                        translateX: {
                                            ...entranceAnimation.translateX,
                                            transformTranslateX: 0,
                                            transformTranslateXUnit: 'px',
                                        },
                                    },
                                });
                            }}
                            min={-100}
                            max={100}
                            noUnits={false}
                        />
                        <PopoverControl
                            label={__('Translate X', 'zolo-blocks')}
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
                            <RangeControl
                                label={__('Translate X', 'zolo-blocks')}
                                value={entranceAnimation.translateX}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            translateX: value,
                                        },
                                    });
                                }}
                                min={-100}
                                max={100}
                            />
                            <RangeControl
                                label={__('Translate Y', 'zolo-blocks')}
                                value={entranceAnimation.translateY}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            translateY: value,
                                        },
                                    });
                                }}
                                min={-100}
                                max={100}
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
                            <RangeControl
                                label={__('Rotate X', 'zolo-blocks')}
                                value={entranceAnimation.rotateX}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            rotateX: value,
                                        },
                                    });
                                }}
                                min={-180}
                                max={180}
                            />
                            <RangeControl
                                label={__('Rotate Y', 'zolo-blocks')}
                                value={entranceAnimation.rotateY}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            rotateY: value,
                                        },
                                    });
                                }}
                                min={-180}
                                max={180}
                            />
                            <RangeControl
                                label={__('Rotate Z', 'zolo-blocks')}
                                value={entranceAnimation.rotateZ}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            rotateZ: value,
                                        },
                                    });
                                }}
                                min={-180}
                                max={180}
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
                            <RangeControl
                                label={__('Scale X', 'zolo-blocks')}
                                value={entranceAnimation.scaleX}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            scaleX: value,
                                        },
                                    });
                                }}
                                min={0}
                                max={5}
                                step={0.1}
                            />
                            <RangeControl
                                label={__('Scale Y', 'zolo-blocks')}
                                value={entranceAnimation.scaleY}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            scaleY: value,
                                        },
                                    });
                                }}
                                min={0}
                                max={5}
                                step={0.1}
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
                            <RangeControl
                                label={__('Skew X', 'zolo-blocks')}
                                value={entranceAnimation.skewX}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            skewX: value,
                                        },
                                    });
                                }}
                                min={-180}
                                max={180}
                            />
                            <RangeControl
                                label={__('Skew Y', 'zolo-blocks')}
                                value={entranceAnimation.skewY}
                                onChange={(value) => {
                                    setAttributes({
                                        entranceAnimation: {
                                            ...entranceAnimation,
                                            skewY: value,
                                        },
                                    });
                                }}
                                min={-180}
                                max={180}
                            />
                        </PopoverControl>
                        <RangeControl
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
                            min={50}
                            max={1000}
                        />
                        <RangeControl
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
                            min={0}
                            max={1000}
                        />
                        <RangeControl
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
                            min={0}
                            max={1000}
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
                        <Button
                            label={__('Preview', 'zolo-blocks')}
                            isPrimary
                            onClick={() => {
                                handleMotionAnimation();
                                console.log('clicked');
                            }}
                        >
                            {__('Preview', 'zolo-blocks')}
                        </Button>
                    </>
                )}
            </ZoloPanelBody>
        </>
    );
};
