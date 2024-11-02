import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

const ToggleGroup = ({ label, value, onChange, options, ...props }) => {
    return (
        <div className="zolo-toggle-group-control">
            <ToggleGroupControl
                label={label || ''}
                value={value}
                onChange={onChange}
                isBlock
                {...props}
            >
                {
                    options && options.map((element, index) => (
                        <ToggleGroupControlOption
                            key={index}
                            value={element.value}
                            label={element?.icon ? element?.icon : element.label}
                            aria-label={element.label}
                            showTooltip
                        />
                    ))
                }
            </ToggleGroupControl>
        </div>
    );
};

export default ToggleGroup;
