import { RichText, useBlockProps } from '@wordpress/block-editor';
const Save = ({ attributes }) => {
    const {} = attributes;

    return <div {...useBlockProps.save()}>Test Block Save</div>;
};

export default Save;
