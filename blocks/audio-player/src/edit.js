/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayIcon } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        preset,
        label,
        parentClasses,
        iconType,
        icon,
        iconPosition,
        showTitle,
        showDescription,
        showBtn,
        title,
        titleTag,
        description,
        reversePosition,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zb-audio-player-wrap zb-audio-player-style-4">
                    <div className="zb-audio-player-image">
                        <img src="https://placehold.co/600x400" />
                    </div>
                    <div className="zb-audio-play-content">
                        <div className="zb-audio-play-inner-content">
                            <h2 className="zb-audio-play-title">Audio Player Title</h2>
                            <div className="zb-audio-play-author">
                                <span>By:</span> John Duo
                            </div>
                        </div>
                        <audio controls="">
                            <source src="http://physical-authority.surge.sh/music/2.mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        </>
    );
}
