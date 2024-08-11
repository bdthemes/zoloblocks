import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        showTitle,
        title,
        titleTag,
        rating,
        titlePosition,
        zoloId,
        showIcon,
        iconType,
        icon,
        iconTypeImage,
        imageRes,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className={classnames('start-rating-wrapper', titlePosition)}>
                <div className={classnames('star-rating-inner', titlePosition)}>
                    {showTitle && <RichText.Content tagName={titleTag} className="start-rating-title" value={title} />}
                    {showIcon && (
                        <span className={`star-rating_inner-icon ${iconType !== 'icon' ? 'zolo-image' : 'zolo-icon'}`}>
                            {iconType == 'icon' ? (
                                <>{icon && <DisplayZoloIcon icon={icon} />}</>
                            ) : (
                                iconTypeImage && (
                                    <img
                                        src={
                                            iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                ? iconTypeImage.sizes[imageRes].url
                                                : iconTypeImage.url
                                        }
                                        alt={iconTypeImage.alt || 'star rating icon'}
                                        className={`wp-image-${iconTypeImage.id}`}
                                        loading="lazy"
                                    />
                                )
                            )}
                        </span>
                    )}
                    <div
                        className="zolo-star-rating"
                        {...(rating && {
                            'data-rating': rating,
                        })}
                    ></div>
                </div>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
