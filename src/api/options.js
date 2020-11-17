export const NewsExplorerApiData = {
  URL: 'https://api.ne.rk.students.nomoreparties.co'
}

// функции для получения времени
// для получения даты from
function takeFromDate() {
  let date = new Date();

  date.setDate(date.getDate() - 7);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const fromDate = date.toLocaleString("ru", options).split(".").reverse().join("-");
  return fromDate
}

// для получения to
function takeToDate() {
  let date = new Date();

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const toDate = date
    .toLocaleString("ru", options)
    .split(".")
    .reverse()
    .join("-");
  return toDate;
}

export const NewsApiData = {
  URL: 'https://nomoreparties.co/news/v2/everything?',
  KEY: "1fc8ee1f0bbd4705b8ccb5aeb731b908",
  FROM: takeFromDate(),
  TO: takeToDate(),
  SORTBY: "publishedAt",
  PAGESIZE: "100",
}
