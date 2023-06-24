/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TabPanel,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
	PRESETS,
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	REVIEW_GRID_BG,
	REVIEW_GRID_MARGIN,
	REVIEW_GRID_PADDING,
} from './constants';

const { ResRangeControl, ResDimensionsControl, NormalBGControl } =
	window.zoloModule;

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { preset, resMode, showDesignation, showTestimonialMessage } =
		attributes;

	const resRequiredProps = {
		resMode,
		setAttributes,
		attributes,
		objAttributes,
	};
	/**
	 * Preset
	 */
	const changePremade = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'default':
				setAttributes({
					showTestimonialMessage: false,
				});
				break;
			case 'style-1':
				setAttributes({
					showTestimonialMessage: false,
				});
				break;
			case 'style-2':
				setAttributes({
					showTestimonialMessage: false,
				});
				break;
			default:
				setAttributes({
					showTestimonialMessage: false,
				});
				break;
		}
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
										<SelectControl
											label={__(
												'Preset Designs',
												'zolo-blocks'
											)}
											value={preset}
											options={PRESETS}
											onChange={(selected) =>
												changePremade(selected)
											}
										/>
										<ToggleControl
											label={__(
												'Show Designation',
												'zolo-blocks'
											)}
											checked={showDesignation}
											onChange={() =>
												setAttributes({
													showDesignation:
														!showDesignation,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Testimonial Message',
												'zolo-blocks'
											)}
											checked={showTestimonialMessage}
											onChange={() =>
												setAttributes({
													showTestimonialMessage:
														!showTestimonialMessage,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Grid Settings',
											'zolo-blocks'
										)}
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
										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={REVIEW_GRID_BG}
											noMainBGImg={false}
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
											label={__('Padding', 'zolo-blocks')}
											controlName={REVIEW_GRID_PADDING}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__('Margin', 'zolo-blocks')}
											controlName={REVIEW_GRID_MARGIN}
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
