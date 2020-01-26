/**
 * Returns entity name with replaced '_' symbols
 * @param str
 * @returns {string}
 */
export const getTitle = str => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.split('_').join(' ');
};

/**
 * Returns formatted date to display.
 * THis helper should be used to have one point for date formatting.
 * @param time
 * @returns {string}
 */
export const formatTime = time =>
  new Date(time).toLocaleString();

