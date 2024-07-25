import { hasVal } from './helper';
import { prefix } from '../global/constants';

export const generateGapAttributes = (controlName, defaults = {}) => {
    const { defaultRange, defaultUnit = 'px' } = defaults;

    return {
        [`${prefix}${controlName}Gap`]: {
            type: 'number',
            default: defaultRange,
        },
        [`${prefix}${controlName}RowGap`]: {
            type: 'number',
        },
        [`${prefix}${controlName}ColGap`]: {
            type: 'number',
        },

        [`${prefix}TAB${controlName}Gap`]: {
            type: 'number',
        },
        [`${prefix}TAB${controlName}RowGap`]: {
            type: 'number',
        },
        [`${prefix}TAB${controlName}ColGap`]: {
            type: 'number',
        },

        [`${prefix}MOB${controlName}Gap`]: {
            type: 'number',
        },
        [`${prefix}MOB${controlName}RowGap`]: {
            type: 'number',
        },
        [`${prefix}MOB${controlName}ColGap`]: {
            type: 'number',
        },

        [`${prefix}${controlName}IsLinked`]: {
            type: 'boolean',
            default: true,
        },

        [`${prefix}${controlName}Unit`]: {
            type: 'string',
            default: defaultUnit,
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
 * Function Name: generateGapStyle
 * @param {*} param
 * @returns string
 */
export const generateGapStyle = ({ controlName, attributes }) => {
    const {
        [`${prefix}${controlName}Gap`]: gap,
        [`${prefix}${controlName}RowGap`]: rowGap,
        [`${prefix}${controlName}ColGap`]: colGap,

        [`${prefix}TAB${controlName}Gap`]: tabGap,
        [`${prefix}TAB${controlName}RowGap`]: tabRowGap,
        [`${prefix}TAB${controlName}ColGap`]: tabColGap,

        [`${prefix}MOB${controlName}Gap`]: mobGap,
        [`${prefix}MOB${controlName}RowGap`]: mobRowGap,
        [`${prefix}MOB${controlName}ColGap`]: mobColGap,

        [`${prefix}${controlName}IsLinked`]: isLinked,

        [`${prefix}${controlName}Unit`]: unit,
        [`${prefix}TAB${controlName}Unit`]: tabUnit,
        [`${prefix}MOB${controlName}Unit`]: mobUnit,
    } = attributes;

    let gapStylesDesktop = ' ';
    let gapStylesTab = ' ';
    let gapStylesMobile = ' ';

    if (isLinked === true) {
        gapStylesDesktop = `
            ${
                gap || gap === 0
                    ? `
                gap: ${parseFloat(gap)}${gap === 0 ? '' : unit};
            `
                    : ''
            }
        `;

        gapStylesTab = `
            ${tabGap || tabGap === 0 ? `gap: ${parseFloat(tabGap)}${tabGap === 0 ? '' : tabUnit};` : ''}
        `;

        gapStylesMobile = `
            ${mobGap || mobGap === 0 ? `gap: ${parseFloat(mobGap)}${mobGap === 0 ? '' : mobUnit};` : ''}
        `;
    } else {
        gapStylesDesktop = `
            ${rowGap || rowGap === 0 ? `row-gap: ${parseFloat(rowGap)}${rowGap === 0 ? '' : unit};` : ''}
            ${colGap || colGap === 0 ? `column-gap: ${parseFloat(colGap)}${colGap === 0 ? '' : unit};` : ''}
        `;

        gapStylesTab = `
            ${tabRowGap || tabRowGap === 0 ? `row-gap: ${parseFloat(tabRowGap)}${tabRowGap === 0 ? '' : tabUnit};` : ''}
            ${tabColGap || tabColGap === 0 ? `column-gap: ${parseFloat(tabColGap)}${tabColGap === 0 ? '' : tabUnit};` : ''}
        `;

        gapStylesMobile = `
            ${mobRowGap || mobRowGap === 0 ? `row-gap: ${parseFloat(mobRowGap)}${mobRowGap === 0 ? '' : mobUnit};` : ''}
            ${mobColGap || mobColGap === 0 ? `column-gap: ${parseFloat(mobColGap)}${mobColGap === 0 ? '' : mobUnit};` : ''}
        `;
    }

    return {
        gapStylesDesktop,
        gapStylesTab,
        gapStylesMobile,
    };
};
