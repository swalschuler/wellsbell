import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import "./style.css";
import PeriodDisplay from "./components/PeriodDisplay";
import { FetchScheduleEffect } from "./firebase/firebase";

export default function App() {
  const { currentPeriod, minutesLeft } = FetchScheduleEffect(6);

  console.log("Current period " + currentPeriod);

  let displayText = "";
  let periodInfoText = "";
  if (currentPeriod) {
    displayText = currentPeriod.name;
    periodInfoText = minutesLeft ? minutesLeft + " minutes left" : "";
  } else {
    displayText = "No period right now.";
    periodInfoText = "Go do your homework!";
  }

  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <div className="wrapper">
            <div className="main">
              <PeriodDisplay period={displayText} periodInfo={periodInfoText} />
            </div>
            <div className="footer">Made with ☕ by Mr. Alschuler</div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
