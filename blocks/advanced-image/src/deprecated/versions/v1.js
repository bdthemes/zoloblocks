import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag } = window.zoloModule;

// attributes.js
import attributes from '../../attributes';

const v1 = {
    attributes: {
        ...attributes,
    },
    save({ attributes }) {
        const {
            uniqueId,
            parentClasses,
            photo,
            layout,
            imageRes,
            hoverEffect,
            imgAlt,
            showCaption,
            caption,
            heading,
            headingTag,
            headingVisibleOn,
            description,
            descriptionVisibleOn,
            resizedWidth,
            zoloId,
            link,
            separatorVisibleOn,
            separatorPosition,
            separatorStyle,

            photoMaskImage,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(uniqueId, classArrayToStr(parentClasses)),
        });

        return (
            <div
                {...blockProps}
                {...(zoloId && {
                    id: zoloId,
                })}
            >
                {photo && (
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
                            <div
                                className="zolo-img-wrap"
                                style={{
                                    width: resizedWidth,
                                }}
                            >
                                <img className="zolo-img" src={photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url} alt={imgAlt} />
                            </div>
                            {layout === 'overlay' && (
                                <div className="zolo-content-wrap">
                                    <div className="zolo-inner-content">
                                        {separatorPosition === 'before_title' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                        <RichText.Content tagName={headingTag} className={`zolo-title ${headingVisibleOn}`} value={heading} />
                                        {separatorPosition === 'after_title' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                        <RichText.Content tagName="p" value={description} className={`zolo-caption ${descriptionVisibleOn}`} />
                                        {separatorPosition === 'after_desc' && separatorStyle !== '' && (
                                            <div className={`zolo-separator ${separatorVisibleOn}`}>
                                                <span></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {layout === 'normal' && showCaption && <RichText.Content tagName="figcaption" value={caption || photo?.caption} className="zolo-caption" />}
                        </div>
                    </DynamicTag>
                )}
            </div>
        );
    },
};

export default v1;
