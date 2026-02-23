/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloTextareaControl,
    ZoloCardDivider,
    ZoloTextControl,
    ZoloRangeControl,
    ResRangeControl,
    HeaderTabs,
    AdvancedOptions,
    ResAlignmentControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    NormalBGControl,
    TabPanelControl,
    ZoloPanelBody,
    IconicBtnGroup,
    ZoloIconPicker,
    sanitizeText,
    sanitizeUrl,
    sanitizeEmail,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    PRESETS,
    BTN_ALIGNMENT,
    BTN_BG,
    BTN_HBG,
    BTN_BORDER,
    BTN_BRADIUS,
    BTN_PADDING,
    BTN_MARGIN,
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    ICON_SIZE,
    FIELD_BORDER,
    FIELD_BRADIUS,
    FIELD_BG,
    FIELD_PADDING,
    NOTIFICATION_TYPES,
    SUCCESS_TYPES,
    MESSAGE_POS,
    SCC_BORDER,
    SCC_BRADIUS,
    SCC_BG,
    SCC_PADDING,
    ERR_BORDER,
    ERR_BRADIUS,
    ERR_BG,
    ERR_PADDING,
    ICON_SPACING,
} from './constants';

import { LABEL_TYPO, FIELD_TYPO, BTN_TYPO, ERR_MSG_TYPO, SCC_MSG_TYPO } from './constants/typoPrefixConstants';
import { TEXT_ALIGN_OPTIONS, ICON_HPOSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        showBtnIcon,
        icon,
        btnLabel,
        labelColor,
        requiredColor,
        iconPosition,
        iconColor,
        textColor,
        placeholderColor,
        btnColor,
        btnHoverColor,
        errMsgColor,
        sccMsgColor,
        showFieldIcon,
        // form settings
        formSettings,
        // form confirmations
        submissionSettings,
        // submission message position
        messagePosition,
        // close btn
        closeBtnColor,
        // focus
        focusBorderColor,
        focusBorderWidth,
        // reCaptcha
        reCaptcha,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const { zolo_recaptcha_secret_key, zolo_recaptcha_site_key } = useSelect((select) => {
        const { getEntityRecord } = select('core');
        const settings = getEntityRecord('root', 'site');

        return {
            zolo_recaptcha_secret_key: settings.zolo_recaptcha_secret_key,
            zolo_recaptcha_site_key: settings.zolo_recaptcha_site_key,
        };
    }, []);

    const onPresetChange = (selected) => {
        setAttributes({
            preset: selected,
        });

        switch (selected) {
            case 'style-1':
                setAttributes({
                    showFieldIcon: false,
                });
                break;
            case 'style-2':
                setAttributes({
                    showFieldIcon: true,
                });
                break;
            default:
                return false;
        }
    };

    // handle reCaptcha
    useEffect(() => {
        apiFetch({
            path: '/wp/v2/settings',
            method: 'GET',
        }).then(({ zolo_enable_recaptcha }) => {
            if(reCaptcha !== zolo_enable_recaptcha) {
                setAttributes({
                    reCaptcha: zolo_enable_recaptcha,
                });
            }
        });
    }, []);

    const onChangeRecaptcha = () => {
        // update the settings and reCaptcha state
        const newRecaptcha = !reCaptcha;
        apiFetch({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                zolo_enable_recaptcha: newRecaptcha,
            },
        });

        setAttributes({
            reCaptcha: newRecaptcha,
        });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/form"
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.form.presets', PRESETS)}
                                onChange={(selected) => onPresetChange(selected)}
                            />

                            {preset !== 'style-3' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                                    <ZoloToggleControl
                                        label={__('Fields Icon', 'zoloblocks')}
                                        checked={showFieldIcon}
                                        onChange={() =>
                                            setAttributes({
                                                showFieldIcon: !showFieldIcon,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Form Settings', 'zoloblocks')} panelProps={props}>
                            <ZoloTextControl
                                label={__('Form Title', 'zoloblocks')}
                                value={formSettings?.formTitle}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            formTitle: sanitizeText(v),
                                        },
                                    })
                                }
                                placeholder={__('Enter title..', 'zoloblocks')}
                            />
                            <ZoloSelectControl
                                label={__('Notification', 'zoloblocks')}
                                value={formSettings?.notificationType}
                                options={applyFilters('zolo.form.notificationTypes', NOTIFICATION_TYPES)}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            notificationType: v,
                                        },
                                    })
                                }
                            />
                            <ZoloTextControl
                                label={__('Email To', 'zoloblocks')}
                                value={formSettings?.emailTo}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailTo: sanitizeEmail(v),
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zoloblocks')}
                                help={__('This email will receive the form submission.', 'zoloblocks')}
                            />
                            <ZoloTextControl
                                label={__('Email CC (optional)', 'zoloblocks')}
                                value={formSettings?.emailCC}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailCC: sanitizeEmail(v),
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zoloblocks')}
                                help={__('This email will receive the form submission.', 'zoloblocks')}
                            />
                            <ZoloTextControl
                                label={__('Email BCC (optional)', 'zoloblocks')}
                                value={formSettings?.emailBCC}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailBCC: sanitizeEmail(v),
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zoloblocks')}
                                help={__('This email will receive the form submission.', 'zoloblocks')}
                            />
                            <ZoloTextControl
                                label={__('Email Subject', 'zoloblocks')}
                                help={__('This will be the subject of the email.', 'zoloblocks')}
                                value={formSettings?.emailSubject}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailSubject: sanitizeText(v),
                                        },
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Form Submission', 'zoloblocks')} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Success Type', 'zoloblocks')}
                                value={submissionSettings?.successType}
                                options={SUCCESS_TYPES}
                                onChange={(v) =>
                                    setAttributes({
                                        submissionSettings: {
                                            ...submissionSettings,
                                            successType: v,
                                        },
                                    })
                                }
                            />

                            <IconicBtnGroup
                                label={__('Message Position', 'zoloblocks')}
                                value={messagePosition}
                                onChange={(value) =>
                                    setAttributes({
                                        messagePosition: value,
                                    })
                                }
                                options={MESSAGE_POS}
                            />
                            <div className="zolo-flex-col-control">
                                <ZoloTextareaControl
                                    label={__('Success Message', 'zoloblocks')}
                                    value={submissionSettings?.successMessage}
                                    help={__('This message will be shown when the form is submitted successfully.', 'zoloblocks')}
                                    onChange={(v) =>
                                        setAttributes({
                                            submissionSettings: {
                                                ...submissionSettings,
                                                successMessage: sanitizeText(v),
                                            },
                                        })
                                    }
                                    placeholder={__('Enter message..', 'zoloblocks')}
                                    rows={2}
                                />
                            </div>

                            <div className="zolo-flex-col-control">
                                <ZoloTextareaControl
                                    label={__('Fail Message', 'zoloblocks')}
                                    value={submissionSettings?.failMessage}
                                    help={__('This message will be shown when the form submission fails.', 'zoloblocks')}
                                    onChange={(v) =>
                                        setAttributes({
                                            submissionSettings: {
                                                ...submissionSettings,
                                                failMessage: sanitizeText(v),
                                            },
                                        })
                                    }
                                    placeholder={__('Enter message..', 'zoloblocks')}
                                    rows={2}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloTextareaControl
                                    label={__('Validation Message', 'zoloblocks')}
                                    value={submissionSettings?.validationMessage}
                                    help={__('This message will be shown when the form validation fails.', 'zoloblocks')}
                                    onChange={(v) =>
                                        setAttributes({
                                            submissionSettings: {
                                                ...submissionSettings,
                                                validationMessage: sanitizeText(v),
                                            },
                                        })
                                    }
                                    placeholder={__('Enter message..', 'zoloblocks')}
                                    rows={2}
                                />
                            </div>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Submit Button', 'zoloblocks')} panelProps={props}>
                            <ZoloTextControl
                                label={__('Label', 'zoloblocks')}
                                value={btnLabel}
                                onChange={(v) => setAttributes({ btnLabel: v })}
                                placeholder={__('Enter label..', 'zoloblocks')}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={BTN_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            <ZoloToggleControl
                                label={__('Show Icon', 'zoloblocks')}
                                checked={showBtnIcon}
                                onChange={() =>
                                    setAttributes({
                                        showBtnIcon: !showBtnIcon,
                                    })
                                }
                            />
                            {showBtnIcon && (
                                <>
                                    <ZoloIconPicker
                                        label={__('Select Icon', 'zoloblocks')}
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
                                    />
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Position', 'zoloblocks')}
                                            value={iconPosition}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconPosition: value,
                                                })
                                            }
                                            options={ICON_HPOSITIONS}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Google reCaptcha', 'zoloblocks')} panelProps={props}>
                            <ZoloToggleControl
                                label={__('Enable Google reCaptcha', 'zoloblocks')}
                                checked={reCaptcha}
                                onChange={onChangeRecaptcha}
                            />
                            {reCaptcha && (!zolo_recaptcha_site_key || !zolo_recaptcha_secret_key) && (
                                <>
                                    <p
                                        style={{
                                            fontStyle: 'italic',
                                            color: '#797977',
                                        }}
                                    >
                                        {__(
                                            'Please make sure to enter the site key and secret key in the ZoloBlocks settings.',
                                            'zoloblocks'
                                        )}
                                        <a href="/wp-admin/admin.php?page=zoloblocks#apiSettings" target="_blank">
                                            {' '}
                                            {__('Click here to go to settings.', 'zoloblocks')}
                                        </a>
                                    </p>
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Label', 'zoloblocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={labelColor}
                                onChange={(color) => setAttributes({ labelColor: color })}
                            />
                            <ColorControl
                                label={__('Required Color', 'zoloblocks')}
                                color={requiredColor}
                                onChange={(color) => setAttributes({ requiredColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={LABEL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />

                            {preset === 'style-3' && (
                                <>
                                    <NormalBGControl requiredProps={requiredProps} controlName={LABEL_BG} noMainBGImg={true} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={LABEL_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </>
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={LABEL_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />

                            {preset === 'style-3' && (
                                <>
                                    <ZoloCardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={LABEL_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={LABEL_BRADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {showFieldIcon && preset !== 'style-3' && (
                            <ZoloPanelBody title={__('Field Icons', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={iconColor}
                                    onChange={(color) => setAttributes({ iconColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Icon', 'zoloblocks')}
                                    controlName={ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                                <ZoloCardDivider />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={ICON_SPACING}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Input Fields', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(color) => setAttributes({ textColor: color })}
                            />
                            {preset !== 'style-3' && (
                                <ColorControl
                                    label={__('Placeholder Color', 'zoloblocks')}
                                    color={placeholderColor}
                                    onChange={(color) => setAttributes({ placeholderColor: color })}
                                />
                            )}

                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={FIELD_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={FIELD_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FIELD_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={FIELD_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={FIELD_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Field Focus', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={focusBorderColor}
                                onChange={(color) => setAttributes({ focusBorderColor: color })}
                            />
                            <ZoloRangeControl
                                className="zolo-flex-col-control"
                                label={__('Width', 'zoloblocks')}
                                value={focusBorderWidth}
                                onChange={(value) => setAttributes({ focusBorderWidth: value })}
                                min={0}
                                max={10}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Submit Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={btnColor}
                                            onChange={(color) => setAttributes({ btnColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BTN_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BTN_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BTN_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={BTN_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BTN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BTN_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={btnHoverColor}
                                            onChange={(color) => setAttributes({ btnHoverColor: color })}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BTN_HBG} noMainBGImg={false} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Message', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    { label: __('Success', 'zoloblocks'), value: 'normal' },
                                    { label: __('Error', 'zoloblocks'), value: 'hover' },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={sccMsgColor}
                                            onChange={(color) => setAttributes({ sccMsgColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={SCC_MSG_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={SCC_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={SCC_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={SCC_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={SCC_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={errMsgColor}
                                            onChange={(color) => setAttributes({ errMsgColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={ERR_MSG_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ERR_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ERR_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ERR_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ERR_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                            />
                            <div className="zolo-custom-heading">{__('Close Button', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={closeBtnColor}
                                onChange={(color) => setAttributes({ closeBtnColor: color })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/form"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
