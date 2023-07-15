import useClickOutside from './use-click-outside';

import { useState, useRef, useCallback } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const WithResDeviceBtn = ({
	label,
	resRequiredProps,
	children,
	controlName,
	noResetBtn = false,
	noResponsive = false,
}) => {
	const { resMode, objAttributes, setAttributes } = resRequiredProps;
	const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
	const [device, setDevice] = useState(() => resMode || 'Desktop');
	const devicesRef = useRef();
	const closeDevices = useCallback(() => setSwitcherIsOpen(false), []);

	const onClickHandler = (_device) => {
		setAttributes({ resMode: _device });
		setDevice(_device);
		dispatch('core/edit-post').__experimentalSetPreviewDeviceType(_device);
		setSwitcherIsOpen(() => !switcherIsOpen);
	};

	useClickOutside(devicesRef, closeDevices);

	const onReset = () => {
		resMode == 'Desktop'
			? setAttributes({
					[`${controlName}ZRPAlign`]:
						objAttributes[`${controlName}ZRPAlign`].default,
			  })
			: '';

		resMode == 'Tablet'
			? setAttributes({
					[`TAB${controlName}ZRPAlign`]:
						objAttributes[`TAB${controlName}ZRPAlign`].default,
			  })
			: '';

		resMode == 'Mobile'
			? setAttributes({
					[`MOB${controlName}ZRPAlign`]:
						objAttributes[`MOB${controlName}ZRPAlign`].default,
			  })
			: '';
	};

	return (
		<div className={`zb-deive-wrapper`}>
			<div className="zb-label-header">
				<div className="zb-device-label-area">
					{label && <span className="res-btn-label">{label}</span>}
					{!noResponsive && (
						<div
							ref={devicesRef}
							className={`zb-device-switchers active-${device} ${
								switcherIsOpen ? 'zb-device-switchers-open' : ''
							} `}
							onClick={() =>
								setSwitcherIsOpen(() => !switcherIsOpen)
							}
						>
							<div className="zb-device-switchers-wrap">
								<a
									className={`zb-device-switcher zb-device-switcher-desktop ${
										device === 'Desktop' ? 'active' : ''
									}`}
									onClick={() => onClickHandler('Desktop')}
									data-tooltip={__('Desktop')}
								>
									<i className="dashicons dashicons-desktop" />
								</a>
								<a
									className={`zb-device-switcher zb-device-switcher-laptop ${
										device === 'Tablet' ? 'active' : ''
									}`}
									onClick={() => onClickHandler('Tablet')}
									data-tooltip={__('Tablet')}
								>
									<i className="dashicons dashicons-tablet" />
								</a>
								<a
									className={`zb-device-switcher zb-device-switcher-tablet ${
										device === 'Mobile' ? 'active' : ' '
									}`}
									onClick={() => onClickHandler('Mobile')}
									data-tooltip={__('Mobile')}
								>
									<i className="dashicons dashicons-smartphone" />
								</a>
							</div>
						</div>
					)}
				</div>
				{!noResetBtn && (
					<div className="zb-reset-btn">
						<button className="zb-reset-button" onClick={onReset}>
							<svg
								id="Layer_1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100"
							>
								<rect
									width="100"
									height="100"
									style={{
										fill: 'none',
									}}
								/>
								<path
									d="M48.76,18.1a35.73,35.73,0,0,0-23.23,8.61V15.48a5,5,0,1,0-10,0V40.82a5,5,0,0,0,5,5h24a5,5,0,0,0,0-10H30.39a25.7,25.7,0,1,1-4.11,30.49,5,5,0,1,0-8.74,4.86A35.72,35.72,0,1,0,48.76,18.1Z"
									style={{
										fill: '#39394d',
									}}
								/>
							</svg>
						</button>
					</div>
				)}
			</div>

			{children}
		</div>
	);
};

export default WithResDeviceBtn;
