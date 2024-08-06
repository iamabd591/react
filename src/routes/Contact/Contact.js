import "./Contact.scss";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";

function Contact() {
  return (
    <>
      <div className="contact">
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
export default Contact;
