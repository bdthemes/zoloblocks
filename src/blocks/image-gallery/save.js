import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        preset,
        uniqueId,
        parentClasses,
        advancedGallery,
        showCaption,
        showTitle,
        showLightbox,
        lightboxIcon,
        entranceAnimation,
        zoloId,
        imageSize,
        showLightboxThumb,
        showThumbCaption,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `${
            preset && preset !== '' ? preset : ''
        }`),
    });
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-uniqueId={uniqueId}
            data-entranceanimation={entranceAnimation}
            data-showThumb={showLightboxThumb}
        >
            <div className={classnames(`zolo-image-gallery ${uniqueId} ${showLightbox ? 'zolo-gallery-lightbox' : ''}`)}>
                {advancedGallery &&
                    advancedGallery.map((image, index) => {
                        return (
                            <DynamicTag
                                tagName={showLightbox ? 'a' : 'div'}
                                className="zolo-item"
                                key={index}
                                {...(showLightbox && {
                                    href: image.url,
                                    'data-fslightbox': `gallery-${uniqueId}`,
                                })}
                                {...(showLightbox &&
                                    showThumbCaption &&
                                    image.caption && {
                                        'data-caption': `<div class="zolo-lightbox-content"><h3 class="zolo-lightbox-caption">${image.caption}</h3></div>`,
                                    })}
                                {...(showLightbox &&
                                    showLightboxThumb && {
                                        'data-thumb': image.sizes && image.sizes.thumbnail ? image.sizes.thumbnail.url : image.url,
                                    })}
                            >
                                <div className="zolo-image-wrap">
                                    <img
                                        src={image.sizes && image.sizes[imageSize] ? image.sizes[imageSize].url : image.url}
                                        alt={image.alt || image.caption || 'Gallery'}
                                        className={`wp-image-${image.id}`}
                                        loading="lazy"
                                    />
                                </div>
                                {showLightbox && preset !== 'style-2' && (
                                    <div className="zolo-icon-wrap">
                                        <span className="zolo-icon">
                                            <DisplayZoloIcon icon={lightboxIcon} />
                                        </span>
                                    </div>
                                )}
                                {showCaption && preset !== 'style-2' && image.caption && <div className="zolo-title">{image.caption}</div>}

                                {preset === 'style-2' && (
                                      <div className='zolo-inner-item'>
                                          <div className='zolo-content-wrap'>
                                            {showTitle && (
                                                <h4 className='zolo-subTitle'>design</h4>
                                            )}
                                            {showCaption && image.caption && <div className="zolo-title">{image.caption}</div>}
                                          </div>
                                          {showLightbox && (
                                            <div className="zolo-icon-wrap">
                                                <span className="zolo-icon">
                                                    <DisplayZoloIcon icon={lightboxIcon} />
                                                </span>
                                            </div>
                                           )}
                                      </div>
                                    )}
                            </DynamicTag>
                        );
                    })}
            </div>
        </div>
    );
};

export default Save;
