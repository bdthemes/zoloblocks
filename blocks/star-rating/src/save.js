import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
// const { StarRating } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, showTitle, title, titleTag, rating, titlePosition } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId),
            })}
        >
            <div className={classnames('start-rating-wrapper', titlePosition)}>
                <div className={classnames('star-rating-inner', titlePosition)}>
                    {showTitle && <RichText.Content tagName={titleTag} className="start-rating-title" value={title} />}
                    <div className="zolo-star-rating" data-rating={rating}></div>
                </div>
            </div>
        </div>
    );
};

export default Save;
