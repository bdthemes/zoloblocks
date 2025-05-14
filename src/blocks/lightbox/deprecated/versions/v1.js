import iframeUrl from '../../iframeUrl';
import attributes from '../../attributes';
import classnames from 'classnames';

const { classArrayToStr } = window.zoloModule;

const v1 = {
    attributes: {
        ...attributes,
        imageSize: {
            type: 'string',
            default: 'full',
        },
    },
    save({ attributes }) {
        const {
            uniqueId,
            parentClasses,
            lightboxType,
            imagePoster,
            imageSize,
            buttonText,
            enableHeading,
            enableSubHeading,
            buttonHeadingText,
            posterIcon,
            showPosterIcon,
            contentType,
            contentImage,
            contentCaption,
        } = attributes;

        const VideoURL = iframeUrl({ attributes });

        const blocksProps = {
            className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
        };

        return (
            <div {...blocksProps}>
                <a
                    href={`#${uniqueId}`}
                    className="zolo-play-btn zolo-lightbox-btn-1"
                    data-fslightbox={uniqueId}
                    data-caption={contentCaption}
                >
                    {lightboxType !== 'poster' && (
                        <span className="zolo-btn-text">
                            <small>{enableSubHeading && buttonHeadingText}</small>
                            {enableHeading && buttonText}
                        </span>
                    )}
                    {showPosterIcon && (
                        <span className="zolo-btn-icon">
                            <div className="zolo__display-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </span>
                    )}
                </a>
                {lightboxType === 'poster' && imagePoster && (
                    <div className="zolo-poster-img">
                        <img
                            src={imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url}
                            alt={imagePoster.alt || ''}
                        />
                    </div>
                )}
                <div id={`${uniqueId}`} className="zolo-lightbox-content">
                    {contentType === 'image' && contentImage && (
                        <img
                            src={contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url}
                            alt={contentImage.alt || ''}
                        />
                    )}
                    {contentType !== 'image' && (
                        <iframe
                            className={`${uniqueId} zolo-content-iframe`}
                            src={VideoURL}
                            allowFullScreen={true}
                            allow="autoplay; fullscreen"
                        />
                    )}
                </div>
            </div>
        );
    },
    migrate(attributes) {
        return {
            ...attributes,
            imageSizeLightbox: attributes.imageSize || 'full',
            imageSize: undefined,
        };
    },
};

export default v1;
