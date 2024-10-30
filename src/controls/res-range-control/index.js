import { __experimentalNumberControl as NumberControl, RangeControl } from '@wordpress/components';
// import WithResDeviceBtn from './res-device-btn';

import { prefix } from '../../global/constants';
import ResetBtn from '../reset-btn';
import UnitsBtn from '../units-btn';
import WithResDeviceBtn from '../with-res-device-btn';

const ResRangeControl = ({
    label,
    help = '',
    controlName,
    units,
    requiredProps,
    min,
    max,
    step,
    noUnits,
    object = false,
    objectName = '',
}) => {
    const { attributes, setAttributes, resMode } = requiredProps;
    const {
        [`${prefix}${controlName}Range`]: desktopRange,
        [`${prefix}TAB${controlName}Range`]: tabRange,
        [`${prefix}MOB${controlName}Range`]: mobRange,
    } = attributes;

    // const { testObject } = attributes;

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
                                {((desktopRange !== undefined && desktopRange !== '' && desktopRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </div>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}${controlName}Range`] : desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={sizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}${controlName}Range`] : desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Tablet' && (
                        <>
                            <div className="zb-units-wrapper">
                                {((tabRange !== undefined && tabRange !== '' && tabRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </div>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] : tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={TABsizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] : tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Mobile' && (
                        <>
                            <div className="zb-units-wrapper">
                                {((mobRange !== undefined && mobRange !== '' && mobRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </div>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] : mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={MOBsizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] : mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
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
                                selectedUnit={object ? attributes?.[objectName]?.[`${prefix}${controlName}Unit`] : sizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(sizeUnit) => {
                                    if (object) {
                                        setAttributes({
                                            ...attributes,
                                            [objectName]: {
                                                ...attributes[objectName],
                                                [`${prefix}${controlName}Unit`]: sizeUnit,
                                            },
                                        });
                                    } else {
                                        setAttributes({ [`${prefix}${controlName}Unit`]: sizeUnit });
                                    }
                                }}
                            >
                                {((desktopRange !== undefined && desktopRange !== '' && desktopRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </UnitsBtn>

                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}${controlName}Range`] : desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={sizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}${controlName}Range`] : desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Tablet' && (
                        <>
                            <UnitsBtn
                                selectedUnit={object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Unit`] : TABsizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(TABsizeUnit) => {
                                    if (object) {
                                        setAttributes({
                                            ...attributes,
                                            [objectName]: {
                                                ...attributes[objectName],
                                                [`${prefix}TAB${controlName}Unit`]: TABsizeUnit,
                                            },
                                        });
                                    } else {
                                        setAttributes({ [`${prefix}TAB${controlName}Unit`]: TABsizeUnit });
                                    }
                                }}
                            >
                                {((tabRange !== undefined && tabRange !== '' && tabRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] : tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={TABsizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] : tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
                                    />
                                </div>
                            </WithResDeviceBtn>
                        </>
                    )}

                    {resMode == 'Mobile' && (
                        <>
                            <UnitsBtn
                                selectedUnit={object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Unit`] : MOBsizeUnit}
                                unitTypes={units || defaultUnits}
                                onClick={(MOBsizeUnit) => {
                                    if (object) {
                                        setAttributes({
                                            ...attributes,
                                            [objectName]: {
                                                ...attributes[objectName],
                                                [`${prefix}MOB${controlName}Unit`]: MOBsizeUnit,
                                            },
                                        });
                                    } else {
                                        setAttributes({ [`${prefix}MOB${controlName}Unit`]: MOBsizeUnit });
                                    }
                                }}
                            >
                                {((mobRange !== undefined && mobRange !== '' && mobRange !== 0) ||
                                    (attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] !== undefined &&
                                        attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] !== '')) && (
                                    <ResetBtn
                                        onReset={() => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: '',
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: '' });
                                            }
                                        }}
                                    />
                                )}
                            </UnitsBtn>
                            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                                <div className="zolo-input-range-wrapper">
                                    <RangeControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] : mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: val,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: val });
                                            }
                                        }}
                                        min={min || 0}
                                        max={MOBsizeUnit === '%' ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] : mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: Number(val) || undefined,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: Number(val) || undefined });
                                            }
                                        }}
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
