// 									task 7
function isLeapYear(input) {
  const date = new Date(input).getFullYear();
  if (!date) {
    return "invalid Date";
  } else if ((date % 4 === 0 && date % 100 !== 0) || date % 400 === 0) {
    return `${date} is a leap year`;
  } else {
    return `${date} is not a leap year`;
  }
}

isLeapYear("2020-01-01 00:00:00");
isLeapYear(1213131313);
isLeapYear("2020-01-01 00:00:00777");
isLeapYear("2200-01-15 13:00:00");
isLeapYear(1213131313135465656654564646542132132131);
