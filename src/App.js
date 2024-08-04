import "./layout.scss";
import HomePage from "./routes/HomePage/Home";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="layout">
      <div className="navebar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
