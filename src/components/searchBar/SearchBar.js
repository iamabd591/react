import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const ToggleType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => ToggleType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={100000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={100000}
        />
        <button className="serachBtn">
          <img src="/search.png" alt="searchbtn" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
