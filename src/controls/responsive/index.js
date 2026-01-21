import { __ } from '@wordpress/i18n';
import { DropdownMenu } from '@wordpress/components';
import { memo, useEffect, useRef } from '@wordpress/element';
import { setDeviceType } from './set-device-type';
import deviceList from './device-list';

const ZoloResponsive = ({ children, left }) => {
    const { useDeviceType } = window.zoloModule;
    const deviceType = useDeviceType();
    const deviceIcon = deviceList.find((device) => device.slug === deviceType)?.icon;
    const menuRef = useRef(null);

    useEffect(() => {
        if (left) return;
        if (menuRef.current) {
            const element = menuRef.current.nextSibling;
            const controlLabel = element.querySelector('.components-base-control__label');
            if (controlLabel) {
                const labelWidth = controlLabel.offsetWidth;
                menuRef.current.style.setProperty('--from-left', `${labelWidth + 5}px`);
            }
        }
    }, [left]);

    return (
        <div className='zolo-responsive-dropdown'>
            <div ref={menuRef} className='zolo-responsive-dropdown-menu' style={{ '--from-left': left }}>
                <DropdownMenu
                    icon={deviceIcon}
                    label={__("Select a device", "zoloblocks")}
                    popoverProps={{ className: 'zolo-responsive-dropdown-popover' }}
                    controls={
                        deviceList.map((device) => {
                            return {
                                icon: device.icon,
                                onClick: () => {
                                    setDeviceType(device.slug);
                                }
                            }
                        })
                    }
                >
                </DropdownMenu>
            </div>
            {children}
        </div>
    )
}

export default memo(ZoloResponsive);