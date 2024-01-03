import { hasVal } from './helper';
import { prefix } from '../global/constants';

export const generateBorderAttributies = (controlName, defaults = {}) => {
    const { top, right, bottom, left, color } = defaults;

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

    const desktopType = {
        [`${prefix}${controlName}BorderType`]: {
            type: 'string',
            default: '',
        },
    };

    const desktopColor = hasVal(color)
        ? {
              [`${prefix}${controlName}BorderColor`]: {
                  type: 'string',
                  default: `${color}`,
              },
          }
        : {
              [`${prefix}${controlName}BorderColor`]: {
                  type: 'string',
              },
          };

    const desktopStyle = {
        [`${prefix}${controlName}BorderStyle`]: {
            type: 'string',
            default: 'dashed',
        },
    };

    const desktopUnit = {
        [`${prefix}${controlName}Unit`]: {
            type: 'string',
            default: 'px',
        },
    };

    return {
        ...desktopTop,
        ...desktopRight,
        ...desktopBottom,
        ...desktopLeft,
        ...desktopType,
        ...desktopColor,
        ...desktopStyle,
        ...desktopUnit,
        [`${prefix}TAB${controlName}BorderType`]: {
            type: 'string',
        },
        [`${prefix}TAB${controlName}Unit`]: {
            type: 'string',
        },
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
        [`${prefix}TAB${controlName}BorderColor`]: {
            type: 'string',
        },
        [`${prefix}TAB${controlName}BorderStyle`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}BorderType`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}Unit`]: {
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
        [`${prefix}MOB${controlName}BorderColor`]: {
            type: 'string',
        },
        [`${prefix}MOB${controlName}BorderStyle`]: {
            type: 'string',
        },

        [`${prefix}${controlName}IsLinked`]: {
            type: 'boolean',
            default: true,
        },
    };
};

