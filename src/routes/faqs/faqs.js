import "./faqs.scss";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";
function Faqs() {
  return (
    <>
      <div className="navebar">
        <NavBar />
      </div>
      <div className="faqs">
        <h1>FAQS</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Faqs;
