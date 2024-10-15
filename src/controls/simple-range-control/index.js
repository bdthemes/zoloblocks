import { RangeControl, BaseControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
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
                        <BaseControl label={label}>
                            <div className="zolo-input-range-wrapper">
                                <RangeControl
                                    value={value}
                                    onChange={(val) => onChange(val)}
                                    min={min || 0}
                                    max={unit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />

                                <NumberControl value={value} onChange={(val) => onChange(val ? Number(val) : undefined)} />
                            </div>
                        </BaseControl>
                    </>
                ) : (
                    <>
                        <UnitsBtn selectedUnit={unit} unitTypes={units || defaultUnits} onClick={(sizeUnit) => onUnitChange(sizeUnit)}>
                            {value !== undefined && value !== '' && value !== 0 && <ResetBtn onReset={() => onReset()} />}
                        </UnitsBtn>

                        <BaseControl label={label}>
                            <div className="zolo-input-range-wrapper">
                                <RangeControl
                                    value={value}
                                    onChange={(val) => onChange(val)}
                                    min={min || 0}
                                    max={unit === '%' ? 100 : max || 100}
                                    step={step || 1}
                                    withInputField={false}
                                />
                                <NumberControl value={value} onChange={(val) => onChange(val ? Number(val) : undefined)} />
                            </div>
                        </BaseControl>
                    </>
                )}
            </div>
        </div>
    );
};
export default SimpleRangeControl;
