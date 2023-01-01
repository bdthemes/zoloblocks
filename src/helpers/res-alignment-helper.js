export const generateResAlignmentAttributies = (controlName, defaults = {}) => {
  const { defaultAlign } = defaults;
  const desktopAlign = defaultAlign
    ? {
        [`${controlName}Align`]: {
          type: "string",
          default: defaultAlign,
        },
      }
    : {
        [`${controlName}Align`]: {
          type: "string",
        },
      };
  return {
    ...desktopAlign,
    [`TAB${controlName}Align`]: {
      type: "string",
    },
    [`MOB${controlName}Align`]: {
      type: "string",
    },
  };
};

export const generateResAlignmentStyle = ({
  controlName,
  property,
  attributes,
}) => {
  const {
    [`${controlName}Align`]: desktopAlign,
    [`TAB${controlName}Align`]: tabAlign,
    [`MOB${controlName}Align`]: mobAlign,
  } = attributes;

  const desktopAlignStyle =
    desktopAlign || desktopAlign == ""
      ? property + ":" + desktopAlign + ";"
      : "";

  const tabAlignStyle =
    tabAlign || tabAlign == "" ? property + ":" + tabAlign + ";" : "";
  const mobAlignStyle =
    mobAlign || mobAlign == "" ? property + ":" + mobAlign + ";" : "";
  return { desktopAlignStyle, tabAlignStyle, mobAlignStyle };
};
