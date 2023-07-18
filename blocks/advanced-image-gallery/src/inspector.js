/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	BorderControl,
	BoxShadowControl,
	NormalBGControl,
	ResDimensionsControl,
	TabPanelControl,
	ImageAvatar,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	CONTAINER_BACKGROUND,
	CONTAINER_HOVER_BACKGROUND,
	CONTAINER_HOVER_BORDER,
	CONTAINER_BOX_SHADOW,
	CONTAINER_HOVER_BOX_SHADOW,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BORDER,
} from './constants';

import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

function Inspector( props ) {
	const { attributes, setAttributes } = props;
	const { uniqueId, advancedGallery, resMode } = attributes;

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
					tabs={ [
						{
							name: 'settings',
							title: 'Settings',
							className: 'zolo-tab settings',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'zolo-tab design',
						},
						{
							name: 'advanced',
							title: 'Advanced',
							className: 'zolo-tab advanced',
						},
					] }
				>
					{ ( tab ) => (
						<div className={ 'zolo-tab-controls' + tab.name }>
							{ tab.name === 'settings' && (
								<>
									<PanelBody
										title={ __( 'Content', 'zolo-blocks' ) }
										initialOpen={ false }
									>
										<BaseControl
											label={ __(
												'Photo',
												'zolo-blocks'
											) }
										>
											{ advancedGallery ? (
												<ImageAvatar
													imageUrl={
														advancedGallery &&
														advancedGallery[ 0 ].url
													}
													onDeleteImage={ () =>
														setAttributes( {
															advancedGallery: '',
														} )
													}
												/>
											) : (
												<MediaUpload
													onSelect={ ( media ) => {
														setAttributes( {
															advancedGallery:
																media,
														} );
													} }
													multiple={ true }
													gallery={ true }
													addToGallery={ true }
													allowedTypes={ [ 'image' ] }
													value={
														advancedGallery &&
														advancedGallery.map(
															( image ) =>
																image.id
														)
													}
													render={ ( { open } ) => (
														<Button
															className="zolo-image-upload-btn"
															onClick={ open }
														>
															<svg
																width="24"
																height="24"
																xmlns="http://www.w3.org/2000/svg"
																fillRule="evenodd"
																clipRule="evenodd"
															>
																<path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
															</svg>
															{ __(
																' Upload Photo',
																'zolo-blocks'
															) }
														</Button>
													) }
												/>
											) }
										</BaseControl>
									</PanelBody>
								</>
							) }

							{ tab.name === 'design' && (
								<>
									<PanelBody
										title={ __( 'General', 'zolo-blocks' ) }
										initialOpen={ false }
									></PanelBody>
									<PanelBody
										title={ __(
											'Container',
											'zolo-blocks'
										) }
										initialOpen={ false }
									>
										<TabPanelControl
											normalComponents={
												<>
													<BorderControl
														label={ __(
															'Border',
															'zolo-blocks'
														) }
														controlName={
															CONTAINER_BORDER
														}
														resRequiredProps={
															resRequiredProps
														}
													/>
													<ResDimensionsControl
														label={ __(
															'Border Radius',
															'zolo-blocks'
														) }
														controlName={
															CONTAINER_BORDER_RADIUS
														}
														resRequiredProps={
															resRequiredProps
														}
														forBorderRadius={ true }
													/>
													<BoxShadowControl
														controlName={
															CONTAINER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>

													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
												</>
											}
											hoverComponents={
												<>
													<NormalBGControl
														resRequiredProps={
															resRequiredProps
														}
														controlName={
															CONTAINER_HOVER_BACKGROUND
														}
														noMainBGImg={ false }
													/>
													<BorderControl
														label={ __(
															'Border',
															'zolo-blocks'
														) }
														controlName={
															CONTAINER_HOVER_BORDER
														}
														resRequiredProps={
															resRequiredProps
														}
													/>
													<BoxShadowControl
														controlName={
															CONTAINER_HOVER_BOX_SHADOW
														}
														resRequiredProps={
															resRequiredProps
														}
														enableTransition={
															false
														}
													/>
												</>
											}
										/>
									</PanelBody>
								</>
							) }

							{ tab.name === 'advanced' && (
								<>
									{ /* Advanced Controls */ }
									<PanelBody
										title={ __( 'Spacing', 'zolo-blocks' ) }
										initialOpen={ false }
									></PanelBody>
								</>
							) }
						</div>
					) }
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
