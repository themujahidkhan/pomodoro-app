import React, { useState } from "react";

function TaskList({ tasks, toggleComplete }) {
  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className="tasks">{todo.name}</span>
        </li>
      ))}
    </ul>
  );
}

function RightSidebar() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos ? savedTodos : [];
  });
  const [taskName, setTaskName] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskName === "") {
      return;
    }
    const newTask = {
      id: todos.length + 1,
      name: taskName,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setTaskName("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const completedTasks = todos.filter((todo) => todo.completed);
  const incompleteTasks = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <div className="task-section">
        <form onSubmit={addTask}>
          <h1>Tasks</h1>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Build frontend ..."
          />
        </form>
        <div className="tasks">
          <h2>Incomplete Tasks</h2>
          <TaskList tasks={incompleteTasks} toggleComplete={toggleComplete} />
        </div>
        <div>
          <h2>Completed Tasks</h2>
          <TaskList tasks={completedTasks} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
