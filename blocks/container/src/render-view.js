import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, Dropdown, ToolbarButton, Button } from '@wordpress/components';
import { select } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';
import { applyFilters, removeFilter } from '@wordpress/hooks';
const { classArrayToStr, ContainerSidebarOpener } = window.zoloModule;


import { CW_TYPES, CWT_ICONS } from './constants';
export default function RenderView({ attributes, clientId, className, setAttributes }) {
    const { uniqueId, containerWidthType, contentWidthType, isBlockRootParent, parentClasses, containerWidth } = attributes;
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

    const shapeDivider = applyFilters('zolo.extensions.render.shapeDivider', [], panelProps);
    const cursorsInit = applyFilters('zolo.extensions.init.cursors', [], panelProps);

    useEffect(() => {
        if (attributes.zoloCursors.active) {
            // Run the initialization code
            cursorsInit;
        } else {
            // Call the deactivate function or clean up
            removeFilter('zolo.extensions.init.cursors', 'zolo/extensions/cursors');
        }

        // Cleanup function to run on component unmount
        return () => {
            if (attributes.zoloCursors.active) {
                // Call the deactivate function or clean up if active
                removeFilter('zolo.extensions.init.cursors', 'zolo/extensions/cursors');
            }
        };
    }
    , [attributes.zoloCursors.active]);
    //init cursors
    console.log('attributes', attributes.zoloCursors.active);



    const renderCursors = applyFilters('zolo.extensions.render.cursors', [], panelProps);

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
            <div {...blockProps}>
                <ContainerSidebarOpener clientId={clientId} />
                {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                    <div className="zolo-container-inner-blocks-wrap">
                        {renderCursors && renderCursors}
                        {shapeDivider && shapeDivider.length > 0 && shapeDivider}
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                    </div>
                ) : (
                    <>
                        {shapeDivider && shapeDivider.length > 0 && shapeDivider}
                        {renderCursors && renderCursors}
                        <InnerBlocks renderAppender={hasChildren ? undefined : InnerBlocks.ButtonBlockAppender} />
                    </>
                )}
            </div>
        </>
    );
}
