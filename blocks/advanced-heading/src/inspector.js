//wrodpress dependencies
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel, PanelBody } from '@wordpress/components';

//import { MultiSelect } from "react-multi-select-component";
import Select2 from 'react-select'

//internal dependencies controls
import ResRangeControl from '../../../src/controls/res-range-control';
import ResAlignmentControl from '../../../src/controls/res-alignment-control';
import ColorControl from '../../../src/controls/color-control';
import ResDimensionsControl from '../../../src/controls/dimensions-control'
import TypographyDropdown from '../../../src/controls/typography-control';

//block attributes
import objAttributes from './attributes';

//block constants
import { HEADING_WIDTH, HEADING_ALIGNMENT, HEADING_PADDING, HEADING_TYPO } from './constants';

const Inspector = ({ attributes, setAttributes }) => {

	const { resMode, headingColor } = attributes;

	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};

	const options = [
		{ label: "Grapes 🍇", value: "grapes" },
		{ label: "Mango 🥭", value: "mango" },
		{ label: "Strawberry 🍓", value: "strawberry", disabled: true },
	];

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

										{/* <MultiSelect
											options={options}
											labelledBy="Select"
										/> */}

										<Select2
											options={options}
											name='zolo-select'
											value={{ label: "Grapes 🍇", value: "grapes" }}
											// onChange={(selected) => setAttributes({ headerMeta: JSON.stringify(selected) })}
											// options={metaOptions}
											// isMulti='true'
										/>

										<ResRangeControl
											label={__(
												'Heading Width',
												'zolo-blocks'
											)}
											resRequiredProps={resRequiredProps}
											controlName={HEADING_WIDTH}
											min={0}
											max={500}
											step={1}
										/>

										<ResAlignmentControl
											label={__(
												'Heading Alignmet',
												'zolo-blocks'
											)}
											controlName={HEADING_ALIGNMENT}
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
												'Heading color',
												'zolo-blocks'
											)}
											color={headingColor}
											defaultColor={'red'}
											onChange={(val) =>
												setAttributes({
													headingColor: val,
												})
											}
										/>

										<ResDimensionsControl
											label="Padding"
											controlName={HEADING_PADDING}
											resRequiredProps={resRequiredProps}
										/>

										<TypographyDropdown
											label="Typography"
											typoPrefixConstant={HEADING_TYPO}
											resRequiredProps={resRequiredProps}
											defaultFontSize={22}
										/>

									</PanelBody>
								</>
							)}

							{tab.name === 'design' && (
								<>
									<PanelBody
										title={__('Style', 'zolo-blocks')}
										initialOpen={true}
									>


									</PanelBody>
								</>
							)}
							{tab.name === 'advanced' && (
								<>
									<PanelBody
										title={__('Advanced', 'zolo-blocks')}
										initialOpen={true}
									>


									</PanelBody>
								</>
							)}
						</div>
					)}

				</TabPanel>
			</div>
		</InspectorControls>
	)
}

export default Inspector;