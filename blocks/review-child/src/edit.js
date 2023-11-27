/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
        websiteLinkIcon,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

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
            addReviewerWebsiteLink: context['zolo/addReviewerWebsiteLink'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <BlockControls>
                {memberPhoto && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        memberPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <Style props={props} />
                <div className="zolo-item">
                    <div className="zolo-review-img-meta-wrap">
                        {showPhoto && (
                            <div className="zolo-image-wrap">
                                {memberPhoto ? (
                                    <img src={memberPhoto.url} alt={memberPhoto.alt || memberName} className="zolo-img" />
                                ) : (
                                    <MediaPlaceholder
                                        icon="format-image"
                                        labels={{
                                            title: __('Add Photo', 'zolo-blocks'),
                                            instructions: '',
                                        }}
                                        onSelect={(media) => {
                                            setAttributes({
                                                memberPhoto: media,
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
                                        rel={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && 'noreferer noopener'}
                                        target={reviewerWebsiteLink && reviewerWebsiteLink.openInNewTab && '_blank'}
                                        className="zolo-name has-link"
                                    >
                                        <RichText
                                            value={memberName}
                                            onChange={(content) =>
                                                setAttributes({
                                                    memberName: content,
                                                })
                                            }
                                            placeholder={__('Reviewer name', 'zolo-blocks')}
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
                                        placeholder={__('Reviewer name', 'zolo-blocks')}
                                    />
                                ))}
                            {showDesignation && (
                                <div className="zolo-designation">
                                    <RichText
                                        value={memberDesignation}
                                        onChange={(content) =>
                                            setAttributes({
                                                memberDesignation: content,
                                            })
                                        }
                                        placeholder={__('Reviewer designation', 'zolo-blocks')}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="zolo-info-wrap">
                        <div className="zolo-meta-content">
                            {showRating && (
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
                                        placeholder={__('Reviewer testimonial message', 'zolo-blocks')}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
