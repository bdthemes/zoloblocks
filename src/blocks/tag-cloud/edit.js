import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useState, useLayoutEffect } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';
import Style from './styles';

const { classArrayToStr, SidebarOpener } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, parentClasses, catQuery, preset, skin } = attributes;
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasData, setHasData] = useState(false);
    const tagCloudRef = useRef(null);
    const tagCanvasRef = useRef(null);
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        ref: useMergeRefs([tagCloudRef]),
        className: classnames(
            className,
            `${uniqueId} zolo-tag-cloud zolo-tag-${preset} zolo-tag-skin-${skin}`,
            classArrayToStr(parentClasses)
        ),
    });
    useEffect(() => {
        if (typeof catQuery === 'undefined') {
            setAttributes({
                catQuery: {
                    catExclude: [],
                    catTaxonomy: 'post_tag',
                    catThumbnail: 'thumbnail',
                    catItemLimit: 10,
                    catOrderby: 'date',
                    catOrder: 'desc',
                    catParent: '',
                },
            });
        }
    }, []);

    useEffect(() => {
        if (!tagCloudRef.current || isLoaded) return;

        const { ownerDocument } = tagCloudRef.current;
        const editorWindow = ownerDocument.defaultView;

        // Already loaded
        if (editorWindow.TagCanvas) {
            setIsLoaded(true);
            return;
        }

        editorWindow.addEventListener('load', () => {
            const script = ownerDocument.querySelector('#zolo-tag-canvas-script-js');
            if (script) {
                setIsLoaded(true);
            }
        })
    }, [tagCloudRef.current, attributes?.uniqueId, attributes?.resMode]);

    const settings = {
        textColour: attributes?.animatedColor || '',
        outlineColour: attributes?.animatedOutlineColor || '',
        reverse: true,
        initial: attributes?.triggerOn == 'hover' ? null : [0.2, 0.1],
        depth: (attributes?.depth / 100) || 0.8,
        maxSpeed: (attributes?.speed / 1000) || 0.05,
        activeCursor: attributes?.activeCursor || 'pointer',
        bgColour: attributes?.animatedBackgroundColor || null,
        bgOutlineThickness: attributes?.animatedOutlineThickness || 0,
        bgRadius: attributes?.animatedBackgroundRadius || null,
        dragControl: attributes?.triggerOn == 'hover' && attributes?.dragControl || false,
        fadeIn: attributes?.visibleTime,
        outlineDash: attributes?.animatedOutlineDash,
        outlineDashSpace: attributes?.animatedOutlineDashSpace,
        outlineDashSpeed: attributes?.animatedOutlineDashSpeed,
        outlineIncrease: attributes?.animatedIncrease,
        outlineRadius: attributes?.animatedBorderRadius,
        outlineThickness: attributes?.animatedOutlineThickness,
        shadow: attributes?.animatedTextShadowColor || null,
        shadowBlur: attributes?.animatedTextShadowBlur || null,
        wheelZoom: attributes?.wheelZoom || false,
    }

    useLayoutEffect(() => {
        if (!hasData) return;
        if (!tagCloudRef.current) return;

        const { ownerDocument } = tagCloudRef.current;
        const editorWindow = ownerDocument.defaultView || window;
        if (!editorWindow.TagCanvas) return;

        const { TagCanvas } = editorWindow;

        let frame;

        frame = requestAnimationFrame(() => {
            const canvas = tagCanvasRef.current;
            const wrap = tagCloudRef.current?.querySelector('.zolo-tag-cloud-wrap');

            if (!canvas || !wrap) return;

            try {
                // Important: delete previous instance first
                TagCanvas.Delete(canvas.id);

                TagCanvas.Start(canvas.id, wrap.id, settings);
            } catch (error) {
                console.error(error);
            }
        });

        return () => {
            cancelAnimationFrame(frame);

            const canvas = tagCanvasRef.current;
            if (canvas?.id) {
                try {
                    TagCanvas.Delete(canvas.id);
                } catch (e) { }
            }
        };

    }, [skin, hasData, isLoaded, catQuery, settings]);


    useEffect(() => {
        if (tagCloudRef.current && tagCloudRef.current.querySelector('.zolo-tag-cloud-wrap') && skin == 'default') {
            tagCloudRef.current.querySelector('.zolo-tag-cloud-wrap').setAttribute('style', '');
        }
    }, [tagCloudRef.current, skin]);


    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.tagCloud} alt={__('Tag Cloud Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                {
                    attributes?.skin === 'animated' && (
                        <canvas ref={tagCanvasRef} width={attributes?.canvasSize || 400} height={attributes?.canvasSize || 400} className="zolo-tag-cloud-canvas" id={`${uniqueId}-canvas`}>
                            {__('Your browser does not support the canvas element.', 'zoloblocks')}
                        </canvas>
                    )
                }
                <div className="zolo-tag-cloud-wrap" id={`${uniqueId}-wrap`}>
                    <RenderView attributes={attributes} setAttributes={setAttributes} setHasData={setHasData} />
                </div>
            </div>
        </>
    );
}