//generate border style
export const generateBorderStyle = ({ controlName, attributes }) => {
    const {
        [`${prefix}${controlName}BorderType`]: type,
        [`${prefix}${controlName}Unit`]: unit = 'px',
        [`${prefix}${controlName}Top`]: top,
        [`${prefix}${controlName}Right`]: right,
        [`${prefix}${controlName}Bottom`]: bottom,
        [`${prefix}${controlName}Left`]: left,
        [`${prefix}${controlName}BorderColor`]: color,
        [`${prefix}${controlName}BorderStyle`]: style,

        [`${prefix}TAB${controlName}BorderType`]: tabType,
        [`${prefix}TAB${controlName}Unit`]: tabUnit = 'px',
        [`${prefix}TAB${controlName}Top`]: tabTop,
        [`${prefix}TAB${controlName}Right`]: tabRight,
        [`${prefix}TAB${controlName}Bottom`]: tabBottom,
        [`${prefix}TAB${controlName}Left`]: tabLeft,
        [`${prefix}TAB${controlName}BorderColor`]: tabColor,
        [`${prefix}TAB${controlName}BorderStyle`]: tabStyle,

        [`${prefix}MOB${controlName}BorderType`]: mobType,
        [`${prefix}MOB${controlName}Unit`]: mobUnit = 'px',
        [`${prefix}MOB${controlName}Top`]: mobTop,
        [`${prefix}MOB${controlName}Right`]: mobRight,
        [`${prefix}MOB${controlName}Bottom`]: mobBottom,
        [`${prefix}MOB${controlName}Left`]: mobLeft,
        [`${prefix}MOB${controlName}BorderColor`]: mobColor,
        [`${prefix}MOB${controlName}BorderStyle`]: mobStyle,

        [`${prefix}${controlName}IsLinked`]: isLinked,
    } = attributes;

    let desktopBorderStyle = '';
    let tabBorderStyle = '';
    let mobBorderStyle = '';

    // Desktop border style
    const deskBorderType = type;
    const deskBorderUnit = unit;
    const deskBorderStyle = style;
    const deskBorderColor = color;
    let deskBorderWidth = '';

    if (isLinked) {
        deskBorderWidth = `
			${top && top != undefined ? `border-width:${top}${deskBorderUnit};` : ''}
		`;
    } else {
        deskBorderWidth = `
			${top && top != undefined ? `border-top-width:${top}${deskBorderUnit};` : ''}
			${right && right != undefined ? `border-right-width:${right}${deskBorderUnit};` : ''}
			${bottom && bottom != undefined ? `border-bottom-width:${bottom}${deskBorderUnit};` : ''}
			${left && left != undefined ? `border-left-width:${left}${deskBorderUnit};` : ''}
		`;
    }

    if (deskBorderType !== 'none' && deskBorderType !== '' && deskBorderType !== undefined) {
        if (deskBorderType === 'solid') {
            desktopBorderStyle = `
			border-style: solid;
			border-color:${deskBorderColor};
			${deskBorderWidth}
		`;
        } else {
            desktopBorderStyle = `
            border-style:${deskBorderStyle ? deskBorderStyle : 'dashed'};
            border-color:${deskBorderColor};
            ${deskBorderWidth}
        `;
        }
    } else if (deskBorderType === 'none') {
        desktopBorderStyle = `
            border: none;
        `;
    }

    // Tab border style
    const tabBorderType = tabType;
    const tabBorderUnit = tabUnit;
    const tabletBorderStyle = tabStyle;
    const tabBorderColor = tabColor;
    let tabBorderWidth = '';

    if (isLinked) {
        tabBorderWidth = `
			${tabTop && tabTop != undefined ? `border-width:${tabTop}${tabBorderUnit};` : ''}	
		`;
    } else {
        tabBorderWidth = `
			${tabTop && tabTop != undefined ? `border-top-width:${tabTop}${tabBorderUnit};` : ''}
			${tabRight && tabRight != undefined ? `border-right-width:${tabRight}${tabBorderUnit};` : ''}
			${tabBottom && tabBottom != undefined ? `border-bottom-width:${tabBottom}${tabBorderUnit};` : ''}
			${tabLeft && tabLeft != undefined ? `border-left-width:${tabLeft}${tabBorderUnit};` : ''}
		`;
    }

    if (tabBorderType !== 'none' && tabBorderType !== '' && tabBorderType !== undefined) {
        if (tabBorderType === 'solid') {
            tabBorderStyle = `
                border-style: solid;
                border-color:${tabBorderColor};
                ${tabBorderWidth}
            `;
        } else {
            tabBorderStyle = `
                border-style:${tabletBorderStyle ? tabletBorderStyle : 'dashed'};
                border-color:${tabBorderColor};
                ${tabBorderWidth}
            `;
        }
    } else if (tabBorderType === 'none') {
        tabBorderStyle = `
            border: none;
        `;
    }

    // Mobile border style
    const mobBorderType = mobType;
    const mobBorderUnit = mobUnit;
    const mobileBorderStyle = mobStyle;
    const mobBorderColor = mobColor;
    let mobBorderWidth = '';

    if (isLinked) {
        mobBorderWidth = `
			${mobTop && mobTop != undefined ? `border-width:${mobTop}${mobBorderUnit};` : ''}
		`;
    } else {
        mobBorderWidth = `
			${mobTop && mobTop != undefined ? `border-top-width:${mobTop}${mobBorderUnit};` : ''}
			${mobRight && mobRight != undefined ? `border-right-width:${mobRight}${mobBorderUnit};` : ''}
			${mobBottom && mobBottom != undefined ? `border-bottom-width:${mobBottom}${mobBorderUnit};` : ''}
			${mobLeft && mobLeft != undefined ? `border-left-width:${mobLeft}${mobBorderUnit};` : ''}
		`;
    }

    if (mobBorderType !== 'none' && mobBorderType !== '' && mobBorderType !== undefined) {
        if (mobBorderType === 'solid') {
            mobBorderStyle = `
                border-style: solid;
                border-color:${mobBorderColor};
                ${mobBorderWidth}
            `;
        } else {
            mobBorderStyle = `
                border-style:${mobileBorderStyle ? mobileBorderStyle : 'dashed'};
                border-color:${mobBorderColor};
                ${mobBorderWidth}
            `;
        }
    } else if (mobBorderType === 'none') {
        mobBorderStyle = `
            border: none;
        `;
    }

    return { desktopBorderStyle, tabBorderStyle, mobBorderStyle };
};
