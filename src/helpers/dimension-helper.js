import { hasVal } from './helper';
import { prefix } from '../global/constants';

export const generateDimensionAttributes = (controlName, defaults = {}) => {
    const { top, bottom, left, right, isLinked = true } = defaults;

    const desktopTop = hasVal(top)
        ? {
              [`${prefix}${controlName}Top`]: {
                  type: 'string',
                  default: `${top}`,
              },
          }
        : {
              [`${prefix}${controlName}Top`]: {
                  type: 'string',
              },
          };

    const desktopRight = hasVal(right)
        ? {
              [`${prefix}${controlName}Right`]: {
                  type: 'string',
                  default: `${right}`,
              },
          }
        : {
              [`${prefix}${controlName}Right`]: {
                  type: 'string',
              },
          };

    const desktopBottom = hasVal(bottom)
        ? {
              [`${prefix}${controlName}Bottom`]: {
                  type: 'string',
                  default: `${bottom}`,
              },
          }
        : {
              [`${prefix}${controlName}Bottom`]: {
                  type: 'string',
              },
          };

    const desktopLeft = hasVal(left)
        ? {
              [`${prefix}${controlName}Left`]: {
                  type: 'string',
                  default: `${left}`,
              },
          }
        : {
              [`${prefix}${controlName}Left`]: {
                  type: 'string',
              },
          };
    return {
        ...desktopTop,
        ...desktopRight,
        ...desktopBottom,
        ...desktopLeft,

        [`${prefix}TAB${controlName}Top`]: {
            type: 'string',
        },
        [`${prefix}TAB${controlName}Right`]: {
            type: 'string',
        },
        [`${prefix}TAB${controlName}Bottom`]: {
            type: 'string',
        },
        [`${prefix}TAB${controlName}Left`]: {
            type: 'string',
        },

        [`${prefix}MOB${controlName}Top`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}Right`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}Bottom`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}Left`]: {
            type: 'string',
        },

        [`${prefix}${controlName}IsLinked`]: {
            type: 'boolean',
            default: isLinked,
        },

        [`${prefix}${controlName}Unit`]: {
            type: 'string',
            default: 'px',
        },
        [`${prefix}TAB${controlName}Unit`]: {
            type: 'string',
            default: 'px',
        },
        [`${prefix}MOB${controlName}Unit`]: {
            type: 'string',
            default: 'px',
        },
    };
};

/**
 * Function Name: generateDimensionStyle
 * @param {*} param
 * @returns string
 */
export const generateDimensionStyle = ({ controlName, styleFor, attributes }) => {
    const {
        [`${prefix}${controlName}Unit`]: dimensionUnit,
        [`${prefix}${controlName}Top`]: dimensionTop,
        [`${prefix}${controlName}Right`]: dimensionRight,
        [`${prefix}${controlName}Bottom`]: dimensionBottom,
        [`${prefix}${controlName}Left`]: dimensionLeft,

        [`${prefix}TAB${controlName}Unit`]: TABdimensionUnit,
        [`${prefix}TAB${controlName}Top`]: TABdimensionTop,
        [`${prefix}TAB${controlName}Right`]: TABdimensionRight,
        [`${prefix}TAB${controlName}Bottom`]: TABdimensionBottom,
        [`${prefix}TAB${controlName}Left`]: TABdimensionLeft,

        [`${prefix}MOB${controlName}Unit`]: MOBdimensionUnit,
        [`${prefix}MOB${controlName}Top`]: MOBdimensionTop,
        [`${prefix}MOB${controlName}Right`]: MOBdimensionRight,
        [`${prefix}MOB${controlName}Bottom`]: MOBdimensionBottom,
        [`${prefix}MOB${controlName}Left`]: MOBdimensionLeft,

        [`${prefix}${controlName}IsLinked`]: isLinked,
    } = attributes;

    let dimensionStylesDesktop = ' ';
    let dimensionStylesTab = ' ';
    let dimensionStylesMobile = ' ';

    if (isLinked === true) {
        if (styleFor === 'border-radius') {
            dimensionStylesDesktop = `
                ${dimensionTop ? `border-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ''}
    	    `;

            dimensionStylesTab = `
                ${TABdimensionTop ? `border-radius: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ''}
   		    `;

            dimensionStylesMobile = `
                ${MOBdimensionTop ? `border-radius: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ''}
            `;
        } else {
            dimensionStylesDesktop = `
                ${dimensionTop ? `${styleFor}: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
            `;

            dimensionStylesTab = `
                ${TABdimensionTop ? `${styleFor}: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ''}
            `;

            dimensionStylesMobile = `
                ${MOBdimensionTop ? `${styleFor}: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
             `;
        }
    } else {
        if (styleFor === 'border-radius') {
            dimensionStylesDesktop = `
                ${dimensionTop ? `border-top-left-radius: ${parseFloat(dimensionTop)}${dimensionUnit};` : ''}
                ${dimensionRight ? `border-top-right-radius: ${parseFloat(dimensionRight)}${dimensionUnit};` : ' '}
                ${dimensionLeft ? `border-bottom-left-radius: ${parseFloat(dimensionLeft)}${dimensionUnit};` : ' '}
                ${dimensionBottom ? `border-bottom-right-radius: ${parseFloat(dimensionBottom)}${dimensionUnit};` : ' '}

            `;

            dimensionStylesTab = `
                ${TABdimensionTop ? `border-top-left-radius: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}
                ${TABdimensionRight ? `border-top-right-radius: ${parseFloat(TABdimensionRight)}${TABdimensionUnit};` : ' '}
                ${TABdimensionLeft ? `border-bottom-left-radius: ${parseFloat(TABdimensionLeft)}${TABdimensionUnit};` : ' '}
                ${TABdimensionBottom ? `border-bottom-right-radius: ${parseFloat(TABdimensionBottom)}${TABdimensionUnit};` : ' '}

            `;

            dimensionStylesMobile = `
                ${MOBdimensionTop ? `border-top-left-radius: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionRight ? `border-top-right-radius: ${parseFloat(MOBdimensionRight)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionLeft ? `border-bottom-left-radius: ${parseFloat(MOBdimensionLeft)}${MOBdimensionUnit};` : ' '}
                ${MOBdimensionBottom ? `border-bottom-right-radius: ${parseFloat(MOBdimensionBottom)}${MOBdimensionUnit};` : ' '}

            `;
        } else {
            dimensionStylesDesktop = `
            ${dimensionTop ? `${styleFor}-top: ${parseFloat(dimensionTop)}${dimensionUnit};` : ' '}
            ${dimensionRight ? `${styleFor}-right: ${parseFloat(dimensionRight)}${dimensionUnit};` : ' '}
            ${dimensionLeft ? `${styleFor}-left: ${parseFloat(dimensionLeft)}${dimensionUnit};` : ' '}
            ${dimensionBottom ? `${styleFor}-bottom: ${parseFloat(dimensionBottom)}${dimensionUnit};` : ' '}

        `;

            dimensionStylesTab = `
            ${TABdimensionTop ? `${styleFor}-top: ${parseFloat(TABdimensionTop)}${TABdimensionUnit};` : ' '}
            ${TABdimensionRight ? `${styleFor}-right: ${parseFloat(TABdimensionRight)}${TABdimensionUnit};` : ' '}
            ${TABdimensionLeft ? `${styleFor}-left: ${parseFloat(TABdimensionLeft)}${TABdimensionUnit};` : ' '}
            ${TABdimensionBottom ? `${styleFor}-bottom: ${parseFloat(TABdimensionBottom)}${TABdimensionUnit};` : ' '}

        `;

            dimensionStylesMobile = `
        ${MOBdimensionTop ? `${styleFor}-top: ${parseFloat(MOBdimensionTop)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionRight ? `${styleFor}-right: ${parseFloat(MOBdimensionRight)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionLeft ? `${styleFor}-left: ${parseFloat(MOBdimensionLeft)}${MOBdimensionUnit};` : ' '}
        ${MOBdimensionBottom ? `${styleFor}-bottom: ${parseFloat(MOBdimensionBottom)}${MOBdimensionUnit};` : ' '}
        `;
        }
    }

    return {
        dimensionStylesDesktop,
        dimensionStylesTab,
        dimensionStylesMobile,
    };
};
