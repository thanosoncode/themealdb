import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";

const SelectedCategory = () => {
  const { selectedCategory } = useGlobalContext();
  return (
    <div className="selected-category">
      {selectedCategory &&
        selectedCategory.map((item, index) => {
          return <Meal key={index} item={item} />;
        })}
    </div>
  );
};

export default SelectedCategory;
