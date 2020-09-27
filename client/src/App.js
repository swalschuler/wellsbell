import React, { useEffect } from "react";
import "./style.css";
import PeriodDisplay from "./components/PeriodDisplay";
import { FetchScheduleEffect } from "./firebase/firebase";

export default function App() {
  const { currentPeriod, loading } = FetchScheduleEffect();

  console.log("Current period " + currentPeriod);
  console.log(currentPeriod);

  let displayText = "";
  let periodInfoText = "";
  if (loading) {
    displayText = "Loading...";
  } else if (currentPeriod) {
    displayText = currentPeriod.name;
  } else {
    displayText = "No period right now.";
    periodInfoText = "Go do your homework!";
  }

  console.log("Dispaly text: ");
  console.log(displayText);
  return (
    <div className="wrapper">
      <div className="main">
        <PeriodDisplay period={displayText} periodInfo={periodInfoText} />
      </div>
    </div>
  );
}
