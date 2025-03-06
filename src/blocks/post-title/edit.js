import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {useEntityProp} from '@wordpress/core-data';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';

const {classArrayToStr, SidebarOpener, DynamicTag} = window.zoloModule;

import Style from './styles';

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId, context: {postType, postId}} = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    titleTag,
    isLink,
    linkTarget,
    linkRel,
    titleWords
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
  });

  const isPostAvailable = postType && postId;
  const TagName = titleTag;
  const [postTitle] = useEntityProp('postType', postType, 'title', postId);
  const [postLink] = useEntityProp('postType', postType, 'link', postId);

  const applyTitleLimit = (title) => {
    if (!title || titleWords <= 0) {
      return title;
    }
    return title.trim().split(' ', titleWords).join(' ');
  };

  const renderTitleWithLink = (title) => {
    if (isLink) {
      return (
        <a
          href={postLink || '#'}
          target={linkTarget || undefined}
          rel={linkRel}
          onClick={(event) => event.preventDefault()} // Prevent default for edit mode
        >
          {title}
        </a>
      );
    }
    return title;
  };

  const titleToShow = applyTitleLimit(isPostAvailable ? postTitle : __('Post Title', 'zoloblocks'));

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
        <Style props={props}/>
        <TagName {...blockProps}>
          <SidebarOpener clientId={clientId}/>
          {renderTitleWithLink(titleToShow)}
        </TagName>
    </>
  );
}
