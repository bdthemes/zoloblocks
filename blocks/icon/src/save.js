import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

export default function save(props) {
    const { attributes } = props
    const {
        uniqueId,
        parentClasses,

        // settings
        mainIcon,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses))
    });

    return (
        <div {...blockProps}>
            <div className='zolo-icon-wrap'>
                <DisplayZoloIcon icon={mainIcon} />
            </div>
        </div>
    )
}
