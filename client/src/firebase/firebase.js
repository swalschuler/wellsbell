import React, { useEffect, useState } from "react";
import { schedule_6 } from "./schedules/6th";
import { schedule_7_8 } from "./schedules/7th_8th";
import findPeriod from "../utils/findPeriod";
import minutesBetween from "../utils/minutesBetween";

// const db = firebaseApp.firestore();

export const addSchedule = async (scheduleName, schedule) => {
  console.log("addsched");
};

export const copySchedule = async () => {
  console.log("copyschedule");
};

export const FetchScheduleEffect = (grade) => {
  const [currentPeriod, setCurrentPeriod] = useState(null);
  const [minutesLeft, setMinutesLeft] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (grade == 6) {
        setCurrentPeriod(findPeriod(schedule_6));
      } else {
        setCurrentPeriod(findPeriod(schedule_7_8));
      }

      if (currentPeriod) {
        let endTime = new Date();
        endTime.setHours(currentPeriod.end.hour, currentPeriod.end.minute);
        setMinutesLeft(minutesBetween(new Date(), endTime));
      }
    }, 1000);

    if (currentPeriod) {
      let endTime = new Date();
      endTime.setHours(currentPeriod.end.hour, currentPeriod.end.minute);
      setMinutesLeft(minutesBetween(new Date(), endTime));
    }

    return () => clearInterval(interval);
  }, [currentPeriod, minutesLeft, grade]);

  return { currentPeriod, minutesLeft };
};
