/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import Counter from './counter';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, preset, parentClasses, socialText, socialProfiles, socialColor, layout } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} zolo-static-social-count-wrap zolo-${preset}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('Static Social Count Preview', 'zoloblocks')} />;
    }

    const individualStyle = socialProfiles.map((profile) => {
        return {
            '--zolo-ssc-bg': profile.bgColor || '',
            '--zolo-ssc-hbg': profile.bgHoverColor || '',
            '--zolo-ssc-icon-color': profile.iconColor || '',
            '--zolo-ssc-icon-bg': profile.iconBgColor || '',
            '--zolo-ssc-icon-border': profile.iconBorderColor || '',
            '--zolo-ssc-icon-hcolor': profile.iconHColor || '',
            '--zolo-ssc-icon-hbg': profile.iconHBgColor || '',
            '--zolo-ssc-icon-hborder': profile.iconHBorderColor || '',

            '--zolo-ssc-number-color': profile.numberColor || '',
            '--zolo-ssc-number-hcolor': profile.numberHoverColor || '',
            '--zolo-ssc-meta-color': profile.metaSSHColor || '',
            '--zolo-ssc-meta-hcolor': profile.metaSSHHoverColor || '',
        };
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />

                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        const iconName = profile && profile.text && profile.text.toLowerCase();
                        return (
                            <a
                                href={profile.link && profile.link.url}
                                key={index}
                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                className={`zolo-item zolo-social-icon ${iconName}`}
                                style={individualStyle[index]}
                            >
                                <div className="zolo-icon">
                                    <DisplayZoloIcon icon={profile.icon} />
                                </div>

                                <div className="zolo-content">
                                    <Counter endValue={profile.number} />
                                    <div className="zolo-meta">
                                        <span>{profile.meta}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </>
    );
}
