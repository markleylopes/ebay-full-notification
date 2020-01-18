export const checkIfIsNumber = (value) => {
  if (value || value === 0) return !isNaN(value);
  return false;
};
