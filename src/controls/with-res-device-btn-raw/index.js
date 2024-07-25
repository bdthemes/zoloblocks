import useClickOutside from './use-click-outside';
import { useEntityProp } from '@wordpress/core-data';
import { useState, useRef, useCallback } from '@wordpress/element';
import { dispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const WithResDeviceBtnRaw = ({ label, children }) => {
    const resMode = select('core/editor').getDeviceType();

    const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
    const [device, setDevice] = useState(() => resMode || 'Desktop');
    const devicesRef = useRef();
    const closeDevices = useCallback(() => setSwitcherIsOpen(false), []);

    const [meta, setMeta] = useEntityProp('postType', 'zolo-popup', 'meta');

    const onClickHandler = (_device) => {
        dispatch('core/editor').setDeviceType(_device);
        setDevice(_device);
        setSwitcherIsOpen(() => !switcherIsOpen);

        // update : zolo_popup_resMode meta
        setMeta({ ...meta, zolo_popup_resMode: _device });
    };

    useClickOutside(devicesRef, closeDevices);

    return (
        <div className={`zb-deive-wrapper`}>
            <div className="zb-label-header">
                <div className="zb-device-label-area">
                    {label && <span className="res-btn-label">{label}</span>}
                    <div
                        ref={devicesRef}
                        className={`zb-device-switchers active-${device} ${switcherIsOpen ? 'zb-device-switchers-open' : ''} `}
                        onClick={() => setSwitcherIsOpen(() => !switcherIsOpen)}
                    >
                        <div className="zb-device-switchers-wrap">
                            <button
                                className={`zb-device-switcher zb-device-switcher-desktop ${device === 'Desktop' ? 'active' : ''}`}
                                onClick={() => onClickHandler('Desktop')}
                                data-tooltip={__('Desktop')}
                            >
                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.64645 7.35355C4.84171 7.15829 5.15829 7.15829 5.35355 7.35355L7.14645 9.14645C7.46143 9.46143 7.23835 10 6.79289 10H3.20711C2.76165 10 2.53857 9.46143 2.85355 9.14645L4.64645 7.35355Z"
                                        fill="#1E1E1E"
                                    />
                                    <rect x="0.5" y="1.5" width={9} height={6} rx={1} stroke="#1E1E1E" />
                                </svg>
                            </button>
                            <button
                                className={`zb-device-switcher zb-device-switcher-laptop ${device === 'Tablet' ? 'active' : ''}`}
                                onClick={() => onClickHandler('Tablet')}
                                data-tooltip={__('Tablet')}
                            >
                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="0.5" width={7} height={9} rx={1} stroke="#1E1E1E" />
                                    <circle cx={5} cy={8} r={1} fill="#1E1E1E" />
                                </svg>
                            </button>
                            <button
                                className={`zb-device-switcher zb-device-switcher-tablet ${device === 'Mobile' ? 'active' : ' '}`}
                                onClick={() => onClickHandler('Mobile')}
                                data-tooltip={__('Mobile')}
                            >
                                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5" y="0.5" width={5} height={9} rx={1} stroke="#1E1E1E" />
                                    <path
                                        d="M7 1.08412C6.9572 1.59704 6.52662 2 6.00175 2H3.99825C3.47338 2 3.0428 1.59704 3 1.08412C3.15567 1.02963 3.32306 1 3.49738 1H6.50262C6.67694 1 6.84433 1.02963 7 1.08412Z"
                                        fill="#1E1E1E"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
};

export default WithResDeviceBtnRaw;
