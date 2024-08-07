/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
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

export default function Edit(props) {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(uniqueId, `zb-brand-grid-wrap ${uniqueId} ${preset}`, classArrayToStr(parentClasses)),
    });

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/brand-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.brandGrid} alt={__('Brand Grid Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <style>
                {`
                    .zb-brand-grid-wrap {
                        display: block;
                    }
                    .zb-brand-grid-wrap .block-editor-block-list__layout {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                `}
            </style>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton icon="insert" label={__('Add Brand', 'zoloblocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <InnerBlocks
                    allowedBlocks={['zolo/brand-child']}
                    template={[
                        [
                            'zolo/brand-child',
                            {
                                brandTitle: 'Zolo Blocks',
                                brandLabel: 'www.zoloblocks.com',
                                brandPhoto: {
                                    url: zoloPlaceholders.zbBrand,
                                },
                            },
                        ],
                        [
                            'zolo/brand-child',
                            {
                                brandTitle: 'Element Pack',
                                brandLabel: 'www.elementpack.pro',
                                brandPhoto: {
                                    url: zoloPlaceholders.epBrand,
                                },
                            },
                        ],
                        [
                            'zolo/brand-child',
                            {
                                brandTitle: 'Prime Slider',
                                brandLabel: 'www.primeslider.pro',
                                brandPhoto: {
                                    url: zoloPlaceholders.psBrand,
                                },
                            },
                        ],
                        [
                            'zolo/brand-child',
                            {
                                brandTitle: 'Post kit Pro',
                                brandLabel: 'www.postkit.pro',
                                brandPhoto: {
                                    url: zoloPlaceholders.upkBrand,
                                },
                            },
                        ],
                    ]}
                    renderAppender={false}
                />
                <div className="appender-btn">
                    <button className="zolo-appender-btn" onClick={() => appendBlock()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        {__('Add Brand', 'zoloblocks')}
                    </button>
                </div>
            </div>
        </>
    );
}
