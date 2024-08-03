import "./layout.scss";
import NavBar from "./components/NavBar/navBar";
import HomePage from "./routes/HomePage/Home";

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
