/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';
import { TabsContext } from '../../tabs/src/context';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, parentClasses, index } = attributes;
    const { currentTabSelected, childTabIds, tabs } = useContext(TabsContext);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // tab block does not allowed tabs block or tab block to be nested inside.
    const getBlockTypes = () => {
        const { getBlockTypes } = wp.data.select('core/blocks');
        return getBlockTypes();
    };
    const allowedBlocks = getBlockTypes()
        .map((block) => {
            return block.name;
        })
        .filter((blockName) => {
            return blockName !== 'zolo/tab';
        });

    useEffect(() => {
        // Make sure only proceed if both tabs and childTabIds are equal length. This is mainly for adding tabs and removing tabs.
        if (childTabIds.length !== tabs.length) {
            return;
        }

        const newIndex = childTabIds.findIndex((clientId) => {
            return clientId === props.clientId;
        });

        console.log(newIndex)

        if (index === newIndex) {
            setAttributes({
                title: tabs[index].title,
                id: tabs[index].id,
            });
        } else {
            setAttributes({
                index: newIndex,
            });
        }
    }, [tabs, childTabIds, props.clientId, index]);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Tab Preview', 'zolo-blocks')} />;
    }

    return currentTabSelected === index ? (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="nnn is-open" aria-hidden>
                    <InnerBlocks
                        templateLock={false}
                        allowedBlocks={allowedBlocks}
                        renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
                    />
                </div>
            </div>
        </>
    ) : null;
}
