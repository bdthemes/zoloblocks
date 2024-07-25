import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };
    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId } = attributes;
        const shapeDividerBefore = applyFilters('zolo.extensions.render.shapeDivider.top', [], panelProps);
        const shapeDividerAfter = applyFilters('zolo.extensions.render.shapeDivider.bottom', [], panelProps);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    {attributes.enableShapeDivider && shapeDividerBefore && shapeDividerBefore.length > 0 && shapeDividerBefore}
                    <InnerBlocks.Content />
                    {attributes.enableShapeDivider && shapeDividerAfter && shapeDividerAfter.length > 0 && shapeDividerAfter}
                </div>
            ) : (
                <>
                    {attributes.enableShapeDivider && shapeDividerBefore && shapeDividerBefore.length > 0 && shapeDividerBefore}
                <InnerBlocks.Content />
                    {attributes.enableShapeDivider && shapeDividerAfter && shapeDividerAfter.length > 0 && shapeDividerAfter}
                </>
            )}
        </div>
    );
};

export default Save;
