import React, { useEffect } from "react";
import "./style.css";
import PeriodDisplay from "./components/PeriodDisplay";
import { FetchScheduleEffect } from "./firebase/firebase";

export default function App() {
  const { currentPeriod } = FetchScheduleEffect();

  console.log("Current period " + currentPeriod);
  console.log(currentPeriod);

  let displayText = "HOwdy";
  if (currentPeriod) {
    displayText = currentPeriod.name;
  }

  console.log("Dispaly text: ");
  console.log(displayText);
  return (
    <div>
      <PeriodDisplay period={`Hi: ${displayText}.`} />
    </div>
  );
}
