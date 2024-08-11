/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
const {
    HeaderTabs,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    ZoloIconPicker,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    FOCUS_STYLE,
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
    MSG_BORDER,
    MSG_BORDER_RADIUS,
    MSG_PADDING,
    MSG_MARGIN,
    SUCCESS_MSG_BG,
    ERROR_MSG_BG,
    SUBSCRIBED_MSG_BG,
    BUTTON_PADDING,
    BUTTON_SPACING,
    BUTTON_BG,
    BUTTON_HOVER_BG_COLOR,
    BUTTON_BOX_SHADOW,
    FIELD_BOX_SHADOW,
    BUTTON_HOVER_BOX_SHADOW,
    FIELD_FOCUS_BOX_SHADOW,
    INPUT_BORDER,
    INPUT_BORDER_RADIUS,
    INPUT_PADDING,
    INPUT_BG,
    ICON_SIZE,
    FIELD_ICON_SIZE,
    FIELD_ICON_SPACING,
    BUTTON_SIZE,
    FOCUS_BORDER_WIDTH,
    FOCUS_STYLE_5_BORDER_WIDTH,
    BUTTON_LAYOUT_TYPES,
    LABEL_BORDER,
    LABEL_BORDER_RADIUS,
    LABEL_PADDING,
    LABEL_SPACING,
    LABEL_BOTTOM_SPACING,
    LABEL_BG,
    LABEL_HOVER_BG_COLOR,
} from './constants';

