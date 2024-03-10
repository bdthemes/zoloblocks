/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, TextareaControl } from '@wordpress/components';
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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <ToggleControl
                                label={__('Show Label', 'zolo-blocks')}
                                checked={showLabel}
                                onChange={() => setAttributes({ showLabel: !showLabel })}
                            />
                            <ToggleControl
                                label={__('Show Field Icon', 'zolo-blocks')}
                                checked={showIcon}
                                onChange={() => setAttributes({ showIcon: !showIcon })}
                            />
                            <ToggleControl
                                label={__('Is It Required Field?', 'zolo-blocks')}
                                checked={isRequired}
                                onChange={() => setAttributes({ isRequired: !isRequired })}
                            />
                            {isRequired && (
                                <ToggleControl
                                    label={__('Show Required Symbol', 'zolo-blocks')}
                                    checked={showRequiredSymbol}
                                    onChange={() => setAttributes({ showRequiredSymbol: !showRequiredSymbol })}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} panelProps={props}>
                            {showLabel && (
                                <TextControl
                                    label={__('Field Label', 'zolo-blocks')}
                                    value={label}
                                    onChange={(v) => setAttributes({ label: v })}
                                    placeholder={__('Enter label..', 'zolo-blocks')}
                                    help={__('This will be used as the label for the field', 'zolo-blocks')}
                                />
                            )}
                            <TextControl
                                label={__('Placeholder', 'zolo-blocks')}
                                value={placeholder}
                                onChange={(v) => setAttributes({ placeholder: v })}
                            />
                            {isRequired && (
                                <TextareaControl
                                    label={__('Required Message', 'zolo-blocks')}
                                    help={__('This message will be shown when the field is required.', 'zolo-blocks')}
                                    value={requiredMsg}
                                    onChange={(v) => setAttributes({ requiredMsg: v })}
                                    placeholder={__('Enter required message..', 'zolo-blocks')}
                                />
                            )}
                            {showIcon && (
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Label', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                        )}

                        <ZoloPanelBody
                            title={__('Field', 'zolo-blocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={showLabel ? false : true}
                        >
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
                        {showIcon && (
                            <ZoloPanelBody title={__('Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
