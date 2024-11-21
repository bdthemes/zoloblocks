export const transformToValueFormat = (input) => {
  if (!input || typeof input !== 'string' || input.trim() === '') {
    return '';
  }
  return input.toLowerCase().replace(/\s+/g, '_');
};
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function parseInputToArray(input) {
  if (!input || input.trim() === '') {
    return [];
  }

  const lines = input
    .trim() // Remove extra spaces or newlines
    .split('\n') // Split the string by newlines
    .map(line => line.trim()); // Trim each line

  const result = [];
  let currentGroup = null;

  lines.forEach((line, index) => {
    if (!line.startsWith('-')) {
      // Check if the next line starts with '-' to identify a group vs standalone option
      const isNextLineOption = lines[index + 1]?.startsWith('-');

      if (isNextLineOption) {
        // It's a group with options
        currentGroup = { label: capitalizeFirstLetter(line.trim()), options: [] };
        result.push(currentGroup);
      } else {
        // It's a standalone option
        result.push({
          value: line.toLowerCase().replace(/\s+/g, '_'),
          name: capitalizeFirstLetter(line.trim()),
        });
        currentGroup = null; // Reset current group
      }
    } else {
      // It's an option inside the current group
      const option = {
        value: line.replace(/^-/, '').trim().toLowerCase().replace(/\s+/g, '_'),
        name: capitalizeFirstLetter(line.replace(/^-/, '').trim()),
      };
      if (currentGroup) {
        currentGroup.options.push(option);
      }
    }
  });

  // Insert the default "Select Item" option at the beginning of the array
  result.unshift({ value: '', name: 'Select Item' });
  return result;
}

