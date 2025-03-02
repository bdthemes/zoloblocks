/**
 * WordPress dependencies
 */
import { useBlockProps, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup, ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
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
        autoPlay,
        mute,
        loop,
        playerControl,
        imagePoster,
        playIcon,
        icon,
        iconColor,
        videoUrl,
        imageSize,
    } = attributes;

    const blocksProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blocksProps}>
                <div className="zolo-video-player-wrap">
                    Video Player
                </div>
            </div>
        </>
    );
}
