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
        //content,
        contentType,
        contentImage,
        contentCaption,
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


    return (
        <div {...blocksProps}>
            <a href={`#${uniqueId}`} className="lightbox-trigger" data-fslightbox={uniqueId} data-caption={contentCaption}>
                <div className="zolo-lightbox-btn">
                    <button className="zolo-play-btn zolo-lightbox-btn-1">
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


            <div id={`${uniqueId}`} className="zolo-lightbox-content">
                {contentType === 'image' && (
                    <img
                        src={contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url}
                        alt={contentImage.alt}
                    />
                )}
            </div>
        </div>
    );
}
