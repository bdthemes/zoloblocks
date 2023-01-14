/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TabPanel } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import ColorControl from '../../../src/controls/color-control';
import ResDimensionsControl from '../../../src/controls/dimensions-control';
import ResAlignmentControl from '../../../src/controls/res-alignment-control';
import ResRangeControl from '../../../src/controls/res-range-control';

import objAttributes from './attributes';

import {
	BUTTON_ALIGNMENT,
	BUTTON_BRADIUS,
	BUTTON_MARGIN,
	BUTTON_PADDING,
	BUTTON_WIDTH,
	BUTTON_TYPO,
	PRESETS,
} from './constants';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { uniqueId, preset, resDevice, buttonBGColor, buttonColor } =
		attributes;
	const resRequiredProps = {
		attributes,
		setAttributes,
		resDevice,
		objAttributes,
	};
	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="zb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'settings',
							title: 'Settings',
							className: 'zb-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'zb-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'zb-tab advanced',
						},
					]}
				>
					{(tab) => (
						<div className={'zb-tab-controls' + tab.name}>
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
										{/* <TypographyDropdown
											label="Typography"
											typoPrefixConstant={BUTTON_TYPO}
											resRequiredProps={resRequiredProps}
											defaultFontSize={22}
										/> */}
										<ResRangeControl
											label={__(
												'Button Width',
												'zolo-blocks'
											)}
											resRequiredProps={resRequiredProps}
											controlName={BUTTON_WIDTH}
											min={0}
											max={500}
											step={1}
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
										<ColorControl
											label={__(
												'Button color',
												'zolo-blocks'
											)}
											color={buttonColor}
											defaultColor={'red'}
											onChange={(val) =>
												setAttributes({
													buttonColor: val,
												})
											}
										/>
										<ColorControl
											label={__(
												'Button BG color',
												'zolo-blocks'
											)}
											color={buttonBGColor}
											defaultColor={'green'}
											onChange={(val) =>
												setAttributes({
													buttonBGColor: val,
												})
											}
										/>
										<ResDimensionsControl
											label="Margin"
											controlName={BUTTON_MARGIN}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label="Padding"
											controlName={BUTTON_PADDING}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label="Border Radius"
											controlName={BUTTON_BRADIUS}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === 'design' && (
								<>
									<PanelBody
										title={__('Button', 'zolo-blocks')}
										initialOpen={true}
									></PanelBody>
								</>
							)}
							{tab.name === 'advance' && (
								<>
									<PanelBody
										title={__('Button', 'zolo-blocks')}
										initialOpen={true}
									>
										<h1>Advvance</h1>
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