import { INPUT_TYPOGRAPHY, LABEL_TYPOGRAPHY, BUTTON_TYPOGRAPHY, MESSAGE_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        focusStyle,
        resMode,
        labelText,
        labelName,
        labelColor,
        iconColor,
        fieldIconColor,
        iconHoverColor,
        btnTextColor,
        btnTextHoverColor,
        labelBorderHoverColor,
        btnBorderHoverColor,
        buttonIcon,
        buttonText,
        inputColor,
        focusColor,
        focusStyle5Color,
        placeholderColor,
        placeholder,
        namePlaceholder,
        btnLayoutType,
        showButtonText,
        showIcon,
        showFieldIcon,
        showNameField,
        showLabels,
        textSuccess,
        textSubscribed,
        textError,
        showMessage,
        successTextColor,
        errorTextColor,
        subscribedTextColor,
        labelTextHoverColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/newsletter"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.advancedNewsletter.presets', PRESETS)}
                                onChange={(value) => {
                                    setAttributes({
                                        preset: value,
                                    });

                                    if (value === 'zolo-newsletter-5') {
                                        setAttributes({
                                            showLabels: false,
                                        });
                                    } else if (value === 'zolo-newsletter-1') {
                                        setAttributes({
                                            showLabels: true,
                                        });
                                    } else {
                                        setAttributes({
                                            showLabels: true,
                                        });
                                    }
                                }}
                            />
                            {preset === 'zolo-newsletter-4' && (
                                <IconicBtnGroup
                                    label={__('Button Style', 'zoloblocks')}
                                    value={btnLayoutType}
                                    onChange={(value) =>
                                        setAttributes({
                                            btnLayoutType: value,
                                        })
                                    }
                                    options={BUTTON_LAYOUT_TYPES}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Name Field', 'zoloblocks')}
                                checked={showNameField}
                                onChange={(value) =>
                                    setAttributes({
                                        showNameField: value,
                                    })
                                }
                            />

                            {preset === 'zolo-newsletter-5' && (
                                <>
                                    <ToggleControl
                                        label={__('Show Field Icon', 'zoloblocks')}
                                        checked={showFieldIcon}
                                        onChange={(value) =>
                                            setAttributes({
                                                showFieldIcon: value,
                                            })
                                        }
                                    />
                                </>
                            )}
                            <ToggleControl
                                label={__('Show Button Text', 'zoloblocks')}
                                checked={showButtonText}
                                onChange={(value) =>
                                    setAttributes({
                                        showButtonText: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(value) =>
                                    setAttributes({
                                        showIcon: value,
                                    })
                                }
                            />
                            {(preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && (
                                <ToggleControl
                                    label={__('Show Labels', 'zoloblocks')}
                                    checked={showLabels}
                                    onChange={() =>
                                        setAttributes({
                                            showLabels: !showLabels,
                                        })
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props} firstOpen={false}>
                            {showIcon && (
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={buttonIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            buttonIcon: value,
                                        });
                                    }}
                                />
                            )}

                            {showLabels && (
                                <>
                                    {showNameField && (
                                        <TextControl
                                            label={__('Label name', 'zoloblocks')}
                                            value={labelName}
                                            onChange={(value) =>
                                                setAttributes({
                                                    labelName: value,
                                                })
                                            }
                                        />
                                    )}

                                    <TextControl
                                        label={__('Label email', 'zoloblocks')}
                                        value={labelText}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelText: value,
                                            })
                                        }
                                    />
                                </>
                            )}

                            {showButtonText && (
                                <TextControl
                                    label={__('Button text', 'zoloblocks')}
                                    value={buttonText}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonText: value,
                                        })
                                    }
                                />
                            )}
                            {(preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && (
                                <>
                                    {showNameField && (
                                        <TextControl
                                            label={__('PH name', 'zoloblocks')}
                                            value={namePlaceholder}
                                            onChange={(value) => setAttributes({ namePlaceholder: value })}
                                        />
                                    )}
                                    <TextControl
                                        label={__('PH email', 'zoloblocks')}
                                        value={placeholder}
                                        onChange={(value) => setAttributes({ placeholder: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Message', 'zoloblocks')} panelProps={props} firstOpen={false}>
                            <ToggleControl
                                label={__('Show Message', 'zoloblocks')}
                                checked={showMessage}
                                onChange={(value) => setAttributes({ showMessage: value })}
                            />
                            {showMessage && (
                                <>
                                    <TextControl
                                        label={__('Success', 'newsletter-block-gutena')}
                                        value={textSuccess}
                                        onChange={(value) => setAttributes({ textSuccess: value })}
                                    />
                                    <TextControl
                                        label={__('Warning', 'newsletter-block-gutena')}
                                        value={textSubscribed}
                                        onChange={(value) => setAttributes({ textSubscribed: value })}
                                    />
                                    <TextControl
                                        label={__('Error', 'newsletter-block-gutena')}
                                        value={textError}
                                        onChange={(value) => setAttributes({ textError: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <>
                            {showLabels && (
                                <ZoloPanelBody title={__('Label', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                                    {preset !== 'zolo-newsletter-1' && (
                                        <>
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LABEL_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <ColorControl
                                                        label={__('Border Color', 'zoloblocks')}
                                                        color={labelBorderHoverColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                labelBorderHoverColor: value,
                                                            })
                                                        }
                                                    />
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LABEL_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={LABEL_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={LABEL_SPACING}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    )}
                                    {preset === 'zolo-newsletter-1' && (
                                        <ResRangeControl
                                            label={__('Bottom Spacing', 'zoloblocks')}
                                            controlName={LABEL_BOTTOM_SPACING}
                                            requiredProps={requiredProps}
                                        />
                                    )}
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={LABEL_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                    />
                                    <TabPanelControl
                                        options={[
                                            {
                                                label: __('Normal', 'zoloblocks'),
                                                value: 'normal',
                                            },
                                            {
                                                label: __('Focus', 'zoloblocks'),
                                                value: 'hover',
                                            },
                                        ]}
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={labelColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            labelColor: value,
                                                        })
                                                    }
                                                />
                                                {preset !== 'zolo-newsletter-1' && (
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={LABEL_BG}
                                                        noMainBGImg={false}
                                                    />
                                                )}
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                {showButtonText && (
                                                    <>
                                                        <ColorControl
                                                            label={__('Color', 'zoloblocks')}
                                                            color={labelTextHoverColor}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    labelTextHoverColor: value,
                                                                })
                                                            }
                                                        />
                                                        {preset !== 'zolo-newsletter-1' && (
                                                            <NormalBGControl
                                                                requiredProps={requiredProps}
                                                                controlName={LABEL_HOVER_BG_COLOR}
                                                                noMainBGImg={false}
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            )}
                        </>
                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={preset === 'zolo-newsletter-1' ? true : false}
                        >
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={INPUT_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={INPUT_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={INPUT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={INPUT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        label: __('Normal', 'zoloblocks'),
                                        value: 'normal',
                                    },
                                    {
                                        label: __('Focus', 'zoloblocks'),
                                        value: 'hover',
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={inputColor}
                                            onChange={(color) => setAttributes({ inputColor: color })}
                                        />
                                        {preset === 'zolo-newsletter-1' && (
                                            <ColorControl
                                                label={__('Placeholder Color', 'zoloblocks')}
                                                color={placeholderColor}
                                                onChange={(color) => setAttributes({ placeholderColor: color })}
                                            />
                                        )}
                                        {preset === 'zolo-newsletter-5' && (
                                            <ColorControl
                                                label={__('Placeholder Color', 'zoloblocks')}
                                                color={placeholderColor}
                                                onChange={(color) => setAttributes({ placeholderColor: color })}
                                            />
                                        )}
                                        <NormalBGControl requiredProps={requiredProps} controlName={INPUT_BG} noMainBGImg={false} />
                                        <BoxShadowControl controlName={FIELD_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {preset === 'zolo-newsletter-5' && (
                                            <SelectControl
                                                label={__('Focus Style', 'zoloblocks')}
                                                value={focusStyle}
                                                options={applyFilters('zolo.advancedNewsletter.focusStyle', FOCUS_STYLE)}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        focusStyle: value,
                                                    })
                                                }
                                            />
                                        )}
                                        {preset !== 'zolo-newsletter-5' && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={focusColor}
                                                    onChange={(color) => setAttributes({ focusColor: color })}
                                                />
                                                <ResRangeControl
                                                    label={__('Width', 'zoloblocks')}
                                                    controlName={FOCUS_BORDER_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={10}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        {preset === 'zolo-newsletter-5' && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={focusStyle5Color}
                                                    onChange={(color) => setAttributes({ focusStyle5Color: color })}
                                                />
                                                <ResRangeControl
                                                    label={__('Width', 'zoloblocks')}
                                                    controlName={FOCUS_STYLE_5_BORDER_WIDTH}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={10}
                                                    step={1}
                                                />
                                            </>
                                        )}
                                        <BoxShadowControl controlName={FIELD_FOCUS_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                            />

                            {preset === 'zolo-newsletter-5' && showFieldIcon && (
                                <>
                                    <div className="zolo-custom-heading">{__('Animated Border', 'zoloblocks')}</div>
                                    <ColorControl
                                        label={__('Icon Color', 'zoloblocks')}
                                        color={fieldIconColor}
                                        onChange={(color) => setAttributes({ fieldIconColor: color })}
                                    />

                                    <ResRangeControl
                                        label={__('Icon Size', 'zoloblocks')}
                                        controlName={FIELD_ICON_SIZE}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />

                                    <ResRangeControl
                                        label={__('Spacing', 'zoloblocks')}
                                        controlName={FIELD_ICON_SPACING}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            {showIcon && (
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            )}
                            {showButtonText && (
                                <>
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={36}
                                    />
                                    {preset === 'zolo-newsletter-1' && (
                                        <ResRangeControl
                                            label={__('Button Size', 'zoloblocks')}
                                            controlName={BUTTON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={300}
                                            step={1}
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: 'em', value: 'em' },
                                            ]}
                                        />
                                    )}
                                </>
                            )}

                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={BUTTON_BORDER}
                                requiredProps={requiredProps}
                                hoverControl={
                                    <ColorControl
                                        label={__('Border Color', 'zoloblocks')}
                                        color={btnBorderHoverColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                btnBorderHoverColor: value,
                                            })
                                        }
                                    />
                                }
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BUTTON_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BUTTON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            {btnLayoutType === 'zolo-newsletter-button-style-2' && (
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={BUTTON_SPACING}
                                    requiredProps={requiredProps}
                                />
                            )}
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        {showButtonText && (
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={btnTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnTextColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        {showIcon && (
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={iconColor}
                                                onChange={(color) => setAttributes({ iconColor: color })}
                                            />
                                        )}
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {showButtonText && (
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={btnTextHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnTextHoverColor: value,
                                                    })
                                                }
                                            />
                                        )}
                                        {showIcon && (
                                            <ColorControl
                                                label={__('Icon Color', 'zoloblocks')}
                                                color={iconHoverColor}
                                                onChange={(color) => setAttributes({ iconHoverColor: color })}
                                            />
                                        )}
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={BUTTON_HOVER_BG_COLOR}
                                            noMainBGImg={false}
                                        />
                                        <BoxShadowControl
                                            controlName={BUTTON_HOVER_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Message', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
                                />

                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={MSG_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={btnBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={MSG_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={MSG_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={MSG_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <TabPanelControl
                                    options={[
                                        {
                                            label: __('Success', 'zoloblocks'),
                                            value: 'normal',
                                        },
                                        {
                                            label: __('Warning', 'zoloblocks'),
                                            value: 'hover',
                                        },
                                        {
                                            label: __('Error', 'zoloblocks'),
                                            value: 'active',
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={successTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        successTextColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={SUCCESS_MSG_BG}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={subscribedTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        subscribedTextColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={SUBSCRIBED_MSG_BG}
                                                noMainBGImg={false}
                                            />
                                        </>
                                    }
                                    activeComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={errorTextColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        errorTextColor: value,
                                                    })
                                                }
                                            />

                                            <NormalBGControl requiredProps={requiredProps} controlName={ERROR_MSG_BG} noMainBGImg={false} />
                                        </>
                                    }
                                />
                            </>
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/newsletter"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
