import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr,DynamicTag } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], panelProps);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], panelProps);

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId, containerWidth, advBtnBgbackgroundType,tagName,link } = attributes;


    // if (advBtnBgbackgroundType === 'video') {
    //     const videoMarkup = (
    //         <div
    //             className="zolo-background-video-container"
    //             style={{
    //                 position: 'absolute',
    //                 top: '0',
    //                 left: '0',
    //                 width: '100%',
    //                 height: '100%',
    //                 overflow: 'hidden',
    //             }}
    //         >
    //             {/* <div className="zolo-background-video-embed"></div> */}
    //             <video
    //                 className="zolo-background-video-hosted zolo-html5-video"
    //                 loop={true}
    //                 muted={false}
    //                 // playsInline
    //                 // preload="auto"
    //                 autoPlay={true}
    //                 src="https://static.gopro.com/assets/blta2b8522e5372af40/blt1db3bdb627cc8cbc/66c8412d71186728a3aa3f14/03-hp-fraction-1280.mp4"
    //                 style={{ width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    //             ></video>
    //         </div>
    //     );

    //     // Insert the video markup into renderHookBefore
    //     renderHookBefore.push(videoMarkup);
    // }
    return (
        <DynamicTag
          tagName={tagName}
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    `${containerWidth !== 'cw_none' ? containerWidth : ''}`,
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {id: zoloId})}
            {...(tagName === 'a' && link?.url && {
              href: link.url,
              ...(link.openInNewTab ? { rel: 'noreferrer noopener', target: '_blank' } : {})
            })}
        >
            {renderHookBefore && renderHookBefore}

            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    <InnerBlocks.Content />
                </div>
            ) : (
                <>
                    <InnerBlocks.Content />
                </>
            )}

            {renderHookAfter && renderHookAfter}
        </DynamicTag>
    );
};

export default Save;
