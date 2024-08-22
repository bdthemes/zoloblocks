/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup, ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import FsLightbox from 'fslightbox-react';
import { useState } from '@wordpress/element';
import iframeUrl from './iframeUrl';
import LightboxContent from './content';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';
import './style.scss';

const { classArrayToStr, DynamicTag, DisplayZoloIcon } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    const {
        uniqueId,
        parentClasses,
        contentType,
        // settings
        lightBox,
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
        iconText,
        iconIcon,
        contentCaption,
        contentImage,
        youtubeUrl,
        googleMapSource,
    } = attributes;
    const [toggler, setToggler] = useState(false);

    // const VideoURL = iframeUrl(props);
    // console.log('VideoURL', VideoURL);

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
    });

    // const wrapLightboxContent = () => {
    //     return (
    //         <div id={`${uniqueId}`} className="zolo-lightbox-content-editor">
    //             {contentType === 'image' && (
    //                 <img
    //                     src={contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url}
    //                     alt={contentImage.alt}
    //                 />
    //             )}
    //             {contentType !== 'image' && (
    //                 <iframe src={VideoURL} width="450" height="450" allowFullScreen={true} allow="autoplay; fullscreen" />
    //             )}
    //         </div>
    //     );
    // };

    return (
        <>
            <div {...blocksProps}>
                {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
                <Style props={props} />
                <div className="zolo-lightbox-btn">
                    <button
                        className="zolo-play-btn zolo-lightbox-btn-1"
                        onClick={() => {
                            setToggler(!toggler);
                        }}
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

                <FsLightbox toggler={toggler} sources={[LightboxContent(props)]} captions={[contentCaption]} />
            </div>
        </>
    );
}
