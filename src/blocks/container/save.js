import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], panelProps);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], panelProps);

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId, containerWidth, tagName, link } =
        attributes;

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
            {...(zoloId && { id: zoloId })}
            {...(tagName === 'a' &&
                link?.url && {
                    href: link.url,
                    ...(link.openInNewTab ? { rel: 'noreferrer noopener', target: '_blank' } : {}),
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
