/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	Button,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	HeaderTabs,
	BorderControl,
	BoxShadowControl,
	NormalBGControl,
	ResDimensionsControl,
	TabPanelControl,
	ImageAvatar,
	ResRangeControl,
	ColorControl,
	TypographyDropdown,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	PRESETS,
	ROWS_GAP,
	COLUMNS_GAP,
	GRID_COLUMNS,
	CONTAINER_BORDER,
	CONTAINER_HOVER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_HOVER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	IMAGE_BORDER,
	IMAGE_BORDER_RADIUS,
	IMAGE_BOX_SHADOW,
	IMAGE_BACKGROUND,
	IMAGE_HOVER_BORDER,
	IMAGE_HOVER_BORDER_RADIUS,
	IMAGE_HOVER_BOX_SHADOW,
	IMAGE_HOVER_BACKGROUND,
	IMAGE_PADDING,
	IMAGE_MARGIN,
	HEADING_BACKGROUND,
	HEADING_BORDER_RADIUS,
	HEADING_BOX_SHADOW,
} from './constants';

import { HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { uniqueId, advancedGallery, preset, resMode, headingColor } =
		attributes;

	const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};
	return (
		<InspectorControls key="controls">
			<HeaderTabs
				generalTab={
					<>
						<PanelBody
							title={__('General', 'zolo-blocks')}
							initialOpen={true}
						>
							<SelectControl
								label={__('Preset Designs', 'zolo-blocks')}
								value={preset}
								options={PRESETS}
								onChange={(value) =>
									setAttributes({
										preset: value,
									})
								}
							/>
							<ResRangeControl
								label={__('Grid Columns', 'zolo-blocks')}
								controlName={GRID_COLUMNS}
								resRequiredProps={resRequiredProps}
								max={4}
								min={1}
								step={1}
								noUnits={true}
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
							<TabPanelControl
								normalComponents={
									<>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={CONTAINER_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={
												CONTAINER_BORDER_RADIUS
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={CONTAINER_BOX_SHADOW}
											resRequiredProps={resRequiredProps}
											enableTransition={false}
										/>

										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={CONTAINER_BACKGROUND}
											noMainBGImg={false}
										/>
									</>
								}
								hoverComponents={
									<>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={CONTAINER_HOVER_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={
												CONTAINER_HOVER_BORDER_RADIUS
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={
												CONTAINER_HOVER_BOX_SHADOW
											}
											resRequiredProps={resRequiredProps}
											enableTransition={false}
										/>
										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={
												CONTAINER_HOVER_BACKGROUND
											}
											noMainBGImg={false}
										/>
									</>
								}
							/>
						</PanelBody>
						<PanelBody
							title={__('Image', 'zolo-blocks')}
							initialOpen={false}
						>
							<TabPanelControl
								normalComponents={
									<>
										<BorderControl
											label={__(
												'Image Border',
												'zolo-blocks'
											)}
											controlName={IMAGE_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={IMAGE_BORDER_RADIUS}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={IMAGE_BOX_SHADOW}
											resRequiredProps={resRequiredProps}
											enableTransition={false}
										/>

										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={IMAGE_BACKGROUND}
											noMainBGImg={false}
										/>
									</>
								}
								hoverComponents={
									<>
										<BorderControl
											label={__('Border', 'zolo-blocks')}
											controlName={IMAGE_HOVER_BORDER}
											resRequiredProps={resRequiredProps}
										/>
										<ResDimensionsControl
											label={__(
												'Border Radius',
												'zolo-blocks'
											)}
											controlName={
												IMAGE_HOVER_BORDER_RADIUS
											}
											resRequiredProps={resRequiredProps}
											forBorderRadius={true}
										/>
										<BoxShadowControl
											controlName={IMAGE_HOVER_BOX_SHADOW}
											resRequiredProps={resRequiredProps}
											enableTransition={false}
										/>
										<NormalBGControl
											resRequiredProps={resRequiredProps}
											controlName={IMAGE_HOVER_BACKGROUND}
											noMainBGImg={false}
										/>
									</>
								}
							/>
							<ResDimensionsControl
								label={__('Padding', 'zolo-blocks')}
								controlName={IMAGE_PADDING}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={IMAGE_MARGIN}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
						</PanelBody>
						<PanelBody
							title={__('Heading', 'zolo-blocks')}
							initialOpen={false}
						>
							<>
								<TypographyDropdown
									label={__('Typography', 'zolo-blocks')}
									typoPrefixConstant={HEADING_TYPOGRAPHY}
									resRequiredProps={resRequiredProps}
								/>
								<NormalBGControl
									resRequiredProps={resRequiredProps}
									controlName={HEADING_BACKGROUND}
									noMainBGImg={false}
								/>
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={headingColor}
									onChange={(value) =>
										setAttributes({
											headingColor: value,
										})
									}
								/>
								<ResDimensionsControl
									label={__('Border Radius', 'zolo-blocks')}
									controlName={HEADING_BORDER_RADIUS}
									resRequiredProps={resRequiredProps}
									forBorderRadius={true}
								/>
								<BoxShadowControl
									controlName={HEADING_BOX_SHADOW}
									resRequiredProps={resRequiredProps}
									enableTransition={false}
								/>
							</>
						</PanelBody>
					</>
				}
				advancedTab={
					<>
						<PanelBody
							title={__('Visibility', 'zolo-blocks')}
							initialOpen={false}
						>
							<p>Advanced Settings are here..</p>
						</PanelBody>
					</>
				}
			/>
		</InspectorControls>
	);
}

export default Inspector;
