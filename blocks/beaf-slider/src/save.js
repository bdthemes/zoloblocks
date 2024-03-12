/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        zoloId,
        beforeImage,
        beforeLabel,
        afterImage,
        afterLabel,
        disableslide,
        swipeMode,
        slidePositon,
        initialPosition,
        handaleDraggable,
        showLabels,
    } = attributes;
    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div
                className="beaf-slider"
                data-beforeImage={JSON.stringify(beforeImage)}
                data-afterImage={JSON.stringify(afterImage)}
                data-disablesliding={disableslide}
                data-swipeMode={swipeMode}
                data-slidePositon={slidePositon}
                data-initialPosition={initialPosition}
                data-handaleDraggable={handaleDraggable}
                data-beforeLabel={beforeLabel}
                data-afterLabel={afterLabel}
                data-showlabels={showLabels}
            ></div>
        </div>
    );
};

export default Save;
