import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes, block }) => {
    const panelProps = { attributes };
        const applyHooksBefore = applyFilters('zolo.blocks.render.before.applyHooks', [], block, panelProps);
        const applyHooksAfter = applyFilters('zolo.blocks.render.after.applyHooks', [], block, panelProps);
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
            {applyHooksBefore && applyHooksBefore}

            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    <InnerBlocks.Content />
                </div>
            ) : (
                <>
                    <InnerBlocks.Content />
                </>
            )}
            {applyHooksAfter && applyHooksAfter}
        </div>
    );
};

export default Save;
