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
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'settings',
							title: 'Settings',
							className: 'eb-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'eb-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'eb-tab advanced',
						},
					]}
				>
					{(tab) => (
						<div className={'eb-tab-controls' + tab.name}>
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
												{
													id: 'addNoFollow',
													title: __(
														'Add nofollow to link',
														'zolo-blocks'
													),
												},
											]}
											onChange={(data) =>
												setAttributes({ link: data })
											}
										/>
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
									{preset !== '' && (
										<PanelBody
											title={__('Preset', 'zolo-blocks')}
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
