/**
 * Internal depencencies
 */
const {
	DisplayIcon,
	generateResAlignmentStyle,
	generateResRangeStyle,
	generateBorderStyle,
	handleUniqueId,
	softMinifyCssStrings,
} = window.zoloModule;

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BLOCK_PREFIX } from './constants';

const Save = ({ attributes }) => {
	const {
		uniqueId,
		preset,
		label,
		link,
		socialProfiles,
		socialProfilesLinkTarget,
		socialText,
		showIcon,
		mainIcon,
		iconPosition,
		bgColor,
		textColor,
	} = attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${linkRel} nofollow` : linkRel;
	return (
		<div {...useBlockProps.save()}>
			<div
				class={`zolo-advanced-social-share zolo-advanced-social-${preset} ${uniqueId} ${BLOCK_PREFIX} `}
			>
				{socialProfiles &&
					socialProfiles.map((profile, index) => {
						let socialName = Object.keys(profile.icon)[0];
						return (
							<a
								href={profile.link && profile.link.url}
								key={index}
								target={
									profile.link &&
									profile.link.openInNewTab &&
									'_blank'
								}
								rel={
									profile.link &&
									profile.link.openInNewTab &&
									'noopener noreferrer'
								}
								className={`zolo-social-item zolo-${socialName}`}
							>
								{socialText !== 'none' && (
									<span className="zolo-social-icon">
										<DisplayIcon icon={profile.icon} />
									</span>
								)}
								{socialText !== 'iconOnly' && (
									<span className="zolo-social-text">
										{profile.text}
									</span>
								)}
							</a>
						);
					})}
			</div>
		</div>
	);
};

export default Save;
