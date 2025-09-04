import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, sanitizeText, sanitizeUrl } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
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
        presetFourLayout,
        showQuote,
    } = attributes;

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    'swiper-slide',
                    `${preset ? preset : ''}`,
                    classArrayToStr(parentClasses),
                    `${preset === 'style-3' ? presetFourLayout : ''}`
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
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
                                    href={reviewerWebsiteLink && reviewerWebsiteLink.url && sanitizeUrl(reviewerWebsiteLink.url)}
                                    rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab ? 'noreferer noopener' : undefined}
                                    target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab ? '_blank' : undefined}
                                    className="zolo-name has-link"
                                    title={sanitizeText(memberName)}
                                >
                                    <RichText.Content value={memberName} />
                                </a>
                            ) : (
                                <div className="zolo-name">
                                    <RichText.Content value={memberName} />
                                </div>
                            ))}

                        {showDesignation && preset !== 'style-3' && preset !== 'style-5' && (
                            <div className="zolo-designation">
                                <RichText.Content value={memberDesignation} />
                            </div>
                        )}

                        {showRating && (preset === 'style-3' || preset === 'style-5') && (
                            <div className="zolo-review-icon">
                                <div className="zolo-rating-child" data-rating={rating}></div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="zolo-info-wrap">
                    <div className="zolo-meta-content">
                        {showRating && preset !== 'style-3' && preset !== 'style-5' && (
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
                {showQuote && preset === 'style-5' && (
                    <div className="zolo-review-quote-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-quote"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                    </div>
                )}
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
