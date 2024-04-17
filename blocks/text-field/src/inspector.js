/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, TextareaControl, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
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
import { LABEL_MARGIN, FIELD_PADDING, FIELD_BG, FIELD_BORDER, FIELD_BRADIUS, ICON_SIZE } from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showLabel,
        label,
        labelColor,
        textColor,
        placeholder,
        placeholderColor,
        showIcon,
        icon,
        iconColor,
        isRequired,
        requiredMsg,
        showRequiredSymbol,
        requiredColor,
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
                            <ToggleControl
                                label={__('Show Label', 'zoloblocks')}
                                checked={showLabel}
                                onChange={() => setAttributes({ showLabel: !showLabel })}
                            />
                            <ToggleControl
                                label={__('Is It Required Field?', 'zoloblocks')}
                                checked={isRequired}
                                onChange={() => setAttributes({ isRequired: !isRequired })}
                            />
                            <ToggleControl
                                label={__('Show icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={() => setAttributes({ showIcon: !showIcon })}
                            />
                            {isRequired && (
                                <ToggleControl
                                    label={__('Show Required Symbol', 'zoloblocks')}
                                    checked={showRequiredSymbol}
                                    onChange={() => setAttributes({ showRequiredSymbol: !showRequiredSymbol })}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showLabel && (
                                <TextControl
                                    label={__('Field Label', 'zoloblocks')}
                                    value={label}
                                    onChange={(v) => setAttributes({ label: v })}
                                    placeholder={__('Enter label..', 'zoloblocks')}
                                    help={__('This will be used as the label for the field', 'zoloblocks')}
                                />
                            )}
                            <TextControl
                                label={__('Placeholder', 'zoloblocks')}
                                value={placeholder}
                                onChange={(v) => setAttributes({ placeholder: v })}
                            />
                            {isRequired && (
                                <TextareaControl
                                    label={__('Required Message', 'zoloblocks')}
                                    help={__('This message will be shown when the field is required', 'zoloblocks')}
                                    value={requiredMsg}
                                    onChange={(v) => setAttributes({ requiredMsg: v })}
                                />
                            )}
                            {showIcon && (
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
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {showLabel && (
                            <ZoloPanelBody title={__('Label', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Label Color', 'zoloblocks')}
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
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={LABEL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={showLabel ? false : true}
                        >
                            <ColorControl
                                label={__('Text Color', 'zoloblocks')}
                                color={textColor}
                                onChange={(color) => setAttributes({ textColor: color })}
                            />
                            <ColorControl
                                label={__('Placeholder Color', 'zoloblocks')}
                                color={placeholderColor}
                                onChange={(color) => setAttributes({ placeholderColor: color })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={FIELD_TYPO}
                                requiredProps={requiredProps}
                            />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={FIELD_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={FIELD_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FIELD_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={FIELD_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        {showIcon && (
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
