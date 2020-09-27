import React, { useEffect, useState } from "react";
import "firebase/firestore";
import firebaseApp from "./firebaseApp";
import findPeriod from "../utils/findPeriod";

const db = firebaseApp.firestore();

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
