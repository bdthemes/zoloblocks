const createResponsiveValue = (attributes, controlName, value, device) => {
    return {
        [controlName]: {
            ...attributes?.[controlName],
            [device]: value,
        },
    };
}

export default createResponsiveValue;