import useClickOutside from './use-click-outside';

import { useState, useRef, useCallback } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ButtonGroup, Button } from '@wordpress/components';

const UnitsBtn = ({ selectedUnit = 'px', unitTypes, onClick, children }) => {
	const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
	const unitsRef = useRef();
	const closeUnits = useCallback(() => setSwitcherIsOpen(false), []);

	// const onClickHandler = (_device) => {
	// 	setAttributes({ resMode: _device });
	// 	setDevice(_device);
	// 	dispatch('core/edit-post').__experimentalSetPreviewDeviceType(_device);
	// 	setSwitcherIsOpen(() => !switcherIsOpen);
	// };

	useClickOutside(unitsRef, closeUnits);

	// const onReset = () => {
	// 	resMode == 'Desktop'
	// 		? setAttributes({
	// 				[`${controlName}ZRPAlign`]:
	// 					objAttributes[`${controlName}ZRPAlign`].default,
	// 		  })
	// 		: '';

	// 	resMode == 'Tablet'
	// 		? setAttributes({
	// 				[`TAB${controlName}ZRPAlign`]:
	// 					objAttributes[`TAB${controlName}ZRPAlign`].default,
	// 		  })
	// 		: '';

	// 	resMode == 'Mobile'
	// 		? setAttributes({
	// 				[`MOB${controlName}ZRPAlign`]:
	// 					objAttributes[`MOB${controlName}ZRPAlign`].default,
	// 		  })
	// 		: '';
	// };

	return (
		<div className={`zb-units-wrapper`}>
			{children}
			<div
				ref={unitsRef}
				className={`zb-units-switchers ${
					switcherIsOpen ? 'zb-unit-switchers-open' : ''
				} `}
				onClick={() => setSwitcherIsOpen(() => !switcherIsOpen)}
			>
				<div className="zb-units-switchers-wrap">
					{unitTypes.map((unit) => (
						<Button
							className={`zb-unit-switcher ${
								unit.value === selectedUnit && 'active'
							}`}
							onClick={() => {
								onClick(unit.value);
								setSwitcherIsOpen(false);
							}}
						>
							{unit.label}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default UnitsBtn;
