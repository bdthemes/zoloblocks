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
	ToggleControl,
	BaseControl,
	Button,
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

import objAttributes from './attributes';
import { PRESETS } from './constants';
import ImageAvatar from '../../../src/controls/image-avatar';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		resMode,
		preset,
		showMemberPhoto,
		memberPhoto,
		enableMemberLink,
		memberLink,
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
					className="zolo-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
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
											onChange={(value) =>
												setAttributes({
													preset: value,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Show Member Photo',
												'zolo-blocks'
											)}
											checked={showMemberPhoto}
											onChange={() =>
												setAttributes({
													showMemberPhoto:
														!showMemberPhoto,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Enable Member Link',
												'zolo-blocks'
											)}
											checked={enableMemberLink}
											onChange={() =>
												setAttributes({
													enableMemberLink:
														!enableMemberLink,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__('Content', 'zolo-blocks')}
										initialOpen={false}
									>
										{enableMemberLink && (
											<Fragment>
												<TextControl
													label={__(
														'Member Link',
														'zolo-blocks'
													)}
													onChange={(link) => {
														setAttributes({
															memberLink: {
																...memberLink,
																url: link,
															},
														});
													}}
													value={
														memberLink &&
														memberLink.url
													}
												/>
												<ToggleControl
													label={__(
														'Open in New Tab',
														'zolo-blocks'
													)}
													checked={
														memberLink &&
														memberLink.newTab
													}
													onChange={() =>
														setAttributes({
															memberLink: {
																...memberLink,
																newTab: !memberLink.newTab,
															},
														})
													}
												/>
											</Fragment>
										)}
									</PanelBody>
								</>
							)}

							{tab.name === 'design' && <>design</>}

							{tab.name === 'advanced' && <>advanced</>}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
