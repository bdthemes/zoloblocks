import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const { DisplayIcon } = window.zoloModule;

const Save = ( { attributes } ) => {
	const {
		uniqueId,
		preset,
		titleTag,
		link,
		showIcon,
		mainIcon,
		buttonIcon,
		iconPosition,
		buttonPosition,
		iconType,
		iconTypeImage,
		iconBoxTitle,
		iconBoxDescription,
		buttonText,
		buttonLink,
		globalLink,
	} = attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${ linkRel } nofollow` : linkRel;

	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
