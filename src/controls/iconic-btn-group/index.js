/**
 * WordPress dependencies
 */
import { __experimentalToggleGroupControl as ToggleGroupControl, Button } from '@wordpress/components';

const IconicBtnGroup = ({ label = '', value, onChange, options, toggle = false, isPro = false }) => {
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
                        const isProOption = option.isPro;
                        const isProDeactivated = isPro && isProOption && !window.zoloSettings?.zolo_pro_status;

                        return (
                            <Button
                                onClick={() => {
                                    if (!isProDeactivated) {
                                        if (toggle) {
                                            onChange(isActive ? null : option.value);
                                        } else {
                                            onChange(option.value);
                                        }
                                    }
                                }}
                                disabled={isProDeactivated}
                                title={isProDeactivated ? 'Available in Pro' : ''}
                                className={`iconic-btn ${isActive ? 'active' : ''} ${isProDeactivated ? 'zolo-control-item-disabled' : ''}`}
                                key={index}
                                label={option.label}
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
