/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup, ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import FsLightbox from 'fslightbox-react';
import { useState } from '@wordpress/element';

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
        lightBoxContent,
        contentCaption,
        contentImage,
        videoSource,
        googleMapSource,
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
    });

    	const [toggler, setToggler] = useState(false);


    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div className="zolo-lightbox-btn">
                    <button
                        className="zolo-play-btn zolo-lightbox-btn-1"
                        onClick={() => {
                            setToggler({ toggler: !toggler });
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
                <FsLightbox
                    toggler={toggler}
                    sources={[
                        <iframe
                            src={`https://www.youtube.com/embed/enuJ5wE33dY`}
                            width="450"
                            height="450"
                            allowFullScreen="allowfullscreen"
                            scrolling="no"
                            allow="autoplay; fullscreen"
                        />,

                        // <iframe
                        //     width="100%"
                        //     height="426"
                        //     src={`https://www.youtube.com/embed/enuJ5wE33dY?autoplay=1&mute=1`}
                        //     title={'Zoloblocks Features Walkthrough - Get a Glance at the Features | BdThemes'}
                        //     frameBorder="0"
                        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //     allowFullScreen
                        // />,
                    ]}
                />
            </div>
        </>
    );
}
