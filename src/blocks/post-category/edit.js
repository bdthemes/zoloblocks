import {useBlockProps} from '@wordpress/block-editor';
import {useEffect, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';
import Style from './styles';

const {classArrayToStr, SidebarOpener} = window.zoloModule;

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {preview, uniqueId, parentClasses, catQuery, preset} = attributes;
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-post-category-wrap zolo-category-${preset}`, classArrayToStr(parentClasses)),
  });
  useEffect(() => {
    if (typeof catQuery === 'undefined') {
      setAttributes({
        catQuery: {
          catExclude: [],
          catTaxonomy: 'category',
          catThumbnail:'thumbnail',
          catItemLimit: 6,
          catOrderby: 'date',
          catOrder: 'desc',
          catParent: ''
        },
      });
    }
  }, []);

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview.postCategory} alt={__('Post category Preview', 'zoloblocks')}/>;
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
