import "./PageNotFound.scss";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

function pageNotFound() {
  return (
    <>
      <div className="navebar">
        <NavBar />
      </div>
      <div className="pageNotFound">
        <h1>Page Not Found</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default pageNotFound;
