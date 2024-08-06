import "./About.scss";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

function About() {
  return (
    <>
      <div className="about">
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
export default About;
