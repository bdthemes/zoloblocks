import { prefix } from '../global/constants';

export const generateResCounterAttributies = (controlName, defaults = {}) => {
    const { deskRange, tabRange, mobRange } = defaults;

    return {
        [`${prefix}${controlName}Range`]: {
            type: 'number',
            default: deskRange,
        },
        [`${prefix}TAB${controlName}Range`]: {
            type: 'number',
            default: tabRange,
        },
        [`${prefix}MOB${controlName}Range`]: {
            type: 'number',
            default: mobRange,
        },
    };
};

export const generateResCounterStyle = ({ controlName, property = '', attributes, noProperty = false, defaults = {} }) => {
    const {
        [`${prefix}${controlName}Range`]: desktopRange = defaults.deskRange || 3,
        [`${prefix}TAB${controlName}Range`]: tabRange = defaults.tabRange || 2,
        [`${prefix}MOB${controlName}Range`]: mobRange = defaults.mobRange || 1,
    } = attributes;

    const desktopRangeStyle =
        desktopRange || desktopRange == 0 ? (noProperty ? '' : property + ':') + desktopRange + (noProperty ? '' : ';') : '';

    const tabRangeStyle = tabRange || tabRange == 0 ? (noProperty ? '' : property + ':') + tabRange + (noProperty ? '' : ';') : '';

    const mobRangeStyle = mobRange || mobRange == 0 ? (noProperty ? '' : property + ':') + mobRange + (noProperty ? '' : ';') : '';

    return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
