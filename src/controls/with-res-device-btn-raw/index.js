import useClickOutside from './use-click-outside';
import { useState, useRef, useCallback } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { store as editorStore } from '@wordpress/block-editor';
import classNames from 'classnames';

const WithResDeviceBtnRaw = ({ label, children }) => {
    const { defaultDeviceList, useDeviceType } = window.zoloModule;
    const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
    const { setDeviceType } = dispatch(editorStore);
    const closeDevices = useCallback(() => setSwitcherIsOpen(false), []);
    const devicesRef = useRef();
    const deviceType = useDeviceType();
    useClickOutside(devicesRef, closeDevices);

    const onClickHandler = (device) => {
        setDeviceType(device);
    };

    return (
        <div className="zb-deive-wrapper">
            <div className="zb-label-header">
                <div className="zb-device-label-area">
                    {label && <span className="res-btn-label">{label}</span>}
                    <div
                        ref={devicesRef}
                        className={classNames('zb-device-switchers', `active-${deviceType}`, {
                            'zb-device-switchers-open': switcherIsOpen,
                        })}
                        onClick={() => setSwitcherIsOpen(() => !switcherIsOpen)}
                    >
                        <div className="zb-device-switchers-wrap">
                            {defaultDeviceList.map((device, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={classNames('zb-device-switcher', `zb-device-switcher-${device?.identifier}`, {
                                            active: device.slug === deviceType,
                                        })}
                                        onClick={() => onClickHandler(device?.slug)}
                                        data-tooltip={device?.label}
                                    >
                                        {device?.icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default WithResDeviceBtnRaw;
