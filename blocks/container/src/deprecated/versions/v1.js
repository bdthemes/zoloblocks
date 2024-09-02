import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DynamicTag, DisplayZoloIcon } = window.zoloModule;

// attributes.js
import attributes from '../../attributes';

/**
 * Deprecated  since 1.4.0
 */
const v1 = {
    attributes: {
        ...attributes,
    },
    save({ attributes }) {
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
    },
};

export default v1;
