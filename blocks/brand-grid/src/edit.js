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
const { classArrayToStr } = window.zoloModule;

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
        return <img src={zoloParams.blocksPreview.brandGrid} alt={__('Brand Grid Preview', 'zolo-blocks')} />;
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
                    <ToolbarButton icon="insert" label={__('Add Brand', 'zolo-blocks')} onClick={() => appendBlock()} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={['zolo/brand-child']}
                    template={[
                        ['zolo/brand-child', {}],
                        ['zolo/brand-child', {}],
                    ]}
                    renderAppender={false}
                />
                <div className="appender-btn">
                    <Button
                        className="components-button"
                        label={__('Add Brand', 'zolo-blocks')}
                        icon="insert"
                        variant="primary"
                        onClick={() => appendBlock()}
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        {__('Add Brand', 'zolo-blocks')}
                    </Button>
                </div>
            </div>
        </>
    );
}
