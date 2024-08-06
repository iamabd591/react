import "./SignIn.scss";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

function SignIn() {
  return (
    <>
      <div className="navebar">
        <NavBar />
      </div>
      <div className="signin"></div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default SignIn;
