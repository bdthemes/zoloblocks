import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {useEffect, useState} from '@wordpress/element';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';
const {classArrayToStr, SidebarOpener} = window.zoloModule;
import Style from './styles';
export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {preview, uniqueId, parentClasses, commentQuery, preset} = attributes;
  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-recent-comments-wrap zolo-comment-${preset}`, classArrayToStr(parentClasses)),
  });
  useEffect(() => {
    if (typeof commentQuery === 'undefined') {
      setAttributes({
        commentQuery: {
          sourceType:'post',
          includeBy:[],
          excludeBy:[],
          includeAuthors:[],
          excludeAuthors:[],
          itemLimit: 6,
          offset: 0,
          onlyParent:false,
          statusComment:'approve',
          orderBy: 'date',
          order: 'desc',
        },
      });
    }
  }, []);

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview.postCategory} alt={__('Recent Comments Preview', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>
        <RenderView attributes={attributes} setAttributes={setAttributes}/>
      </div>
    </>
  );
}
