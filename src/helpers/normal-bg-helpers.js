export const generateNormalBGAttributes = (controlName, defaults = {}) => {
    const { isBgDefaultGradient, defaultFillColor, defaultBgGradient, noMainBGImg = false } = defaults;

    const bgColorAttr = defaultFillColor
        ? {
              [`${controlName}backgroundColor`]: {
                  type: 'string',
                  default: defaultFillColor,
              },
          }
        : {
              [`${controlName}backgroundColor`]: {
                  type: 'string',
              },
          };

    const mainWithoutBgiAttrs = {
        [`${controlName}backgroundType`]: {
            type: 'string',
            default: isBgDefaultGradient === true ? 'gradient' : 'classic',
        },
        ...bgColorAttr,
        [`${controlName}customGradient`]: {
            type: 'boolean',
            default: false,
        },
        [`${controlName}customGradientColor`]: {
            type: 'string',
        },
        [`${controlName}gradientColor`]: {
            type: 'string',
            default: defaultBgGradient,
        },
    };

    const mainBgiAttrs = {
        // desktop attributes start ⬇
        [`${controlName}bgImageURL`]: {
            type: 'string',
        },
        [`${controlName}bgImageID`]: {
            type: 'number',
        },
        [`${controlName}bgImgAttachment`]: {
            type: 'string',
        },

        [`${controlName}backgroundSize`]: {
            type: 'string',
        },
        [`${controlName}bgImgCustomSize`]: {
            type: 'number',
            default: 100,
        },
        [`${controlName}bgImgCustomSizeUnit`]: {
            type: 'string',
            default: '%',
        },
        [`${controlName}bgImgPos`]: {
            type: 'string',
        },
        [`${controlName}bgImgcustomPosX`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}bgImgcustomPosXUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`${controlName}bgImgcustomPosY`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}bgImgcustomPosYUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`${controlName}bgImgRepeat`]: {
            type: 'string',
        },

        // Tab attributes start ⬇
        [`TAB${controlName}backgroundSize`]: {
            type: 'string',
        },
        [`TAB${controlName}bgImgCustomSize`]: {
            type: 'number',
            default: 100,
        },
        [`TAB${controlName}bgImgCustomSizeUnit`]: {
            type: 'string',
            default: '%',
        },
        [`TAB${controlName}bgImgPos`]: {
            type: 'string',
        },
        [`TAB${controlName}bgImgcustomPosX`]: {
            type: 'number',
            default: 0,
        },
        [`TAB${controlName}bgImgcustomPosXUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`TAB${controlName}bgImgcustomPosY`]: {
            type: 'number',
            default: 0,
        },
        [`TAB${controlName}bgImgcustomPosYUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`TAB${controlName}bgImgRepeat`]: {
            type: 'string',
        },

        // Mobile attributes start ⬇
        [`MOB${controlName}backgroundSize`]: {
            type: 'string',
        },
        [`MOB${controlName}bgImgCustomSize`]: {
            type: 'number',
            default: 100,
        },
        [`MOB${controlName}bgImgCustomSizeUnit`]: {
            type: 'string',
            default: '%',
        },
        [`MOB${controlName}bgImgPos`]: {
            type: 'string',
        },
        [`MOB${controlName}bgImgcustomPosX`]: {
            type: 'number',
            default: 0,
        },
        [`MOB${controlName}bgImgcustomPosXUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`MOB${controlName}bgImgcustomPosY`]: {
            type: 'number',
            default: 0,
        },
        [`MOB${controlName}bgImgcustomPosYUnit`]: {
            type: 'string',
            default: 'px',
        },
        [`MOB${controlName}bgImgRepeat`]: {
            type: 'string',
        },
    };

    let result = {};
    result =
        noMainBGImg === true
            ? {
                  ...mainWithoutBgiAttrs,
              }
            : {
                  ...mainWithoutBgiAttrs,
                  ...mainBgiAttrs,
              };
    return result;
};

// function to generate Background control styles
export const generateNormalBGControlStyles = ({ controlName, attributes, noMainBGImg = false }) => {
    let BGnoMainBgi = noMainBGImg;

    const {
        // background attributes starts ⬇

        //  attributes for bg_hoverType normal start  ⬇
        [`${controlName}backgroundType`]: backgroundType,
        [`${controlName}backgroundColor`]: backgroundColor,
        [`${controlName}gradientColor`]: gradientColor,
        [`${controlName}customGradient`]: customGradient,
        [`${controlName}bgImageURL`]: bgImageURL,

        // [`${controlName}bgImageID`]: bgImageID,
        [`${controlName}backgroundSize`]: backgroundSize,
        [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
        [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
        [`${controlName}bgImgPos`]: bgImgPos,
        [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
        [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
        [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
        [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
        [`${controlName}bgImgAttachment`]: bgImgAttachment,
        [`${controlName}bgImgRepeat`]: bgImgRepeat,

        [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
        [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
        [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
        [`TAB${controlName}bgImgPos`]: TABbgImgPos,
        [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
        [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
        [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
        [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
        [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,

        [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
        [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
        [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
        [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
        [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
        [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
        [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
        [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
        [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
    } = attributes;

    const backgroundStylesDesktop = `
    ${
        (BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL) || (backgroundType === 'gradient' && gradientColor)
            ? `
            ${
                customGradient
                    ? gradientColor
                    : `background-image: ${backgroundType === 'classic' ? `url("${bgImageURL}")` : backgroundType === 'gradient' ? gradientColor : 'none'};`
            }
            `
            : ' '
    }

  ${
      BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL
          ? `
      ${
          backgroundSize && backgroundSize !== 'custom'
              ? `background-size: ${backgroundSize};`
              : backgroundSize === 'custom'
                ? `background-size: ${bgImgCustomSize}${bgImgCustomSizeUnit} auto;`
                : ' '
      }

      ${
          bgImgPos && bgImgPos !== 'custom'
              ? `background-position: ${bgImgPos};`
              : bgImgPos === 'custom'
                ? `background-position: ${bgImgcustomPosX}${bgImgcustomPosXUnit} ${bgImgcustomPosY}${bgImgcustomPosYUnit};`
                : ' '
      }

      ${bgImgAttachment ? `background-attachment: ${bgImgAttachment};` : ' '}

      ${bgImgRepeat ? `background-repeat: ${bgImgRepeat};` : ' '}
      `
          : ' '
  }

    ${backgroundColor ? `background-color: ${backgroundColor};` : ' '}

    `;

    const backgroundStylesTab = `
    ${
        BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL
            ? `
        ${
            TABbackgroundSize && TABbackgroundSize !== 'custom'
                ? `background-size: ${TABbackgroundSize};`
                : TABbackgroundSize === 'custom'
                  ? `background-size: ${TABbgImgCustomSize}${TABbgImgCustomSizeUnit} auto;`
                  : ' '
        }

    ${
        TABbgImgPos && TABbgImgPos !== 'custom'
            ? `background-position: ${TABbgImgPos};`
            : TABbgImgPos === 'custom'
              ? `background-position: ${TABbgImgcustomPosX}${TABbgImgcustomPosXUnit} ${TABbgImgcustomPosY}${TABbgImgcustomPosYUnit};`
              : ' '
    }

    ${TABbgImgRepeat ? `background-repeat: ${TABbgImgRepeat};` : ' '}
      background-attachment: scroll;
    `
            : ' '
    }
  `;

    const backgroundStylesMobile = `
    ${
        BGnoMainBgi === false && backgroundType === 'classic' && bgImageURL
            ? `
        ${
            MOBbackgroundSize && MOBbackgroundSize !== 'custom'
                ? `background-size: ${MOBbackgroundSize};`
                : MOBbackgroundSize === 'custom'
                  ? `background-size: ${MOBbgImgCustomSize}${MOBbgImgCustomSizeUnit} auto;`
                  : ' '
        }

    ${
        MOBbgImgPos && MOBbgImgPos !== 'custom'
            ? `background-position: ${MOBbgImgPos};`
            : MOBbgImgPos === 'custom'
              ? `background-position: ${MOBbgImgcustomPosX}${MOBbgImgcustomPosXUnit} ${MOBbgImgcustomPosY}${MOBbgImgcustomPosYUnit};`
              : ' '
    }

    ${MOBbgImgRepeat ? `background-repeat: ${MOBbgImgRepeat};` : ' '} `
            : ' '
    }
  `;

    return {
        backgroundStylesDesktop,
        backgroundStylesTab,
        backgroundStylesMobile,
    };
};
