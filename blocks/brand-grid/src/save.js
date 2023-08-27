import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: `zb-brand-grid-wrap ${uniqueId} ${preset}`,
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
