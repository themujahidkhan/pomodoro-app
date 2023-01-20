import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LeftSidebar />
        <Timer />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
