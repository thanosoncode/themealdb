import React from "react";
import { useGlobalContext } from "../context";
import { flags } from "./flags";
import SelectedArea from "./SelectedArea";
import AreaLoading from "./AreaLoading";
import { FaTimes } from "react-icons/fa";

const Areas = () => {
  const {
    setAreaValue,
    byAreaLoading,
    setIsOpenAreas,
    isOpenAreas,
    closeSection,
  } = useGlobalContext();
  return (
    <>
      <h4 className="section-title">Browse Areas</h4>
      <div className="areas-container">
        {flags.map((flag, index) => {
          return (
            <div key={index}>
              <img
                src={flag.image}
                alt={flag.name}
                onClick={() => {
                  setIsOpenAreas(true);
                  setAreaValue(flag.name);
                }}
              />
            </div>
          );
        })}
        {isOpenAreas && (
          <button
            className="close-section-btn"
            onClick={() => closeSection("areas")}
          >
            <span>
              <FaTimes />
            </span>
          </button>
        )}
      </div>
      {byAreaLoading ? <AreaLoading /> : <SelectedArea />}
    </>
  );
};

export default Areas;
