/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { uniqueId, preview, preset, label, parentClasses, iconType, icon, iconPosition, link } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.button} alt={__('Button Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}>
                    <a
                        className={classnames('zolo-button', `${iconPosition}`)}
                        href={link && link.url}
                        rel={link && link.openInNewTab && 'noreferrer noopener'}
                        target={link && link.openInNewTab && '_blank'}
                        title={label}
                    >
                        {iconType !== 'iconOnly' && (
                            <RichText
                                tagName="span"
                                className={`zolo-button-content`}
                                value={label}
                                onChange={(text) => setAttributes({ label: text })}
                                placeholder={__('Button Text', 'zolo-blocks')}
                                allowedFormats={[]}
                            />
                        )}
                        {iconType !== 'none' && <DisplayZoloIcon icon={icon} />}
                    </a>
                </div>
            </div>
        </>
    );
}
