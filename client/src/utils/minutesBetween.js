// Credit: https://bearnithi.com/2019/11/10/how-to-calculate-the-time-difference-days-hours-minutes-between-two-dates-in-javascript/

const minutesBetween = (d1, d2) => {
    const diffInMilliseconds = Math.abs(d1 - d2);
    const minutes = Math.floor(diffInMilliseconds / 1000 / 60)
    return minutes
}

export default minutesBetween;