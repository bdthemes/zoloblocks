import {useSelect} from "@wordpress/data";
import {
  isCoreHeading,
  isZoloBlocksAHeading,
  isEbHeading,
  isGutenverseHeading,
  isKadenceHeading,
  isQubelyHeading,
  isStackableHeading,
  isStackableHeader,
  isOtterHeading,
  parseTocSlug,
  supportedHeaders, isGutenKitHeading,
} from "@/blocks/table-of-content/helper";

function getArrayFromBlocks(headerBlocks) {
  let headerList = [];

  if (headerBlocks.length > 0) {
    headerBlocks.forEach((block) => {
      let header = {};
      if (isCoreHeading(block) || isKadenceHeading(block) || isQubelyHeading(block)) {
        header = {
          level: parseInt(block.attributes.level),
          content: block.attributes.content,
          anchor: parseTocSlug(block.attributes.content)
        };
      } else if (isZoloBlocksAHeading(block)) {
        header = {
          level: parseInt(block.attributes.titleTagName[1]),
          content: block.attributes.titleText,
          anchor: parseTocSlug(block.attributes.titleText)
        };
      } else if (isEbHeading(block)) {
        header = {
          level: parseInt(block.attributes.tagName[1]),
          content: block.attributes.content,
          anchor: parseTocSlug(block.attributes.content)
        };
      } else if (isGutenverseHeading(block)) {
        header = {
          level: parseInt(block.attributes.titleTag[1]),
          content: block.attributes.text + ' ' + block.attributes.focusText,
          anchor: parseTocSlug(block.attributes.text + block.attributes.focusText)
        };
      }else if(isGutenKitHeading(block)){
        header = {
          level: parseInt(block.attributes.htmlTag[1]),
          content: block.attributes.content,
          anchor: parseTocSlug(block.attributes.content)
        };
      } else if (isStackableHeader(block)) {
        if (block.attributes.showTitle) {
          header = {
            level: parseInt(block.attributes.titleTag[1]),
            content: block.attributes.title,
            anchor: parseTocSlug(block.attributes.title),
          };
        }
      } else if (isStackableHeading(block)) {
        header = {
          level: parseInt(block.attributes.titleTag[1]),
          content: block.attributes.title,
          anchor: parseTocSlug(block.attributes.title),
        };
      } else if (isOtterHeading(block)) {
        header = {
          level: parseInt(block.attributes.tag[1]),
          content: block.attributes.content,
          anchor: parseTocSlug(block.attributes.content),
        };
      }
      headerList.push(header);
    });
  }

  return headerList;
}

function getAllHeaderBlocks(blocks) {
  let headerBlocks = [];

  blocks.forEach((block) => {
    if (supportedHeaders.includes(block.name)) {
      headerBlocks.push(block);
    }
    if (block.innerBlocks.length > 0) {
      headerBlocks.push(...getAllHeaderBlocks(block.innerBlocks));
    }
  });

  return headerBlocks;
}

// Modified useHeader hook to include child blocks
const useHeader = () => {
  const allBlocks = useSelect((select) => select("core/block-editor").getBlocks(), []);

  const headerBlocks = getAllHeaderBlocks(allBlocks);
  return getArrayFromBlocks(headerBlocks);
};

export default useHeader;
