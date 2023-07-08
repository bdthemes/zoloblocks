/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	TextControl,
	TextareaControl,
	BaseControl,
	Button,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
	ResAlignmentControl,
	ResRangeControl,
	ColorControl,
	BorderControl,
	ResDimensionsControl,
	TypographyDropdown,
	BoxShadowControl,
	ImageAvatar,
	NormalBGControl,
	HeaderTabs,
} = window.zoloModule;

import objAttributes from './attributes';
import {
	CONTAINER_BACKGROUND,
	CONTENT_ALIGNMENT,
	CONTAINER_PADDING,
	CONTAINER_MARGIN,
	CONTAINER_BORDER,
	CONTAINER_BORDER_RADIUS,
	CONTAINER_BOX_SHADOW,
	REVIEWER_PHOTO_BG,
	REVIEWER_PHOTO_BORDER,
	REVIEWER_PHOTO_BORDER_RADIUS,
	REVIEWER_PHOTO_BOX_SHADOW,
	REVIEWER_PHOTO_MARGIN,
	REVIEWER_PHOTO_PADDING,
	REVIEWER_NAME_MARGIN,
	REVIEWER_DESIGNATION_MARGIN,
	REVIEWER_TESTIMONIAL_MARGIN,
	ICONS_SIZE,
} from './constants';

