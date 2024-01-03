export const generateBoxShadowAttributies = (controlName) => {
    const shdAttrs = {
        // shadow attributes
        [`${controlName}hOffset`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}vOffset`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}blur`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}spread`]: {
            type: 'number',
            default: 0,
        },
        [`${controlName}shadowColor`]: {
            type: 'string',
            default: '#7c7c7c',
        },
        [`${controlName}shadowType`]: {
            type: 'string',
            default: 'outset',
        },
        [`${controlName}shadowUnit`]: {
            type: 'string',
            default: 'px',
        },
    };

    return {
        ...shdAttrs,
    };
};

export const generateBoxShadowStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}shadowColor`]: shadowColor,
        [`${controlName}hOffset`]: hOffset = 0,
        [`${controlName}vOffset`]: vOffset = 0,
        [`${controlName}blur`]: blur = 0,
        [`${controlName}spread`]: spread = 0,
        [`${controlName}shadowType`]: type = 'outset',
        [`${controlName}shadowUnit`]: unit = 'px',
    } = attributes;

    let boxShadowStyle;

    if (hOffset === 0 && vOffset === 0 && blur === 0 && spread === 0 && shadowColor === '#7c7c7c') {
        boxShadowStyle = '';
    } else {
        boxShadowStyle = `${
            shadowColor
                ? `box-shadow: ${shadowColor} ${hOffset}${unit} ${vOffset}${unit} ${blur}${unit} ${spread}${unit} ${
                      type === 'inset' ? 'inset' : ''
                  };`
                : ' '
        }
        `;
    }

    return {
        boxShadowStyle,
    };
};
