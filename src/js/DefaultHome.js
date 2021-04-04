import dayjs from 'dayjs';

const defaultHome = () => {
  let today = dayjs();
  let month = today.month() + 1;
  let year = today.year();
  let day = today.date();
  let nextYear;
  let now;

  if (day && month < 10) {
    nextYear = `${year + 1}-0${month}-0${day}`
  } else if (month < 10) {
    nextYear = `${year + 1}-0${month}-${day}`
  } else if ( day < 10) {
    nextYear = `${year + 1}-${month}-0${day}`
  } 

  if (day && month < 10) {
    now = `${year}-0${month}-0${day}`
  } else if (month < 10) {
    now = `${year}-0${month}-${day}`
  } else if ( day < 10) {
    now = `${year}-${month}-0${day}`
  } 

  return `&dates=${now},${nextYear}&ordering=-added`;
};

const formatDate = date => {
  return dayjs(date).format('D MMMM YYYY')
}

export {defaultHome, formatDate};