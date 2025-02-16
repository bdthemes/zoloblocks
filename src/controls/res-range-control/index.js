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

    const desktopRange = object ? attributes?.[objectName][`${prefix}${controlName}Range`] : attributes?.[`${prefix}${controlName}Range`];
    const tabRange = object ? attributes?.[objectName][`${prefix}TAB${controlName}Range`] : attributes?.[`${prefix}TAB${controlName}Range`];
    const mobRange = object ? attributes?.[objectName][`${prefix}MOB${controlName}Range`] : attributes?.[`${prefix}MOB${controlName}Range`];

    let sizeUnit;
    let TABsizeUnit;
    let MOBsizeUnit;
    let defaultUnits;

    if (!noUnits) {

        sizeUnit = object ? attributes?.[objectName][`${prefix}${controlName}Unit`] : attributes?.[`${prefix}${controlName}Unit`];
        TABsizeUnit = object ? attributes?.[objectName][`${prefix}TAB${controlName}Unit`] : attributes?.[`${prefix}TAB${controlName}Unit`];
        MOBsizeUnit = object ? attributes?.[objectName][`${prefix}MOB${controlName}Unit`] : attributes?.[`${prefix}MOB${controlName}Unit`];

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
                                        value={desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: val ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: val ?? 0 });
                                            }
                                        }}
                                        min={min || 0}
                                        max={['%', 'vw', 'vh'].includes(sizeUnit) ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: Number(val) ?? 0 });
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
                                {tabRange !== undefined && tabRange !== '' && tabRange !== 0 && (
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
                                        value={tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: val ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: val ?? 0 });
                                            }
                                        }}
                                        min={min || 0}
                                        max={['%', 'vw', 'vh'].includes(TABsizeUnit) ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: Number(val) ?? 0 });
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
                                {mobRange !== undefined && mobRange !== '' && mobRange !== 0 && (
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
                                        value={mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: val ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: val ?? 0 });
                                            }
                                        }}
                                        min={min || 0}
                                        max={['%', 'vw', 'vh'].includes(MOBsizeUnit) ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: Number(val) ?? 0 });
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
                                selectedUnit={sizeUnit}
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
                                {desktopRange !== undefined && desktopRange !== '' && desktopRange !== 0 && (
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
                                        value={desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: val ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: val ?? 0 });
                                            }
                                        }}
                                        min={min || 0}
                                        max={['%', 'vw', 'vh'].includes(sizeUnit) ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={desktopRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}${controlName}Range`]: Number(val) ?? 0 });
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
                                selectedUnit={TABsizeUnit}
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
                                {tabRange !== undefined && tabRange !== '' && tabRange !== 0 && (
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
                                        value={tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: val ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: val ?? 0 });
                                            }
                                        }}
                                        min={min || 0}
                                        max={['%', 'vw', 'vh'].includes(TABsizeUnit) ? 100 : max || 100}
                                        step={step || 1}
                                        withInputField={false}
                                    />
                                    <NumberControl
                                        value={tabRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}TAB${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}TAB${controlName}Range`]: Number(val) ?? 0 });
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
                                selectedUnit={MOBsizeUnit}
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
                                {mobRange !== undefined && mobRange !== '' && mobRange !== 0 && (
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
                                    <NumberControl
                                        value={mobRange}
                                        onChange={(val) => {
                                            if (object) {
                                                setAttributes({
                                                    ...attributes,
                                                    [objectName]: {
                                                        ...attributes[objectName],
                                                        [`${prefix}MOB${controlName}Range`]: Number(val) ?? 0,
                                                    },
                                                });
                                            } else {
                                                setAttributes({ [`${prefix}MOB${controlName}Range`]: Number(val) ?? 0 });
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
