import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";

const Meals = () => {
  const { meals } = useGlobalContext();

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
};

export default Meals;
