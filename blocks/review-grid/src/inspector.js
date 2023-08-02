/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
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

const {
	ResRangeControl,
	ResDimensionsControl,
	NormalBGControl,
	HeaderTabs,
	ResCounterControl,
} = window.zoloModule;

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
			<HeaderTabs
				generalTab={
					<>
						<PanelBody
							title={__('General', 'zolo-blocks')}
							initialOpen={false}
						>
							<SelectControl
								label={__('Preset Designs', 'zolo-blocks')}
								value={preset}
								options={PRESETS}
								onChange={(selected) => changePremade(selected)}
							/>
							<ToggleControl
								label={__('Show Designation', 'zolo-blocks')}
								checked={showDesignation}
								onChange={() =>
									setAttributes({
										showDesignation: !showDesignation,
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
							title={__('Grid Settings', 'zolo-blocks')}
							initialOpen={false}
						>
							<ResCounterControl
								label={__('Grid Columns', 'zolo-blocks')}
								controlName={GRID_COLUMNS}
								resRequiredProps={resRequiredProps}
								min={1}
								max={5}
							/>
							<ResRangeControl
								label={__('Columns Gap', 'zolo-blocks')}
								controlName={COLUMNS_GAP}
								resRequiredProps={resRequiredProps}
							/>
							<ResRangeControl
								label={__('Rows Gap', 'zolo-blocks')}
								controlName={ROWS_GAP}
								resRequiredProps={resRequiredProps}
							/>
						</PanelBody>
					</>
				}
				styleTab={
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
				}
				advancedTab={
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
				}
			/>
		</InspectorControls>
	);
}

export default Inspector;
