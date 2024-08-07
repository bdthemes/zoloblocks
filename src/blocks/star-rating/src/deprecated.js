import attributes from './attributes';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const deprecated = {
    attributes: {
        ...attributes,
        rating: {
            type: 'number',
            default: 5,
        },
    },

    save: ({ attributes }) => {
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
                        <div className="zolo-star-rating" data-rating={rating}></div>
                    </div>
                </div>
            </div>
        );
    },
};

export default deprecated;
