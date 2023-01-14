import {
	BaseControl,
	Button,
	Dropdown
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';


const TypographyDropdown = ({
	label,
	typoPrefixConstant,
	resRequiredProps,
	defaultFontSize,
}) => {
	const { attributes, setAttributes, resOption, objAttributes } =
		resRequiredProps;

	return (
		<BaseControl label={__(baseLabel)} className="zb-typography-base">
			<Dropdown
				className="zb-typography-dropdown"
				contentClassName="my-popover-content-classname"
				position="bottom right"
				renderToggle={({ isOpen, onToggle }) => (
					<Button isSmall onClick={onToggle} aria-expanded={isOpen}>
						<span className="dashicons dashicons-edit"></span>
					</Button>
				)}
				renderContent={() => (
					<div className="zb-panel-control zb-typography-component-panel">
						<h1>Hello Typography</h1>
					</div>
				)}
			/>
		</BaseControl>
	);
};
export default TypographyDropdown;
