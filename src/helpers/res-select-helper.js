export const generateResSelectAttributies = (controlName, defaults = {}) => {
    const { defaultSelect } = defaults;
    const desktopSelect = defaultSelect
        ? {
              [`${controlName}ZRPSelect`]: {
                  type: 'string',
                  default: defaultSelect,
              },
          }
        : {
              [`${controlName}ZRPSelect`]: {
                  type: 'string',
              },
          };
    return {
        ...desktopSelect,
        [`TAB${controlName}ZRPSelect`]: {
            type: 'string',
        },
        [`MOB${controlName}ZRPSelect`]: {
            type: 'string',
        },
    };
};

export const generateResSelectStyle = ({ controlName, attributes }) => {
    const {
        [`${controlName}ZRPSelect`]: desktopSelect,
        [`TAB${controlName}ZRPSelect`]: tabSelect,
        [`MOB${controlName}ZRPSelect`]: mobSelect,
    } = attributes;

    const desktopSelectStyle = desktopSelect ? desktopSelect : '';

    const tabSelectStyle = tabSelect ? tabSelect : '';
    const mobSelectStyle = mobSelect ? mobSelect : '';
    return { desktopSelectStyle, tabSelectStyle, mobSelectStyle };
};
