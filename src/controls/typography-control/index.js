//wordpress dependencies
import {
	BaseControl,
	Button,
	Dropdown,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

//internal dependencies control
import ResetControl from '../reset-control';
import UnitBtn from '../unit-btn';
import UnitsBtn from '../units-btn';
import ResetBtn from '../reset-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import FontPicker from './fontPicker';

//block constant
import {
	fontStyleOptions,
	fontWeightOptions,
	LHLS_UNITS,
	sizeUnitTypes,
	textDecorationOptions,
	textTransformOptions,
} from './constant';

//googlefonts
import { googleFonts } from './fontPicker/googleFonts';

const TypographyDropdown = ({
	label,
	typoPrefixConstant,
	resRequiredProps,
	defaultFontSize,
}) => {
	const { attributes, setAttributes, resMode, objAttributes } =
		resRequiredProps;

	const {
		[`${typoPrefixConstant}ZRPFontFamily`]: fontFamily,
		[`${typoPrefixConstant}ZRPFontWeight`]: fontWeight,
		[`${typoPrefixConstant}ZRPFontStyle`]: fontStyle,
		[`${typoPrefixConstant}ZRPTextTransform`]: textTransform,
		[`${typoPrefixConstant}ZRPTextDecoration`]: textDecoration,
		[`${typoPrefixConstant}ZRPFontSize`]: fontSize = defaultFontSize ||
			undefined,
		[`${typoPrefixConstant}ZRPSizeUnit`]: sizeUnit,
		[`${typoPrefixConstant}ZRPLetterSpacing`]: letterSpacing,
		[`${typoPrefixConstant}ZRPLetterSpacingUnit`]: letterSpacingUnit,
		[`${typoPrefixConstant}ZRPLineHeight`]: lineHeight,
		[`${typoPrefixConstant}ZRPLineHeightUnit`]: lineHeightUnit,

		[`TAB${typoPrefixConstant}ZRPSizeUnit`]: TABsizeUnit,
		[`TAB${typoPrefixConstant}ZRPLetterSpacingUnit`]: TABletterSpacingUnit,
		[`TAB${typoPrefixConstant}ZRPLineHeightUnit`]: TABlineHeightUnit,
		[`TAB${typoPrefixConstant}ZRPFontSize`]: TABfontSize,
		[`TAB${typoPrefixConstant}ZRPLetterSpacing`]: TABletterSpacing,
		[`TAB${typoPrefixConstant}ZRPLineHeight`]: TABlineHeight,

		[`MOB${typoPrefixConstant}ZRPSizeUnit`]: MOBsizeUnit,
		[`MOB${typoPrefixConstant}ZRPLetterSpacingUnit`]: MOBletterSpacingUnit,
		[`MOB${typoPrefixConstant}ZRPLineHeightUnit`]: MOBlineHeightUnit,
		[`MOB${typoPrefixConstant}ZRPFontSize`]: MOBfontSize,
		[`MOB${typoPrefixConstant}ZRPLetterSpacing`]: MOBletterSpacing,
		[`MOB${typoPrefixConstant}ZRPLineHeight`]: MOBlineHeight,
	} = attributes;

	//Update Font Weight and Font Varient
	const [zbFontWeight, setZbFontWeight] = useState(fontWeightOptions);

	useEffect(() => {
		const fontFamilyKey = (fontFamily || '').replace(/\s+/g, '-');
		let googleFontWeight = googleFonts[fontFamilyKey]
			? googleFonts[fontFamilyKey].variants
			: [];
		let fontWeightVal = googleFontWeight.map((item) => ({
			label: item,
			value: item,
		}));
		const fontWeightwithDefault = [
			{ label: 'Default', value: '' },
			...fontWeightVal,
		];
		setZbFontWeight(fontWeightwithDefault);
	}, [fontFamily]);

	return (
		<BaseControl
			label={__(label)}
			className="zb-typography-control-wrapper"
		>
			<Dropdown
				className="zb-typography-dropdown"
				position="bottom right"
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						onClick={onToggle}
						aria-expanded={isOpen}
						className="zb-typography-dropdown-btn"
					>
						<svg
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 100"
						>
							<rect
								width={100}
								height={100}
								style={{ fill: 'none' }}
							/>
							<path
								d="M79.56,14.91H20.44a3.5,3.5,0,0,0-3.5,3.5V31.09a3.5,3.5,0,0,0,7,0V21.91H46.06V78.09H38.32a3.5,3.5,0,1,0,0,7H61.68a3.5,3.5,0,1,0,0-7H53.06V21.91h23v8.83a3.5,3.5,0,1,0,7,0V18.41A3.5,3.5,0,0,0,79.56,14.91Z"
								style={{ fill: '#39394d' }}
							/>
						</svg>
					</Button>
				)}
				renderContent={() => (
					<div className="zolo-panel-control zb-typography-component-panel">
						<FontPicker
							className="zb-fontpicker-fontfamily"
							label={__('Font Family', 'zolo-blocks')}
							value={fontFamily}
							onChange={(FontFamily) => {
								setAttributes({
									[`${typoPrefixConstant}ZRPFontFamily`]:
										FontFamily,
								});
							}}
						/>
						<div className="zb-res-range-control-wrapper">
							{resMode == 'Desktop' && (
								<>
									<UnitsBtn
										selectedUnit={sizeUnit}
										unitTypes={sizeUnitTypes}
										onClick={(sizeUnit) =>
											setAttributes({
												[`${typoPrefixConstant}ZRPSizeUnit`]:
													sizeUnit,
											})
										}
									>
										<ResetBtn
											onReset={() => {
												setAttributes({
													[`${typoPrefixConstant}ZRPFontSize`]:
														defaultFontSize ||
														(
															objAttributes[
																`${typoPrefixConstant}ZRPFontSize`
															] || {}
														).default,
												});
											}}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Font Size', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={fontSize}
											onChange={(FontSize) =>
												setAttributes({
													[`${typoPrefixConstant}ZRPFontSize`]:
														FontSize,
												})
											}
											step={sizeUnit === 'em' ? 0.1 : 1}
											min={0}
											max={sizeUnit === 'em' ? 10 : 200}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Tablet' && (
								<>
									<UnitsBtn
										selectedUnit={TABsizeUnit}
										unitTypes={sizeUnitTypes}
										onClick={(TABsizeUnit) =>
											setAttributes({
												[`TAB${typoPrefixConstant}ZRPSizeUnit`]:
													TABsizeUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPFontSize`]:
														(
															objAttributes[
																`TAB${typoPrefixConstant}ZRPFontSize`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Font Size', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={TABfontSize}
											onChange={(FontSize) =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPFontSize`]:
														FontSize,
												})
											}
											step={
												TABsizeUnit === 'em' ? 0.1 : 1
											}
											min={0}
											max={
												TABsizeUnit === 'em' ? 10 : 200
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Mobile' && (
								<>
									<UnitsBtn
										selectedUnit={MOBsizeUnit}
										unitTypes={sizeUnitTypes}
										onClick={(MOBsizeUnit) =>
											setAttributes({
												[`MOB${typoPrefixConstant}ZRPSizeUnit`]:
													MOBsizeUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPFontSize`]:
														(
															objAttributes[
																`MOB${typoPrefixConstant}ZRPFontSize`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Font Size', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={MOBfontSize}
											onChange={(FontSize) =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPFontSize`]:
														FontSize,
												})
											}
											step={
												MOBsizeUnit === 'em' ? 0.1 : 1
											}
											min={0}
											max={
												MOBsizeUnit === 'em' ? 10 : 200
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
						</div>

						<SelectControl
							label={__('Font Weight', 'zolo-blocks')}
							value={fontWeight}
							options={zbFontWeight}
							onChange={(FontWeight) =>
								setAttributes({
									[`${typoPrefixConstant}ZRPFontWeight`]:
										FontWeight,
								})
							}
						/>

						<SelectControl
							label={__('Font Style', 'zolo-blocks')}
							value={fontStyle}
							options={fontStyleOptions}
							onChange={(fontStyle) =>
								setAttributes({
									[`${typoPrefixConstant}ZRPFontStyle`]:
										fontStyle,
								})
							}
						/>

						<SelectControl
							label={__('Text Transform', 'zolo-blocks')}
							value={textTransform}
							options={textTransformOptions}
							onChange={(TextTransform) =>
								setAttributes({
									[`${typoPrefixConstant}ZRPTextTransform`]:
										TextTransform,
								})
							}
						/>

						<SelectControl
							label={__('Text Decoration', 'zolo-blocks')}
							value={textDecoration}
							options={textDecorationOptions}
							onChange={(TextDecoration) =>
								setAttributes({
									[`${typoPrefixConstant}ZRPTextDecoration`]:
										TextDecoration,
								})
							}
						/>
						<div className="zb-res-range-control-wrapper">
							{resMode == 'Desktop' && (
								<>
									<UnitsBtn
										selectedUnit={letterSpacingUnit}
										unitTypes={LHLS_UNITS}
										onClick={(LetterSpacingUnit) =>
											setAttributes({
												[`${typoPrefixConstant}ZRPLetterSpacingUnit`]:
													LetterSpacingUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`${typoPrefixConstant}ZRPLetterSpacing`]:
														(
															objAttributes[
																`${typoPrefixConstant}ZRPLetterSpacing`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__(
											'Letter Spacing',
											'zolo-blocks'
										)}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={letterSpacing}
											onChange={(LetterSpacing) =>
												setAttributes({
													[`${typoPrefixConstant}ZRPLetterSpacing`]:
														LetterSpacing,
												})
											}
											min={0}
											max={
												letterSpacingUnit === 'em'
													? 10
													: 100
											}
											step={
												letterSpacingUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Tablet' && (
								<>
									<UnitsBtn
										selectedUnit={TABletterSpacingUnit}
										unitTypes={LHLS_UNITS}
										onClick={(TABletterSpacingUnit) =>
											setAttributes({
												[`TAB${typoPrefixConstant}ZRPLetterSpacingUnit`]:
													TABletterSpacingUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPLetterSpacing`]:
														(
															objAttributes[
																`TAB${typoPrefixConstant}ZRPLetterSpacing`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__(
											'Letter Spacing',
											'zolo-blocks'
										)}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={TABletterSpacing}
											onChange={(LetterSpacing) =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPLetterSpacing`]:
														LetterSpacing,
												})
											}
											min={0}
											max={
												TABletterSpacingUnit === 'em'
													? 10
													: 100
											}
											step={
												TABletterSpacingUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Mobile' && (
								<>
									<UnitsBtn
										selectedUnit={MOBletterSpacingUnit}
										unitTypes={LHLS_UNITS}
										onClick={(MOBletterSpacingUnit) =>
											setAttributes({
												[`MOB${typoPrefixConstant}ZRPLetterSpacingUnit`]:
													MOBletterSpacingUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPLetterSpacing`]:
														(
															objAttributes[
																`MOB${typoPrefixConstant}ZRPLetterSpacing`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__(
											'Letter Spacing',
											'zolo-blocks'
										)}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={MOBletterSpacing}
											onChange={(LetterSpacing) =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPLetterSpacing`]:
														LetterSpacing,
												})
											}
											min={0}
											max={
												MOBletterSpacingUnit === 'em'
													? 10
													: 100
											}
											step={
												MOBletterSpacingUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
						</div>
						<div className="zb-res-range-control-wrapper">
							{resMode == 'Desktop' && (
								<>
									<UnitsBtn
										selectedUnit={lineHeightUnit}
										unitTypes={LHLS_UNITS}
										onClick={(LineHeightUnit) =>
											setAttributes({
												[`${typoPrefixConstant}ZRPLineHeightUnit`]:
													LineHeightUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`${typoPrefixConstant}ZRPLineHeight`]:
														(
															objAttributes[
																`${typoPrefixConstant}ZRPLineHeight`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Line Height', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={lineHeight}
											onChange={(LineHeight) =>
												setAttributes({
													[`${typoPrefixConstant}ZRPLineHeight`]:
														LineHeight,
												})
											}
											min={0}
											max={
												lineHeightUnit === 'em'
													? 10
													: 600
											}
											step={
												lineHeightUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Tablet' && (
								<>
									<UnitsBtn
										selectedUnit={TABlineHeightUnit}
										unitTypes={LHLS_UNITS}
										onClick={(TABlineHeightUnit) =>
											setAttributes({
												[`TAB${typoPrefixConstant}ZRPLineHeightUnit`]:
													TABlineHeightUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPLineHeight`]:
														(
															objAttributes[
																`TAB${typoPrefixConstant}ZRPLineHeight`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Line Height', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={TABlineHeight}
											onChange={(LineHeight) =>
												setAttributes({
													[`TAB${typoPrefixConstant}ZRPLineHeight`]:
														LineHeight,
												})
											}
											min={0}
											max={
												TABlineHeightUnit === 'em'
													? 10
													: 600
											}
											step={
												TABlineHeightUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
							{resMode == 'Mobile' && (
								<>
									<UnitsBtn
										selectedUnit={MOBlineHeightUnit}
										unitTypes={LHLS_UNITS}
										onClick={(MOBlineHeightUnit) =>
											setAttributes({
												[`MOB${typoPrefixConstant}ZRPLineHeightUnit`]:
													MOBlineHeightUnit,
											})
										}
									>
										<ResetBtn
											onReset={() =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPLineHeight`]:
														(
															objAttributes[
																`MOB${typoPrefixConstant}ZRPLineHeight`
															] || {}
														).default,
												})
											}
										/>
									</UnitsBtn>

									<WithResDeviceBtn
										label={__('Line Height', 'zolo-blocks')}
										resRequiredProps={resRequiredProps}
										noResetBtn={true}
									>
										<RangeControl
											value={MOBlineHeight}
											onChange={(LineHeight) =>
												setAttributes({
													[`MOB${typoPrefixConstant}ZRPLineHeight`]:
														LineHeight,
												})
											}
											min={0}
											max={
												MOBlineHeightUnit === 'em'
													? 10
													: 600
											}
											step={
												MOBlineHeightUnit === 'em'
													? 0.1
													: 1
											}
										/>
									</WithResDeviceBtn>
								</>
							)}
						</div>
					</div>
				)}
			/>
		</BaseControl>
	);
};
export default TypographyDropdown;
