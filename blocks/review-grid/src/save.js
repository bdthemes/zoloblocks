import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const Save = ({ attributes }) => {
    const { uniqueId } = attributes;
    return (
        <div
            {...useBlockProps.save({
                className: uniqueId,
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
