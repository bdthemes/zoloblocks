const getResponsiveValue = (attributes, controlName) => {
    const device = attributes?.resMode;
    const value = attributes?.[controlName];
    if (!value || typeof value !== 'object') return null;

    return value[device] || null;
}

export default getResponsiveValue;