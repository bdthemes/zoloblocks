/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder, MediaUploadCheck, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';
import './style.scss';
import { useRef, useEffect } from '@wordpress/element';

const { classArrayToStr, DynamicTag, DisplayZoloIcon } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    console.log('attributes', attributes);
    console.log('startTime', attributes.startTime);

    const {
        uniqueId,
        parentClasses,

        // settings
        autoPlay,
        mute,
        loop,
        playerControl,
        video,
        posterImage,
        startTime,
        endTime,
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && startTime && startTime > 0) {
            videoRef.current.currentTime = startTime;
        }
        if (videoRef.current && endTime && endTime > 0) {
            videoRef.current.ontimeupdate = function () {
                if (videoRef.current.currentTime > endTime) {
                    videoRef.current.pause();
                }
            };
        }
    }, [startTime, endTime, video]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div className="zolo-video-player">
                    {video ? (
                        <video
                            ref={videoRef}
                            className="video-player"
                            width={640}
                            height={360}
                            src={video}
                            autoPlay={autoPlay}
                            controls={playerControl}
                            loop={loop}
                            muted={mute}
                            poster={posterImage}
                            onLoadedMetadata={(e) => {
                                if (startTime && startTime > 0 && startTime < e.target.duration) {
                                    e.target.currentTime = startTime;
                                }
                                if (endTime && endTime > 0 && endTime < e.target.duration) {
                                    e.target.ontimeupdate = function () {
                                        if (e.target.currentTime > endTime) {
                                            e.target.pause();
                                        }
                                    };
                                }
                            }}
                        />
                    ) : (
                        <MediaPlaceholder
                            onSelect={(file) => setAttributes({ video: file.url })}
                            type="file"
                            value={video}
                            render={({ open }) => (
                                <Button style={{ marginBottom: '10px' }} className="zolo-action-button" variant="primary" onClick={open}>
                                    {video ? __('Change Video File', 'zoloblocks') : __('Choose Video File', 'zoloblocks')}
                                </Button>
                            )}
                            allowedTypes={['video']}
                            accept="video/*"
                            onSelectURL={(url) => {
                                setAttributes({
                                    video: {
                                        url,
                                    },
                                });
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
