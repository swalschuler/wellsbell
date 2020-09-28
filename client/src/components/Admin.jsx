import React from "react";

const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>

      <div>
        <text>Schedule name: </text>
        <input type="text" />
      </div>

      <div>
        <text>Period text: </text>
        <input type="text" />
      </div>

      <div>
        <text>Info: </text>
        <input type="text" />
      </div>

      <div>
        <text>Start hour: </text>
        <input type="text" />
      </div>
      <div>
        <text>Start minute: </text>
        <input type="text" />
      </div>

      <div>
        <text>End hour: </text>
        <input type="text" />
      </div>
      <div>
        <text>End minute: </text>
        <input type="text" />
      </div>

      <button>Add</button>
      <text>Ready? {"\n"}</text>
      <button>Upload</button>
    </div>
  );
};

export default Admin;
