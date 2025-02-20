/**
 * WordPress dependencies
 */
import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
const IconicBtnGroup = ({ label = '', value, onChange, options, toggle = false }) => {
    return (
        <div className="zolo-iconic-btn-group">
            {label && (
                <label htmlFor="iconic-btn-group" className="iconic-btn-label">
                    {label}
                </label>
            )}
            <ToggleGroupControl className="zb-iconic-btn-group">
                {options &&
                    options.map((option, index) => {
                        const isActive = value == option.value;
                        return (
                            <ToggleGroupControlOption
                                onClick={() => {
                                    if (toggle) {
                                        onChange(isActive ? null : option.value);
                                    } else {
                                        onChange(option.value);
                                    }
                                }}
                                className={`iconic-btn ${isActive ? 'active' : ''}`}
                                key={index}
                                label={option.label}
                            >
                                {option.icon && option.icon !== '' ? option.icon : option.label}
                            </ToggleGroupControlOption>
                        );
                    })}
            </ToggleGroupControl>
        </div>
    );
};

export default IconicBtnGroup;
