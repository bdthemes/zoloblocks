/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ZoloToggleControl,
    ZoloTextareaControl,
    ZoloTextControl,
    ZoloCardDivider,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ZoloIconPicker,
    ResDimensionsControl,
    NormalBGControl,
    ResGapControl,
    ZoloPanelBody,
    IconicBtnGroup,
    TabPanelControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_SIZE,
    FIELD_PADDING,
    FIELD_MARGIN,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    RADIO_SPACE_BETWEEN,
    FIELD_SPACE,
} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        optionData,
        resMode,
        showLabel,
        label,
        labelColor,
        textColor,
        isRequired,
        requiredMsg,
        showRequiredSymbol,
        requiredColor,
        defaultValue,
        customNameAttribute,
        radioDirection,
        radioCheckedBgColor,
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
                block="zolo/text-field"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Label', 'zoloblocks')}
                                checked={showLabel}
                                onChange={() => setAttributes({ showLabel: !showLabel })}
                            />
                            <ZoloToggleControl
                                label={__('Is It Required Field?', 'zoloblocks')}
                                checked={isRequired}
                                onChange={() => setAttributes({ isRequired: !isRequired })}
                            />

                            {isRequired && (
                                <ZoloToggleControl
                                    label={__('Required Symbol', 'zoloblocks')}
                                    checked={showRequiredSymbol}
                                    onChange={() => setAttributes({ showRequiredSymbol: !showRequiredSymbol })}
                                />
                            )}

                            <ZoloCardDivider />
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={radioDirection}
                                    onChange={(value) =>
                                        setAttributes({
                                            radioDirection: value,
                                        })
                                    }
                                    options={[
                                        { label: 'Column', value: 'zolo-form-radio-col' },
                                        { label: 'Row', value: 'zolo-form-radio-row' },
                                    ]}
                                />
                            </div>
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showLabel && (
                                <ZoloTextControl
                                    label={__('Field Label', 'zoloblocks')}
                                    value={label}
                                    onChange={(v) => setAttributes({ label: v })}
                                    placeholder={__('Enter label..', 'zoloblocks')}
                                    help={__('This will be used as the label for the field', 'zoloblocks')}
                                />
                            )}

                            <ZoloTextControl
                                label={__('Default Value', 'zoloblocks')}
                                value={defaultValue}
                                onChange={(v) => setAttributes({ defaultValue: v })}
                                help={__('Leave empty if no default value is needed and display only on the frontend.', 'zoloblocks')}
                            />

                            <ZoloTextControl
                                className="zolo-flex-col-control"
                                label={__('Custom Name Attribute', 'zoloblocks')}
                                value={customNameAttribute || ''}
                                onChange={(v) => {
                                    const val = v?.replace(/[^a-zA-Z0-9]/g, '_').replace(/\s+/g, '_');
                                    setAttributes({ customNameAttribute: val });
                                }}
                                help={__(
                                    'Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.',
                                    'zoloblocks'
                                )}
                            />

                            {isRequired && (
                                <div className="zolo-flex-col-control">
                                    <ZoloTextareaControl
                                        label={__('Required Message', 'zoloblocks')}
                                        help={__('This message will be shown when the field is required', 'zoloblocks')}
                                        value={requiredMsg}
                                        onChange={(v) => setAttributes({ requiredMsg: v })}
                                    />
                                </div>
                            )}
                            <div className="zolo-custom-heading">{__('Manage Options', 'zoloblocks')}</div>

                            <div className="zolo-flex-col-control">
                                <ZoloTextareaControl
                                    label={__('Options', 'zoloblocks')}
                                    value={optionData}
                                    onChange={(v) => setAttributes({ optionData: v })}
                                    help={__(
                                        '"Enter your options as a list, with each option on a new line. For example: Option 1\n Option 2',
                                        'zoloblocks'
                                    )}
                                />
                            </div>
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {showLabel && (
                            <ZoloPanelBody title={__('Label', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                                    <NormalBGControl requiredProps={requiredProps} controlName={LABEL_BG} noMainBGImg={true} />
                                )}
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={showLabel ? false : true}
                        >
                            <ResRangeControl
                                label={__('Item Gap', 'zoloblocks')}
                                controlName={FIELD_SPACE}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                            />
                            <TabPanelControl
                                options={[
                                    { label: __('Radio', 'zoloblocks'), value: 'normal' },
                                    { label: __('Label', 'zoloblocks'), value: 'hover' },
                                ]}
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={FIELD_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={FIELD_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={FIELD_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={FIELD_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ZoloCardDivider />
                                        <ResRangeControl
                                            label={__('Space Between', 'zoloblocks')}
                                            controlName={RADIO_SPACE_BETWEEN}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                        />
                                        <div className="zolo-custom-heading">{__('Checked', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Background Color', 'zoloblocks')}
                                            color={radioCheckedBgColor}
                                            onChange={(color) => setAttributes({ radioCheckedBgColor: color })}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textColor}
                                            onChange={(color) => setAttributes({ textColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={FIELD_TYPO}
                                            requiredProps={requiredProps}
                                        />
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
                            block="zolo/text-field"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
