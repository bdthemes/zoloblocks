/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Style from './style';

/**
 * Edit Function
 */
export default function Edit(props) {
    const { attributes, className, clientId } = props;
    const { uniqueId, parentClasses, switcherId, switcherParentId, switchType } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    return (
        <>
            <Style props={props} />
            <div {...blockProps}>
                <div
                    className={`zolo-switch-content zolo-switch-content-${switchType} ${switcherId === '1' ? 'zolo-active' : ''}`}
                    data-switcher-id={switcherId}
                    data-switcher-parent-id={switcherParentId}
                    data-switcher-type={switchType}
                    style={{
                        display: `${switcherId === '1' ? 'block' : 'none'}`,
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
