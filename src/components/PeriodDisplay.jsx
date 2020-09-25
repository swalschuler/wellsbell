import React, { useEffect } from "react";
import { fetchScheduleEffect } from "../firebase/firebase";

const PeriodDisplay = () => {
  useEffect(() => {
    console.log("HELLO");
  }, [])

  const { schedule } = fetchScheduleEffect();
  console.log(schedule);
  return <div>Hi</div>;
};

export default PeriodDisplay;
