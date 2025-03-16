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
        videoSource,
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
        youtubeUrl,
        vimeoUrl,
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), videoSource),
    });

    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // play video
        if (autoPlay) {
            videoElement.play().catch((error) => {
                console.error('Error Playing video:', error);
            });
            setAttributes({ isPlaying: true });
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
                const handleMouseEnter = () => {
                    videoElement.play(); // **এখানে পরিবর্তন**: মাউস হোভার করলে ভিডিও প্লে হবে
                    setAttributes({ isPlaying: true });
                };
                const handleMouseLeave = () => {
                    videoElement.pause(); // **এখানে পরিবর্তন**: মাউস লিভ করলে ভিডিও পজ হবে
                    setAttributes({ isPlaying: false });
                };

                videoElement.addEventListener('mouseenter', handleMouseEnter);
                videoElement.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    videoElement.removeEventListener('mouseenter', handleMouseEnter);
                    videoElement.removeEventListener('mouseleave', handleMouseLeave);
                };
            }

            // video ended: set isPlaying to false when the video finishes
            videoElement.onended = () => {
                setAttributes({ isPlaying: false }); // **এখানে পরিবর্তন**: ভিডিও শেষ হলে isPlaying false করা হয়েছে
            };
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
        // ভিডিও শেষ হলে `isPlaying` false সেট করবে
        videoElement.onended = () => {
            setAttributes({ isPlaying: false });
        };
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div className="zolo-video-player">
                    {videoSource === 'custom' && (
                        <>
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
                                        poster={
                                            posterImage.sizes && posterImage.sizes[imageRes]
                                                ? posterImage.sizes[imageRes].url
                                                : posterImage.url
                                        }
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

                                    {smallButton && !playerControl && (
                                        <button className="zolo-video-play" onClick={playButton}>
                                            {isPlaying ? (
                                                <svg
                                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    )}
                                </>
                            ) : (
                                <MediaPlaceholder
                                    onSelect={(file) => setAttributes({ video: file.url })}
                                    type="file"
                                    value={video}
                                    render={({ open }) => (
                                        <Button
                                            style={{ marginBottom: '10px' }}
                                            className="zolo-action-button"
                                            variant="primary"
                                            onClick={open}
                                        >
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
                        </>
                    )}
                    {videoSource === 'youtube' && (
                        <iframe
                            width="640"
                            height="360"
                            src={youtubeUrl.url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {videoSource === 'vimeo' && (
                        <iframe
                            width="640"
                            height="360"
                            src={`https://player.vimeo.com/video/${video}`}
                            title="Vimeo video player"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </>
    );
}
