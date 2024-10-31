import {useEffect, useState, useCallback, useRef} from '@wordpress/element';
import {subscribe} from '@wordpress/data';
import {__} from '@wordpress/i18n';
import {
  generateAnchor,
  isAdvancedHeading,
  getHeaderLevel,
  getHeaderContent,
  getAllChildHeadingBlocks,
  getsHeadingBlocks,
  formatHeaders,
  parseList
} from './helper';

const TableOfContents = ({blockProp}) => {
  const {attributes, setAttributes} = blockProp;
  const {tableOfContent, listStyle, allowedHeading} = attributes;

  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';

  const [headers, setHeaders] = useState(JSON.parse(tableOfContent.replace(/u0022/g, '"')) || []);

  const unsubscribeRef = useRef(null);

  const setHeadersFromBlocks = useCallback(() => {
    const headings = getsHeadingBlocks().map((header) => header.attributes);
    headings.forEach((heading, index) => {
      if (!heading.anchor) {
        const anchorText = getHeaderContent(heading);
        heading.anchor = generateAnchor(anchorText, index + 1);
      }
    });
    setHeaders((prevHeaders) => {
      if (JSON.stringify(headings) !== JSON.stringify(prevHeaders)) {
        return headings;
      }
      return prevHeaders;
    });
  }, []);


  useEffect(() => {
    setHeadersFromBlocks();
    unsubscribeRef.current = subscribe(() => {
      setHeadersFromBlocks();
    });
    return () => {
      if (typeof unsubscribeRef.current === 'function') {
        unsubscribeRef.current();
      }
    };
  }, [setHeadersFromBlocks]);


  useEffect(() => {
    setAttributes({
      tableOfContent: JSON.stringify(headers),
    });
  }, [headers, blockProp]);


  if (headers.length === 0) {
    return <div className="zolo-message">{__('No header found')}</div>;
  }

  return (
    <ListTag className="zolo-toc-list">
      {parseList(formatHeaders(headers, allowedHeading, getHeaderLevel), ListTag)}
    </ListTag>
  );
};

export default TableOfContents;
