import Intro from "./components/intro/intro";
import Topbar from "./components/topbar/topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro/>
      </div>
    </div>
  );
}

export default App;
