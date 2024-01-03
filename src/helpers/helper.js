import { select } from '@wordpress/data';

/**
 * this function is for creating a unique uniqueId for each block's unique className
 * @param {prefix: type "string", uniqueId: "current uniqueId", setAttributes: type function, clientId}
 */
export const handleUniqueId = ({ prefix, uniqueId, setAttributes, clientId }) => {
    const unique_id = prefix + '-' + Math.random().toString(36).substr(2, 8);

    /**
     * Define and Generate Unique Block ID
     */
    if (!uniqueId) {
        setAttributes({ uniqueId: unique_id });
        return;
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

export const softMinify = (cssString = ' ') => {
    cssString = cssString
        .replace(/[^{}]+{\s*}/g, '') //Remove empty curly braces selectors
        .replace(/\n\s+/g, '') // Remove newlines and preceding spaces
        .replace(/\s+{/g, '{') // Remove spaces before opening curly braces
        .replace(/\s+}/g, '}') // Remove spaces before closing curly braces
        .replace(/:\s+/g, ':') // Remove spaces after colons
        .replace(/;\s+/g, ';'); // Remove spaces after semicolons;

    return cssString;
};

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString = ' ') => {
    cssString = cssString
        .replace(/[^{}]+{\s*}/g, '') //Remove empty curly braces selectors
        .replace(/\n\s+/g, '') // Remove newlines and preceding spaces
        .replace(/\s+{/g, '{') // Remove spaces before opening curly braces
        .replace(/\s+}/g, '}') // Remove spaces before closing curly braces
        .replace(/:\s+/g, ':') // Remove spaces after colons
        .replace(/;\s+/g, ';'); // Remove spaces after semicolons;

    // return cssString
    return removeEmptyCSSProperties(cssString);
};

export const removeEmptyCSSProperties = (cssString) => {
    // Split the CSS string into individual rules
    const cssRules = cssString.split('}');

    // Iterate through each rule and process it
    const filteredRules = cssRules
        .map((rule) => {
            // Split the rule into selector and properties
            const [selector, properties] = rule.split('{');
            if (properties) {
                // Split the properties into individual property declarations
                const propertyDeclarations = properties.split(';').filter((declaration) => {
                    // Remove any property with an empty value or "undefined" value
                    const [property, value] = declaration.split(':');
                    return value && value.trim() !== '' && value.trim() !== 'undefined';
                });
                // Rejoin the selector and filtered properties
                return propertyDeclarations.length > 0 ? `${selector} { ${propertyDeclarations.join('; ')} }` : null;
            }
            return null;
        })
        .filter(Boolean);

    // Rejoin the filtered rules into a CSS string
    return filteredRules.join('');
};

//Dynamic Tag
export const DynamicTag = (props) => {
    const { tagName, children, ...attr } = props;
    const Tag = tagName || 'h2';
    return <Tag {...attr}>{children}</Tag>;
};

export const classArrayToStr = (classes) => {
    if (typeof classes !== 'object') {
        return '';
    }
    const uniqueClasses = [...new Set(classes)];

    return uniqueClasses.join(' ');
};

export const zoloArraysMergeIfUniqueValue = (array1, array2) => {
    // Create a new array to store the merged results
    let mergedArray = [];
    // Iterate over the first array
    array1.forEach((item1) => {
        // Find the corresponding item in the second array based on ID
        let matchingItem = array2.find((item2) => item2.value === item1.value);
        // If a match is found, merge the properties
        if (matchingItem) {
            let mergedItem = { ...matchingItem, ...item1 };
            mergedArray.push(mergedItem);
        }
    });

    return mergedArray;
};

export const customCssZoloToBlockId = (cssString = '', blockId) => cssString.replace(/{{ZOLO}}/g, `.${blockId}`);

export const addPrefixToSelector = (cssString = '', prefix) => {
    // Define the regular expression to match CSS rules
    const ruleRegex = /([^\{\}]+)\s*\{/g;

    // Replace each match with the modified selector
    const modifiedCssString = cssString.replace(ruleRegex, function (match, selector) {
        // Add the prefix to the selector and return the modified rule
        const modifiedSelector = '.' + prefix + ' ' + selector.trim();
        return modifiedSelector + ' {';
    });

    return modifiedCssString;
};
