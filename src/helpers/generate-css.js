const isResponsive = (value) => {
    if (!value || typeof value !== 'object') return false;
    const devicesSlug = ['Desktop', 'Tablet', 'Mobile'];
    return Object.keys(value).some((key) => devicesSlug.includes(key) && value[key] !== undefined);
}

const generateCSS = ({ attributes, key, device = 'Desktop', getValue = (value) => value }) => {
    const value = attributes?.[key];

    if(value && typeof value !== 'object') {
        return getValue(value);
    }

    if (isResponsive(value)) {
        return getValue(value[device]);
    }

    return '';
}

export default generateCSS;