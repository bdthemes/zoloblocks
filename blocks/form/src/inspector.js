/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
} from './constants';

import { LABEL_TYPO, FIELD_TYPO, BTN_TYPO, ERR_MSG_TYPO, SCC_MSG_TYPO } from './constants/typoPrefixConstants';
import { TEXT_ALIGN_OPTIONS, ICON_HPOSITIONS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

const {
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
} = window.zoloModule;

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
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

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

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/form"
                setAttributes={setAttributes}
                attributes={attributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Presets', 'zolo-blocks')}
                                value={preset}
                                options={applyFilters('zolo.form.presets', PRESETS)}
                                onChange={(selected) => onPresetChange(selected)}
                            />
                            <ToggleControl
                                label={__('Show fields icon', 'zolo-blocks')}
                                checked={showFieldIcon}
                                onChange={() =>
                                    setAttributes({
                                        showFieldIcon: !showFieldIcon,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Form Settings', 'zolo-blocks')} panelProps={props}>
                            <TextControl
                                label={__('Form Title', 'zolo-blocks')}
                                value={formSettings?.formTitle}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            formTitle: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter title..', 'zolo-blocks')}
                            />
                            <SelectControl
                                label={__('Notification Type', 'zolo-blocks')}
                                value={formSettings?.notificationType}
                                options={NOTIFICATION_TYPES}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            notificationType: v,
                                        },
                                    })
                                }
                            />
                            <TextControl
                                label={__('Email To', 'zolo-blocks')}
                                value={formSettings?.emailTo}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailTo: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zolo-blocks')}
                                help={__('This email will receive the form submission.', 'zolo-blocks')}
                            />
                            <TextControl
                                label={__('Email CC (optional)', 'zolo-blocks')}
                                value={formSettings?.emailCC}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailCC: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zolo-blocks')}
                                help={__('This email will receive the form submission.', 'zolo-blocks')}
                            />
                            <TextControl
                                label={__('Email BCC (optional)', 'zolo-blocks')}
                                value={formSettings?.emailBCC}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailBCC: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter email..', 'zolo-blocks')}
                                help={__('This email will receive the form submission.', 'zolo-blocks')}
                            />
                            <TextControl
                                label={__('Email Subject', 'zolo-blocks')}
                                help={__('This will be the subject of the email.', 'zolo-blocks')}
                                value={formSettings?.emailSubject}
                                onChange={(v) =>
                                    setAttributes({
                                        formSettings: {
                                            ...formSettings,
                                            emailSubject: v,
                                        },
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Form Submission', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Success Type', 'zolo-blocks')}
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
                                label={__('Message Position', 'zolo-blocks')}
                                value={messagePosition}
                                onChange={(value) =>
                                    setAttributes({
                                        messagePosition: value,
                                    })
                                }
                                options={MESSAGE_POS}
                            />
                            <TextareaControl
                                label={__('Success Message', 'zolo-blocks')}
                                value={submissionSettings?.successMessage}
                                help={__('This message will be shown when the form is submitted successfully.', 'zolo-blocks')}
                                onChange={(v) =>
                                    setAttributes({
                                        submissionSettings: {
                                            ...submissionSettings,
                                            successMessage: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter message..', 'zolo-blocks')}
                                rows={2}
                            />
                            <TextareaControl
                                label={__('Fail Message', 'zolo-blocks')}
                                value={submissionSettings?.failMessage}
                                help={__('This message will be shown when the form submission fails.', 'zolo-blocks')}
                                onChange={(v) =>
                                    setAttributes({
                                        submissionSettings: {
                                            ...submissionSettings,
                                            failMessage: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter message..', 'zolo-blocks')}
                                rows={2}
                            />
                            <TextareaControl
                                label={__('Validation Message', 'zolo-blocks')}
                                value={submissionSettings?.validationMessage}
                                help={__('This message will be shown when the form validation fails.', 'zolo-blocks')}
                                onChange={(v) =>
                                    setAttributes({
                                        submissionSettings: {
                                            ...submissionSettings,
                                            validationMessage: v,
                                        },
                                    })
                                }
                                placeholder={__('Enter message..', 'zolo-blocks')}
                                rows={2}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Submit Button', 'zolo-blocks')} panelProps={props}>
                            <TextControl
                                label={__('Label', 'zolo-blocks')}
                                value={btnLabel}
                                onChange={(v) => setAttributes({ btnLabel: v })}
                                placeholder={__('Enter label..', 'zolo-blocks')}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={BTN_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                            <ToggleControl
                                label={__('Show Icon', 'zolo-blocks')}
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
                                        label={__('Select Icon', 'zolo-blocks')}
                                        value={icon}
                                        onChange={(value) => {
                                            setAttributes({
                                                icon: value,
                                            });
                                        }}
                                    />
                                    <IconicBtnGroup
                                        label={__('Position', 'zolo-blocks')}
                                        value={iconPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconPosition: value,
                                            })
                                        }
                                        options={ICON_HPOSITIONS}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Label', 'zolo-blocks')} stylePanel={true} panelProps={props} firstOpen={true}>
                            <ColorControl
                                label={__('Label Color', 'zolo-blocks')}
                                color={labelColor}
                                onChange={(color) => setAttributes({ labelColor: color })}
                            />
                            <ColorControl
                                label={__('Required Color', 'zolo-blocks')}
                                color={requiredColor}
                                onChange={(color) => setAttributes({ requiredColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={LABEL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={LABEL_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Field Icons', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={iconColor}
                                onChange={(color) => setAttributes({ iconColor: color })}
                            />
                            <ResRangeControl
                                label={__('Icon', 'zolo-blocks')}
                                controlName={ICON_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Input Fields', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Text Color', 'zolo-blocks')}
                                color={textColor}
                                onChange={(color) => setAttributes({ textColor: color })}
                            />
                            <ColorControl
                                label={__('Placeholder Color', 'zolo-blocks')}
                                color={placeholderColor}
                                onChange={(color) => setAttributes({ placeholderColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={FIELD_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={FIELD_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={FIELD_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={FIELD_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={FIELD_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Submit Button', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BTN_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={BTN_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BTN_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BTN_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BTN_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={btnColor}
                                            onChange={(color) => setAttributes({ btnColor: color })}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BTN_BG} noMainBGImg={false} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-blocks')}
                                            color={btnHoverColor}
                                            onChange={(color) => setAttributes({ btnHoverColor: color })}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BTN_HBG} noMainBGImg={false} />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Message', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Close Button Color', 'zolo-blocks')}
                                color={closeBtnColor}
                                onChange={(color) => setAttributes({ closeBtnColor: color })}
                            />
                            <TabPanelControl
                                options={[
                                    { label: __('Success', 'zolo-blocks'), value: 'normal' },
                                    { label: __('Error', 'zolo-blocks'), value: 'hover' },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={sccMsgColor}
                                            onChange={(color) => setAttributes({ sccMsgColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={SCC_MSG_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={SCC_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={SCC_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={SCC_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={SCC_BG} noMainBGImg={true} />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={errMsgColor}
                                            onChange={(color) => setAttributes({ errMsgColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={ERR_MSG_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={ERR_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={ERR_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={ERR_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={ERR_BG} noMainBGImg={true} />
                                    </>
                                }
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
