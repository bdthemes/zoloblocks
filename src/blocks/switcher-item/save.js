import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, switcherId, switcherParentId, switchType } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div
                className={`zolo-switch-content zolo-switch-content-${switchType} ${switcherId === '1' ? 'zolo-active' : ''}`}
                data-switcher-id={switcherId}
                data-switcher-parent-id={switcherParentId}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
};

export default Save;
