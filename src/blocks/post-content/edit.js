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
    styleTags,
    headingTags
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
        {styleTags?.some((item) => item?.type === 'image') && (
            <img src={zoloPlaceholders?.placeholder}
                 alt={__('image Placeholder', 'zoloblocks')}
            />
        )}
        {styleTags?.some((item) => item?.type === 'heading' && headingTags.length > 0) && (
          <h2 className="zolo-heading">Demo Heading Text</h2>
        )}
        {styleTags?.some((item) => item?.type === 'link') && (
          <div><a onClick={event => event.preventDefault()} href="#">Demo Link Text</a></div>
        )}
      </div>
    </>
  );
}
