const Today = ({ date = new Date() }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currWeekDay = weekdays[date.getDay()];
  return `Today is ${currWeekDay} ${day}/${month}/${year}`;
};

export default Today;
