import React from "react";

function RightSidebar() {
  return (
    <div>
      <div className="task-section">
        <div>
          <h1>Tasks</h1>
          <input type="text" placeholder="Build frontend ..." />
        </div>
        <div>
          <ul>
            <li>Task1</li>
            <li>Task2</li>
            <li>Task3</li>
          </ul>
        </div>
        <div>
          <h1>Completed Tasks</h1>
          <div>
            <li>Task X</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
