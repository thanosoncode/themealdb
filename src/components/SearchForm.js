import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchValue, fetchMeals } = useGlobalContext();

  return (
    <>
      <div className="searchform-container">
        <form onSubmit={fetchMeals}>
          <div className="input-div">
            <input
              type="text"
              placeholder="Search for a meal..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </form>

        <div className="stats">
          <div className="stats-item">
            <span>🍲</span>
            <p>Total Meals: 283</p>
          </div>
          <div className="stats-item">
            <span>🍉</span>
            <p>Total Ingredients: 574</p>
          </div>
          <div className="stats-item">
            <span>🖼️</span>
            <p> Images: 283</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
