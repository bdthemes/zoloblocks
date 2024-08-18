/**
 * Internal depencencies
 */
const {DisplayZoloIcon, classArrayToStr} = window.zoloModule;

import classnames from 'classnames';

import {useBlockProps} from '@wordpress/block-editor';

const Save = (props) => {
  const {attributes, className} = props;
  const {uniqueId, parentClasses, preset, socialProfiles, zoloId} = attributes;
  const individualStyle = socialProfiles.map((profile) => {
    return {
      '--zolo-ssc-bg': profile.bgColor || '',
      '--zolo-ssc-icon-color': profile.iconColor || '',
      '--zolo-ssc-icon-bg': profile.iconBgColor || '',
      '--zolo-ssc-icon-border': profile.iconBorderColor || '',
      '--zolo-ssc-icon-hcolor': profile.iconHColor || '',
      '--zolo-ssc-icon-hbg': profile.iconHBgColor || '',
      '--zolo-ssc-icon-hborder': profile.iconHBorderColor || '',
    }
  });

  return (
    <div
      {...useBlockProps.save({
        className: classnames(className, `${uniqueId} zolo-static-social-count-wrap zolo-${preset}`, classArrayToStr(parentClasses)),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >
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
              title={profile.text}
              style={individualStyle[index]}
            >

              <div className="zolo-icon">
                <DisplayZoloIcon icon={profile.icon}/>
              </div>

              <div className="zolo-content">
                <div className="zolo-count">
                  <span className="counter-value">{profile.number}</span>
                </div>
                <div className="zolo-meta">
                  <span>{profile.meta}</span>
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default Save;
