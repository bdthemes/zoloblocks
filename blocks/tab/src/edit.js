/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr } = window.zoloModule;

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, className, clientId } = props;
    const { preview, uniqueId, parentClasses, tabId, tabParentId } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Tab Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            <div {...blockProps}>
                <div
                    className="tab__content-item"
                    id={`tab-content-${tabId}`}
                    data-tab-id={tabId}
                    data-tab-parent-id={tabParentId}
                    role="tabpanel"
                    aria-labelledby={`tab-title-${tabId}`}
                    aria-hidden={tabId === '1' ? 'false' : 'true'}
                    style={{
                        display: `${tabId === '1' ? 'block' : 'none'}`,
                    }}
                >
                    <InnerBlocks
                        orientation={'vertical'}
                        templateLock={false}
                        renderAppender={
                            select('core/block-editor').getBlockOrder(clientId).length > 0 ? undefined : InnerBlocks.ButtonBlockAppender
                        }
                    />
                </div>
            </div>
        </>
    );
}
