import { RangeControl } from '@wordpress/components';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';

const RangeResetControl = ({ label, controlName, min, max, step, help, requiredProps }) => {
    const dataAttributes = { min, max, step, help };
    const { attributes, setAttributes, objAttributes } = requiredProps;
    const { [controlName]: controlVal } = attributes;

    return (
        <div className="zb-res-range-control-wrapper">
            {controlVal !== 0 && controlVal && (
                <div className="zb-units-wrapper">
                    <ResetBtn
                        onReset={() => {
                            setAttributes({
                                [controlName]: '',
                            });
                        }}
                    />
                </div>
            )}
            <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true} noResponsive={true}>
                <RangeControl
                    value={controlVal}
                    onChange={(val) => setAttributes({ [controlName]: val })}
                    {...dataAttributes}
                    min={min || 0}
                    max={max || 100}
                    step={step || 1}
                />
            </WithResDeviceBtn>
        </div>
    );
};

export default RangeResetControl;
