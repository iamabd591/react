import "./SignUp.scss";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

function SignUp() {
  return (
    <>
      <div className="navebar">
        <NavBar />
      </div>
      <div className="signup"></div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default SignUp;
