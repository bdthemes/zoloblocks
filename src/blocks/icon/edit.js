/**
 * WordPress dependencies
 */
import { useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;

    const {
        uniqueId,
        parentClasses,
        preview,

        // settings
        mainIcon,
        iconLink,
        isLinkable,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.icon} alt={__('Icon Box Preview', 'zoloblocks')} />;
    }
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <DynamicTag
                    tagName={isLinkable === true ? 'a' : 'div'}
                    className="zolo-icon-wrap"
                    {...(iconLink !== '' && {
                        href: iconLink && iconLink.url,
                        target: iconLink && iconLink.openInNewTab ? '_blank' : undefined,
                        rel: iconLink && iconLink.openInNewTab ? 'noopener noreferrer' : undefined,
                    })}
                >
                    <DisplayZoloIcon icon={mainIcon} />
                </DynamicTag>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
