/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { useState, useEffect } from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

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
    ResAlignmentControl,
} = window.zoloModule;

import { TextControl } from '../../components/Core';

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
    BUTTON_ALIGNMENT,
    BUTTON_FLEX_ALIGN,
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
        provider,
        selectedWebhook,
        btnWType,
    } = attributes;

    // const [webhooks, setWebhooks] = useState([]);
    const [labels, setLabels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const fetchWebhooks = async () => {
        try {
            const settings = await apiFetch({ path: '/wp/v2/settings' });
            const zoloWebhooks = settings.zolo_webhooks || [];
            // Extract labels from the webhooks
            const extractedLabels = zoloWebhooks.map((webhook) => webhook.label);
            setLabels(extractedLabels);
            setAttributes({
                selectedWebhook: extractedLabels[0],
            });
        } catch (error) {
            console.error('Error fetching webhooks:', error);
        }
    };
    useEffect(() => {
        fetchWebhooks();
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    const validLabels = labels.filter((label) => label.trim() !== '');

    // zolo.newsletter.providers;
    const providers = [
        {
            label: __('Mailchimp', 'zoloblocks'),
            value: 'newsletter',
        },
        {
            label: __('Webhook (Pro)', 'zoloblocks'),
            value: 'webhook',
            disabled: true,
        },
    ];

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
                                label={__('Provider', 'zoloblocks')}
                                value={provider}
                                options={applyFilters('zolo.newsletter.providers', providers)}
                                onChange={(value) => {
                                    setAttributes({
                                        provider: value,
                                    });
                                }}
                            />
                            {provider === 'webhook' && (
                                <>
                                    {!isLoading ? (
                                        <>
                                            {validLabels.length > 0 ? (
                                                <SelectControl
                                                    label={__('Select Webhook', 'zoloblocks')}
                                                    value={selectedWebhook}
                                                    options={validLabels.map((label) => ({ label, value: label }))}
                                                    onChange={(value) => {
                                                        setAttributes({
                                                            selectedWebhook: value,
                                                        });
                                                    }}
                                                />
                                            ) : (
                                                <p className="zolo-notice-error">
                                                    {__('No Webhook URL Found. Please configure the webhook in the', 'zoloblocks')}{' '}
                                                    <a href={`${zoloSettings.home_url}/wp-admin/admin.php?page=zoloblocks#webhookSettings`}>
                                                        {__('ZoloBlocks settings', 'zoloblocks')}
                                                    </a>
                                                </p>
                                            )}
                                        </>
                                    ) : null}
                                </>
                            )}
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
                                <div className="zolo-flex-row-control-tab">
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
                                </div>
                            )}

                            {preset !== 'zolo-newsletter-4' && (
                                <>
                                    <CardDivider />
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Button Width', 'zoloblocks')}
                                            value={btnWType}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnWType: value,
                                                })
                                            }
                                            options={[
                                                {
                                                    label: __('Full', 'zoloblocks'),
                                                    value: '',
                                                },
                                                {
                                                    label: __('Auto', 'zoloblocks'),
                                                    value: 'button-auto',
                                                },
                                            ]}
                                        />
                                    </div>
                                    {btnWType === 'button-auto' && (
                                        <ResAlignmentControl
                                            label={__('Alignment', 'zoloblocks')}
                                            controlName={BUTTON_ALIGNMENT}
                                            requiredProps={requiredProps}
                                            alignOptions={BUTTON_FLEX_ALIGN}
                                        />
                                    )}
                                </>
                            )}

                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Name Field', 'zoloblocks')}
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
                                        label={__('Field Icon', 'zoloblocks')}
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
                                label={__('Button Text', 'zoloblocks')}
                                checked={showButtonText}
                                onChange={(value) =>
                                    setAttributes({
                                        showButtonText: value,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(value) =>
                                    setAttributes({
                                        showIcon: value,
                                    })
                                }
                            />
                            {(preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && (
                                <ToggleControl
                                    label={__('Labels', 'zoloblocks')}
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
                                <>
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zoloblocks')}
                                        value={buttonIcon}
                                        onChange={(value) => {
                                            setAttributes({
                                                buttonIcon: value,
                                            });
                                        }}
                                    />
                                </>
                            )}

                            <div className="zolo-custom-heading">{__('Labels', 'zoloblocks')}</div>
                            {showLabels && (
                                <>
                                    {showNameField && (
                                        <TextControl
                                            label={__('Name', 'zoloblocks')}
                                            value={labelName}
                                            onChange={(value) =>
                                                setAttributes({
                                                    labelName: value,
                                                })
                                            }
                                        />
                                    )}

                                    <TextControl
                                        label={__('Email', 'zoloblocks')}
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
                                    label={__('Button', 'zoloblocks')}
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
                                    <div className="zolo-custom-heading">{__('Placeholders', 'zoloblocks')}</div>
                                    {showNameField && (
                                        <TextControl
                                            label={__('Name', 'zoloblocks')}
                                            value={namePlaceholder}
                                            onChange={(value) => setAttributes({ namePlaceholder: value })}
                                        />
                                    )}
                                    <TextControl
                                        label={__('Email', 'zoloblocks')}
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
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={LABEL_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                />

                                                <CardDivider />

                                                {preset !== 'zolo-newsletter-1' && preset !== 'zolo-newsletter-5' && (
                                                    <>
                                                        <NormalBGControl
                                                            requiredProps={requiredProps}
                                                            controlName={LABEL_BG}
                                                            noMainBGImg={false}
                                                        />
                                                        <ResDimensionsControl
                                                            label={__('Padding', 'zoloblocks')}
                                                            controlName={LABEL_PADDING}
                                                            requiredProps={requiredProps}
                                                            forBorderRadius={false}
                                                        />
                                                        <CardDivider />
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
                                                        <CardDivider />
                                                        <ResRangeControl
                                                            label={__('Spacing', 'zoloblocks')}
                                                            controlName={LABEL_SPACING}
                                                            requiredProps={requiredProps}
                                                        />
                                                    </>
                                                )}

                                                {(preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && (
                                                    <ResRangeControl
                                                        label={__('Bottom Spacing', 'zoloblocks')}
                                                        controlName={LABEL_BOTTOM_SPACING}
                                                        requiredProps={requiredProps}
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
                                                        {preset !== 'zolo-newsletter-1' && preset !== 'zolo-newsletter-5' && (
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
                            firstOpen={preset === 'zolo-newsletter-5' ? true : false}
                        >
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
                                        {(preset === 'zolo-newsletter-1' || preset === 'zolo-newsletter-5') && (
                                            <ColorControl
                                                label={__('Placeholder Color', 'zoloblocks')}
                                                color={placeholderColor}
                                                onChange={(color) => setAttributes({ placeholderColor: color })}
                                            />
                                        )}

                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={INPUT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={INPUT_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={INPUT_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={INPUT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={FIELD_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={INPUT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        {preset === 'zolo-newsletter-5' && showFieldIcon && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={fieldIconColor}
                                                    onChange={(color) => setAttributes({ fieldIconColor: color })}
                                                />

                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={FIELD_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={FIELD_ICON_SPACING}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
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
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        {showButtonText && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={btnTextColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            btnTextColor: value,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={BUTTON_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                                <CardDivider />
                                                {/* {preset === 'zolo-newsletter-1' && (
                                                    <ResRangeControl
                                                        label={__('Width', 'zoloblocks')}
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
                                                )} */}
                                            </>
                                        )}
                                        {showIcon && (
                                            <>
                                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                                    {__('Icon', 'zoloblocks')}
                                                </div>

                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColor}
                                                    onChange={(color) => setAttributes({ iconColor: color })}
                                                />
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                />
                                            </>
                                        )}

                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />

                                        <CardDivider />

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
                                        <BoxShadowControl controlName={BUTTON_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BUTTON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        {btnLayoutType === 'zolo-newsletter-button-style-2' && (
                                            <>
                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={BUTTON_SPACING}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {showButtonText && (
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
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
                                        <CardDivider />
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
                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                    {__('Common', 'zoloblocks')}
                                </div>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={MESSAGE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={36}
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

                                <CardDivider />

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
                                                label={__('Color', 'zoloblocks')}
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
                                                label={__('Color', 'zoloblocks')}
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
                                                label={__('Color', 'zoloblocks')}
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
