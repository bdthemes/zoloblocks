import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from "classnames";
import {formatHeaders, getHeaderLevel, parseList} from "@/blocks/table-of-content/helper";
const {classArrayToStr} = window.zoloModule;
export default function Save(props) {
  const {attributes} = props;
  const {uniqueId, parentClasses, tableOfContent, listStyle, allowedHeading} = attributes;
  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';
  const headers = JSON.parse(tableOfContent);

  console.log(headers);
  return (
    <div {...useBlockProps.save({
      className: classnames(uniqueId, classArrayToStr(parentClasses)),
    })}>
      <h1>save </h1>
      <ListTag className={`${listStyle}-list`}>
        {parseList(formatHeaders(headers, allowedHeading, getHeaderLevel), ListTag)}
      </ListTag>
    </div>
  )
}
