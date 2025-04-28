import { ZoloBaseControl, ZoloNumberControl, ZoloRangeControl } from '../core-controls';
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';

const SimpleRangeControl = ({ label, onChange, onUnitChange, value, unit, onReset, units, min, max, step, noUnits }) => {
    let defaultUnits = [];
    if (!noUnits) {
        defaultUnits = [
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
            { label: '%', value: '%' },
        ];
    }

    return (
        <div className="zolo-flex-col-control">
            <div className="zb-res-range-control-wrapper">
                {noUnits ? (
                    <>
                        <div className="zb-units-wrapper">
                            {value !== undefined && value !== '' && value !== 0 && <ResetBtn onReset={() => onReset()} />}
                        </div>
                        <ZoloBaseControl label={label}>
                            <div className="zolo-input-range-wrapper">
                                <ZoloRangeControl
                                    value={value}
                                    onChange={(val) => onChange(val)}
                                    min={min || 0}
                                    max={unit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />

                                <ZoloNumberControl value={value} onChange={(val) => onChange(val ? Number(val) : undefined)} />
                            </div>
                        </ZoloBaseControl>
                    </>
                ) : (
                    <>
                        <UnitsBtn selectedUnit={unit} unitTypes={units || defaultUnits} onClick={(sizeUnit) => onUnitChange(sizeUnit)}>
                            {value !== undefined && value !== '' && value !== 0 && <ResetBtn onReset={() => onReset()} />}
                        </UnitsBtn>

                        <ZoloBaseControl label={label}>
                            <div className="zolo-input-range-wrapper">
                                <ZoloRangeControl
                                    value={value}
                                    onChange={(val) => onChange(val)}
                                    min={min || 0}
                                    max={unit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <ZoloNumberControl value={value} onChange={(val) => onChange(val ? Number(val) : undefined)} />
                            </div>
                        </ZoloBaseControl>
                    </>
                )}
            </div>
        </div>
    );
};
export default SimpleRangeControl;
