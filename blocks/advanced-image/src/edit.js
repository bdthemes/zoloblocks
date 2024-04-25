/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, RichText, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup, ResizableBox } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, DynamicTag, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        photo,
        layout,
        imageRes,
        hoverEffect,
        imgAlt,
        link,
        showCaption,
        caption,
        resizedWidth,
        // heading
        heading,
        headingTag,
        headingVisibleOn,

        // description
        description,
        descriptionVisibleOn,

        // separator
        separatorVisibleOn,
        separatorPosition,
        separatorStyle,

        photoMaskImage,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.image} alt={__('Advanced Image Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            {photo && (
                <BlockControls>
                    <ToolbarGroup>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    photo: {
                                        id: media.id,
                                        url: media.url,
                                        sizes: media.sizes,
                                        alt: media.alt,
                                        caption: media.caption,
                                    },
                                });
                            }}
                            allowedTypes={['image']}
                            value={photo && photo.id}
                            render={({ open }) => <ToolbarButton className="components-toolbar__control" label={__('Edit Image', 'zoloblocks')} icon="edit" onClick={open} />}
                        />
                    </ToolbarGroup>
                </BlockControls>
            )}
            <div {...blockProps}>
                {photo ? (
                    <DynamicTag
                        tagName={link && link.url ? 'a' : 'div'}
                        className={classnames('zolo-image-block-wrap', `${photoMaskImage ? 'zolo-image-mask' : 'no-mask'}`, `${layout === 'overlay' ? 'zolo-adi-overlay' : ''}`, hoverEffect)}
                        {...(link &&
                            link.url && {
                                href: link.url,
                            })}
                        {...(link &&
                            link.openInNewTab && {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                            })}
                    >
                        <div className="zolo-image-block-inner">
                            <div className="zolo-img-wrap">
                                <ResizableBox
                                    className="zolo-resizable-box"
                                    size={{
                                        width: resizedWidth,
                                        height: 'auto',
                                    }}
                                    onResize={(event, direction, elt, delta) => {
                                        setAttributes({ resizedWidth: elt.clientWidth });
                                    }}
                                    enable={{
                                        top: false,
                                        right: true,
                                        bottom: false,
                                        left: false,
                                        topRight: false,
                                        bottomRight: false,
                                        bottomLeft: false,
                                        topLeft: false,
                                    }}
                                >
                                    <img className="zolo-img" src={photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url} alt={imgAlt} />
                                </ResizableBox>
                            </div>

                            {layout === 'overlay' && (
                                <div className="zolo-content-wrap">
                                    <div className="zolo-inner-content">
                                        {separatorPosition === 'before_title' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                        <RichText
                                            tagName={headingTag}
                                            className={`zolo-title ${headingVisibleOn}`}
                                            value={heading}
                                            onChange={(v) =>
                                                setAttributes({
                                                    heading: v,
                                                })
                                            }
                                            placeholder={__('Write Title...', 'zoloblocks')}
                                        />
                                        {separatorPosition === 'after_title' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                        <RichText
                                            tagName="p"
                                            value={description}
                                            className={`zolo-caption ${descriptionVisibleOn}`}
                                            onChange={(v) =>
                                                setAttributes({
                                                    description: v,
                                                })
                                            }
                                            placeholder={__('Write Description...', 'zoloblocks')}
                                        />
                                        {separatorPosition === 'after_desc' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {layout === 'normal' && showCaption && <RichText tagName="figcaption" value={caption || photo?.caption} onChange={(value) => setAttributes({ caption: value })} placeholder={__('Write Caption...', 'zoloblocks')} className="zolo-caption" />}
                        </div>
                    </DynamicTag>
                ) : (
                    <div className="zolo-media-placeholder">
                        <MediaPlaceholder
                            onSelect={(media) => {
                                setAttributes({
                                    photo: {
                                        id: media.id,
                                        url: media.url,
                                        sizes: media.sizes,
                                        alt: media.alt,
                                        caption: media.caption,
                                    },
                                });
                            }}
                            accept="image/*"
                            onSelectURL={(url) => {
                                setAttributes({
                                    photo: {
                                        url,
                                    },
                                });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{ title: __('Image', 'zoloblocks') }}
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="zolo-image-icon" aria-hidden="true" focusable="false">
                                    <path
                                        d="M3 17L7.41995 12.58C8.26284 11.7372 9.65125 11.8141 10.3959 12.7449L11.789 14.4863C12.4639 15.3298 13.6866 15.4851 14.5508 14.8369L15.6123 14.0408C16.4086 13.4436 17.5228 13.5228 18.2265 14.2265L21 17M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                                        fill="none"
                                        stroke="#001feb"
                                        stroke-width="1.4"
                                    ></path>
                                </svg>
                            }
                        />
                    </div>
                )}
            </div>
        </>
    );
}
