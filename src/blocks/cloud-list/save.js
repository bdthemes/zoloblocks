import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        zoloId,
        canvasWidth,
        canvasHeight,
        cloudShape,
        rotationLock,
        depth,
        speed,
        triggerOn,
        dragControl,
        wheelZoom,
        reverse,
        shuffleTags,
        noMouse,
        textColor,
        outlineColor,
        outlineThickness,
        outlineDash,
        outlineDashSpace,
        outlineDashSpeed,
        outlineIncrease,
        outlineBorderRadius,
        bgColor,
        bgRadius,
        tagPadding,
        shadowColor,
        shadowBlur,
        activeCursor,
        weightEnabled,
        weightMode,
        weightSize,
        weightSizeMin,
        weightSizeMax,
        weightGradientFrom,
        weightGradientTo,
    } = attributes;

    // Parse Desktop value from responsive canvas dimensions
    const parsedCanvasWidth = parseInt(canvasWidth?.Desktop) || 500;
    const parsedCanvasHeight = parseInt(canvasHeight?.Desktop) || 500;
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, 'zolo-cloud-list', classArrayToStr(parentClasses)),
        ...(zoloId ? { id: zoloId } : {}),
    });

    const canvasId = `${uniqueId}-canvas`;
    const wrapId = `${uniqueId}-wrap`;

    const tagCanvasSettings = {
        textColour: textColor || null,
        outlineColour: outlineColor || '#ffff99',
        reverse: reverse !== false,
        initial: triggerOn === 'hover' ? null
            : rotationLock === 'x' ? [0.2, 0]
            : rotationLock === 'y' ? [0, 0.1]
            : rotationLock === 'xy' ? null
            : [0.2, 0.1],
        depth: (depth / 100) || 0.8,
        maxSpeed: (speed / 1000) || 0.05,
        activeCursor: activeCursor || 'pointer',
        bgColour: bgColor || null,
        bgRadius: bgRadius || 0,
        bgOutlineThickness: (weightEnabled && weightMode === 'bgoutline') ? (outlineThickness || 2) : 0,
        padding: tagPadding || 0,
        dragControl: triggerOn === 'hover' && dragControl ? true : false,
        outlineDash: outlineDash || 0,
        outlineDashSpace: outlineDashSpace || 0,
        outlineDashSpeed: outlineDashSpeed || 1,
        outlineIncrease: outlineIncrease || 4,
        outlineRadius: outlineBorderRadius || 0,
        outlineThickness: outlineThickness || 2,
        shadow: shadowColor || '#000000',
        shadowBlur: shadowBlur || 0,
        wheelZoom: wheelZoom || false,
        textHeight: parseInt(attributes?.textHeight?.Desktop) || 15,
        shape: cloudShape || 'sphere',
        lock: rotationLock || null,
        shuffleTags: shuffleTags || false,
        noMouse: noMouse || false,
        ...(weightEnabled ? {
            weight: true,
            weightMode: weightMode || 'size',
            weightFrom: 'data-weight',
            weightSize: weightSize || 1,
            ...(weightSizeMin > 0 && weightSizeMax > weightSizeMin ? {
                weightSizeMin,
                weightSizeMax,
            } : {}),
            ...((weightMode === 'colour' || weightMode === 'both' || weightMode === 'bgcolour' || weightMode === 'bgoutline' || weightMode === 'outline') ? {
                weightGradient: {
                    0: weightGradientFrom || '#ff0000',
                    1: weightGradientTo || '#0000ff',
                },
            } : {}),
        } : {}),
    };

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div {...blockProps}>
            {renderHookBefore && renderHookBefore}

            {/* TagCanvas 3D sphere canvas */}
            <canvas
                id={canvasId}
                className="zolo-cloud-list-canvas"
                width={parsedCanvasWidth}
                height={parsedCanvasHeight}
                data-tag-canvas-settings={JSON.stringify(tagCanvasSettings)}
            >
                Your browser does not support the canvas element.
            </canvas>

            {/* Hidden tag list – TagCanvas reads <a> links from this element */}
            <div
                className="zolo-cloud-list-hidden-wrap"
                id={wrapId}
                style={{ display: 'none' }}
                aria-hidden="true"
            >
                <InnerBlocks.Content />
            </div>

            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
