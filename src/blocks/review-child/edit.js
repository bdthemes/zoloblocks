/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { StarRating, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Filter Slide Item block on Register
 * and pass the block as a child of swiper-slide
 */
const zoloReviewCarousel = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        if ('zolo/review-child' === props.name) {
            return (
                <div className="swiper-slide">
                    <BlockListBlock {...props} />
                </div>
            );
        }

        return <BlockListBlock {...props} />;
    };
}, 'zoloReviewCarousel');

addFilter('editor.BlockListBlock', 'zolo/review-child', zoloReviewCarousel);

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
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
        imageRes,
        presetFourLayout,
        showQuote,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} ${preset ? preset : ''}`,
            classArrayToStr(parentClasses),
            `${preset === 'style-3' ? presetFourLayout : ''}`
        ),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            showDesignation: context['zolo/showDesignation'],
            showTestimonialMessage: context['zolo/showTestimonialMessage'],
            preset: context['zolo/preset'],
            showPhoto: context['zolo/showPhoto'],
            showName: context['zolo/showName'],
            showRating: context['zolo/showRating'],
            showQuote: context['zolo/showQuote'],
            addReviewerWebsiteLink: context['zolo/addReviewerWebsiteLink'],
            presetFourLayout: context['zolo/presetFourLayout'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <BlockControls>
                {memberPhoto && (
                    <>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    </>
                )}
            </BlockControls>
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <Style props={props} />
                <div className="zolo-item">
                    <div className="zolo-review-img-meta-wrap">
                        {showPhoto && (
                            <div className="zolo-image-wrap">
                                {memberPhoto ? (
                                    <img
                                        src={
                                            memberPhoto.sizes && memberPhoto.sizes[imageRes]
                                                ? memberPhoto.sizes[imageRes].url
                                                : memberPhoto.url
                                        }
                                        alt={memberPhoto.alt || memberName}
                                        className="zolo-img"
                                    />
                                ) : (
                                    <MediaPlaceholder
                                        icon="format-image"
                                        labels={{
                                            title: __('Add Photo', 'zoloblocks'),
                                            instructions: '',
                                        }}
                                        onSelect={(media) => {
                                            setAttributes({
                                                memberPhoto: {
                                                    id: media.id,
                                                    url: media.url,
                                                    alt: media.alt,
                                                    sizes: media.sizes,
                                                    caption: media.caption,
                                                },
                                            });
                                        }}
                                        accept="image/*"
                                        allowedTypes={['image']}
                                    />
                                )}
                            </div>
                        )}

                        <div className="zolo-review-meta-content">
                            {showName &&
                                (addReviewerWebsiteLink ? (
                                    <a
                                        href={reviewerWebsiteLink && reviewerWebsiteLink.url}
                                        rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab ? 'noreferer noopener' : undefined}
                                        target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab ? '_blank' : undefined}
                                        className="zolo-name has-link"
                                        title={memberName}
                                    >
                                        <RichText
                                            value={memberName}
                                            onChange={(content) =>
                                                setAttributes({
                                                    memberName: content,
                                                })
                                            }
                                            placeholder={__('Reviewer name', 'zoloblocks')}
                                        />
                                    </a>
                                ) : (
                                    <RichText
                                        value={memberName}
                                        onChange={(content) =>
                                            setAttributes({
                                                memberName: content,
                                            })
                                        }
                                        className="zolo-name"
                                        placeholder={__('Reviewer name', 'zoloblocks')}
                                    />
                                ))}

                            {showDesignation && preset !== 'style-3' && preset !== 'style-5' && (
                                <div className="zolo-designation">
                                    <RichText
                                        value={memberDesignation}
                                        onChange={(content) =>
                                            setAttributes({
                                                memberDesignation: content,
                                            })
                                        }
                                        placeholder={__('Reviewer designation', 'zoloblocks')}
                                    />
                                </div>
                            )}

                            {showRating && (preset === 'style-3' || preset === 'style-5') && (
                                <div className="zolo-review-icon">
                                    <StarRating rating={rating} total={5} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="zolo-info-wrap">
                        <div className="zolo-meta-content">
                            {showRating && preset !== 'style-3' && preset !== 'style-5' && (
                                <div className="zolo-review-icon">
                                    <StarRating rating={rating} total={5} />
                                </div>
                            )}

                            {showTestimonialMessage && (
                                <div className="zolo-desc">
                                    <RichText
                                        value={testimonialMessage}
                                        onChange={(content) =>
                                            setAttributes({
                                                testimonialMessage: content,
                                            })
                                        }
                                        placeholder={__('Reviewer testimonial message', 'zoloblocks')}
                                    />
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
        </>
    );
}
