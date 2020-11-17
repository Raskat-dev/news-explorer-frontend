export const makeDateCorrect = (date) => {
  const newTime = date.split("-");
  newTime[2] = newTime[2].slice(0, 2);

  if (newTime[2].startsWith("0")) {
    newTime[2] = newTime[2].slice(-1);
  }

  switch (newTime[1]) {
    case "01":
      newTime[1] = "января";
      break;
    case "02":
      newTime[1] = "февраля";
      break;
    case "03":
      newTime[1] = "марта";
      break;
    case "04":
      newTime[1] = "апреля";
      break;
    case "05":
      newTime[1] = "мая";
      break;
    case "06":
      newTime[1] = "июня";
      break;
    case "07":
      newTime[1] = "июля";
      break;
    case "08":
      newTime[1] = "августа";
      break;
    case "09":
      newTime[1] = "сентября";
      break;
    case "10":
      newTime[1] = "октября";
      break;
    case "11":
      newTime[1] = "ноября";
      break;
    case "12":
      newTime[1] = "декабря";
      break;
    default:
      newTime[1] = "января";
  }
  const correctTime = `${newTime[2]} ${newTime[1]}, ${newTime[0]}`
  return correctTime;
}
