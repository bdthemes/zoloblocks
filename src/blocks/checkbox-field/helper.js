export const convertToDefaultValueArray = (input, delimiter = '|') => {
    if (!input || typeof input !== 'string') {
        return [];
    }

    return input
        .split(delimiter) // Split the string using the provided delimiter
        .map((item) => item.trim().toLowerCase().replace(/\s+/g, '_')) // Transform each item
        .filter((item) => item); // Remove any empty strings from the array
};

export const convertToOptionsArray = (inputString) => {
    if (!inputString.trim()) {
        return [];
    }
    return inputString
        .trim() // Remove trailing or leading whitespace/newlines
        .split('\n') // Split the string by newlines
        .map((item, index) => ({
            id: index + 1, // Set the ID starting from 1
            name: item.charAt(0).toUpperCase() + item.slice(1), // Capitalize the first letter
            value: item.trim().toLowerCase().replace(/\s+/g, '_'), // Convert to lowercase and replace spaces with underscores
        }));
};
