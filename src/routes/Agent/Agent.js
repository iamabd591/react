import "./Agent.scss";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";

function Agent() {
  return (
    <>
      <div className="agent">
        <div className="navebar">
          <NavBar />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Agent;
