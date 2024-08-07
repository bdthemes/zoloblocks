import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;

export default function save(props) {
    const { attributes } = props
    const {
        uniqueId,
        parentClasses,
        iconLink,
        isLinkable,
        // settings
        mainIcon,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses))
    });

    return (
        <div {...blockProps}>
            <DynamicTag
                tagName={isLinkable === true ? 'a' : 'div'}
                className="zolo-icon-wrap"
                {...(iconLink !== '' && {
                    href: iconLink && iconLink.url,
                    target: iconLink && iconLink.openInNewTab && '_blank',
                    rel: iconLink && iconLink.openInNewTab && 'noopener noreferrer',
                })}
            >
                <DisplayZoloIcon icon={mainIcon} />
            </DynamicTag>
        </div>
    );
}
