import { ZoloToggleGroupControl, ZoloToggleGroupControlOption } from '../core-controls';

const UnitBtn = ({ selectedUnit, unitTypes, onClick }) => {
    return (
        <ZoloToggleGroupControl
            // label="Units"
            value={selectedUnit}
            onChange={(value) => onClick(value)}
            className="zb-unit-control-btn-group"
            isBlock
            __nextHasNoMarginBottom
            __next40pxDefaultSize
        >
            {unitTypes.map((unit) => (
                <ZoloToggleGroupControlOption
                    showTooltip={true}
                    key={unit.value}
                    value={unit.value}
                    label={unit.label}
                    className="zb-unit-control-btn"
                />
            ))}
        </ZoloToggleGroupControl>
    );
};

export default UnitBtn;
