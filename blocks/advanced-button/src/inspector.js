/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

// import { PRESETS } from "../../../src/global/constants";
import { PRESETS } from "./constants";

import objAttributes from "./attributes";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		bgColor,
		textColor,
	} = attributes;

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'preset-1':
				//Write code here
				setAttributes({
					bgColor: "#551ef7",
					textColor: "#ffffff",
				});
				break;
			case 'preset-2':
				//Write code here
				break;
			default:
				return false;
		}
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
					{(tab) =>
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "settings" && (
								<>
									<PanelBody
										title={__("General", "essential-blocks")}
										initialOpen={true}
									>
										<SelectControl
											label={__("Preset Designs", "essential-blocks")}
											value={preset}
											options={PRESETS}
											onChange={(selected) => changePreset(selected)}
										/>
									</PanelBody>
								</>
							)}

							{tab.name === "design" && (
								<>
									<PanelBody title={__("Button", "essential-blocks")} initialOpen={true}>
										{/* Color & Other styles */}
									</PanelBody>
								</>
							)}

							{tab.name === "advance" && (
								<>
									{/* Advanced Controls */}
								</>
							)}

						</div>
					}


				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;