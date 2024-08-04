import SearchBar from "../../components/searchBar/SearchBar";
import "./Home.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wapper">
          <h1 className="title">Find Real E State & Your Dream Home</h1>
          <p className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <SearchBar />
          <div className="mainBox">
            <div className="boxContainer">
              <h2>15+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="boxContainer">
              <h2>200+</h2>
              <p>Project Completed</p>
            </div>
            <div className="boxContainer">
              <h2>15000+</h2>
              <p>Properties</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="background" />
      </div>
    </div>
  );
}
export default HomePage;
