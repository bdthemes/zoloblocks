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
        addReviewerWebsiteLink,
        reviewerWebsiteLink,
        showRating,
        rating,
        websiteLinkIcon,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, ` ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
            })}
        >
            <div className="zolo-item">
                {showPhoto && (
                    <div className="zolo-image-wrap">
                        {memberPhoto && <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} className="zolo-img" />}
                        {addReviewerWebsiteLink && (
                            <div className="zolo-quote-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                                </svg>
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
                        <div className='zolo-user-info-wrap'>
                            {showName &&
                                (addReviewerWebsiteLink ? (
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
