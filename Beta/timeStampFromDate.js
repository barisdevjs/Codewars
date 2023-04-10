function timestampFromDate(str) {
  const [day, month, year] = str.split(/[-.]/).map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return "Invalid date!";
  }

  // check if month value is valid
  if (month < 1 || month > 12) {
    return "Invalid date!";
  }

  // check if day value is valid for the given month and year
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return "Invalid date!";
  }

  const date = new Date(year, month - 1, day, 0, 0, 0, 0);
  const timestamp = date.getTime() / 1000;

  if (isNaN(timestamp)) {
    return "Invalid date!";
  }

  return Math.floor(timestamp);
}
