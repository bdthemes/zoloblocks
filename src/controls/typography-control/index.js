//wordpress dependencies
import { BaseControl, Button, Dropdown, RangeControl, SelectControl, Tooltip } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

//internal dependencies control
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import FontPicker from './fontPicker';
import IconicBtnGroup from '../iconic-btn-group';

import { prefix } from '../../global/constants';

//block constant
import { fontStyleOptions, fontWeightOptions, LHLS_UNITS, sizeUnitTypes, textDecorationOptions, textTransformOptions } from './constant';

//googlefonts
import { googleFonts } from './fontPicker/googleFonts';

const TypographyDropdown = ({ label, typoPrefixConstant, requiredProps, defaultFontSize, max = 136 }) => {
    const { attributes, setAttributes, resMode, objAttributes } = requiredProps;

    const {
        [`${prefix}${typoPrefixConstant}FontFamily`]: fontFamily,
        [`${prefix}${typoPrefixConstant}FontWeight`]: fontWeight,
        [`${prefix}${typoPrefixConstant}FontStyle`]: fontStyle,
        [`${prefix}${typoPrefixConstant}TextTransform`]: textTransform,
        [`${prefix}${typoPrefixConstant}TextDecoration`]: textDecoration,
        [`${prefix}${typoPrefixConstant}FontSize`]: fontSize = defaultFontSize || undefined,
        [`${prefix}${typoPrefixConstant}SizeUnit`]: sizeUnit,
        [`${prefix}${typoPrefixConstant}LetterSpacing`]: letterSpacing,
        [`${prefix}${typoPrefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
        [`${prefix}${typoPrefixConstant}LineHeight`]: lineHeight,
        [`${prefix}${typoPrefixConstant}LineHeightUnit`]: lineHeightUnit,

        [`${prefix}TAB${typoPrefixConstant}SizeUnit`]: TABsizeUnit,
        [`${prefix}TAB${typoPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
        [`${prefix}TAB${typoPrefixConstant}LineHeightUnit`]: TABlineHeightUnit,
        [`${prefix}TAB${typoPrefixConstant}FontSize`]: TABfontSize,
        [`${prefix}TAB${typoPrefixConstant}LetterSpacing`]: TABletterSpacing,
        [`${prefix}TAB${typoPrefixConstant}LineHeight`]: TABlineHeight,

        [`${prefix}MOB${typoPrefixConstant}SizeUnit`]: MOBsizeUnit,
        [`${prefix}MOB${typoPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
        [`${prefix}MOB${typoPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
        [`${prefix}MOB${typoPrefixConstant}FontSize`]: MOBfontSize,
        [`${prefix}MOB${typoPrefixConstant}LetterSpacing`]: MOBletterSpacing,
        [`${prefix}MOB${typoPrefixConstant}LineHeight`]: MOBlineHeight,
    } = attributes;

    //Update Font Weight and Font Varient
    const [zbFontWeight, setZbFontWeight] = useState(fontWeightOptions);

    useEffect(() => {
        const fontFamilyKey = (fontFamily || '').replace(/\s+/g, '-');
        let googleFontWeight = googleFonts[fontFamilyKey] ? googleFonts[fontFamilyKey].variants : [];
        let fontWeightVal = googleFontWeight.map((item) => ({
            label: item,
            value: item,
        }));
        const fontWeightwithDefault = [{ label: 'Default', value: '' }, ...fontWeightVal];
        setZbFontWeight(fontWeightwithDefault);
    }, [fontFamily]);

    const hasValueClass =
        fontFamily || fontWeight || fontStyle || textTransform || textDecoration || fontSize || letterSpacing || lineHeight
            ? 'zb-has-value'
            : '';

    return (
        <BaseControl label={label || __('Typography', 'zoloblocks')} className="zb-typography-control-wrapper">
            <div className="zolo-flex">
                {hasValueClass && (
                    <ResetBtn
                        customClass="zb-reset-has-value"
                        onReset={() => {
                            setAttributes({
                                [`${prefix}${typoPrefixConstant}FontFamily`]: '',
                                [`${prefix}${typoPrefixConstant}FontSize`]:
                                    defaultFontSize || (objAttributes[`${typoPrefixConstant}ZRPFontSize`] || {}).default,
                                [`${prefix}TAB${typoPrefixConstant}FontSize`]: (objAttributes[`TAB${typoPrefixConstant}ZRPFontSize`] || {})
                                    .default,
                                [`${prefix}MOB${typoPrefixConstant}FontSize`]: (objAttributes[`MOB${typoPrefixConstant}ZRPFontSize`] || {})
                                    .default,
                                [`${prefix}${typoPrefixConstant}LetterSpacing`]: (
                                    objAttributes[`${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                ).default,
                                [`${prefix}TAB${typoPrefixConstant}LetterSpacing`]: (
                                    objAttributes[`TAB${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                ).default,
                                [`${prefix}MOB${typoPrefixConstant}LetterSpacing`]: (
                                    objAttributes[`MOB${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                ).default,
                                [`${prefix}${typoPrefixConstant}LineHeight`]: (objAttributes[`${typoPrefixConstant}ZRPLineHeight`] || {})
                                    .default,
                                [`${prefix}TAB${typoPrefixConstant}LineHeight`]: (
                                    objAttributes[`TAB${typoPrefixConstant}ZRPLineHeight`] || {}
                                ).default,
                                [`${prefix}MOB${typoPrefixConstant}LineHeight`]: (
                                    objAttributes[`MOB${typoPrefixConstant}ZRPLineHeight`] || {}
                                ).default,
                            });
                        }}
                    />
                )}
                <Dropdown
                    className="zb-typography-dropdown"
                    popoverProps={{ placement: 'bottom-start' }}
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button onClick={onToggle} aria-expanded={isOpen} className={`zb-typography-dropdown-btn ${hasValueClass}`}>
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 20L19 20" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M14.6158 4.57792C14.9876 4.20789 15.4918 4 16.0176 4C16.2779 4 16.5357 4.05104 16.7762 4.1502C17.0168 4.24936 17.2353 4.3947 17.4194 4.57792C17.6035 4.76115 18.7495 5.97401 18.8491 6.21341C18.9487 6.4528 19 6.70938 19 6.9685C19 7.22762 18.9487 7.4842 18.8491 7.7236C18.7495 7.96299 18.6035 8.18051 18.4194 8.36374L9.73803 17H5L6.5 12.5L14.6158 4.57792Z"
                                    stroke="#4D4D4D"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="zolo-panel-control zb-typography-component-panel">
                            <div className="zolo-flex-row-control">
                                <div className="zolo-flex-col-control zolo-font-family-input">
                                    <FontPicker
                                        className="zb-fontpicker-fontfamily"
                                        label={__('Font Family', 'zoloblocks')}
                                        value={fontFamily}
                                        onChange={(FontFamily) => {
                                            setAttributes({
                                                [`${prefix}${typoPrefixConstant}FontFamily`]: FontFamily,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="zolo-flex-col-control zolo-font-weight-input">
                                    <SelectControl
                                        label={__('Weight', 'zoloblocks')}
                                        value={fontWeight}
                                        options={fontWeightOptions}
                                        onChange={(FontWeight) =>
                                            setAttributes({
                                                [`${prefix}${typoPrefixConstant}FontWeight`]: FontWeight,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="zb-res-range-control-wrapper">
                                {resMode == 'Desktop' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={sizeUnit}
                                            unitTypes={sizeUnitTypes}
                                            onClick={(sizeUnit) =>
                                                setAttributes({
                                                    [`${prefix}${typoPrefixConstant}SizeUnit`]: sizeUnit,
                                                })
                                            }
                                        >
                                            {fontSize !== (objAttributes[`${typoPrefixConstant}ZRPFontSize`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}${typoPrefixConstant}FontSize`]: (
                                                                objAttributes[`${typoPrefixConstant}ZRPFontSize`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn label={__('Size', 'zoloblocks')} requiredProps={requiredProps} noResetBtn={true}>
                                            <RangeControl
                                                value={fontSize}
                                                onChange={(FontSize) =>
                                                    setAttributes({
                                                        [`${prefix}${typoPrefixConstant}FontSize`]: FontSize,
                                                    })
                                                }
                                                step={sizeUnit === 'em' ? 0.1 : 1}
                                                min={0}
                                                max={sizeUnit === 'em' ? 10 : max}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Tablet' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={TABsizeUnit}
                                            unitTypes={sizeUnitTypes}
                                            onClick={(TABsizeUnit) =>
                                                setAttributes({
                                                    [`${prefix}TAB${typoPrefixConstant}SizeUnit`]: TABsizeUnit,
                                                })
                                            }
                                        >
                                            {TABfontSize !== (objAttributes[`TAB${typoPrefixConstant}ZRPFontSize`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}TAB${typoPrefixConstant}FontSize`]: (
                                                                objAttributes[`TAB${typoPrefixConstant}ZRPFontSize`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn label={__('Size', 'zoloblocks')} requiredProps={requiredProps} noResetBtn={true}>
                                            <RangeControl
                                                value={TABfontSize}
                                                onChange={(FontSize) =>
                                                    setAttributes({
                                                        [`${prefix}TAB${typoPrefixConstant}FontSize`]: FontSize,
                                                    })
                                                }
                                                step={TABsizeUnit === 'em' ? 0.1 : 1}
                                                min={0}
                                                max={TABsizeUnit === 'em' ? 10 : max}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Mobile' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={MOBsizeUnit}
                                            unitTypes={sizeUnitTypes}
                                            onClick={(MOBsizeUnit) =>
                                                setAttributes({
                                                    [`${prefix}MOB${typoPrefixConstant}SizeUnit`]: MOBsizeUnit,
                                                })
                                            }
                                        >
                                            {MOBfontSize !== (objAttributes[`MOB${typoPrefixConstant}ZRPFontSize`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}MOB${typoPrefixConstant}FontSize`]: (
                                                                objAttributes[`MOB${typoPrefixConstant}ZRPFontSize`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn label={__(' Size', 'zoloblocks')} requiredProps={requiredProps} noResetBtn={true}>
                                            <RangeControl
                                                value={MOBfontSize}
                                                onChange={(FontSize) =>
                                                    setAttributes({
                                                        [`${prefix}MOB${typoPrefixConstant}FontSize`]: FontSize,
                                                    })
                                                }
                                                step={MOBsizeUnit === 'em' ? 0.1 : 1}
                                                min={0}
                                                max={MOBsizeUnit === 'em' ? 10 : max}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                            </div>
                            <div className="zb-res-range-control-wrapper">
                                {resMode == 'Desktop' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={letterSpacingUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(LetterSpacingUnit) =>
                                                setAttributes({
                                                    [`${prefix}${typoPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit,
                                                })
                                            }
                                        >
                                            {letterSpacing !== (objAttributes[`${typoPrefixConstant}ZRPLetterSpacing`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}${typoPrefixConstant}LetterSpacing`]: (
                                                                objAttributes[`${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Letter Spacing', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={letterSpacing}
                                                onChange={(LetterSpacing) =>
                                                    setAttributes({
                                                        [`${prefix}${typoPrefixConstant}LetterSpacing`]: LetterSpacing,
                                                    })
                                                }
                                                min={0}
                                                max={letterSpacingUnit === 'em' ? 10 : 100}
                                                step={letterSpacingUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Tablet' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={TABletterSpacingUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(TABletterSpacingUnit) =>
                                                setAttributes({
                                                    [`${prefix}TAB${typoPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
                                                })
                                            }
                                        >
                                            {TABletterSpacing !==
                                                (objAttributes[`TAB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}TAB${typoPrefixConstant}LetterSpacing`]: (
                                                                objAttributes[`TAB${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Letter Spacing', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={TABletterSpacing}
                                                onChange={(LetterSpacing) =>
                                                    setAttributes({
                                                        [`${prefix}TAB${typoPrefixConstant}LetterSpacing`]: LetterSpacing,
                                                    })
                                                }
                                                min={0}
                                                max={TABletterSpacingUnit === 'em' ? 10 : 100}
                                                step={TABletterSpacingUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Mobile' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={MOBletterSpacingUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(MOBletterSpacingUnit) =>
                                                setAttributes({
                                                    [`${prefix}MOB${typoPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
                                                })
                                            }
                                        >
                                            {MOBletterSpacing !==
                                                (objAttributes[`MOB${typoPrefixConstant}ZRPLetterSpacing`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}MOB${typoPrefixConstant}LetterSpacing`]: (
                                                                objAttributes[`MOB${typoPrefixConstant}ZRPLetterSpacing`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Letter Spacing', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={MOBletterSpacing}
                                                onChange={(LetterSpacing) =>
                                                    setAttributes({
                                                        [`${prefix}MOB${typoPrefixConstant}LetterSpacing`]: LetterSpacing,
                                                    })
                                                }
                                                min={0}
                                                max={MOBletterSpacingUnit === 'em' ? 10 : 100}
                                                step={MOBletterSpacingUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                            </div>
                            <div className="zb-res-range-control-wrapper">
                                {resMode == 'Desktop' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={lineHeightUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(LineHeightUnit) =>
                                                setAttributes({
                                                    [`${prefix}${typoPrefixConstant}LineHeightUnit`]: LineHeightUnit,
                                                })
                                            }
                                        >
                                            {lineHeight !== (objAttributes[`${typoPrefixConstant}ZRPLineHeight`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}${typoPrefixConstant}LineHeight`]: (
                                                                objAttributes[`${typoPrefixConstant}ZRPLineHeight`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Line Height', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={lineHeight}
                                                onChange={(LineHeight) =>
                                                    setAttributes({
                                                        [`${prefix}${typoPrefixConstant}LineHeight`]: LineHeight,
                                                    })
                                                }
                                                min={0}
                                                max={lineHeightUnit === 'em' ? 10 : 600}
                                                step={lineHeightUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Tablet' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={TABlineHeightUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(TABlineHeightUnit) =>
                                                setAttributes({
                                                    [`${prefix}TAB${typoPrefixConstant}LineHeightUnit`]: TABlineHeightUnit,
                                                })
                                            }
                                        >
                                            {TABlineHeight !== (objAttributes[`TAB${typoPrefixConstant}ZRPLineHeight`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}TAB${typoPrefixConstant}LineHeight`]: (
                                                                objAttributes[`TAB${typoPrefixConstant}ZRPLineHeight`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Line Height', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={TABlineHeight}
                                                onChange={(LineHeight) =>
                                                    setAttributes({
                                                        [`${prefix}TAB${typoPrefixConstant}LineHeight`]: LineHeight,
                                                    })
                                                }
                                                min={0}
                                                max={TABlineHeightUnit === 'em' ? 10 : 600}
                                                step={TABlineHeightUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                                {resMode == 'Mobile' && (
                                    <>
                                        <UnitsBtn
                                            selectedUnit={MOBlineHeightUnit}
                                            unitTypes={LHLS_UNITS}
                                            onClick={(MOBlineHeightUnit) =>
                                                setAttributes({
                                                    [`${prefix}MOB${typoPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
                                                })
                                            }
                                        >
                                            {MOBlineHeight !== (objAttributes[`MOB${typoPrefixConstant}ZRPLineHeight`] || {}).default && (
                                                <ResetBtn
                                                    onReset={() =>
                                                        setAttributes({
                                                            [`${prefix}MOB${typoPrefixConstant}LineHeight`]: (
                                                                objAttributes[`MOB${typoPrefixConstant}ZRPLineHeight`] || {}
                                                            ).default,
                                                        })
                                                    }
                                                />
                                            )}
                                        </UnitsBtn>

                                        <WithResDeviceBtn
                                            label={__('Line Height', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            noResetBtn={true}
                                        >
                                            <RangeControl
                                                value={MOBlineHeight}
                                                onChange={(LineHeight) =>
                                                    setAttributes({
                                                        [`${prefix}MOB${typoPrefixConstant}LineHeight`]: LineHeight,
                                                    })
                                                }
                                                min={0}
                                                max={MOBlineHeightUnit === 'em' ? 10 : 600}
                                                step={MOBlineHeightUnit === 'em' ? 0.1 : 1}
                                            />
                                        </WithResDeviceBtn>
                                    </>
                                )}
                            </div>
                            <div className="zolo-flex-col-control">
                                <IconicBtnGroup
                                    label={__('Text Transform', 'zoloblocks')}
                                    value={textTransform}
                                    options={textTransformOptions}
                                    onChange={(TextTransform) =>
                                        setAttributes({
                                            [`${prefix}${typoPrefixConstant}TextTransform`]: TextTransform,
                                        })
                                    }
                                />
                            </div>
                            <div className="zolo-flex-row-control">
                                <IconicBtnGroup
                                    label={__('Font Style', 'zoloblocks')}
                                    value={fontStyle}
                                    options={fontStyleOptions}
                                    onChange={(fontStyle) =>
                                        setAttributes({
                                            [`${prefix}${typoPrefixConstant}FontStyle`]: fontStyle,
                                        })
                                    }
                                />
                                <IconicBtnGroup
                                    label={__('Text Decoration', 'zoloblocks')}
                                    value={textDecoration}
                                    options={textDecorationOptions}
                                    onChange={(TextDecoration) =>
                                        setAttributes({
                                            [`${prefix}${typoPrefixConstant}TextDecoration`]: TextDecoration,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    )}
                />
            </div>
        </BaseControl>
    );
};
export default TypographyDropdown;
