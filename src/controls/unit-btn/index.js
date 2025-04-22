import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

const UnitBtn = ({ selectedUnit, unitTypes, onClick }) => {
    return (
        <ToggleGroupControl
            // label="Units"
            value={selectedUnit}
            onChange={(value) => onClick(value)}
            className="zb-unit-control-btn-group"
            isBlock
            __nextHasNoMarginBottom
            __next40pxDefaultSize
        >
            {unitTypes.map((unit) => (
                <ToggleGroupControlOption showTooltip={true} key={unit.value} value={unit.value} label={unit.label} className="zb-unit-control-btn" />
            ))}
        </ToggleGroupControl>
    );
};

export default UnitBtn;
