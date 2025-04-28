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
    ZoloCardDivider,
    ZoloTextareaControl,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ZoloIconPicker,
    ResDimensionsControl,
    NormalBGControl,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { FIELD_TYPO, LABEL_TYPO } from './constants/typoPrefixConstant';
import {
    LABEL_MARGIN,
    LABEL_BG,
    LABEL_PADDING,
    LABEL_BORDER,
    LABEL_BRADIUS,
    FIELD_PADDING,
    FIELD_BG,
    FIELD_BORDER,
    FIELD_BRADIUS,
    ICON_SIZE,
    ARROW_ICON_SIZE,
    ARROW_ICON_SPACING,
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
        showIcon,
        icon,
        iconColor,
        isRequired,
        requiredMsg,
        showRequiredSymbol,
        requiredColor,
        defaultValue,
        customNameAttribute,
        firstOption,
        arrowIconColor,
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
                            <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
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

                            {preset !== 'style-3' && (
                                <ZoloToggleControl
                                    label={__('Icon', 'zoloblocks')}
                                    checked={showIcon}
                                    onChange={() => setAttributes({ showIcon: !showIcon })}
                                />
                            )}

                            {isRequired && (
                                <ZoloToggleControl
                                    label={__('Required Symbol', 'zoloblocks')}
                                    checked={showRequiredSymbol}
                                    onChange={() => setAttributes({ showRequiredSymbol: !showRequiredSymbol })}
                                />
                            )}
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
                            <ZoloCardDivider />
                            <ZoloTextControl
                                label={__('Default Value', 'zoloblocks')}
                                value={defaultValue || ''}
                                onChange={(v) => setAttributes({ defaultValue: v })}
                                help={__('Leave empty if no default value is needed.', 'zoloblocks')}
                            />

                            <ZoloCardDivider />

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
                            <ZoloCardDivider />
                            <div className="zolo-flex-col-control">
                                <ZoloTextControl
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
                            </div>

                            <ZoloCardDivider />

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

                            {showIcon && preset !== 'style-3' && (
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    value={icon}
                                    onChange={(value) => {
                                        setAttributes({
                                            icon: value,
                                        });
                                    }}
                                />
                            )}
                            <div className="zolo-flex-col-control">
                                <ZoloTextControl
                                    label={__('First Option Item', 'zoloblocks')}
                                    value={firstOption}
                                    onChange={(v) => setAttributes({ firstOption: v })}
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
                            <div className="zolo-custom-heading">{__('Arrow Icon', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={arrowIconColor}
                                onChange={(color) => setAttributes({ arrowIconColor: color })}
                            />
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={ARROW_ICON_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Spacing', 'zoloblocks')}
                                controlName={ARROW_ICON_SPACING}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>
                        {showIcon && preset !== 'style-3' && (
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                            </ZoloPanelBody>
                        )}
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
