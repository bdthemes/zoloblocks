const {DisplayZoloIcon, classArrayToStr} = window.zoloModule;
import classnames from 'classnames';
import {useBlockProps} from '@wordpress/block-editor';
const Save = (props) => {
  const {attributes, className} = props;
  const {
    uniqueId,
    parentClasses,
    preset,
    zoloId,
    socialIcon,
    socialLink,
    socialCounter,
    socialMeta,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: classnames(
          className,
          `${uniqueId} zolo-${preset}`,
          classArrayToStr(parentClasses)
        ),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >

      <a
        href={socialLink && socialLink.url}
        target={socialLink && socialLink.openInNewTab && '_blank'}
        rel={socialLink && socialLink.openInNewTab && 'noopener noreferrer'}
        className={`zolo-item zolo-social-icon`}
      >
        <div className="zolo-icon">
          <DisplayZoloIcon icon={socialIcon}/>
        </div>

        <div className="zolo-content">
          <div className="zolo-count">
            <span className="counter-value">{socialCounter}</span>
          </div>
          <div className="zolo-meta">
            <span>{socialMeta}</span>
          </div>
        </div>
      </a>

    </div>
  );
};

export default Save;
