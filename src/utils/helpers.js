export const getTitle = str => {
  if (typeof str !== "string") {
    return '';
  }

  return str.split('_').join(' ')
};

export const formatTime = time =>
  new Date(time).toLocaleString();

