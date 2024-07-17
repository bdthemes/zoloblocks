import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };
    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId } = attributes;
        const hapeDividerBefore = applyFilters('zolo.extensions.render.shapeDivider.top', [], panelProps);
        const hapeDividerAfter = applyFilters('zolo.extensions.render.shapeDivider.bottom', [], panelProps);

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
                    {attributes.enableShapeDivider && hapeDividerBefore && hapeDividerBefore.length > 0 && hapeDividerBefore}
                    <InnerBlocks.Content />
                    {attributes.enableShapeDivider && hapeDividerAfter && hapeDividerAfter.length > 0 && hapeDividerAfter}
                </div>
            ) : (
                <>
                    {attributes.enableShapeDivider && hapeDividerBefore && hapeDividerBefore.length > 0 && hapeDividerBefore}
                <InnerBlocks.Content />
                    {attributes.enableShapeDivider && hapeDividerAfter && hapeDividerAfter.length > 0 && hapeDividerAfter}
                </>
            )}
        </div>
    );
};

export default Save;
