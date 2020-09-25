import React, { useEffect, useState } from "react";
import "firebase/firestore";
import firebaseApp from "./firebaseApp"

const db = firebaseApp.firestore();

export const FetchScheduleEffect = () => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSchedule = sched => {
    setSchedule(sched);
    setLoading(false);
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

  return { schedule, loading };
};
