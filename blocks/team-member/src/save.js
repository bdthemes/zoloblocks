import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const {
		uniqueId,
		preset,
		blockStyle,
		showMemberPhoto,
		memberPhoto,
		memberName,
		linkedMemberPhoto,
		linkedMemberName,
		enableMemberDetailsPage,
		memberLink,
		memberDesignation,
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
					{showMemberPhoto &&
						memberPhoto &&
						(linkedMemberPhoto ? (
							<a
								href={memberLink.url}
								rel={memberLink.opensInNewTab && 'noreferrer'}
								target={memberLink.opensInNewTab && '_blank'}
							>
								<img
									src={memberPhoto.url}
									alt={memberPhoto.alt || 'Team Member'}
								/>
							</a>
						) : (
							<img
								src={memberPhoto.url}
								alt={memberPhoto.alt || 'Team Member'}
							/>
						))}
					<div className="zolo-hover-content">
						<div className="zolo-name">
							{linkedMemberName ? (
								<a
									href={memberLink.url}
									rel={
										memberLink.opensInNewTab && 'noreferrer'
									}
									target={
										memberLink.opensInNewTab && '_blank'
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
						<div className="zolo-name">
							<RichText.Content value={memberName} />
						</div>
						<div className="zolo-designation">
							<RichText.Content value={memberDesignation} />
						</div>
						<div className="zolo-desc">
							<RichText.Content value={memberShortBio} />
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
	);
};

export default Save;
