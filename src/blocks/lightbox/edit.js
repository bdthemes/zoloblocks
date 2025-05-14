/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import LightboxContent from './content';
import Style from './style';
import './style.scss';

export default function Edit(props) {
    const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
    const { attributes, setAttributes, isSelected } = props;

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

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
    });

    return (
        <div {...blocksProps}>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <a href={`#${uniqueId}`} className="zolo-play-btn zolo-lightbox-btn-1" data-fslightbox={uniqueId} data-caption={contentCaption}>
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
}
