import { ZoloToggleGroupControl, ZoloToggleGroupControlOption } from '../core-controls';

const ZoloChoose = ({ label, value, onChange, options, ...props }) => {
    return (
        <div className="zolo-toggle-group-control">
            <ZoloToggleGroupControl
                label={label || ''}
                value={value}
                onChange={onChange}
                isBlock
                {...props}
            >
                {options?.map((element, index) => (
                    <ZoloToggleGroupControlOption
                        key={element.value || index}
                        value={element.value}
                        label={element?.icon || element.label}
                        aria-label={element.label}
                        showTooltip
                    />
                ))}
            </ZoloToggleGroupControl>
        </div>
    );
};

export default ZoloChoose;
