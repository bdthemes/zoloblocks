import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useRef, useEffect } from '@wordpress/element';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const { uniqueId, parentClasses, video, autoPlay, playerControl, loop, mute, posterImage, startTime, endTime, hoverPlayPause } = attributes;

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

    const isMute = autoPlay ? true : mute;

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
                        muted={isMute}
                        poster={posterImage?.url || ''}
                    />
                </div>
            </div>
        </>
    );
}
