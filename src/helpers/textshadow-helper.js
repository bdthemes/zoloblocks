export const generateTextShadowAttributies = (controlName, defaults = {}) => {
  const { enableTransition = false } = defaults;

  const shdAttrs = {
    // shadow attributes  ⬇
    [`${controlName}shadowColor`]: {
      type: 'string',
    },
    [`${controlName}hShadow`]: {
      type: 'number',
    },
    [`${controlName}vShadow`]: {
      type: 'number',
    },
    [`${controlName}blur`]: {
      type: 'number',
    },

  };

  if (enableTransition) {
    return {
      ...shdAttrs,
    };
  } else {
    return {
      ...shdAttrs,
      [`${controlName}shadowTransition`]: {
        type: 'number',
        default: 0.5,
      },
    };
  }
};

export const generateTextShadowStyles = ({ controlName, attributes }) => {
  const {
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hShadow`]: hShadow = 0,
    [`${controlName}vShadow`]: vShadow = 0,
    [`${controlName}blur`]: blur = 0,
    [`${controlName}shadowTransition`]: shadowTransition,
  } = attributes;

  const textShadowStyle = `${shadowColor
    ? `text-shadow: ${hShadow}px ${vShadow}px ${blur}px ${shadowColor};`
    : ' '
    }
	`;

  const transitionStyle = `text-shadow ${shadowTransition || 0}s `;

  return {
    textShadowStyle,
    transitionStyle,
  };
};
