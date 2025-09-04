/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr, SidebarOpener, sanitizeText, sanitizeUrl } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, preset, parentClasses, socialText, socialProfiles, socialColor, layout } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${preset} ${uniqueId}`, layout, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('Social Links Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        let socialName = Object.keys(profile.icon)[0];
                        const iconName = profile && profile.text && profile.text.toLowerCase();
                        return (
                            <a
                                href={profile.link && sanitizeUrl(profile.link.url)}
                                key={index}
                                target={profile.link && profile.link.openInNewTab ? '_blank' : undefined}
                                rel={profile.link && profile.link.openInNewTab ? 'noopener noreferrer' : undefined}
                                className={`zolo-social-item zolo-${socialName} ${socialColor} ${iconName}`}
                                onClick={(e) => e.preventDefault()}
                            >
                                {socialText !== 'none' && (
                                    <span className="zolo-social-icon">
                                        <DisplayZoloIcon icon={profile.icon} />
                                    </span>
                                )}
                                {socialText !== 'iconOnly' && <span className="zolo-social-text">{sanitizeText(profile.text)}</span>}
                            </a>
                        );
                    })}
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
