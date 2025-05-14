/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloCardDivider,
    ZoloTextControl,
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
    BUTTON_BORDER,
    BUTTON_BORDER_RADIUS,
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
    BUTTON_SIZE,
    FOCUS_BORDER_WIDTH,
    BUTTON_LAYOUT_TYPES,
    LABEL_BORDER,
    LABEL_BORDER_RADIUS,
    LABEL_PADDING,
    LABEL_SPACING,
    LABEL_BG,
    LABEL_HOVER_BG_COLOR,
} from './constants';

import { INPUT_TYPOGRAPHY, LABEL_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        labelText,
        labelColor,
        iconColor,
        iconHoverColor,
        btnTextColor,
        btnTextHoverColor,
        labelBorderHoverColor,
        btnBorderHoverColor,
        buttonIcon,
        buttonText,
        inputColor,
        focusColor,
        placeholderColor,
        placeholder,
        btnLayoutType,
        showButtonText,
        showIcon,
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
                block="zolo/advanced-search"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Presets', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.advancedSearch.presets', PRESETS)}
                                onChange={(value) =>
                                    setAttributes({
                                        preset: value,
                                    })
                                }
                            />
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Style', 'zoloblocks')}
                                    value={btnLayoutType}
                                    onChange={(value) =>
                                        setAttributes({
                                            btnLayoutType: value,
                                        })
                                    }
                                    options={BUTTON_LAYOUT_TYPES}
                                />
                            </div>
                            <ZoloCardDivider />
                            <ZoloToggleControl
                                label={__('Button Text', 'zoloblocks')}
                                checked={showButtonText}
                                onChange={(value) =>
                                    setAttributes({
                                        showButtonText: value,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Icon', 'zoloblocks')}
                                checked={showIcon}
                                onChange={(value) =>
                                    setAttributes({
                                        showIcon: value,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props} firstOpen={false}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Button', 'zoloblocks')}
                            </div>
                            {showIcon && (
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={buttonIcon}
                                    onChange={(value) => {
                                        setAttributes({
                                            buttonIcon: value,
                                        });
                                    }}
                                />
                            )}

                            {showButtonText && (
                                <ZoloTextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={buttonText}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonText: value,
                                        })
                                    }
                                />
                            )}

                            {preset === 'zolo-search-2' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Label', 'zoloblocks')}</div>
                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={labelText}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelText: value,
                                            })
                                        }
                                    />
                                </>
                            )}
                            {preset === 'zolo-search-1' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Placeholder', 'zoloblocks')}</div>
                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={placeholder}
                                        onChange={(value) => setAttributes({ placeholder: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        {preset === 'zolo-search-2' && (
                            <>
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
                                                <ZoloCardDivider />
                                                <NormalBGControl requiredProps={requiredProps} controlName={LABEL_BG} noMainBGImg={false} />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={LABEL_PADDING}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
                                                {btnLayoutType === 'zolo-search-button-style-2' && (
                                                    <ResRangeControl
                                                        label={__('Spacing', 'zoloblocks')}
                                                        controlName={LABEL_SPACING}
                                                        requiredProps={requiredProps}
                                                    />
                                                )}
                                                <ZoloCardDivider />
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
                                                        <NormalBGControl
                                                            requiredProps={requiredProps}
                                                            controlName={LABEL_HOVER_BG_COLOR}
                                                            noMainBGImg={false}
                                                        />
                                                    </>
                                                )}
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={preset === 'zolo-search-1' ? true : false}
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
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={INPUT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={INPUT_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={INPUT_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ZoloCardDivider />
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

                                        {preset === 'zolo-search-1' && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Placeholder', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={placeholderColor}
                                                    onChange={(color) => setAttributes({ placeholderColor: color })}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={focusColor}
                                            onChange={(color) => setAttributes({ focusColor: color })}
                                        />
                                        <BoxShadowControl controlName={FIELD_FOCUS_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResRangeControl
                                            label={__('Width', 'zoloblocks')}
                                            controlName={FOCUS_BORDER_WIDTH}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={10}
                                            step={1}
                                        />
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
                                                {preset === 'zolo-search-1' && (
                                                    <ResRangeControl
                                                        label={__('Size', 'zoloblocks')}
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
                                        <ZoloCardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={BUTTON_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        {btnLayoutType === 'zolo-search-button-style-2' && (
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={BUTTON_SPACING}
                                                requiredProps={requiredProps}
                                            />
                                        )}

                                        <ZoloCardDivider />
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
                                        {showIcon && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
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
                                        {showIcon && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconHoverColor}
                                                    onChange={(color) => setAttributes({ iconHoverColor: color })}
                                                />
                                            </>
                                        )}
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
                            block="zolo/advanced-search"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
