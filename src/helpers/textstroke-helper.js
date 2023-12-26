export const generateTextStrokeAttributies = (controlName, defaults = {}) => {
    const { defaultStroke, defaultUnit = 'px', defaultColor = '' } = defaults;

    const desktopStrokeWidth = defaultStroke
        ? {
              [`${controlName}strokeWidth`]: {
                  type: 'number',
                  default: defaultStroke,
              },
          }
        : {
              [`${controlName}strokeWidth`]: {
                  type: 'number',
              },
          };

    const desktopStrokeUnit = defaultUnit
        ? {
              [`${controlName}strokeUnit`]: {
                  type: 'string',
                  default: defaultUnit,
              },
          }
        : {
              [`${controlName}strokeUnit`]: {
                  type: 'string',
                  default: 'px',
              },
          };

    const strokeColor = defaultColor
        ? {
              [`${controlName}strokeColor`]: {
                  type: 'string',
                  default: defaultColor,
              },
          }
        : {
              [`${controlName}strokeColor`]: {
                  type: 'string',
              },
          };

    const strokeAttrs = {
        // stroke attributes  ⬇
        ...strokeColor,
        ...desktopStrokeUnit,
        [`TAB${controlName}strokeUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`MOB${controlName}strokeUnit`]: {
            type: 'string',
            default: 'px',
        },

        ...desktopStrokeWidth,
        [`TAB${controlName}strokeWidth`]: {
            type: 'number',
        },

        [`MOB${controlName}strokeWidth`]: {
            type: 'number',
        },
    };

    return {
        ...strokeAttrs,
    };
};

export const generateTextStrokeStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}strokeColor`]: strokeColor,
        [`${controlName}strokeWidth`]: desktopstrokeWidth,
        [`TAB${controlName}strokeWidth`]: tabstrokeWidth,
        [`MOB${controlName}strokeWidth`]: mobstrokeWidth,
        [`${controlName}strokeUnit`]: desktopstrokeUnit,
        [`TAB${controlName}strokeUnit`]: tabstrokeUnit,
        [`MOB${controlName}strokeUnit`]: mobstrokeUnit,
    } = attributes;

    const desktopTextStrokeStyle = `${
        desktopstrokeWidth || desktopstrokeWidth == 0
            ? `
    -webkit-text-stroke-width: ${desktopstrokeWidth}${desktopstrokeUnit};
    stroke-width: ${desktopstrokeWidth}${desktopstrokeUnit};
    -webkit-text-stroke-color: ${strokeColor};
    stroke:  ${strokeColor};
    `
            : ' '
    }
	`;
    const tabTextStrokeStyle = `${
        tabstrokeWidth || tabstrokeWidth == 0
            ? `
  -webkit-text-stroke-width: ${tabstrokeWidth}${tabstrokeUnit};
  stroke-width: ${tabstrokeWidth}${tabstrokeUnit};
  -webkit-text-stroke-color: ${strokeColor};
  stroke:  ${strokeColor};
  `
            : ' '
    }
`;
    const mobTextStrokeStyle = `${
        mobstrokeWidth || mobstrokeWidth == 0
            ? `
  -webkit-text-stroke-width: ${mobstrokeWidth}${mobstrokeUnit};
  stroke-width: ${mobstrokeWidth}${mobstrokeUnit};
  -webkit-text-stroke-color: ${strokeColor};
  stroke:  ${strokeColor};
  `
            : ' '
    }
`;

    return {
        desktopTextStrokeStyle,
        tabTextStrokeStyle,
        mobTextStrokeStyle,
    };
};
