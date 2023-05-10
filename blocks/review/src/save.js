import { RichText, useBlockProps } from '@wordpress/block-editor';
// const { StarRating } = window.zoloModule;

const Save = ({ attributes }) => {
	const {
		uniqueId,
		preset,
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
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: uniqueId + ` ${preset ? preset : ''}`,
			})}
		>
			<div className="zolo-item">
				<div className="zolo-image-wrap">
					{memberPhoto && (
						<img
							src={memberPhoto.url}
							alt={memberPhoto.alt || 'Reviewer'}
							className="zolo-img"
						/>
					)}
					{addReviewerWebsiteLink && (
						<div className="zolo-link-btn">
							<a href="#">
								<svg
									version="1.1"
									width="256"
									height="256"
									viewBox="0 0 256 256"
								>
									<path d="M 59.51 10.921 c -0.63 0.537 -0.708 1.483 -0.171 2.114 L 85.255 43.5 H 1.5 C 0.671 43.5 0 44.171 0 45 s 0.671 1.5 1.5 1.5 h 83.755 L 59.339 76.965 c -0.536 0.63 -0.461 1.577 0.171 2.114 c 0.631 0.537 1.577 0.46 2.114 -0.17 l 28.019 -32.938 c 0.014 -0.016 0.019 -0.038 0.032 -0.054 c 0.07 -0.09 0.138 -0.182 0.187 -0.288 c 0.012 -0.026 0.016 -0.053 0.026 -0.079 c 0.013 -0.032 0.022 -0.063 0.032 -0.095 C 89.968 45.306 90 45.153 90 45 c 0 0 0 0 0 0 s 0 0 0 0 c 0 -0.153 -0.032 -0.306 -0.08 -0.455 c -0.01 -0.032 -0.019 -0.063 -0.032 -0.094 c -0.01 -0.026 -0.015 -0.053 -0.027 -0.079 c -0.049 -0.106 -0.117 -0.198 -0.187 -0.288 c -0.013 -0.017 -0.018 -0.038 -0.032 -0.054 L 61.624 11.092 C 61.087 10.461 60.141 10.384 59.51 10.921 z" />
								</svg>
							</a>
						</div>
					)}
				</div>
				<div className="zolo-info-wrap">
					<div className="zolo-meta-content">
						{addReviewerWebsiteLink ? (
							<a
								href={
									reviewerWebsiteLink &&
									reviewerWebsiteLink.url
								}
								rel={
									reviewerWebsiteLink &&
									reviewerWebsiteLink.newTab &&
									'noreferer'
								}
								target={
									reviewerWebsiteLink &&
									reviewerWebsiteLink.newTab &&
									'_blank'
								}
								className="zolo-name"
							>
								<RichText.Content value={memberName} />
							</a>
						) : (
							<RichText.Content value={memberName} />
						)}
						{showDesignation && (
							<div className="zolo-designation">
								<RichText.Content value={memberDesignation} />
							</div>
						)}

						{showTestimonialMessage && (
							<div className="zolo-desc">
								<RichText.Content value={testimonialMessage} />
							</div>
						)}
					</div>
					{showRating && (
						<div className="zolo-review-icon">
							rating goes here
							{/* <StarRating rating={rating} total={5} /> */}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Save;
