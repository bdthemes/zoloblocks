import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, primaryText, secondaryText, isOn, zoloId, preset, showSwitcherLabels } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-switcher-wrapper" data-is-on={isOn}>
                {/* Switch Controls */}
                <div className={classnames("zolo-switch-container-wrap", preset && `zolo-switch-${preset}`)}>
                    {showSwitcherLabels && (
                        <div
                            className={classnames('zolo-package-text zolo-primary-text', {
                                'zolo-active': isOn,
                            })}
                        >
                            {primaryText}
                        </div>
                    )}
                    <div className="zolo-switch-container">
                        <input type="checkbox" className="zolo-checkbox" defaultChecked={!isOn} />
                        <div className="zolo-knobs">
                            <span></span>
                        </div>
                        <div className="zolo-layer"></div>
                    </div>
                    {showSwitcherLabels && (
                        <div
                            className={classnames('zolo-package-text zolo-secondary-text', {
                                'zolo-active': !isOn,
                            })}
                        >
                            {secondaryText}
                        </div>
                    )}
                </div>
                {/* Content Areas - Child blocks content */}
                <div className="zolo-switcher-content-wrapper">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div >
    );
};

export default Save;
