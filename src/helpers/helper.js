import { select } from '@wordpress/data';
import CryptoJS from 'crypto-js';
import {forwardRef} from '@wordpress/element';
import { isURL } from '@wordpress/url';

/**
 * this function is for creating a unique uniqueId for each block's unique className
 * @param {prefix: type "string", uniqueId: "current uniqueId", setAttributes: type function, clientId}
 */
export const handleUniqueId = ({prefix, uniqueId, setAttributes, clientId}) => {
  const unique_id = prefix + '-' + Math.random().toString(36).substr(2, 8);

  /**
   * Define and Generate Unique Block ID
   */
  if (!uniqueId) {
    setAttributes({uniqueId: unique_id});
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
      const {innerBlocks} = item;
      if (item.attributes.uniqueId === uniqueId) {
        if (item.clientId !== clientId) {
          setAttributes({uniqueId: unique_id});
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
export const DynamicTag = forwardRef((props,ref) => {
  const {tagName, children, ...attr} = props;
  const Tag = tagName || 'h2';
  return <Tag ref={ref} {...attr}>{children}</Tag>;
});

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
      let mergedItem = {...matchingItem, ...item1};
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

export const getContrastRatio = (color1, color2) => {
  // Helper function to convert any color format to RGBA
  function getColorValues(color) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    return {r: data[0], g: data[1], b: data[2], a: data[3] / 255};
  }

  // Helper function to calculate luminance
  function getLuminance(color) {
    return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
  }

  // Convert colors to RGBA format
  const color1RGBA = typeof color1 === 'string' ? getColorValues(color1) : color1;
  const color2RGBA = typeof color2 === 'string' ? getColorValues(color2) : color2;

  // Calculate the contrast ratio
  const luminance1 = getLuminance(color1RGBA) + 0.05;
  const luminance2 = getLuminance(color2RGBA) + 0.05;

  const contrastRatio = luminance1 > luminance2 ? luminance1 / luminance2 : luminance2 / luminance1;

  return contrastRatio.toFixed(2); // Return the contrast ratio rounded to two decimal places
};

export const isEmpty = (value) => {
  // Check for undefined or null
  if (value == null) {
    return true;
  }

  // Check for an empty string (including whitespace-only strings)
  if (typeof value === 'string' && value.trim().length === 0) {
    return true;
  }

  // Check for an empty array
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  // Check for an empty object
  if (typeof value === 'object' && Object.keys(value).length === 0 && value.constructor === Object) {
    return true;
  }

  // If none of the above conditions are met, the value is not empty
  return false;
};

/**
 * Converts a string to a hexadecimal color code and adjusts brightness.
 *
 * @param {string} str - The input string.
 * @param {number} steps - The steps to adjust brightness. Negative for darker, positive for lighter. Range: -255 to 255.
 * @returns {string|boolean} The hexadecimal color code or false if the input string is empty.
 */
export const strToHex = (str, steps = -10) => {
  if (!str) {
    return false;
  }

  // Generate an MD5 hash of the string and get the first 6 characters.
  const hexOutput = CryptoJS.MD5(str).toString(CryptoJS.enc.Hex).substring(0, 6);

  // Ensure steps are between -255 and 255.
  steps = Math.max(-255, Math.min(255, steps));

  // Split the hex string into R, G, and B components.
  const colorParts = hexOutput.match(/.{1,2}/g);
  let output = '#';

  colorParts.forEach(color => {
    // Convert hex to decimal.
    let colorDec = parseInt(color, 16);

    // Adjust the color value by the steps and clamp between 0 and 255.
    colorDec = Math.max(0, Math.min(255, colorDec + steps));

    // Convert the adjusted value back to hex and pad with leading zeros if necessary.
    output += colorDec.toString(16).padStart(2, '0');
  });

  return output.toUpperCase();
};

export const getTaxonomies=(postType, allTaxonomyList) =>{
  const zoloTaxonomies = new Set();

  for (let tax in allTaxonomyList) {
    const value = allTaxonomyList[tax];

    if (
      value.public === true &&
      postType === value.object_type[0]
    ) {
      zoloTaxonomies.add({
        value: value.name,
        label: value.label,
      });
    }
  }

  // Convert the Set to an array before returning
  return [...zoloTaxonomies];
}


// check is popover control has value
 export const popoverHasAttrVal = (value, customCondition = false, customValue = null) => {
     if (customCondition) {
         if (value !== undefined && value !== null && value !== '' && value !== 0 && value != customValue) {
             return true;
         } else {
             return false;
         }
     } else {
         if (value !== undefined && value !== null && value !== '' && value !== 0) {
             return true;
         } else {
             return false;
         }
     }
 };

//from field unique name generator
export const generateUniqueName = (uniqueId, customNameAttribute, defaultName = 'field_name') => {
  const lastPart = uniqueId && typeof uniqueId === 'string'
    ? uniqueId.split('-').pop()
    : 'unknown';
  const sanitizedCustomName = customNameAttribute
    ? customNameAttribute
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/\s+/g, '_')
    : null;

  return sanitizedCustomName
    ? sanitizedCustomName
    : `${defaultName}_${lastPart}`;
};

//generate css for order sort control
export const generateOrderSortCSS = (items,uniqueId) => {
  return items
    .map((item, index) => {
      return `.${uniqueId}.zolo-block .${item.class} {order: ${index + 1};}`;
    }).join("\n");
};


// utils/sanitize.js

/**
 * Strip dangerous schemes like javascript:, data:, vbscript:
 */
export function stripBadSchemes(raw = '') {
  const s = String(raw).trim();
  return /^(javascript|data|vbscript):/i.test(s) ? '' : s;
}

/**
 * URL sanitizer for editor-side UX. Final security is on PHP.
 */
export function sanitizeUrl(raw) {
  const s = stripBadSchemes(raw);
  if (!s) return '';
  // Basic URL validity
  if (!isURL(s)) return '';
  return s;
}

/**
 * Text nodes (labels, plain text)
 */
export function sanitizeText(raw) {
  return String(raw ?? '').replace(/\u0000/g, '').trim();
}

/**
 * Attribute-safe text (for data-* etc. if you mirror in editor)
 */
export function sanitizeAttr(raw) {
  return sanitizeText(raw).replace(/"/g, '&quot;');
}

/**
 * Integer / Float
 */
export function sanitizeInt(raw, { min = null, max = null } = {}) {
  let v = parseInt(raw, 10);
  if (Number.isNaN(v)) v = 0;
  if (typeof min === 'number' && v < min) v = min;
  if (typeof max === 'number' && v > max) v = max;
  return v;
}
export function sanitizeFloat(raw, { min = null, max = null } = {}) {
  let v = parseFloat(raw);
  if (Number.isNaN(v)) v = 0;
  if (typeof min === 'number' && v < min) v = min;
  if (typeof max === 'number' && v > max) v = max;
  return v;
}

/**
 * Boolean
 */
export function sanitizeBool(raw) {
  return !!raw;
}

/**
 * Email sanitization function
 * Validates and sanitizes email addresses with comprehensive security checks
 * @param {*} raw - Raw email input
 * @returns {string} - Sanitized email or empty string if invalid
 */
export function sanitizeEmail(raw) {
  // Handle null/undefined/non-string inputs
  if (raw === null || raw === undefined) {
      return '';
  }

  // Convert to string and normalize
  let email = String(raw).trim().toLowerCase();

  // Return empty string if no input after trimming
  if (!email || email.length === 0) {
      return '';
  }

  // Remove dangerous characters and control characters
  email = email
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
      .replace(/[\r\n\t\v\f]/g, '') // Remove line breaks and tabs
      .replace(/[<>]/g, ''); // Remove potential XSS characters

  // Check if email contains exactly one @ symbol
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) {
      return '';
  }

  // Split into local and domain parts
  const parts = email.split('@');
  const localPart = parts[0];
  const domainPart = parts[1];

  // Validate local part (before @)
  if (!localPart || localPart.length === 0 || localPart.length > 64) {
      return '';
  }

  // Validate domain part (after @)
  if (!domainPart || domainPart.length === 0 || domainPart.length > 253) {
      return '';
  }

  // Check for consecutive dots
  if (email.includes('..')) {
      return '';
  }

  // Check if starts or ends with dot
  if (localPart.startsWith('.') || localPart.endsWith('.')) {
      return '';
  }

  // Comprehensive email regex pattern (RFC 5322 compliant)
  const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Test against regex
  if (!emailRegex.test(email)) {
      return '';
  }

  // Additional domain validation
  const domainParts = domainPart.split('.');

  // Domain must have at least one dot
  if (domainParts.length < 2) {
      return '';
  }

  // Check each domain part
  for (const part of domainParts) {
      if (!part || part.length === 0) {
          return '';
      }
      // Domain parts cannot start or end with hyphen
      if (part.startsWith('-') || part.endsWith('-')) {
          return '';
      }
      // Domain parts must contain valid characters only
      if (!/^[a-zA-Z0-9-]+$/.test(part)) {
          return '';
      }
  }

  // Check total email length (RFC 5321 limit)
  if (email.length > 254) {
      return '';
  }

  // Check TLD (top-level domain) length and format
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
      return '';
  }

  // Return the sanitized email
  return email;
}

/**
 * Target + rel hardening for <a> tags (avoid window.opener vulns)
 */
export function hardenLinkTarget({ target, rel }) {
  const t = target === '_blank' ? '_blank' : '';
  let r = String(rel || '').toLowerCase().split(/\s+/).filter(Boolean);
  if (t === '_blank') {
    if (!r.includes('noopener')) r.push('noopener');
    if (!r.includes('noreferrer')) r.push('noreferrer');
  }
  return { target: t, rel: r.join(' ') };
}
