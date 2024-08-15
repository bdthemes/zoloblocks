/**
 * WordPress dependencies
 */

import {useBlockProps} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const {DisplayZoloIcon, classArrayToStr, SidebarOpener} = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {preview, uniqueId, preset, parentClasses, socialText, socialProfiles, socialColor, layout} = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-static-social-count-wrap zolo-${preset}`, classArrayToStr(parentClasses)),
  });

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview.socialLinks} alt={__('Static Social Count Preview', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}

      <Style props={props}/>

      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>

        {socialProfiles &&
          socialProfiles.map((profile, index) => {
            let socialName = Object.keys(profile.icon)[0];
            const iconName = profile && profile.text && profile.text.toLowerCase();
            return (
              <a
                href={profile.link && profile.link.url}
                key={index}
                target={profile.link && profile.link.openInNewTab && '_blank'}
                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                className={`zolo-item zolo-social-icon zolo-social-icon-${socialName} ${socialColor} ${iconName}`}
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
    </>
  );
}
