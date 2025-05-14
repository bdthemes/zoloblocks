import { ZoloToggleGroupControl, ZoloButton } from '../core-controls';

const IconicBtnGroup = ({ label = '', value, onChange, options, toggle = false, isPro = false }) => {
    return (
        <div className="zolo-iconic-btn-group">
            {label && (
                <label htmlFor="iconic-btn-group" className="iconic-btn-label">
                    {label}
                </label>
            )}
            <ZoloToggleGroupControl className="zb-iconic-btn-group">
                {options &&
                    options.map((option, index) => {
                        const isActive = value == option.value;
                        const isProOption = option.isPro;
                        const isProDeactivated = isPro && isProOption && window.zoloSettings?.zolo_pro_status !== 'active';

                        return (
                            <ZoloButton
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
                            </ZoloButton>
                        );
                    })}
            </ZoloToggleGroupControl>
        </div>
    );
};

export default IconicBtnGroup;
