/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	TextareaControl,
	ToggleControl,
	BaseControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
} from './constants';

const { ResRangeControl, ResDimensionsControl, ColorControl } =
	window.zoloModule;

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { uniqueId, resMode, containerBg } = attributes;

	const resRequiredProps = {
		resMode,
		setAttributes,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="zolo-panel-control">
				<TabPanel
					className="zolo-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: 'settings',
							title: __('Settings', 'zolo-blocks'),
							className: 'zolo-tab settings',
						},
						{
							name: 'design',
							title: __('Design', 'zolo-blocks'),
							className: 'zolo-tab design',
						},
						{
							name: 'advanced',
							title: __('Advanced', 'zolo-blocks'),
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
										initialOpen={false}
									>
										<ResRangeControl
											label={__(
												'Grid Columns',
												'zolo-blocks'
											)}
											controlName={GRID_COLUMNS}
											resRequiredProps={resRequiredProps}
											max={4}
											min={1}
											step={1}
											noUnits={true}
										/>
										<ResRangeControl
											label={__(
												'Columns Gap',
												'zolo-blocks'
											)}
											controlName={COLUMNS_GAP}
											resRequiredProps={resRequiredProps}
										/>
										<ResRangeControl
											label={__(
												'Rows Gap',
												'zolo-blocks'
											)}
											controlName={ROWS_GAP}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
								</>
							)}

							{tab.name === 'design' && (
								<>
									<PanelBody
										title={__('Container', 'zolo-blocks')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Background',
												'zolo-blocks'
											)}
											color={containerBg}
											onChange={(color) =>
												setAttributes({
													containerBg: color,
												})
											}
										/>
									</PanelBody>
								</>
							)}

							{tab.name === 'advanced' && (
								<>
									<PanelBody
										title={__('Spacing', 'zolo-blocks')}
										initialOpen={false}
									>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={CONTAINER_MARGIN}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Padding', 'zolo-blocks')}
											controlName={CONTAINER_PADDING}
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
