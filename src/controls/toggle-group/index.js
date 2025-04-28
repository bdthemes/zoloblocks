import { ZoloToggleGroupControl, ZoloToggleGroupControlOption } from '../core-controls';

const ToggleGroup = ({ label, value, onChange, options, ...props }) => {
    return (
        <div className="zolo-toggle-group-control">
            <ZoloToggleGroupControl label={label || ''} value={value} onChange={onChange} isBlock {...props}>
                {options &&
                    options.map((element, index) => (
                        <ZoloToggleGroupControlOption
                            key={index}
                            value={element.value}
                            label={element?.icon ? element?.icon : element.label}
                            aria-label={element.label}
                            showTooltip
                        />
                    ))}
            </ZoloToggleGroupControl>
        </div>
    );
};

export default ToggleGroup;
