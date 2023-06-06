/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import {
	TEAM_GRID_BG,
	GRID_COLUMNS,
	COLUMNS_GAP,
	ROWS_GAP,
	CONTAINER_MARGIN,
	CONTAINER_PADDING,
	PRESETS,
} from './constants';

const { ResRangeControl, ResDimensionsControl, NormalBGControl } =
	window.zoloModule;

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resMode,
		preset,
		addDetailPageLink,
		showDetailPageIcon,
		showDesignation,
		showShortBio,
		showSocialProfiles,
	} = attributes;

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
					showShortBio: false,
					showSocialProfiles: true,
					showDetailPageIcon: true,
					showDesignation: true,
					addDetailPageLink: true,
				});
				break;
			case 'style-1':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					showDetailPageIcon: false,
					showDesignation: false,
				});
				break;
			case 'style-2':
				setAttributes({
					showShortBio: true,
					showSocialProfiles: true,
					showDetailPageIcon: false,
					showDesignation: true,
				});
				break;
			case 'style-3':
				setAttributes({
					showShortBio: false,
					showSocialProfiles: true,
					showDetailPageIcon: true,
					showDesignation: true,
				});
				break;
			default:
				return false;
		}
	};

	// console attributes
	console.log(attributes);

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
												'Add Detail Page Link',
												'zolo-blocks'
											)}
											checked={addDetailPageLink}
											onChange={() =>
												setAttributes({
													addDetailPageLink:
														!addDetailPageLink,
												})
											}
										/>
										{addDetailPageLink && (
											<ToggleControl
												label={__(
													'Show Detail Page Link Icon',
													'zolo-blocks'
												)}
												checked={showDetailPageIcon}
												onChange={() =>
													setAttributes({
														showDetailPageIcon:
															!showDetailPageIcon,
													})
												}
											/>
										)}

										{preset !== 'style-1' &&
											preset !== 'style-3' && (
												<ToggleControl
													label={__(
														'Show Short Bio',
														'zolo-blocks'
													)}
													checked={showShortBio}
													onChange={() =>
														setAttributes({
															showShortBio:
																!showShortBio,
														})
													}
												/>
											)}
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
												'Show Social Profiles',
												'zolo-blocks'
											)}
											checked={showSocialProfiles}
											onChange={() =>
												setAttributes({
													showSocialProfiles:
														!showSocialProfiles,
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
											controlName={TEAM_GRID_BG}
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
