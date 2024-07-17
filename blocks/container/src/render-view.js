import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, ContainerSidebarOpener } = window.zoloModule;

export default function RenderView({ attributes, setAttributes, clientId, className }) {
    const { uniqueId, containerWidthType, contentWidthType, isBlockRootParent, parentClasses } = attributes;
    const panelProps = { attributes, setAttributes };

    const { getBlockOrder } = select('core/block-editor');
    const hasChildBlocks = getBlockOrder(clientId).length > 0;
    const hasChildren = 0 !== select('core/block-editor').getBlocks(clientId).length;
    const hasChildrenClass = hasChildren ? 'zolo-container-has-children' : '';
    const isRootContainerClass = isBlockRootParent ? 'zolo-root-container' : '';

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} ${containerWidthType} ${hasChildrenClass} ${isRootContainerClass} backend`,
            classArrayToStr(parentClasses)
        ),
    });

    const hapeDividerBefore = applyFilters('zolo.blocks.render.shapeDivider.before', [], panelProps);
    const hapeDividerAfter = applyFilters('zolo.blocks.render.shapeDivider.after', [], panelProps);

    return (
        <>
            <div {...blockProps}>
                <ContainerSidebarOpener clientId={clientId} />
                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">
                        {attributes.enableShapeDivider && hapeDividerBefore && hapeDividerBefore.length > 0 && hapeDividerBefore}
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                        {attributes.enableShapeDivider && hapeDividerAfter && hapeDividerAfter.length > 0 && hapeDividerAfter}
                    </div>
                ) : (
                    <>
                        {attributes.enableShapeDivider && hapeDividerBefore && hapeDividerBefore.length > 0 && hapeDividerBefore}
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                        {attributes.enableShapeDivider && hapeDividerAfter && hapeDividerAfter.length > 0 && hapeDividerAfter}
                    </>
                )}
            </div>
        </>
    );
}
