const Today = (props) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wdnesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = props.date;
  date = date ? new Date(date) : new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currWeekDay = weekdays[date.getDay()];
  return `Today is ${currWeekDay} ${day}/${month}/${year}`;
};

export default Today;
