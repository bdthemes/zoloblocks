export const generateResRangeAttributies = (controlName, defaults = {}) => {
  const { defaultRange, noUnits, defaultUnit = "px" } = defaults;
  const desktopRange = defaultRange
    ? {
        [`${controlName}Range`]: {
          type: "number",
          default: defaultRange,
        },
      }
    : {
        [`${controlName}Range`]: {
          type: "number",
        },
      };
  const units =
    noUnits == true
      ? {}
      : {
          [`${controlName}Unit`]: {
            type: "string",
            default: defaultUnit,
          },

          [`TAB${controlName}Unit`]: {
            type: "string",
            default: "px",
          },
          [`MOB${controlName}Unit`]: {
            type: "string",
            default: "px",
          },
        };

  return {
    ...desktopRange,
    [`TAB${controlName}Range`]: {
      type: "string",
    },
    [`MOB${controlName}Range`]: {
      type: "string",
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
    [`${controlName}Range`]: desktopRange,
    [`TAB${controlName}Range`]: tabRange,
    [`MOB${controlName}Range`]: mobRange,

    [`${controlName}Unit`]: desktopUnit,
    [`TAB${controlName}Unit`]: tabUnit,
    [`MOB${controlName}Unit`]: mobUnit,
  } = attributes;

  const desktopRangeStyle =
    desktopRange || desktopRange == 0
      ? property + ":" + desktopRange + desktopUnit + ";"
      : "";

  const tabRangeStyle =
    tabRange || tabRange == 0 ? property + ":" + tabRange + tabUnit + ";" : "";
  const mobRangeStyle =
    mobRange || mobRange == 0 ? property + ":" + mobRange + mobUnit + ";" : "";
  return { desktopRangeStyle, tabRangeStyle, mobRangeStyle };
};
