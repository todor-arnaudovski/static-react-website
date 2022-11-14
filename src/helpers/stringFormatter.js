export const capitalizeText = (string) => {
  return string
    .split(' ')
    .map((el) => {
      return el.length > 2 ? el.charAt(0).toUpperCase() + el.slice(1) : el;
    })
    .join(' ')
    .trim();
};
