import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;

export default function save(props) {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        iconLink,
        isLinkable,
        // settings
        mainIcon,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div {...blockProps}>
            {renderHookBefore && renderHookBefore}
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
            {renderHookAfter && renderHookAfter}
        </div>
    );
}
