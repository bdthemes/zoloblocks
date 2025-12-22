const createResponsiveValue = (attributes, controlName, value) => {
    const device = attributes?.resMode;
    return {
        [controlName]: {
            ...attributes?.[controlName],
            [device]: value,
        },
    };
}

export default createResponsiveValue;