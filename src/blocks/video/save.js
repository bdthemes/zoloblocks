import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const {
        uniqueId,
        parentClasses,
        video,
        autoPlay,
        playerControl,
        smallButton,
        loop,
        mute,
        posterImage,
        imageRes,
        startTime,
        endTime,
        hoverPlayPause,
        isPlaying,
        smallPlayPause,
    } = attributes;

    const options = {
        controls: playerControl,
        loop: loop,
        muted: mute,
        poster: posterImage,
        startTime: startTime,
        endTime: endTime,
        hoverPlayPause: hoverPlayPause,
    };

    const blocksProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
        'data-settings': JSON.stringify(options),
    });

    return (
        <>
            <div {...blocksProps}>
                <div className="zolo-video-player">
                    <video
                        width={640}
                        height={360}
                        src={video}
                        autoPlay={autoPlay}
                        controls={playerControl}
                        loop={loop}
                        muted={autoPlay ? true : mute}
                        poster={posterImage.sizes && posterImage.sizes[imageRes] ? posterImage.sizes[imageRes].url : posterImage.url}
                    />

                    {!playerControl && smallButton && <button className="zolo-video-play"></button>}
                </div>
            </div>
        </>
    );
}
