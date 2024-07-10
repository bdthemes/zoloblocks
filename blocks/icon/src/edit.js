/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
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

        // settings
        mainIcon,
        iconLink,
        isLinkable,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
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
        </>
    );
}
