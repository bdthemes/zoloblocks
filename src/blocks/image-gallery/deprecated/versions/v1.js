import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import blockAttributes from '../../attributes';
import metadata from '../../block.json';

const { classArrayToStr, DisplayZoloIcon, DynamicTag, sanitizeUrl } = window.zoloModule;

/**
 * The caption filter that save() used up to 2.8.5, kept only so galleries saved with it
 * still validate. Its output is compared with stored markup and is never rendered:
 * the block editor renders captions with the allow-list sanitizeHtml().
 *
 * @param {string} raw Caption as stored on the block.
 * @return {string} The caption markup the old save() wrote.
 */
const legacyCaptionMarkup = (raw) => {
    if (!raw) {
        return '';
    }

    let html = String(raw);

    html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
    html = html.replace(/\s?on\w+="[^"]*"/gi, '');
    html = html.replace(/\s?on\w+='[^']*'/gi, '');
    html = html.replace(/\s(href|src)=["']javascript:[^"']*["']/gi, '');
    html = html.replace(/<(\/?)(?!b|i|u|p|br|strong|em)[^>]*>/gi, '');

    return html;
};

const v1 = {
    attributes: blockAttributes,
    supports: metadata.supports,
    save(props) {
        const { attributes } = props;
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
            className: classnames(uniqueId, classArrayToStr(parentClasses), `${preset && preset !== '' ? preset : ''}`),
        });

        // filter hooks for render
        const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
        const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
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
                {renderHookBefore && renderHookBefore}
                <div className={classnames(`zolo-image-gallery ${uniqueId} ${showLightbox ? 'zolo-gallery-lightbox' : ''}`)}>
                    {advancedGallery &&
                        advancedGallery.map((image, index) => {
                            return (
                                <DynamicTag
                                    tagName={showLightbox ? 'a' : 'div'}
                                    className="zolo-item"
                                    key={index}
                                    {...(showLightbox && {
                                        href: sanitizeUrl(image.url),
                                        'data-fslightbox': `gallery-${uniqueId}`,
                                    })}
                                    {...(showLightbox &&
                                        showThumbCaption &&
                                        image.caption && {
                                            'data-caption': `<div class="zolo-lightbox-content"><h3 class="zolo-lightbox-caption">${legacyCaptionMarkup(
                                                image.caption
                                            )}</h3></div>`,
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
                                    {showCaption && preset !== 'style-2' && image.caption && (
                                        <div className="zolo-title">{legacyCaptionMarkup(image.caption)}</div>
                                    )}

                                    {preset === 'style-2' && (
                                        <div className="zolo-inner-item">
                                            <div className="zolo-content-wrap">
                                                {showTitle && (
                                                    <h4 className="zolo-subTitle">{image?.alt || __('No Alt Text', 'zoloblocks')}</h4>
                                                )}
                                                {showCaption && image.caption && (
                                                    <div className="zolo-title">{legacyCaptionMarkup(image.caption)}</div>
                                                )}
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
                {renderHookAfter && renderHookAfter}
            </div>
        );
    },
};

export default v1;
