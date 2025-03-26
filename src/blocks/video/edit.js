import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import Style from './style';
import './style.scss';
import './editor.scss';
import EmbedPlayer from './embed-player';
import { useEffect, useRef, useState } from '@wordpress/element';

export default function Edit(props) {
    const { classArrayToStr } = window.zoloModule;
    const { attributes, setAttributes, isSelected } = props;
    const blocksProps = useBlockProps({
        className: classnames(attributes?.uniqueId, classArrayToStr(attributes?.parentClasses)),
    });
    const customVideoRef = useRef(null);

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
    }, [customVideoRef?.current, attributes]); // Reinitialize if the source changes

    let markup = null;

    if (attributes?.videoLayoutType === 'popup') {
        markup = (
            <>
                <div className="video-player-popoup">
                    <div className={`video-player-popup-inline-content ${attributes?.popupType || ''}`}>
                        <a
                            href={`#video-player-popup-${attributes?.uniqueId}`}
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

                        <div className="video-player-popup-content" id={`video-player-popup-${attributes?.uniqueId}`}>
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
