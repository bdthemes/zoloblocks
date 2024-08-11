import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], panelProps);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], panelProps);

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId, containerWidth } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    `${containerWidth !== 'cw_none' ? containerWidth : ''}`,
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    {renderHookBefore && renderHookBefore}
                    <InnerBlocks.Content />
                    {renderHookAfter && renderHookAfter}
                </div>
            ) : (
                <>
                    {renderHookBefore && renderHookBefore}
                    <InnerBlocks.Content />
                    {renderHookAfter && renderHookAfter}
                </>
            )}
        </div>
    );
};

export default Save;
