import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const { DisplayIcon } = window.zoloModule;

const Save = ( { attributes } ) => {
	const { uniqueId, preset } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={ `zb-brand-grid-front zb-brand-style-1 ${ uniqueId } ${ preset }` }
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
