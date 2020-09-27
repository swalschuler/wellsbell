import React, { useEffect, useState } from "react";
import { FetchScheduleEffect } from "../firebase/firebase";
import findPeriod from "../utils/findPeriod";
import styles from './PeriodDisplay.module.css';

const PeriodDisplay = () => {
  const { schedule } = FetchScheduleEffect();
  const [periodRef, setPeriodRef] = useState();

  useEffect(() => {
    if (periodRef) {
      // eslint-disable-next-line
      const shine = new Shine(periodRef)
      window.addEventListener('mousemove', function(event) {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.config.opacity = 0.12;
        shine.config.opacityPow = 2;
        shine.draw();
      }, false);
      return () => {
        window.removeEventListener('mousemove');
      }
    }
  }, [periodRef])

  useEffect(() => {
    //setIntervalId(setInterval(() => tick(), 1000));

    if (schedule) {
      findPeriod(schedule["periods"]);
    }

    //return () =>
  }, [schedule]);

  return (
    <div className={styles.periodContainer}>
      <h1 ref={setPeriodRef} className={styles.period}>1st period.</h1>
    </div>
  )
};

export default PeriodDisplay;
