/**
 * WordPress dependencies
 */
import { Button, __experimentalToggleGroupControl as ToggleGroupControl } from '@wordpress/components';

const IconicBtnGroup = ({ label = '', value, onChange, options }) => {
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
                        return (
                            <Button
                                onClick={() => onChange(value === option.value ? '' : option.value)}
                                className={`iconic-btn ${value === option.value ? 'active' : ''}`}
                                key={index}
                                title={option.label}
                            >
                                {option.icon && option.icon !== '' ? option.icon : option.label}
                            </Button>
                        );
                    })}
            </ToggleGroupControl>
        </div>
    );
};

export default IconicBtnGroup;
