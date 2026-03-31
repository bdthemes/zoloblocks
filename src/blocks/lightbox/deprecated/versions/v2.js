import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import LightboxContent from '../../content';
import attributes from '../../attributes';

const { sanitizeAttr, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const v2 = {
    attributes: attributes,
    save(props) {
        const { attributes } = props;

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
            contentCaption,
        } = attributes;

        const blocksProps = useBlockProps.save({
            className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
        });

        return (
            <div {...blocksProps}>
                <a
                    href={`#${uniqueId}`}
                    className="zolo-play-btn zolo-lightbox-btn-1"
                    data-fslightbox={uniqueId}
                    data-caption={sanitizeAttr(contentCaption)}
                >
                    {lightboxType !== 'poster' && (
                        <span className="zolo-btn-text">
                            <small>{enableSubHeading && buttonHeadingText}</small>
                            {enableHeading && buttonText}
                        </span>
                    )}
                    {showPosterIcon && (
                        <span className="zolo-btn-icon">
                            <DisplayZoloIcon icon={posterIcon} />
                        </span>
                    )}
                </a>
                {lightboxType === 'poster' && imagePoster && (
                    <div className="zolo-poster-img">
                        <img
                            src={imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url}
                            alt={imagePoster.alt}
                        />
                    </div>
                )}
                <div id={`${uniqueId}`} className="zolo-lightbox-content">
                    <LightboxContent {...props} />
                </div>
            </div>
        );
    },
};

export default v2;
