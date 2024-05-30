import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import classnames from 'classnames';
const { classArrayToStr, SidebarOpener } = window.zoloModule;
import { Resizable } from 're-resizable';

export default function RenderView({ attributes, clientId, className }) {
    const { uniqueId, containerWidthType, contentWidthType, isBlockRootParent, parentClasses } = attributes;

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
                <SidebarOpener clientId={clientId} />
                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">
                        <InnerBlocks renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender} />
                    </div>
                ) : (
                    <InnerBlocks renderAppender={hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender} />
                )}
            </div>
        </>
    );
}