import {
	REVIEWER_NAME_TYPOGRAPHY,
	REVIEWER_DESIGNATION_TYPOGRAPHY,
	REVIEWER_MESSAGE_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resMode,
		memberPhoto,
		memberName,
		showDesignation,
		showTestimonialMessage,
		testimonialMessage,
		memberDesignation,
		addReviewerWebsiteLink,
		reviewerWebsiteLink,
		showRating,
		rating,
		nameColor,
		designationColor,
		testimonialMessageColor,
		activeRatingColor,
		inactiveRatingColor,
	} = attributes;

	const resRequiredProps = {
		resMode,
		setAttributes,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<HeaderTabs
				generalTab={
					<>
						<PanelBody
							title={__('Content', 'zolo-blocks')}
							initialOpen={false}
						>
							<BaseControl label={__('Photo', 'zolo-blocks')}>
								{memberPhoto ? (
									<ImageAvatar
										imageUrl={
											memberPhoto && memberPhoto.url
										}
										onDeleteImage={() =>
											setAttributes({
												memberPhoto: null,
											})
										}
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
								)}
							</BaseControl>
							<TextControl
								label={__('Name', 'zolo-blocks')}
								onChange={(name) =>
									setAttributes({
										memberName: name,
									})
								}
								value={memberName}
								placeholder={__('Name..', 'zolo-blocks')}
							/>
							{showDesignation && (
								<TextControl
									label={__('Designation', 'zolo-blocks')}
									onChange={(d) =>
										setAttributes({
											memberDesignation: d,
										})
									}
									value={memberDesignation}
									placeholder={__(
										'Designation..',
										'zolo-blocks'
									)}
								/>
							)}
							{showTestimonialMessage && (
								<TextareaControl
									label={__(
										'Testimonial Message',
										'zolo-blocks'
									)}
									value={testimonialMessage}
									onChange={(bio) =>
										setAttributes({
											testimonialMessage: bio,
										})
									}
									placeholder={__(
										'Testimonial Message..',
										'zolo-blocks'
									)}
								/>
							)}
							{showRating && (
								<RangeControl
									label={__('Rating', 'zolo-blocks')}
									value={rating}
									onChange={(rating) =>
										setAttributes({
											rating: rating,
										})
									}
									min={1}
									max={5}
									step={0.1}
								/>
							)}
							{addReviewerWebsiteLink && (
								<BaseControl
									label={__(
										'Reviewer Website Link',
										'zolo-blocks'
									)}
								>
									<LinkControl
										searchInputPlaceholder="Search here..."
										value={reviewerWebsiteLink}
										settings={[
											{
												id: 'opensInNewTab',
												title: __(
													'Open in new tab',
													'zolo-blocks'
												),
											},
										]}
										onChange={(data) =>
											setAttributes({
												reviewerWebsiteLink: data,
											})
										}
									/>
								</BaseControl>
							)}
						</PanelBody>
					</>
				}
				styleTab={
					<>
						<PanelBody
							title={__('General', 'zolo-blocks')}
							initialOpen={false}
						>
							<ResAlignmentControl
								label={__('Content Alignmet', 'zolo-blocks')}
								controlName={CONTENT_ALIGNMENT}
								resRequiredProps={resRequiredProps}
								alignOptions={[
									{
										label: 'Left',
										value: 'left',
									},
									{
										label: 'Center',
										value: 'center',
									},
									{
										label: 'Right',
										value: 'right',
									},
									{
										label: 'Justify',
										value: 'justify',
									},
								]}
							/>
						</PanelBody>
						<PanelBody
							title={__('Container', 'zolo-blocks')}
							initialOpen={false}
						>
							<BorderControl
								label={__('Border', 'zolo-blocks')}
								controlName={CONTAINER_BORDER}
								resRequiredProps={resRequiredProps}
							/>
							<ResDimensionsControl
								label={__('Border Radius', 'zolo-blocks')}
								controlName={CONTAINER_BORDER_RADIUS}
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
						</PanelBody>
						<PanelBody
							title={__('Photo', 'zolo-blocks')}
							initialOpen={false}
						>
							<BorderControl
								label={__('Border', 'zolo-blocks')}
								controlName={REVIEWER_PHOTO_BORDER}
								resRequiredProps={resRequiredProps}
							/>
							<ResDimensionsControl
								label={__('Border Radius', 'zolo-blocks')}
								controlName={REVIEWER_PHOTO_BORDER_RADIUS}
								resRequiredProps={resRequiredProps}
								forBorderRadius={true}
							/>
							<BoxShadowControl
								controlName={REVIEWER_PHOTO_BOX_SHADOW}
								resRequiredProps={resRequiredProps}
								enableTransition={false}
							/>
							<NormalBGControl
								resRequiredProps={resRequiredProps}
								controlName={REVIEWER_PHOTO_BG}
								noMainBGImg={true}
							/>
							<ResDimensionsControl
								label={__('Padding', 'zolo-blocks')}
								controlName={REVIEWER_PHOTO_PADDING}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={REVIEWER_PHOTO_MARGIN}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
						</PanelBody>
						<PanelBody
							title={__('Name', 'zolo-blocks')}
							initialOpen={false}
						>
							<TypographyDropdown
								label={__('Typography', 'zolo-blocks')}
								typoPrefixConstant={REVIEWER_NAME_TYPOGRAPHY}
								resRequiredProps={resRequiredProps}
							/>
							<ColorControl
								label={__('Color', 'zolo-blocks')}
								color={nameColor}
								onChange={(color) =>
									setAttributes({
										nameColor: color,
									})
								}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={REVIEWER_NAME_MARGIN}
								resRequiredProps={resRequiredProps}
							/>
						</PanelBody>
						{showDesignation && (
							<PanelBody
								title={__('Designation', 'zolo-blocks')}
								initialOpen={false}
							>
								<TypographyDropdown
									label={__('Typography', 'zolo-blocks')}
									typoPrefixConstant={
										REVIEWER_DESIGNATION_TYPOGRAPHY
									}
									resRequiredProps={resRequiredProps}
								/>
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={designationColor}
									onChange={(color) =>
										setAttributes({
											designationColor: color,
										})
									}
								/>
								<ResDimensionsControl
									label={__('Margin', 'zolo-blocks')}
									controlName={REVIEWER_DESIGNATION_MARGIN}
									resRequiredProps={resRequiredProps}
								/>
							</PanelBody>
						)}
						{showTestimonialMessage && (
							<PanelBody
								title={__('Testimonial Message', 'zolo-blocks')}
								initialOpen={false}
							>
								<TypographyDropdown
									label={__('Typography', 'zolo-blocks')}
									typoPrefixConstant={
										REVIEWER_MESSAGE_TYPOGRAPHY
									}
									resRequiredProps={resRequiredProps}
								/>
								<ColorControl
									label={__('Color', 'zolo-blocks')}
									color={testimonialMessageColor}
									onChange={(color) =>
										setAttributes({
											testimonialMessageColor: color,
										})
									}
								/>
								<ResDimensionsControl
									label={__('Margin', 'zolo-blocks')}
									controlName={REVIEWER_TESTIMONIAL_MARGIN}
									resRequiredProps={resRequiredProps}
								/>
							</PanelBody>
						)}
						{showRating && (
							<PanelBody
								title={__('Rating', 'zolo-blocks')}
								initialOpen={false}
							>
								<ResRangeControl
									label={__('Icon Size', 'zolo-blocks')}
									controlName={ICONS_SIZE}
									resRequiredProps={resRequiredProps}
								/>
								<ColorControl
									label={__(
										'Active Star Color',
										'zolo-blocks'
									)}
									color={activeRatingColor}
									onChange={(color) =>
										setAttributes({
											activeRatingColor: color,
										})
									}
								/>
								<ColorControl
									label={__(
										'Inactive Star Color',
										'zolo-blocks'
									)}
									color={inactiveRatingColor}
									onChange={(color) =>
										setAttributes({
											inactiveRatingColor: color,
										})
									}
								/>
							</PanelBody>
						)}
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
								controlName={CONTAINER_PADDING}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
							<ResDimensionsControl
								label={__('Margin', 'zolo-blocks')}
								controlName={CONTAINER_MARGIN}
								resRequiredProps={resRequiredProps}
								forBorderRadius={false}
							/>
						</PanelBody>
					</>
				}
			/>
		</InspectorControls>
	);
}
export default Inspector;
