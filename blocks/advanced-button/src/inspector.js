/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal depencencies
 */
import ResAlignmentControl from '../../../src/controls/res-alignment-control';
import ResRangeControl from '../../../src/controls/res-range-control';
import ColorControl from '../../../src/controls/color-control';
import BorderControl from '../../../src/controls/border-control';
import ResDimensionsControl from '../../../src/controls/dimensions-control';
import TypographyDropdown from '../../../src/controls/typography-control';
import TabPanelControl from '../../../src/controls/tabpanel-control';
import BackgroundControl from '../../../src/controls/background-control';
import BoxShadowControl from '../../../src/controls/boxshadow-control';

// const {
// 	BackgroundControl,
// 	BorderControl,
// 	BoxShadowControl,
// 	ColorControl,
// 	ResDimensionsControl,
// 	ResAlignmentControl,
// 	TypographyDropdown,
// } = window.zoloModule;

// import { PRESETS } from "../../../src/global/constants";
import objAttributes from './attributes';
import {
	BUTTON_ALIGNMENT,
	PRESETS,
	ICON_POSITIONS,
	BUTTON_BORDER,
	BUTTON_BORDER_RADIUS,
	BUTTON_PADDING,
	BUTTON_MARGIN,
	BUTTON_BG,
	BUTTON_BOX_SHADOW,
	BUTTON_HOVER_BOX_SHADOW,
	ICON_SIZE,
	ICON_TEXT_SPACING,
	ICON_BORDER,
	ICON_BORDER_RADIUS,
	ICON_BOX_SHADOW,
	ICON_HOVER_BOX_SHADOW,
	ICON_PADDING,
} from './constants';

