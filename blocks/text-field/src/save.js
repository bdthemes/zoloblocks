import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, showTitle, title, titleTag, rating, titlePosition, zoloId } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
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
