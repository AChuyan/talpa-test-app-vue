export const getMachineName = str => {
  if (typeof str !== "string") {
    return '';
  }

  return str.split('_').join(' ')
};
