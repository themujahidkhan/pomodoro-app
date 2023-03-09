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
    <div className="border-4 border-y-black hidden sm:flex">
      <div className="task-section space-y-4">
        <form onSubmit={addTask}>
          <h4 className="text-4xl">Tasks</h4>
          <input
            className="border-2 border-orange-200 indent-4 p-1 "
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Build frontend ..."
          />
        </form>
        <div className="tasks">
          <h5 className="text-2xl">Incomplete Tasks</h5>

          {incompleteTasks.length === 0 ? (
            "No Pending tasks"
          ) : (
            <TaskList tasks={incompleteTasks} toggleComplete={toggleComplete} />
          )}
        </div>
        <div>
          <h5 className="text-2xl">Completed Tasks</h5>
          <TaskList tasks={completedTasks} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
