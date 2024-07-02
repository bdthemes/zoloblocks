/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import { all } from 'axios';

export default function Edit(props) {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses, layout } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(uniqueId, `zolo-menu ${uniqueId} ${preset}`, classArrayToStr(parentClasses)),
    });

    const innerBlockProps = useInnerBlocksProps(
        {
            className: 'zolo-menu-inner-blocks',
        },
        {
            templateLock: false,
            allowedBlocks: ['core/navigation-link', 'zolo/advanced-button', 'core/navigation-submenu'],
            template: [['core/navigation-link']],
        }
    );

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('core/navigation-link', {});
        wp.data.dispatch('core/block-editor').insertBlocks(newBlock, childBlocks.length, clientId);
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.brandGrid} alt={__('Menu Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="insert" label={__('Add Menu', 'zoloblocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <ul {...innerBlockProps} />
            </div>
        </>
    );
}