import { BUTTON_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		resMode,
		resDevice,
		label,
		link,
		showIcon,
		icon,
		iconPosition,
		iconColor,
		iconHoverColor,
		iconBg,
		iconHoverBg,
		iconBorderHoverColor,
		textColor,
		textHoverColor,
		borderHoverColor,
		preset,
		presetOneStyles,
		presetTwoStyles,
		presetThreeStyles,
		presetFourStyles,
		presetFiveStyles,
		presetSevenStyles,
		presetEightStyles,
		presetTenStyles,
		presetElevenStyles,
		presetTwelveStyles,
	} = attributes;

	// const changePreset = (selected) => {
	// 	setAttributes({ preset: selected });
	// 	switch (selected) {
	// 		case 'preset-1':
	// 			//Write code here
	// 			setAttributes({
	// 				bgColor: '#551ef7',
	// 				textColor: '#ffffff',
	// 			});
	// 			break;
	// 		case 'preset-2':
	// 			//Write code here
	// 			break;
	// 		default:
	// 			return false;
	// 	}
	// };

	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="zolo-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'settings',
							title: 'Settings',
							className: 'zolo-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'zolo-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'zolo-tab advanced',
						},
					]}
				>
					{(tab) => (
						<div className={'zolo-tab-controls' + tab.name}>
							{tab.name === 'settings' && (
								<>
									<PanelBody
										title={__('General', 'zolo-blocks')}
										initialOpen={true}
									>
										<SelectControl
											label={__(
												'Preset Designs',
												'zolo-blocks'
											)}
											value={preset}
											options={PRESETS}
											onChange={(value) =>
												setAttributes({
													preset: value,
												})
											}
										/>
										<ResAlignmentControl
											label={__(
												'Button Alignmet',
												'zolo-blocks'
											)}
											controlName={BUTTON_ALIGNMENT}
											resRequiredProps={resRequiredProps}
											alignOptions={[
												{
													label: 'Left',
													value: 'left',
												},
												{
													label: 'Center',
													value: 'center',
												},
												{
													label: 'Right',
													value: 'right',
												},
												{
													label: 'Justify',
													value: 'justify',
												},
											]}
										/>
									</PanelBody>
									<PanelBody
										title={__('Content', 'zolo-blocks')}
										initialOpen={false}
									>
										<TextControl
											label={__('Label', 'zolo-blocks')}
											onChange={(value) =>
												setAttributes({ label: value })
											}
											value={label}
											placeholder={__(
												'label',
												'zolo-blocks'
											)}
										/>
										<BaseControl
											label={__('Link', 'zolo-blocks')}
										>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={link}
												settings={[
													{
														id: 'opensInNewTab',
														title: __(
															'Open in new tab',
															'zolo-blocks'
														),
													},
												]}
												onChange={(data) =>
													setAttributes({
														link: data,
													})
												}
											/>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={__('Icon', 'zolo-blocks')}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Enable Icon',
												'zolo-blocks'
											)}
											checked={showIcon}
											onChange={() =>
												setAttributes({
													showIcon: !showIcon,
												})
											}
										/>
										{showIcon && (
											<Fragment>
												<p>
													<strong>Icon Picker</strong>
												</p>
												<SelectControl
													label={__(
														'Position',
														'zolo-blocks'
													)}
													options={ICON_POSITIONS}
													onChange={(position) => {
														setAttributes({
															iconPosition:
																position,
														});
													}}
													value={iconPosition}
												/>
												<ResRangeControl
													label={__(
														'Icon Size',
														'zolo-blocks'
													)}
													controlName={ICON_SIZE}
													resRequiredProps={
														resRequiredProps
													}
													min={0}
													max={100}
													step={1}
												/>
												<ResRangeControl
													label={__(
														'Gap',
														'zolo-blocks'
													)}
													controlName={
														ICON_TEXT_SPACING
													}
													resRequiredProps={
														resRequiredProps
													}
													min={0}
													max={100}
													step={1}
												/>
											</Fragment>
										)}
									</PanelBody>
								</>
							)}

							{tab.name === 'design' && (
								<>
									{preset !== '' &&
										preset !== 'button-6' &&
										preset !== 'button-9' &&
										preset !== 'button-13' &&
										preset !== 'button-14' && (
											<PanelBody
												title={__(
													'Preset',
													'zolo-blocks'
												)}
												initialOpen={true}
											>
												{preset === 'button-1' && (
													<Fragment>
														<ColorControl
															label={__(
																'Shadow Color',
																'zolo-blocks'
															)}
															color={
																presetOneStyles &&
																presetOneStyles.shadowColor
															}
															onChange={(value) =>
																setAttributes({
																	presetOneStyles:
																		{
																			...presetOneStyles,
																			shadowColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-2' && (
													<Fragment>
														<TabPanelControl
															normalComponents={
																<Fragment>
																	<ColorControl
																		label={__(
																			'Overlay Color',
																			'zolo-blocks'
																		)}
																		color={
																			presetTwoStyles &&
																			presetTwoStyles.bgColor
																		}
																		onChange={(
																			value
																		) =>
																			setAttributes(
																				{
																					presetTwoStyles:
																						{
																							...presetTwoStyles,
																							bgColor:
																								value,
																						},
																				}
																			)
																		}
																	/>
																</Fragment>
															}
															hoverComponents={
																<Fragment>
																	<ColorControl
																		label={__(
																			'Overlay Color',
																			'zolo-blocks'
																		)}
																		color={
																			presetTwoStyles &&
																			presetTwoStyles.hoverBgColor
																		}
																		onChange={(
																			value
																		) =>
																			setAttributes(
																				{
																					presetTwoStyles:
																						{
																							...presetTwoStyles,
																							hoverBgColor:
																								value,
																						},
																				}
																			)
																		}
																	/>
																</Fragment>
															}
														/>
													</Fragment>
												)}
												{preset === 'button-3' && (
													<Fragment>
														<ColorControl
															label={__(
																'Overlay Color',
																'zolo-blocks'
															)}
															color={
																presetThreeStyles &&
																presetThreeStyles.bgColor
															}
															onChange={(value) =>
																setAttributes({
																	presetThreeStyles:
																		{
																			...presetThreeStyles,
																			bgColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-4' && (
													<Fragment>
														<ColorControl
															label={__(
																'Overlay Color 1',
																'zolo-blocks'
															)}
															color={
																presetFourStyles &&
																presetFourStyles.colorOne
															}
															onChange={(value) =>
																setAttributes({
																	presetFourStyles:
																		{
																			...presetFourStyles,
																			colorOne:
																				value,
																		},
																})
															}
														/>
														<ColorControl
															label={__(
																'Overlay Color 2',
																'zolo-blocks'
															)}
															color={
																presetFourStyles &&
																presetFourStyles.colorTwo
															}
															onChange={(value) =>
																setAttributes({
																	presetFourStyles:
																		{
																			...presetFourStyles,
																			colorTwo:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-5' && (
													<Fragment>
														<ColorControl
															label={__(
																'Border Color',
																'zolo-blocks'
															)}
															color={
																presetFiveStyles &&
																presetFiveStyles.borderColor
															}
															onChange={(value) =>
																setAttributes({
																	presetFiveStyles:
																		{
																			...presetFiveStyles,
																			borderColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-7' && (
													<Fragment>
														<ColorControl
															label={__(
																'Background Color',
																'zolo-blocks'
															)}
															color={
																presetSevenStyles &&
																presetSevenStyles.bgColor
															}
															onChange={(value) =>
																setAttributes({
																	presetSevenStyles:
																		{
																			...presetSevenStyles,
																			bgColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-8' && (
													<Fragment>
														<ColorControl
															label={__(
																'Overlay Color',
																'zolo-blocks'
															)}
															color={
																presetEightStyles &&
																presetEightStyles.overlayColor
															}
															onChange={(value) =>
																setAttributes({
																	presetEightStyles:
																		{
																			...presetEightStyles,
																			overlayColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-10' && (
													<Fragment>
														<ColorControl
															label={__(
																'Outline Color',
																'zolo-blocks'
															)}
															color={
																presetTenStyles &&
																presetTenStyles.outlineColor
															}
															onChange={(value) =>
																setAttributes({
																	presetTenStyles:
																		{
																			...presetTenStyles,
																			outlineColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-11' && (
													<Fragment>
														<ColorControl
															label={__(
																'Overlay Background',
																'zolo-blocks'
															)}
															color={
																presetElevenStyles &&
																presetElevenStyles.overlayBgColor
															}
															onChange={(value) =>
																setAttributes({
																	presetElevenStyles:
																		{
																			...presetElevenStyles,
																			overlayBgColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
												{preset === 'button-12' && (
													<Fragment>
														<ColorControl
															label={__(
																'Overlay Background',
																'zolo-blocks'
															)}
															color={
																presetTwelveStyles &&
																presetTwelveStyles.overlayBgColor
															}
															onChange={(value) =>
																setAttributes({
																	presetTwelveStyles:
																		{
																			...presetTwelveStyles,
																			overlayBgColor:
																				value,
																		},
																})
															}
														/>
													</Fragment>
												)}
											</PanelBody>
										)}
									<PanelBody
										title={__('General', 'zolo-blocks')}
										initialOpen={false}
									>
										<TypographyDropdown
											label="Typography"
											typoPrefixConstant={
												BUTTON_TYPOGRAPHY
											}
											resRequiredProps={resRequiredProps}
										/>
										<TabPanelControl
											normalComponents={
												<>
													<ColorControl
														label={__(
															'Text Color',
															'zolo-blocks'
														)}
														color={textColor}
														onChange={(value) =>
															setAttributes({
																textColor:
																	value,
															})
														}
													/>
													<CardDivider />
													<ColorControl
														label={__(
															'Icon Color',
															'zolo-blocks'
														)}
														color={iconColor}
														onChange={(value) =>
															setAttributes({
																iconColor:
																	value,
															})
														}
													/>
													<ColorControl
														label={__(
															'Icon Background',
															'zolo-blocks'
														)}
														color={iconBg}
														onChange={(value) =>
															setAttributes({
																iconBg: value,
															})
														}
													/>
													<BoxShadowControl
														controlName={
															ICON_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={false}
													/>
													<CardDivider />
													<BoxShadowControl
														controlName={
															BUTTON_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={false}
													/>
												</>
											}
											hoverComponents={
												<>
													<ColorControl
														label={__(
															'Text Color',
															'zolo-blocks'
														)}
														color={textHoverColor}
														onChange={(value) =>
															setAttributes({
																textHoverColor:
																	value,
															})
														}
													/>
													<CardDivider />
													<ColorControl
														label={__(
															'Icon Color',
															'zolo-blocks'
														)}
														color={iconHoverColor}
														onChange={(value) =>
															setAttributes({
																iconHoverColor:
																	value,
															})
														}
													/>
													<ColorControl
														label={__(
															'Icon Border Color',
															'zolo-blocks'
														)}
														color={
															iconBorderHoverColor
														}
														onChange={(value) =>
															setAttributes({
																iconBorderHoverColor:
																	value,
															})
														}
													/>
													<ColorControl
														label={__(
															'Icon Background',
															'zolo-blocks'
														)}
														color={iconHoverBg}
														onChange={(value) =>
															setAttributes({
																iconHoverBg:
																	value,
															})
														}
													/>
													<BoxShadowControl
														controlName={
															ICON_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={true}
													/>
													<CardDivider />
													<ColorControl
														label={__(
															'Border Color',
															'zolo-blocks'
														)}
														color={borderHoverColor}
														onChange={(value) =>
															setAttributes({
																borderHoverColor:
																	value,
															})
														}
													/>
													<BoxShadowControl
														controlName={
															BUTTON_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={true}
													/>
												</>
											}
										/>
									</PanelBody>
									<PanelBody
										title={__('Background', 'zolo-blocks')}
										initialOpen={false}
									>
										<BackgroundControl
											resRequiredProps={resRequiredProps}
											controlName={BUTTON_BG}
											noOverlay={true}
										/>
									</PanelBody>
									<PanelBody
										title={__('Container', 'zolo-blocks')}
										initialOpen={false}
									>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={BUTTON_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={BUTTON_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
									</PanelBody>
									<PanelBody
										title={__('Icon', 'zolo-blocks')}
										initialOpen={false}
									>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={ICON_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={ICON_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={ICON_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
								</>
							)}

							{tab.name === 'advanced' && (
								<>
									{/* Advanced Controls */}
									<PanelBody
										title={__('Spacing', 'zolo-blocks')}
										initialOpen={false}
									>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={BUTTON_PADDING}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={BUTTON_MARGIN}
											resRequiredProps={resRequiredProps}
											forBorderRadius={false}
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
