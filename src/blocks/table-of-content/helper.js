// Import dependencies
import { select } from '@wordpress/data';

// Generate anchor from text and id
export const generateAnchor = (text = '', id = 0) => {
  let anchorText =
    `${id ? `${id}-` : ''}` +
    text
      .toString()
      .toLowerCase()
      .replace(/( |<.+?>|&nbsp;)/g, '-');
  anchorText = encodeURIComponent(
    anchorText.replace(/[^\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s-]/g, ''),
  );
  return anchorText;
};

// Check if a header is an advanced heading
export const isAdvancedHeading = (header) => header.level === undefined;

// Get header level, adjusting for advanced headings
export const getHeaderLevel = (header) =>
  isAdvancedHeading(header) ? header.titleLevel : header.level;

// Get header content, adjusting for advanced headings
export const getHeaderContent = (header) =>
  isAdvancedHeading(header) ? header.title : header.content;

// Recursively retrieve all child heading blocks
export const getAllChildHeadingBlocks = (parentBlock) => {
  let childs = [];
  parentBlock.innerBlocks.forEach((childBlock) => {
    if (['zolo/advanced-heading', 'core/heading'].includes(childBlock.name)) {
      childs.push(childBlock);
    }
    if (childBlock.innerBlocks.length > 0) {
      childs.push(...getAllChildHeadingBlocks(childBlock));
    }
  });
  return childs;
};

export const getsHeadingBlocks = () => {
  const targetBlocks = [];
  const allBlocks = select('core/block-editor').getBlocks();

  allBlocks.forEach((block) => {
    if (['zolo/advanced-heading', 'core/heading'].includes(block.name)) {
      targetBlocks.push(block);
    } else if (block.innerBlocks.length > 0) {
      targetBlocks.push(...getAllChildHeadingBlocks(block));
    }
  });
  return targetBlocks;
};

// Create hierarchical structure for headers
export const createHierarchy = (formattedHeaders, currentHeader, getHeaderLevelFn) => {
  let lastIndex = formattedHeaders.length - 1;
  if (
    formattedHeaders.length === 0 ||
    getHeaderLevelFn(formattedHeaders[0]) === getHeaderLevelFn(currentHeader)
  ) {
    formattedHeaders.push({ ...currentHeader });
  } else if (getHeaderLevelFn(formattedHeaders[lastIndex]) < getHeaderLevelFn(currentHeader)) {
    if (!formattedHeaders[lastIndex].children) {
      formattedHeaders[lastIndex].children = [
        { ...currentHeader },
      ];
    } else createHierarchy(formattedHeaders[lastIndex].children, currentHeader, getHeaderLevelFn);
  }
};

// Filter and format headers into a hierarchical structure
export const formatHeaders = (allHeaders, allowedHeading, getHeaderLevelFn) => {
  let formattedHeaders = [];
  allHeaders
    .filter((header) => allowedHeading[`h${getHeaderLevelFn(header)}`])
    .forEach((header) => createHierarchy(formattedHeaders, header, getHeaderLevelFn));
  console.log({formattedHeaders});
  return formattedHeaders;
};

export const parseList = (list,ListTag) =>
  list.map((item) => (
    <li key={item.anchor}>
      <a href={`#${item.anchor}`}>
        {getHeaderContent(item).replace(/(<.+?>)/g, '')}
      </a>
      {item.children && (
        <ListTag className="child-list">
          {parseList(item.children)}
        </ListTag>
      )}
    </li>
  ));
