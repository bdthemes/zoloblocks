import { RangeControl, Button } from '@wordpress/components';
import UnitBtn from '../unit-btn';
// import WithResDeviceBtn from './res-device-btn';

import WithResDeviceBtn from '../with-res-device-btn';
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import { prefix } from '../../global/constants';

const ResRangeControl = ({ label, controlName, units, requiredProps, min, max, step, noUnits }) => {
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
        ];
    }

    return (
        <div className="zb-res-range-control-wrapper">
            {noUnits ? (
                <>
                    {resMode == 'Desktop' && (
                        <>
                            <div className="zb-units-wrapper">
                                <ResetBtn
                                    onReset={() => {
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: '',
                                        });
                                    }}
                                />
                            </div>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
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
                                />
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Tablet' && (
                        <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
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
                            />
                        </WithResDeviceBtn>
                    )}

                    {resMode == 'Mobile' && (
                        <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
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
                            />
                        </WithResDeviceBtn>
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
                                <ResetBtn
                                    onReset={() => {
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: '',
                                        });
                                    }}
                                />
                            </UnitsBtn>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <RangeControl
                                    value={desktopRange}
                                    onChange={(val) => {
                                        console.log(val);
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: val,
                                        });
                                    }}
                                    min={min || 0}
                                    max={sizeUnit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                />
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
                                <ResetBtn
                                    onReset={() => {
                                        setAttributes({
                                            [`${prefix}TAB${controlName}Range`]: '',
                                        });
                                    }}
                                />
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
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
                                />
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
                                <ResetBtn
                                    onReset={() => {
                                        setAttributes({
                                            [`${prefix}MOB${controlName}Range`]: '',
                                        });
                                    }}
                                />
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
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
                                />
                            </WithResDeviceBtn>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
export default ResRangeControl;
