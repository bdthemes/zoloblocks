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
				class={ `zolo-advanced-social-share zolo-advanced-social-1 ${ uniqueId } ${ BLOCK_PREFIX } ${ preset }` }
			>
				<a href="#" class="zolo-social-item zolo-fb">
					<span>
						<DisplayIcon icon={ mainIcon } />
					</span>
					<RichText.Content
						className={ `zolo-social-text` }
						tagName="span"
						value={ label }
					/>
				</a>
			</div>
		</div>
	);
};

export default Save;
