import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        stylePreset,
        preset,
        parentClasses,
        showPhoto,
        memberPhoto,
        showName,
        memberName,
        showDesignation,
        showTestimonialMessage,
        testimonialMessage,
        memberDesignation,
        showQuoteIcon,
        reviewerWebsiteLink,
        showRating,
        rating,
        quoteIcon,
        zoloId,
        imageRes,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, ` ${preset && stylePreset === '' ? preset : ''} ${stylePreset !== '' && stylePreset}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-item">
                {showPhoto && stylePreset !== 'style-preset-2' &&(
                    <div className="zolo-image-quote-wrap">
                        <div className="zolo-image-wrap">
                            {memberPhoto && (
                                <img
                                    src={
                                        memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url
                                    }
                                    alt={memberPhoto.alt || memberName}
                                    className={`zolo-img wp-image-${memberPhoto.id}`}
                                    loading="lazy"
                                />
                            )}
                        </div>
                        {showQuoteIcon && (
                            <div className="zolo-quote-icon">
                                <DisplayZoloIcon icon={quoteIcon} />
                            </div>
                        )}
                    </div>
                )}

                {showTestimonialMessage && stylePreset ==='style-preset-2' &&(
                    <>
                        <div className='zolo-desc-quote-wrap'>
                           {showQuoteIcon && (
                                <div className="zolo-quote-icon">
                                    <DisplayZoloIcon icon={quoteIcon} />
                                </div>
                            )}
                            <div className="zolo-desc">
                                <RichText.Content value={testimonialMessage} />
                            </div>
                        </div>
                    </>
                )}

                <div className="zolo-info-wrap">
                       {showPhoto && stylePreset === 'style-preset-2' &&(
                        <div className="zolo-image-wrap">
                            {memberPhoto && (
                                <img
                                    src={
                                        memberPhoto.sizes && memberPhoto.sizes[imageRes] ? memberPhoto.sizes[imageRes].url : memberPhoto.url
                                    }
                                    alt={memberPhoto.alt || memberName}
                                    className={`zolo-img wp-image-${memberPhoto.id}`}
                                    loading="lazy"
                                />
                            )}
                        </div>
                    )}
                    <div className="zolo-meta-content">
                        {showRating &&(
                            <div className="zolo-review-icon">
                                <div className="zolo-rating" data-rating={rating}></div>
                            </div>
                        )}
                        {showTestimonialMessage && stylePreset !=='style-preset-2' && (
                            <div className="zolo-desc">
                                <RichText.Content value={testimonialMessage} />
                            </div>
                        )}
                        <div className="zolo-user-info-wrap">
                            {showName &&
                                (showQuoteIcon ? (
                                    <a
                                        href={reviewerWebsiteLink && reviewerWebsiteLink.url}
                                        rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && 'noreferer noopener'}
                                        target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && '_blank'}
                                        className="zolo-name has-link"
                                        title={memberName}
                                    >
                                        <RichText.Content value={memberName} />
                                    </a>
                                ) : (
                                    <div className="zolo-name">
                                        <RichText.Content value={memberName} />
                                    </div>
                                ))}
                            {showDesignation && (
                                <div className="zolo-designation">
                                    <RichText.Content value={memberDesignation} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
