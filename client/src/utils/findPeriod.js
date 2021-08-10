let breakPeriod = {
  name: "Break!",
  start: {
    hour: 8,
    minute: 35,
  },
  end: {
    hour: 9,
    minute: 24,
  },
};
// Take an array of periods (each with a start and end time)
// and return the period we are in. If we are not in a period,
// (or there is no matching period) return null.
const findPeriod = (schedule) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  let periods = null;

  if (currentDay == 1 || currentDay == 5) {
    periods = schedule.monday;
  } else if (currentDay == 2 || currentDay == 4) {
    periods = schedule.tuesday;
  } else if (currentDay == 3) {
    periods = periods.wednesday;
  }

  // If we are not in school
  if (!periods || currentDate > endTime(periods[periods.length - 1])) {
    return null;
  }

  // Find which period we are in
  for (const period of periods) {
    let startTime = new Date();
    startTime.setHours(period.start.hour, period.start.minute, 0);

    let endTime = new Date();
    endTime.setHours(period.end.hour, period.end.minute, 0);

    const oneMinuteBeforeEnd = new Date(
      endTime.setMinutes(endTime.getMinutes() - 1)
    );

    if (currentDate >= startTime && currentDate < endTime) {
      return period;
    }
  }

  // We are not in any period, but is there a break?
  for (const period of periods) {
    console.log("Breaking");
    console.log(currentDate);
    console.log(endTime(period));
    if (currentDate > startTime(period)) {
      continue;
    }
    breakPeriod.end = { ...period.start };
    return breakPeriod;
  }
};

export const startTime = (period) => {
  let startTime = new Date();
  startTime.setHours(period.start.hour, period.start.minute, 0);
  return startTime;
};

export const endTime = (period) => {
  let endTime = new Date();
  endTime.setHours(period.end.hour, period.end.minute, 0);
  return endTime;
};

export default findPeriod;
