const classManagerAttributes = (settings) => {
    settings.attributes = {
        ...settings.attributes,
        classManager: {
            type: 'array',
            default: [],
        },
        classManagerSubselector: {
            type: 'array',
            default: [],
        },
    }
    return settings;
}

export default classManagerAttributes;