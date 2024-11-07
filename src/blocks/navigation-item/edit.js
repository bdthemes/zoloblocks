//WordPress dependencies
import { useBlockProps, useInnerBlocksProps, BlockControls, store as blockEditorStore, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
//external dependencies
import classnames from 'classnames';
import { useState, useRef, useEffect } from '@wordpress/element';
//internal dependencies
import Inspector from './inspector';
import './style.scss';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { addSubmenu as addSubmenuIcon, link as linkIcon, removeSubmenu, menu as menuIcon } from '@wordpress/icons';
import LinkPopover from './components/link-popover';
import { useDispatch, useSelect } from '@wordpress/data';
import removeLink from './utils/remove-link';
import { updateAttributes } from './utils/update-attributes';
import { useMergeRefs } from '@wordpress/compose';
import useIsInvalidLink from './utils/use-invalid-link';
import NavigationAppenderButton from './components/appender-button';
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
const { DisplayZoloIcon } = window.zoloModule;
// import style
import Style from './style';

const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, onReplace } = props;
    const { uniqueId, preview, addSubmenu, url, label, id, kind, type, subMenuIndicator } = attributes;

    const { selectPreviousBlock, replaceInnerBlocks, selectBlock } = useDispatch(blockEditorStore);

    // Have the link editing ui open on mount when lacking a url and selected.
    const [isLinkOpen, setIsLinkOpen] = useState(isSelected && !url);
    // Store what element opened the popover, so we know where to return focus to (toolbar button vs navigation link text)
    const [openedBy, setOpenedBy] = useState(null);
    // Use internal state instead of a ref to make sure that the component
    // re-renders when the popover's anchor updates.
    const [popoverAnchor, setPopoverAnchor] = useState(null);
    const linkUIref = useRef();
    const ref = useRef();
    const listItemRef = useRef(null);
    const [isInvalid, isDraft] = useIsInvalidLink(kind, type, id);

    const { hasInnerBlocks, isNested, hasChildBlocks, currentPostType, currentPostId } = useSelect(
        (select) => {
            const { getBlockOrder, getBlockParents, getBlockName, getBlock } = select('core/block-editor');
            const { getCurrentPostId, getCurrentPostType } = select('core/editor');
            return {
                hasInnerBlocks: getBlockOrder(clientId).length > 0,
                isNested: getBlockName(getBlockParents(clientId).at(-1)) === 'zolo/navigation-submenu',
                hasChildBlocks: getBlock(clientId)?.innerBlocks?.length > 0,
                currentPostType: getCurrentPostType(),
                currentPostId: getCurrentPostId(),
            };
        },
        [clientId]
    );

    const CustomAppender = () => (
        <NavigationAppenderButton
            onClick={() => setIsLinkOpen(true)}
            rootClientId={clientId}
            isMegaMenu={attributes?.addSubmenu && attributes?.submenuType === 'megamenu'}
        />
    );

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, 'zolo-navigation-item', {
            'has-megamenu': attributes?.addSubmenu && attributes?.submenuType === 'megamenu',
            'has-submenu': attributes?.addSubmenu && attributes?.submenuType === 'dropdown',
            'current-item': id === currentPostId && currentPostType === type,
        }),
        ref: useMergeRefs([listItemRef, setPopoverAnchor]),
        'data-id': id,
        'data-type': type,
        'data-kind': kind,
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: classnames('zolo-navigation-submenu-wrapper', {
                [`submenu-type-${attributes.submenuType}`]: attributes?.addSubmenu && attributes?.submenuType,
            }),
        },
        {
            allowedBlocks: ['zolo/navigation-submenu', 'zolo/megamenu'],
            renderAppender: !hasChildBlocks && isSelected ? CustomAppender : false,
        }
    );

    useEffect(() => {
        if (url && !isSelected) {
            setIsLinkOpen(false);
        }

        //close popover if user focus outside of the popover
        const handleClickOutside = (event) => {
            if (linkUIref.current && !linkUIref.current.contains(event.target)) {
                setIsLinkOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [url, isSelected, isLinkOpen]);

    if (!url || isInvalid || isDraft) {
        blockProps.onClick = () => {
            setIsLinkOpen(true);
            setOpenedBy(ref.current);
        };
    }

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && (
                <Inspector attributes={attributes} setAttributes={setAttributes} hasInnerBlocks={hasInnerBlocks} isNested={isNested} />
            )}
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        name="link"
                        icon={linkIcon}
                        title={__('Link', 'zoloblocks')}
                        onClick={(event) => {
                            if (isLinkOpen) {
                                setOpenedBy(null);
                                setIsLinkOpen(false);
                            } else {
                                setOpenedBy(event.target);
                                setIsLinkOpen(true);
                            }
                        }}
                    />
                    {!hasInnerBlocks ? (
                        <>
                            <ToolbarButton
                                icon={addSubmenuIcon}
                                label={__('Add Submenu', 'zoloblocks')}
                                onClick={() => {
                                    setAttributes({ addSubmenu: true });
                                    setAttributes({ submenuType: 'dropdown' });
                                    const navigationItem = createBlock('zolo/navigation-item', {});
                                    const submenu = createBlock('zolo/navigation-submenu', {}, [navigationItem]);
                                    createBlocksFromInnerBlocksTemplate([submenu]);
                                    replaceInnerBlocks(clientId, [submenu]);
                                    selectBlock(navigationItem?.clientId);
                                }}
                            />
                            {!isNested && (
                                <ToolbarButton
                                    icon={menuIcon}
                                    label={__('Add Mega Menu', 'zoloblocks')}
                                    onClick={() => {
                                        setAttributes({ addSubmenu: true });
                                        setAttributes({ submenuType: 'megamenu' });
                                        const container = createBlock('zolo/container', {
                                            containerWidthType: 'alignfull',
                                            variationStatus: true,
                                        });
                                        const megaMenu = createBlock('zolo/megamenu', {}, [container]);
                                        createBlocksFromInnerBlocksTemplate([megaMenu]);
                                        replaceInnerBlocks(clientId, [megaMenu]);
                                        selectBlock(container?.clientId);
                                    }}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <ToolbarButton
                                icon={removeSubmenu}
                                name="Remove Submenu"
                                label={__(
                                    `${attributes?.submenuType && attributes?.submenuType === 'megamenu' ? 'Remove Mega Menu' : 'Remove Submenu'}`,
                                    'zoloblocks'
                                )}
                                onClick={() => {
                                    setAttributes({ addSubmenu: false });
                                    setAttributes({ submenuType: '' });
                                    replaceInnerBlocks(clientId, []);
                                }}
                            />
                        </>
                    )}
                </ToolbarGroup>
            </BlockControls>

            <li {...blockProps}>
                <a className="zolo-navigation-link">
                    {isLinkOpen ? (
                        <LinkPopover
                            ref={linkUIref}
                            clientId={clientId}
                            link={attributes}
                            onClose={() => {
                                // If there is no link then remove the auto-inserted block.
                                // This avoids empty blocks which can provided a poor UX.
                                if (!url) {
                                    // Fixes https://github.com/WordPress/gutenberg/issues/61361
                                    // There's a chance we're closing due to the user selecting the browse all button.
                                    // Only move focus if the focus is still within the popover ui. If it's not within
                                    // the popover, it's because something has taken the focus from the popover, and
                                    // we don't want to steal it back.
                                    if (linkUIref.current.contains(window.document.activeElement)) {
                                        // Select the previous block to keep focus nearby
                                        selectPreviousBlock(clientId, true);
                                    }

                                    // Remove the link.
                                    onReplace([]);
                                    return;
                                }

                                setIsLinkOpen(false);
                                if (openedBy) {
                                    openedBy.focus();
                                    setOpenedBy(null);
                                } else if (ref.current) {
                                    // select the ref when adding a new link
                                    ref.current.focus();
                                } else {
                                    // Fallback
                                    selectPreviousBlock(clientId, true);
                                }
                            }}
                            anchor={popoverAnchor}
                            onRemove={() => removeLink(setAttributes, setIsLinkOpen)}
                            onChange={(updatedValue) => {
                                updateAttributes(updatedValue, setAttributes, attributes);
                            }}
                        />
                    ) : null}
                    <RichText
                        tagName="span"
                        className="zolo-navigation-text"
                        value={attributes?.label}
                        onChange={(value) => setAttributes({ label: value })}
                        placeholder={__('Add Link', 'zoloblocks')}
                    />
                    {attributes?.addSubmenu ? (
                        <button className="zolo-submenu-arrow" aria-label={__('Submenu Arrow', 'zoloblocks')}>
                            <DisplayZoloIcon icon={subMenuIndicator} />
                        </button>
                    ) : null}
                </a>
                {addSubmenu ? <div {...innerBlocksProps}></div> : null}
            </li>
        </>
    );
};

export default Edit;
