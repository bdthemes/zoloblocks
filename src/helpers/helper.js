import { select } from '@wordpress/data';

/**
 * this function is for creating a unique uniqueId for each block's unique className
 * @param {BLOCK_PREFIX: type "string", uniqueId: "current uniqueId", setAttributes: type function, clientId}
 */
export const handleUniqueId = ({
	BLOCK_PREFIX,
	uniqueId,
	setAttributes,
	clientId,
}) => {
	const unique_id =
		BLOCK_PREFIX + '-' + Math.random().toString(36).substr(2, 8);

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

	const all_blocks = select('core/block-editor').getBlocks();

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

//check if input number has value
export const hasVal = (val) => val || val === 0;

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString = " ") =>
  cssString.replace(/\s+/g, " ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, "");
