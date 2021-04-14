import dayjs from "dayjs";

const getTodayDate = () => {
  let today = dayjs();
  return today;
};

const getFuturMonth = (date) => {
  let month = date.get("month") + 2;
  return month > 9 ? month : (month = "0" + month);
};

const getActualYear = (date) => date.get("year");

const getDay = (date) => {
  let day = date.get("day");
  return day > 9 ? day : (day = "0" + day);
};

const buildEndDate = () => {
  let endDate = `${getActualYear(getTodayDate()) + 1}-${getFuturMonth(
    getTodayDate()
  )}-${getDay(getTodayDate())}`;
  return endDate;
};

const buildactualDate = () => {
  let actualDate = `${getActualYear(getTodayDate())}-${getFuturMonth(
    getTodayDate()
  )}-${getDay(getTodayDate())}`;
  return actualDate;
};

const buildDateString = () => `&dates=${buildactualDate()},${buildEndDate()}&ordering=-added`;

const formatDate = (date) => {
  return dayjs(date).format("D MMMM YYYY");
};

export { buildDateString, formatDate };
