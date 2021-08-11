// Take an array of periods (each with a start and end time)
// and return the period we are in. If we are not in a period,
// (or there is no matching period) return null.
const findPeriod = (schedule) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDay()

  let periods = null

  if (currentDay == 1 || currentDay == 5) {
    periods = schedule.monday
  } else if (currentDay == 2 || currentDay == 4) {
    periods = schedule.tuesday
  } else if (currentDay == 3) {
    periods = periods.wednesday
  }

  for (const period of periods) {
    let startTime = new Date();
    startTime.setHours(period.start.hour, period.start.minute);

    let endTime = new Date();
    endTime.setHours(period.end.hour, period.end.minute);
    
    if (currentDate >= startTime && currentDate < endTime) {
      return period
    }  
  }
  return null;
};

export default findPeriod;
