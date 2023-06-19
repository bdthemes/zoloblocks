import {
	BaseControl,
	Button,
	Dropdown,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ColorControl from '../color-control';
import ResetControl from '../reset-control';

function BoxShadowControl({ controlName, resRequiredProps, enableTransition }) {
	const { setAttributes, attributes, objAttributes } = resRequiredProps;

	const {
		[`${controlName}inset`]: inset,
		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset,
		[`${controlName}vOffset`]: vOffset,
		[`${controlName}blur`]: blur,
		[`${controlName}spread`]: spread,
		[`${controlName}shadowTransition`]: shadowTransition,
	} = attributes;

	return (
		<BaseControl
			label={__('Box Shadow', 'zolo-blocks')}
			className="zb-boxshadow-control-wrap"
		>
			<Dropdown
				className="zb-boxshadow-control-dropdown"
				contentClassName="zb-popover-content-area"
				position="bottom right"
				renderToggle={({ isOpen, onToggle }) => (
					<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
						<span className="dashicons dashicons-edit"></span>
					</Button>
				)}
				renderContent={() => (
					<>
						<div
							className="zb-boxshadow-content-wrap"
							style={{
								minWidth: '230px',
								padding: '10px',
							}}
						>
							<ToggleControl
								label={__('Inset', 'zolo-blocks')}
								checked={inset}
								onChange={() =>
									setAttributes({
										[`${controlName}inset`]: !inset,
									})
								}
							/>
							<ColorControl
								defaultColor={
									(
										objAttributes[
											`${controlName}shadowColor`
										] || {}
									).default
								}
								label={__('Shadow Color', 'zolo-blocks')}
								color={shadowColor}
								onChange={(shadowColor) =>
									setAttributes({
										[`${controlName}shadowColor`]:
											shadowColor,
									})
								}
							/>

							<ResetControl
								onReset={() =>
									setAttributes({
										[`${controlName}hOffset`]: undefined,
									})
								}
							>
								<RangeControl
									label={__(
										'Horizontal Offset',
										'zolo-blocks'
									)}
									value={hOffset}
									onChange={(hOffset) =>
										setAttributes({
											[`${controlName}hOffset`]: hOffset,
										})
									}
									min={0}
									max={200}
								/>
							</ResetControl>

							<ResetControl
								onReset={() =>
									setAttributes({
										[`${controlName}vOffset`]: undefined,
									})
								}
							>
								<RangeControl
									label={__('Vertical Offset', 'zolo-blocks')}
									value={vOffset}
									onChange={(vOffset) =>
										setAttributes({
											[`${controlName}vOffset`]: vOffset,
										})
									}
									min={0}
									max={200}
								/>
							</ResetControl>

							<ResetControl
								onReset={() =>
									setAttributes({
										[`${controlName}blur`]: undefined,
									})
								}
							>
								<RangeControl
									label={__('Shadow Blur', 'zolo-blocks')}
									value={blur}
									onChange={(blur) =>
										setAttributes({
											[`${controlName}blur`]: blur,
										})
									}
									min={0}
									max={200}
								/>
							</ResetControl>

							<ResetControl
								onReset={() =>
									setAttributes({
										[`${controlName}spread`]: undefined,
									})
								}
							>
								<RangeControl
									label={__('Shadow Spread', 'zolo-blocks')}
									value={spread}
									onChange={(spread) =>
										setAttributes({
											[`${controlName}spread`]: spread,
										})
									}
									min={0}
									max={200}
								/>
							</ResetControl>
							{enableTransition && (
								<RangeControl
									label={__(
										'Shadow Transition',
										'zolo-blocks'
									)}
									value={shadowTransition}
									onChange={(shadowTransition) =>
										setAttributes({
											[`${controlName}shadowTransition`]:
												shadowTransition,
										})
									}
									step={0.01}
									min={0}
									max={5}
								/>
							)}
						</div>
					</>
				)}
			/>
		</BaseControl>
	);
}

export default BoxShadowControl;
