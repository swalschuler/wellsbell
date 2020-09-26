// Take an array of periods (each with a start and end time)
// and return the period we are in. If we are not in a period,
// (or there is no matching period) return null.
const findPeriod = (periods) => {
  console.log("hi bear");
  console.log(periods);

  for (var key in periods) {
    const { start, end, name } = periods[key];
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours === start.hour) {
      if (minutes < end.minutes && minutes >= start.minutes) {
        return periods[key];
      }
    }
  }

  return null;
};

export default findPeriod;
