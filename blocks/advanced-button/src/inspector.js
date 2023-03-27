/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TabPanel,
	ColorPalette,
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
import BackgroundControl from '../../../src/controls/background-control';
import BorderControl from '../../../src/controls/border-control';
import ResDimensionsControl from '../../../src/controls/dimensions-control';

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
	BUTTON_BG,
	BUTTON_BORDER,
	BUTTON_PADDING,
	BUTTON_MARGIN,
	ICON_SIZE,
	ICON_TEXT_SPACING,
} from './constants';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		resDevice,
		label,
		link,
		openInNewTab,
		addNoFollow,
		showIcon,
		icon,
		iconPosition,
		bgColor,
		textColor,
	} = attributes;

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'preset-1':
				//Write code here
				setAttributes({
					bgColor: '#551ef7',
					textColor: '#ffffff',
				});
				break;
			case 'preset-2':
				//Write code here
				break;
			default:
				return false;
		}
	};

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
											onChange={(selected) =>
												changePreset(selected)
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
										></LinkControl>
										{/* <TextControl
											label={__('Link', 'zolo-blocks')}
											onChange={(value) =>
												setAttributes({
													...link,
													url: value
												})
											}
											value={link}
											placeholder={__(
												'link',
												'zolo-blocks'
											)}
										/>
										<ToggleControl
											label={__(
												'Open in new tab',
												'zolo-blocks'
											)}
											checked={openInNewTab}
											onChange={() =>
												setAttributes({
													openInNewTab: !openInNewTab,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Add "nofollow" to link',
												'zolo-blocks'
											)}
											checked={addNoFollow}
											onChange={() =>
												setAttributes({
													addNoFollow: !addNoFollow,
												})
											}
										/> */}
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
													options={[
														{
															label: 'Left',
															value: 'left',
														},
														{
															label: 'Right',
															value: 'right',
														},
														{
															label: 'Top',
															value: 'top',
														},
														{
															label: 'Bottom',
															value: 'bottom',
														},
													]}
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
									<PanelBody
										title={__('Button', 'zolo-blocks')}
										initialOpen={true}
									>
										<ColorControl
											label={__(
												'Text Color',
												'zolo-blocks'
											)}
											color={textColor}
											onChange={(value) =>
												setAttributes({
													textColor: value,
												})
											}
										/>
										<ColorControl
											label={__(
												'Background Color',
												'zolo-blocks'
											)}
											color={bgColor}
											onChange={(value) =>
												setAttributes({
													bgColor: value,
												})
											}
										/>
										<BackgroundControl
											controlName={BUTTON_BG}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
									<PanelBody
										title={__('Border', 'zolo-blocks')}
										initialOpen={false}
									>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={BUTTON_BORDER}
											resRequiredProps={resRequiredProps}
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
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={BUTTON_MARGIN}
											resRequiredProps={resRequiredProps}
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
