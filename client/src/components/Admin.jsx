import React, { useState } from "react";
import { addSchedule, copySchedule } from "../firebase/firebase";

const Admin = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [scheduleName, setScheduleName] = useState("");
  const [periodInfo, setPeriodInfo] = useState({
    name: "",
    info: "",
    start: {
      hour: 0,
      minute: 0,
    },
    end: {
      hour: 0,
      minute: 0,
    },
  });

  const onAdd = () => {};

  return (
    <div>
      <h1>Admin</h1>

      <div>
        <text>Schedule name: </text>
        <input
          type="text"
          value={scheduleName}
          onChange={(e) => setScheduleName(e.target.value)}
        />
      </div>

      <div>
        <text>Period text: </text>
        <input
          type="text"
          value={periodInfo.name}
          onChange={(e) =>
            setPeriodInfo({ ...periodInfo, name: e.target.value })
          }
        />
      </div>

      <div>
        <text>Info: </text>
        <input
          type="text"
          value={periodInfo.info}
          onChange={(e) =>
            setPeriodInfo({ ...periodInfo, info: e.target.value })
          }
        />
      </div>

      <div>
        <text>Start hour: </text>
        <input
          type="text"
          value={periodInfo.start.hour}
          onChange={(e) =>
            setPeriodInfo({
              ...periodInfo,
              start: { ...periodInfo.start, hour: e.target.value },
            })
          }
        />
      </div>
      <div>
        <text>Start minute: </text>
        <input
          type="text"
          value={periodInfo.start.minute}
          onChange={(e) =>
            setPeriodInfo({
              ...periodInfo,
              start: { ...periodInfo.start, minute: e.target.value },
            })
          }
        />
      </div>

      <div>
        <text>End hour: </text>
        <input
          type="text"
          value={periodInfo.end.hour}
          onChange={(e) =>
            setPeriodInfo({
              ...periodInfo,
              end: { ...periodInfo.end, hour: e.target.value },
            })
          }
        />
      </div>
      <div>
        <text>End minute: </text>
        <input
          type="text"
          value={periodInfo.end.minute}
          onChange={(e) =>
            setPeriodInfo({
              ...periodInfo,
              end: { ...periodInfo.end, minute: e.target.value },
            })
          }
        />
      </div>

      <button
        onClick={() => {
          setScheduleList([
            ...scheduleList,
            {
              name: periodInfo.name,
              info: periodInfo.info,
              start: {
                hour: periodInfo.start.hour,
                minute: periodInfo.start.minute,
              },
              end: {
                hour: periodInfo.end.hour,
                minute: periodInfo.end.minute,
              },
            },
          ]);
        }}
      >
        Add
      </button>
      <text>Ready? {"\n"}</text>
      <button
        onClick={() => {
          addSchedule(scheduleName, scheduleList);
        }}
      >
        Upload
      </button>

      <button onClick={copySchedule}>Copy schedule test </button>
    </div>
  );
};

export default Admin;
