/**
 * Auto Block Recovery Script
 * Source: https://github.com/shimotmk/auto-block-recovery/
 * Author: shimotmk
 *
 * This script is sourced from the Auto Block Recovery repository.
 * Credit goes to shimotmk for their original implementation.
 */

import { select, subscribe, dispatch } from '@wordpress/data';
import { sprintf, __ } from '@wordpress/i18n';
import { createBlock, parse, serialize, getBlockType, isReusableBlock } from '@wordpress/blocks';

export const isInvalid = (block) => {
    const { name, isValid, validationIssues } = block;

    if (!name) {
        return false;
    }

    if (isValid || !validationIssues.length) {
        return false;
    }

    return true;
};

const recursivelyRecoverInvalidBlockList = (blocks) => {
    const currentBlocks = [...blocks];
    let isRecovered = false;
    const recursivelyRecoverBlocks = (willRecoverBlocks) => {
        willRecoverBlocks.forEach((block) => {
            if (isInvalid(block)) {
                isRecovered = true;
                const newBlock = recoverBlock(block);
                for (const key in newBlock) {
                    block[key] = newBlock[key];
                }
            }

            if (block.innerBlocks.length) {
                recursivelyRecoverBlocks(block.innerBlocks);
            }
        });
    };

    recursivelyRecoverBlocks(currentBlocks);
    return [currentBlocks, isRecovered];
};

// start recovery blocks
export const recoverBlocks = (allBlocks, invalidBlock) => {
    return allBlocks.map((block) => {
        const currentBlock = block;

        if (isReusableBlock(getBlockType(block.name))) {
            const {
                attributes: { ref },
            } = block;
            const parsedBlocks =
                parse(
                    select('core').getEntityRecords('postType', 'wp_block', {
                        include: [ref],
                    })?.[0]?.content?.raw
                ) || [];

            const [recoveredBlocks, isRecovered] = recursivelyRecoverInvalidBlockList(parsedBlocks);

            if (isRecovered) {
                invalidBlock();
                // consoleMessage(currentBlock);
                return {
                    blocks: recoveredBlocks,
                    isReusable: true,
                    ref,
                };
            }
        }

        if (currentBlock.innerBlocks && currentBlock.innerBlocks.length) {
            const newInnerBlocks = recoverBlocks(currentBlock.innerBlocks, invalidBlock);
            if (newInnerBlocks.some((InnerBlock) => InnerBlock.recovered)) {
                currentBlock.innerBlocks = newInnerBlocks;
                currentBlock.replacedClientId = currentBlock.clientId;
                currentBlock.recovered = true;
            }
        }

        if (isInvalid(currentBlock)) {
            invalidBlock();
            const newBlock = recoverBlock(currentBlock);
            newBlock.replacedClientId = currentBlock.clientId;
            newBlock.recovered = true;
            // consoleMessage(currentBlock);
            return newBlock;
        }

        return currentBlock;
    });
};

// Recovers one block.
export const recoverBlock = ({ name, attributes, innerBlocks }) => {
    return createBlock(name, attributes, innerBlocks);
};

// console message
const consoleMessage = (block) => {
    const message =
        '%c' +
        __('Notice: ', 'zoloblocks') +
        block.name +
        __(' was auto recovery.', 'zoloblocks') +
        '\n' +
        __('Please check this page in preview and update this page.', 'zoloblocks');

    //eslint-disable-next-line no-console
    console.log(message, 'width: 100%; padding: 6px 12px; background-color: #fef8ee; color: #1e1e1e;');
};

export const autoRecovery = () => {
    const checkInvalid = () => {
        let recoveredCount = 0;

        // Function to handle invalid block recovery
        const handleInvalidBlock = () => {
            recoveredCount++;
        };

        // Recover invalid blocks
        const mainBlocks = recoverBlocks(select('core/block-editor').getBlocks(), handleInvalidBlock);

        // Process each recovered block
        mainBlocks.forEach((block) => {
            if (block.isReusable && block.ref) {
                // Update the content of reusable blocks
                dispatch('core')
                    .editEntityRecord('postType', 'wp_block', block.ref, {
                        content: serialize(block.blocks),
                    })
                    .catch((error) => console.error('Error updating reusable block:', error));
            }

            if (block.recovered && block.replacedClientId) {
                // Replace the invalid block with the recovered block
                dispatch('core/block-editor').replaceBlock(block.replacedClientId, block);
            }
        });

        // Show a notice if any blocks were recovered
        // if (recoveredCount > 0) {
        //     dispatch('core/notices').createNotice(
        //         'info',
        //         sprintf(__('%s Block%s Recovered', 'zoloblocks'), recoveredCount, recoveredCount === 1 ? '' : 's'),
        //         {
        //             type: 'snackbar',
        //             isDismissible: true,
        //         }
        //     );
        // }
    };

    let content = false;

    subscribe(() => {
        const temporaryContent = select('core/editor').getEditedPostContent();
        if (select('core').getEntityRecords('postType', 'wp_block') !== null && content !== temporaryContent) {
            content = temporaryContent;
            checkInvalid();
        }
    });
};
