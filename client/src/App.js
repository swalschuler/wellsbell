import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import PeriodDisplay from "./components/PeriodDisplay";
import { FetchScheduleEffect } from "./firebase/firebase";
import useStore from "./state/store";
import Icons from "./components/Icons";

export default function App() {
  const grade = useStore((state) => state.checked);
  const { currentPeriod, minutesLeft } = FetchScheduleEffect(grade ? 7 : 6);

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
        {/* <Route path="/admin">
          <Admin />
        </Route> */}
        <Route path="/">
          <div className="wrapper">
            <div className="header">
              <Icons grade={grade} />
            </div>
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
