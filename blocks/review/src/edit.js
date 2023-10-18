/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { StarRating, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
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

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {showPhoto && memberPhoto && (
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
                <div className="zolo-item">
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
                            {showName && (
                                <RichText
                                    className="zolo-name"
                                    value={memberName}
                                    onChange={(content) =>
                                        setAttributes({
                                            memberName: content,
                                        })
                                    }
                                    placeholder={__('Reviewer name', 'zolo-blocks')}
                                />
                            )}
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
                        {showRating && (
                            <div className="zolo-review-icon">
                                <StarRating rating={rating} total={5} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
