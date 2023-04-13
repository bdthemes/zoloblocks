import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const {
		uniqueId,
		preset,
		blockStyle,
		memberPhoto,
		memberName,
		enableMemberDetailsPage,
		memberDetailPageLink,
		memberDesignation,
		showShortBio,
		memberShortBio,
		showSocialProfiles,
		socialProfiles,
		socialProfilesLinkTarget,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: uniqueId,
			})}
		>
			<div className="zolo-item">
				<div className="zolo-image-wrap">
					{memberPhoto && (
						<img
							src={memberPhoto.url}
							alt={memberPhoto.alt || 'Team Member'}
						/>
					)}
					<div className="zolo-hover-content">
						{enableMemberDetailsPage ? (
							<a
								href={
									memberDetailPageLink &&
									memberDetailPageLink.url
								}
								rel={
									memberDetailPageLink &&
									memberDetailPageLink.opensInNewTab &&
									'noreferrer noopener'
								}
								target={
									memberDetailPageLink &&
									memberDetailPageLink.opensInNewTab &&
									'_blank'
								}
								className="zolo-name"
							>
								<RichText.Content value={memberName} />
							</a>
						) : (
							<RichText.Content
								tagName="div"
								value={memberName}
								className="zolo-name"
							/>
						)}
						<RichText.Content
							tagName="div"
							value={memberDesignation}
							className="zolo-designation"
						/>
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
													'noreferer noopener'
												}
												target={
													socialProfilesLinkTarget &&
													'_blank'
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
									href={
										memberDetailPageLink &&
										memberDetailPageLink.url
									}
									rel={
										memberDetailPageLink &&
										memberDetailPageLink.opensInNewTab &&
										'noreferer noopener'
									}
									target={
										memberDetailPageLink &&
										memberDetailPageLink.opensInNewTab &&
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
							{enableMemberDetailsPage ? (
								<a
									href={
										memberDetailPageLink &&
										memberDetailPageLink.url
									}
									rel={
										memberDetailPageLink &&
										memberDetailPageLink.opensInNewTab &&
										'noreferrer noopener'
									}
									target={
										memberDetailPageLink &&
										memberDetailPageLink.opensInNewTab &&
										'_blank'
									}
								>
									<RichText.Content value={memberName} />
								</a>
							) : (
								<RichText.Content value={memberName} />
							)}
						</div>
						<div className="zolo-designation">
							<RichText.Content value={memberDesignation} />
						</div>
						{showShortBio && (
							<div className="zolo-desc">
								<RichText.Content value={memberShortBio} />
							</div>
						)}
					</div>
					{enableMemberDetailsPage && (
						<div className="zolo-link-btn">
							<a
								href={
									memberDetailPageLink &&
									memberDetailPageLink.url
								}
								rel={
									memberDetailPageLink &&
									memberDetailPageLink.opensInNewTab &&
									'noreferer noopener'
								}
								target={
									memberDetailPageLink &&
									memberDetailPageLink.opensInNewTab &&
									'_blank'
								}
							>
								<i className="fa-solid fa-arrow-right" />
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Save;
