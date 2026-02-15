import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
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


    useEffect(() => {
        if (!tagCloudRef.current || !hasData) return;

        const { ownerDocument } = tagCloudRef.current;
        const editorWindow = ownerDocument.defaultView || window;

        const canvas = tagCloudRef.current.querySelector('.zolo-tag-cloud-canvas');
        const wrap = tagCloudRef.current.querySelector('.zolo-tag-cloud-wrap');

       if(!editorWindow.TagCanvas) return;

       const { TagCanvas } = editorWindow;

       try{
           const start = TagCanvas.Start(canvas.id, wrap.id, {
               textColour: '#ff0000',
               outlineColour: '#ff00ff',
               reverse: true,
               depth: 0.8,
               maxSpeed: 0.05
           });

           if (!start) {
               console.error('TagCanvas failed to start.');
           }
       }catch (error) {
           console.error(error);
       }
       
    }, [isLoaded, tagCloudRef.current, hasData]);


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
                        <canvas width={600} height={600} className="zolo-tag-cloud-canvas" id={`${uniqueId}-canvas`}>
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
