import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ({ attributes }) => {
    const { uniqueId, preset, advancedGallery, showCaption, showLightbox } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <div className={`zolo-image-gallery ${uniqueId} zolo-img-gallery-${preset}`}>
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-plus-lg"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className="zolo-icon-text">{__('zoom', 'zolo-blocks')}</span>
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
