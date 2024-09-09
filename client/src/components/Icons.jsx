import React from "react";
import Toggle from "react-toggle";
import useStore from "../state/store";
import "react-toggle/style.css";

const Icons = ({ grade }) => {
  const toggle = useStore((state) => state.toggle);

  return (
    <div>
      <span style={{ paddingRight: "10px" }}>
        {grade ? "7/8th grade schedule" : "6th grade schedule"}
      </span>
      <Toggle
        className="gradeToggle"
        checked={grade}
        onChange={toggle}
        icons={{
          checked: null,
          unchecked: null,
        }}
      />
    </div>
  );
};

export default Icons;
