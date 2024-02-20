/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses, listProfiles, DscToggle, linkHoverIcon } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, preset, uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('List Links Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                {/* <div className="zolo-list-wrap"> */}
                {listProfiles &&
                    listProfiles.map((profile, index) => {
                        const iconName = profile && profile.text && profile.text.toLowerCase();
                        return (
                            <a
                                href={profile.link && profile.link.url}
                                key={index}
                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                className={`zolo-list-item ${preset == 'zolo-list-style-1' ? 'zolo-list-title' : ''}`}
                            >
                                {preset == 'zolo-list-style-1' && profile.text}
                                {preset !== 'zolo-list-style-1' && (
                                    <div className="zolo-list-icon">
                                        <DisplayZoloIcon icon={profile.icon} />
                                    </div>
                                )}
                                {preset !== 'zolo-list-style-1' && (
                                    <div className="zolo-list-content">
                                        <div className="zolo-list-title">{profile.text}</div>
                                        {DscToggle && <span className="zolo-list-desc">{profile.desc}</span>}
                                    </div>
                                )}
                                <div class="zolo-list-hover-icon">
                                    <DisplayZoloIcon icon={linkHoverIcon} />
                                </div>
                            </a>
                        );
                    })}
                {/* </div> */}
            </div>
        </>
    );
}
