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
