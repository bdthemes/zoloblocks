import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: uniqueId,
            })}
        >
            Save
        </div>
    );
};

export default Save;
