import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const {
        uniqueId,
        parentClasses,
        lightboxType,
        imagePoster,
        posterIcon,
        imageSize,
        posterIconToggle,
        buttonText,
        enableHeading,
        enableSubHeading,
        buttonHeadingText,
        buttonIcon,
    } = attributes;

    const options = {
        uniqueId,
        lightboxType,
        enableSubHeading,
        buttonHeadingText,
        enableHeading,
        buttonText,
        buttonIcon,
        imagePoster,
        posterIcon,
        imageSize,
        posterIconToggle,
    };
    const blocksProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
        'data-options': JSON.stringify(options),
    });
    const randomImage = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;


    return (
        <div {...blocksProps}>
            <a href="#vimeo" className="lightbox-trigger" data-fslightbox="gallery" data-caption="Caption for image 2">
                <div className="zolo-lightbox-btn">
                    <button className="zolo-play-btn zolo-lightbox-btn-1"
                    >
                        {lightboxType !== 'poster' && (
                            <span className="zolo-btn-text">
                                <small>{enableSubHeading && buttonHeadingText}</small>
                                {enableHeading && buttonText}
                            </span>
                        )}
                        <span className="zolo-btn-icon">
                            <DisplayZoloIcon icon={buttonIcon} />
                        </span>
                    </button>
                </div>
                {imagePoster && (
                    <div className="zolo-poster-img">
                        <img
                            src={imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url}
                            alt={imagePoster.alt}
                        />
                    </div>
                )}
            </a>
            <div className="zolo-lightbox-content">
                <iframe
                    src="https://player.vimeo.com/video/22439234"
                    id="vimeo"
                    width="1920px"
                    height="1080px"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                ></iframe>
                </div>
        </div>
    );
}
