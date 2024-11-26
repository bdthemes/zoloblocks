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
  return inputString
    .trim() // Remove trailing or leading whitespace/newlines
    .split('\n') // Split the string by newlines
    .map((item, index) => ({
      id: index + 1, // Set the ID starting from 1
      name: item.charAt(0).toUpperCase() + item.slice(1), // Capitalize the first letter
      value: item.trim().toLowerCase().replace(/\s+/g, '_') // Convert to lowercase and replace spaces with underscores
    }));
}
