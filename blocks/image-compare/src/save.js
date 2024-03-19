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
        handleDraggable,
        showLabels,
    } = attributes;
    const allAttributes = {
        beforeImage: beforeImage,
        afterImage: afterImage,
        disableslide: disableslide,
        swipeMode: swipeMode,
        slidePositon: slidePositon,
        handleDraggable: handleDraggable,
        beforeLabel: beforeLabel,
        afterLabel: afterLabel,
        showLabels: showLabels,
        initialPosition: initialPosition,
    };
    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="beaf-slider" data-allattributes={JSON.stringify(allAttributes)}></div>
        </div>
    );
};

export default Save;
