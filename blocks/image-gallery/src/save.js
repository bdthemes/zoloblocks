import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, advancedGallery, showCaption, showLightbox, lightboxIcon } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    return (
        <div {...blockProps}>
            <div className={`zolo-image-gallery ${uniqueId}`}>
                {advancedGallery &&
                    advancedGallery.map((image, index) => {
                        return (
                            <a className="zolo-item" key={index} href={image.url}>
                                <div className="zolo-image-wrap">
                                    <img src={image.url} alt={image.alt || image.caption || 'Gallery'} className={`wp-image-${image.id}`} />
                                </div>
                                {showLightbox && (
                                    <div className="zolo-icon-wrap">
                                        <span className="zolo-icon">
                                            <DisplayZoloIcon icon={lightboxIcon} />
                                        </span>
                                    </div>
                                )}
                                {showCaption && image.caption && <div className="zolo-title">{image.caption}</div>}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default Save;
