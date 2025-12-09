import { createBlock } from '@wordpress/blocks';
const BLOCK_NAME = 'zolo/flexbox';
const transforms = {
    from: [
        {
            type: 'block',
            isMultiBlock: true,
            blocks: ['*'],
            __experimentalConvert(blocks) {
                const conatinerInnerBlocks = blocks.map((block) => {
                    function getInnerBlocks(innerBlocks) {
                        if (innerBlocks) {
                            return innerBlocks.map((innerBlock) =>
                                createBlock(innerBlock.name, innerBlock.attributes, getInnerBlocks(innerBlock.innerBlocks))
                            );
                        }
                        return [];
                    }

                    return createBlock(block.name, block.attributes, getInnerBlocks(block.innerBlocks));
                });

                return createBlock(
                    BLOCK_NAME,
                    {
                        variationStatus: true,
                        contentWidthType: 'alignfull',
                    },
                    conatinerInnerBlocks
                );
            },
        },
    ],
    ungroup: (attributes, innerBlocks) => innerBlocks,
    to: [
        {
            type: 'block',
            isMultiBlock: true,
            blocks: [BLOCK_NAME],
            __experimentalConvert(blocks) {
                const conatinerInnerBlocks = blocks.map((block) => {
                    function getInnerBlocks(innerBlocks) {
                        if (innerBlocks) {
                            return innerBlocks.map((innerBlock) => {
                                let innerBlockAttributes = innerBlock.attributes;
                                if (innerBlockAttributes?.isBlockRootParent) {
                                    innerBlockAttributes.isBlockRootParent = false;
                                }
                                return createBlock(innerBlock.name, innerBlockAttributes, getInnerBlocks(innerBlock.innerBlocks));
                            });
                        }
                        return [];
                    }

                    let blockAttributes = block.attributes;
                    if (blockAttributes?.isBlockRootParent) {
                        blockAttributes.isBlockRootParent = false;
                    }

                    return createBlock(block.name, blockAttributes, getInnerBlocks(block.innerBlocks));
                });

                return createBlock(
                    BLOCK_NAME,
                    {
                        variationStatus: true,
                    },
                    conatinerInnerBlocks
                );
            },
        },
    ],
};

export default transforms;
