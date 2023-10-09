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
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, `${preset ? preset : ''}`, classArrayToStr(parentClasses)),
            })}
        >
            <div className="zolo-item">
                {showPhoto && (
                    <div className="zolo-image-wrap">
                        {memberPhoto && <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} className="zolo-img" />}
                        {addReviewerWebsiteLink && (
                            <div className="zolo-link-btn">
                                <a
                                    href={reviewerWebsiteLink && reviewerWebsiteLink.url}
                                    rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && 'noreferer noopener'}
                                    target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && '_blank'}
                                >
                                    <svg
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                                            fill-rule="nonzero"
                                        />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                )}

                <div className="zolo-info-wrap">
                    <div className="zolo-meta-content">
                        {showName &&
                            (addReviewerWebsiteLink ? (
                                <a
                                    href={reviewerWebsiteLink && reviewerWebsiteLink.url}
                                    rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && 'noreferer noopener'}
                                    target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && '_blank'}
                                    className="zolo-name"
                                >
                                    <RichText.Content value={memberName} />
                                </a>
                            ) : (
                                <RichText.Content value={memberName} className="zolo-name" />
                            ))}
                        {showDesignation && (
                            <div className="zolo-designation">
                                <RichText.Content value={memberDesignation} />
                            </div>
                        )}

                        {showTestimonialMessage && (
                            <div className="zolo-desc">
                                <RichText.Content value={testimonialMessage} />
                            </div>
                        )}
                    </div>
                    {showRating && (
                        <div className="zolo-review-icon">
                            <div className="zolo-rating-child" data-rating={rating}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Save;
