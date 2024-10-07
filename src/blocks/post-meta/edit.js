import {useBlockProps} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {useEffect} from "@wordpress/element";
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import MetaItem from './meta-item';
import Style from './styles';
import {MetaIcon} from "./meta-icon";

const {classArrayToStr, SidebarOpener} = window.zoloModule;
export default function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    isSelected,
    clientId,
    context: {postType, postId},
  } = props;

  const {preview, uniqueId, parentClasses, metaData,separatorStyle,customSeparator} = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} ${separatorStyle}`, classArrayToStr(parentClasses)),
  });

  useEffect(() => {
    if (typeof metaData === 'undefined') {
      setAttributes({
        metaData: [
          {id: 1, type: 'author', link: true, showIcon: 'icon', icon: ''},
          {id: 2, type: 'date', link: true, showIcon: 'icon', icon: MetaIcon.date},
          {id: 3, type: 'time', link: false, showIcon: 'icon', icon: MetaIcon.time},
          {id: 5, type: 'terms', link: true, showIcon: 'icon', icon: MetaIcon.terms},
          {id: 4, type: 'comments', link: true, showIcon: 'icon', icon: MetaIcon.comments},
        ],
      });
    }
  }, []);

  // Preview image rendering
  if (preview) {
    return <img src={zoloParams.blocksPreview?.postMeta} alt={__('Post Meta', 'zoloblocks')}/>;
  }

  const post = useSelect(
    (select) => select('core').getEditedEntityRecord('postType', postType, postId),
    [postType, postId]
  );

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>

        {metaData &&
          metaData.map((meta, index) => (
            <>
              <MetaItem
                key={meta.id}
                meta={meta}
                post={post}
              />
              {index < metaData.length - 1 && <span className="zolo-separator">{separatorStyle==='separator-custom' && customSeparator}</span>}
            </>
          ))}
      </div>
    </>
  );
}
