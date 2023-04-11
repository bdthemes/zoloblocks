import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const { uniqueId, preset } = attributes;

	return <div {...useBlockProps.save()}>Save</div>;
};

export default Save;
