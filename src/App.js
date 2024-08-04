import "./layout.scss";
import HomePage from "./routes/HomePage/Home";
import NavBar from "./components/NavBar/navBar";

function App() {
  return (
    <div className="layout">
      <div className="navebar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
