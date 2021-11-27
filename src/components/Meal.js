import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ item }) => {
  return (
    <div
      className="selected-category-item"
      onClick={() => console.log(item.idMeal)}
    >
      <Link to={`/meal/${item.idMeal}`}>
        <div className="img-container">
          <img src={item.strMealThumb} alt={item.strMeal} />
        </div>

        <p>{item.strMeal}</p>
      </Link>
    </div>
  );
};

export default Meal;
