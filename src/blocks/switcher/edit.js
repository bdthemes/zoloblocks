/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect, dispatch } from '@wordpress/data';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId, className } = props;
    const { uniqueId, preview, parentClasses, primaryText, secondaryText, isOn } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.switcher} alt={__('Switcher Preview', 'zoloblocks')} />;
    }

    // Handle switcher click
    const switcherWrapRef = useRef(null);
    const [activeSwitcherId, setActiveSwitcherId] = useState(false);

    const { innerBlocks } = useSelect(
        (select) => {
            const block = select('core/block-editor').getBlocksByClientId(clientId)[0];
            return {
                innerBlocks: block ? block.innerBlocks : [],
            };
        },
        [clientId]
    );

    useEffect(() => {
        const { updateBlockAttributes } = dispatch('core/block-editor');
        if (innerBlocks && innerBlocks.length > 0) {
            innerBlocks.forEach((block, index) => {
                updateBlockAttributes(block.clientId, {
                    switcherParentId: `${uniqueId}`,
                    switcherId: `${index + 1}`,
                    switchType: index === 0 ? 'primary' : 'secondary',
                });
            });
        }
    }, [uniqueId, innerBlocks]);

    // Handle Switch Click
    const handleSwitchClick = (type) => {
        const switcherParentEl = (switcherWrapRef || { current: false }).current;
        if (!switcherParentEl) return false;

        const allSwitcherItems = switcherParentEl.querySelectorAll(`.zolo-switch-content`);
        if (allSwitcherItems.length === 0) return false;

        allSwitcherItems.forEach((item, index) => {
            if ((type === 'primary' && index === 0) || (type === 'secondary' && index === 1)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s';
            } else {
                item.style.display = 'none';
            }
        });

        setAttributes({ isOn: type === 'primary' });
        setActiveSwitcherId(type);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <div className="zolo-switcher-wrapper" ref={switcherWrapRef}>
                    {/* Switch Controls */}
                    <div className="zolo-switch-container-wrap">
                        <div
                            className={classnames('zolo-package-text zolo-primary-text', {
                                'zolo-active': isOn,
                            })}
                            onClick={() => handleSwitchClick('primary')}
                        >
                            {primaryText}
                        </div>
                        <div className="zolo-switch-container">
                            <input
                                type="checkbox"
                                className="zolo-checkbox"
                                checked={!isOn}
                                onChange={(e) => handleSwitchClick(e.target.checked ? 'secondary' : 'primary')}
                            />
                            <div className="zolo-knobs">
                                <span></span>
                            </div>
                            <div className="zolo-layer"></div>
                        </div>
                        <div
                            className={classnames('zolo-package-text zolo-secondary-text', {
                                'zolo-active': !isOn,
                            })}
                            onClick={() => handleSwitchClick('secondary')}
                        >
                            {secondaryText}
                        </div>
                    </div>

                    {/* Content Areas - Child blocks */}
                    <div className="zolo-switcher-content-wrapper">
                        <InnerBlocks
                            template={[
                                ['zolo/switcher-item', { switcherId: '1', switcherParentId: uniqueId, switchType: 'primary' }],
                                ['zolo/switcher-item', { switcherId: '2', switcherParentId: uniqueId, switchType: 'secondary' }],
                            ]}
                            templateLock="all"
                            allowedBlocks={['zolo/switcher-item']}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
