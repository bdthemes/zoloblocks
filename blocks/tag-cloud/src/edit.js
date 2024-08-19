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
  const {preview, uniqueId, parentClasses, catQuery, preset} = attributes;
  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-tag-cloud-wrap zolo-tag-${preset}`, classArrayToStr(parentClasses)),
  });
  useEffect(() => {
    if (typeof catQuery === 'undefined') {
      setAttributes({
        catQuery: {
          catExclude: [],
          catTaxonomy: 'post_tag',
          catThumbnail:'thumbnail',
          catItemLimit: 10,
          catOrderby: 'date',
          catOrder: 'desc',
          catParent: ''
        },
      });
    }
  }, []);

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview.postCategory} alt={__('Tag Cloud Preview', 'zoloblocks')}/>;
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
