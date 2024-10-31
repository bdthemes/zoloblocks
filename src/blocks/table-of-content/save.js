import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from "classnames";
import {formatHeaders, getHeaderLevel, parseList} from "@/blocks/table-of-content/helper";

const {classArrayToStr} = window.zoloModule;
export default function Save(props) {
  const {attributes} = props;
  const {uniqueId, parentClasses, tableOfContent, listStyle, allowedHeading} = attributes;
  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';
  const headers = JSON.parse(tableOfContent);

  return (
    <div {...useBlockProps.save({
      className: classnames(uniqueId, classArrayToStr(parentClasses)),
    })}>

      <div className="zolo-toc-warpper" data-headers={JSON.stringify(headers)}>
        <ListTag className="zolo-toc-list">
          {parseList(formatHeaders(headers, allowedHeading, getHeaderLevel), ListTag)}
        </ListTag>
      </div>

    </div>
  )
}
