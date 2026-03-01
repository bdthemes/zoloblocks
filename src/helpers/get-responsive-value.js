const getResponsiveValue = (attributes, controlName, device) => {
    const value = attributes?.[controlName];
    if (!value || typeof value !== 'object') return null;

    return value[device] || null;
}

export default getResponsiveValue;