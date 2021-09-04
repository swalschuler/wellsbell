import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

const Icons = ({ grade, setGrade }) => {
  const handleGradeToggle = (e) => {
    setGrade(e.target.checked);
  };
  return (
    <div>
      <span style={{ paddingRight: "10px" }}>
        {grade ? "7/8th grade schedule" : "6th grade schedule"}
      </span>
      <Toggle
        className="gradeToggle"
        checked={grade}
        onChange={handleGradeToggle}
        icons={{
          checked: null,
          unchecked: null,
        }}
      />
    </div>
  );
};

export default Icons;
