import { BlockControls, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { Button, Dropdown, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { select } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import classnames from 'classnames';
const { classArrayToStr, ContainerSidebarOpener,DynamicTag } = window.zoloModule;

import { CW_TYPES, CWT_ICONS } from './constants';
export default function RenderView({ attributes, clientId, className, setAttributes }) {
    const {
        uniqueId,
        containerWidthType,
        contentWidthType,
        isBlockRootParent,
        parentClasses,
        containerWidth,
        tagName,
        link
    } = attributes;
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
            `${containerWidth !== 'cw_none' ? containerWidth : ''}`,
            classArrayToStr(parentClasses)
        ),
    });

    // filter hooks for render
const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], panelProps);
const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], panelProps);

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <Dropdown
                        className="my-container-class-name"
                        contentClassName="my-popover-content-classname"
                        placement="bottom right"
                        renderToggle={({ isOpen, onToggle }) => (
                            <ToolbarButton onClick={onToggle} aria-expanded={isOpen} icon={CWT_ICONS[containerWidth]} />
                        )}
                        renderContent={() => (
                            <div className="zolo-container-width-type">
                                {CW_TYPES &&
                                    CW_TYPES.map((type, index) => {
                                        return (
                                            <Button
                                                className="zolo-container-btn"
                                                key={index}
                                                onClick={() => {
                                                    setAttributes({
                                                        containerWidth: type?.value,
                                                    });
                                                }}
                                            >
                                                <div className="c-icon">{type?.icon}</div>
                                                <div className="c-icon-labels">
                                                    <span className="c-icon-label">{type?.label}</span>
                                                    <span className="c-icon-info">{type?.info}</span>
                                                </div>
                                            </Button>
                                        );
                                    })}
                            </div>
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            <DynamicTag
              tagName={tagName}
              {...blockProps}
               {...(tagName === 'a' && link?.url && {
                 href: link.url,
                 ...(link.openInNewTab ? { rel: 'noreferrer noopener', target: '_blank' } : {})
               })}
            >
                {renderHookBefore && renderHookBefore}
                <ContainerSidebarOpener clientId={clientId} />
                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                    </div>
                ) : (
                    <>
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                    </>
                )}
                {renderHookAfter && renderHookAfter}
            </DynamicTag>
        </>
    );
}
