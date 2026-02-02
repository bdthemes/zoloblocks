const isResponsive = (value) => {
    if (!value || typeof value !== 'object') return false;
    const devicesSlug = ['Desktop', 'Tablet', 'Mobile'];
    return Object.keys(value).some((key) => devicesSlug.includes(key) && value[key] !== undefined);
}

const generateCSS = ({ attributes, key, device = 'Desktop', getValue = (value) => value }) => {
    const value = attributes?.[key];

    if(value !== undefined && value !== null && typeof value !== 'object') {
        return getValue(value);
    }

    if (isResponsive(value)) {
        const responsiveValue = value[device];
        if (responsiveValue !== undefined && responsiveValue !== null) {
            return getValue(responsiveValue);
        }
    }

    if(value !== undefined && value !== null && typeof value === 'object' && !isResponsive(value) && Object.keys(value).length > 0) {
        return getValue(value);
    }

    return '';
}

export default generateCSS;