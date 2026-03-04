import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { useEffect, useRef, useState, useLayoutEffect, useMemo } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import Style from './styles';

const { classArrayToStr, SidebarOpener, ZoloToolbarButton, ZoloToolbarGroup, useResponsiveValue } = window.zoloModule;

const DEFAULT_ITEMS = [
    ['zolo/cloud-list-child', { label: 'Element Pack', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'ZoloBlocks', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Ultimate Store Kit', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'One Accessibility', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Pixel Gallery', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Dark Reader', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Ultimate Post Kit', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Spin Wheel', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Prime Slider', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Sigma Forms', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Sigma Store Locator', link: { url: '#', openInNewTab: false } }],
    ['zolo/cloud-list-child', { label: 'Smart Admin Assistant', link: { url: '#', openInNewTab: false } }],
];

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
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

    // Responsive value helpers for canvas dimensions
    const [getResponsiveValue, createResponsiveValue] = useResponsiveValue(attributes);
    const currentCanvasWidth = parseInt(getResponsiveValue('canvasWidth')) || 500;
    const currentCanvasHeight = parseInt(getResponsiveValue('canvasHeight')) || 500;
    const currentTextHeight = parseInt(getResponsiveValue('textHeight')) || 15;


    const cloudRef = useRef(null);
    const canvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { selectBlock } = useDispatch('core/block-editor');

    // Read inner block data to feed TagCanvas in editor
    const innerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId),
        [clientId]
    );

    // Keep a ref so event handlers always see the latest innerBlocks
    const innerBlocksRef = useRef(innerBlocks);
    innerBlocksRef.current = innerBlocks;

    // Track whether a child block is currently selected
    const selectedChildId = useSelect(
        (select) => {
            const selected = select('core/block-editor').getSelectedBlockClientId();
            return innerBlocks.some((b) => b.clientId === selected) ? selected : null;
        },
        [innerBlocks]
    );
    const tagItems = useMemo(
        () =>
            innerBlocks.map((block) => ({
                label: block.attributes.label || 'Tag',
                url: block.attributes.link?.url || '#',
                openInNewTab: block.attributes.link?.openInNewTab || false,
                textColor: block.attributes.textColor,
                fontSize: block.attributes.fontSize,
                bgColor: block.attributes.bgColor,
                bgOutlineColor: block.attributes.bgOutlineColor,
                bgOutlineThickness: block.attributes.bgOutlineThickness,
                tooltip: block.attributes.tooltip,
                weight: block.attributes.weight,
            })),
        [innerBlocks]
    );

    const tagItemsJson = JSON.stringify(tagItems);

    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, 'zolo-cloud-list', classArrayToStr(parentClasses)),
    });

    const innerBlocksProps = useInnerBlocksProps(
        { className: 'zolo-cloud-list-editor-wrap' },
        {
            allowedBlocks: ['zolo/cloud-list-child'],
            template: DEFAULT_ITEMS,
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    // Memoized TagCanvas settings object
    const settings = useMemo(() => {
        const hasPerTagBg = tagItems.some((item) => item.bgColor);
        const hasPerTagBgOutline = tagItems.some((item) => item.bgOutlineColor);
        const maxBgOutlineThickness = tagItems.reduce((max, item) => Math.max(max, item.bgOutlineThickness || 0), 0);

        return {
            textColour: hasPerTagBgOutline ? (textColor || '#333333') : (textColor || null),
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
            bgColour: hasPerTagBg ? 'tag' : (bgColor || null),
            bgRadius: bgRadius || 0,
            bgOutline: hasPerTagBgOutline ? 'tag' : null,
            bgOutlineThickness: hasPerTagBgOutline
                ? (maxBgOutlineThickness || 2)
                : (weightEnabled && weightMode === 'bgoutline' ? (outlineThickness || 2) : 0),
            padding: tagPadding || 0,
            dragControl: triggerOn === 'hover' && dragControl,
            outlineDash: outlineDash || 0,
            outlineDashSpace: outlineDashSpace || 0,
            outlineDashSpeed: outlineDashSpeed || 1,
            outlineIncrease: outlineIncrease || 4,
            outlineRadius: outlineBorderRadius || 0,
            outlineThickness: outlineThickness || 2,
            shadow: shadowColor || '#000000',
            shadowBlur: shadowBlur || 0,
            wheelZoom: wheelZoom || false,
            textHeight: currentTextHeight,
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
            tooltip: tagItems.some((item) => item.tooltip) ? 'native' : null,
        };
    }, [
        tagItemsJson, textColor, outlineColor, reverse, triggerOn, depth, speed,
        activeCursor, bgColor, bgRadius, tagPadding, dragControl, outlineDash,
        outlineDashSpace, outlineDashSpeed, outlineIncrease, outlineBorderRadius,
        outlineThickness, shadowColor, shadowBlur, wheelZoom, currentTextHeight,
        cloudShape, rotationLock, shuffleTags, noMouse,
        weightEnabled, weightMode, weightSize, weightSizeMin, weightSizeMax,
        weightGradientFrom, weightGradientTo,
    ]);

    // Detect when TagCanvas script is ready in the editor iframe
    useEffect(() => {
        if (!cloudRef.current || isLoaded) return;

        const { ownerDocument } = cloudRef.current;
        const editorWindow = ownerDocument.defaultView;

        if (editorWindow.TagCanvas) {
            setIsLoaded(true);
            return;
        }

        const onLoad = () => {
            const script = ownerDocument.querySelector('#zolo-tag-canvas-script-js');
            if (script) {
                setIsLoaded(true);
            }
        };
        editorWindow.addEventListener('load', onLoad);
        return () => editorWindow.removeEventListener('load', onLoad);
    }, [cloudRef.current, uniqueId]);

    // Initialize / re-initialize TagCanvas whenever settings or items change
    useLayoutEffect(() => {
        if (!tagItems.length) return;
        if (!cloudRef.current) return;

        const { ownerDocument } = cloudRef.current;
        const editorWindow = ownerDocument.defaultView || window;
        if (!editorWindow.TagCanvas) return;

        const { TagCanvas } = editorWindow;

        let frame = requestAnimationFrame(() => {
            const canvas = canvasRef.current;
            const wrap = cloudRef.current?.querySelector('.zolo-cloud-list-hidden-wrap');
            if (!canvas || !wrap) return;

            try {
                TagCanvas.Delete(canvas.id);
                TagCanvas.Start(canvas.id, wrap.id, settings);
            } catch (error) {
                console.error(error);
            }
        });

        // Listen for hash changes caused by TagCanvas tag clicks
        const handleHashChange = () => {
            const hash = ownerDocument.location.hash;
            const match = hash.match(/#cloud-tag-(\d+)/);
            if (match) {
                const index = parseInt(match[1]);
                const blocks = innerBlocksRef.current;
                if (blocks[index]) {
                    selectBlock(blocks[index].clientId);
                }
                // Clear the hash so subsequent clicks on the same tag work
                try {
                    editorWindow.history.replaceState(
                        null, '',
                        ownerDocument.location.pathname + ownerDocument.location.search
                    );
                } catch (e) { /* ignore */ }
            }
        };
        editorWindow.addEventListener('hashchange', handleHashChange);

        return () => {
            cancelAnimationFrame(frame);
            editorWindow.removeEventListener('hashchange', handleHashChange);
            if (canvasRef.current?.id) {
                try { editorWindow.TagCanvas?.Delete(canvasRef.current.id); } catch (e) { }
            }
        };
    }, [isLoaded, settings, currentCanvasWidth, currentCanvasHeight, tagItemsJson]);

    // Add new child block helper
    const appendBlock = () => {
        const allBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
        const newBlock = wp.blocks.createBlock('zolo/cloud-list-child', {
            label: 'New Tag',
            link: { url: '#', openInNewTab: false },
        });
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, allBlocks.length, clientId);
    };

    if (preview) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', background: '#f0f0f0', borderRadius: '8px' }}>
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" stroke="#6366f1" strokeWidth="2" fill="#f5f3ff" />
                    <text x="50" y="32" textAnchor="middle" fill="#6366f1" fontSize="8" fontFamily="sans-serif">3D</text>
                    <text x="30" y="52" textAnchor="middle" fill="#7c3aed" fontSize="9" fontFamily="sans-serif">Cloud</text>
                    <text x="65" y="44" textAnchor="middle" fill="#2563eb" fontSize="7" fontFamily="sans-serif">List</text>
                    <text x="50" y="70" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="sans-serif">Canvas</text>
                    <text x="22" y="65" textAnchor="middle" fill="#dc2626" fontSize="6" fontFamily="sans-serif">Tags</text>
                    <text x="75" y="62" textAnchor="middle" fill="#d97706" fontSize="7" fontFamily="sans-serif">Sphere</text>
                </svg>
                <p style={{ marginTop: '12px', color: '#6b7280', fontFamily: 'sans-serif' }}>
                    {__('Cloud List – Interactive 3D Tag Sphere', 'zoloblocks')}
                </p>
            </div>
        );
    }

    return (
        <>
            {isSelected && (
                <Inspector
                    {...props}
                    getResponsiveValue={getResponsiveValue}
                    createResponsiveValue={createResponsiveValue}
                />
            )}
            <Style props={props} />
            <BlockControls>
                <ZoloToolbarGroup>
                    <ZoloToolbarButton
                        icon="insert"
                        label={__('Add Tag Item', 'zoloblocks')}
                        onClick={() => appendBlock()}
                    />
                </ZoloToolbarGroup>
            </BlockControls>
            <div {...blockProps} ref={cloudRef}>
                <SidebarOpener clientId={clientId} />

                {/* Click overlay – allows block selection when nothing is selected */}
                {!isSelected && !selectedChildId && (
                    <div
                        className="zolo-cloud-list-overlay"
                        onClick={(e) => {
                            e.stopPropagation();
                            selectBlock(clientId);
                        }}
                        onMouseDown={(e) => {
                            e.stopPropagation();
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 10,
                            cursor: 'pointer',
                        }}
                    />
                )}

                {/* Canvas – TagCanvas renders the 3D sphere here */}
                <canvas
                    ref={canvasRef}
                    id={`${uniqueId}-canvas`}
                    className="zolo-cloud-list-canvas"
                    width={currentCanvasWidth}
                    height={currentCanvasHeight}
                    data-tag-canvas-settings={JSON.stringify(settings)}
                >
                    {__('Your browser does not support the canvas element.', 'zoloblocks')}
                </canvas>

                {/* Hidden tag list – TagCanvas reads <a> elements from here */}
                <div
                    className="zolo-cloud-list-hidden-wrap"
                    id={`${uniqueId}-wrap`}
                    style={{ display: 'none' }}
                    aria-hidden="true"
                >
                    {(() => {
                        const hasPerTagBgOutline = tagItems.some((t) => t.bgOutlineColor);
                        return tagItems.map((item, i) => {
                            const itemStyle = {};
                            if (item.bgOutlineColor) {
                                itemStyle.color = item.bgOutlineColor;
                            } else if (hasPerTagBgOutline) {
                                itemStyle.color = 'transparent';
                            } else if (item.textColor) {
                                itemStyle.color = item.textColor;
                            }
                            if (item.bgColor) itemStyle.backgroundColor = item.bgColor;
                            return (
                                <a
                                    key={i}
                                    href={`#cloud-tag-${i}`}
                                    title={item.tooltip || undefined}
                                    style={Object.keys(itemStyle).length ? itemStyle : undefined}
                                    data-weight={item.weight || item.fontSize || (currentTextHeight + i * 2)}
                                    {...(item.bgOutlineColor ? { 'data-bg-outline': item.bgOutlineColor } : {})}
                                    {...(item.bgOutlineThickness ? { 'data-bg-outline-thickness': item.bgOutlineThickness } : {})}
                                >
                                    {item.label}
                                </a>
                            );
                        });
                    })()}
                </div>

                {/* InnerBlocks – hidden, managed via canvas tag clicks or List View */}
                <div {...innerBlocksProps} style={{ display: 'none' }} />

                {/* Add Item button */}
                <button
                    className="zolo-appender-btn"
                    onClick={() => appendBlock()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    {__('Add Tag Item', 'zoloblocks')}
                </button>
            </div>
        </>
    );
}
