import { prefix } from '../global/constants';

export const generateResRangeAttributies = (controlName, defaults = {}) => {
    const { defaultRange, noUnits, defaultUnit = 'px' } = defaults;
    const desktopRange = defaultRange
        ? {
              [`${prefix}${controlName}Range`]: {
                  type: 'number',
                  default: defaultRange,
              },
          }
        : {
              [`${prefix}${controlName}Range`]: {
                  type: 'number',
              },
          };
    const units =
        noUnits == true
            ? {}
            : {
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

    return {
        ...desktopRange,
        [`${prefix}TAB${controlName}Range`]: {
            type: 'number',
        },
        [`${prefix}MOB${controlName}Range`]: {
            type: 'number',
        },
        ...units,
    };
};

export const generateResRangeStyle = ({ controlName, property, attributes, noUnits, unitCustomTxt, noProperty = false }) => {
    const {
        [`${prefix}${controlName}Range`]: desktopRange,
        [`${prefix}TAB${controlName}Range`]: tabRange,
        [`${prefix}MOB${controlName}Range`]: mobRange,
    } = attributes;

    let desktopUnit = attributes[`${prefix}${controlName}Unit`];
    let tabUnit = attributes[`${prefix}TAB${controlName}Unit`];
    let mobUnit = attributes[`${prefix}MOB${controlName}Unit`];

    if (noUnits) {
        desktopUnit = tabUnit = mobUnit = '';
    } else if (unitCustomTxt) {
        desktopUnit = tabUnit = mobUnit = unitCustomTxt;
    }

    const desktopRangeStyle =
        desktopRange !== undefined && desktopRange !== '' && desktopRange !== 'undefined'
            ? (noProperty ? '' : property + ':') +
              desktopRange +
              (desktopUnit !== undefined ? desktopUnit : '') +
              (desktopUnit !== undefined ? ';' : '')
            : '';
    const tabRangeStyle =
        tabRange !== undefined && tabRange !== null && tabRange !== '' && tabRange !== 'undefined' && tabRange !== 'null'
            ? (noProperty ? '' : property + ':') + tabRange + (tabUnit !== undefined ? tabUnit : '') + (tabUnit !== undefined ? ';' : '')
            : '';

    const mobRangeStyle =
        mobRange !== undefined && mobRange !== null && mobRange !== '' && mobRange !== 'undefined' && mobRange !== 'null'
            ? (noProperty ? '' : property + ':') + mobRange + (mobUnit !== undefined ? mobUnit : '') + (mobUnit !== undefined ? ';' : '')
            : '';


    return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
