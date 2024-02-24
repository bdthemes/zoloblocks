/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { InnerBlocks } from '@wordpress/block-editor';
import { TabsContext } from './context';
import {withDispatch, withSelect } from '@wordpress/data';

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
                <div className="tab zolo-tab_style-1 zolo-tab_content-style-1 zolo-tab_animation-style-1" role="tablist" tabIndex={0}>
                    <div className="tab__list zolo-tab_header-wrap">
                        {tabs.map((singleTab, key) => {
                            return (
                                <>
                                    <div
                                        className="tab__item zolo-tab_head-item"
                                        tabIndex={key}
                                        role="tab"
                                        aria-controls={`tab-content-${key}`}
                                        aria-selected="true"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCurrentTabSelected(key);
                                        }}
                                    >
                                        <div className="zolo-tab_icon-number-wrap">
                                            <span className="zolo-tab_icon">
                                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="zolo-tab_number">{key}</span>
                                        </div>
                                        <div className="zolo-tab_head-content">
                                            <h2 className="zolo-tab_title">{singleTab.title}</h2>
                                            <p className="zolo-tab_desc">{singleTab.content}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className="tab__content">
                        <TabsContext.Provider value={{ currentTabSelected, childTabIds, tabs }}>
                            <InnerBlocks
                                template={getInnerBlockTemplates()}
                                templateLock={false}
                                allowedBlocks={allowedBlocks}
                                renderAppender={false}
                            />
                        </TabsContext.Provider>
                        {/* <div
                            className="tab__content-item"
                            id="tab-content-2"
                            data-tab-id={2}
                            role="tabpanel"
                            aria-labelledby="tab-title-2"
                            aria-hidden="true"
                        >
                            <h3 className="tab__content-title">What can be done</h3>
                            <p>
                                Up am intention on dependent questions oh elsewhere september. No betrayed pleasure possible jointure we in
                                throwing. And can event rapid any shall woman green.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
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
    withDispatch((dispatch, { childTabIds, clientId }) => {
        const { removeBlock, moveBlocksDown, moveBlocksUp, insertBlock } = dispatch('core/block-editor');
        return {
            /**
             * Move specific tab block down, switch position with next tab block.
             * @param {integer} index position index in the child tab blocks array.
             */
            onMoveDown(index) {
                moveBlocksDown([childTabIds[index]], clientId);
            },
            /**
             * Move specific tab block up, switch position with previous tab block.
             * @param {integer} index position index in the child tab blocks array.
             */
            onMoveUp(index) {
                moveBlocksUp([childTabIds[index]], clientId);
            },
            /**
             * Remove specific tab block.
             * @param {integer} index position index in the child tab blocks array.
             */
            removeBlock(index) {
                removeBlock(childTabIds[index]);
            },
            insertBlock,
        };
    }),
])(Edit);
