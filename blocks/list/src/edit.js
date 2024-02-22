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

    const handleButtonClick = () => {
        setAttributes({
            listProfiles: [
                ...listProfiles,
                {
                    id: listProfiles.length + 1,
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
                    link: {
                        url: '#',
                        openInNewTab: false,
                    },
                    text: 'List ' + Number(listProfiles.length + 1),
                    desc: 'Customize widget dimension beyond normal scale',
                },
            ],
        });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleButtonClick();
        }
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {listProfiles &&
                    listProfiles.map((profile, index) => {
                        return (
                            <>
                                <a
                                    href={profile.link && profile.link.url}
                                    key={index}
                                    target={profile.link && profile.link.openInNewTab && '_blank'}
                                    rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                    className={`zolo-list-item ${preset == 'zolo-list-style-1' ? 'zolo-list-title' : ''}`}
                                    onKeyDown={handleKeyPress}
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
                                    {preset == 'zolo-list-style-4' && (
                                        <div class="zolo-list-hover-icon">
                                            <DisplayZoloIcon icon={linkHoverIcon} />
                                        </div>
                                    )}
                                </a>
                            </>
                        );
                    })}
            </div>
        </>
    );
}
