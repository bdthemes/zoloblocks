import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from "classnames";
import {formatHeaders, parseList} from "@/blocks/table-of-content/helper";
import {__} from "@wordpress/i18n";

const {classArrayToStr} = window.zoloModule;
export default function Save(props) {
  const {attributes} = props;
  const {
    uniqueId,
    parentClasses,
    showHeading,
    showCollapsible,
    isCollapsed,
    showSticky,
    stickyPosition,
    headingText,
    headers,
    listStyle,
    allowedHeading
  } = attributes;
  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';

  return (
    <div {...useBlockProps.save({
      className: classnames(uniqueId, `content-visible`, classArrayToStr(parentClasses), {
        'collapsed': isCollapsed === false,
        [`sticky-content position-${stickyPosition}`]: showSticky === true
      }),
      'data-headers': JSON.stringify(headers),
      'data-tags': JSON.stringify(allowedHeading),
      'data-collapsed': JSON.stringify(isCollapsed)
    })}>
      {showSticky && (
        <span className="zolo-toc-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path
              stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/>
            </svg>
          </span>
      )}
      {showHeading && (
        <div className="zolo-toc-heading">
          <RichText.Content
            tagName="div"
            className="title"
            value={headingText}
          />
          {showCollapsible && (
            <button className="zolo-toc-toggle-btn">
              <svg width="1em" height="1em" aria-hidden="true" className="e-font-icon-svg e-fas-chevron-up"
                   viewBox="0 0 448 512"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
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

      {showSticky && (
        <button className="zolo-toc-open">{__('Table of Content', 'zoloblocks')}</button>
      )}

    </div>
  )
}
