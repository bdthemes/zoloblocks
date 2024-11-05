import { prefix } from '../global/constants';

export const generateResRangeAttributies = (controlName, defaults = {}, object = false) => {
    const { defaultRange, noUnits, defaultUnit = '' } = defaults;
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
                      ...(defaultUnit && { default: defaultUnit }),
                  },

                  [`${prefix}TAB${controlName}Unit`]: {
                      type: 'string',
                  },
                  [`${prefix}MOB${controlName}Unit`]: {
                      type: 'string',
                  },
              };

    if (object) {
        return {
            [`${prefix}${controlName}Range`]: defaultRange || '',
            [`${prefix}${controlName}Unit`]: defaultUnit || '',
            [`${prefix}TAB${controlName}Range`]: '',
            [`${prefix}TAB${controlName}Unit`]: '',
            [`${prefix}MOB${controlName}Range`]: '',
            [`${prefix}MOB${controlName}Unit`]: '',
        };
    } else {
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
    }
};

export const generateResRangeStyle = ({
    controlName,
    property,
    attributes,
    noUnits,
    unitCustomTxt,
    noProperty = false,
    object = false,
    objectName = '',
}) => {
    // const {
    //     [`${prefix}${controlName}Range`]: desktopRange,
    //     [`${prefix}TAB${controlName}Range`]: tabRange,
    //     [`${prefix}MOB${controlName}Range`]: mobRange,
    // } = attributes;

    const desktopRange = object ? attributes?.[objectName]?.[`${prefix}${controlName}Range`] : attributes[`${prefix}${controlName}Range`];
    const tabRange = object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Range`] : attributes[`${prefix}TAB${controlName}Range`];
    const mobRange = object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Range`] : attributes[`${prefix}MOB${controlName}Range`];

    // const {
    //     [`${objectName}?.${prefix}${controlName}Range`]: objectDesktopRange,
    //     [`${objectName}?.${prefix}TAB${controlName}Range`]: objectTabRange,
    //     [`${objectName}?.${prefix}MOB${controlName}Range`]: objectMobRange,
    // }

    let desktopUnit = object ? attributes?.[objectName]?.[`${prefix}${controlName}Unit`] : attributes[`${prefix}${controlName}Unit`];
    let tabUnit = object ? attributes?.[objectName]?.[`${prefix}TAB${controlName}Unit`] : attributes[`${prefix}TAB${controlName}Unit`];
    let mobUnit = object ? attributes?.[objectName]?.[`${prefix}MOB${controlName}Unit`] : attributes[`${prefix}MOB${controlName}Unit`];

    if (noUnits) {
        desktopUnit = tabUnit = mobUnit = '';
    } else if (unitCustomTxt) {
        desktopUnit = tabUnit = mobUnit = unitCustomTxt;
    }

    // console.log('object status: ', object);
    // console.log('objectName: ', objectName);

    // const objectDesktopRange = object ? [objectName]?.[`${prefix}${controlName}Range`] : '';
    // console.log('object Value: ', attributes?.[objectName]?.[`${prefix}${controlName}Range`]);
    // console.log('attrs: ', attributes);
    // console.log('attrs: ', attributes?.['testObject']);

    // if (object) {
    //     return {
    //         [objectName]: {
    //             desktopRange,
    //             tabRange,
    //             mobRange,
    //             desktopUnit,
    //             tabUnit,
    //             mobUnit,
    //         },
    //     };
    // }

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
