/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';


import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { StarRating, classArrayToStr, DisplayZoloIcon, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        stylePreset,
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
        imageRes,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} ${preset && stylePreset === '' ? preset : ''} ${stylePreset !== '' && stylePreset}`,
            classArrayToStr(parentClasses)
        ),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.review} alt={__('Review Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {showPhoto && memberPhoto && (
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
                <SidebarOpener clientId={clientId} />
                <div className="zolo-item">
                    {showPhoto && stylePreset !== 'style-preset-2' && (
                        <div className="zolo-image-quote-wrap">
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
                            {showQuoteIcon && stylePreset !== 'style-preset-3' && (
                                <div className="zolo-quote-icon">
                                    <DisplayZoloIcon icon={quoteIcon} />
                                </div>
                            )}
                        </div>
                    )}

                    {showTestimonialMessage && stylePreset === 'style-preset-2' && (
                        <>
                            <div className="zolo-desc-quote-wrap">
                                {showQuoteIcon && (
                                    <div className="zolo-quote-icon">
                                        <DisplayZoloIcon icon={quoteIcon} />
                                    </div>
                                )}
                                <div className="zolo-desc">
                                    <RichText
                                        value={testimonialMessage}
                                        onChange={(content) =>
                                            setAttributes({
                                                testimonialMessage: content,
                                            })
                                        }
                                        placeholder={__('message..', 'zoloblocks')}
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="zolo-info-wrap">
                        {showPhoto && stylePreset === 'style-preset-2' && (
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
                        <div className="zolo-meta-content">
                            {showRating && (
                                <div className="zolo-review-icon">
                                    <StarRating rating={rating} total={5} />
                                </div>
                            )}
                            {showTestimonialMessage && stylePreset !== 'style-preset-2' && (
                                <div className="zolo-desc">
                                    <RichText
                                        value={testimonialMessage}
                                        onChange={(content) =>
                                            setAttributes({
                                                testimonialMessage: content,
                                            })
                                        }
                                        placeholder={__('message..', 'zoloblocks')}
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
                                            placeholder={__('name..', 'zoloblocks')}
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
                                            placeholder={__('designation..', 'zoloblocks')}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {stylePreset === 'style-preset-3' && (
                            <>
                                <div className="zolo-quote-icon">
                                    <DisplayZoloIcon icon={quoteIcon} />
                                </div>
                                <div className="zolo-triangle"></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
