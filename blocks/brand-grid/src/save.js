import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const { uniqueId, preset } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={ `zb-brand-grid-front zb-brand-${ preset } ${ uniqueId }` }
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
