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
    } = attributes;

    // const handleMotionAnimation = () => {
    //     const elements = document.querySelectorAll(`.${uniqueId}.zolo-entrance-animation`);
    //     const transformOptions = [
    //         entranceAnimation.translateX ? `translateX(${entranceAnimation.translateX}px)` : '',
    //         entranceAnimation.translateY ? `translateY(${entranceAnimation.translateY}px)` : '',
    //         entranceAnimation.rotateX ? `rotateX(${entranceAnimation.rotateX}deg)` : '',
    //         entranceAnimation.rotateY ? `rotateY(${entranceAnimation.rotateY}deg)` : '',
    //         entranceAnimation.rotateZ ? `rotateZ(${entranceAnimation.rotateZ}deg)` : '',
    //         entranceAnimation.scaleX ? `scaleX(${entranceAnimation.scaleX})` : '',
    //         entranceAnimation.scaleY ? `scaleY(${entranceAnimation.scaleY})` : '',
    //         entranceAnimation.skewX ? `skewX(${entranceAnimation.skewX}deg)` : '',
    //         entranceAnimation.skewY ? `skewY(${entranceAnimation.skewY}deg)` : '',

    //         entranceAnimation.perspective ? `perspective(${entranceAnimation.perspective}px)` : '',
    //     ];
    //     const otherOptions = [];

    //     // array to string
    //     const transformOption = transformOptions.join('');

    //     const options = {
    //         // opacity: [0.5, 1],
    //         transform: [transformOption, 'none'],
    //         transformOrigin:
    //             entranceAnimation.transformOrigin === 'custom'
    //                 ? entranceAnimation.transformOriginCustom
    //                 : entranceAnimation.transformOrigin,
    //         // delay: entranceAnimation.delay,
    //     };
    //     animate(elements, options, { duration: 1, easing: 'ease-out' });
    // };

        const handleMotionAnimation = () => {
                const targetElement = document.querySelectorAll(`.${uniqueId}.zolo-entrance-animation`);
            let transformOptions = [];
            if (entranceAnimation.translateX) {
                transformOptions.push(`translateX(${entranceAnimation.translateX}px)`);
            }
            if (entranceAnimation.translateY) {
                transformOptions.push(`translateY(${entranceAnimation.translateY}px)`);
            }
            if (entranceAnimation.rotateX) {
                transformOptions.push(`rotateX(${entranceAnimation.rotateX}deg)`);
            }
            if (entranceAnimation.rotateY) {
                transformOptions.push(`rotateY(${entranceAnimation.rotateY}deg)`);
            }
            if (entranceAnimation.rotateZ) {
                transformOptions.push(`rotateZ(${entranceAnimation.rotateZ}deg)`);
            }
            if (entranceAnimation.scaleX) {
                transformOptions.push(`scaleX(${entranceAnimation.scaleX})`);
            }
            if (entranceAnimation.scaleY) {
                transformOptions.push(`scaleY(${entranceAnimation.scaleY})`);
            }
            if (entranceAnimation.skewX) {
                transformOptions.push(`skewX(${entranceAnimation.skewX}deg)`);
            }
            if (entranceAnimation.skewY) {
                transformOptions.push(`skewY(${entranceAnimation.skewY}deg)`);
            }
            if (entranceAnimation.perspective) {
                transformOptions.push(`perspective(${entranceAnimation.perspective}px)`);
            }

            const otherOptions = {};
            if (entranceAnimation.duration) {
                otherOptions.duration = entranceAnimation.duration / 1000;
            }
            if (entranceAnimation.easing) {
                otherOptions.easing = entranceAnimation.easing;
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
            // array to string
            const transformOptionsion = transformOptions.join('');

            const options = {
                transform: [transformOptionsion, 'none'],
                opacity: [0, 1],
            };
            animate(targetElement, options, otherOptions);
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
            <PanelBody
                title={__('Spacing', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel31' })}
                opened={selectedExtraPanel === 'panel31' || selectedExtraPanel === 'first'}
            >
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
            </PanelBody>
            {globalConfig?.background && (
                <PanelBody
                    title={__('Background', 'zolo-blocks')}
                    onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel32' })}
                    opened={selectedExtraPanel === 'panel32'}
                >
                    <BackgroundControl controlName={globalConfig.background.prefix || 'mainBg'} requiredProps={requiredProps} />
                </PanelBody>
            )}
            {(globalConfig?.border || globalConfig?.borderRadius || globalConfig?.boxShadow) && (
                <PanelBody
                    title={__('Border', 'zolo-blocks')}
                    onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel33' })}
                    opened={selectedExtraPanel === 'panel33'}
                >
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
                </PanelBody>
            )}

            {globalConfig?.responsiveControls && (
                <>
                    <PanelBody
                        title={__('Responsive Control', 'zolo-blocks')}
                        onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel34' })}
                        opened={selectedExtraPanel === 'panel34'}
                    >
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
                    </PanelBody>
                </>
            )}
            <PanelBody
                title={__('Overflow', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel38' })}
                opened={selectedExtraPanel === 'panel38'}
            >
                <OverlayControl
                    value={overflow}
                    onChange={(v) => {
                        setAttributes({ overflow: v });
                    }}
                />
            </PanelBody>
            <PanelBody
                title={__('Z Index', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel35' })}
                opened={selectedExtraPanel === 'panel35'}
            >
                <RangeResetControl
                    label={__('Set Z Index ', 'zolo-blocks')}
                    controlName={'zIndex'}
                    requiredProps={requiredProps}
                    min={0}
                    max={100}
                    step={1}
                    help={__('Set the z-index for the section', 'zolo-blocks')}
                />
            </PanelBody>
            <PanelBody
                title={__('Custom Attributes', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel36' })}
                opened={selectedExtraPanel === 'panel36'}
            >
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
            </PanelBody>
            <PanelBody
                title={__('Custom CSS', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel37' })}
                opened={selectedExtraPanel === 'panel37'}
            >
                <CustomCSSControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>
            <PanelBody
                title={__('Entrance Animation', 'zolo-blocks')}
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel39' })}
                opened={selectedExtraPanel === 'panel39'}
            >
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
                        <Dropdown
                            className="zolo-dropdown-popover"
                            contentClassName="zolo-dropdown-popover-content"
                            popoverProps={{ placement: 'bottom' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isTertiary onClick={onToggle} aria-expanded={isOpen}>
                                    {__('Translate', 'zolo-blocks')}
                                </Button>
                            )}
                            renderContent={() => (
                                <>
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
                                </>
                            )}
                        />
                        <Dropdown
                            className="zolo-dropdown-popover"
                            contentClassName="zolo-dropdown-popover-content"
                            popoverProps={{ placement: 'bottom' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isTertiary onClick={onToggle} aria-expanded={isOpen}>
                                    {__('Rotate', 'zolo-blocks')}
                                </Button>
                            )}
                            renderContent={() => (
                                <>
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
                                </>
                            )}
                        />
                        <Dropdown
                            className="zolo-dropdown-popover"
                            contentClassName="zolo-dropdown-popover-content"
                            popoverProps={{ placement: 'bottom' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isTertiary onClick={onToggle} aria-expanded={isOpen}>
                                    {__('Scale', 'zolo-blocks')}
                                </Button>
                            )}
                            renderContent={() => (
                                <>
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
                                </>
                            )}
                        />
                        <Dropdown
                            className="zolo-dropdown-popover"
                            contentClassName="zolo-dropdown-popover-content"
                            popoverProps={{ placement: 'bottom' }}
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isTertiary onClick={onToggle} aria-expanded={isOpen}>
                                    {__('Skew', 'zolo-blocks')}
                                </Button>
                            )}
                            renderContent={() => (
                                <>
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
                                </>
                            )}
                        />
                        <Button
                            label={__('Preview', 'zolo-blocks')}
                            isPrimary
                            onClick={() => {
                                handleMotionAnimation();
                            }}
                        >
                            {__('Preview', 'zolo-blocks')}
                        </Button>
                    </>
                )}
            </PanelBody>
        </>
    );
};
