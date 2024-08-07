import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
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
        addReviewerWebsiteLink,
        reviewerWebsiteLink,
        showRating,
        rating,
        zoloId,
        imageRes,
        presetFourLayout
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, 'swiper-slide',`${preset ? preset : ''}`, classArrayToStr(parentClasses), `${
                    preset === 'style-3' ? presetFourLayout : ''
                }`),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-item">
                <div className="zolo-review-img-meta-wrap">
                    {showPhoto && (
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
                    <div className="zolo-review-meta-content">
                        {showName &&
                            (addReviewerWebsiteLink ? (
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

                            {showDesignation && preset !== 'style-3' && (
                                <div className="zolo-designation">
                                    <RichText.Content value={memberDesignation} />
                                </div>
                            )}

                            {showRating && preset === 'style-3' && (
                                <div className="zolo-review-icon">
                                    <div className="zolo-rating-child" data-rating={rating}></div>
                                </div>
                            )}

                    </div>
                </div>

                <div className="zolo-info-wrap">
                    <div className="zolo-meta-content">
                        {showRating && preset !== 'style-3' && (
                            <div className="zolo-review-icon">
                                <div className="zolo-rating-child" data-rating={rating}></div>
                            </div>
                        )}

                        {showTestimonialMessage && (
                            <div className="zolo-desc">
                                <RichText.Content value={testimonialMessage} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
