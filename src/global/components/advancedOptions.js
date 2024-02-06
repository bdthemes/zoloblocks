/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
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
        entaranceAnimation,
        entaranceAnimationActive,
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

    console.log(entaranceAnimation, 'entaranceAnimation');

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
                onToggle={(value) => value === true && setAttributes({ selectedExtraPanel: 'panel38' })}
                opened={selectedExtraPanel === 'panel38'}
            >
                <ToggleControl
                    label={__('Entrance Animation', 'zolo-blocks')}
                    checked={entaranceAnimationActive}
                    onChange={() => {
                        setAttributes({
                            entaranceAnimationActive: !entaranceAnimationActive,
                        });
                        if (!entaranceAnimationActive) {
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
                {entaranceAnimationActive && (
                    <>
                        <RangeControl
                            label={__('Perspective', 'zolo-blocks')}
                            value={entaranceAnimation.perspective}
                            onChange={(value) => {
                                setAttributes({
                                    entaranceAnimation: {
                                        ...entaranceAnimation,
                                        perspective: value,
                                    },
                                });
                            }}
                            min={50}
                            max={1000}
                        />
                        <RangeControl
                            label={__('Delay(ms)', 'zolo-blocks')}
                            value={entaranceAnimation.delay}
                            onChange={(value) => {
                                setAttributes({
                                    entaranceAnimation: {
                                        ...entaranceAnimation,
                                        delay: value,
                                    },
                                });
                            }}
                            min={0}
                            max={1000}
                        />
                        <RangeControl
                            label={__('Transition Duration(ms)', 'zolo-blocks')}
                            value={entaranceAnimation.duration}
                            onChange={(value) => {
                                setAttributes({
                                    entaranceAnimation: {
                                        ...entaranceAnimation,
                                        duration: value,
                                    },
                                });
                            }}
                            min={0}
                            max={1000}
                        />
                        <TextControl
                            label={__('Transform Origin', 'zolo-blocks')}
                            value={entaranceAnimation.transformOrigin}
                            onChange={(value) => {
                                setAttributes({
                                    entaranceAnimation: {
                                        ...entaranceAnimation,
                                        transformOrigin: value,
                                    },
                                });
                            }}
                        />
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
                                        value={entaranceAnimation.translateX}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
                                                    translateX: value,
                                                },
                                            });
                                        }}
                                        min={-100}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Translate Y', 'zolo-blocks')}
                                        value={entaranceAnimation.translateY}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
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
                                        value={entaranceAnimation.rotateX}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
                                                    rotateX: value,
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                    />
                                    <RangeControl
                                        label={__('Rotate Y', 'zolo-blocks')}
                                        value={entaranceAnimation.rotateY}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
                                                    rotateY: value,
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                    />
                                    <RangeControl
                                        label={__('Rotate Z', 'zolo-blocks')}
                                        value={entaranceAnimation.rotateZ}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
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
                                        value={entaranceAnimation.scaleX}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
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
                                        value={entaranceAnimation.scaleY}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
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
                                        value={entaranceAnimation.skewX}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
                                                    skewX: value,
                                                },
                                            });
                                        }}
                                        min={-180}
                                        max={180}
                                    />
                                    <RangeControl
                                        label={__('Skew Y', 'zolo-blocks')}
                                        value={entaranceAnimation.skewY}
                                        onChange={(value) => {
                                            setAttributes({
                                                entaranceAnimation: {
                                                    ...entaranceAnimation,
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
                    </>
                )}
            </PanelBody>
        </>
    );
};
