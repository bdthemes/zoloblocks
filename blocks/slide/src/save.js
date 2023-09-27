import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
// const { StarRating } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, 'swiper-slide'),
            })}
        >
            <div className="swiper-content-outer">
                <InnerBlocks.Content />
            </div>
        </div>
    );
};

export default Save;
