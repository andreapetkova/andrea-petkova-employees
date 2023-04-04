export const formattingDateMiddleware = (date) => {
  const today = new Date().toLocaleDateString("en-US");

  if (date === "NULL") {
    return today;
  }

  //returns date in month/day/year format
  return new Date(date).toLocaleDateString("en-US");
};
