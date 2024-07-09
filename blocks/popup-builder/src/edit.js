/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { uniqueId, popupType, popupBoxPosition, enableOverlay, isDismissable, closeBtnPosition, closeBtnId } = attributes;

    const blockPros = useBlockProps({
        className: classNames(className, uniqueId, popupType, `${enableOverlay ? 'zolo-popup-overlay' : ''}`),
    });

    // chech if the innerblocks has child or not
    const hasChildBlocks = useSelect(
        (select) => {
            const { getBlockOrder } = select('core/block-editor');
            const blockOrder = getBlockOrder(props.clientId);
            return blockOrder.length > 0;
        },
        [props.clientId]
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockPros}>
                <div className={classNames('zolo-popup-inner', popupType, `${popupType === 'popup_box' ? popupBoxPosition : ''}`)}>
                    <InnerBlocks templateLock={false} renderAppender={hasChildBlocks ? false : InnerBlocks.ButtonBlockAppender} />
                    {isDismissable && (
                        <button className={classNames('zolo-popup-close-btn', closeBtnPosition)} id={closeBtnId}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
