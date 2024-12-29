/**
 * Generate Flatpickr options dynamically based on the field type and other attributes.
 * @param {Object} baseOptions - Base options to be extended.
 * @param {Object} attributes - Attributes used to customize options (e.g., fieldType, dateFormat).
 * @returns {Object} - The fully constructed options for Flatpickr.
 */
export const manageOptions = (baseOptions, attributes) => {
  const {
    fieldType,
    dateFormat,
    timeFormat,
    minTime,
    maxTime,
    showEnableDate,
    enableDates,
  } = attributes;

  // Type-specific configurations based on fieldType
  const typeSpecificOptions = {
    datetime: {
      dateFormat: `${dateFormat} ${timeFormat}`,
      enableTime: true,
      ...(minTime && {minTime}),
      ...(maxTime && {maxTime}),
    },
    time: {
      dateFormat: timeFormat,
      enableTime: true,
      noCalendar: true,
      ...(minTime && {minTime}),
      ...(maxTime && {maxTime}),
    },
    "date-range": {
      mode: "range",
      dateFormat,
    },
    "date-multiple": {
      mode: "multiple",
      dateFormat,
    },
    default: {
      enableTime: false,
    },
  };

  // Return combined options: base options + type-specific + conditional enableDates
  return {
    ...baseOptions,
    ...(typeSpecificOptions[fieldType] || typeSpecificOptions.default),
    ...(showEnableDate ? {enable: enableDates} : {}),
  };
};

