import { select } from "@wordpress/data";

// this function is for creating a unique blockId for each block's unique className
export const handleUniqueId = ({
    BLOCK_PREFIX,
    uniqueId,
    setAttributes,
    clientId,
  }) => {
    const unique_id =
      BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 8);
  
    /**
     * Define and Generate Unique Block ID
     */
    if (!uniqueId) {
      setAttributes({ uniqueId: unique_id });
    }
  
    /**
     * Assign New Unique ID when duplicate uniqueId found
     * Mostly happens when User Duplicate a Block
     */
  
    const all_blocks = select("core/block-editor").getBlocks();
  
    let duplicateFound = false;
    const fixDuplicateUniqueId = (blocks) => {
      if (duplicateFound) return;
      for (const item of blocks) {
        const { innerBlocks } = item;
        if (item.attributes.uniqueId === uniqueId) {
          if (item.clientId !== clientId) {
            setAttributes({ uniqueId: unique_id });
            duplicateFound = true;
            return;
          } else if (innerBlocks.length > 0) {
            fixDuplicateUniqueId(innerBlocks);
          }
        } else if (innerBlocks.length > 0) {
          fixDuplicateUniqueId(innerBlocks);
        }
      }
    };
  
    fixDuplicateUniqueId(all_blocks);
  };
  