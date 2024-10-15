import { RangeControl, Button, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import UnitBtn from '../unit-btn';
// import WithResDeviceBtn from './res-device-btn';

import WithResDeviceBtn from '../with-res-device-btn';
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import { prefix } from '../../global/constants';

const ResRangeControl = ({ label, help = '', controlName, units, requiredProps, min, max, step, noUnits }) => {
    const { attributes, setAttributes, resMode } = requiredProps;
    const {
        [`${prefix}${controlName}Range`]: desktopRange,
        [`${prefix}TAB${controlName}Range`]: tabRange,
        [`${prefix}MOB${controlName}Range`]: mobRange,
    } = attributes;

    let sizeUnit;
    let TABsizeUnit;
    let MOBsizeUnit;
    let defaultUnits;

    if (!noUnits) {
        sizeUnit = attributes[`${prefix}${controlName}Unit`];
        TABsizeUnit = attributes[`${prefix}TAB${controlName}Unit`];
        MOBsizeUnit = attributes[`${prefix}MOB${controlName}Unit`];
        defaultUnits = [
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
            { label: '%', value: '%' },
            { label: 'vh', value: 'vh' },
            { label: 'vw', value: 'vw' },
        ];
    }

    return (
        <div className="zb-res-range-control-wrapper">
            {noUnits ? (
                <>
                    {resMode == 'Desktop' && (
                        <>
                            <div className="zb-units-wrapper">
                                {desktopRange !== undefined && desktopRange !== '' && desktopRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </div>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={desktopRange}
                                        onChange={(val) =>
                                            setAttributes({
                                                [`${prefix}${controlName}Range`]: val,
                                            })
                                        }
                                        min={min || 0}
                                        max={sizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={desktopRange}
                                        onChange={(val) =>
                                            setAttributes({
                                                [`${prefix}${controlName}Range`]: Number(val) || undefined,
                                            })
                                        }
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Tablet' && (
                        <>
                            <div className="zb-units-wrapper">
                                {tabRange !== undefined && tabRange !== '' && tabRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}TAB${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </div>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={tabRange}
                                        onChange={(val) =>
                                            setAttributes({
                                                [`${prefix}TAB${controlName}Range`]: val,
                                            })
                                        }
                                        min={min || 0}
                                        max={TABsizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={tabRange}
                                        onChange={(val) =>
                                            setAttributes({
                                                [`${prefix}TAB${controlName}Range`]: Number(val) || undefined,
                                            })
                                        }
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Mobile' && (
                        <>
                            <div className="zb-units-wrapper">
                                {mobRange !== undefined && mobRange !== '' && mobRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}MOB${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </div>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                 <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                    value={mobRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}MOB${controlName}Range`]: val,
                                        })
                                    }
                                    min={min || 0}
                                    max={MOBsizeUnit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <NumberControl
                                    value={mobRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}MOB${controlName}Range`]: Number(val) || undefined,
                                        })
                                    }
                                />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}
                </>
            ) : (
                <>
                    {resMode == 'Desktop' && (
                        <>
                            <UnitsBtn
                                selectedUnit={sizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(sizeUnit) =>
                                    setAttributes({
                                        [`${prefix}${controlName}Unit`]: sizeUnit,
                                    })
                                }
                            >
                                {desktopRange !== undefined && desktopRange !== '' && desktopRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </UnitsBtn>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                 <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                    value={desktopRange}
                                    onChange={(val) => {
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: val,
                                        });
                                    }}
                                    min={min || 0}
                                    max={sizeUnit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <NumberControl
                                    value={desktopRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: Number(val) || undefined,
                                        })
                                    }
                                />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Tablet' && (
                        <>
                            <UnitsBtn
                                selectedUnit={TABsizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(TABsizeUnit) =>
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Unit`]: TABsizeUnit,
                                    })
                                }
                            >
                                {tabRange !== undefined && tabRange !== '' && tabRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}TAB${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                 <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                    value={tabRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}TAB${controlName}Range`]: val,
                                        })
                                    }
                                    min={min || 0}
                                    max={TABsizeUnit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <NumberControl
                                    value={tabRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}TAB${controlName}Range`]: Number(val) || undefined,
                                        })
                                    }
                                />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Mobile' && (
                        <>
                            <UnitsBtn
                                selectedUnit={MOBsizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(MOBsizeUnit) =>
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Unit`]: MOBsizeUnit,
                                    })
                                }
                            >
                                {mobRange !== undefined && mobRange !== '' && mobRange !== 0 && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${prefix}MOB${controlName}Range`]: '',
                                            });
                                        }}
                                    />
                                )}
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                  <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                    value={mobRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}MOB${controlName}Range`]: val,
                                        })
                                    }
                                    min={min || 0}
                                    max={MOBsizeUnit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <NumberControl
                                    value={mobRange}
                                    onChange={(val) =>
                                        setAttributes({
                                            [`${prefix}MOB${controlName}Range`]: Number(val) || undefined,
                                        })
                                    }
                                />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}
                </>
            )}
            {help && <p className="help-text">{help}</p>}
        </div>
    );
};
export default ResRangeControl;
