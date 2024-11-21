export const transformToValueFormat = (input) => {
  if (!input || typeof input !== 'string' || input.trim() === '') {
    return '';
  }
  return input.toLowerCase().replace(/\s+/g, '_');
};


export const convertToOptionsArray = (inputString) => {
  if (!inputString.trim()) {
    return [];
  }

  const optionsArray = inputString
    .trim() // Remove trailing or leading whitespace/newlines
    .split('\n') // Split the string by newlines
    .map((item, index) => ({
      id: index + 1, // Set the ID starting from 1
      name: item.charAt(0).toUpperCase() + item.slice(1), // Capitalize the first letter
      value: transformToValueFormat(item) // Convert to lowercase and replace spaces with underscores
    }));

  // Add the first item manually
  optionsArray.unshift({ id: 0, name: 'Select Item', value: '' });

  return optionsArray;
}
