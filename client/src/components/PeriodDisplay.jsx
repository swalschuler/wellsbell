import React, { useEffect, useState } from "react";
import { FetchScheduleEffect } from "../firebase/firebase";
import findPeriod from "../utils/findPeriod";

const PeriodDisplay = () => {
  const { schedule } = FetchScheduleEffect();

  useEffect(() => {
    //setIntervalId(setInterval(() => tick(), 1000));

    if (schedule) {
      findPeriod(schedule["periods"]);
    }

    //return () =>
  }, [schedule]);

  return (
    <div>
      <text>Hi</text>
      <text>Hi</text>
    </div>
  );
};

export default PeriodDisplay;
