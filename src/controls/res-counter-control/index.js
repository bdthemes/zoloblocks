import { Button, __experimentalInputControl as InputControl } from '@wordpress/components';
import WithResDeviceBtn from '../with-res-device-btn';
import ResetBtn from '../reset-btn';
import { prefix } from '../../global/constants';
import { __ } from '@wordpress/i18n';

const ResCounterControl = ({ label, controlName, requiredProps, min, max, step, defaults = {}, noteText="" }) => {
    const { attributes, setAttributes, resMode } = requiredProps;
    const {
        [`${prefix}${controlName}Range`]: desktopRange = defaults.deskRange || 3,
        [`${prefix}TAB${controlName}Range`]: tabRange = defaults.tabRange || 2,
        [`${prefix}MOB${controlName}Range`]: mobRange = defaults.mobRange || 1,
    } = attributes;

    return (
        <div className="zb-res-range-control-wrapper">
            <div className="zb-units-wrapper">
                <ResetBtn
                    onReset={() => {
                        setAttributes({
                            [`${prefix}${controlName}Range`]: defaults.deskRange || 3,
                            [`${prefix}TAB${controlName}Range`]: defaults.tabRange || 2,
                            [`${prefix}MOB${controlName}Range`]: defaults.mobRange || 1,
                        });
                    }}
                />
            </div>
            {resMode == 'Desktop' && (
                <>
                    <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                        <div className="zb-counter-control">
                            <div className="zb-counter-flex">
                                <Button
                                    className="zb-counter-control-btn"
                                    onClick={() =>
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: desktopRange - 1,
                                        })
                                    }
                                    disabled={desktopRange <= min}
                                >
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Button>
                                <InputControl
                                    type="number"
                                    value={desktopRange}
                                    onChange={(val) => {
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: parseInt(val),
                                        });
                                    }}
                                    min={min || 1}
                                    max={max || 5}
                                    step={step || 1}
                                    disabled={desktopRange >= max}
                                />
                                <Button
                                    className="zb-counter-control-btn"
                                    onClick={() =>
                                        setAttributes({
                                            [`${prefix}${controlName}Range`]: desktopRange + 1,
                                        })
                                    }
                                    disabled={desktopRange >= max}
                                >
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Button>
                            </div>
                            <p className="zb-counter-note">
                                <strong>{__('Note: ', 'zoloblocks')}</strong>
                                {noteText || __('maximum', 'zoloblocks') + max + ' ' + __('minimum') + min}
                            </p>
                        </div>
                    </WithResDeviceBtn>
                </>
            )}

            {resMode == 'Tablet' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
                    <div className="zb-counter-control">
                        <div className="zb-counter-flex">
                            <Button
                                className="zb-counter-control-btn"
                                onClick={() =>
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Range`]: tabRange - 1,
                                    })
                                }
                                disabled={tabRange <= min}
                            >
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Button>
                            <InputControl
                                type="number"
                                value={tabRange}
                                onChange={(val) => {
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Range`]: parseInt(val),
                                    });
                                }}
                                min={min || 1}
                                max={max || 5}
                                step={step || 1}
                                disabled={tabRange >= max}
                            />
                            <Button
                                className="zb-counter-control-btn"
                                onClick={() =>
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Range`]: tabRange + 1,
                                    })
                                }
                                disabled={tabRange >= max}
                            >
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Button>
                        </div>
                        <p className="zb-counter-note">
                            <strong>{__('Note: ', 'zoloblock')}</strong>
                            {noteText || __('maximum', 'zoloblock') + max + ' ' + __('minimum') + min}
                        </p>
                    </div>
                </WithResDeviceBtn>
            )}

            {resMode == 'Mobile' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName}>
                    <div className="zb-counter-control">
                        <div className="zb-counter-flex">
                            <Button
                                className="zb-counter-control-btn"
                                onClick={() =>
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Range`]: mobRange - 1,
                                    })
                                }
                                disabled={mobRange <= min}
                            >
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Button>
                            <InputControl
                                type="number"
                                value={mobRange}
                                onChange={(val) => {
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Range`]: parseInt(val),
                                    });
                                }}
                                min={min || 1}
                                max={max || 5}
                                step={step || 1}
                                disabled={mobRange >= max}
                            />
                            <Button
                                className="zb-counter-control-btn"
                                onClick={() =>
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Range`]: mobRange + 1,
                                    })
                                }
                                disabled={mobRange >= max}
                            >
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Button>
                        </div>
                        <p className="zb-counter-note">
                            <strong>{__('Note: ', 'zoloblock')}</strong>
                            {noteText || __('maximum', 'zoloblock') + max + ' ' + __('minimum') + min}
                        </p>
                    </div>
                </WithResDeviceBtn>
            )}
        </div>
    );
};
export default ResCounterControl;
