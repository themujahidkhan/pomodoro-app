import React, { useState } from "react";

import deleteIcon from "../assets/deleteIcon.svg";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((todo) => (
        <li
          key={todo.id}
          className="bg-white rounded-lg flex items-center justify-between p-2 my-2 text-black first:my-3 last:my-4"
        >
          <div>
            <input
              className="default:ring-1 mx-2 "
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              className={
                todo.completed === true ? "line-through" : "tasks text-lg"
              }
            >
              {todo.name}
            </span>
          </div>
          <div
            className="items-center cursor-pointer"
            onClick={() => deleteTask(todo.id)}
          >
            <img src={deleteIcon} className="h-5 px-8 " />
          </div>
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

  function deleteTask(id) {
    setTodos((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

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
    <div className="h-full w-full justify-center flex flex-col">
      <div className="task-section bg-gray-300 text-white  rounded-lg bg-opacity-20 py-8 px-8 h-4/5">
        <form onSubmit={addTask}>
          <h2 className="text-4xl my-2 font-bold ">Tasks</h2>
          <input
            className="bg-transparent focus:bg-white text-black focus:placeholder:text-slate-500 placeholder:text-slate-300 border-white border-4 indent-4  p-2 w-80 text-lg rounded my-2"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Add tasks to focus on"
          />
        </form>
        <div className="tasks">
          <h3 className="text-2xl my-2 font-semibold text-red-3 00">
            Incomplete Tasks
          </h3>
          {incompleteTasks.length === 0 ? (
            <p className="my-8 text-md">
              No pending tasks, add one to complete
            </p>
          ) : (
            <TaskList
              tasks={incompleteTasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          )}
        </div>
        <div>
          <h3 className="text-2xl my-2 font-semibold text-green-300">
            Completed Tasks
          </h3>
          <TaskList
            tasks={completedTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
