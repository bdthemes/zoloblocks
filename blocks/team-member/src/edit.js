/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
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
		enableMemberLink,
		enableMemberDetailsPage,
		memberLink,
		memberDesignation,
		memberShortBio,
		showSocialProfiles,
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
				<div className="zolo-advanced-member-wrap zolo-advanced-member-style-1">
					<div className="zolo-item">
						<div className="zolo-image-wrap">
							{showMemberPhoto &&
								(memberPhoto ? (
									<img
										src={memberPhoto.url}
										alt={memberPhoto.alt || 'Team Member'}
									/>
								) : (
									<MediaUpload
										onSelect={(media) => {
											setAttributes({
												memberPhoto: media,
											});
										}}
										allowedTypes={['image']}
										value={memberPhoto && memberPhoto.id}
										render={({ open }) => (
											<Button
												className="zolo-image-upload-btn"
												onClick={open}
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
												{__(
													' Upload Photo',
													'zolo-blocks'
												)}
											</Button>
										)}
									/>
								))}
							<div className="zolo-hover-content">
								<div className="zolo-name">
									<RichText
										tagName="span"
										className="zolo-team-member-name"
										value={memberName}
										onChange={(name) =>
											setAttributes({ memberName: name })
										}
										placeholder={__(
											'Name...',
											'zolo-blocks'
										)}
										allowedFormats={[
											'core/bold',
											'core/italic',
										]}
									/>
								</div>
								<div className="zolo-designation">
									<RichText
										tagName="span"
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
								<div className="zolo-social-share">
									<a href="#">
										<i className="fa-brands fa-facebook-f" />
									</a>
									<a href="#">
										<i className="fa-brands fa-twitter" />
									</a>
									<a href="#">
										<i className="fa-brands fa-instagram" />
									</a>
								</div>
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
								<div className="zolo-name">
									<RichText
										tagName="span"
										className="zolo-team-member-name"
										value={memberName}
										onChange={(name) =>
											setAttributes({ memberName: name })
										}
										placeholder={__(
											'Name...',
											'zolo-blocks'
										)}
										allowedFormats={[
											'core/bold',
											'core/italic',
										]}
									/>
								</div>
								<div className="zolo-designation">
									<RichText
										tagName="span"
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
								<div className="zolo-desc">
									<RichText
										className="zolo-team-member-short-bio"
										value={memberShortBio}
										onChange={(bio) =>
											setAttributes({
												memberShortBio: bio,
											})
										}
										placeholder={__(
											'short bio...',
											'zolo-blocks'
										)}
										allowedFormats={[
											'core/bold',
											'core/italic',
										]}
									/>
								</div>
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
			</div>
		</>
	);
}
