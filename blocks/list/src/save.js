/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        preset,
        listProfiles,
        headingText,
        description,
        listIcon,
        socialColor,
        socialText,
        headingTag,
        descriptionTag,
        zoloId,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-list-wrap">
                <headingTag className="list-heading">{headingText}</headingTag>
                <didescriptionTagv className="descriptipn">{description}</didescriptionTagv>
                {listProfiles &&
                    listProfiles.map((profile, index) => {
                        const iconName = profile && profile.text && profile.text.toLowerCase();
                        return (
                            <a
                                href={profile.link && profile.link.url}
                                key={index}
                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                className={`zolo-list-item zolo- ${socialColor} `}
                            >
                                <div className="zolo-list-icon">
                                    <DisplayZoloIcon icon={listIcon} />
                                </div>
                                <div className="zolo-list-content">
                                    <span className="zolo-list-title">{profile.text}</span>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default Save;
