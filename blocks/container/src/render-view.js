import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
const { classArrayToStr, ContainerSidebarOpener } = window.zoloModule;

export default function RenderView({ attributes, clientId, className }) {
    const { uniqueId, containerWidthType, contentWidthType, isBlockRootParent, parentClasses, enableShapeDivider } = attributes;

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

    return (
        <>
            <div {...blockProps}>
                {
                    enableShapeDivider && (
                        <div className="zolo-shape-divider">
                            this is shape divider before
                        </div>
                    )}
                <ContainerSidebarOpener clientId={clientId} />
                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">

                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />

                    </div>
                ) : (
                    <>
                        {
                            enableShapeDivider && (
                                <div className="zolo-shape-divider">
                                    this is shape divider before
                                </div>
                            )}                    <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                        {
                            enableShapeDivider && (
                                <div className="zolo-shape-divider">
                                    this is shape divider after
                                </div>
                            )}                    </>
                )}
                {
                    enableShapeDivider && (
                        <div className="zolo-shape-divider">
                            this is shape divider after
                        </div>
                    )}
            </div>
        </>
    );
}
