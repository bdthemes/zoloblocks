/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	MediaPlaceholder,
	MediaUpload,
} from '@wordpress/block-editor';
import { Fragment, useState, useEffect } from '@wordpress/element';

import {
	ToolbarButton,
	ToolbarGroup,
	Dropdown,
	Button,
	Popover,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';
import {
	handleUniqueId,
	softMinifyCssStrings,
} from '../../../src/helpers/helper';

import { BLOCK_PREFIX } from './constants';

import Inspector from './inspector';

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } =
		props;
	const {
		uniqueId,
		preset,
		blockStyle,
		showMemberPhoto,
		memberPhoto,
		memberName,
		linkedMemberPhoto,
		enableMemberDetailsPage,
		memberLink,
		memberDesignation,
		memberShortBio,
		showSocialProfiles,
		socialProfiles,
		socialProfilesLinkTarget,
	} = attributes;

	const [popoverVisible, setPopoverVisible] = useState(false);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		handleUniqueId({
			BLOCK_PREFIX,
			uniqueId,
			setAttributes,
			clientId,
		});
	}, []);

	const blockProps = useBlockProps({
		className: classnames(className, `${uniqueId}`),
	});

	/**
	 * All Style Combination
	 */
	const desktopAllStyle = ``;
	const tabletAllStyle = ``;

	const mobileAllStyle = ``;

	const allStyle = `
		${desktopAllStyle}
		@media all and (max-width: 1024px) {
			${tabletAllStyle}
		}
		@media all and (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

	// Set All Style in "blockStyle" Attribute
	useEffect(() => {
		const styles = {
			desktop: desktopAllStyle,
			tablet: tabletAllStyle,
			mobile: mobileAllStyle,
		};
		if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
			setAttributes({ blockStyle: styles });
		}
	}, [attributes]);

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			<style>{` ${softMinifyCssStrings(allStyle)}`}</style>

			<BlockControls>
				{showMemberPhoto && memberPhoto && (
					<Fragment>
						<ToolbarGroup>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										memberPhoto: media,
									});
								}}
								allowedTypes={['image']}
								value={memberPhoto && memberPhoto.id}
								render={({ open }) => (
									<ToolbarButton
										className="components-toolbar__control"
										label={__(
											'Replace Photo',
											'zolo-blocks'
										)}
										icon="update"
										onClick={open}
									/>
								)}
							/>
							<ToolbarButton
								className="components-toolbar__control"
								label={__('Remove Photo', 'zolo-blocks')}
								icon="trash"
								onClick={() => {
									setAttributes({
										memberPhoto: null,
									});
								}}
							/>
						</ToolbarGroup>
					</Fragment>
				)}
				<ToolbarGroup>
					<ToolbarButton
						icon="admin-links"
						onClick={() => setPopoverVisible(!popoverVisible)}
					/>
				</ToolbarGroup>
				{popoverVisible && (
					<Popover
						position="bottom right"
						onFocusOutside={() => setPopoverVisible(false)}
						offset={10}
					>
						<LinkControl
							searchInputPlaceholder="Search here..."
							value={memberLink}
							settings={[
								{
									id: 'opensInNewTab',
									title: __('Open in new tab', 'zolo-blocks'),
								},
							]}
							onChange={(data) =>
								setAttributes({ memberLink: data })
							}
						/>
					</Popover>
				)}
			</BlockControls>

			<div {...blockProps}>
				<div className="zolo-item">
					<div className="zolo-image-wrap">
						{showMemberPhoto &&
							(memberPhoto ? (
								<img
									src={memberPhoto.url}
									alt={memberPhoto.alt || 'Team Member'}
								/>
							) : (
								<MediaPlaceholder
									icon="format-image"
									labels={{
										title: __('Add Photo', 'zolo-blocks'),
										instructions: '',
									}}
									onSelect={(media) => {
										setAttributes({
											memberPhoto: media,
										});
									}}
									accept="image/*"
									allowedTypes={['image']}
								/>
							))}
						<div className="zolo-hover-content">
							<div className="zolo-name">
								<RichText
									className="zolo-team-member-name"
									value={memberName}
									onChange={(name) =>
										setAttributes({ memberName: name })
									}
									placeholder={__('Name...', 'zolo-blocks')}
									allowedFormats={[
										'core/bold',
										'core/italic',
									]}
								/>
							</div>
							<div className="zolo-designation">
								<RichText
									className="zolo-team-member-designation"
									value={memberDesignation}
									onChange={(designation) =>
										setAttributes({
											memberDesignation: designation,
										})
									}
									placeholder={__(
										'Designation...',
										'zolo-blocks'
									)}
									allowedFormats={[
										'core/bold',
										'core/italic',
									]}
								/>
							</div>
							{showSocialProfiles && (
								<div className="zolo-social-share">
									{socialProfiles &&
										socialProfiles.map((profile, index) => {
											return (
												<a
													href={profile.link}
													key={index}
													rel={
														socialProfilesLinkTarget &&
														'noreferer'
													}
												>
													<i
														className={`fa-brands fa-${profile.icon}`}
													/>
												</a>
											);
										})}
								</div>
							)}
							{enableMemberDetailsPage && (
								<div className="zolo-link-btn">
									<a
										href={memberLink && memberLink.url}
										rel={
											memberLink &&
											memberLink.newTab &&
											'noreferer'
										}
										target={
											memberLink &&
											memberLink.newTab &&
											'_blank'
										}
									>
										<i className="fa-solid fa-arrow-right" />
									</a>
								</div>
							)}
						</div>
					</div>
					<div className="zolo-info-wrap">
						<div className="zolo-content">
							<RichText
								className="zolo-name"
								value={memberName}
								onChange={(name) =>
									setAttributes({ memberName: name })
								}
								placeholder={__('Name...', 'zolo-blocks')}
								allowedFormats={['core/bold', 'core/italic']}
							/>
							<RichText
								className="zolo-designation"
								value={memberDesignation}
								onChange={(designation) =>
									setAttributes({
										memberDesignation: designation,
									})
								}
								placeholder={__(
									'Designation...',
									'zolo-blocks'
								)}
								allowedFormats={['core/bold', 'core/italic']}
							/>
							<RichText
								className="zolo-desc"
								value={memberShortBio}
								onChange={(bio) =>
									setAttributes({
										memberShortBio: bio,
									})
								}
								placeholder={__('short bio...', 'zolo-blocks')}
								allowedFormats={['core/bold', 'core/italic']}
							/>
						</div>
						{enableMemberDetailsPage && (
							<div className="zolo-link-btn">
								<a href="#">
									<i className="fa-solid fa-arrow-right" />
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
