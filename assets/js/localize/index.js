const zoloGenerateUniqueName = (uniqueId, customNameAttribute, defaultName = 'field_name') => {
    const lastPart = uniqueId && typeof uniqueId === 'string' ? uniqueId.split('-').pop() : 'unknown';
    const sanitizedCustomName = customNameAttribute
        ? customNameAttribute
              .trim()
              .replace(/[^a-zA-Z0-9]/g, '_')
              .replace(/\s+/g, '_')
        : null;

    return sanitizedCustomName ? sanitizedCustomName : `${defaultName}_${lastPart}`;
};

// Make the function available on the window object
window.zoloGenerateUniqueName = zoloGenerateUniqueName;
