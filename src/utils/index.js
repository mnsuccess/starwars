/**
 * Parse String to Integer
 * @param {*} value
 * @returns
 */
export const parseInteger = (value) => {
  var value_int = parseInt(value);
  if (isNaN(value_int)) value_int = 0;
  return value_int;
};
