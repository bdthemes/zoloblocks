import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';

const {classArrayToStr, SidebarOpener} = window.zoloModule;

import Style from './styles';
import {useEffect} from "@wordpress/element";

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {
    preview,
    uniqueId,
    parentClasses,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
  });

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview?.postContent} alt={__('Post Content', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>
        <p>This content block will display all blocks within a single post or page.</p>
        <p>It could showcase simple structures, like consecutive paragraphs in a blog post, or more complex
          compositions, such as image galleries, videos, tables, columns, and a variety of other block types.</p>
      </div>
    </>
  );
}
