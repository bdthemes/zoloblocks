/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { InnerBlocks } from '@wordpress/block-editor';
import { TabsContext } from './context';
import { withSelect } from '@wordpress/data';

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

/**
 * Edit Function
 */

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected, childTabIds } = props;
    const { preview, uniqueId, parentClasses, tabs, initialTabSelected, blockInitialized, titlePosition, rating } = attributes;

    //keep current selected tab in editor as a state defaults to initialSelected tab attribute.
    const [currentTabSelected, setCurrentTabSelected] = useState(initialTabSelected ? initialTabSelected : 0);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    const getInnerBlockTemplates = () => {
        return [
            ['zolo/tab', {}],
            ['zolo/tab', {}],
            ['zolo/tab', {}],
        ];
    };

    // Tab block does not allowed tabs block or tab block to be nested inside.
    const allowedBlocks = ['zolo/tab'];

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Tabs Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <p>Tabs</p>
            </div>
            <TabsContext.Provider value={{ currentTabSelected, childTabIds, tabs }}>
                <InnerBlocks
                    template={getInnerBlockTemplates()}
                    templateLock={false}
                    allowedBlocks={allowedBlocks}
                    renderAppender={false}
                />
            </TabsContext.Provider>
        </>
    );
};

export default compose([
    withSelect((select, ownProps) => {
        const { getBlockOrder } = select('core/block-editor');
        return {
            // Get an array of child blocks( tab blocks ) client ID in order.
            childTabIds: getBlockOrder(ownProps.clientId),
            rootId: ownProps.clientId,
        };
    }),
])(Edit);
