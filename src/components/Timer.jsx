import { useEffect, useRef, useState } from "react";

import lofiAudio from "../assets/lofi.wav";
import lofiIcon from "../assets/lofi-icon.png";
import logo from "../assets/logo.svg";
import natureAudio from "../assets/nature.wav";
import natureIcon from "../assets/nature-icon.png";
import whiteNoiseAudio from "../assets/white-noise.wav";
import whiteNoiseIcon from "../assets/whitenoise-icon.png";

function Header() {
  return (
    <div className="navbar">
      <div className="site-logo">
        <img src={logo} />
      </div>
      <div className="nav-links">
        <a href="">What is Pomodoro Technique?</a>
      </div>
    </div>
  );
}

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

          {incompleteTasks.length === 0 ? (
            "No Pending tasks"
          ) : (
            <TaskList tasks={incompleteTasks} toggleComplete={toggleComplete} />
          )}
        </div>
        <div>
          <h2>Completed Tasks</h2>
          <TaskList tasks={completedTasks} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

function LeftSidebar() {
  const lofiRef = useRef();
  const natureRef = useRef();
  const whiteNoiseRef = useRef();

  const [lofiPlaying, setLofiPlaying] = useState(false);
  const [naturePlaying, setNaturePlaying] = useState(false);
  const [whiteNoisePlaying, setWhiteNoisePlaying] = useState(false);

  const handleLofiClick = () => {
    if (lofiPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current.play();
    }
    setLofiPlaying(!lofiPlaying);
  };

  const handleNatureClick = () => {
    if (naturePlaying) {
      natureRef.current.pause();
    } else {
      natureRef.current.play();
    }
    setNaturePlaying(!naturePlaying);
  };

  const handleWhiteNoiseClick = () => {
    if (whiteNoisePlaying) {
      whiteNoiseRef.current.pause();
    } else {
      whiteNoiseRef.current.play();
    }
    setWhiteNoisePlaying(!whiteNoisePlaying);
  };

  return (
    <div>
      <div className="music-wrapper">
        <h2 className="text-3xl font-bold mb-8">Listen Music</h2>
        <div className="music-card flex space-x-8  items-center">
          <div
            className="card-nature bg-green-400 w-16 h-16 p-2 rounded-lg"
            onClick={handleNatureClick}
          >
            <img src={natureIcon} alt="nature icon" />
            <p>Nature Music</p>
          </div>
          <audio src={natureAudio} ref={natureRef} />
          <div
            className="card-lofi bg-orange-300 w-16 h-16 p-2 rounded-lg"
            onClick={handleLofiClick}
          >
            <img src={lofiIcon} alt="nature icon" />
            <p>Lofi Music</p>
          </div>
          <audio src={lofiAudio} ref={lofiRef} />
          <div
            className="card-whiteNoise bg-gray-400 w-16 h-16 p-2 rounded-lg"
            onClick={handleWhiteNoiseClick}
          >
            <img src={whiteNoiseIcon} alt="white noise icon" />
            <p>White noise</p>
          </div>
          <audio src={whiteNoiseAudio} ref={whiteNoiseRef} />
        </div>
      </div>
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(1500);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => (time >= 1 ? time - 1 : 0));
        const progressValue = Math.floor(((1500 - time) / 1500) * 100);
        setProgress(progressValue);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive, reset]);

  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  // It will start, and stop the timer
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  // It will reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
    setProgress(0);
  };

  return (
    <div className="grid grid-cols-3 container mx-auto mt-8">
      <div>
        <LeftSidebar />
      </div>
      <div className="timer-wrapper">
        <div style={{ backgroundColor: "#ccc" }}>
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
        <div className="top-tab">
          <button className="btn-pomodoro">Pomodoro</button>
          <button className="btn-shortBreak">Short Break</button>
          <button className="btn-longBreak">Long Break</button>
        </div>

        <h1 className="displayTimer">{getTime(time)}</h1>

        <div className="bottom-tab">
          <button
            className="btn-start"
            style={{
              backgroundColor: isActive ? "orange" : "green",
              color: "white",
            }}
            onClick={toggleActive}
          >
            {isActive ? "Pause" : "Start"}
          </button>

          <button className="btn-reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}

export default Timer;
