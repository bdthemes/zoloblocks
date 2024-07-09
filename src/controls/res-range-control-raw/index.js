import { RangeControl, Button } from '@wordpress/components';
import { select } from '@wordpress/data';

import WithResDeviceBtnRaw from '../with-res-device-btn-raw';
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';

const ResRangeControlRaw = ({
    label,
    deskVal,
    tabVal,
    mobVal,
    onDeskChange,
    onTabChange,
    onMobChange,
    onDeskUnitChange,
    onTabUnitChange,
    onMobUnitChange,
    onReset,
    hasDeskVal = false,
    hasTabVal = false,
    hasMobVal = false,
    deskUnit,
    tabUnit,
    mobUnit,
}) => {
    // get current deviceType
    let resMode = select('core/editor').getDeviceType();

    const UNITS = [
        { label: 'px', value: 'px' },
        { label: 'vw', value: 'vw' },
    ];

    return (
        <div className="zb-res-range-control-wrapper">
            {resMode == 'Desktop' && (
                <>
                    <UnitsBtn selectedUnit={deskUnit} unitTypes={UNITS} onClick={(v) => onDeskUnitChange(v)}>
                        {hasDeskVal && <ResetBtn onReset={onReset} />}
                    </UnitsBtn>

                    <WithResDeviceBtnRaw label={label}>
                        <RangeControl
                            value={deskVal}
                            onChange={(val) => onDeskChange(val)}
                            min={50}
                            max={deskUnit === '%' ? 100 : 1600}
                            step={1}
                        />
                    </WithResDeviceBtnRaw>
                </>
            )}

            {resMode == 'Tablet' && (
                <>
                    <UnitsBtn selectedUnit={tabUnit} unitTypes={UNITS} onClick={(v) => onTabUnitChange(v)}>
                        {hasTabVal && <ResetBtn onReset={onReset} />}
                    </UnitsBtn>
                    <WithResDeviceBtnRaw label={label}>
                        <RangeControl
                            value={tabVal}
                            onChange={(val) => onTabChange(val)}
                            min={50}
                            max={tabUnit === '%' ? 100 : 1600}
                            step={1}
                        />
                    </WithResDeviceBtnRaw>
                </>
            )}

            {resMode == 'Mobile' && (
                <>
                    <UnitsBtn selectedUnit={mobUnit} unitTypes={UNITS} onClick={(v) => onMobUnitChange(v)}>
                        {hasMobVal && <ResetBtn onReset={onReset} />}
                    </UnitsBtn>
                    <WithResDeviceBtnRaw label={label}>
                        <RangeControl
                            value={mobVal}
                            onChange={(val) => onMobChange(val)}
                            min={50}
                            max={tabUnit === '%' ? 100 : 1600}
                            step={1}
                        />
                    </WithResDeviceBtnRaw>
                </>
            )}
        </div>
    );
};
export default ResRangeControlRaw;
