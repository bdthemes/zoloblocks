import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import './style.scss';

const Edit = (props) => {
    const { attributes, clientId } = props;
    const {
        uniqueId,
        preview,
    } = attributes;

    const { replaceInnerBlocks, selectBlock } = dispatch('core/block-editor');
    const { getBlock } = select('core/block-editor');

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId),
    });

    const innerBlockProps = useInnerBlocksProps(
        {
            className: classnames('zolo-navmenu-submenu-items',),
        },
        {
            allowedBlocks: ['zolo/navmenu-item'],
            renderAppender: false
        }
    );


    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }


    return (
        <>
            <div {...blockProps}>
                <ul {...innerBlockProps}></ul>
                <button
                    className='zolo-navmenu-submenu-add-btn'
                    onClick={() => {
                        const navmenuItem = createBlock('zolo/navmenu-item', {})
                        const innerBlocks = getBlock(clientId)?.innerBlocks;
                        createBlocksFromInnerBlocksTemplate([navmenuItem]);
                        replaceInnerBlocks(clientId, [...innerBlocks, navmenuItem]);
                        selectBlock(navmenuItem.clientId);
                    }}>
                    {__('Add Menu Item', 'gutenkit-blocks-addon')}
                </button>
            </div>
        </>
    );
};

export default Edit;
