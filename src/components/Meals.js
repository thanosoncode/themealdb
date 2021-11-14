import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";

const Meals = () => {
  const { meals } = useGlobalContext();
  if (!meals) {
    return (
      <h5 className="no-result">
        No results with these criteria. Please search again.
      </h5>
    );
  } else {
    return (
      <>
        <div className="selected-category">
          {meals &&
            meals.map((item, index) => {
              return <Meal key={index} item={item} />;
            })}
        </div>
        <div className="horizontal-line"></div>
      </>
    );
  }
};

export default Meals;
