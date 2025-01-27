import {useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
const {DisplayZoloIcon, classArrayToStr, SidebarOpener} = window.zoloModule;
import {useEffect} from "@wordpress/element";
import Inspector from './inspector';
import Counter from './counter';
// import style
import Style from './style';
export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId,context} = props;
  const {
    uniqueId,
    preset,
    parentClasses,
    socialIcon,
    socialLink,
    socialCounter,
    socialMeta
  } = attributes;

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-${preset}`, classArrayToStr(parentClasses)),
  });

  /**
   * context
   */
  useEffect(() => {
    setAttributes({
      preset: context['zolo/preset'],
    });
  }, [context]);

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}

      <Style props={props}/>

      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>

        <a
          href={socialLink && socialLink?.url}
          target={socialLink && socialLink?.openInNewTab ? '_blank' : undefined}
          rel={socialLink && socialLink?.openInNewTab ? 'noopener noreferrer' : undefined}
          className={`zolo-item zolo-social-icon`}
        >
          <div className="zolo-icon">
            <DisplayZoloIcon icon={socialIcon}/>
          </div>

          <div className="zolo-content">
            <Counter endValue={socialCounter}/>
            <div className="zolo-meta">
              <span>{socialMeta}</span>
            </div>
          </div>
        </a>

      </div>
    </>
  );
}
