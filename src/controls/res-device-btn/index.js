import { useCallback, useRef, useState } from '@wordpress/hooks';
import { __ } from "@wordpress/i18n";
import '../scss/componets/_resdevice-btn.scss';
import useClickOutside from "./use-click-outside";

import {
  onDesktopBtnClick,
  onMobileBtnClick,
  onTabletBtnClick
} from '../../helpers/preview-btns-helper';

const ResDeviceBtn = ({
  label,
  resRequiredProps,
  children,
  className,
}) => {
  const { resMode, setAttributes } = resRequiredProps;
  const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
  const devicesRef = useRef();
  const closeDevices = useCallback(() => setSwitcherIsOpen(false), []);


  const onClickHandler = () => {
    if (resMode === 'Desktop') {
      onDesktopBtnClick({ setAttributes })
    } else if (resMode === 'Tablet') {
      onTabletBtnClick({ setAttributes })
    } else {
      onMobileBtnClick({ setAttributes })
    }
    setSwitcherIsOpen(() => !switcherIsOpen)
  }
  useClickOutside(devicesRef, closeDevices);

  return (
    <div ref={devicesRef} className={`zb-device-switchers active-${device}${switcherIsOpen ? ' zb-device-switchers-open' : ''} `}
      onClick={() => setSwitcherIsOpen(() => !switcherIsOpen)}>

      {label && (<span className="res-btn-label">{label}</span>)}

      <div className="zb-device-switchers-wrap">
        <a className={`zb-device-switcher zb-device-switcher-desktop ${resMode === 'Desktop' ? 'active' : ''}`}
          onClick={() => onClickHandler()} data-tooltip={__('Desktop')}>
          <i className="dashicons dashicons-desktop" />
        </a>
        <a className={`zb-device-switcher zb-device-switcher-laptop ${resMode === 'Tablet' ? 'active' : ''}`}
          onClick={() => onClickHandler()} data-tooltip={__('Tablet')}>
          <i className="dashicons dashicons-tablet" />
        </a>
        <a className={`zb-device-switcher zb-device-switcher-tablet ${resMode === 'Mobile' ? 'active' : ' '}`}
          onClick={() => onClickHandler()} data-tooltip={__('Mobile')}>
          <i className="dashicons dashicons-smartphone" />
        </a>
      </div>

      {children}

    </div>
  )
}

export default ResDeviceBtn;
