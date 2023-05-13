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

const Save = ( { attributes } ) => {
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
	const rel = link && link.addNoFollow ? `${ linkRel } nofollow` : linkRel;
	return (
		<div { ...useBlockProps.save() }>
			<div
				class={ `zolo-advanced-social-share zolo-advanced-social-${ preset } ${ uniqueId } ${ BLOCK_PREFIX } ` }
			>
				{ socialProfiles &&
					socialProfiles.map( ( profile, index ) => {
						return (
							<a
								href={ profile.link }
								key={ index }
								rel={ socialProfilesLinkTarget && 'noreferer' }
								className="zolo-social-item"
							>
								{ ( socialText == 'icon' ||
									socialText == 'icontext' ) && (
									<DisplayIcon icon={ profile.icon } />
								) }
								{ socialText != 'icon' && (
									<span className="zolo-social-text">
										{ profile.text }
									</span>
								) }
							</a>
						);
					} ) }
			</div>
		</div>
	);
};

export default Save;
