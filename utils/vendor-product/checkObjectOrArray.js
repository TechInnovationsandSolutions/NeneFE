export const isObject = (variable) => {
  return (
    typeof variable === "object" &&
    !Array.isArray(variable) &&
    variable !== null
  );
};

export const isArray = (variable) => {
  return Array.isArray(variable);
};
