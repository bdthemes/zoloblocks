import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from "classnames";
import {formatHeaders, parseList} from "@/blocks/table-of-content/helper";
import {__} from "@wordpress/i18n";

const {classArrayToStr} = window.zoloModule;
export default function Save(props) {
  const {attributes, setAttributes} = props;
  const {
    uniqueId,
    parentClasses,
    showHeading,
    showCollapsible,
    isCollapsed,
    headingText,
    headers,
    listStyle,
    allowedHeading
  } = attributes;
  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';

  return (
    <div {...useBlockProps.save({
      className: classnames(uniqueId, classArrayToStr(parentClasses), {'collapsed': isCollapsed === false}),
      'data-headers': JSON.stringify(headers),
      'data-tags': JSON.stringify(allowedHeading),
      'data-collapsed': JSON.stringify(isCollapsed)
    })}>

      {showHeading && (
        <div className="zolo-toc-heading">
          <RichText.Content
            tagName="div"
            className="title"
            value={headingText}
          />
          {showCollapsible && (
            <button className="zolo-toc-toggle-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 10l6 6l6 -6h-12"/>
              </svg>
            </button>
          )}
        </div>
      )}

      <div className="zolo-toc-content">
        {headers.length > 0 ? (
          <ListTag className="zolo-toc-list">
            {parseList(formatHeaders(headers, allowedHeading), ListTag)}
          </ListTag>
        ) : (
          <p>{__('Add heading to create table of content', 'zoloblocks')}</p>
        )}
      </div>

    </div>
  )
}
