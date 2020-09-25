import React, { useEffect } from "react";
import { FetchScheduleEffect } from "../firebase/firebase";

const PeriodDisplay = () => {
  useEffect(() => {
    console.log("HELLO");
  }, [])

  const { schedule } = FetchScheduleEffect();
  console.log(schedule);
  return <div>Hi</div>;
};

export default PeriodDisplay;
