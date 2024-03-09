/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, zoloId, beforeImage, afterImage } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="beaf-slider" data-beforeImage={JSON.stringify(beforeImage)} data-afterImage={JSON.stringify(afterImage)}></div>
        </div>
    );
};

export default Save;
