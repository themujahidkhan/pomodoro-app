import React from "react";

function RightSidebar() {
  return (
    <div>
      <div className="task-section">
        <div>
          <h1>Tasks</h1>
          <input type="text" placeholder="Build frontend ..." />
        </div>
        <div className="tasks">
          <ul>
            <li>Task1</li>
          </ul>
        </div>
        <div>
          <h1>Completed Tasks</h1>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
