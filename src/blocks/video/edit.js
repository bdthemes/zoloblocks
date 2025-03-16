/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';
import './style.scss';
import { useRef, useEffect } from '@wordpress/element';

const { classArrayToStr } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    const {
        uniqueId,
        parentClasses,

        // settings
        autoPlay,
        mute,
        loop,
        playerControl,
        smallButton,
        hoverPlayPause,
        video,
        posterImage,
        imageRes,
        startTime,
        endTime,
        isPlaying,
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // play video
        if (autoPlay) {
            videoElement.play().catch((error) => {
                console.error('Error Playing video:', error);
            });
        }

        // set start and end time
        if (videoElement) {
            if (startTime && startTime > 0) {
                videoElement.currentTime = startTime;
            }

            if (endTime && endTime > 0) {
                videoElement.ontimeupdate = () => {
                    if (videoElement.currentTime > endTime) {
                        videoElement.pause();
                    }
                };
            }

            //hover play pause
            if (hoverPlayPause) {
                const handleMouseEnter = () => videoElement.play();
                const handleMouseLeave = () => videoElement.pause();

                videoElement.addEventListener('mouseenter', handleMouseEnter);
                videoElement.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    videoElement.removeEventListener('mouseenter', handleMouseEnter);
                    videoElement.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        }
    }, [autoPlay, startTime, endTime, hoverPlayPause, video]);

    //small play pause button
    const playButton = () => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        if (isPlaying) {
            videoElement.pause();
            setAttributes({ isPlaying: false });
        } else {
            videoElement.play();
            setAttributes({ isPlaying: true });
        }
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div>
                    {video ? (
                        <>
                            <video
                                ref={videoRef}
                                width={640}
                                height={360}
                                src={video}
                                autoPlay={autoPlay}
                                controls={playerControl}
                                loop={loop}
                                muted={autoPlay ? true : mute}
                                poster={posterImage.sizes && posterImage.sizes[imageRes] ? posterImage.sizes[imageRes].url : posterImage.url}
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

                            {!playerControl && smallButton && (
                                <>
                                    <button className="zolo-video-play" onClick={playButton}>
                                        {isPlaying ? 'Pause' : 'Play'}
                                    </button>
                                </>
                            )}
                        </>
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
