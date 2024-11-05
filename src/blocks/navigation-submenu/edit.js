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
            className: classnames('zolo-navigation-submenu-items'),
        },
        {
            allowedBlocks: ['zolo/navigation-item'],
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
                    className="zolo-navigation-submenu-add-btn"
                    onClick={() => {
                        const navigationItem = createBlock('zolo/navigation-item', {});
                        const innerBlocks = getBlock(clientId)?.innerBlocks;
                        createBlocksFromInnerBlocksTemplate([navigationItem]);
                        replaceInnerBlocks(clientId, [...innerBlocks, navigationItem]);
                        selectBlock(navigationItem?.clientId);
                    }}
                >
                    {__('Add Menu Item', 'zoloblocks')}
                </button>
            </div>
        </>
    );
};

export default Edit;
