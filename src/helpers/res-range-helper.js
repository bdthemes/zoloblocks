import { prefix } from "../global/constants";

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
            type: 'string',
        },
        [`${prefix}MOB${controlName}Range`]: {
            type: 'string',
        },
        ...units,
    };
};

export const generateResRangeStyle = ({
    controlName,
    property,
    attributes,
}) => {
    const {
        [`${prefix}${controlName}Range`]: desktopRange,
        [`${prefix}TAB${controlName}Range`]: tabRange,
        [`${prefix}MOB${controlName}Range`]: mobRange,

        [`${prefix}${controlName}Unit`]: desktopUnit,
        [`${prefix}TAB${controlName}Unit`]: tabUnit,
        [`${prefix}MOB${controlName}Unit`]: mobUnit,
    } = attributes;

    const desktopRangeStyle =
        desktopRange || desktopRange == 0
            ? property + ':' + desktopRange + desktopUnit + ';'
            : '';

    const tabRangeStyle =
        tabRange || tabRange == 0
            ? property + ':' + tabRange + tabUnit + ';'
            : '';
    const mobRangeStyle =
        mobRange || mobRange == 0
            ? property + ':' + mobRange + mobUnit + ';'
            : '';
    return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
