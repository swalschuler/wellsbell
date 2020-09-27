// Take an array of periods (each with a start and end time)
// and return the period we are in. If we are not in a period,
// (or there is no matching period) return null.
const findPeriod = (periods) => {
  for (var key in periods) {
    const { start, end, name } = periods[key];

    let startTime = new Date();
    startTime.setHours(start.hour, start.minute);

    let endTime = new Date();
    endTime.setHours(end.hour, end.minute);

    const currentTime = new Date();

    // console.log(
    //   `Period ${name}. Start: ${start.hour}:${start.minute}. End: ${end.hour}:${end.minute}.`
    // );

    if (currentTime >= startTime && currentTime < endTime) {
      return periods[key];
    }
  }
  return null;
};

export default findPeriod;
