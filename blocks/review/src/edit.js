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
const { StarRating, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const {
        preview,
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
        quoteIcon,
        showRating,
        rating,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.review} alt={__('Review Preview', 'zolo-blocks')} />;
    }

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
                        <div className="zolo-image-quote-wrap">
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
                            {showQuoteIcon && (
                                <div className="zolo-quote-icon">
                                    <DisplayZoloIcon icon={quoteIcon} />
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
                                        placeholder={__('message..', 'zolo-blocks')}
                                    />
                                </div>
                            )}
                            <div className="zolo-user-info-wrap">
                                {showName && (
                                    <div className="zolo-name">
                                        <RichText
                                            tagName="span"
                                            value={memberName}
                                            onChange={(content) =>
                                                setAttributes({
                                                    memberName: content,
                                                })
                                            }
                                            placeholder={__('name..', 'zolo-blocks')}
                                        />
                                    </div>
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
                                            placeholder={__('designation..', 'zolo-blocks')}
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
