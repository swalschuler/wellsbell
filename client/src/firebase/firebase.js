import React, { useEffect, useState } from "react";
import "firebase/firestore";
import firebaseApp from "./firebaseApp";
import findPeriod from "../utils/findPeriod";

const db = firebaseApp.firestore();

export const addSchedule = async (scheduleName, schedule) => {
  try {
    const res = await db
      .collection("schedules")
      .doc(scheduleName)
      .set({ periods: schedule });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const copySchedule = async () => {
  const scheduleNames = [
    "Weekend",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekend",
  ];

  let today = new Date();
  today = today.getDay(); // sunday - saturday; 0-6

  let newScheduleRef = db.collection("schedules").doc(scheduleNames[today]);
  const periods = await newScheduleRef.get();
  db.collection("schedules").doc("today").set(periods.data());
};

export const FetchScheduleEffect = () => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPeriod, setCurrentPeriod] = useState(null);

  const handleSchedule = (sched) => {
    setSchedule(sched);
    setLoading(false);

    if (sched) {
      setCurrentPeriod(findPeriod(sched["periods"]));
    } else {
      setCurrentPeriod(null);
    }
  };

  useEffect(() => {
    const fetchSchedule = async () => {
      let scheduleRef = db.collection("schedules").doc("today");
      let scheduleDoc = await scheduleRef.get();
      console.log("Here is the fetched data: ");
      console.log(scheduleDoc.data());
      if (!scheduleDoc.exists) {
        console.warn("Could not load today's schedule.");
        handleSchedule(null);
      } else {
        handleSchedule(scheduleDoc.data());
      }
    };

    fetchSchedule();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (schedule) {
        setCurrentPeriod(findPeriod(schedule["periods"]));
      } else {
        setCurrentPeriod(null);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [schedule, currentPeriod]);

  return { schedule, loading, currentPeriod };
};
