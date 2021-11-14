import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";

const SelectedArea = () => {
  const { selectedArea } = useGlobalContext();

  return (
    <div className="selected-category">
      {selectedArea &&
        selectedArea.map((item, index) => {
          return <Meal key={index} item={item} />;
        })}
    </div>
  );
};

export default SelectedArea;
