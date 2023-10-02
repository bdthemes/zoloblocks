import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
// const { StarRating } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId),
            })}
        >
            save
        </div>
    );
};

export default Save;
