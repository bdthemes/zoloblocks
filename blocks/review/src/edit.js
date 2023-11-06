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
const { StarRating, classArrayToStr, DisplayIcon } = window.zoloModule;

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
        websiteLinkIcon,
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
                            <div className='zolo-user-info-wrap'>
                                {showName &&
                                    (addReviewerWebsiteLink ? (
                                        <RichText
                                            className="zolo-name has-link"
                                            value={memberName}
                                            onChange={(content) =>
                                                setAttributes({
                                                    memberName: content,
                                                })
                                            }
                                            placeholder={__('Reviewer name', 'zolo-blocks')}
                                        />
                                    ) : (
                                        <div className="zolo-name">
                                            <RichText.Content value={memberName} />
                                        </div>
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
                    </div>
                </div>
            </div>
        </>
    );
}
