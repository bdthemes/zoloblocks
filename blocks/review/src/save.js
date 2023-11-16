import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayIcon } = window.zoloModule;

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
        showQuoteIcon,
        reviewerWebsiteLink,
        showRating,
        rating,
        quoteIcon,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, ` ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
            })}
        >
            <div className="zolo-item">
                {showPhoto && (
                    <div className="zolo-image-quote-wrap">
                        <div className="zolo-image-wrap">
                            {memberPhoto && <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} className="zolo-img" />}
                        </div>
                        {showQuoteIcon && (
                            <div className="zolo-quote-icon">
                                <DisplayIcon icon={quoteIcon} />
                            </div>
                        )}
                    </div>
                )}
                <div className="zolo-info-wrap">
                    <div className="zolo-meta-content">
                        {showRating && (
                            <div className="zolo-review-icon">
                                <div className="zolo-rating" data-rating={rating}></div>
                            </div>
                        )}
                        {showTestimonialMessage && (
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
