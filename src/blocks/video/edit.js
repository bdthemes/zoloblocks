import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import Style from './style';
import './style.scss';
import './editor.scss';
import EmbedPlayer from './embed-player';
import { useEffect, useRef, useState } from '@wordpress/element';
const { sanitizeUrl } = window.zoloModule;

export default function Edit(props) {
    const { classArrayToStr } = window.zoloModule;
    const { attributes, setAttributes, isSelected } = props;
    const [openPopup, setOpenPopup] = useState(false);
    const blocksProps = useBlockProps({
        className: classnames(
            attributes?.uniqueId,
            classArrayToStr(attributes?.parentClasses),
            attributes?.videoOverlay ? 'has-overlay' : ''
        ),
    });

    const customVideoRef = useRef(null);
    const popupRef = useRef(null);
    const lightboxRef = useRef(null);

    const { autoPlay, loop, mute, playerControl, showDownloadButton, preload, posterImage, imageRes } = attributes;

    const handleEndTime = () => {
        if (customVideoRef.current.currentTime >= attributes?.endTime) {
            customVideoRef.current.pause();
        }
    };

    useEffect(() => {
        if (!customVideoRef.current || attributes?.videoSource != 'custom') return;

        customVideoRef.current.load();

        // Set the start time if available
        if (attributes?.startTime) {
            customVideoRef.current.currentTime = attributes?.startTime;
        }

        // Set the end time if available
        if (attributes?.endTime) {
            customVideoRef.current.addEventListener('timeupdate', handleEndTime);
        }

        return () => {
            if (customVideoRef.current) {
                customVideoRef.current.removeEventListener('timeupdate', handleEndTime);
                customVideoRef.current.pause();
                customVideoRef.current = null;
            }
        };
    }, [customVideoRef?.current, autoPlay, loop, mute, playerControl, showDownloadButton, preload, posterImage, imageRes]); // Reinitialize if the source changes

    useEffect(() => {
        if (!popupRef.current || attributes?.videoLayoutType !== 'popup') return;

        const ownerWindow = popupRef.current.ownerDocument.defaultView;
        const { FsLightbox } = ownerWindow;
        if (!FsLightbox) return;

        if (!lightboxRef.current) {
            lightboxRef.current = new FsLightbox();
            lightboxRef.current.props.sources = [popupRef?.current];
            lightboxRef.current.onClose = () => {
                setOpenPopup(false);
            };
        }

        if (openPopup && lightboxRef.current) {
            lightboxRef.current.open();
        }

        return () => {
            if (lightboxRef.current) {
                lightboxRef.current = null;
                setOpenPopup(false);
            }
        };
    }, [attributes, openPopup]);

    let markup = null;

    // Check if open in new tab is enabled
    const getVideoUrl = () => {
        const { videoSource, youtubeUrl, vimeoUrl, externalCustomVideoUrl, isExternalCustomUrl } = attributes;
        if (videoSource === 'youtube') return youtubeUrl?.url;
        if (videoSource === 'vimeo') return vimeoUrl?.url;
        if (videoSource === 'custom') return isExternalCustomUrl ? externalCustomVideoUrl?.url : null;
        return null;
    };

    const shouldOpenInNewTab = attributes?.videoLayoutType === 'popup' && (
        attributes?.youtubeUrl?.openInNewTab || 
        attributes?.vimeoUrl?.openInNewTab || 
        attributes?.externalCustomVideoUrl?.openInNewTab
    );

    if (attributes?.videoLayoutType === 'popup') {
        markup = (
            <>
                <div className="video-player-popoup">
                    <div className={`video-player-popup-inline-content ${attributes?.popupType || ''}`}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                if (shouldOpenInNewTab) {
                                    const videoUrl = getVideoUrl();
                                    if (videoUrl) {
                                        window.open(videoUrl, '_blank', 'noopener,noreferrer');
                                    }
                                } else {
                                    setOpenPopup(!openPopup);
                                }
                            }}
                            href={shouldOpenInNewTab ? sanitizeUrl(getVideoUrl()) : sanitizeUrl(`#video-player-popup-${attributes?.uniqueId}`)}
                            className="popup-trigger-button"
                            data-fslightbox={`video-player-popup-${attributes?.uniqueId}`}
                        >
                            <>
                                <span className="popup-button-wrap">
                                    <span className="popup-button-icon">{attributes?.popupButtonIcon}</span>
                                    {attributes?.popupButtonLebelWrap && (
                                        <span className="popup-button-label-wrap">
                                            <span className="popup-button-sub-label">{attributes?.popupButtonSubLabel}</span>
                                            <span className="popup-button-label">{attributes?.popupButtonLabel}</span>
                                        </span>
                                    )}
                                </span>
                                {attributes?.popupType === 'image' && attributes?.popoupImage && (
                                    <img
                                        data-fslightbox={`video-player-popup-${attributes?.uniqueId}`}
                                        className="popup-trigger-image"
                                        src={
                                            attributes?.popoupImage?.sizes && attributes?.popoupImage?.sizes[attributes?.popupImageSizes]
                                                ? attributes?.popoupImage?.sizes[attributes?.popupImageSizes]?.url
                                                : attributes?.popoupImage?.url
                                        }
                                        alt={attributes?.popupButtonLabel ?? 'Popup Image'}
                                    />
                                )}
                            </>
                        </a>

                        <div
                            ref={popupRef}
                            className={classnames('video-player-popup-content', attributes?.uniqueId, {
                                'has-overlay': attributes?.videoOverlay,
                            })}
                            id={`video-player-popup-${attributes?.uniqueId}`}
                        >
                            <EmbedPlayer attributes={attributes} anchor={customVideoRef} isEdit={true} />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (attributes?.videoLayoutType === 'inline') {
        markup = <EmbedPlayer attributes={attributes} anchor={customVideoRef} isEdit={true} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>{markup}</div>
        </>
    );
}
