import { useBlockProps, useInnerBlocksProps, hasInnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import './style.scss';
import Inspector from './inspector';

import Style from './style';

const Edit = (props) => {
    const { attributes, clientId, context, isSelected, setAttributes } = props;
    const { uniqueId, preview, resMode } = attributes;
    const { menuBreakpoint = null } = context;

    const { replaceInnerBlocks, selectBlock } = dispatch('core/block-editor');
    const { getBlock } = select('core/block-editor');

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId),
    });

    const innerBlockProps = useInnerBlocksProps(
        {
            className: classnames('zolo-navmenu-submenu-items'),
        },
        {
            allowedBlocks: ['zolo/navmenu-item'],
            renderAppender: false,
        }
    );

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Submenu Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <ul {...innerBlockProps}></ul>
                <button
                    className="zolo-navmenu-submenu-add-btn"
                    onClick={() => {
                        const navmenuItem = createBlock('zolo/navmenu-item', {});
                        const innerBlocks = getBlock(clientId)?.innerBlocks;
                        createBlocksFromInnerBlocksTemplate([navmenuItem]);
                        replaceInnerBlocks(clientId, [...innerBlocks, navmenuItem]);
                        selectBlock(navmenuItem?.clientId);
                    }}
                >
                    {__('Add Menu Item', 'zoloblocks')}
                </button>
            </div>
        </>
    );
};

export default Edit;
